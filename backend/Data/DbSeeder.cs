using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public static class DbSeeder
{
    public static async Task SeedAsync(AppDbContext db)
    {
        if (await db.WorldThemes.AnyAsync()) return;

        // ── World Theme ──────────────────────────────────────────────
        var cretaceous = new WorldTheme
        {
            Name            = "Cretaceous World",
            Slug            = "cretaceous-world",
            BackgroundColor = "#0d1a0d",
            AccentColor     = "#c8860a",
        };
        db.WorldThemes.Add(cretaceous);

        // ── Story ────────────────────────────────────────────────────
        var story = new Story
        {
            Title        = "The Day the Giants Left",
            Subtitle     = "How the dinosaurs disappeared",
            AgeRange     = "Ages 3–7",
            ReadTime     = "~8 min read aloud",
            IsPublished  = true,
            WorldTheme   = cretaceous,
        };
        db.Stories.Add(story);

        // ── Cards ────────────────────────────────────────────────────
        var cards = new[]
        {
            new Card
            {
                Story         = story,
                CardOrder     = 1,
                SceneId       = "scene-0",
                HotspotX      = 38,
                HotspotY      = 52,
                NarrativeText = "66 million years ago, Earth was ruled by enormous reptiles. " +
                                "Triceratops walked through forests much larger and older than any forest alive today.",
                ScienceFact   = "Triceratops (try-SER-uh-tops) lived during the very end of the Cretaceous period, " +
                                "68–66 million years ago. It could weigh up to 12 tonnes — heavier than two elephants.",
                ParentNote    = "Ask your child: 'How do you think scientists know what these animals looked like?' " +
                                "— fossils preserve bones, and we can study living reptiles to estimate the rest.",
            },
            new Card
            {
                Story         = story,
                CardOrder     = 2,
                SceneId       = "scene-1",
                HotspotX      = 50,
                HotspotY      = 65,
                NarrativeText = "Then something extraordinary happened. A rock the size of a mountain — " +
                                "called an asteroid — came hurtling through space toward Earth.",
                ScienceFact   = "The Chicxulub asteroid was approximately 10–15 kilometres wide. " +
                                "When it entered Earth's atmosphere, it was travelling at roughly 20 kilometres per second " +
                                "— 60 times faster than a bullet.",
                ParentNote    = "Pause here. Ask: 'If a rock that big hit our town, how far away do you think we would feel it?' " +
                                "The real answer: the entire planet felt it.",
            },
            new Card
            {
                Story         = story,
                CardOrder     = 3,
                SceneId       = "scene-2",
                HotspotX      = 50,
                HotspotY      = 60,
                NarrativeText = "The asteroid hit the ocean near what is now Mexico. " +
                                "The impact was so powerful it threw billions of tonnes of dust and rock into the sky.",
                ScienceFact   = "The impact site, called the Chicxulub crater, is buried beneath the Gulf of Mexico. " +
                                "It is 180 kilometres wide. The explosion released energy a billion times greater than " +
                                "the largest nuclear bomb ever tested.",
                ParentNote    = "Chicxulub is pronounced 'CHEEK-shoo-loob' — a Mayan word. " +
                                "The crater was only discovered in the 1990s, hidden under the sea floor.",
            },
            new Card
            {
                Story         = story,
                CardOrder     = 4,
                SceneId       = "scene-3",
                HotspotX      = 50,
                HotspotY      = 40,
                NarrativeText = "The dust and smoke spread around the entire planet and blocked the sunlight. " +
                                "Without sunlight, plants stopped growing. The world grew dark and cold.",
                ScienceFact   = "Scientists call this period 'impact winter.' Global temperatures dropped by as much as " +
                                "15–20°C. The darkness lasted for months to years. Without plants, the entire food chain collapsed.",
                ParentNote    = "This is the hardest concept for young children — the chain reaction. You can explain it simply: " +
                                "'Plants need sun. Animals eat plants. When plants died, plant-eaters starved. " +
                                "Then meat-eaters had nothing left either.'",
            },
            new Card
            {
                Story         = story,
                CardOrder     = 5,
                SceneId       = "scene-4",
                HotspotX      = 50,
                HotspotY      = 58,
                NarrativeText = "Most large animals could not survive without food. " +
                                "But small creatures — hiding underground, eating seeds and insects — had a chance.",
                ScienceFact   = "Small feathered dinosaurs and early mammals were able to survive because they needed " +
                                "very little food, could burrow for warmth, and could eat seeds that remained preserved " +
                                "in the soil even after months of darkness.",
                ParentNote    = "The survivors were our ancestors — early mammals no bigger than a modern shrew. " +
                                "Ask: 'If you had to survive a very long winter underground, what would you want to bring?'",
            },
            new Card
            {
                Story         = story,
                CardOrder     = 6,
                SceneId       = "scene-5",
                HotspotX      = 55,
                HotspotY      = 42,
                NarrativeText = "The small feathered dinosaurs that survived eventually became the birds we see today. " +
                                "Every sparrow, eagle, and penguin alive right now is a living dinosaur.",
                ScienceFact   = "Birds are the only living descendants of non-avian dinosaurs. " +
                                "The common sparrow (Passer domesticus) shares bone structures, feather chemistry, " +
                                "and egg biology with theropod dinosaurs — the same group as Tyrannosaurus rex.",
                ParentNote    = "End with this: next time you see a pigeon or a sparrow, your child is looking at a direct " +
                                "descendant of the animals that outlasted the mass extinction. That is genuinely remarkable.",
            },
        };
        db.Cards.AddRange(cards);

        // ── Story Links (unlocked after completing this story) ────────
        var links = new[]
        {
            new StoryLink
            {
                SourceStory  = story,
                WorldLabel   = "Deep Space",
                StoryTitle   = "Asteroids & Meteorites",
                DotColor     = "#8b5cf6",
                TargetStory  = null,
            },
            new StoryLink
            {
                SourceStory  = story,
                WorldLabel   = "Sky & Wings",
                StoryTitle   = "The First Birds",
                DotColor     = "#22c55e",
                TargetStory  = null,
            },
            new StoryLink
            {
                SourceStory  = story,
                WorldLabel   = "The Green World",
                StoryTitle   = "Sunlight & Food",
                DotColor     = "#eab308",
                TargetStory  = null,
            },
        };
        db.StoryLinks.AddRange(links);

        await db.SaveChangesAsync();
    }
}
