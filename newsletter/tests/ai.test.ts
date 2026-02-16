import { describe, it, expect } from 'bun:test';
import { buildMklySystemPrompt, validateMklyOutput } from '@mklyml/core';
import { NEWSLETTER_KIT, NEWSLETTER_SCHEMAS } from '../src/index';

describe('newsletter AI integration', () => {
  describe('buildMklySystemPrompt with newsletter', () => {
    it('should include newsletter blocks when extraSchemas specified', () => {
      const prompt = buildMklySystemPrompt({ extraSchemas: NEWSLETTER_SCHEMAS });
      expect(prompt).toContain('intro');
      expect(prompt).toContain('featured');
      expect(prompt).toContain('category');
    });
  });

  describe('validateMklyOutput with newsletter', () => {
    it('should accept newsletter blocks with kit provided', () => {
      const result = validateMklyOutput('--- use: newsletter\n\n--- meta\nversion: 1\n\n--- newsletter/intro\n\nWelcome!', {
        kits: { newsletter: NEWSLETTER_KIT },
        extraSchemas: NEWSLETTER_SCHEMAS,
      });
      expect(result.valid).toBe(true);
    });

    it('should validate a complete newsletter', () => {
      const source = `--- use: newsletter

--- meta
version: 1
title: Test

--- newsletter/intro

Welcome!

--- newsletter/category: News

--- newsletter/item
source: TechCrunch

Story content.

--- /newsletter/category

--- newsletter/outro
ctaUrl: https://example.com
ctaText: Read More

Thanks!`;
      const result = validateMklyOutput(source, {
        kits: { newsletter: NEWSLETTER_KIT },
        extraSchemas: NEWSLETTER_SCHEMAS,
      });
      expect(result.valid).toBe(true);
      const errors = result.errors.filter(e => e.severity === 'error');
      expect(errors).toHaveLength(0);
    });
  });
});
