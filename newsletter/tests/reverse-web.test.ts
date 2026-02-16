import { describe, it, expect } from 'bun:test';
import { mkly, CORE_KIT, reverseWeb, htmlToMkly } from '@mklyml/core';
import { NEWSLETTER_KIT } from '../src/index';

const KITS = { core: CORE_KIT, newsletter: NEWSLETTER_KIT };

/**
 * Simulates the exact EditablePreview round-trip flow:
 * 1. Compile source → HTML
 * 2. Reverse HTML → mkly source
 * 3. Recompile reversed source → check for errors
 *
 * This catches the "Edit produced invalid source — reverting" error.
 */
function roundTrip(source: string) {
  // Step 1: Compile
  const compiled = mkly(source, { kits: KITS, sourceMap: true });
  expect(compiled.errors.filter(e => e.severity === 'error')).toHaveLength(0);

  // Step 2: Reverse (simulating what EditablePreview does)
  const reversed = htmlToMkly(compiled.html, { kits: KITS });

  // Step 3: Recompile the reversed source (same as EditablePreview line 135)
  const recompiled = mkly(reversed, { kits: KITS, sourceMap: true });
  const fatalErrors = recompiled.errors.filter(e => e.severity === 'error');

  if (fatalErrors.length > 0) {
    // Show full diagnostic info on failure
    const details = fatalErrors.map(e => `[line ${e.line}] ${e.message}`).join('\n  ');
    throw new Error(
      `Round-trip produced errors:\n  ${details}\n\nReversed source:\n${reversed}`,
    );
  }

  return { compiled, reversed, recompiled };
}

describe('reverseWeb — newsletter blocks', () => {
  it('should reverse an intro block', () => {
    const html = mkly('--- use: core\n--- use: newsletter\n\n--- meta\nversion: 1\n\n--- newsletter/intro\n\nWelcome!', { kits: KITS }).html;
    const reversed = reverseWeb(html, { kits: KITS });
    expect(reversed).toContain('--- newsletter/intro');
    expect(reversed).toContain('Welcome!');
  });

  it('should reverse a category with label', () => {
    const html = mkly('--- use: core\n--- use: newsletter\n\n--- meta\nversion: 1\n\n--- newsletter/category\ntitle: Tech\n\n--- newsletter/item\nsource: TechCrunch\n\nStory\n\n--- /newsletter/category', { kits: KITS }).html;
    const reversed = reverseWeb(html, { kits: KITS });
    expect(reversed).toContain('title: Tech');
  });
});

describe('round-trip — compile → reverse → recompile (no errors)', () => {
  it('should round-trip a simple newsletter intro', () => {
    roundTrip('--- use: core\n--- use: newsletter\n\n--- meta\nversion: 1\n\n--- newsletter/intro\n\nWelcome to the newsletter!');
  });

  it('should round-trip a featured block', () => {
    roundTrip(`--- use: core
--- use: newsletter

--- meta
version: 1

--- newsletter/featured
image: https://example.com/image.jpg
source: TechCrunch
author: Jane Smith
link: https://example.com/article

A breakthrough in AI-powered code review tools is changing how teams ship software.`);
  });

  it('should round-trip a featured block with markdown content', () => {
    roundTrip(`--- use: core
--- use: newsletter

--- meta
version: 1

--- newsletter/featured
image: https://i.chzbgr.com/original/44317445/h8B09E0AB/test.jpg
source: cheezburger.com
author: Blake Seidel
link: https://cheezburger.com/44317445/test

## 'She's bald!': Mother of two tabby cats has a healthy litter of kittens

It's not nice to call a beautiful young lady 'bald,' even if she is!`);
  });

  it('should round-trip a category with items', () => {
    roundTrip(`--- use: core
--- use: newsletter

--- meta
version: 1

--- newsletter/category
title: Tech News

--- newsletter/item
source: GitHub Blog
link: https://example.com/post

GitHub Copilot now supports inline refactoring suggestions.

--- /newsletter/category`);
  });

  it('should round-trip a complete newsletter', () => {
    roundTrip(`--- use: core
--- use: newsletter

--- meta
version: 1
title: Weekly Dev Digest

--- newsletter/intro

Welcome back! This week we dive into the latest developer tools.

--- newsletter/featured
image: https://example.com/feature.jpg
source: TechCrunch
author: Jane Smith
link: https://example.com/article

A breakthrough in AI-powered code review tools.

--- newsletter/category
title: Frontend

--- newsletter/item
source: React Blog
link: https://example.com/react

React 20 ships with built-in signals.

--- newsletter/item
source: Vue.js
link: https://example.com/vue

Vue 4 introduces a new composition API.

--- /newsletter/category

--- newsletter/outro
ctaUrl: https://example.com
ctaText: Subscribe

Thanks for reading!`);
  });

  it('should round-trip with core blocks mixed in', () => {
    roundTrip(`--- use: core
--- use: newsletter

--- meta
version: 1

--- core/header
title: My Newsletter

--- newsletter/intro

Welcome!

--- core/divider

--- newsletter/featured
source: Example
link: https://example.com

Great article content here.`);
  });

  it('should round-trip with only newsletter use declaration', () => {
    // Some documents might only declare newsletter without core
    roundTrip(`--- use: newsletter

--- meta
version: 1

--- newsletter/intro

Hello world!

--- newsletter/featured
source: Test
link: https://example.com

Article text.`);
  });

  it('should round-trip featured block after simulated text edit', () => {
    // Simulate what happens when user types in the featured block content
    const source = `--- use: core
--- use: newsletter

--- meta
version: 1

--- newsletter/featured
image: https://example.com/image.jpg
source: TechCrunch
link: https://example.com

Original article text.`;

    // Step 1: Compile
    const compiled = mkly(source, { kits: KITS, sourceMap: true });
    expect(compiled.errors.filter(e => e.severity === 'error')).toHaveLength(0);

    // Step 2: Simulate text edit by modifying HTML content
    const editedHtml = compiled.html.replace('Original article text.', 'Edited article text with some changes.');

    // Step 3: Reverse the edited HTML
    const reversed = htmlToMkly(editedHtml, { kits: KITS });

    // Step 4: Recompile — should NOT produce errors
    const recompiled = mkly(reversed, { kits: KITS, sourceMap: true });
    const fatalErrors = recompiled.errors.filter(e => e.severity === 'error');
    expect(fatalErrors).toHaveLength(0);
    expect(recompiled.html).toContain('Edited article text with some changes.');
  });

  it('should round-trip with theme and preset', () => {
    roundTrip(`--- use: core
--- use: newsletter
--- theme: graphite
--- preset: editorial

--- meta
version: 1
title: Themed Newsletter

--- newsletter/intro

Welcome to the themed newsletter!`);
  });

  it('should round-trip with style blocks', () => {
    roundTrip(`--- use: core
--- use: newsletter

--- meta
version: 1

--- style
newsletter/intro
  fontSize: 18px
  color: #333

--- newsletter/intro

Styled intro text.`);
  });

  it('should round-trip newsletter with spacers (browser style normalization)', () => {
    const source = `--- use: core
--- use: newsletter

--- meta
version: 1

--- newsletter/intro

Welcome!

--- core/spacer
height: 20

--- newsletter/featured
source: TechCrunch
link: https://example.com

Article text.

--- core/spacer
height: 30

--- newsletter/outro
ctaUrl: https://example.com
ctaText: Read More

Thanks!`;

    const compiled = mkly(source, { kits: KITS, sourceMap: true });
    expect(compiled.errors.filter(e => e.severity === 'error')).toHaveLength(0);

    // Simulate browser normalizing inline styles (spaces after colons)
    const browserHtml = compiled.html.replace(/style="([^"]*)"/g, (_m, style: string) =>
      `style="${style.replace(/:\s*/g, ': ')}"`,
    );

    const reversed = htmlToMkly(browserHtml, { kits: KITS });
    const recompiled = mkly(reversed, { kits: KITS, sourceMap: true });
    const fatalErrors = recompiled.errors.filter(e => e.severity === 'error');
    expect(fatalErrors).toHaveLength(0);
  });

  it('should round-trip newsletter edit with spacers present', () => {
    const source = `--- use: core
--- use: newsletter

--- meta
version: 1

--- newsletter/featured
source: TechCrunch
link: https://example.com

Original text.

--- core/spacer
height: 40

--- newsletter/intro

Welcome!`;

    const compiled = mkly(source, { kits: KITS, sourceMap: true });
    // Simulate browser style normalization + text edit
    let browserHtml = compiled.html.replace(/style="([^"]*)"/g, (_m, style: string) =>
      `style="${style.replace(/:\s*/g, ': ')}"`,
    );
    browserHtml = browserHtml.replace('Original text.', 'Edited text.');

    const reversed = htmlToMkly(browserHtml, { kits: KITS });
    const recompiled = mkly(reversed, { kits: KITS, sourceMap: true });
    const fatalErrors = recompiled.errors.filter(e => e.severity === 'error');
    expect(fatalErrors).toHaveLength(0);
    expect(recompiled.html).toContain('Edited text.');
  });
});
