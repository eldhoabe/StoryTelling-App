using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class InitialSchema : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "WorldThemes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Slug = table.Column<string>(type: "TEXT", nullable: false),
                    BackgroundColor = table.Column<string>(type: "TEXT", nullable: false),
                    AccentColor = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WorldThemes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Stories",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", nullable: false),
                    Subtitle = table.Column<string>(type: "TEXT", nullable: false),
                    AgeRange = table.Column<string>(type: "TEXT", nullable: false),
                    ReadTime = table.Column<string>(type: "TEXT", nullable: false),
                    IsPublished = table.Column<bool>(type: "INTEGER", nullable: false),
                    WorldThemeId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Stories_WorldThemes_WorldThemeId",
                        column: x => x.WorldThemeId,
                        principalTable: "WorldThemes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Cards",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    StoryId = table.Column<int>(type: "INTEGER", nullable: false),
                    CardOrder = table.Column<int>(type: "INTEGER", nullable: false),
                    NarrativeText = table.Column<string>(type: "TEXT", nullable: false),
                    ScienceFact = table.Column<string>(type: "TEXT", nullable: false),
                    ParentNote = table.Column<string>(type: "TEXT", nullable: false),
                    HotspotX = table.Column<double>(type: "REAL", nullable: false),
                    HotspotY = table.Column<double>(type: "REAL", nullable: false),
                    SceneId = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cards", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Cards_Stories_StoryId",
                        column: x => x.StoryId,
                        principalTable: "Stories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "StoryLinks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    SourceStoryId = table.Column<int>(type: "INTEGER", nullable: false),
                    WorldLabel = table.Column<string>(type: "TEXT", nullable: false),
                    StoryTitle = table.Column<string>(type: "TEXT", nullable: false),
                    DotColor = table.Column<string>(type: "TEXT", nullable: false),
                    TargetStoryId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StoryLinks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StoryLinks_Stories_SourceStoryId",
                        column: x => x.SourceStoryId,
                        principalTable: "Stories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_StoryLinks_Stories_TargetStoryId",
                        column: x => x.TargetStoryId,
                        principalTable: "Stories",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.SetNull);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Cards_StoryId_CardOrder",
                table: "Cards",
                columns: new[] { "StoryId", "CardOrder" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Stories_WorldThemeId",
                table: "Stories",
                column: "WorldThemeId");

            migrationBuilder.CreateIndex(
                name: "IX_StoryLinks_SourceStoryId",
                table: "StoryLinks",
                column: "SourceStoryId");

            migrationBuilder.CreateIndex(
                name: "IX_StoryLinks_TargetStoryId",
                table: "StoryLinks",
                column: "TargetStoryId");

            migrationBuilder.CreateIndex(
                name: "IX_WorldThemes_Slug",
                table: "WorldThemes",
                column: "Slug",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cards");

            migrationBuilder.DropTable(
                name: "StoryLinks");

            migrationBuilder.DropTable(
                name: "Stories");

            migrationBuilder.DropTable(
                name: "WorldThemes");
        }
    }
}
