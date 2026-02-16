# @mklyml/kits/newsletter

14 blocks, 19 themes, 17 presets for building email newsletters in [mklyml](https://github.com/HubDev-AI/mklyml).

<p>
  <a href="https://mklyml-docs.hubdev.ai">Documentation</a> &nbsp;·&nbsp;
  <a href="https://mklyml-editor.hubdev.ai">Try in Editor</a> &nbsp;·&nbsp;
  <a href="https://github.com/HubDev-AI/mklyml-kits">GitHub</a>
</p>

---

![Newsletter in the mklyml editor](https://raw.githubusercontent.com/HubDev-AI/mklyml-kits/main/docs/images/editor-full.png)

Write your newsletter as structured blocks, pick a theme and preset, and compile to HTML. Add the [email plugin](https://github.com/HubDev-AI/mklyml-plugins) for production-ready email output.

> **[Build a newsletter in the live editor -->](https://mklyml-editor.hubdev.ai)**

## Full Example

```mklyml
--- use: core
--- use: newsletter
--- theme: newsletter/sunset-boulevard
--- preset: newsletter/editorial

--- meta
version: 1
title: Weekly Digest #42
subject: This week in tech
preheader: The latest from our team...

--- newsletter/intro

Welcome to this week's roundup. Here's what caught our eye.

--- newsletter/featured
source: TechCrunch
author: Jane Doe
link: https://example.com/article

## Breaking: AI Rewrites the Rules

A summary of the feature article at the top of your newsletter.
The featured block gives it a hero treatment with source badge and author.

--- newsletter/category
title: Tech & Science

--- newsletter/item
source: Wired
link: https://example.com/quantum

## Quantum Computing Milestone

Brief description of this news item.

--- newsletter/item
source: Nature
link: https://example.com/climate

## Climate Models Get a Boost

Another item in the same category.

--- /newsletter/category

--- newsletter/quickHits

- [React 21 released](https://example.com/react) — streaming by default
- [Bun 2.0 hits stable](https://example.com/bun) — 3x faster installs
- [CSS nesting ships](https://example.com/css) — all browsers

--- newsletter/tipOfTheDay

Use `--- style` blocks to customize colors and spacing without touching content.
Mix any theme with any preset for 323 unique combinations.

--- newsletter/community
author: @reader_42

This newsletter is the best curated tech digest I've found.
Short, relevant, no fluff.

--- newsletter/sponsor
label: Sponsored
link: https://example.com/sponsor

## Build faster with ExampleDB

The database that scales with you. Free tier, no credit card.

--- newsletter/outro
url: https://example.com/subscribe

Thanks for reading. See you next week.
```

## 14 Blocks

| Block | What it does |
|-------|-------------|
| `newsletter/intro` | Opening paragraph |
| `newsletter/featured` | Hero article with image, source badge, author |
| `newsletter/category` | Groups items under a heading (container) |
| `newsletter/item` | News item with source and link |
| `newsletter/quickHits` | Bullet-point quick links |
| `newsletter/tools` | Tool/resource recommendations (container) |
| `newsletter/tipOfTheDay` | Highlighted tip |
| `newsletter/community` | Quote or community highlight |
| `newsletter/personalNote` | Editor's personal note |
| `newsletter/poll` | Poll with options |
| `newsletter/recommendations` | Curated reading list |
| `newsletter/sponsor` | Sponsored content with badge |
| `newsletter/outro` | Closing section with CTA |
| `newsletter/custom` | Freeform block |

## 19 Themes

Each theme sets a complete color palette, font pairing, and mood. Apply with `--- theme: newsletter/cosmic`.

| | | | |
|---|---|---|---|
| `default` | `light` | `dark` | `neon-pulse` |
| `zen-garden` | `brutalist` | `ocean-depth` | `midnight-violet` |
| `sunset-boulevard` | `arctic` | `rose-gold` | `graphite` |
| `electric-lime` | `copper-slate` | `saffron` | `lavender-dream` |
| `cherry-blossom` | `cosmic` | `forest-floor` | |

From indigo-on-white to sakura-pink-on-ivory to acid-lime-on-black.

![All 19 newsletter themes at a glance](https://raw.githubusercontent.com/HubDev-AI/mklyml-kits/main/docs/images/theme-grid.png)

## 17 Presets

Presets control spacing, radius, shadows, and typography — independent of color. Any theme works with any preset. Apply with `--- preset: newsletter/editorial`.

| Preset | Character |
|--------|-----------|
| `default` | Clean, modern, subtle shadows |
| `brutalist` | Sharp corners, thick borders, uppercase |
| `neon` | Glowing shadows, gradient accents |
| `glass` | Frosted glassmorphism, backdrop blur |
| `elevated` | Floating cards, deep shadows |
| `editorial` | Serif fonts, print-inspired, double borders |
| `retro` | Rounded, offset shadows, dashed borders |
| `minimal` | Whisper-quiet restraint, no borders, separator lines only |
| `magazine` | Classical print, serif typography, small-caps, double rules |
| `compact` | Dense information-rich layout, tight spacing, flat panels |
| `soft` | Dreamy cloud-like feel, diffuse shadows, ultra-round containers |
| `typewriter` | Monospaced font, text indents, dashed borders, zero radius |
| `bold` | Maximum impact, weight 900 headings, thick 3px borders |
| `airy` | Pure negative space, no borders, no shadows, typography-only |
| `gazette` | Broadsheet newspaper, double rules, small-caps attribution |
| `luxe` | Ultra-premium, wide letter-spacing, weight 300, Bodoni headings |
| `capsule` | iOS-inspired pill UI, outline ring shadows, 100px radius pills |

**19 themes x 17 presets = 323 unique combinations** from the same content.

![Light theme preview](https://raw.githubusercontent.com/HubDev-AI/mklyml-kits/main/docs/images/preview-light.png)

![Sunset theme preview](https://raw.githubusercontent.com/HubDev-AI/mklyml-kits/main/docs/images/preview-sunset.png)

## Email Output

Add the [email plugin](https://github.com/HubDev-AI/mklyml-plugins) for production email. Same source, same theme — the output becomes table-based HTML with inline styles:

```typescript
import { compile, parse, createRegistry, CORE_KIT } from '@mklyml/core';
import { NEWSLETTER_KIT } from '@mklyml/kits/newsletter';
import { emailPlugin } from '@mklyml/plugins/email';

const doc = parse(source);
const result = compile(doc, createRegistry(), {
  kits: { core: CORE_KIT, newsletter: NEWSLETTER_KIT },
  plugins: [emailPlugin()],
});

// result.html → complete email document
// Works in Gmail, Outlook, Apple Mail, Yahoo
```

![Web HTML vs email HTML](https://raw.githubusercontent.com/HubDev-AI/mklyml-kits/main/docs/images/email-comparison.png)

## Install

```bash
bun add @mklyml/kits
```

## Related

- **[mklyml](https://github.com/HubDev-AI/mklyml)** — Core language
- **[mklyml-plugins](https://github.com/HubDev-AI/mklyml-plugins)** — Email plugin for production email output
- **[mklyml-editor](https://github.com/HubDev-AI/mklyml-editor)** — Visual editor with live preview
- **[mklyml-docs](https://github.com/HubDev-AI/mklyml-docs)** — Documentation site

> **[Full documentation -->](https://mklyml-docs.hubdev.ai)** · **[Try in editor -->](https://mklyml-editor.hubdev.ai)**
