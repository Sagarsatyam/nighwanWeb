namespace NighwanChatAPI.Models
{
    public class ChatMessage
    {
        public string Query { get; set; } = string.Empty;
    }

    public class ChatResponse
    {
        public string Response { get; set; } = string.Empty;
    }

    public class KnowledgeBaseEntry
    {
        public string Question { get; set; } = string.Empty;
        public string Answer { get; set; } = string.Empty;
    }
}
