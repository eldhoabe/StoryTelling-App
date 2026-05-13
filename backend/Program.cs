using backend.Data;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
    ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");

if (builder.Environment.IsDevelopment())
    builder.Services.AddDbContext<AppDbContext>(o => o.UseSqlite(connectionString));
else
    builder.Services.AddDbContext<AppDbContext>(o => o.UseNpgsql(connectionString));

builder.Services.ConfigureHttpJsonOptions(options =>
    options.SerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

builder.Services.AddCors(options =>
    options.AddDefaultPolicy(policy =>
        policy
            .WithOrigins(
                "http://localhost:8081",   // Expo web dev server
                "http://localhost:19006",  // Expo web (older versions)
                "http://localhost:5173"    // Vite / web fallback
            )
            .AllowAnyMethod()
            .AllowAnyHeader()));

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.Migrate();
    await DbSeeder.SeedAsync(db);
}

app.UseCors();
app.UseHttpsRedirection();

var api = app.MapGroup("/api");

api.MapGet("/themes", async (AppDbContext db) =>
    await db.WorldThemes.ToListAsync());

api.MapGet("/stories", async (AppDbContext db) =>
    await db.Stories
        .Include(s => s.WorldTheme)
        .ToListAsync());

api.MapGet("/stories/{id:int}", async (int id, AppDbContext db) =>
{
    var story = await db.Stories
        .Include(s => s.WorldTheme)
        .Include(s => s.Cards.OrderBy(c => c.CardOrder))
        .Include(s => s.Unlocks)
        .FirstOrDefaultAsync(s => s.Id == id);

    return story is null ? Results.NotFound() : Results.Ok(story);
});

api.MapGet("/stories/{storyId:int}/cards", async (int storyId, AppDbContext db) =>
    await db.Cards
        .Where(c => c.StoryId == storyId)
        .OrderBy(c => c.CardOrder)
        .ToListAsync());

api.MapGet("/stories/{storyId:int}/links", async (int storyId, AppDbContext db) =>
    await db.StoryLinks
        .Where(l => l.SourceStoryId == storyId)
        .ToListAsync());

app.Run();
