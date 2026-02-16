import { describe, it, expect } from 'bun:test';
import { mkly, CORE_KIT } from '@mklyml/core';
import { NEWSLETTER_KIT } from '../src/index';

describe('newsletter compiler integration', () => {
  it('should handle nested containers', () => {
    const result = mkly(
      `--- use: core\n--- use: newsletter\n\n--- meta\nversion: 1\n\n--- core/section\ntitle: Outer\n\n--- newsletter/category\ntitle: Inner\n\n--- newsletter/item\nNested item\n\n--- /newsletter/category\n\n--- /core/section`,
      { kits: { core: CORE_KIT, newsletter: NEWSLETTER_KIT } },
    );
    expect(result.html).toContain('Outer');
    expect(result.html).toContain('Inner');
    expect(result.html).toContain('Nested item');
  });
});
