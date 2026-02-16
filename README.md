# mklyml kits

Block kits for [mklyml](https://github.com/HubDev-AI/mklyml) — domain-specific blocks, themes, and presets.

<p>
  <a href="https://mklyml-docs.hubdev.ai">Documentation</a> &nbsp;·&nbsp;
  <a href="https://mklyml-editor.hubdev.ai">Live Editor</a> &nbsp;·&nbsp;
  <a href="https://github.com/HubDev-AI/mklyml-kits">GitHub</a>
</p>

---

![Newsletter rendered with sunset-boulevard theme](https://raw.githubusercontent.com/HubDev-AI/mklyml-kits/main/docs/images/preview-sunset.png)

---

## Newsletter Kit

**14 blocks, 19 themes, 17 presets** for building email newsletters.

Featured articles with source badges, categorized news items, quick hits, community quotes, polls, sponsor sections, personal notes. Pick a theme and preset, compile to HTML — or pipe through the [email plugin](https://github.com/HubDev-AI/mklyml-plugins) for production-ready email.

```mklyml
--- use: core
--- use: newsletter
--- theme: newsletter/sunset-boulevard
--- preset: newsletter/editorial

--- newsletter/featured
source: TechCrunch
author: Jane Doe
link: https://example.com/article

## Breaking: AI Rewrites the Rules

A summary of the feature article.

--- newsletter/category
title: Tech & Science

--- newsletter/item
source: Wired
link: https://example.com/quantum

## Quantum Computing Milestone

Brief description of this news item.

--- /newsletter/category

--- newsletter/quickHits

- [React 21 released](https://example.com/react) — streaming by default
- [Bun 2.0 hits stable](https://example.com/bun) — 3x faster installs

--- newsletter/outro
url: https://example.com/subscribe

Thanks for reading. See you next week.
```

**19 themes x 17 presets = 323 unique combinations** from the same content.

![Theme grid showing all 19 newsletter themes](https://raw.githubusercontent.com/HubDev-AI/mklyml-kits/main/docs/images/theme-grid.png)

```bash
bun add @mklyml/kits
```

> [Full newsletter kit documentation -->](./newsletter)

---

## Docs Kit

**15 blocks** for building documentation sites.

Syntax-highlighted code blocks, callout boxes (tip, warning, info, danger), API reference cards, property tables, tabbed content, step-by-step guides, install commands, interactive live examples.

```mklyml
--- use: core
--- use: docs
--- theme: docs/default

--- docs/callout
type: tip

Start with the core kit. Add kits when you need domain-specific blocks.

--- docs/codeExample
lang: typescript
filename: hello.ts

import { mkly } from '@mklyml/core';
const result = mkly('--- core/text\n\nHello!');

--- /docs/codeExample

--- docs/tabs

--- docs/tab
label: React

React integration guide.

--- docs/tab
label: Node.js

Server-side usage.

--- /docs/tabs
```

The [mklyml documentation site](https://mklyml-docs.hubdev.ai) is built with this kit.

```bash
bun add @mklyml/kits
```

> [Full docs kit documentation -->](./docs)

---

## Related

- **[mklyml](https://github.com/HubDev-AI/mklyml)** — Core language
- **[mklyml-editor](https://github.com/HubDev-AI/mklyml-editor)** — Visual editor with live preview
- **[mklyml-plugins](https://github.com/HubDev-AI/mklyml-plugins)** — Email output plugin + docs plugin
- **[mklyml-docs](https://github.com/HubDev-AI/mklyml-docs)** — Documentation site
