using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<WorldTheme> WorldThemes => Set<WorldTheme>();
    public DbSet<Story>      Stories     => Set<Story>();
    public DbSet<Card>       Cards       => Set<Card>();
    public DbSet<StoryLink>  StoryLinks  => Set<StoryLink>();

    protected override void OnModelCreating(ModelBuilder mb)
    {
        mb.Entity<WorldTheme>(e =>
        {
            e.HasIndex(t => t.Slug).IsUnique();
        });

        mb.Entity<Story>(e =>
        {
            e.HasOne(s => s.WorldTheme)
             .WithMany(t => t.Stories)
             .HasForeignKey(s => s.WorldThemeId)
             .OnDelete(DeleteBehavior.Restrict);
        });

        mb.Entity<Card>(e =>
        {
            e.HasOne(c => c.Story)
             .WithMany(s => s.Cards)
             .HasForeignKey(c => c.StoryId)
             .OnDelete(DeleteBehavior.Cascade);

            e.HasIndex(c => new { c.StoryId, c.CardOrder }).IsUnique();
        });

        mb.Entity<StoryLink>(e =>
        {
            e.HasOne(l => l.SourceStory)
             .WithMany(s => s.Unlocks)
             .HasForeignKey(l => l.SourceStoryId)
             .OnDelete(DeleteBehavior.Cascade);

            e.HasOne(l => l.TargetStory)
             .WithMany(s => s.UnlockedBy)
             .HasForeignKey(l => l.TargetStoryId)
             .OnDelete(DeleteBehavior.SetNull)
             .IsRequired(false);
        });
    }
}
