namespace backend.Models;

public class StoryLink
{
    public int Id { get; set; }

    // The story that, when completed, surfaces this link
    public int SourceStoryId { get; set; }
    public Story SourceStory { get; set; } = null!;

    // Display text shown on the end screen
    public string WorldLabel { get; set; } = string.Empty;
    public string StoryTitle { get; set; } = string.Empty;
    public string DotColor { get; set; } = string.Empty;

    // Null until the target story is published
    public int? TargetStoryId { get; set; }
    public Story? TargetStory { get; set; }
}
