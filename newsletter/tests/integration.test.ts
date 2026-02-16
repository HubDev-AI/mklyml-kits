import { describe, it, expect } from 'bun:test';
import { mkly, parse, compile, createRegistry, CORE_KIT } from '@mklyml/core';
import { NEWSLETTER_KIT } from '../src/index';

describe('newsletter kit integration', () => {
  it('should accept newsletter kit via --- use', () => {
    const result = mkly(
      `--- use: newsletter\n\n--- meta\nversion: 1\n\n--- newsletter/category: Tech\n\n--- newsletter/item\nTech item\n\n--- /newsletter/category`,
      { kits: { core: CORE_KIT, newsletter: NEWSLETTER_KIT } },
    );
    expect(result.html).toContain('Tech');
    expect(result.html).toContain('Tech item');
  });

  it('should handle newsletter blocks via kit', () => {
    const source = `--- use: core
--- use: newsletter

--- meta
version: 1

--- newsletter/intro

Welcome!

--- newsletter/featured
image: featured.jpg
link: https://example.com
source: TechCrunch

## Featured Story

--- newsletter/category: Tech

--- newsletter/item
source: Wired

Tech news

--- /newsletter/category

--- newsletter/quickHits

- Quick item 1
- Quick item 2

--- newsletter/tipOfTheDay

Pro tip: Always test your code!

--- newsletter/community
author: John Doe

Great newsletter!

--- newsletter/personalNote

Thanks for reading!

--- newsletter/poll
question: What topic next?
option1: AI
option2: Cloud

--- newsletter/recommendations

- Resource 1

--- newsletter/sponsor
image: sponsor.jpg
link: https://sponsor.com
label: Visit Sponsor

Sponsored content

--- newsletter/outro
ctaUrl: https://example.com
ctaText: Read More

See you next week!`;

    const result = mkly(source, { kits: { core: CORE_KIT, newsletter: NEWSLETTER_KIT } });
    expect(result.html).toContain('Welcome!');
    expect(result.html).toContain('Featured Story');
    expect(result.html).toContain('Tech news');
    expect(result.html).toContain('Quick item');
    expect(result.html).toContain('Pro tip');
    expect(result.html).toContain('John Doe');
    expect(result.html).toContain('Thanks for reading');
    expect(result.html).toContain('What topic next?');
    expect(result.html).toContain('Sponsored');
    expect(result.html).toContain('See you next week');
  });

  it('should handle multiple levels of nesting with different container types', () => {
    const result = mkly(
      `--- use: core\n--- use: newsletter\n\n--- meta\nversion: 1\n\n--- core/section\ntitle: Level 1\n\n--- newsletter/category\ntitle: Level 2\n\n--- newsletter/item\nLevel 3 content\n\n--- /newsletter/category\n\n--- /core/section`,
      { kits: { core: CORE_KIT, newsletter: NEWSLETTER_KIT } },
    );
    expect(result.html).toContain('Level 1');
    expect(result.html).toContain('Level 2');
    expect(result.html).toContain('Level 3 content');
  });

  it('should handle nested containers in compiler', () => {
    const result = mkly(
      `--- use: core\n--- use: newsletter\n\n--- meta\nversion: 1\n\n--- core/section\ntitle: Outer\n\n--- newsletter/category\ntitle: Inner\n\n--- newsletter/item\nNested item\n\n--- /newsletter/category\n\n--- /core/section`,
      { kits: { core: CORE_KIT, newsletter: NEWSLETTER_KIT } },
    );
    expect(result.html).toContain('Outer');
    expect(result.html).toContain('Inner');
    expect(result.html).toContain('Nested item');
  });

  describe('presets', () => {
    it('should apply glass preset to newsletter blocks', () => {
      const source = `--- use: core\n--- use: newsletter\n--- preset: glass\n\n--- meta\nversion: 1\n\n--- newsletter/tip\ntitle: Pro Tip\n\nSome useful tip`;
      const result = mkly(source, { kits: { core: CORE_KIT, newsletter: NEWSLETTER_KIT } });
      expect(result.html).toContain('backdrop-filter: blur(16px)');
      expect(result.html).toContain('<meta name="mkly:preset" content="glass">');
    });

    it('should apply elevated preset', () => {
      const source = `--- use: core\n--- use: newsletter\n--- preset: elevated\n\n--- meta\nversion: 1\n\n--- newsletter/tip\ntitle: Tip\n\nContent`;
      const result = mkly(source, { kits: { core: CORE_KIT, newsletter: NEWSLETTER_KIT } });
      expect(result.html).toContain('box-shadow');
    });

    it('should apply brutalist preset', () => {
      const source = `--- use: core\n--- use: newsletter\n--- preset: brutalist\n\n--- meta\nversion: 1\n\n--- newsletter/tip\ntitle: Tip\n\nContent`;
      const result = mkly(source, { kits: { core: CORE_KIT, newsletter: NEWSLETTER_KIT } });
      expect(result.html).toContain('border-radius: 0');
    });

    it('should apply neon preset', () => {
      const source = `--- use: core\n--- use: newsletter\n--- preset: neon\n\n--- meta\nversion: 1\n\n--- newsletter/poll\nquestion: Question\n\nWhich do you prefer?`;
      const result = mkly(source, { kits: { core: CORE_KIT, newsletter: NEWSLETTER_KIT } });
      expect(result.html).toContain('box-shadow');
    });

    it('should combine preset with theme', () => {
      const source = `--- use: core\n--- use: newsletter\n--- theme: dark\n--- preset: glass\n\n--- meta\nversion: 1\n\n--- newsletter/tip\ntitle: Tip\n\nContent`;
      const result = mkly(source, { kits: { core: CORE_KIT, newsletter: NEWSLETTER_KIT } });
      // Dark theme colors (core/dark)
      expect(result.html).toContain('--mkly-bg: #000000');
      // Glass structural styles
      expect(result.html).toContain('backdrop-filter: blur(16px)');
    });

    it('should list all 17 newsletter presets', () => {
      expect(NEWSLETTER_KIT.presets).toHaveLength(17);
      const names = NEWSLETTER_KIT.presets!.map(p => p.name);
      expect(names).toEqual([
        'default', 'brutalist', 'neon', 'glass', 'elevated', 'editorial', 'retro',
        'minimal', 'magazine', 'compact', 'soft', 'typewriter',
        'bold', 'airy', 'gazette', 'luxe', 'capsule',
      ]);
    });
  });
});
