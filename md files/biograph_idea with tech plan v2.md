# BioGraph Stories — Product & Technical Plan
**Version:** 3.0  
**Last Updated:** May 2026  
**Status:** Approved for implementation

---

## What We Are Building

BioGraph Stories is a **cinematic factual bedtime experience** for parents and children aged 3–7 to share together.

This is not a kids app. It is closer to a nature documentary you hold in your hand at bedtime — visual, calm, and rooted entirely in real science. The child does not need to touch the screen. The parent is the storyteller. The phone is the campfire.

Every story lives inside its own immersive world. When you open the Dinosaur story, your screen transforms into a Cretaceous jungle. When you open the Space story, the room feels like it goes dark and cold. The experience surrounds the story — it does not just display it.

---

## Why This Positioning Matters

Parents are actively searching for an alternative to the kids app category. They distrust engagement-maximising design, bright gamification, and addictive loops. What they are looking for — and struggling to find — is:

- Non-addictive content they can share with their child
- Calm, beautiful screen time with a purpose
- Something that sparks curiosity without hijacking attention
- A bedtime experience that winds a child down, not up

BioGraph addresses all four. The closest comparison in a parent's mind is *Planet Earth* — but made for a five-year-old sitting in a parent's lap. That is the standard we design toward.

---

## The Core Experience

### How a session works

1. A parent opens the app and sees the **Knowledge Graph** — a visual map of interconnected story worlds, displayed like a constellation or a universe of glowing portals.
2. They tap a world. The screen transforms — the background, colours, fonts, textures, and ambient atmosphere all shift to match that world.
3. A cinematic entry screen shows the story title, a one-line description, and the estimated reading time.
4. The parent taps Begin. The UI clears away. Only the story remains.
5. A card appears: a full-screen, photorealistic illustration with one or two sentences at the bottom. The parent reads those sentences aloud to their child.
6. The parent taps a glowing spot on the image. A deeper scientific fact appears. The child asks a question. The parent taps to the next card.
7. At the end of the story, the graph unlocks a new connected world. The child falls asleep curious.

### The three layers of every card

Every card in a story has three layers of information, each for a different purpose:

- **The image** — full-screen, photorealistic, cinematic. The child looks at this.
- **The body text** — one or two sentences in plain language. The parent reads this aloud.
- **The parent note** — a small, discreet aside visible only when the parent taps a corner icon. It might be a pronunciation guide, a discussion question, or a piece of context. Example: *"Ask your child: how big do you think this animal was compared to our house?"*

This three-layer structure respects that the child and parent are having a shared experience — not the same experience.

---

## The Multiverse Theming System

Each story world is a complete visual and atmospheric environment. When you are inside a world, everything belongs to it — the background, the panel textures, the fonts, the particles drifting across the screen, and the pace and tone of the narration.

### Phase 1 Worlds

**The Cretaceous World** — Deep jungle greens and amber. The UI panels look like fossil stone slabs. Ash drifts slowly downward across the screen. The mood is ancient, vast, and quietly melancholy. Used for: The Day the Giants Left.

**Deep Space** — Midnight black and cosmic violet. Panels feel like meteorite rock. The background is nearly still, with a rare comet streak crossing every ten seconds or so. The mood is silent, infinite, and full of awe. Used for: Asteroids & Meteorites.

**Sky & Wings** — Dawn sky blues and coral. Textures feel like layered feathers. Feathers float gently upward and rotate slowly. The mood is hopeful and light, like early morning. Used for: The First Birds.

**The Green World** — Deep leaf green and gold. Bark and leaf textures. Pollen spores drift upward in soft clusters with a warm glow. The mood is lush, slow, and alive. Used for: Sunlight & Food.

Each new story added to BioGraph either fits into an existing world or introduces a new one.

### What makes a world feel real

The theming is not a colour swap. It is a complete atmosphere. The particle effects — ash, stars, feathers, pollen — are always moving slowly in the background, like weather. The fonts are chosen to match the world's personality. Even the pacing of narration is slightly different per world: the Space world narrates more slowly and with more silence; the Green World narrates warmly and continuously.

---

## Bedtime Mode

When a story begins, the experience shifts into Bedtime Mode automatically. This can also be toggled manually by the parent.

In Bedtime Mode:
- The screen dims to roughly 60% brightness
- Particle effects reduce by half
- All transitions slow down and become more atmospheric
- The body text grows larger for easy reading in low light
- All navigation controls disappear except a single discreet exit button
- The experience feels like a cinema going dark before the film begins

Bedtime Mode is not a feature. It is the default state of the product. The bright, explorative mode — browsing the graph, choosing worlds — exists only before and after stories, not during them.

---

## Narration

In MVP, there is no automated narration. The parent reads the card text aloud to their child. This is intentional — not a limitation.

The parent's voice is the narration. Their tone, their pace, the way they pause on a word their child doesn't know — that is irreplaceable. Automating it in MVP would actually make the experience worse. The phone provides the image, the atmosphere, and the words. The parent provides the story.

### How the reading experience is designed to support the parent

The card text is written to be read aloud naturally — short sentences, plain vocabulary, a rhythm that feels comfortable to speak. The parent note (accessible via a small discreet tap) gives the parent a pronunciation guide or a discussion prompt without interrupting the flow of the story.

There are no timers, no auto-advance, no pressure. The parent taps to the next card when they and their child are ready.

### V2 — optional professional narration

In V2, a pre-recorded documentary-style narration track becomes available as an optional mode — primarily useful when a parent wants to listen alongside their child rather than read, or when the same story is being revisited. It is always opt-in. The parent's voice remains the default and the preferred experience.

---

## The Knowledge Graph

The home screen of BioGraph is not a list of stories. It is a visual map — a constellation of worlds, each represented as a glowing circular portal.

Completed worlds are lit up and vibrant. Locked worlds are shown as dim silhouettes. When a new world unlocks after completing a story, it appears with a slow expansion and a gentle particle burst — a moment of discovery, not a notification badge.

The connections between worlds are visible as curved lines on the map, labelled with the question that links them. For example, the line between the Dinosaur world and the Space world reads: *"What hit the Earth?"* This turns the map into a web of curiosity — each completed story reveals new questions.

On a phone, the map can be dragged and pinched to explore. On the web, it responds to mouse and scroll. There is no other navigation — the graph is the entire home screen.

---

## Content Rules (Non-Negotiable)

These rules come directly from the original product design and must be maintained across every story, every card, and every piece of content added to the platform:

1. **Absolute realism.** No talking animals, no magic, no anthropomorphism of any kind. Every sentence must be traceable to peer-reviewed science or a reputable scientific institution.
2. **No visual fantasy.** Illustrations must be photorealistic and depict animals and environments as they actually exist or existed. No cartoon style, no simplification that distorts reality.
3. **Correct terminology, explained in context.** Use the real scientific word — *theropod*, *atmosphere*, *photosynthesis* — but explain it through the surrounding sentences and the parent note, not by avoiding it.
4. **Fact-check everything.** Every card's body text and scientific fact must be verified against sources such as the Smithsonian, National Geographic, or equivalent before it is added to the platform. A fact-check log is maintained in the project files.

---

## Technology Decisions (Summary)

| Decision | Choice | Reason |
|---|---|---|
| Frontend framework | React Native via Expo | Shares React knowledge; single codebase for web and mobile |
| Backend | ASP.NET Core | Developer already knows .NET; fast to build and maintain |
| Database | PostgreSQL | Reliable, free on Railway, scales cleanly to V2 |
| Web hosting | Vercel | Free tier, instant deploys, reliable |
| Backend hosting | Railway | Free tier sufficient for MVP traffic |
| Image storage & CDN | Cloudflare R2 | Free tier: 10GB storage, 10 million reads per month |
| Illustration source | Midjourney | Best photorealistic quality for nature/science content |
| Repo structure | Monorepo | Simpler for a solo developer; frontend and backend in one place |

---

## What the Backend Does

The backend is intentionally thin in MVP. It has one job: store and serve story content.

It holds the stories, cards, world themes, and graph connections in a database. The frontend asks for this data when it needs it. That is the entire relationship.

The reason to have a backend at all — rather than just files — is that it allows story content to be updated, corrected, or added without pushing a new version of the app. A fact error can be fixed in seconds. A new story can be added without a redeploy.

---

## What the Frontend Does

The frontend is where almost all of the product lives. It is responsible for:

- Rendering the Knowledge Graph home screen
- Managing the world theming system and bedtime mode
- Playing the cinematic world entry transition
- Running the card stack with hotspot interactions and parent notes
- Running the particle atmosphere layer
- Tracking reading progress locally on the device
- Unlocking new worlds when stories are completed

---

## Data That Lives on the Device

In MVP, no user account is needed. Progress is stored directly on the device — which stories have been completed, which worlds are unlocked, and which scientific facts have been discovered. This keeps the product simple and removes any privacy concerns around child data.

In V2, an optional account can be added to sync progress across devices — useful for families who switch between a phone and a tablet.

---

## Image Pipeline

All illustrations go through the same process:

1. Generated in Midjourney using nature documentary-style prompts — photorealistic, no humans, no fantasy elements
2. Exported at high resolution, converted to a web-efficient format
3. Stored on Cloudflare R2 and served globally via CDN
4. The URL is stored in the database against the card it belongs to

World background images go through the same pipeline at a larger size, as they need to fill the entire screen at any resolution.

---

## Sprint Plan

| Sprint | Focus | What is deliverable at the end |
|---|---|---|
| 1 | Project setup and data foundation | Backend running locally, first story stored in database, API returns story data |
| 2 | First readable story | The Dinosaur story is readable end-to-end on web with a static Cretaceous theme |
| 3 | Theming system | Theme switches correctly when world changes; fonts, colours, textures all respond |
| 4 | Bedtime mode | Bedtime toggle dims screen, slows transitions, enlarges text, hides chrome |
| 5 | Particle atmosphere | Ash particles render in the Cretaceous world without performance issues |
| 6 | World portal transition | Tapping a story node triggers the cinematic entry animation |
| 7 | Knowledge Graph home screen | Graph renders all worlds, pan and zoom works, tapping enters a world |
| 8 | Unlock system | Completing a story unlocks connected worlds with an animation |
| 9 | Full content load | All 10 Phase 1 stories loaded, illustrated, fact-checked, and readable |
| 10 | Launch | Web live on Vercel, API live on Railway, mobile testable via Expo Go |

---

## V2 Priorities (Post-MVP)

Listed in order of impact:

1. **Optional professional narration audio** — warm documentary voice, always opt-in; the parent's voice remains the default
2. **Ambient sound per world** — soft jungle sounds, space hum, wind in trees; deepens immersion significantly
3. **User accounts** — optional, for cross-device progress sync; needed before App Store launch
4. **Parent stats** — simple screen showing total reading sessions, facts discovered, worlds completed
5. **App Store and Play Store submission** — requires accounts and a privacy policy

---

## V3 Priorities

1. **Collection Room** — a gallery of every scientific fact the child has discovered, browsable like a personal museum
2. **Geography worlds** — plate tectonics, ocean floors, weather systems
3. **Physics worlds** — light, gravity, sound

---

## Monthly Running Costs (MVP)

| Item | Cost |
|---|---|
| Midjourney Basic (illustration generation) | $10/mo |
| Vercel (web hosting) | Free |
| Railway (backend + database) | Free |
| Cloudflare R2 (image CDN) | Free |
| GitHub (code repository) | Free |
| Domain name (optional) | ~$1/mo |
| **Total** | **~$10–11/mo** |

V2 addition: ElevenLabs Starter for narration audio (~$5/mo).

---

*BioGraph Stories — from "educational kids app" to "cinematic factual bedtime experience"*  
*Document version 3.0 · May 2026*
