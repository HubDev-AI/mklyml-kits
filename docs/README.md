# @mklyml/kits/docs

15 blocks for building documentation sites in [mklyml](https://github.com/HubDev-AI/mklyml).

<p>
  <a href="https://mklyml-docs.hubdev.ai">See it live</a> &nbsp;·&nbsp;
  <a href="https://mklyml-editor.hubdev.ai">Try in Editor</a> &nbsp;·&nbsp;
  <a href="https://github.com/HubDev-AI/mklyml-kits">GitHub</a>
</p>

---

Syntax-highlighted code blocks with filenames, callout boxes (tip, warning, info, danger), API reference cards, property tables, tabbed content, step-by-step guides, install commands, and interactive live examples.

The [mklyml documentation site](https://mklyml-docs.hubdev.ai) is built with this kit.

## Example

```mklyml
--- use: core
--- use: docs
--- theme: docs/default
--- preset: docs/default

--- core/heading
level: 1

Getting Started

--- docs/install
manager: bun
package: @mklyml/core

--- docs/callout
type: tip

Start with the core kit. Add the newsletter or docs kit when you need
domain-specific blocks.

--- docs/steps

--- docs/step
title: Create a file

Create `hello.mkly`:

--- docs/step
title: Write some blocks

--- docs/codeExample
lang: mklyml
filename: hello.mkly

--- core/heading
level: 1

Hello, World!

--- core/text

Your first mklyml document.

--- /docs/codeExample

--- docs/step
title: Compile it

--- docs/codeExample
lang: typescript
filename: build.ts

import { mkly } from '@mklyml/core';
import { readFileSync } from 'fs';

const source = readFileSync('hello.mkly', 'utf-8');
const result = mkly(source);
console.log(result.html);

--- /docs/codeExample

--- /docs/steps

--- docs/apiRef
name: mklyml
signature: mkly(source: string, options?: CompileOptions): CompileResult
returnType: CompileResult

Shorthand that parses and compiles in one call.

--- docs/tabs

--- docs/tab
label: React

Use the mklyml-editor component or render with `dangerouslySetInnerHTML`.

--- docs/tab
label: Node.js

Call `mklyml()` on the server. Great for static site generation.

--- docs/tab
label: Email

Add the email plugin to compile for Gmail, Outlook, and Apple Mail.

--- /docs/tabs
```

## 15 Blocks

| Block | What it does | Example |
|-------|-------------|---------|
| `docs/callout` | Callout box | `type: tip` / `warning` / `info` / `danger` |
| `docs/codeExample` | Code block with filename | `lang: typescript`, `filename: app.ts` |
| `docs/apiRef` | API function card | `name: mklyml`, `signature: ...` |
| `docs/propTable` | Property table (container) | Contains `docs/propRow` children |
| `docs/propRow` | Row in a prop table | `name: src`, `type: string` |
| `docs/tabs` | Tab switcher (container) | Contains `docs/tab` children |
| `docs/tab` | Individual tab | `label: React` |
| `docs/steps` | Step-by-step guide (container) | Contains `docs/step` children |
| `docs/step` | Individual step | `title: Install dependencies` |
| `docs/linkCard` | Navigation card | `url: /getting-started` |
| `docs/badge` | Status badge | `label: stable`, `color: green` |
| `docs/fileTree` | Directory tree | Content is indented file listing |
| `docs/install` | Install command | `manager: bun`, `package: @mklyml/core` |
| `docs/liveExample` | Live mklyml to HTML preview | Interactive, editable |
| `docs/reverseExample` | Live HTML to mklyml demo | Interactive, editable |

## Themes

| Theme | Look |
|-------|------|
| `default` | Warm orange accent on stone backgrounds |
| `light` | Clean white with subtle grays |
| `dark` | Dark backgrounds, light text |

## Install

```bash
bun add @mklyml/kits
```

## Related

- **[mklyml](https://github.com/HubDev-AI/mklyml)** — Core language
- **[@mklyml/kits/newsletter](https://github.com/HubDev-AI/mklyml-kits)** — Newsletter kit (14 blocks, 19 themes, 17 presets)
- **[mklyml-plugins](https://github.com/HubDev-AI/mklyml-plugins)** — Email plugin + Docs plugin (anchors, copy buttons, tabs)
- **[mklyml-editor](https://github.com/HubDev-AI/mklyml-editor)** — Visual editor

> **[Full documentation -->](https://mklyml-docs.hubdev.ai)** · **[Try in editor -->](https://mklyml-editor.hubdev.ai)**
