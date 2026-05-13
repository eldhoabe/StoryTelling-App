# BioGraph Stories — Technical Plan
**Version:** 1.0 — Approved for Implementation  
**Stack:** Expo (React + React Native) · ASP.NET Core Web API · PostgreSQL · Vercel · Railway  
**Developer:** Solo  
**Target:** Web + Mobile (iOS/Android via Expo)  
**Monthly Cost:** ~$10–11/mo  

---

## 1. The Big Idea: The Multiverse Theming System

Every story in BioGraph lives inside its own **World** — a fully immersive themed environment. When a child enters the Dinosaur World, the entire UI transforms: the background becomes a Cretaceous jungle, UI panels look like fossil stone slabs, buttons are bones, and particles floating across the screen are ash from the Chicxulub impact. When they enter the Asteroid World, the background is deep space, panels are meteorite rock textures, and the cursor leaves a comet trail.

This is not a skin swap. It is a **contextual design system** — every UI element, font, particle effect, and ambient sound cue belongs to the world the child is currently in.

### 1.1 World Themes (Phase 1)

| World | Trigger Story | BG Palette | UI Texture | Ambient Particles | Display Font |
|---|---|---|---|---|---|
| **Cretaceous** | The Day the Giants Left | Deep jungle green + amber | Fossil stone slabs | Ash flakes drifting down | Slab-serif / prehistoric |
| **Deep Space** | Asteroids & Meteorites | Midnight black + cosmic purple | Meteorite rock | Stars + comet streaks | Futuristic mono |
| **Sky & Wings** | The First Birds | Dawn sky blue + coral | Feather textures | Floating feathers | Rounded soft sans |
| **The Green World** | Sunlight & Food | Bright leaf green + gold | Bark/leaf panels | Pollen/spore drift | Botanical serif |

### 1.2 Theming Architecture

Each World is a **ThemeConfig** object consumed by the frontend:

```typescript
interface ThemeConfig {
  worldId: string;                  // "cretaceous" | "space" | "sky" | "green"
  displayName: string;
  colors: {
    background: string;             // primary BG hex
    surface: string;                // card/panel bg
    accent: string;                 // buttons, highlights
    text: string;                   // primary text
    textMuted: string;
  };
  fonts: {
    display: string;                // Google Fonts name — hero text
    body: string;                   // reading text
  };
  particles: {
    type: "ash" | "stars" | "feathers" | "pollen";
    density: number;                // 1–10
    speed: number;                  // 1–10
  };
  bgImageUrl: string;               // full-bleed background scene (Midjourney)
  cardTexture: string;              // card panel overlay texture
  soundAmbientUrl?: string;         // optional ambient loop (V2)
}
```

The active theme is stored in a React Context (`ThemeContext`) and applied globally. All components read from `useTheme()` — no hardcoded colors anywhere in the component tree.

---

## 2. System Architecture

```
┌─────────────────────────────────┐     ┌──────────────────────────────────┐
│         FRONTEND                │     │           BACKEND                │
│  Expo (React Native / Web)      │     │  ASP.NET Core Minimal API        │
│                                 │◄────►  PostgreSQL (EF Core)            │
│  - ThemeContext (world engine)  │     │  Hosted on Railway               │
│  - Card Stack (swipe reader)    │     │                                  │
│  - Knowledge Graph (SVG)        │     │  Endpoints:                      │
│  - Particle Engine (canvas)     │     │  GET /api/stories                │
│                                 │     │  GET /api/stories/{id}           │
│  Web: Vercel                    │     │  GET /api/graph                  │
│  Mobile: Expo Go → EAS          │     │  GET /api/themes                 │
└─────────────────────────────────┘     └──────────────────────────────────┘
```

### Repo Structure (Monorepo)

```
biograph/
├── frontend/                    # Expo app
│   ├── app/                     # Expo Router screens
│   │   ├── index.tsx            # Knowledge Graph (home)
│   │   ├── story/[id].tsx       # Card stack reader
│   │   └── world/[worldId].tsx  # World entry screen
│   ├── components/
│   │   ├── CardStack/           # Swipeable card component
│   │   ├── KnowledgeGraph/      # SVG graph renderer
│   │   ├── ParticleLayer/       # Canvas particle engine
│   │   ├── WorldPortal/         # World transition animation
│   │   └── ThemedUI/            # Buttons, panels, badges
│   ├── context/
│   │   └── ThemeContext.tsx     # Global theme state
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useProgress.ts       # AsyncStorage progress
│   │   └── useStories.ts        # API fetch + cache
│   └── constants/
│       └── themes.ts            # ThemeConfig defaults (fallback)
│
├── backend/                     # ASP.NET Core
│   ├── BioGraph.Api/
│   │   ├── Endpoints/
│   │   │   ├── StoriesEndpoints.cs
│   │   │   └── GraphEndpoints.cs
│   │   ├── Models/
│   │   │   ├── Story.cs
│   │   │   ├── Card.cs
│   │   │   ├── StoryLink.cs
│   │   │   └── ThemeConfig.cs
│   │   ├── Data/
│   │   │   ├── BioGraphDbContext.cs
│   │   │   └── Seed/
│   │   │       └── SeedData.cs
│   │   └── Program.cs
│   └── BioGraph.Api.Tests/
│
└── shared/
    └── types/                   # Shared TS types (mirrors C# models)
```

---

## 3. Database Schema

```sql
-- Stories
Story (
  Id            UUID PRIMARY KEY,
  Title         TEXT NOT NULL,
  Subtitle      TEXT,
  Topic         TEXT,              -- "extinction" | "space" | "birds" | "botany"
  WorldId       TEXT NOT NULL,     -- FK to theme world
  IsLockedByDefault BOOLEAN,
  GraphX        FLOAT,             -- position on knowledge graph
  GraphY        FLOAT,
  CreatedAt     TIMESTAMP
)

-- Cards within a story (ordered)
Card (
  Id            UUID PRIMARY KEY,
  StoryId       UUID REFERENCES Story(Id),
  Position      INT NOT NULL,      -- 1–10, display order
  ImageUrl      TEXT NOT NULL,     -- Midjourney image (CDN)
  BodyText      TEXT NOT NULL,     -- 1–2 sentences, child-readable
  ScientificFact TEXT,             -- deeper fact shown on hotspot tap
  AltText       TEXT               -- accessibility
)

-- Graph connections
StoryLink (
  Id            UUID PRIMARY KEY,
  FromStoryId   UUID REFERENCES Story(Id),
  ToStoryId     UUID REFERENCES Story(Id),
  LinkType      TEXT,              -- "space" | "biology" | "botany"
  Label         TEXT               -- short edge label shown on graph
)

-- Theme configs (seeded, editable without redeploy)
WorldTheme (
  WorldId       TEXT PRIMARY KEY,
  DisplayName   TEXT,
  ColorsJson    JSONB,             -- ThemeConfig.colors
  FontsJson     JSONB,             -- ThemeConfig.fonts
  ParticlesJson JSONB,             -- ThemeConfig.particles
  BgImageUrl    TEXT,
  CardTexture   TEXT
)
```

---

## 4. API Contracts

### `GET /api/graph`
Returns all stories with their graph positions and connections. Used to render the Knowledge Graph home screen.

**Output:**
```json
{
  "nodes": [
    {
      "id": "uuid",
      "title": "The Day the Giants Left",
      "worldId": "cretaceous",
      "isUnlocked": true,
      "graphX": 340,
      "graphY": 200,
      "cardCount": 6
    }
  ],
  "links": [
    {
      "fromStoryId": "uuid-1",
      "toStoryId": "uuid-2",
      "linkType": "space",
      "label": "What hit Earth?"
    }
  ]
}
```

---

### `GET /api/stories/{id}`
Returns a full story with all cards and theme config. Called when a user taps a graph node.

**Output:**
```json
{
  "id": "uuid",
  "title": "The Day the Giants Left",
  "subtitle": "How the dinosaurs disappeared",
  "worldId": "cretaceous",
  "theme": {
    "worldId": "cretaceous",
    "displayName": "Cretaceous World",
    "colors": {
      "background": "#1a2e1a",
      "surface": "#2d3d1f",
      "accent": "#c8860a",
      "text": "#f0e8d0",
      "textMuted": "#8a7a5a"
    },
    "fonts": {
      "display": "Cinzel Decorative",
      "body": "Lora"
    },
    "particles": {
      "type": "ash",
      "density": 6,
      "speed": 3
    },
    "bgImageUrl": "https://cdn.biograph.app/worlds/cretaceous-bg.webp",
    "cardTexture": "https://cdn.biograph.app/textures/fossil-stone.webp"
  },
  "cards": [
    {
      "id": "uuid",
      "position": 1,
      "imageUrl": "https://cdn.biograph.app/stories/dinos/card-1.webp",
      "bodyText": "66 million years ago, Earth was ruled by giant reptiles.",
      "scientificFact": "The Cretaceous period lasted from 145 to 66 million years ago. Triceratops was one of the last non-avian dinosaurs.",
      "altText": "A Triceratops walks through a lush Cretaceous forest at golden hour"
    }
  ],
  "linkedStories": [
    { "id": "uuid-2", "title": "Asteroids & Meteorites", "linkType": "space" }
  ]
}
```

---

### `GET /api/stories`
Returns all stories as a lightweight list (no cards). Used for preloading graph metadata.

**Output:**
```json
[
  {
    "id": "uuid",
    "title": "The Day the Giants Left",
    "worldId": "cretaceous",
    "cardCount": 6,
    "isLockedByDefault": false,
    "graphX": 340,
    "graphY": 200
  }
]
```

---

## 5. Frontend: Key Components

### 5.1 `<WorldPortal />` — World Entry Transition
When a user taps a graph node, they don't just navigate. They are **pulled into the world**. The portal animation:
1. The tapped node expands to fill the screen (scale transform)
2. The world's background image fades in behind it
3. Particles begin spawning from the edges inward
4. The ThemeContext switches — all UI recolors in real time
5. The card stack slides up from the bottom

This is the most important UX moment. It must feel like a portal opening.

### 5.2 `<CardStack />` — The Reading Experience
- Horizontal swipe (left/right) between cards
- Card front: full-bleed Midjourney image + body text overlaid at bottom
- Hotspot tap: a glowing indicator on the image reveals the `scientificFact` in a themed panel
- Progress dots at top (styled to match world — bones for Cretaceous, stars for Space)
- On last card: "Explore connections" CTA reveals linked stories

**Input:** `story: StoryResponse`  
**Output:** `onComplete(storyId: string)` — triggers unlock logic in `useProgress`

### 5.3 `<KnowledgeGraph />` — Home Screen
- Rendered as SVG using `react-native-svg`
- Nodes are themed circles with story thumbnails inside
- Locked nodes shown as silhouettes with a lock icon
- Edges are curved paths colored by `linkType`
- Pan + pinch-to-zoom on mobile
- On web: mouse drag + scroll zoom

**Input:** `GraphResponse` from `/api/graph`  
**Output:** `onNodeTap(storyId: string)`

### 5.4 `<ParticleLayer />` — Ambient World Atmosphere
Canvas-based particle system that runs as a fixed overlay. Each world has its own particle behavior:

| World | Particle | Behaviour |
|---|---|---|
| Cretaceous | Ash flakes | Drift downward, slight horizontal sway, vary in opacity |
| Deep Space | Stars + streaks | Slow parallax drift, occasional fast comet streak |
| Sky & Wings | Feathers | Gentle float + rotation, respond to scroll velocity |
| Green World | Pollen spores | Drift upward in clusters, soft glow |

Implemented with `requestAnimationFrame` on a `<canvas>` element. Respects `prefers-reduced-motion`.

---

## 6. Progress & Unlock System

Stored entirely in `AsyncStorage` (device-local, no account needed for MVP).

```typescript
interface ProgressState {
  completedStories: string[];     // array of story IDs
  unlockedStories: string[];      // derived from completedStories + graph links
  discoveredFacts: string[];      // card IDs where hotspot was tapped
}
```

**Unlock logic (client-side):**
When `onComplete(storyId)` fires → find all `StoryLink` where `fromStoryId === storyId` → add `toStoryId` to `unlockedStories` → persist to AsyncStorage → update KnowledgeGraph visual state.

---

## 7. Image Pipeline (Midjourney → App)

1. Generate in Midjourney using realistic, no-fantasy prompts  
   Example prompt: `"A Triceratops in a dense Cretaceous forest, golden hour light, photorealistic, nature documentary style, 16:9, no humans"`
2. Export at 1792×1024px (16:9 for card full-bleed)
3. Convert to WebP at 85% quality using `cwebp` or Squoosh
4. Upload to Cloudflare R2 (free tier: 10GB storage, 10M reads/mo)
5. Store CDN URL in `Card.ImageUrl` via DB seed or admin insert

Background world images: 2560×1440px WebP, same pipeline.

---

## 8. Sprint Plan

| Sprint | Deliverable | Output |
|---|---|---|
| **1** | Repo scaffold, DB schema, EF Core migrations, seed first story | Running API locally, `/api/graph` returns data |
| **2** | `<CardStack />` component, static theme applied, first story readable | Web: single story readable end-to-end |
| **3** | `ThemeContext`, `useTheme()`, world color/font system wired | UI recolors correctly per world |
| **4** | `<ParticleLayer />` — ash particles for Cretaceous world | Ambient atmosphere working on web |
| **5** | `<WorldPortal />` transition animation | Portal entry animation feels immersive |
| **6** | `<KnowledgeGraph />` — SVG render, pan/zoom, tap to navigate | Graph home screen functional |
| **7** | Unlock logic, `useProgress`, AsyncStorage persistence | Completing a story unlocks connected nodes |
| **8** | Midjourney image pipeline, all 10 stories seeded, content QA | Full MVP content loaded |
| **9** | Mobile QA (Expo Go), web deploy (Vercel), API deploy (Railway) | Live MVP accessible on web + mobile |

---

## 9. Out of Scope for MVP

- User accounts / login (V2 — Supabase Auth)
- Audio narration (V2)
- Interactive card hotspot animations beyond tap-to-reveal (V2)
- Admin CMS for content editing (V2 — simple React admin panel)
- App Store / Play Store submission (post-MVP)
- Auto-layout graph algorithm (nodes are manually positioned in DB)
- Multiplayer / shared progress (V3)

---

## 10. Cost Summary

| Item | Monthly | Notes |
|---|---|---|
| Midjourney Basic | $10 | ~200 image generations |
| Vercel Hobby | $0 | Web frontend |
| Railway Free | $0 | .NET API + PostgreSQL |
| Cloudflare R2 | $0 | Image CDN (10GB free) |
| GitHub Free | $0 | Monorepo |
| Domain (optional) | ~$1 | ~$12/yr |
| **Total** | **~$10–11/mo** | |

---

*Document owner: BioGraph dev team · Last updated: May 2026*
