using Microsoft.AspNetCore.Mvc;
using NighwanChatAPI.Models;
using NighwanChatAPI.Services;

namespace NighwanChatAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatController : ControllerBase
    {
        private readonly IChatbotService _chatbotService;
        private readonly ILogger<ChatController> _logger;

        public ChatController(IChatbotService chatbotService, ILogger<ChatController> logger)
        {
            _chatbotService = chatbotService ?? throw new ArgumentNullException(nameof(chatbotService));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        /// <summary>
        /// Health check endpoint
        /// </summary>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("RAG chatbot API is running");
        }

        /// <summary>
        /// Processes a chat message and returns a response
        /// </summary>
        /// <param name="message">The chat message containing the query</param>
        /// <returns>A response from the chatbot</returns>
        [HttpPost]
        [ProducesResponseType(typeof(ChatResponse), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Post([FromBody] ChatMessage message)
        {
            _logger.LogInformation("Received POST request with message: {@Message}", message);

            if (message == null)
            {
                _logger.LogWarning("Received null message");
                return BadRequest("Message cannot be null");
            }

            if (string.IsNullOrWhiteSpace(message.Query))
            {
                _logger.LogWarning("Received empty query");
                return BadRequest("Query cannot be empty");
            }

            try
            {
                _logger.LogInformation("Processing chat message: {Query}", message.Query);
                var response = await _chatbotService.ProcessQueryAsync(message.Query);
                
                if (string.IsNullOrEmpty(response))
                {
                    _logger.LogWarning("Received empty response from chatbot service");
                    return StatusCode(500, new { error = "Chatbot returned an empty response" });
                }

                _logger.LogInformation("Successfully processed query. Response length: {Length}", response.Length);
                return Ok(new ChatResponse { Response = response });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error processing chat message: {Query}", message.Query);
                return StatusCode(500, new { error = "An error occurred while processing your request", details = ex.Message });
            }
        }
    }
}
