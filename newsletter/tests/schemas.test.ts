import { describe, it, expect } from 'bun:test';
import { CORE_SCHEMAS, createBlockSchemas, validateBlock } from '@mklyml/core';
import { NEWSLETTER_SCHEMAS } from '../src/index';
import type { MklyBlock } from '@mklyml/core';

function makeBlock(
  blockType: string,
  properties: Record<string, string> = {},
  content = '',
): MklyBlock {
  return {
    blockType,
    properties,
    content,
    children: [],
    position: { start: { line: 1, column: 1 }, end: { line: 1, column: 1 } },
  };
}

const BLOCK_SCHEMAS = createBlockSchemas(NEWSLETTER_SCHEMAS);

describe('newsletter schemas', () => {
  it('should have 14 schemas', () => {
    expect(NEWSLETTER_SCHEMAS).toHaveLength(14);
  });

  it('should contain all 14 newsletter block schemas in combined map', () => {
    const newsletterNames = [
      'intro', 'featured', 'category', 'item', 'quickHits', 'tools',
      'tipOfTheDay', 'community', 'personalNote', 'poll',
      'recommendations', 'sponsor', 'outro', 'custom',
    ];
    for (const name of newsletterNames) {
      expect(BLOCK_SCHEMAS.has(name)).toBe(true);
    }
  });

  it('should have 30 total schemas when combined with core', () => {
    expect(BLOCK_SCHEMAS.size).toBe(30);
  });

  it('category should be a container', () => {
    expect(BLOCK_SCHEMAS.get('category')?.isContainer).toBe(true);
  });

  it('tools should be a container', () => {
    expect(BLOCK_SCHEMAS.get('tools')?.isContainer).toBe(true);
  });

  describe('newsletter block validation', () => {
    it('should validate intro with no properties', () => {
      const errors = validateBlock(makeBlock('newsletter/intro'), BLOCK_SCHEMAS);
      expect(errors).toHaveLength(0);
    });

    it('should validate featured with valid image URL', () => {
      const errors = validateBlock(
        makeBlock('newsletter/featured', { image: 'https://example.com/img.jpg' }),
        BLOCK_SCHEMAS,
      );
      expect(errors).toHaveLength(0);
    });

    it('should fail featured with invalid image URL', () => {
      const errors = validateBlock(
        makeBlock('newsletter/featured', { image: 'bad-url' }),
        BLOCK_SCHEMAS,
      );
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should validate category with title', () => {
      const errors = validateBlock(
        makeBlock('newsletter/category', { title: 'Tech News' }),
        BLOCK_SCHEMAS,
      );
      expect(errors).toHaveLength(0);
    });

    it('should validate item with all properties', () => {
      const errors = validateBlock(
        makeBlock('newsletter/item', {
          image: 'https://example.com/img.jpg',
          link: 'https://example.com',
          source: 'TechCrunch',
        }),
        BLOCK_SCHEMAS,
      );
      expect(errors).toHaveLength(0);
    });

    it('should validate quickHits with title', () => {
      const errors = validateBlock(
        makeBlock('newsletter/quickHits', { title: 'Quick Links' }),
        BLOCK_SCHEMAS,
      );
      expect(errors).toHaveLength(0);
    });

    it('should validate tools with title', () => {
      const errors = validateBlock(
        makeBlock('newsletter/tools', { title: 'Dev Tools' }),
        BLOCK_SCHEMAS,
      );
      expect(errors).toHaveLength(0);
    });

    it('should validate tipOfTheDay with title', () => {
      const errors = validateBlock(
        makeBlock('newsletter/tipOfTheDay', { title: 'Pro Tip' }),
        BLOCK_SCHEMAS,
      );
      expect(errors).toHaveLength(0);
    });

    it('should validate community with author', () => {
      const errors = validateBlock(
        makeBlock('newsletter/community', { author: 'John Doe' }),
        BLOCK_SCHEMAS,
      );
      expect(errors).toHaveLength(0);
    });

    it('should validate personalNote with no properties', () => {
      const errors = validateBlock(makeBlock('newsletter/personalNote'), BLOCK_SCHEMAS);
      expect(errors).toHaveLength(0);
    });

    it('should validate poll with question and options', () => {
      const errors = validateBlock(
        makeBlock('newsletter/poll', {
          question: 'Favorite language?',
          option1: 'TypeScript',
          option2: 'Rust',
          option3: 'Go',
        }),
        BLOCK_SCHEMAS,
      );
      expect(errors).toHaveLength(0);
    });

    it('should validate recommendations with title', () => {
      const errors = validateBlock(
        makeBlock('newsletter/recommendations', { title: 'Recommended' }),
        BLOCK_SCHEMAS,
      );
      expect(errors).toHaveLength(0);
    });

    it('should validate sponsor with all properties', () => {
      const errors = validateBlock(
        makeBlock('newsletter/sponsor', {
          image: 'https://example.com/sponsor.jpg',
          link: 'https://sponsor.com',
          label: 'Sponsored by Corp',
        }),
        BLOCK_SCHEMAS,
      );
      expect(errors).toHaveLength(0);
    });

    it('should validate outro with ctaUrl and ctaText', () => {
      const errors = validateBlock(
        makeBlock('newsletter/outro', {
          ctaUrl: 'https://example.com/subscribe',
          ctaText: 'Subscribe',
        }),
        BLOCK_SCHEMAS,
      );
      expect(errors).toHaveLength(0);
    });

    it('should validate custom with title', () => {
      const errors = validateBlock(
        makeBlock('newsletter/custom', { title: 'Custom Section' }),
        BLOCK_SCHEMAS,
      );
      expect(errors).toHaveLength(0);
    });
  });
});
