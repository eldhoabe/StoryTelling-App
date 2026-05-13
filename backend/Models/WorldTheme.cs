namespace backend.Models;

public class WorldTheme
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Slug { get; set; } = string.Empty;
    public string BackgroundColor { get; set; } = string.Empty;
    public string AccentColor { get; set; } = string.Empty;

    public ICollection<Story> Stories { get; set; } = [];
}
