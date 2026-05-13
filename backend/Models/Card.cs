namespace backend.Models;

public class Card
{
    public int Id { get; set; }
    public int StoryId { get; set; }
    public Story Story { get; set; } = null!;

    public int CardOrder { get; set; }
    public string NarrativeText { get; set; } = string.Empty;
    public string ScienceFact { get; set; } = string.Empty;
    public string ParentNote { get; set; } = string.Empty;
    public double HotspotX { get; set; }
    public double HotspotY { get; set; }
    public string SceneId { get; set; } = string.Empty;
}
