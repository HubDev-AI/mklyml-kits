import { describe, it, expect } from 'bun:test';
import { mkly } from '@mklyml/core';
import { NEWSLETTER_KIT } from '../src/index';
import { CORE_KIT } from '@mklyml/core';

describe('newsletter style integration', () => {
  it('should work with newsletter blocks and styles', () => {
    const result = mkly(`
--- use: newsletter

--- meta
version: 1

--- style
accent: purple

featured {
  border: 2px solid $accent
}

--- newsletter/featured
link: https://example.com

## Big Story

Some content here.
    `, { kits: { newsletter: NEWSLETTER_KIT } });
    expect(result.html).toContain('mkly-newsletter-featured');
    expect(result.html).toContain('border: 0.125rem solid var(--mkly-accent);');
  });
});
