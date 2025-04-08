using NighwanChatAPI.Models;
using System.Text.RegularExpressions;
using System.Text.Json;
using System.Net.Http.Headers;

namespace NighwanChatAPI.Services
{
    public interface IChatbotService
    {
        Task<string> ProcessQueryAsync(string query);
    }

    public class ChatbotService : IChatbotService
    {
        private readonly List<KnowledgeBaseEntry> _knowledgeBase;
        private readonly string _geminiApiKey;
        private readonly ILogger<ChatbotService> _logger;
        private readonly HttpClient _httpClient;

        public ChatbotService(IConfiguration configuration, ILogger<ChatbotService> logger, IHttpClientFactory httpClientFactory)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
            _geminiApiKey = configuration["GeminiApiKey"] ?? throw new ArgumentException("GeminiApiKey not found in configuration");
            _httpClient = httpClientFactory.CreateClient();
            _knowledgeBase = InitializeKnowledgeBase();
        }

        private List<KnowledgeBaseEntry> InitializeKnowledgeBase()
        {
            return new List<KnowledgeBaseEntry>
            {
                new() { Question = "hi,HI,hello", Answer = "Hello! How can I assist you today?" },
                new() { Question = "What is Nighwan Technology?", Answer = "Nighwan Technology integrates AI, ML, and lean manufacturing to transform businesses, optimize operations, reduce costs, and drive sustainable growth." },
                new() { Question = "What makes Nighwan Technology unique?", Answer = "Our blend of AI/ML innovation, lean consultancy, customer-first approach, and scalable solutions sets us apart from other IT companies." },
                new() { Question = "How can I contact Nighwan Technology?", Answer = "Reach us via our website's contact form, email at contact@nighwantech.com, or call +91 8985025794. Our support team responds within 2 minutes!" },
                new() { Question = "Where is Nighwan Technology located?", Answer = "Our registered office is in Gaya, India. We have a global presence with over 150 successful projects worldwide." },
                new() { Question = "What services does Nighwan Technology offer?", Answer = "We offer Lean Consultancy, Branding, ERP Development, AI/ML Solutions, Web/Mobile App Development, Data Analytics, IoT Solutions, Digital Marketing, IT Support & Maintenance, and DevOps Services." },
                // Add more entries as needed
            };
        }

        private bool IsGreeting(string query)
        {
            var greetings = new[] { "hi", "hello", "hey", "namaste", "hii" };
            return greetings.Contains(query.ToLower().Trim());
        }

        private bool IsGeneralQuestion(string query)
        {
            // Never treat Nighwan-related questions as general questions
            if (query.ToLower().Contains("nighwan"))
                return false;

            // Check if it's a math question
            if (Regex.IsMatch(query, @"\d+\s*[\+\-\*\/]\s*\d+"))
                return true;

            // Check if it's about current affairs or general knowledge
            var generalTopics = new[] {
                "prime minister", "president", "capital", "population",
                "weather", "temperature", "calculate", "solve"
            };

            return generalTopics.Any(topic => query.ToLower().Contains(topic));
        }

        private List<KnowledgeBaseEntry> RetrieveRelevantDocuments(string query)
        {
            _logger.LogInformation("Searching for relevant documents for query: {Query}", query);

            // First try exact match
            var exactMatch = _knowledgeBase.FirstOrDefault(doc => 
                doc.Question.Equals(query, StringComparison.OrdinalIgnoreCase));
            
            if (exactMatch != null)
            {
                _logger.LogInformation("Found exact match for query");
                return new List<KnowledgeBaseEntry> { exactMatch };
            }

            // Try keyword matching for all queries
            var queryTokens = Tokenize(query.ToLower());
            var relevantDocs = _knowledgeBase.Where(doc =>
            {
                var docTokens = Tokenize((doc.Question + " " + doc.Answer).ToLower());
                return queryTokens.Any(token => docTokens.Contains(token));
            }).ToList();

            _logger.LogInformation("Found {Count} relevant documents", relevantDocs.Count);
            return relevantDocs;
        }

        private IEnumerable<string> Tokenize(string text)
        {
            return Regex.Split(text, @"\W+")
                       .Where(token => !string.IsNullOrWhiteSpace(token))
                       .Select(token => token.ToLower());
        }

        private async Task<string> GetGeminiResponseAsync(string query)
        {
            try
            {
                _logger.LogInformation("Requesting response from Gemini for query: {Query}", query);

                var url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
                
                var requestBody = new
                {
                    contents = new[]
                    {
                        new
                        {
                            parts = new[]
                            {
                                new { text = $"Answer the following question in a helpful and informative way. If it's a math problem, show the solution steps. Keep the answer concise.\n\nQuestion: {query}" }
                            }
                        }
                    }
                };

                var response = await _httpClient.PostAsJsonAsync($"{url}?key={_geminiApiKey}", requestBody);
                
                if (response.StatusCode == System.Net.HttpStatusCode.Unauthorized)
                {
                    _logger.LogError("Unauthorized access to Gemini API. Please check your API key.");
                    return "I apologize, but I'm having trouble accessing my knowledge. Please check with the administrator.";
                }

                response.EnsureSuccessStatusCode();

                var jsonResponse = await response.Content.ReadFromJsonAsync<JsonDocument>();
                var candidates = jsonResponse?.RootElement.GetProperty("candidates")[0];
                var content = candidates?.GetProperty("content");
                var parts = content?.GetProperty("parts")[0];
                var text = parts?.GetProperty("text").GetString();

                if (string.IsNullOrEmpty(text))
                {
                    return "I apologize, but I couldn't generate a response for that question. Could you please rephrase it?";
                }

                return text.Trim();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting response from Gemini: {Message}", ex.Message);
                return "I apologize, but I'm having trouble accessing external knowledge. Let me help you with what I know locally.";
            }
        }

        public async Task<string> ProcessQueryAsync(string query)
        {
            try
            {
                _logger.LogInformation("Processing query: {Query}", query);

                if (IsGreeting(query))
                {
                    return "Hello! How can I assist you today?";
                }

                // First check our knowledge base for all queries
                var relevantDocuments = RetrieveRelevantDocuments(query);
                if (relevantDocuments.Any())
                {
                    if (relevantDocuments.Count == 1)
                    {
                        _logger.LogInformation("Returning single relevant document from knowledge base");
                        return relevantDocuments[0].Answer;
                    }

                    var combinedAnswer = string.Join("\n\n", relevantDocuments.Select(doc => doc.Answer));
                    _logger.LogInformation("Returning combined answer from knowledge base");
                    return combinedAnswer;
                }

                // If not found in knowledge base and it's a general question, use Gemini
                if (IsGeneralQuestion(query))
                {
                    _logger.LogInformation("No relevant documents found in knowledge base, using Gemini");
                    return await GetGeminiResponseAsync(query);
                }

                // If it's not in knowledge base and not a general question, give a helpful response
                return "I apologize, but I don't have specific information about that. Could you please rephrase your question or ask about our services, technology, or company?";
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error processing query: {Query}", query);
                throw;
            }
        }
    }
}
