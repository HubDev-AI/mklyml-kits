import { describe, it, expect } from 'bun:test';
import { createCompletionData, CORE_SCHEMAS } from '@mklyml/core';
import { CORE_KIT } from '@mklyml/core';
import { NEWSLETTER_KIT, NEWSLETTER_SCHEMAS } from '../src/index';

describe('newsletter completions', () => {
  it('should extract kit completions including newsletter', () => {
    const data = createCompletionData(CORE_SCHEMAS, [CORE_KIT, NEWSLETTER_KIT]);
    expect(data.kits.length).toBe(2);
    expect(data.kits[0].label).toBe('core');
    expect(data.kits[0].type).toBe('kit');
    expect(data.kits[1].label).toBe('newsletter');
  });

  it('should handle combined core + newsletter schemas', () => {
    const data = createCompletionData(CORE_SCHEMAS, [NEWSLETTER_KIT]);
    const newsletterBlocks = data.blocks.filter(b => b.label.startsWith('newsletter/'));
    expect(newsletterBlocks.length).toBe(14);

    const featured = data.blocks.find(b => b.label === 'newsletter/featured');
    expect(featured).toBeDefined();
    expect(featured!.description).toBe('Featured article highlight with image and source');

    const featuredProps = data.properties.get('newsletter/featured');
    expect(featuredProps).toBeDefined();
    expect(featuredProps!.find(p => p.label === 'source')).toBeDefined();
  });

  it('should have descriptions for all newsletter schemas', () => {
    for (const schema of NEWSLETTER_SCHEMAS) {
      expect(schema.description.length).toBeGreaterThan(0);
    }
  });
});
