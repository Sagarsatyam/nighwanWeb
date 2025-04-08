using Microsoft.OpenApi.Models;
using NighwanChatAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Set the application to listen on port 6000
builder.WebHost.UseUrls("http://localhost:6000");

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo 
    { 
        Title = "Nighwan Chat API", 
        Version = "v1",
        Description = "A RAG-based chatbot API for Nighwan Technology"
    });
});

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// Add HttpClient
builder.Services.AddHttpClient();

// Add logging
builder.Services.AddLogging();

// Configure Gemini API Key
builder.Configuration["GeminiApiKey"] = "AIzaSyB0G6-wZLoBGU0_lawNlLKKB5cnmUoM8OU"; // Replace with your actual API key

// Add ChatbotService as Singleton
builder.Services.AddSingleton<IChatbotService, ChatbotService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI();

app.UseRouting();

app.UseCors("AllowAll");

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "api/chatbot/{controller=Chat}/{action=Post}/{id?}");
});

app.Run();
