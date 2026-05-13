namespace backend.Models;

public class Story
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Subtitle { get; set; } = string.Empty;
    public string AgeRange { get; set; } = string.Empty;
    public string ReadTime { get; set; } = string.Empty;
    public bool IsPublished { get; set; }

    public int WorldThemeId { get; set; }
    public WorldTheme WorldTheme { get; set; } = null!;

    public ICollection<Card> Cards { get; set; } = [];
    public ICollection<StoryLink> UnlockedBy { get; set; } = [];
    public ICollection<StoryLink> Unlocks { get; set; } = [];
}
