import type { MklyTheme } from '@mklyml/core';

export const NEWSLETTER_THEMES: MklyTheme[] = [
  {
    name: 'default',
    displayName: 'Newsletter/Default',
    description: 'Refined indigo — deep blue on clean white with warm neutral accents',
    variables: {
      accent: '#4f46e5',
      accentHover: '#4338ca',
      bg: '#ffffff',
      text: '#1e1b4b',
      muted: '#6b7280',
      border: '#e5e7eb',
      bgSubtle: '#f8f9fc',
      buttonText: '#ffffff',
      codeBg: '#f1f5f9',
      radius: '0.5rem',
      fontBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
      spacing: '1.5rem',
    },
    rawCss: `/* Newsletter/Default — refined indigo on white, warm neutral accents */

/* document base */
.mkly-document { color: var(--mkly-text); background: var(--mkly-bg); }
.mkly-document p { color: var(--mkly-text); }
.mkly-document a { color: var(--mkly-accent); text-decoration-color: #c7d2fe; }
.mkly-document a:not([class]):hover { color: var(--mkly-accent-hover); text-decoration-color: var(--mkly-accent-hover); }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: var(--mkly-text); letter-spacing: -0.02em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: var(--mkly-text); }
.mkly-document strong { color: var(--mkly-text); }
.mkly-document em { color: var(--mkly-text); }
.mkly-document blockquote { color: var(--mkly-muted); border-left: 0.1875rem solid #c7d2fe; padding: 0.875rem 1.25rem; background: #eef2ff; }
.mkly-document hr { border: none; height: 0.0625rem; background: linear-gradient(90deg, transparent, #e5e7eb 20%, #e5e7eb 80%, transparent); }
.mkly-document code:not(pre code) { background: #eef2ff; color: var(--mkly-accent); padding: 0.125rem 0.4375rem; border-radius: 0.25rem; font-size: 0.87em; }
.mkly-document pre { background: var(--mkly-bg-subtle); border: 0.0625rem solid var(--mkly-border); }
.mkly-document img { border-radius: 0.5rem; }
.mkly-document ul, .mkly-document ol { color: var(--mkly-text); }
.mkly-document li::marker { color: var(--mkly-accent); }

/* core blocks */
.mkly-core-heading { color: var(--mkly-text); }
.mkly-core-text { color: var(--mkly-text); }
.mkly-core-button__link { background: var(--mkly-accent); color: var(--mkly-button-text); box-shadow: 0 0.0625rem 0.125rem rgba(79,70,229,0.2); }
.mkly-core-button__link:hover { background: var(--mkly-accent-hover); box-shadow: 0 0.125rem 0.5rem rgba(79,70,229,0.25); }
.mkly-core-divider { background: linear-gradient(90deg, transparent, var(--mkly-border) 20%, var(--mkly-border) 80%, transparent); }
.mkly-core-code { background: var(--mkly-bg-subtle); border: 0.0625rem solid var(--mkly-border); }
.mkly-core-code pre { background: transparent; border: none; color: var(--mkly-text); }
.mkly-core-quote { color: var(--mkly-muted); border-left: 0.1875rem solid #c7d2fe; background: #eef2ff; }
.mkly-core-quote__author { color: var(--mkly-muted); }
.mkly-core-hero { background: #f8f9fc; border: 0.0625rem solid #eef2ff; }
.mkly-core-section { border-top: 0.0625rem solid var(--mkly-border); }
.mkly-core-section__title { color: var(--mkly-text); border-bottom: 0.125rem solid var(--mkly-accent); }
.mkly-core-card { background: var(--mkly-bg); border: 0.0625rem solid var(--mkly-border); box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.04), 0 0.0625rem 0.125rem rgba(0,0,0,0.02); }
.mkly-core-card__body h2 { color: var(--mkly-text); }
.mkly-core-card__link { color: var(--mkly-accent); }
.mkly-core-card__link:hover { color: var(--mkly-accent-hover); }
.mkly-core-list { color: var(--mkly-text); }
.mkly-core-header { border-bottom: 0.125rem solid var(--mkly-text); }
.mkly-core-header__title { color: var(--mkly-text); }
.mkly-core-footer { color: var(--mkly-muted); border-top: 0.0625rem solid var(--mkly-border); }
.mkly-core-footer a { color: var(--mkly-muted); }
.mkly-core-footer a:hover { color: var(--mkly-accent); }
.mkly-core-cta { background: linear-gradient(135deg, #eef2ff, #f5f3ff); border: 0.0625rem solid #e0e7ff; }
.mkly-core-cta__button { background: var(--mkly-accent); color: var(--mkly-button-text); box-shadow: 0 0.0625rem 0.125rem rgba(79,70,229,0.2); }
.mkly-core-cta__button:hover { background: var(--mkly-accent-hover); box-shadow: 0 0.125rem 0.5rem rgba(79,70,229,0.25); }

/* newsletter blocks */
.mkly-newsletter-intro { color: var(--mkly-text); }
.mkly-newsletter-featured { background: var(--mkly-bg); border: 0.0625rem solid var(--mkly-border); box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04); }
.mkly-newsletter-featured__source { color: var(--mkly-accent); background: #eef2ff; border: 0.0625rem solid #e0e7ff; }
.mkly-newsletter-featured__author { color: var(--mkly-muted); }
.mkly-newsletter-featured__link { color: var(--mkly-accent); }
.mkly-newsletter-featured__link:hover { color: var(--mkly-accent-hover); }
.mkly-newsletter-category { border-top: 0.125rem solid var(--mkly-text); }
.mkly-newsletter-category__title { color: var(--mkly-text); border-bottom: none; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #f3f4f6; }
.mkly-newsletter-item__source { color: var(--mkly-accent); }
.mkly-newsletter-item__link { color: var(--mkly-accent); }
.mkly-newsletter-item__link:hover { color: var(--mkly-accent-hover); }
.mkly-newsletter-quickHits { background: #f8f9fc; border-left: 0.1875rem solid #4f46e5; }
.mkly-newsletter-quickHits__title { color: var(--mkly-text); }
.mkly-newsletter-quickHits a { color: var(--mkly-accent); }
.mkly-newsletter-tools { background: #f8f9fc; border: 0.0625rem solid #eef2ff; }
.mkly-newsletter-tools__title { color: var(--mkly-text); }
.mkly-newsletter-tools a { color: var(--mkly-accent); }
.mkly-newsletter-tipOfTheDay { background: #fffbeb; border-left: 0.1875rem solid #f59e0b; }
.mkly-newsletter-tipOfTheDay__title { color: var(--mkly-accent); }
.mkly-newsletter-community { background: #f8f9fc; }
.mkly-newsletter-community__quote { color: var(--mkly-muted); border-left: 0.1875rem solid #c7d2fe; padding: 0.625rem 1.125rem; font-style: italic; }
.mkly-newsletter-community__author { color: var(--mkly-text); font-style: normal; }
.mkly-newsletter-personalNote { color: var(--mkly-text); background: #fefce8; border-left: 0.1875rem solid #eab308; }
.mkly-newsletter-poll { background: #f8f9fc; border: 0.0625rem solid #eef2ff; }
.mkly-newsletter-poll__question { color: var(--mkly-text); }
.mkly-newsletter-poll__option { color: var(--mkly-accent); border: 0.0625rem solid #e0e7ff; background: var(--mkly-bg); }
.mkly-newsletter-poll__option:hover { border-color: var(--mkly-accent); background: #eef2ff; color: var(--mkly-accent-hover); }
.mkly-newsletter-recommendations { background: #f8f9fc; border: 0.0625rem solid #eef2ff; }
.mkly-newsletter-recommendations__title { color: var(--mkly-text); }
.mkly-newsletter-recommendations a { color: var(--mkly-accent); }
.mkly-newsletter-sponsor { background: #fafafa; border: 0.0625rem dashed #d1d5db; }
.mkly-newsletter-sponsor__badge { color: var(--mkly-muted); text-transform: uppercase; letter-spacing: 0.08em; }
.mkly-newsletter-sponsor__link { color: var(--mkly-accent); }
.mkly-newsletter-sponsor__link:hover { color: var(--mkly-accent-hover); }
.mkly-newsletter-outro { color: var(--mkly-muted); }
.mkly-newsletter-outro__cta { background: var(--mkly-accent); color: var(--mkly-button-text); box-shadow: 0 0.0625rem 0.125rem rgba(79,70,229,0.2); }
.mkly-newsletter-outro__cta:hover { background: var(--mkly-accent-hover); }
.mkly-newsletter-custom { background: #f8f9fc; border: 0.0625rem solid #eef2ff; }
.mkly-newsletter-custom__title { color: var(--mkly-text); }`,
  },
  {
    name: 'light',
    displayName: 'Newsletter/Light',
    description: 'Warm editorial — terracotta accent on rich cream, magazine typography',
    variables: {
      accent: '#c2410c',
      accentHover: '#9a3412',
      bg: '#faf8f3',
      text: '#2c1810',
      muted: '#7a6b5d',
      border: '#e8ddd0',
      bgSubtle: '#f3ede4',
      buttonText: '#ffffff',
      codeBg: '#f3ede4',
      radius: '0.375rem',
      fontBody: "'Georgia', 'Iowan Old Style', 'Palatino Linotype', serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', monospace",
      spacing: '1.75rem',
    },
    rawCss: `/* Newsletter/Light — warm editorial, terracotta on rich cream */

/* document base */
.mkly-document { color: #2c1810; background: #faf8f3; }
.mkly-document p { color: #44332a; }
.mkly-document a { color: #c2410c; }
.mkly-document a:not([class]):hover { color: #9a3412; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #1a0f09; letter-spacing: -0.015em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #2c1810; }
.mkly-document strong { color: #1a0f09; }
.mkly-document em { color: #5c4a3e; }
.mkly-document blockquote { color: #7a6b5d; border-left: 0.125rem solid #c2410c; padding: 1rem 1.5rem; background: #fdf6ee; }
.mkly-document hr { border: none; height: 0.0625rem; background: #d4c4b0; }
.mkly-document code:not(pre code) { background: #f3ede4; color: #9a3412; padding: 0.125rem 0.375rem; border-radius: 0.1875rem; font-size: 0.86em; border: 0.0625rem solid #e8ddd0; }
.mkly-document pre { background: #f3ede4; border: 0.0625rem solid #e0d3c3; }
.mkly-document img { border-radius: 0.25rem; }
.mkly-document ul, .mkly-document ol { color: #44332a; }
.mkly-document li::marker { color: #c2410c; }

/* core blocks */
.mkly-core-heading { color: #1a0f09; }
.mkly-core-text { color: #44332a; }
.mkly-core-button__link { background: #c2410c; color: #ffffff; }
.mkly-core-button__link:hover { background: #9a3412; }
.mkly-core-divider { background: #d4c4b0; }
.mkly-core-code { background: #f3ede4; border: 0.0625rem solid #e0d3c3; }
.mkly-core-code pre { background: transparent; border: none; color: #44332a; }
.mkly-core-quote { color: #5c4a3e; border-left: 0.125rem solid #c2410c; background: #fdf6ee; }
.mkly-core-quote__author { color: #7a6b5d; }
.mkly-core-hero { background: #f3ede4; }
.mkly-core-section { border-top: 0.0625rem solid #d4c4b0; }
.mkly-core-section__title { color: #1a0f09; border-bottom: 0.125rem solid #c2410c; }
.mkly-core-card { background: #ffffff; border: 0.0625rem solid #e8ddd0; box-shadow: 0 0.0625rem 0.1875rem rgba(44,24,16,0.05); }
.mkly-core-card__body h2 { color: #1a0f09; }
.mkly-core-card__link { color: #c2410c; }
.mkly-core-card__link:hover { color: #9a3412; }
.mkly-core-list { color: #44332a; }
.mkly-core-header { border-bottom: 0.0625rem solid #d4c4b0; }
.mkly-core-header__title { color: #1a0f09; letter-spacing: -0.02em; }
.mkly-core-footer { color: #a0917f; border-top: 0.0625rem solid #d4c4b0; }
.mkly-core-footer a { color: #a0917f; }
.mkly-core-footer a:hover { color: #c2410c; }
.mkly-core-cta { background: #fdf6ee; border: 0.0625rem solid #f0d9c0; }
.mkly-core-cta__button { background: #c2410c; color: #ffffff; }
.mkly-core-cta__button:hover { background: #9a3412; }

/* newsletter blocks */
.mkly-newsletter-intro { color: #5c4a3e; }
.mkly-newsletter-featured { background: #ffffff; border: 0.0625rem solid #e8ddd0; box-shadow: 0 0.125rem 0.375rem rgba(44,24,16,0.05); }
.mkly-newsletter-featured__source { color: #9a3412; background: #fef3e2; border: 0.0625rem solid #f5dcc4; }
.mkly-newsletter-featured__author { color: #a0917f; }
.mkly-newsletter-featured__link { color: #c2410c; }
.mkly-newsletter-featured__link:hover { color: #9a3412; }
.mkly-newsletter-category { border-top: 0.0625rem solid #d4c4b0; }
.mkly-newsletter-category__title { color: #1a0f09; border-bottom: 0.125rem solid #c2410c; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #f0e6d9; }
.mkly-newsletter-item__source { color: #c2410c; }
.mkly-newsletter-item__link { color: #c2410c; }
.mkly-newsletter-item__link:hover { color: #9a3412; }
.mkly-newsletter-quickHits { background: #fef3e2; border: 0.0625rem solid #f5dcc4; }
.mkly-newsletter-quickHits__title { color: #78350f; }
.mkly-newsletter-quickHits a { color: #c2410c; }
.mkly-newsletter-tools { background: #f3ede4; border: 0.0625rem solid #e0d3c3; }
.mkly-newsletter-tools__title { color: #1a0f09; }
.mkly-newsletter-tools a { color: #c2410c; }
.mkly-newsletter-tipOfTheDay { background: #fdf6ee; border-left: 0.1875rem solid #ea580c; }
.mkly-newsletter-tipOfTheDay__title { color: #c2410c; }
.mkly-newsletter-community { background: #f3ede4; }
.mkly-newsletter-community__quote { color: #5c4a3e; border-left: 0.125rem solid #d4c4b0; padding: 0.625rem 1.25rem; font-style: italic; }
.mkly-newsletter-community__author { color: #2c1810; font-style: normal; }
.mkly-newsletter-personalNote { color: #5c4a3e; background: #fdf6ee; border-left: 0.1875rem solid #d97706; }
.mkly-newsletter-poll { background: #f3ede4; border: 0.0625rem solid #e0d3c3; }
.mkly-newsletter-poll__question { color: #1a0f09; }
.mkly-newsletter-poll__option { color: #c2410c; border: 0.0625rem solid #e8ddd0; background: #faf8f3; }
.mkly-newsletter-poll__option:hover { border-color: #c2410c; background: #fef3e2; }
.mkly-newsletter-recommendations { background: #f3ede4; }
.mkly-newsletter-recommendations__title { color: #1a0f09; }
.mkly-newsletter-recommendations a { color: #c2410c; }
.mkly-newsletter-sponsor { background: #f3ede4; border: 0.0625rem dashed #d4c4b0; }
.mkly-newsletter-sponsor__badge { color: #a0917f; }
.mkly-newsletter-sponsor__link { color: #c2410c; }
.mkly-newsletter-sponsor__link:hover { color: #9a3412; }
.mkly-newsletter-outro { color: #a0917f; }
.mkly-newsletter-outro__cta { background: #c2410c; color: #ffffff; }
.mkly-newsletter-outro__cta:hover { background: #9a3412; }
.mkly-newsletter-custom { background: #f3ede4; border: 0.0625rem solid #e0d3c3; }
.mkly-newsletter-custom__title { color: #1a0f09; }`,
  },
  {
    name: 'dark',
    displayName: 'Newsletter/Warm Night',
    description: 'Warm night — honey gold on deep espresso, cozy candlelit reading',
    variables: {
      accent: '#e2a33c',
      accentHover: '#c88a28',
      bg: '#12100d',
      text: '#f0e8da',
      muted: '#9a8b78',
      border: '#2e2620',
      bgSubtle: '#1c1914',
      buttonText: '#12100d',
      codeBg: '#1a1610',
      radius: '0.5rem',
      fontBody: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
      spacing: '1.5rem',
    },
    rawCss: `/* Newsletter/Warm Night — honey gold on deep espresso, candlelit warmth */

/* document base */
.mkly-document { color: #f0e8da; background: #12100d; }
.mkly-document p { color: #d4c8b4; }
.mkly-document a { color: #f0c060; }
.mkly-document a:not([class]):hover { color: #e2a33c; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #f5efe4; letter-spacing: -0.01em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #e8dcc8; }
.mkly-document strong { color: #f5efe4; }
.mkly-document em { color: #c4b49e; }
.mkly-document blockquote { color: #9a8b78; border-left: 0.125rem solid #e2a33c; padding: 0.875rem 1.375rem; background: rgba(226,163,60,0.06); }
.mkly-document hr { border: none; height: 0.0625rem; background: linear-gradient(90deg, transparent, #3a302a 20%, #3a302a 80%, transparent); }
.mkly-document code:not(pre code) { background: rgba(226,163,60,0.1); color: #f0c060; padding: 0.125rem 0.4375rem; border-radius: 0.25rem; font-size: 0.87em; }
.mkly-document pre { background: #1a1610; border: 0.0625rem solid #2e2620; }
.mkly-document img { border-radius: 0.5rem; }
.mkly-document ul, .mkly-document ol { color: #d4c8b4; }
.mkly-document li::marker { color: #e2a33c; }

/* core blocks */
.mkly-core-heading { color: #f5efe4; }
.mkly-core-text { color: #d4c8b4; }
.mkly-core-button__link { background: #e2a33c; color: #12100d; box-shadow: 0 0.0625rem 0.25rem rgba(226,163,60,0.15); }
.mkly-core-button__link:hover { background: #c88a28; box-shadow: 0 0.125rem 0.625rem rgba(226,163,60,0.25); }
.mkly-core-divider { background: linear-gradient(90deg, transparent, #3a302a 20%, #3a302a 80%, transparent); }
.mkly-core-code { background: #1a1610; border: 0.0625rem solid #2e2620; }
.mkly-core-code pre { background: transparent; border: none; color: #c4b49e; }
.mkly-core-quote { color: #b8a890; border-left: 0.125rem solid #e2a33c; background: rgba(226,163,60,0.06); }
.mkly-core-quote__author { color: #9a8b78; }
.mkly-core-hero { background: #1c1914; border: 0.0625rem solid #2e2620; }
.mkly-core-section { border-top: 0.0625rem solid #2e2620; }
.mkly-core-section__title { color: #f5efe4; border-bottom: 0.125rem solid #e2a33c; }
.mkly-core-card { background: #1c1914; border: 0.0625rem solid #2e2620; box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.2); }
.mkly-core-card__body h2 { color: #f5efe4; }
.mkly-core-card__link { color: #f0c060; }
.mkly-core-card__link:hover { color: #e2a33c; }
.mkly-core-list { color: #d4c8b4; }
.mkly-core-header { border-bottom: 0.0625rem solid #3a302a; }
.mkly-core-header__title { color: #f5efe4; }
.mkly-core-footer { color: #726456; border-top: 0.0625rem solid #2e2620; }
.mkly-core-footer a { color: #726456; }
.mkly-core-footer a:hover { color: #f0c060; }
.mkly-core-cta { background: rgba(226,163,60,0.06); border: 0.0625rem solid rgba(226,163,60,0.12); }
.mkly-core-cta__button { background: #e2a33c; color: #12100d; box-shadow: 0 0.0625rem 0.25rem rgba(226,163,60,0.15); }
.mkly-core-cta__button:hover { background: #c88a28; box-shadow: 0 0.125rem 0.625rem rgba(226,163,60,0.25); }

/* newsletter blocks */
.mkly-newsletter-intro { color: #c4b49e; }
.mkly-newsletter-featured { background: #1c1914; border: 0.0625rem solid #2e2620; box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.2); }
.mkly-newsletter-featured__source { color: #e2a33c; background: rgba(226,163,60,0.12); border: 0.0625rem solid rgba(226,163,60,0.18); }
.mkly-newsletter-featured__author { color: #726456; }
.mkly-newsletter-featured__link { color: #f0c060; }
.mkly-newsletter-featured__link:hover { color: #e2a33c; }
.mkly-newsletter-category { border-top: 0.0625rem solid #3a302a; }
.mkly-newsletter-category__title { color: #f5efe4; border-bottom: 0.125rem solid #e2a33c; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #221e18; }
.mkly-newsletter-item__source { color: #e2a33c; }
.mkly-newsletter-item__link { color: #f0c060; }
.mkly-newsletter-item__link:hover { color: #e2a33c; }
.mkly-newsletter-quickHits { background: rgba(226,163,60,0.05); border: 0.0625rem solid rgba(226,163,60,0.10); border-left: 0.1875rem solid #e2a33c; }
.mkly-newsletter-quickHits__title { color: #f5efe4; }
.mkly-newsletter-quickHits a { color: #f0c060; }
.mkly-newsletter-tools { background: #1c1914; border: 0.0625rem solid #2e2620; }
.mkly-newsletter-tools__title { color: #f5efe4; }
.mkly-newsletter-tools a { color: #f0c060; }
.mkly-newsletter-tipOfTheDay { background: rgba(226,163,60,0.06); border-left: 0.1875rem solid #e2a33c; border: 0.0625rem solid rgba(226,163,60,0.10); border-left: 0.1875rem solid #e2a33c; }
.mkly-newsletter-tipOfTheDay__title { color: #e2a33c; }
.mkly-newsletter-community { background: #1c1914; }
.mkly-newsletter-community__quote { color: #b8a890; border-left: 0.125rem solid #4a3e32; padding: 0.625rem 1.25rem; font-style: italic; }
.mkly-newsletter-community__author { color: #e8dcc8; font-style: normal; }
.mkly-newsletter-personalNote { color: #d4c8b4; background: rgba(217,119,6,0.06); border-left: 0.1875rem solid #b45309; }
.mkly-newsletter-poll { background: #1c1914; border: 0.0625rem solid #2e2620; }
.mkly-newsletter-poll__question { color: #f5efe4; }
.mkly-newsletter-poll__option { color: #f0c060; border: 0.0625rem solid #3a302a; background: #12100d; }
.mkly-newsletter-poll__option:hover { border-color: #e2a33c; background: rgba(226,163,60,0.08); color: #e2a33c; }
.mkly-newsletter-recommendations { background: #1c1914; border: 0.0625rem solid #2e2620; }
.mkly-newsletter-recommendations__title { color: #f5efe4; }
.mkly-newsletter-recommendations a { color: #f0c060; }
.mkly-newsletter-sponsor { background: #1a1610; border: 0.0625rem dashed #3a302a; }
.mkly-newsletter-sponsor__badge { color: #726456; }
.mkly-newsletter-sponsor__link { color: #f0c060; }
.mkly-newsletter-sponsor__link:hover { color: #e2a33c; }
.mkly-newsletter-outro { color: #9a8b78; }
.mkly-newsletter-outro__cta { background: #e2a33c; color: #12100d; box-shadow: 0 0.0625rem 0.25rem rgba(226,163,60,0.15); }
.mkly-newsletter-outro__cta:hover { background: #c88a28; box-shadow: 0 0.125rem 0.625rem rgba(226,163,60,0.25); }
.mkly-newsletter-custom { background: #1c1914; border: 0.0625rem solid #2e2620; }
.mkly-newsletter-custom__title { color: #f5efe4; }`,
  },
  {
    name: 'neon-pulse',
    displayName: 'Newsletter/Neon Pulse',
    description: 'Electric green on pure black — tech-forward with vivid neon glow',
    variables: {
      accent: '#00ff87',
      accentHover: '#00cc6a',
      bg: '#000000',
      text: '#e0e0e0',
      muted: '#666666',
      border: '#1a1a1a',
      bgSubtle: '#0a0a0a',
      buttonText: '#000000',
      codeBg: '#0d0d0d',
      radius: '0.25rem',
      fontBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
      spacing: '1.375rem',
    },
    rawCss: `
.mkly-document { color: #e0e0e0; background: #000000; }
.mkly-document p { color: #b0b0b0; }
.mkly-document a { color: #00ff87; }
.mkly-document a:not([class]):hover { color: #00cc6a; text-shadow: 0 0 0.5rem rgba(0,255,135,0.4); }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #ffffff; letter-spacing: -0.03em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #e0e0e0; }
.mkly-document strong { color: #ffffff; }
.mkly-document em { color: #888888; }
.mkly-document blockquote { color: #999999; border-left: 0.1875rem solid #00ff87; padding: 1rem 1.5rem; background: #0a0f0a; }
.mkly-document hr { border: none; height: 0.0625rem; background: #1a1a1a; }
.mkly-document code:not(pre code) { background: #001a0d; color: #00ff87; padding: 0.1875rem 0.5rem; border-radius: 0.1875rem; font-size: 0.87em; border: 0.0625rem solid #003319; }
.mkly-document pre { background: #050505; border: 0.0625rem solid #1a1a1a; }
.mkly-document img { border-radius: 0.25rem; }
.mkly-document ul, .mkly-document ol { color: #b0b0b0; }
.mkly-document li::marker { color: #00ff87; }

.mkly-core-heading { color: #ffffff; }
.mkly-core-text { color: #b0b0b0; }
.mkly-core-button__link { background: #00ff87; color: #000000; font-weight: 700; box-shadow: 0 0 1.25rem rgba(0,255,135,0.25), 0 0 0.25rem rgba(0,255,135,0.5); }
.mkly-core-button__link:hover { background: #00cc6a; box-shadow: 0 0 1.875rem rgba(0,255,135,0.35), 0 0 0.375rem rgba(0,255,135,0.6); }
.mkly-core-divider { background: #1a1a1a; }
.mkly-core-code { background: #050505; border: 0.0625rem solid #1a1a1a; }
.mkly-core-code pre { background: transparent; border: none; color: #999999; }
.mkly-core-quote { color: #999999; border-left: 0.1875rem solid #00ff87; background: #0a0f0a; }
.mkly-core-quote__author { color: #666666; }
.mkly-core-hero { background: #050505; border: 0.0625rem solid #1a1a1a; }
.mkly-core-section { border-top: 0.0625rem solid #1a1a1a; }
.mkly-core-section__title { color: #00ff87; border-bottom: none; text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.85em; }
.mkly-core-card { background: #0a0a0a; border: 0.0625rem solid #1f1f1f; }
.mkly-core-card__body h2 { color: #ffffff; }
.mkly-core-card__link { color: #00ff87; }
.mkly-core-card__link:hover { color: #00cc6a; }
.mkly-core-list { color: #b0b0b0; }
.mkly-core-header { border-bottom: 0.125rem solid #00ff87; }
.mkly-core-header__title { color: #ffffff; }
.mkly-core-footer { color: #444444; border-top: 0.0625rem solid #1a1a1a; }
.mkly-core-footer a { color: #444444; }
.mkly-core-footer a:hover { color: #00ff87; }
.mkly-core-cta { background: #001a0d; border: 0.0625rem solid #003319; }
.mkly-core-cta__button { background: #00ff87; color: #000000; font-weight: 700; box-shadow: 0 0 1.25rem rgba(0,255,135,0.25); }
.mkly-core-cta__button:hover { background: #00cc6a; box-shadow: 0 0 1.875rem rgba(0,255,135,0.35); }

.mkly-newsletter-intro { color: #888888; }
.mkly-newsletter-featured { background: #0a0a0a; border: 0.0625rem solid #00ff87; box-shadow: 0 0 0.9375rem rgba(0,255,135,0.08); }
.mkly-newsletter-featured__source { color: #000000; background: #00ff87; border: none; font-weight: 600; }
.mkly-newsletter-featured__author { color: #555555; }
.mkly-newsletter-featured__link { color: #00ff87; }
.mkly-newsletter-featured__link:hover { color: #00cc6a; }
.mkly-newsletter-category { border-top: 0.0625rem solid #1a1a1a; }
.mkly-newsletter-category__title { color: #00ff87; border-bottom: none; text-transform: uppercase; letter-spacing: 0.08em; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #111111; }
.mkly-newsletter-item__source { color: #00cc6a; }
.mkly-newsletter-item__link { color: #00ff87; }
.mkly-newsletter-item__link:hover { color: #00cc6a; }
.mkly-newsletter-quickHits { background: #0d001a; border-left: 0.1875rem solid #b347ff; }
.mkly-newsletter-quickHits__title { color: #b347ff; text-transform: uppercase; letter-spacing: 0.06em; }
.mkly-newsletter-quickHits a { color: #d180ff; }
.mkly-newsletter-tools { background: #0a0a0a; border: 0.0625rem solid #1f1f1f; }
.mkly-newsletter-tools__title { color: #ffffff; }
.mkly-newsletter-tools a { color: #00ff87; }
.mkly-newsletter-tipOfTheDay { background: #1a1000; border: 0.0625rem solid #332600; border-left: 0.25rem solid #ffcc00; }
.mkly-newsletter-tipOfTheDay__title { color: #ffcc00; }
.mkly-newsletter-community { background: #050505; }
.mkly-newsletter-community__quote { color: #888888; border-left: 0.1875rem solid #333333; padding: 0.75rem 1.25rem; font-style: italic; }
.mkly-newsletter-community__author { color: #e0e0e0; font-style: normal; }
.mkly-newsletter-personalNote { color: #b0b0b0; background: #00100a; border-left: 0.25rem solid #00ff87; }
.mkly-newsletter-poll { background: #0a0a0a; border: 0.0625rem solid #1f1f1f; }
.mkly-newsletter-poll__question { color: #ffffff; }
.mkly-newsletter-poll__option { color: #00ff87; border: 0.0625rem solid #003319; background: #000000; }
.mkly-newsletter-poll__option:hover { background: #001a0d; border-color: #00ff87; box-shadow: 0 0 0.625rem rgba(0,255,135,0.15); }
.mkly-newsletter-recommendations { background: #0a000d; border: 0.0625rem solid #1a0022; }
.mkly-newsletter-recommendations__title { color: #d180ff; }
.mkly-newsletter-recommendations a { color: #b347ff; }
.mkly-newsletter-sponsor { background: #0a0a0a; border: 0.0625rem dashed #222222; }
.mkly-newsletter-sponsor__badge { color: #444444; text-transform: uppercase; letter-spacing: 0.1em; }
.mkly-newsletter-sponsor__link { color: #00ff87; }
.mkly-newsletter-sponsor__link:hover { color: #00cc6a; }
.mkly-newsletter-outro { color: #666666; }
.mkly-newsletter-outro__cta { background: #00ff87; color: #000000; font-weight: 700; box-shadow: 0 0 1.25rem rgba(0,255,135,0.25); }
.mkly-newsletter-outro__cta:hover { background: #00cc6a; }
.mkly-newsletter-custom { background: #0a0a0a; border: 0.0625rem solid #1f1f1f; }
.mkly-newsletter-custom__title { color: #ffffff; }`,
  },
  {
    name: 'zen-garden',
    displayName: 'Newsletter/Zen Garden',
    description: 'Pine green and terracotta on warm stone — Japanese wabi-sabi serenity',
    variables: {
      accent: '#2d6a4f',
      accentHover: '#1b4332',
      bg: '#f4f0e8',
      text: '#1a1a16',
      muted: '#7a7568',
      border: '#d4ccba',
      bgSubtle: '#eae4d8',
      buttonText: '#ffffff',
      codeBg: '#e6e0d2',
      radius: '0.125rem',
      fontBody: "'Georgia', 'Iowan Old Style', 'Palatino Linotype', serif",
      fontHeading: "'Georgia', 'Iowan Old Style', 'Palatino Linotype', serif",
      fontMono: "'JetBrains Mono', 'SF Mono', monospace",
      spacing: '1.875rem',
    },
    rawCss: `
.mkly-document { color: #1a1a16; background: #f4f0e8; }
.mkly-document p { color: #3a3830; }
.mkly-document a { color: #2d6a4f; text-decoration-color: #95d5b2; }
.mkly-document a:not([class]):hover { color: #1b4332; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #0d0d0a; letter-spacing: 0; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #1a1a16; }
.mkly-document strong { color: #0d0d0a; }
.mkly-document em { color: #5c5a50; }
.mkly-document blockquote { color: #5c5a50; border-left: 0.125rem solid #2d6a4f; padding: 1.125rem 1.75rem; background: #eae4d8; }
.mkly-document hr { border: none; height: 0.0625rem; background: #c4bcaa; }
.mkly-document code:not(pre code) { background: #e0dace; color: #1b4332; padding: 0.125rem 0.375rem; border-radius: 0.125rem; font-size: 0.86em; }
.mkly-document pre { background: #e6e0d2; border: 0.0625rem solid #d4ccba; }
.mkly-document img { border-radius: 0.125rem; }
.mkly-document ul, .mkly-document ol { color: #3a3830; }
.mkly-document li::marker { color: #2d6a4f; }

.mkly-core-heading { color: #0d0d0a; }
.mkly-core-text { color: #3a3830; }
.mkly-core-button__link { background: #2d6a4f; color: #f4f0e8; }
.mkly-core-button__link:hover { background: #1b4332; }
.mkly-core-divider { background: #c4bcaa; }
.mkly-core-code { background: #e6e0d2; border: 0.0625rem solid #d4ccba; }
.mkly-core-code pre { background: transparent; border: none; color: #3a3830; }
.mkly-core-quote { color: #5c5a50; border-left: 0.125rem solid #2d6a4f; background: #eae4d8; }
.mkly-core-quote__author { color: #7a7568; }
.mkly-core-hero { background: #eae4d8; }
.mkly-core-section { border-top: 0.0625rem solid #c4bcaa; }
.mkly-core-section__title { color: #0d0d0a; border-bottom: none; }
.mkly-core-card { background: #faf7f0; border: 0.0625rem solid #d4ccba; }
.mkly-core-card__body h2 { color: #0d0d0a; }
.mkly-core-card__link { color: #2d6a4f; }
.mkly-core-card__link:hover { color: #1b4332; }
.mkly-core-list { color: #3a3830; }
.mkly-core-header { border-bottom: 0.0625rem solid #c4bcaa; }
.mkly-core-header__title { color: #0d0d0a; }
.mkly-core-footer { color: #9a9488; border-top: 0.0625rem solid #c4bcaa; }
.mkly-core-footer a { color: #9a9488; }
.mkly-core-footer a:hover { color: #2d6a4f; }
.mkly-core-cta { background: #dfd8c8; border: 0.0625rem solid #c4bcaa; }
.mkly-core-cta__button { background: #2d6a4f; color: #f4f0e8; }
.mkly-core-cta__button:hover { background: #1b4332; }

.mkly-newsletter-intro { color: #5c5a50; }
.mkly-newsletter-featured { background: #faf7f0; border: 0.0625rem solid #c4bcaa; }
.mkly-newsletter-featured__source { color: #f4f0e8; background: #2d6a4f; border: none; }
.mkly-newsletter-featured__author { color: #9a9488; }
.mkly-newsletter-featured__link { color: #2d6a4f; }
.mkly-newsletter-featured__link:hover { color: #1b4332; }
.mkly-newsletter-category { border-top: 0.0625rem solid #c4bcaa; }
.mkly-newsletter-category__title { color: #0d0d0a; border-bottom: none; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #ddd6c6; }
.mkly-newsletter-item__source { color: #2d6a4f; }
.mkly-newsletter-item__link { color: #2d6a4f; }
.mkly-newsletter-item__link:hover { color: #1b4332; }
.mkly-newsletter-quickHits { background: #e8e2d4; border-left: none; border: 0.0625rem solid #c4bcaa; }
.mkly-newsletter-quickHits__title { color: #0d0d0a; }
.mkly-newsletter-quickHits a { color: #2d6a4f; }
.mkly-newsletter-tools { background: #dfd8c8; border: 0.0625rem solid #c4bcaa; }
.mkly-newsletter-tools__title { color: #0d0d0a; }
.mkly-newsletter-tools a { color: #2d6a4f; }
.mkly-newsletter-tipOfTheDay { background: #d4e7d8; border-left: 0.25rem solid #40916c; border: none; border-left: 0.25rem solid #40916c; }
.mkly-newsletter-tipOfTheDay__title { color: #1b4332; }
.mkly-newsletter-community { background: #eae4d8; }
.mkly-newsletter-community__quote { color: #5c5a50; border-left: 0.125rem solid #b07d4a; padding: 0.75rem 1.5rem; font-style: italic; }
.mkly-newsletter-community__author { color: #1a1a16; font-style: normal; }
.mkly-newsletter-personalNote { color: #3a3830; background: #f0e6d4; border-left: 0.25rem solid #b07d4a; }
.mkly-newsletter-poll { background: #eae4d8; border: 0.0625rem solid #c4bcaa; }
.mkly-newsletter-poll__question { color: #0d0d0a; }
.mkly-newsletter-poll__option { color: #2d6a4f; border: 0.0625rem solid #c4bcaa; background: #f4f0e8; }
.mkly-newsletter-poll__option:hover { border-color: #2d6a4f; background: #d4e7d8; }
.mkly-newsletter-recommendations { background: #f0e6d4; border: 0.0625rem solid #d4c4a8; }
.mkly-newsletter-recommendations__title { color: #8b5e34; }
.mkly-newsletter-recommendations a { color: #b07d4a; }
.mkly-newsletter-sponsor { background: #eae4d8; border: 0.0625rem dashed #c4bcaa; }
.mkly-newsletter-sponsor__badge { color: #9a9488; }
.mkly-newsletter-sponsor__link { color: #2d6a4f; }
.mkly-newsletter-sponsor__link:hover { color: #1b4332; }
.mkly-newsletter-outro { color: #9a9488; }
.mkly-newsletter-outro__cta { background: #2d6a4f; color: #f4f0e8; }
.mkly-newsletter-outro__cta:hover { background: #1b4332; }
.mkly-newsletter-custom { background: #eae4d8; border: 0.0625rem solid #c4bcaa; }
.mkly-newsletter-custom__title { color: #0d0d0a; }`,
  },
  {
    name: 'brutalist',
    displayName: 'Newsletter/Brutalist',
    description: 'Hard black and signal red on raw concrete — uncompromising, stark, typographic',
    variables: {
      accent: '#ff0000',
      accentHover: '#cc0000',
      bg: '#ededed',
      text: '#000000',
      muted: '#555555',
      border: '#000000',
      bgSubtle: '#e0e0e0',
      buttonText: '#ffffff',
      codeBg: '#d8d8d8',
      radius: '0',
      fontBody: "'Courier New', 'Courier', monospace",
      fontHeading: "'Courier New', 'Courier', monospace",
      fontMono: "'Courier New', 'Courier', monospace",
      spacing: '1.25rem',
    },
    rawCss: `
.mkly-document { color: #000000; background: #ededed; }
.mkly-document p { color: #111111; }
.mkly-document a { color: #ff0000; text-decoration: underline; text-underline-offset: 0.1875rem; }
.mkly-document a:not([class]):hover { color: #cc0000; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #000000; text-transform: uppercase; letter-spacing: 0.06em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #000000; text-transform: uppercase; }
.mkly-document strong { color: #000000; }
.mkly-document em { color: #333333; }
.mkly-document blockquote { color: #000000; border-left: 0.375rem solid #ff0000; padding: 0.75rem 1.25rem; background: transparent; }
.mkly-document hr { border: none; height: 0.1875rem; background: #000000; }
.mkly-document code:not(pre code) { background: #000000; color: #ededed; padding: 0.125rem 0.375rem; border-radius: 0; font-size: 0.87em; }
.mkly-document pre { background: #000000; color: #ededed; border: none; }
.mkly-document img { border-radius: 0; }
.mkly-document ul, .mkly-document ol { color: #111111; }
.mkly-document li::marker { color: #ff0000; }

.mkly-core-heading { color: #000000; text-transform: uppercase; letter-spacing: 0.06em; }
.mkly-core-text { color: #111111; }
.mkly-core-button__link { background: #ff0000; color: #ffffff; border-radius: 0; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; }
.mkly-core-button__link:hover { background: #cc0000; }
.mkly-core-divider { background: #000000; height: 0.1875rem; }
.mkly-core-code { background: #000000; color: #ededed; border: none; }
.mkly-core-code pre { background: transparent; border: none; color: #ededed; }
.mkly-core-quote { color: #000000; border-left: 0.375rem solid #ff0000; background: transparent; }
.mkly-core-quote__author { color: #555555; text-transform: uppercase; letter-spacing: 0.05em; }
.mkly-core-hero { background: #000000; color: #ededed; border: none; }
.mkly-core-section { border-top: 0.1875rem solid #000000; }
.mkly-core-section__title { color: #000000; border-bottom: 0.1875rem solid #ff0000; text-transform: uppercase; letter-spacing: 0.08em; }
.mkly-core-card { background: #ededed; border: 0.1875rem solid #000000; box-shadow: 0.375rem 0.375rem 0 #000000; }
.mkly-core-card__body h2 { color: #000000; text-transform: uppercase; }
.mkly-core-card__link { color: #ff0000; }
.mkly-core-card__link:hover { color: #cc0000; }
.mkly-core-list { color: #111111; }
.mkly-core-header { border-bottom: 0.25rem solid #000000; }
.mkly-core-header__title { color: #000000; text-transform: uppercase; letter-spacing: 0.1em; }
.mkly-core-footer { color: #555555; border-top: 0.1875rem solid #000000; }
.mkly-core-footer a { color: #555555; }
.mkly-core-footer a:hover { color: #ff0000; }
.mkly-core-cta { background: #000000; color: #ededed; border: none; }
.mkly-core-cta__button { background: #ff0000; color: #ffffff; border-radius: 0; text-transform: uppercase; font-weight: 700; }
.mkly-core-cta__button:hover { background: #cc0000; }

.mkly-newsletter-intro { color: #333333; }
.mkly-newsletter-featured { background: #ffffff; border: 0.1875rem solid #000000; box-shadow: 0.375rem 0.375rem 0 #000000; }
.mkly-newsletter-featured__source { color: #ffffff; background: #ff0000; border: none; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700; }
.mkly-newsletter-featured__author { color: #555555; text-transform: uppercase; }
.mkly-newsletter-featured__link { color: #ff0000; }
.mkly-newsletter-featured__link:hover { color: #cc0000; }
.mkly-newsletter-category { border-top: 0.1875rem solid #000000; }
.mkly-newsletter-category__title { color: #000000; border-bottom: 0.1875rem solid #ff0000; text-transform: uppercase; letter-spacing: 0.08em; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #000000; }
.mkly-newsletter-item__source { color: #ff0000; text-transform: uppercase; font-weight: 700; }
.mkly-newsletter-item__link { color: #ff0000; }
.mkly-newsletter-item__link:hover { color: #cc0000; }
.mkly-newsletter-quickHits { background: #ffee00; border-left: 0.375rem solid #000000; }
.mkly-newsletter-quickHits__title { color: #000000; text-transform: uppercase; letter-spacing: 0.08em; }
.mkly-newsletter-quickHits a { color: #000000; text-decoration: underline; }
.mkly-newsletter-tools { background: #d8d8d8; border: 0.1875rem solid #000000; }
.mkly-newsletter-tools__title { color: #000000; text-transform: uppercase; }
.mkly-newsletter-tools a { color: #ff0000; }
.mkly-newsletter-tipOfTheDay { background: #ff0000; color: #ffffff; border: none; }
.mkly-newsletter-tipOfTheDay__title { color: #ffffff; }
.mkly-newsletter-community { background: #e0e0e0; }
.mkly-newsletter-community__quote { color: #000000; border-left: 0.375rem solid #000000; padding: 0.75rem 1.25rem; font-style: normal; }
.mkly-newsletter-community__author { color: #000000; font-style: normal; text-transform: uppercase; font-weight: 700; }
.mkly-newsletter-personalNote { color: #000000; background: #e0e0e0; border-left: 0.375rem solid #000000; }
.mkly-newsletter-poll { background: #ffffff; border: 0.1875rem solid #000000; }
.mkly-newsletter-poll__question { color: #000000; text-transform: uppercase; }
.mkly-newsletter-poll__option { color: #000000; border: 0.1875rem solid #000000; background: #ededed; font-weight: 700; text-transform: uppercase; }
.mkly-newsletter-poll__option:hover { background: #000000; color: #ffffff; }
.mkly-newsletter-recommendations { background: #0000ff; color: #ffffff; border: none; }
.mkly-newsletter-recommendations__title { color: #ffffff; }
.mkly-newsletter-recommendations a { color: #ffffff; text-decoration: underline; }
.mkly-newsletter-sponsor { background: transparent; border: 0.1875rem dashed #000000; }
.mkly-newsletter-sponsor__badge { color: #555555; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 700; }
.mkly-newsletter-sponsor__link { color: #ff0000; }
.mkly-newsletter-sponsor__link:hover { color: #cc0000; }
.mkly-newsletter-outro { color: #555555; }
.mkly-newsletter-outro__cta { background: #000000; color: #ffffff; border-radius: 0; text-transform: uppercase; font-weight: 700; }
.mkly-newsletter-outro__cta:hover { background: #ff0000; }
.mkly-newsletter-custom { background: #d8d8d8; border: 0.1875rem solid #000000; }
.mkly-newsletter-custom__title { color: #000000; text-transform: uppercase; }`,
  },
  {
    name: 'ocean-depth',
    displayName: 'Newsletter/Ocean Depth',
    description: 'Bright cyan and coral on midnight blue — deep sea with bioluminescent highlights',
    variables: {
      accent: '#00e5ff',
      accentHover: '#00b8d4',
      bg: '#0a1628',
      text: '#c8dce8',
      muted: '#5a7a94',
      border: '#152840',
      bgSubtle: '#0e1e35',
      buttonText: '#0a1628',
      codeBg: '#0c1a2e',
      radius: '0.5rem',
      fontBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
      spacing: '1.5rem',
    },
    rawCss: `
.mkly-document { color: #c8dce8; background: #0a1628; }
.mkly-document p { color: #94b4cc; }
.mkly-document a { color: #00e5ff; }
.mkly-document a:not([class]):hover { color: #00b8d4; text-shadow: 0 0 0.375rem rgba(0,229,255,0.3); }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #e4eef5; letter-spacing: -0.02em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #c8dce8; }
.mkly-document strong { color: #e4eef5; }
.mkly-document em { color: #7a9ab0; }
.mkly-document blockquote { color: #7a9ab0; border-left: 0.1875rem solid #00e5ff; padding: 0.875rem 1.375rem; background: #0e1e35; }
.mkly-document hr { border: none; height: 0.0625rem; background: #1a3050; }
.mkly-document code:not(pre code) { background: #0e2438; color: #00e5ff; padding: 0.1875rem 0.4375rem; border-radius: 0.25rem; font-size: 0.87em; border: 0.0625rem solid #103050; }
.mkly-document pre { background: #0c1a2e; border: 0.0625rem solid #152840; }
.mkly-document img { border-radius: 0.5rem; }
.mkly-document ul, .mkly-document ol { color: #94b4cc; }
.mkly-document li::marker { color: #00e5ff; }

.mkly-core-heading { color: #e4eef5; }
.mkly-core-text { color: #94b4cc; }
.mkly-core-button__link { background: #00e5ff; color: #0a1628; font-weight: 600; box-shadow: 0 0 1.125rem rgba(0,229,255,0.2); }
.mkly-core-button__link:hover { background: #00b8d4; box-shadow: 0 0 1.75rem rgba(0,229,255,0.3); }
.mkly-core-divider { background: #1a3050; }
.mkly-core-code { background: #0c1a2e; border: 0.0625rem solid #152840; }
.mkly-core-code pre { background: transparent; border: none; color: #7a9ab0; }
.mkly-core-quote { color: #7a9ab0; border-left: 0.1875rem solid #00e5ff; background: #0e1e35; }
.mkly-core-quote__author { color: #5a7a94; }
.mkly-core-hero { background: #0e1e35; border: 0.0625rem solid #152840; }
.mkly-core-section { border-top: 0.0625rem solid #1a3050; }
.mkly-core-section__title { color: #e4eef5; border-bottom: 0.125rem solid #00e5ff; }
.mkly-core-card { background: #0e1e35; border: 0.0625rem solid #1a3050; }
.mkly-core-card__body h2 { color: #e4eef5; }
.mkly-core-card__link { color: #00e5ff; }
.mkly-core-card__link:hover { color: #00b8d4; }
.mkly-core-list { color: #94b4cc; }
.mkly-core-header { border-bottom: 0.125rem solid #00e5ff; }
.mkly-core-header__title { color: #e4eef5; }
.mkly-core-footer { color: #3a5a74; border-top: 0.0625rem solid #152840; }
.mkly-core-footer a { color: #3a5a74; }
.mkly-core-footer a:hover { color: #00e5ff; }
.mkly-core-cta { background: #0e2438; border: 0.0625rem solid #103050; }
.mkly-core-cta__button { background: #00e5ff; color: #0a1628; font-weight: 600; box-shadow: 0 0 1.125rem rgba(0,229,255,0.2); }
.mkly-core-cta__button:hover { background: #00b8d4; }

.mkly-newsletter-intro { color: #7a9ab0; }
.mkly-newsletter-featured { background: #0e1e35; border: 0.0625rem solid #00e5ff; box-shadow: 0 0 0.75rem rgba(0,229,255,0.06); }
.mkly-newsletter-featured__source { color: #0a1628; background: #00e5ff; border: none; font-weight: 600; }
.mkly-newsletter-featured__author { color: #3a5a74; }
.mkly-newsletter-featured__link { color: #00e5ff; }
.mkly-newsletter-featured__link:hover { color: #00b8d4; }
.mkly-newsletter-category { border-top: 0.0625rem solid #1a3050; }
.mkly-newsletter-category__title { color: #e4eef5; border-bottom: 0.125rem solid #00e5ff; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #132438; }
.mkly-newsletter-item__source { color: #00e5ff; }
.mkly-newsletter-item__link { color: #00e5ff; }
.mkly-newsletter-item__link:hover { color: #00b8d4; }
.mkly-newsletter-quickHits { background: #14203a; border-left: 0.1875rem solid #7b61ff; }
.mkly-newsletter-quickHits__title { color: #b4a4ff; }
.mkly-newsletter-quickHits a { color: #7b61ff; }
.mkly-newsletter-tools { background: #0e1e35; border: 0.0625rem solid #1a3050; }
.mkly-newsletter-tools__title { color: #e4eef5; }
.mkly-newsletter-tools a { color: #00e5ff; }
.mkly-newsletter-tipOfTheDay { background: #1e1428; border-left: 0.25rem solid #ff6b9d; }
.mkly-newsletter-tipOfTheDay__title { color: #ff6b9d; }
.mkly-newsletter-community { background: #0e1e35; }
.mkly-newsletter-community__quote { color: #7a9ab0; border-left: 0.1875rem solid #1a3050; padding: 0.75rem 1.25rem; font-style: italic; }
.mkly-newsletter-community__author { color: #c8dce8; font-style: normal; }
.mkly-newsletter-personalNote { color: #94b4cc; background: #0e2438; border-left: 0.25rem solid #00e5ff; }
.mkly-newsletter-poll { background: #0e1e35; border: 0.0625rem solid #1a3050; }
.mkly-newsletter-poll__question { color: #e4eef5; }
.mkly-newsletter-poll__option { color: #00e5ff; border: 0.0625rem solid #103050; background: #0a1628; }
.mkly-newsletter-poll__option:hover { border-color: #00e5ff; background: #0e2438; box-shadow: 0 0 0.625rem rgba(0,229,255,0.1); }
.mkly-newsletter-recommendations { background: #14203a; border: 0.0625rem solid #1a3050; }
.mkly-newsletter-recommendations__title { color: #ff6b9d; }
.mkly-newsletter-recommendations a { color: #ff6b9d; }
.mkly-newsletter-sponsor { background: #0c1a2e; border: 0.0625rem dashed #1a3050; }
.mkly-newsletter-sponsor__badge { color: #3a5a74; text-transform: uppercase; letter-spacing: 0.08em; }
.mkly-newsletter-sponsor__link { color: #00e5ff; }
.mkly-newsletter-sponsor__link:hover { color: #00b8d4; }
.mkly-newsletter-outro { color: #5a7a94; }
.mkly-newsletter-outro__cta { background: #00e5ff; color: #0a1628; font-weight: 600; box-shadow: 0 0 1.125rem rgba(0,229,255,0.2); }
.mkly-newsletter-outro__cta:hover { background: #00b8d4; }
.mkly-newsletter-custom { background: #0e1e35; border: 0.0625rem solid #1a3050; }
.mkly-newsletter-custom__title { color: #e4eef5; }`,
  },
  {
    name: 'midnight-violet',
    displayName: 'Newsletter/Midnight Violet',
    description: 'Hot magenta and violet on deep charcoal — creative luxury with electric energy',
    variables: {
      accent: '#e040fb',
      accentHover: '#c020e0',
      bg: '#0e0b14',
      text: '#e0d8f0',
      muted: '#7a6a98',
      border: '#201838',
      bgSubtle: '#140f1e',
      buttonText: '#0e0b14',
      codeBg: '#120e1a',
      radius: '0.625rem',
      fontBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
      spacing: '1.5rem',
    },
    rawCss: `
.mkly-document { color: #e0d8f0; background: #0e0b14; }
.mkly-document p { color: #b0a4c8; }
.mkly-document a { color: #e040fb; }
.mkly-document a:not([class]):hover { color: #c020e0; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #f0eaf8; letter-spacing: -0.02em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #e0d8f0; }
.mkly-document strong { color: #f0eaf8; }
.mkly-document em { color: #9080b0; }
.mkly-document blockquote { color: #9080b0; border-left: 0.1875rem solid #e040fb; padding: 0.875rem 1.375rem; background: #18102a; }
.mkly-document hr { border: none; height: 0.0625rem; background: #251c3a; }
.mkly-document code:not(pre code) { background: #1e1430; color: #e040fb; padding: 0.1875rem 0.4375rem; border-radius: 0.3125rem; font-size: 0.87em; }
.mkly-document pre { background: #120e1a; border: 0.0625rem solid #201838; }
.mkly-document img { border-radius: 0.625rem; }
.mkly-document ul, .mkly-document ol { color: #b0a4c8; }
.mkly-document li::marker { color: #e040fb; }

.mkly-core-heading { color: #f0eaf8; }
.mkly-core-text { color: #b0a4c8; }
.mkly-core-button__link { background: linear-gradient(135deg, #e040fb, #7b2ff7); color: #ffffff; box-shadow: 0 0.25rem 1.125rem rgba(224,64,251,0.25); }
.mkly-core-button__link:hover { background: linear-gradient(135deg, #c020e0, #6020d0); box-shadow: 0 0.375rem 1.75rem rgba(224,64,251,0.35); }
.mkly-core-divider { background: #251c3a; }
.mkly-core-code { background: #120e1a; border: 0.0625rem solid #201838; }
.mkly-core-code pre { background: transparent; border: none; color: #9080b0; }
.mkly-core-quote { color: #9080b0; border-left: 0.1875rem solid #e040fb; background: #18102a; }
.mkly-core-quote__author { color: #7a6a98; }
.mkly-core-hero { background: #140f1e; border: 0.0625rem solid #201838; }
.mkly-core-section { border-top: 0.0625rem solid #251c3a; }
.mkly-core-section__title { color: #f0eaf8; border-bottom: 0.125rem solid #e040fb; }
.mkly-core-card { background: #140f1e; border: 0.0625rem solid #281e40; }
.mkly-core-card__body h2 { color: #f0eaf8; }
.mkly-core-card__link { color: #e040fb; }
.mkly-core-card__link:hover { color: #c020e0; }
.mkly-core-list { color: #b0a4c8; }
.mkly-core-header { border-bottom: 0.125rem solid #e040fb; }
.mkly-core-header__title { color: #f0eaf8; }
.mkly-core-footer { color: #443660; border-top: 0.0625rem solid #201838; }
.mkly-core-footer a { color: #443660; }
.mkly-core-footer a:hover { color: #e040fb; }
.mkly-core-cta { background: linear-gradient(135deg, #1a1030, #180e28); border: 0.0625rem solid #301c50; }
.mkly-core-cta__button { background: linear-gradient(135deg, #e040fb, #7b2ff7); color: #ffffff; box-shadow: 0 0.25rem 1.125rem rgba(224,64,251,0.25); }
.mkly-core-cta__button:hover { background: linear-gradient(135deg, #c020e0, #6020d0); }

.mkly-newsletter-intro { color: #9080b0; }
.mkly-newsletter-featured { background: #140f1e; border: 0.0625rem solid #e040fb; box-shadow: 0 0 1.125rem rgba(224,64,251,0.08); }
.mkly-newsletter-featured__source { color: #0e0b14; background: #e040fb; border: none; font-weight: 600; }
.mkly-newsletter-featured__author { color: #443660; }
.mkly-newsletter-featured__link { color: #e040fb; }
.mkly-newsletter-featured__link:hover { color: #c020e0; }
.mkly-newsletter-category { border-top: 0.0625rem solid #251c3a; }
.mkly-newsletter-category__title { color: #f0eaf8; border-bottom: 0.125rem solid #e040fb; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #1a1228; }
.mkly-newsletter-item__source { color: #e040fb; }
.mkly-newsletter-item__link { color: #e040fb; }
.mkly-newsletter-item__link:hover { color: #c020e0; }
.mkly-newsletter-quickHits { background: #141828; border-left: 0.1875rem solid #4fc3f7; }
.mkly-newsletter-quickHits__title { color: #4fc3f7; }
.mkly-newsletter-quickHits a { color: #4fc3f7; }
.mkly-newsletter-tools { background: #140f1e; border: 0.0625rem solid #281e40; }
.mkly-newsletter-tools__title { color: #f0eaf8; }
.mkly-newsletter-tools a { color: #e040fb; }
.mkly-newsletter-tipOfTheDay { background: #1a2010; border-left: 0.25rem solid #69f0ae; }
.mkly-newsletter-tipOfTheDay__title { color: #69f0ae; }
.mkly-newsletter-community { background: #140f1e; }
.mkly-newsletter-community__quote { color: #9080b0; border-left: 0.1875rem solid #301c50; padding: 0.75rem 1.25rem; font-style: italic; }
.mkly-newsletter-community__author { color: #e0d8f0; font-style: normal; }
.mkly-newsletter-personalNote { color: #b0a4c8; background: #18102a; border-left: 0.25rem solid #e040fb; }
.mkly-newsletter-poll { background: #140f1e; border: 0.0625rem solid #281e40; }
.mkly-newsletter-poll__question { color: #f0eaf8; }
.mkly-newsletter-poll__option { color: #e040fb; border: 0.0625rem solid #301c50; background: #0e0b14; }
.mkly-newsletter-poll__option:hover { border-color: #e040fb; background: #1e1430; box-shadow: 0 0 0.75rem rgba(224,64,251,0.12); }
.mkly-newsletter-recommendations { background: #18102a; border: 0.0625rem solid #301c50; }
.mkly-newsletter-recommendations__title { color: #ffd54f; }
.mkly-newsletter-recommendations a { color: #ffd54f; }
.mkly-newsletter-sponsor { background: #120e1a; border: 0.0625rem dashed #251c3a; }
.mkly-newsletter-sponsor__badge { color: #443660; }
.mkly-newsletter-sponsor__link { color: #e040fb; }
.mkly-newsletter-sponsor__link:hover { color: #c020e0; }
.mkly-newsletter-outro { color: #7a6a98; }
.mkly-newsletter-outro__cta { background: linear-gradient(135deg, #e040fb, #7b2ff7); color: #ffffff; box-shadow: 0 0.25rem 1.125rem rgba(224,64,251,0.25); }
.mkly-newsletter-outro__cta:hover { background: linear-gradient(135deg, #c020e0, #6020d0); }
.mkly-newsletter-custom { background: #140f1e; border: 0.0625rem solid #281e40; }
.mkly-newsletter-custom__title { color: #f0eaf8; }`,
  },
  {
    name: 'sunset-boulevard',
    displayName: 'Newsletter/Sunset Boulevard',
    description: 'Hot coral and golden amber on warm white — California golden hour warmth',
    variables: {
      accent: '#ff4d4d',
      accentHover: '#e03030',
      bg: '#fff8f0',
      text: '#2a1810',
      muted: '#8a7060',
      border: '#f0d8c4',
      bgSubtle: '#fff0e0',
      buttonText: '#ffffff',
      codeBg: '#fde8d0',
      radius: '0.875rem',
      fontBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', monospace",
      spacing: '1.5rem',
    },
    rawCss: `
.mkly-document { color: #2a1810; background: #fff8f0; }
.mkly-document p { color: #4a3428; }
.mkly-document a { color: #ff4d4d; }
.mkly-document a:not([class]):hover { color: #e03030; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #1a0c06; letter-spacing: -0.02em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #2a1810; }
.mkly-document strong { color: #1a0c06; }
.mkly-document em { color: #6a5040; }
.mkly-document blockquote { color: #6a5040; border-left: 0.1875rem solid #ff8c42; padding: 0.875rem 1.375rem; background: #fff0e0; }
.mkly-document hr { border: none; height: 0.0625rem; background: #f0d8c4; }
.mkly-document code:not(pre code) { background: #fde8d0; color: #cc3333; padding: 0.125rem 0.375rem; border-radius: 0.4375rem; font-size: 0.87em; }
.mkly-document pre { background: #fde8d0; border: 0.0625rem solid #f0d8c4; }
.mkly-document img { border-radius: 0.875rem; }
.mkly-document ul, .mkly-document ol { color: #4a3428; }
.mkly-document li::marker { color: #ff8c42; }

.mkly-core-heading { color: #1a0c06; }
.mkly-core-text { color: #4a3428; }
.mkly-core-button__link { background: linear-gradient(135deg, #ff4d4d, #ff8c42); color: #ffffff; box-shadow: 0 0.25rem 0.875rem rgba(255,77,77,0.2); }
.mkly-core-button__link:hover { background: linear-gradient(135deg, #e03030, #e07030); box-shadow: 0 0.375rem 1.375rem rgba(255,77,77,0.3); }
.mkly-core-divider { background: #f0d8c4; }
.mkly-core-code { background: #fde8d0; border: 0.0625rem solid #f0d8c4; }
.mkly-core-code pre { background: transparent; border: none; color: #4a3428; }
.mkly-core-quote { color: #6a5040; border-left: 0.1875rem solid #ff8c42; background: #fff0e0; }
.mkly-core-quote__author { color: #8a7060; }
.mkly-core-hero { background: #fff0e0; }
.mkly-core-section { border-top: 0.0625rem solid #f0d8c4; }
.mkly-core-section__title { color: #1a0c06; border-bottom: 0.125rem solid #ff4d4d; }
.mkly-core-card { background: #ffffff; border: 0.0625rem solid #f0d8c4; box-shadow: 0 0.125rem 0.5rem rgba(42,24,16,0.06); }
.mkly-core-card__body h2 { color: #1a0c06; }
.mkly-core-card__link { color: #ff4d4d; }
.mkly-core-card__link:hover { color: #e03030; }
.mkly-core-list { color: #4a3428; }
.mkly-core-header { border-bottom: 0.125rem solid #ff4d4d; }
.mkly-core-header__title { color: #1a0c06; }
.mkly-core-footer { color: #b4988a; border-top: 0.0625rem solid #f0d8c4; }
.mkly-core-footer a { color: #b4988a; }
.mkly-core-footer a:hover { color: #ff4d4d; }
.mkly-core-cta { background: linear-gradient(135deg, #fff0e0, #ffe8d0); border: 0.0625rem solid #f5c8a0; }
.mkly-core-cta__button { background: linear-gradient(135deg, #ff4d4d, #ff8c42); color: #ffffff; box-shadow: 0 0.25rem 0.875rem rgba(255,77,77,0.2); }
.mkly-core-cta__button:hover { background: linear-gradient(135deg, #e03030, #e07030); }

.mkly-newsletter-intro { color: #6a5040; }
.mkly-newsletter-featured { background: #ffffff; border: 0.0625rem solid #f0d8c4; box-shadow: 0 0.25rem 1rem rgba(255,77,77,0.06); }
.mkly-newsletter-featured__source { color: #ffffff; background: #ff4d4d; border: none; font-weight: 600; }
.mkly-newsletter-featured__author { color: #b4988a; }
.mkly-newsletter-featured__link { color: #ff4d4d; }
.mkly-newsletter-featured__link:hover { color: #e03030; }
.mkly-newsletter-category { border-top: 0.0625rem solid #f0d8c4; }
.mkly-newsletter-category__title { color: #1a0c06; border-bottom: 0.125rem solid #ff4d4d; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #f8e4d4; }
.mkly-newsletter-item__source { color: #ff8c42; font-weight: 600; }
.mkly-newsletter-item__link { color: #ff4d4d; }
.mkly-newsletter-item__link:hover { color: #e03030; }
.mkly-newsletter-quickHits { background: #fff0d4; border-left: 0.25rem solid #ff8c42; }
.mkly-newsletter-quickHits__title { color: #cc6600; }
.mkly-newsletter-quickHits a { color: #cc6600; }
.mkly-newsletter-tools { background: #fff0e0; border: 0.0625rem solid #f0d8c4; }
.mkly-newsletter-tools__title { color: #1a0c06; }
.mkly-newsletter-tools a { color: #ff4d4d; }
.mkly-newsletter-tipOfTheDay { background: #e8f5e9; border-left: 0.25rem solid #4caf50; }
.mkly-newsletter-tipOfTheDay__title { color: #2e7d32; }
.mkly-newsletter-community { background: #fff0e0; }
.mkly-newsletter-community__quote { color: #6a5040; border-left: 0.1875rem solid #f0d8c4; padding: 0.75rem 1.375rem; font-style: italic; }
.mkly-newsletter-community__author { color: #2a1810; font-style: normal; }
.mkly-newsletter-personalNote { color: #4a3428; background: #fff5e6; border-left: 0.25rem solid #ff8c42; }
.mkly-newsletter-poll { background: #fff0e0; border: 0.0625rem solid #f0d8c4; }
.mkly-newsletter-poll__question { color: #1a0c06; }
.mkly-newsletter-poll__option { color: #ff4d4d; border: 0.0625rem solid #f0d8c4; background: #fff8f0; }
.mkly-newsletter-poll__option:hover { border-color: #ff4d4d; background: #fff0e0; }
.mkly-newsletter-recommendations { background: #f0e0ff; border: 0.0625rem solid #d8c0f0; }
.mkly-newsletter-recommendations__title { color: #7b1fa2; }
.mkly-newsletter-recommendations a { color: #9c27b0; }
.mkly-newsletter-sponsor { background: #fff0e0; border: 0.0625rem dashed #e0c8b0; }
.mkly-newsletter-sponsor__badge { color: #b4988a; }
.mkly-newsletter-sponsor__link { color: #ff4d4d; }
.mkly-newsletter-sponsor__link:hover { color: #e03030; }
.mkly-newsletter-outro { color: #b4988a; }
.mkly-newsletter-outro__cta { background: linear-gradient(135deg, #ff4d4d, #ff8c42); color: #ffffff; box-shadow: 0 0.25rem 0.875rem rgba(255,77,77,0.2); }
.mkly-newsletter-outro__cta:hover { background: linear-gradient(135deg, #e03030, #e07030); }
.mkly-newsletter-custom { background: #fff0e0; border: 0.0625rem solid #f0d8c4; }
.mkly-newsletter-custom__title { color: #1a0c06; }`,
  },
  {
    name: 'arctic',
    displayName: 'Newsletter/Arctic',
    description: 'Ice blue on pure white — clinical precision with Scandinavian clarity',
    variables: {
      accent: '#0066ff',
      accentHover: '#0050cc',
      bg: '#ffffff',
      text: '#0a1628',
      muted: '#8094a8',
      border: '#d4e4f0',
      bgSubtle: '#f0f6fc',
      buttonText: '#ffffff',
      codeBg: '#f0f6fc',
      radius: '0.375rem',
      fontBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
      spacing: '1.5rem',
    },
    rawCss: `
.mkly-document { color: #0a1628; background: #ffffff; }
.mkly-document p { color: #2a3a4e; }
.mkly-document a { color: #0066ff; }
.mkly-document a:not([class]):hover { color: #0050cc; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #020a14; letter-spacing: -0.03em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #0a1628; }
.mkly-document strong { color: #020a14; }
.mkly-document em { color: #506070; }
.mkly-document blockquote { color: #506070; border-left: 0.1875rem solid #0066ff; padding: 0.875rem 1.375rem; background: #f0f6fc; }
.mkly-document hr { border: none; height: 0.0625rem; background: #d4e4f0; }
.mkly-document code:not(pre code) { background: #e8f0ff; color: #003399; padding: 0.125rem 0.375rem; border-radius: 0.25rem; font-size: 0.87em; }
.mkly-document pre { background: #f0f6fc; border: 0.0625rem solid #d4e4f0; }
.mkly-document img { border-radius: 0.375rem; }
.mkly-document ul, .mkly-document ol { color: #2a3a4e; }
.mkly-document li::marker { color: #0066ff; }

.mkly-core-heading { color: #020a14; }
.mkly-core-text { color: #2a3a4e; }
.mkly-core-button__link { background: #0066ff; color: #ffffff; }
.mkly-core-button__link:hover { background: #0050cc; }
.mkly-core-divider { background: #d4e4f0; }
.mkly-core-code { background: #f0f6fc; border: 0.0625rem solid #d4e4f0; }
.mkly-core-code pre { background: transparent; border: none; color: #2a3a4e; }
.mkly-core-quote { color: #506070; border-left: 0.1875rem solid #0066ff; background: #f0f6fc; }
.mkly-core-quote__author { color: #8094a8; }
.mkly-core-hero { background: #f0f6fc; }
.mkly-core-section { border-top: 0.0625rem solid #d4e4f0; }
.mkly-core-section__title { color: #020a14; border-bottom: 0.125rem solid #0066ff; }
.mkly-core-card { background: #ffffff; border: 0.0625rem solid #d4e4f0; }
.mkly-core-card__body h2 { color: #020a14; }
.mkly-core-card__link { color: #0066ff; }
.mkly-core-card__link:hover { color: #0050cc; }
.mkly-core-list { color: #2a3a4e; }
.mkly-core-header { border-bottom: 0.125rem solid #0066ff; }
.mkly-core-header__title { color: #020a14; }
.mkly-core-footer { color: #8094a8; border-top: 0.0625rem solid #d4e4f0; }
.mkly-core-footer a { color: #8094a8; }
.mkly-core-footer a:hover { color: #0066ff; }
.mkly-core-cta { background: #f0f6fc; border: 0.0625rem solid #d4e4f0; }
.mkly-core-cta__button { background: #0066ff; color: #ffffff; }
.mkly-core-cta__button:hover { background: #0050cc; }

.mkly-newsletter-intro { color: #506070; }
.mkly-newsletter-featured { background: #ffffff; border: 0.0625rem solid #0066ff; }
.mkly-newsletter-featured__source { color: #ffffff; background: #0066ff; border: none; font-weight: 600; }
.mkly-newsletter-featured__author { color: #8094a8; }
.mkly-newsletter-featured__link { color: #0066ff; }
.mkly-newsletter-featured__link:hover { color: #0050cc; }
.mkly-newsletter-category { border-top: 0.0625rem solid #d4e4f0; }
.mkly-newsletter-category__title { color: #020a14; border-bottom: 0.125rem solid #0066ff; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #e8f0f8; }
.mkly-newsletter-item__source { color: #0066ff; font-weight: 500; }
.mkly-newsletter-item__link { color: #0066ff; }
.mkly-newsletter-item__link:hover { color: #0050cc; }
.mkly-newsletter-quickHits { background: #f0f6fc; border-left: 0.25rem solid #0066ff; }
.mkly-newsletter-quickHits__title { color: #020a14; }
.mkly-newsletter-quickHits a { color: #0066ff; }
.mkly-newsletter-tools { background: #f0f6fc; border: 0.0625rem solid #d4e4f0; }
.mkly-newsletter-tools__title { color: #020a14; }
.mkly-newsletter-tools a { color: #0066ff; }
.mkly-newsletter-tipOfTheDay { background: #e8f5e9; border-left: 0.25rem solid #00c853; }
.mkly-newsletter-tipOfTheDay__title { color: #00893a; }
.mkly-newsletter-community { background: #f0f6fc; }
.mkly-newsletter-community__quote { color: #506070; border-left: 0.1875rem solid #b8ccdd; padding: 0.75rem 1.25rem; font-style: italic; }
.mkly-newsletter-community__author { color: #0a1628; font-style: normal; }
.mkly-newsletter-personalNote { color: #2a3a4e; background: #e8f0ff; border-left: 0.25rem solid #0066ff; }
.mkly-newsletter-poll { background: #f0f6fc; border: 0.0625rem solid #d4e4f0; }
.mkly-newsletter-poll__question { color: #020a14; }
.mkly-newsletter-poll__option { color: #0066ff; border: 0.0625rem solid #d4e4f0; background: #ffffff; }
.mkly-newsletter-poll__option:hover { border-color: #0066ff; background: #e8f0ff; }
.mkly-newsletter-recommendations { background: #fff3e0; border: 0.0625rem solid #ffe0b2; }
.mkly-newsletter-recommendations__title { color: #e65100; }
.mkly-newsletter-recommendations a { color: #f57c00; }
.mkly-newsletter-sponsor { background: #f0f6fc; border: 0.0625rem dashed #b8ccdd; }
.mkly-newsletter-sponsor__badge { color: #8094a8; text-transform: uppercase; letter-spacing: 0.08em; }
.mkly-newsletter-sponsor__link { color: #0066ff; }
.mkly-newsletter-sponsor__link:hover { color: #0050cc; }
.mkly-newsletter-outro { color: #8094a8; }
.mkly-newsletter-outro__cta { background: #0066ff; color: #ffffff; }
.mkly-newsletter-outro__cta:hover { background: #0050cc; }
.mkly-newsletter-custom { background: #f0f6fc; border: 0.0625rem solid #d4e4f0; }
.mkly-newsletter-custom__title { color: #020a14; }`,
  },
  {
    name: 'rose-gold',
    displayName: 'Newsletter/Rose Gold',
    description: 'Deep rose and warm gold on blush — opulent femininity with metallic warmth',
    variables: {
      accent: '#c43a6e',
      accentHover: '#a02858',
      bg: '#fdf6f8',
      text: '#2a1020',
      muted: '#987888',
      border: '#ecd0dc',
      bgSubtle: '#f8eaf0',
      buttonText: '#ffffff',
      codeBg: '#f8eaf0',
      radius: '0.625rem',
      fontBody: "'Georgia', 'Iowan Old Style', 'Palatino Linotype', serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', monospace",
      spacing: '1.625rem',
    },
    rawCss: `
.mkly-document { color: #2a1020; background: #fdf6f8; }
.mkly-document p { color: #48303e; }
.mkly-document a { color: #c43a6e; }
.mkly-document a:not([class]):hover { color: #a02858; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #1a0810; letter-spacing: -0.015em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #2a1020; }
.mkly-document strong { color: #1a0810; }
.mkly-document em { color: #704858; }
.mkly-document blockquote { color: #704858; border-left: 0.1875rem solid #d4789a; padding: 0.875rem 1.375rem; background: #f8eaf0; }
.mkly-document hr { border: none; height: 0.0625rem; background: #ecd0dc; }
.mkly-document code:not(pre code) { background: #f8eaf0; color: #a02858; padding: 0.125rem 0.375rem; border-radius: 0.3125rem; font-size: 0.86em; }
.mkly-document pre { background: #f8eaf0; border: 0.0625rem solid #ecd0dc; }
.mkly-document img { border-radius: 0.625rem; }
.mkly-document ul, .mkly-document ol { color: #48303e; }
.mkly-document li::marker { color: #c43a6e; }

.mkly-core-heading { color: #1a0810; }
.mkly-core-text { color: #48303e; }
.mkly-core-button__link { background: #c43a6e; color: #ffffff; box-shadow: 0 0.125rem 0.625rem rgba(196,58,110,0.18); }
.mkly-core-button__link:hover { background: #a02858; box-shadow: 0 0.25rem 1.125rem rgba(196,58,110,0.28); }
.mkly-core-divider { background: #ecd0dc; }
.mkly-core-code { background: #f8eaf0; border: 0.0625rem solid #ecd0dc; }
.mkly-core-code pre { background: transparent; border: none; color: #48303e; }
.mkly-core-quote { color: #704858; border-left: 0.1875rem solid #d4789a; background: #f8eaf0; }
.mkly-core-quote__author { color: #987888; }
.mkly-core-hero { background: #f8eaf0; }
.mkly-core-section { border-top: 0.0625rem solid #ecd0dc; }
.mkly-core-section__title { color: #1a0810; border-bottom: 0.125rem solid #c43a6e; }
.mkly-core-card { background: #ffffff; border: 0.0625rem solid #ecd0dc; box-shadow: 0 0.125rem 0.5rem rgba(42,16,32,0.04); }
.mkly-core-card__body h2 { color: #1a0810; }
.mkly-core-card__link { color: #c43a6e; }
.mkly-core-card__link:hover { color: #a02858; }
.mkly-core-list { color: #48303e; }
.mkly-core-header { border-bottom: 0.125rem solid #c43a6e; }
.mkly-core-header__title { color: #1a0810; }
.mkly-core-footer { color: #b8a0ac; border-top: 0.0625rem solid #ecd0dc; }
.mkly-core-footer a { color: #b8a0ac; }
.mkly-core-footer a:hover { color: #c43a6e; }
.mkly-core-cta { background: #f8eaf0; border: 0.0625rem solid #e0b8cc; }
.mkly-core-cta__button { background: #c43a6e; color: #ffffff; box-shadow: 0 0.125rem 0.625rem rgba(196,58,110,0.18); }
.mkly-core-cta__button:hover { background: #a02858; }

.mkly-newsletter-intro { color: #704858; }
.mkly-newsletter-featured { background: #ffffff; border: 0.0625rem solid #c43a6e; box-shadow: 0 0.125rem 0.75rem rgba(196,58,110,0.06); }
.mkly-newsletter-featured__source { color: #ffffff; background: #c43a6e; border: none; font-weight: 600; }
.mkly-newsletter-featured__author { color: #b8a0ac; }
.mkly-newsletter-featured__link { color: #c43a6e; }
.mkly-newsletter-featured__link:hover { color: #a02858; }
.mkly-newsletter-category { border-top: 0.0625rem solid #ecd0dc; }
.mkly-newsletter-category__title { color: #1a0810; border-bottom: 0.125rem solid #c43a6e; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #f4e0ea; }
.mkly-newsletter-item__source { color: #c43a6e; }
.mkly-newsletter-item__link { color: #c43a6e; }
.mkly-newsletter-item__link:hover { color: #a02858; }
.mkly-newsletter-quickHits { background: #f8eaf0; border-left: 0.25rem solid #c43a6e; }
.mkly-newsletter-quickHits__title { color: #1a0810; }
.mkly-newsletter-quickHits a { color: #c43a6e; }
.mkly-newsletter-tools { background: #f8eaf0; border: 0.0625rem solid #ecd0dc; }
.mkly-newsletter-tools__title { color: #1a0810; }
.mkly-newsletter-tools a { color: #c43a6e; }
.mkly-newsletter-tipOfTheDay { background: #f0eadc; border-left: 0.25rem solid #c49a3a; }
.mkly-newsletter-tipOfTheDay__title { color: #96700a; }
.mkly-newsletter-community { background: #f8eaf0; }
.mkly-newsletter-community__quote { color: #704858; border-left: 0.1875rem solid #ecd0dc; padding: 0.75rem 1.375rem; font-style: italic; }
.mkly-newsletter-community__author { color: #2a1020; font-style: normal; }
.mkly-newsletter-personalNote { color: #48303e; background: #fdf0f4; border-left: 0.25rem solid #d4789a; }
.mkly-newsletter-poll { background: #f8eaf0; border: 0.0625rem solid #ecd0dc; }
.mkly-newsletter-poll__question { color: #1a0810; }
.mkly-newsletter-poll__option { color: #c43a6e; border: 0.0625rem solid #ecd0dc; background: #fdf6f8; }
.mkly-newsletter-poll__option:hover { border-color: #c43a6e; background: #f8e0ec; }
.mkly-newsletter-recommendations { background: #f0eadc; border: 0.0625rem solid #e0d4bc; }
.mkly-newsletter-recommendations__title { color: #96700a; }
.mkly-newsletter-recommendations a { color: #c49a3a; }
.mkly-newsletter-sponsor { background: #f8eaf0; border: 0.0625rem dashed #dcc0d0; }
.mkly-newsletter-sponsor__badge { color: #b8a0ac; }
.mkly-newsletter-sponsor__link { color: #c43a6e; }
.mkly-newsletter-sponsor__link:hover { color: #a02858; }
.mkly-newsletter-outro { color: #b8a0ac; }
.mkly-newsletter-outro__cta { background: #c43a6e; color: #ffffff; box-shadow: 0 0.125rem 0.625rem rgba(196,58,110,0.18); }
.mkly-newsletter-outro__cta:hover { background: #a02858; }
.mkly-newsletter-custom { background: #f8eaf0; border: 0.0625rem solid #ecd0dc; }
.mkly-newsletter-custom__title { color: #1a0810; }`,
  },
  {
    name: 'graphite',
    displayName: 'Newsletter/Graphite',
    description: 'Pure white on black — stark monochrome editorial with zero distraction',
    variables: {
      accent: '#ffffff',
      accentHover: '#cccccc',
      bg: '#0a0a0a',
      text: '#e0e0e0',
      muted: '#666666',
      border: '#222222',
      bgSubtle: '#111111',
      buttonText: '#0a0a0a',
      codeBg: '#141414',
      radius: '0.25rem',
      fontBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
      spacing: '1.5rem',
    },
    rawCss: `
.mkly-document { color: #e0e0e0; background: #0a0a0a; }
.mkly-document p { color: #a0a0a0; }
.mkly-document a { color: #ffffff; text-decoration: underline; text-decoration-color: #444444; text-underline-offset: 0.1875rem; }
.mkly-document a:not([class]):hover { text-decoration-color: #ffffff; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #ffffff; letter-spacing: -0.04em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #e0e0e0; }
.mkly-document strong { color: #ffffff; }
.mkly-document em { color: #808080; }
.mkly-document blockquote { color: #808080; border-left: 0.125rem solid #444444; padding: 0.875rem 1.375rem; background: #111111; }
.mkly-document hr { border: none; height: 0.0625rem; background: #222222; }
.mkly-document code:not(pre code) { background: #1a1a1a; color: #cccccc; padding: 0.125rem 0.4375rem; border-radius: 0.1875rem; font-size: 0.87em; border: 0.0625rem solid #2a2a2a; }
.mkly-document pre { background: #111111; border: 0.0625rem solid #222222; }
.mkly-document img { border-radius: 0.25rem; }
.mkly-document ul, .mkly-document ol { color: #a0a0a0; }
.mkly-document li::marker { color: #666666; }

.mkly-core-heading { color: #ffffff; }
.mkly-core-text { color: #a0a0a0; }
.mkly-core-button__link { background: #ffffff; color: #0a0a0a; font-weight: 600; }
.mkly-core-button__link:hover { background: #cccccc; }
.mkly-core-divider { background: #222222; }
.mkly-core-code { background: #111111; border: 0.0625rem solid #222222; }
.mkly-core-code pre { background: transparent; border: none; color: #a0a0a0; }
.mkly-core-quote { color: #808080; border-left: 0.125rem solid #444444; background: #111111; }
.mkly-core-quote__author { color: #666666; }
.mkly-core-hero { background: #111111; border: 0.0625rem solid #222222; }
.mkly-core-section { border-top: 0.0625rem solid #222222; }
.mkly-core-section__title { color: #ffffff; border-bottom: 0.0625rem solid #444444; }
.mkly-core-card { background: #111111; border: 0.0625rem solid #222222; }
.mkly-core-card__body h2 { color: #ffffff; }
.mkly-core-card__link { color: #ffffff; }
.mkly-core-card__link:hover { color: #cccccc; }
.mkly-core-list { color: #a0a0a0; }
.mkly-core-header { border-bottom: 0.0625rem solid #333333; }
.mkly-core-header__title { color: #ffffff; }
.mkly-core-footer { color: #444444; border-top: 0.0625rem solid #222222; }
.mkly-core-footer a { color: #444444; }
.mkly-core-footer a:hover { color: #ffffff; }
.mkly-core-cta { background: #ffffff; border: none; }
.mkly-core-cta__button { background: #0a0a0a; color: #ffffff; border: 0.0625rem solid #444444; }
.mkly-core-cta__button:hover { background: #222222; }

.mkly-newsletter-intro { color: #808080; }
.mkly-newsletter-featured { background: #111111; border: 0.0625rem solid #333333; }
.mkly-newsletter-featured__source { color: #0a0a0a; background: #ffffff; border: none; font-weight: 600; }
.mkly-newsletter-featured__author { color: #444444; }
.mkly-newsletter-featured__link { color: #ffffff; }
.mkly-newsletter-featured__link:hover { color: #cccccc; }
.mkly-newsletter-category { border-top: 0.0625rem solid #222222; }
.mkly-newsletter-category__title { color: #ffffff; border-bottom: 0.0625rem solid #444444; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #1a1a1a; }
.mkly-newsletter-item__source { color: #888888; }
.mkly-newsletter-item__link { color: #ffffff; }
.mkly-newsletter-item__link:hover { color: #cccccc; }
.mkly-newsletter-quickHits { background: #181818; border-left: 0.1875rem solid #555555; }
.mkly-newsletter-quickHits__title { color: #ffffff; }
.mkly-newsletter-quickHits a { color: #ffffff; }
.mkly-newsletter-tools { background: #141414; border: 0.0625rem solid #222222; }
.mkly-newsletter-tools__title { color: #ffffff; }
.mkly-newsletter-tools a { color: #ffffff; }
.mkly-newsletter-tipOfTheDay { background: #ffffff; color: #0a0a0a; border: none; }
.mkly-newsletter-tipOfTheDay__title { color: #0a0a0a; }
.mkly-newsletter-community { background: #111111; }
.mkly-newsletter-community__quote { color: #808080; border-left: 0.125rem solid #333333; padding: 0.75rem 1.25rem; font-style: italic; }
.mkly-newsletter-community__author { color: #e0e0e0; font-style: normal; }
.mkly-newsletter-personalNote { color: #a0a0a0; background: #141414; border-left: 0.1875rem solid #444444; }
.mkly-newsletter-poll { background: #111111; border: 0.0625rem solid #222222; }
.mkly-newsletter-poll__question { color: #ffffff; }
.mkly-newsletter-poll__option { color: #ffffff; border: 0.0625rem solid #333333; background: #0a0a0a; }
.mkly-newsletter-poll__option:hover { background: #ffffff; color: #0a0a0a; }
.mkly-newsletter-recommendations { background: #141414; border: 0.0625rem solid #222222; }
.mkly-newsletter-recommendations__title { color: #ffffff; }
.mkly-newsletter-recommendations a { color: #ffffff; }
.mkly-newsletter-sponsor { background: #0e0e0e; border: 0.0625rem dashed #2a2a2a; }
.mkly-newsletter-sponsor__badge { color: #444444; text-transform: uppercase; letter-spacing: 0.1em; }
.mkly-newsletter-sponsor__link { color: #ffffff; }
.mkly-newsletter-sponsor__link:hover { color: #cccccc; }
.mkly-newsletter-outro { color: #666666; }
.mkly-newsletter-outro__cta { background: #ffffff; color: #0a0a0a; font-weight: 600; }
.mkly-newsletter-outro__cta:hover { background: #cccccc; }
.mkly-newsletter-custom { background: #111111; border: 0.0625rem solid #222222; }
.mkly-newsletter-custom__title { color: #ffffff; }`,
  },
  {
    name: 'electric-lime',
    displayName: 'Newsletter/Electric Lime',
    description: 'Acid lime and hot pink on pure black — high-energy rave with dual accents',
    variables: {
      accent: '#b8ff00',
      accentHover: '#99d600',
      bg: '#000000',
      text: '#e0e0e0',
      muted: '#606060',
      border: '#1a1a1a',
      bgSubtle: '#080808',
      buttonText: '#000000',
      codeBg: '#0a0a0a',
      radius: '0.25rem',
      fontBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
      spacing: '1.25rem',
    },
    rawCss: `
.mkly-document { color: #e0e0e0; background: #000000; }
.mkly-document p { color: #a0a0a0; }
.mkly-document a { color: #b8ff00; }
.mkly-document a:not([class]):hover { color: #99d600; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #ffffff; letter-spacing: -0.02em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #e0e0e0; }
.mkly-document strong { color: #ffffff; }
.mkly-document em { color: #808080; }
.mkly-document blockquote { color: #808080; border-left: 0.1875rem solid #b8ff00; padding: 0.875rem 1.375rem; background: #0a0f00; }
.mkly-document hr { border: none; height: 0.0625rem; background: #1a1a1a; }
.mkly-document code:not(pre code) { background: #0d1400; color: #b8ff00; padding: 0.1875rem 0.5rem; border-radius: 0.1875rem; font-size: 0.87em; border: 0.0625rem solid #1a2800; }
.mkly-document pre { background: #080808; border: 0.0625rem solid #1a1a1a; }
.mkly-document img { border-radius: 0.25rem; }
.mkly-document ul, .mkly-document ol { color: #a0a0a0; }
.mkly-document li::marker { color: #b8ff00; }

.mkly-core-heading { color: #ffffff; }
.mkly-core-text { color: #a0a0a0; }
.mkly-core-button__link { background: #b8ff00; color: #000000; font-weight: 700; box-shadow: 0 0 1.375rem rgba(184,255,0,0.25); }
.mkly-core-button__link:hover { background: #99d600; box-shadow: 0 0 2rem rgba(184,255,0,0.35); }
.mkly-core-divider { background: #1a1a1a; }
.mkly-core-code { background: #080808; border: 0.0625rem solid #1a1a1a; }
.mkly-core-code pre { background: transparent; border: none; color: #a0a0a0; }
.mkly-core-quote { color: #808080; border-left: 0.1875rem solid #b8ff00; background: #0a0f00; }
.mkly-core-quote__author { color: #606060; }
.mkly-core-hero { background: #080808; border: 0.0625rem solid #1a1a1a; }
.mkly-core-section { border-top: 0.0625rem solid #1a1a1a; }
.mkly-core-section__title { color: #b8ff00; border-bottom: none; text-transform: uppercase; letter-spacing: 0.06em; }
.mkly-core-card { background: #080808; border: 0.0625rem solid #1a1a1a; }
.mkly-core-card__body h2 { color: #ffffff; }
.mkly-core-card__link { color: #b8ff00; }
.mkly-core-card__link:hover { color: #99d600; }
.mkly-core-list { color: #a0a0a0; }
.mkly-core-header { border-bottom: 0.125rem solid #b8ff00; }
.mkly-core-header__title { color: #ffffff; }
.mkly-core-footer { color: #333333; border-top: 0.0625rem solid #1a1a1a; }
.mkly-core-footer a { color: #333333; }
.mkly-core-footer a:hover { color: #b8ff00; }
.mkly-core-cta { background: #0a0f00; border: 0.0625rem solid #1a2800; }
.mkly-core-cta__button { background: #b8ff00; color: #000000; font-weight: 700; box-shadow: 0 0 1.375rem rgba(184,255,0,0.25); }
.mkly-core-cta__button:hover { background: #99d600; }

.mkly-newsletter-intro { color: #808080; }
.mkly-newsletter-featured { background: #080808; border: 0.0625rem solid #b8ff00; box-shadow: 0 0 0.875rem rgba(184,255,0,0.06); }
.mkly-newsletter-featured__source { color: #000000; background: #b8ff00; border: none; font-weight: 700; }
.mkly-newsletter-featured__author { color: #444444; }
.mkly-newsletter-featured__link { color: #b8ff00; }
.mkly-newsletter-featured__link:hover { color: #99d600; }
.mkly-newsletter-category { border-top: 0.0625rem solid #1a1a1a; }
.mkly-newsletter-category__title { color: #b8ff00; border-bottom: none; text-transform: uppercase; letter-spacing: 0.06em; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #111111; }
.mkly-newsletter-item__source { color: #b8ff00; }
.mkly-newsletter-item__link { color: #b8ff00; }
.mkly-newsletter-item__link:hover { color: #99d600; }
.mkly-newsletter-quickHits { background: #140018; border-left: 0.25rem solid #ff2d95; }
.mkly-newsletter-quickHits__title { color: #ff2d95; text-transform: uppercase; letter-spacing: 0.06em; }
.mkly-newsletter-quickHits a { color: #ff69b4; }
.mkly-newsletter-tools { background: #080808; border: 0.0625rem solid #1a1a1a; }
.mkly-newsletter-tools__title { color: #ffffff; }
.mkly-newsletter-tools a { color: #b8ff00; }
.mkly-newsletter-tipOfTheDay { background: #b8ff00; color: #000000; border: none; }
.mkly-newsletter-tipOfTheDay__title { color: #000000; }
.mkly-newsletter-community { background: #080808; }
.mkly-newsletter-community__quote { color: #808080; border-left: 0.1875rem solid #222222; padding: 0.75rem 1.25rem; font-style: italic; }
.mkly-newsletter-community__author { color: #e0e0e0; font-style: normal; }
.mkly-newsletter-personalNote { color: #a0a0a0; background: #0a0f00; border-left: 0.25rem solid #b8ff00; }
.mkly-newsletter-poll { background: #080808; border: 0.0625rem solid #1a1a1a; }
.mkly-newsletter-poll__question { color: #ffffff; }
.mkly-newsletter-poll__option { color: #b8ff00; border: 0.0625rem solid #1a2800; background: #000000; }
.mkly-newsletter-poll__option:hover { background: #b8ff00; color: #000000; font-weight: 700; }
.mkly-newsletter-recommendations { background: #140018; border: 0.0625rem solid #28003a; }
.mkly-newsletter-recommendations__title { color: #ff2d95; }
.mkly-newsletter-recommendations a { color: #ff69b4; }
.mkly-newsletter-sponsor { background: #050505; border: 0.0625rem dashed #1a1a1a; }
.mkly-newsletter-sponsor__badge { color: #444444; text-transform: uppercase; letter-spacing: 0.1em; }
.mkly-newsletter-sponsor__link { color: #b8ff00; }
.mkly-newsletter-sponsor__link:hover { color: #99d600; }
.mkly-newsletter-outro { color: #606060; }
.mkly-newsletter-outro__cta { background: #b8ff00; color: #000000; font-weight: 700; box-shadow: 0 0 1.375rem rgba(184,255,0,0.25); }
.mkly-newsletter-outro__cta:hover { background: #99d600; }
.mkly-newsletter-custom { background: #080808; border: 0.0625rem solid #1a1a1a; }
.mkly-newsletter-custom__title { color: #ffffff; }`,
  },
  {
    name: 'copper-slate',
    displayName: 'Newsletter/Copper & Slate',
    description: 'Bright copper and teal on dark slate — industrial luxury with dual-tone warmth',
    variables: {
      accent: '#e8913a',
      accentHover: '#cc7a28',
      bg: '#14181e',
      text: '#ccc8c0',
      muted: '#6a7080',
      border: '#242830',
      bgSubtle: '#1a1e26',
      buttonText: '#14181e',
      codeBg: '#181c24',
      radius: '0.375rem',
      fontBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
      spacing: '1.5rem',
    },
    rawCss: `
.mkly-document { color: #ccc8c0; background: #14181e; }
.mkly-document p { color: #9a9890; }
.mkly-document a { color: #e8913a; }
.mkly-document a:not([class]):hover { color: #cc7a28; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #eae6de; letter-spacing: -0.02em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #ccc8c0; }
.mkly-document strong { color: #eae6de; }
.mkly-document em { color: #808088; }
.mkly-document blockquote { color: #808088; border-left: 0.1875rem solid #e8913a; padding: 0.875rem 1.375rem; background: #1e2028; }
.mkly-document hr { border: none; height: 0.0625rem; background: #2a2e38; }
.mkly-document code:not(pre code) { background: #1e2228; color: #e8913a; padding: 0.1875rem 0.4375rem; border-radius: 0.25rem; font-size: 0.87em; border: 0.0625rem solid #2a3038; }
.mkly-document pre { background: #181c24; border: 0.0625rem solid #242830; }
.mkly-document img { border-radius: 0.375rem; }
.mkly-document ul, .mkly-document ol { color: #9a9890; }
.mkly-document li::marker { color: #e8913a; }

.mkly-core-heading { color: #eae6de; }
.mkly-core-text { color: #9a9890; }
.mkly-core-button__link { background: #e8913a; color: #14181e; font-weight: 600; }
.mkly-core-button__link:hover { background: #cc7a28; }
.mkly-core-divider { background: #2a2e38; }
.mkly-core-code { background: #181c24; border: 0.0625rem solid #242830; }
.mkly-core-code pre { background: transparent; border: none; color: #9a9890; }
.mkly-core-quote { color: #808088; border-left: 0.1875rem solid #e8913a; background: #1e2028; }
.mkly-core-quote__author { color: #6a7080; }
.mkly-core-hero { background: #1a1e26; border: 0.0625rem solid #242830; }
.mkly-core-section { border-top: 0.0625rem solid #2a2e38; }
.mkly-core-section__title { color: #eae6de; border-bottom: 0.125rem solid #e8913a; }
.mkly-core-card { background: #1a1e26; border: 0.0625rem solid #2a3038; }
.mkly-core-card__body h2 { color: #eae6de; }
.mkly-core-card__link { color: #e8913a; }
.mkly-core-card__link:hover { color: #cc7a28; }
.mkly-core-list { color: #9a9890; }
.mkly-core-header { border-bottom: 0.125rem solid #e8913a; }
.mkly-core-header__title { color: #eae6de; }
.mkly-core-footer { color: #404858; border-top: 0.0625rem solid #242830; }
.mkly-core-footer a { color: #404858; }
.mkly-core-footer a:hover { color: #e8913a; }
.mkly-core-cta { background: #1e2028; border: 0.0625rem solid #2a3038; }
.mkly-core-cta__button { background: #e8913a; color: #14181e; font-weight: 600; }
.mkly-core-cta__button:hover { background: #cc7a28; }

.mkly-newsletter-intro { color: #808088; }
.mkly-newsletter-featured { background: #1a1e26; border: 0.0625rem solid #e8913a; }
.mkly-newsletter-featured__source { color: #14181e; background: #e8913a; border: none; font-weight: 600; }
.mkly-newsletter-featured__author { color: #404858; }
.mkly-newsletter-featured__link { color: #e8913a; }
.mkly-newsletter-featured__link:hover { color: #cc7a28; }
.mkly-newsletter-category { border-top: 0.0625rem solid #2a2e38; }
.mkly-newsletter-category__title { color: #eae6de; border-bottom: 0.125rem solid #e8913a; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #1e2228; }
.mkly-newsletter-item__source { color: #e8913a; }
.mkly-newsletter-item__link { color: #e8913a; }
.mkly-newsletter-item__link:hover { color: #cc7a28; }
.mkly-newsletter-quickHits { background: #101820; border-left: 0.25rem solid #26a69a; }
.mkly-newsletter-quickHits__title { color: #4dd0c8; }
.mkly-newsletter-quickHits a { color: #26a69a; }
.mkly-newsletter-tools { background: #1a1e26; border: 0.0625rem solid #2a3038; }
.mkly-newsletter-tools__title { color: #eae6de; }
.mkly-newsletter-tools a { color: #e8913a; }
.mkly-newsletter-tipOfTheDay { background: #1a2218; border-left: 0.25rem solid #66bb6a; }
.mkly-newsletter-tipOfTheDay__title { color: #66bb6a; }
.mkly-newsletter-community { background: #1a1e26; }
.mkly-newsletter-community__quote { color: #808088; border-left: 0.1875rem solid #303840; padding: 0.75rem 1.25rem; font-style: italic; }
.mkly-newsletter-community__author { color: #ccc8c0; font-style: normal; }
.mkly-newsletter-personalNote { color: #9a9890; background: #1e2028; border-left: 0.25rem solid #e8913a; }
.mkly-newsletter-poll { background: #1a1e26; border: 0.0625rem solid #2a3038; }
.mkly-newsletter-poll__question { color: #eae6de; }
.mkly-newsletter-poll__option { color: #e8913a; border: 0.0625rem solid #303840; background: #14181e; }
.mkly-newsletter-poll__option:hover { border-color: #e8913a; background: #1e2228; }
.mkly-newsletter-recommendations { background: #101820; border: 0.0625rem solid #182830; }
.mkly-newsletter-recommendations__title { color: #4dd0c8; }
.mkly-newsletter-recommendations a { color: #26a69a; }
.mkly-newsletter-sponsor { background: #181c24; border: 0.0625rem dashed #303840; }
.mkly-newsletter-sponsor__badge { color: #404858; text-transform: uppercase; letter-spacing: 0.08em; }
.mkly-newsletter-sponsor__link { color: #e8913a; }
.mkly-newsletter-sponsor__link:hover { color: #cc7a28; }
.mkly-newsletter-outro { color: #6a7080; }
.mkly-newsletter-outro__cta { background: #e8913a; color: #14181e; font-weight: 600; }
.mkly-newsletter-outro__cta:hover { background: #cc7a28; }
.mkly-newsletter-custom { background: #1a1e26; border: 0.0625rem solid #2a3038; }
.mkly-newsletter-custom__title { color: #eae6de; }`,
  },
  {
    name: 'saffron',
    displayName: 'Newsletter/Saffron',
    description: 'Turmeric gold and deep burgundy on warm cream — spice-market opulence',
    variables: {
      accent: '#d4920a',
      accentHover: '#b07808',
      bg: '#faf6ee',
      text: '#241a0e',
      muted: '#887058',
      border: '#e0d0b8',
      bgSubtle: '#f0e8d4',
      buttonText: '#241a0e',
      codeBg: '#f0e8d4',
      radius: '0.375rem',
      fontBody: "'Georgia', 'Iowan Old Style', 'Palatino Linotype', serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', monospace",
      spacing: '1.625rem',
    },
    rawCss: `
.mkly-document { color: #241a0e; background: #faf6ee; }
.mkly-document p { color: #443420; }
.mkly-document a { color: #d4920a; }
.mkly-document a:not([class]):hover { color: #b07808; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #140e06; letter-spacing: -0.01em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #241a0e; }
.mkly-document strong { color: #140e06; }
.mkly-document em { color: #685040; }
.mkly-document blockquote { color: #685040; border-left: 0.1875rem solid #d4920a; padding: 1rem 1.5rem; background: #f5ecda; }
.mkly-document hr { border: none; height: 0.0625rem; background: #d4c8a8; }
.mkly-document code:not(pre code) { background: #f0e8d4; color: #8a5d10; padding: 0.125rem 0.375rem; border-radius: 0.1875rem; font-size: 0.86em; border: 0.0625rem solid #e0d0b8; }
.mkly-document pre { background: #f0e8d4; border: 0.0625rem solid #e0d0b8; }
.mkly-document img { border-radius: 0.375rem; }
.mkly-document ul, .mkly-document ol { color: #443420; }
.mkly-document li::marker { color: #d4920a; }

.mkly-core-heading { color: #140e06; }
.mkly-core-text { color: #443420; }
.mkly-core-button__link { background: #d4920a; color: #241a0e; font-weight: 600; }
.mkly-core-button__link:hover { background: #b07808; }
.mkly-core-divider { background: #d4c8a8; }
.mkly-core-code { background: #f0e8d4; border: 0.0625rem solid #e0d0b8; }
.mkly-core-code pre { background: transparent; border: none; color: #443420; }
.mkly-core-quote { color: #685040; border-left: 0.1875rem solid #d4920a; background: #f5ecda; }
.mkly-core-quote__author { color: #887058; }
.mkly-core-hero { background: #f0e8d4; }
.mkly-core-section { border-top: 0.0625rem solid #d4c8a8; }
.mkly-core-section__title { color: #140e06; border-bottom: 0.125rem solid #d4920a; }
.mkly-core-card { background: #fffcf4; border: 0.0625rem solid #e0d0b8; box-shadow: 0 0.125rem 0.375rem rgba(36,26,14,0.06); }
.mkly-core-card__body h2 { color: #140e06; }
.mkly-core-card__link { color: #d4920a; }
.mkly-core-card__link:hover { color: #b07808; }
.mkly-core-list { color: #443420; }
.mkly-core-header { border-bottom: 0.125rem solid #d4920a; }
.mkly-core-header__title { color: #140e06; }
.mkly-core-footer { color: #a89878; border-top: 0.0625rem solid #d4c8a8; }
.mkly-core-footer a { color: #a89878; }
.mkly-core-footer a:hover { color: #d4920a; }
.mkly-core-cta { background: #d4920a; color: #241a0e; border: none; }
.mkly-core-cta__button { background: #241a0e; color: #d4920a; font-weight: 600; }
.mkly-core-cta__button:hover { background: #3a2a18; }

.mkly-newsletter-intro { color: #685040; }
.mkly-newsletter-featured { background: #fffcf4; border: 0.0625rem solid #d4920a; box-shadow: 0 0.125rem 0.625rem rgba(212,146,10,0.08); }
.mkly-newsletter-featured__source { color: #241a0e; background: #d4920a; border: none; font-weight: 600; }
.mkly-newsletter-featured__author { color: #a89878; }
.mkly-newsletter-featured__link { color: #d4920a; }
.mkly-newsletter-featured__link:hover { color: #b07808; }
.mkly-newsletter-category { border-top: 0.0625rem solid #d4c8a8; }
.mkly-newsletter-category__title { color: #140e06; border-bottom: 0.125rem solid #d4920a; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #e8dcc8; }
.mkly-newsletter-item__source { color: #d4920a; font-weight: 600; }
.mkly-newsletter-item__link { color: #d4920a; }
.mkly-newsletter-item__link:hover { color: #b07808; }
.mkly-newsletter-quickHits { background: #f0e8d4; border-left: 0.25rem solid #d4920a; }
.mkly-newsletter-quickHits__title { color: #140e06; }
.mkly-newsletter-quickHits a { color: #d4920a; }
.mkly-newsletter-tools { background: #f0e8d4; border: 0.0625rem solid #e0d0b8; }
.mkly-newsletter-tools__title { color: #140e06; }
.mkly-newsletter-tools a { color: #d4920a; }
.mkly-newsletter-tipOfTheDay { background: #3a0e1a; color: #f0d0d8; border: none; }
.mkly-newsletter-tipOfTheDay__title { color: #f0d0d8; }
.mkly-newsletter-community { background: #f0e8d4; }
.mkly-newsletter-community__quote { color: #685040; border-left: 0.1875rem solid #c0a878; padding: 0.75rem 1.5rem; font-style: italic; }
.mkly-newsletter-community__author { color: #241a0e; font-style: normal; }
.mkly-newsletter-personalNote { color: #443420; background: #f5ecda; border-left: 0.25rem solid #d4920a; }
.mkly-newsletter-poll { background: #f0e8d4; border: 0.0625rem solid #e0d0b8; }
.mkly-newsletter-poll__question { color: #140e06; }
.mkly-newsletter-poll__option { color: #d4920a; border: 0.0625rem solid #e0d0b8; background: #faf6ee; }
.mkly-newsletter-poll__option:hover { border-color: #d4920a; background: #f5ecda; }
.mkly-newsletter-recommendations { background: #2a1020; color: #e0c0cc; border: none; }
.mkly-newsletter-recommendations__title { color: #e8a0b8; }
.mkly-newsletter-recommendations a { color: #e8a0b8; }
.mkly-newsletter-sponsor { background: #f0e8d4; border: 0.0625rem dashed #c8b898; }
.mkly-newsletter-sponsor__badge { color: #a89878; }
.mkly-newsletter-sponsor__link { color: #d4920a; }
.mkly-newsletter-sponsor__link:hover { color: #b07808; }
.mkly-newsletter-outro { color: #a89878; }
.mkly-newsletter-outro__cta { background: #d4920a; color: #241a0e; font-weight: 600; }
.mkly-newsletter-outro__cta:hover { background: #b07808; }
.mkly-newsletter-custom { background: #f0e8d4; border: 0.0625rem solid #e0d0b8; }
.mkly-newsletter-custom__title { color: #140e06; }`,
  },
  {
    name: 'lavender-dream',
    displayName: 'Newsletter/Lavender Dream',
    description: 'Rich violet and teal on soft lilac — dreamy contrast with bold color pops',
    variables: {
      accent: '#7c3aed',
      accentHover: '#6025cc',
      bg: '#f8f5ff',
      text: '#1a1030',
      muted: '#8080a0',
      border: '#ddd0f0',
      bgSubtle: '#f0eafc',
      buttonText: '#ffffff',
      codeBg: '#f0eafc',
      radius: '0.625rem',
      fontBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', monospace",
      spacing: '1.5rem',
    },
    rawCss: `
.mkly-document { color: #1a1030; background: #f8f5ff; }
.mkly-document p { color: #3a3050; }
.mkly-document a { color: #7c3aed; }
.mkly-document a:not([class]):hover { color: #6025cc; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #0e0820; letter-spacing: -0.02em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #1a1030; }
.mkly-document strong { color: #0e0820; }
.mkly-document em { color: #5a4e70; }
.mkly-document blockquote { color: #5a4e70; border-left: 0.1875rem solid #a78bfa; padding: 0.875rem 1.375rem; background: #f0eafc; }
.mkly-document hr { border: none; height: 0.0625rem; background: #ddd0f0; }
.mkly-document code:not(pre code) { background: #ede5fc; color: #5b21b6; padding: 0.125rem 0.375rem; border-radius: 0.3125rem; font-size: 0.87em; }
.mkly-document pre { background: #f0eafc; border: 0.0625rem solid #ddd0f0; }
.mkly-document img { border-radius: 0.625rem; }
.mkly-document ul, .mkly-document ol { color: #3a3050; }
.mkly-document li::marker { color: #7c3aed; }

.mkly-core-heading { color: #0e0820; }
.mkly-core-text { color: #3a3050; }
.mkly-core-button__link { background: #7c3aed; color: #ffffff; box-shadow: 0 0.1875rem 0.75rem rgba(124,58,237,0.2); }
.mkly-core-button__link:hover { background: #6025cc; box-shadow: 0 0.3125rem 1.25rem rgba(124,58,237,0.3); }
.mkly-core-divider { background: #ddd0f0; }
.mkly-core-code { background: #f0eafc; border: 0.0625rem solid #ddd0f0; }
.mkly-core-code pre { background: transparent; border: none; color: #3a3050; }
.mkly-core-quote { color: #5a4e70; border-left: 0.1875rem solid #a78bfa; background: #f0eafc; }
.mkly-core-quote__author { color: #8080a0; }
.mkly-core-hero { background: #f0eafc; }
.mkly-core-section { border-top: 0.0625rem solid #ddd0f0; }
.mkly-core-section__title { color: #0e0820; border-bottom: 0.125rem solid #7c3aed; }
.mkly-core-card { background: #ffffff; border: 0.0625rem solid #ddd0f0; box-shadow: 0 0.125rem 0.5rem rgba(26,16,48,0.04); }
.mkly-core-card__body h2 { color: #0e0820; }
.mkly-core-card__link { color: #7c3aed; }
.mkly-core-card__link:hover { color: #6025cc; }
.mkly-core-list { color: #3a3050; }
.mkly-core-header { border-bottom: 0.125rem solid #7c3aed; }
.mkly-core-header__title { color: #0e0820; }
.mkly-core-footer { color: #b0a8c0; border-top: 0.0625rem solid #ddd0f0; }
.mkly-core-footer a { color: #b0a8c0; }
.mkly-core-footer a:hover { color: #7c3aed; }
.mkly-core-cta { background: #f0eafc; border: 0.0625rem solid #ddd0f0; }
.mkly-core-cta__button { background: #7c3aed; color: #ffffff; box-shadow: 0 0.1875rem 0.75rem rgba(124,58,237,0.2); }
.mkly-core-cta__button:hover { background: #6025cc; }

.mkly-newsletter-intro { color: #5a4e70; }
.mkly-newsletter-featured { background: #ffffff; border: 0.0625rem solid #7c3aed; box-shadow: 0 0.125rem 0.625rem rgba(124,58,237,0.06); }
.mkly-newsletter-featured__source { color: #ffffff; background: #7c3aed; border: none; font-weight: 600; }
.mkly-newsletter-featured__author { color: #b0a8c0; }
.mkly-newsletter-featured__link { color: #7c3aed; }
.mkly-newsletter-featured__link:hover { color: #6025cc; }
.mkly-newsletter-category { border-top: 0.0625rem solid #ddd0f0; }
.mkly-newsletter-category__title { color: #0e0820; border-bottom: 0.125rem solid #7c3aed; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #ece4f8; }
.mkly-newsletter-item__source { color: #7c3aed; }
.mkly-newsletter-item__link { color: #7c3aed; }
.mkly-newsletter-item__link:hover { color: #6025cc; }
.mkly-newsletter-quickHits { background: #e0f5f0; border-left: 0.25rem solid #0d9488; }
.mkly-newsletter-quickHits__title { color: #0d7068; }
.mkly-newsletter-quickHits a { color: #0d9488; }
.mkly-newsletter-tools { background: #f0eafc; border: 0.0625rem solid #ddd0f0; }
.mkly-newsletter-tools__title { color: #0e0820; }
.mkly-newsletter-tools a { color: #7c3aed; }
.mkly-newsletter-tipOfTheDay { background: #fef3c7; border-left: 0.25rem solid #d97706; }
.mkly-newsletter-tipOfTheDay__title { color: #92400e; }
.mkly-newsletter-community { background: #f0eafc; }
.mkly-newsletter-community__quote { color: #5a4e70; border-left: 0.1875rem solid #c4b8e0; padding: 0.75rem 1.375rem; font-style: italic; }
.mkly-newsletter-community__author { color: #1a1030; font-style: normal; }
.mkly-newsletter-personalNote { color: #3a3050; background: #ede5fc; border-left: 0.25rem solid #a78bfa; }
.mkly-newsletter-poll { background: #f0eafc; border: 0.0625rem solid #ddd0f0; }
.mkly-newsletter-poll__question { color: #0e0820; }
.mkly-newsletter-poll__option { color: #7c3aed; border: 0.0625rem solid #ddd0f0; background: #f8f5ff; }
.mkly-newsletter-poll__option:hover { border-color: #7c3aed; background: #ede5fc; }
.mkly-newsletter-recommendations { background: #fce4ec; border: 0.0625rem solid #f8bbd0; }
.mkly-newsletter-recommendations__title { color: #c2185b; }
.mkly-newsletter-recommendations a { color: #e91e63; }
.mkly-newsletter-sponsor { background: #f0eafc; border: 0.0625rem dashed #c4b8e0; }
.mkly-newsletter-sponsor__badge { color: #b0a8c0; }
.mkly-newsletter-sponsor__link { color: #7c3aed; }
.mkly-newsletter-sponsor__link:hover { color: #6025cc; }
.mkly-newsletter-outro { color: #b0a8c0; }
.mkly-newsletter-outro__cta { background: #7c3aed; color: #ffffff; box-shadow: 0 0.1875rem 0.75rem rgba(124,58,237,0.2); }
.mkly-newsletter-outro__cta:hover { background: #6025cc; }
.mkly-newsletter-custom { background: #f0eafc; border: 0.0625rem solid #ddd0f0; }
.mkly-newsletter-custom__title { color: #0e0820; }`,
  },
  {
    name: 'cherry-blossom',
    displayName: 'Newsletter/Cherry Blossom',
    description: 'Sakura pink and bamboo green on warm ivory — Japanese spring with gentle grace',
    variables: {
      accent: '#d44070',
      accentHover: '#b83060',
      bg: '#fdf8f4',
      text: '#2a1820',
      muted: '#98808c',
      border: '#f0d8e0',
      bgSubtle: '#faf0f0',
      buttonText: '#ffffff',
      codeBg: '#faf0f0',
      radius: '0.5rem',
      fontBody: "'Georgia', 'Iowan Old Style', 'Palatino Linotype', serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', monospace",
      spacing: '1.625rem',
    },
    rawCss: `
.mkly-document { color: #2a1820; background: #fdf8f4; }
.mkly-document p { color: #483038; }
.mkly-document a { color: #d44070; }
.mkly-document a:not([class]):hover { color: #b83060; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #180c12; letter-spacing: -0.01em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #2a1820; }
.mkly-document strong { color: #180c12; }
.mkly-document em { color: #684858; }
.mkly-document blockquote { color: #684858; border-left: 0.1875rem solid #e890a8; padding: 1rem 1.5rem; background: #fdf0f4; }
.mkly-document hr { border: none; height: 0.0625rem; background: #f0d8e0; }
.mkly-document code:not(pre code) { background: #fdf0f4; color: #a0284e; padding: 0.125rem 0.375rem; border-radius: 0.25rem; font-size: 0.86em; }
.mkly-document pre { background: #faf0f0; border: 0.0625rem solid #f0d8e0; }
.mkly-document img { border-radius: 0.5rem; }
.mkly-document ul, .mkly-document ol { color: #483038; }
.mkly-document li::marker { color: #d44070; }

.mkly-core-heading { color: #180c12; }
.mkly-core-text { color: #483038; }
.mkly-core-button__link { background: #d44070; color: #ffffff; }
.mkly-core-button__link:hover { background: #b83060; }
.mkly-core-divider { background: #f0d8e0; }
.mkly-core-code { background: #faf0f0; border: 0.0625rem solid #f0d8e0; }
.mkly-core-code pre { background: transparent; border: none; color: #483038; }
.mkly-core-quote { color: #684858; border-left: 0.1875rem solid #e890a8; background: #fdf0f4; }
.mkly-core-quote__author { color: #98808c; }
.mkly-core-hero { background: #faf0f0; }
.mkly-core-section { border-top: 0.0625rem solid #f0d8e0; }
.mkly-core-section__title { color: #180c12; border-bottom: 0.125rem solid #d44070; }
.mkly-core-card { background: #ffffff; border: 0.0625rem solid #f0d8e0; }
.mkly-core-card__body h2 { color: #180c12; }
.mkly-core-card__link { color: #d44070; }
.mkly-core-card__link:hover { color: #b83060; }
.mkly-core-list { color: #483038; }
.mkly-core-header { border-bottom: 0.125rem solid #d44070; }
.mkly-core-header__title { color: #180c12; }
.mkly-core-footer { color: #b8a0ac; border-top: 0.0625rem solid #f0d8e0; }
.mkly-core-footer a { color: #b8a0ac; }
.mkly-core-footer a:hover { color: #d44070; }
.mkly-core-cta { background: #fdf0f4; border: 0.0625rem solid #f0d0dc; }
.mkly-core-cta__button { background: #d44070; color: #ffffff; }
.mkly-core-cta__button:hover { background: #b83060; }

.mkly-newsletter-intro { color: #684858; }
.mkly-newsletter-featured { background: #ffffff; border: 0.0625rem solid #d44070; }
.mkly-newsletter-featured__source { color: #ffffff; background: #d44070; border: none; font-weight: 600; }
.mkly-newsletter-featured__author { color: #b8a0ac; }
.mkly-newsletter-featured__link { color: #d44070; }
.mkly-newsletter-featured__link:hover { color: #b83060; }
.mkly-newsletter-category { border-top: 0.0625rem solid #f0d8e0; }
.mkly-newsletter-category__title { color: #180c12; border-bottom: 0.125rem solid #d44070; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #f8e8ee; }
.mkly-newsletter-item__source { color: #d44070; }
.mkly-newsletter-item__link { color: #d44070; }
.mkly-newsletter-item__link:hover { color: #b83060; }
.mkly-newsletter-quickHits { background: #fdf0f4; border-left: 0.25rem solid #d44070; }
.mkly-newsletter-quickHits__title { color: #180c12; }
.mkly-newsletter-quickHits a { color: #d44070; }
.mkly-newsletter-tools { background: #faf0f0; border: 0.0625rem solid #f0d8e0; }
.mkly-newsletter-tools__title { color: #180c12; }
.mkly-newsletter-tools a { color: #d44070; }
.mkly-newsletter-tipOfTheDay { background: #e8f4e8; border-left: 0.25rem solid #4a8c5a; }
.mkly-newsletter-tipOfTheDay__title { color: #2e6040; }
.mkly-newsletter-community { background: #faf0f0; }
.mkly-newsletter-community__quote { color: #684858; border-left: 0.1875rem solid #e8d0d8; padding: 0.75rem 1.5rem; font-style: italic; }
.mkly-newsletter-community__author { color: #2a1820; font-style: normal; }
.mkly-newsletter-personalNote { color: #483038; background: #fdf0f4; border-left: 0.25rem solid #e890a8; }
.mkly-newsletter-poll { background: #faf0f0; border: 0.0625rem solid #f0d8e0; }
.mkly-newsletter-poll__question { color: #180c12; }
.mkly-newsletter-poll__option { color: #d44070; border: 0.0625rem solid #f0d8e0; background: #fdf8f4; }
.mkly-newsletter-poll__option:hover { border-color: #d44070; background: #fdf0f4; }
.mkly-newsletter-recommendations { background: #e8f4e8; border: 0.0625rem solid #c8e0cc; }
.mkly-newsletter-recommendations__title { color: #2e6040; }
.mkly-newsletter-recommendations a { color: #4a8c5a; }
.mkly-newsletter-sponsor { background: #faf0f0; border: 0.0625rem dashed #e0c8d0; }
.mkly-newsletter-sponsor__badge { color: #b8a0ac; }
.mkly-newsletter-sponsor__link { color: #d44070; }
.mkly-newsletter-sponsor__link:hover { color: #b83060; }
.mkly-newsletter-outro { color: #b8a0ac; }
.mkly-newsletter-outro__cta { background: #d44070; color: #ffffff; }
.mkly-newsletter-outro__cta:hover { background: #b83060; }
.mkly-newsletter-custom { background: #faf0f0; border: 0.0625rem solid #f0d8e0; }
.mkly-newsletter-custom__title { color: #180c12; }`,
  },
  {
    name: 'cosmic',
    displayName: 'Newsletter/Cosmic',
    description: 'Hot pink and electric blue on deep space — interstellar with nebula gradients',
    variables: {
      accent: '#ff2d78',
      accentHover: '#e01060',
      bg: '#050510',
      text: '#d8d0f0',
      muted: '#6058a0',
      border: '#18143a',
      bgSubtle: '#0a0820',
      buttonText: '#050510',
      codeBg: '#08061a',
      radius: '0.5rem',
      fontBody: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
      spacing: '1.5rem',
    },
    rawCss: `
.mkly-document { color: #d8d0f0; background: #050510; }
.mkly-document p { color: #a098c8; }
.mkly-document a { color: #ff2d78; }
.mkly-document a:not([class]):hover { color: #e01060; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #eee8ff; letter-spacing: -0.02em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #d8d0f0; }
.mkly-document strong { color: #eee8ff; }
.mkly-document em { color: #8880b0; }
.mkly-document blockquote { color: #8880b0; border-left: 0.1875rem solid #ff2d78; padding: 0.875rem 1.375rem; background: #0e0820; }
.mkly-document hr { border: none; height: 0.0625rem; background: #18143a; }
.mkly-document code:not(pre code) { background: #140830; color: #ff6aa0; padding: 0.1875rem 0.4375rem; border-radius: 0.25rem; font-size: 0.87em; }
.mkly-document pre { background: #08061a; border: 0.0625rem solid #18143a; }
.mkly-document img { border-radius: 0.5rem; }
.mkly-document ul, .mkly-document ol { color: #a098c8; }
.mkly-document li::marker { color: #ff2d78; }

.mkly-core-heading { color: #eee8ff; }
.mkly-core-text { color: #a098c8; }
.mkly-core-button__link { background: linear-gradient(135deg, #ff2d78, #6366f1); color: #ffffff; box-shadow: 0 0.25rem 1.25rem rgba(255,45,120,0.25); }
.mkly-core-button__link:hover { background: linear-gradient(135deg, #e01060, #4f46e5); box-shadow: 0 0.375rem 1.875rem rgba(255,45,120,0.35); }
.mkly-core-divider { background: #18143a; }
.mkly-core-code { background: #08061a; border: 0.0625rem solid #18143a; }
.mkly-core-code pre { background: transparent; border: none; color: #8880b0; }
.mkly-core-quote { color: #8880b0; border-left: 0.1875rem solid #ff2d78; background: #0e0820; }
.mkly-core-quote__author { color: #6058a0; }
.mkly-core-hero { background: #0a0820; border: 0.0625rem solid #18143a; }
.mkly-core-section { border-top: 0.0625rem solid #18143a; }
.mkly-core-section__title { color: #eee8ff; border-bottom: 0.125rem solid #ff2d78; }
.mkly-core-card { background: #0a0820; border: 0.0625rem solid #201850; }
.mkly-core-card__body h2 { color: #eee8ff; }
.mkly-core-card__link { color: #ff2d78; }
.mkly-core-card__link:hover { color: #e01060; }
.mkly-core-list { color: #a098c8; }
.mkly-core-header { border-bottom: 0.125rem solid #ff2d78; }
.mkly-core-header__title { color: #eee8ff; }
.mkly-core-footer { color: #302860; border-top: 0.0625rem solid #18143a; }
.mkly-core-footer a { color: #302860; }
.mkly-core-footer a:hover { color: #ff2d78; }
.mkly-core-cta { background: linear-gradient(135deg, #140820, #0a0830); border: 0.0625rem solid #281850; }
.mkly-core-cta__button { background: linear-gradient(135deg, #ff2d78, #6366f1); color: #ffffff; box-shadow: 0 0.25rem 1.25rem rgba(255,45,120,0.25); }
.mkly-core-cta__button:hover { background: linear-gradient(135deg, #e01060, #4f46e5); }

.mkly-newsletter-intro { color: #8880b0; }
.mkly-newsletter-featured { background: #0a0820; border: 0.0625rem solid #ff2d78; box-shadow: 0 0 1.25rem rgba(255,45,120,0.08); }
.mkly-newsletter-featured__source { color: #ffffff; background: linear-gradient(135deg, #ff2d78, #6366f1); border: none; font-weight: 600; }
.mkly-newsletter-featured__author { color: #302860; }
.mkly-newsletter-featured__link { color: #ff2d78; }
.mkly-newsletter-featured__link:hover { color: #e01060; }
.mkly-newsletter-category { border-top: 0.0625rem solid #18143a; }
.mkly-newsletter-category__title { color: #eee8ff; border-bottom: 0.125rem solid #ff2d78; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #100c28; }
.mkly-newsletter-item__source { color: #ff2d78; }
.mkly-newsletter-item__link { color: #ff2d78; }
.mkly-newsletter-item__link:hover { color: #e01060; }
.mkly-newsletter-quickHits { background: #0a0830; border-left: 0.25rem solid #6366f1; }
.mkly-newsletter-quickHits__title { color: #818cf8; }
.mkly-newsletter-quickHits a { color: #6366f1; }
.mkly-newsletter-tools { background: #0a0820; border: 0.0625rem solid #201850; }
.mkly-newsletter-tools__title { color: #eee8ff; }
.mkly-newsletter-tools a { color: #ff2d78; }
.mkly-newsletter-tipOfTheDay { background: #001818; border-left: 0.25rem solid #00e5ff; }
.mkly-newsletter-tipOfTheDay__title { color: #00e5ff; }
.mkly-newsletter-community { background: #0a0820; }
.mkly-newsletter-community__quote { color: #8880b0; border-left: 0.1875rem solid #201850; padding: 0.75rem 1.25rem; font-style: italic; }
.mkly-newsletter-community__author { color: #d8d0f0; font-style: normal; }
.mkly-newsletter-personalNote { color: #a098c8; background: #0e0820; border-left: 0.25rem solid #ff2d78; }
.mkly-newsletter-poll { background: #0a0820; border: 0.0625rem solid #201850; }
.mkly-newsletter-poll__question { color: #eee8ff; }
.mkly-newsletter-poll__option { color: #ff2d78; border: 0.0625rem solid #281850; background: #050510; }
.mkly-newsletter-poll__option:hover { border-color: #ff2d78; background: #140820; box-shadow: 0 0 0.75rem rgba(255,45,120,0.12); }
.mkly-newsletter-recommendations { background: #0a0830; border: 0.0625rem solid #201850; }
.mkly-newsletter-recommendations__title { color: #00e5ff; }
.mkly-newsletter-recommendations a { color: #00e5ff; }
.mkly-newsletter-sponsor { background: #08061a; border: 0.0625rem dashed #201850; }
.mkly-newsletter-sponsor__badge { color: #302860; text-transform: uppercase; letter-spacing: 0.08em; }
.mkly-newsletter-sponsor__link { color: #ff2d78; }
.mkly-newsletter-sponsor__link:hover { color: #e01060; }
.mkly-newsletter-outro { color: #6058a0; }
.mkly-newsletter-outro__cta { background: linear-gradient(135deg, #ff2d78, #6366f1); color: #ffffff; box-shadow: 0 0.25rem 1.25rem rgba(255,45,120,0.25); }
.mkly-newsletter-outro__cta:hover { background: linear-gradient(135deg, #e01060, #4f46e5); }
.mkly-newsletter-custom { background: #0a0820; border: 0.0625rem solid #201850; }
.mkly-newsletter-custom__title { color: #eee8ff; }`,
  },
  {
    name: 'creative-flux',
    displayName: 'Newsletter/Creative Flux',
    description: 'Premium frosted glass on warm peach-to-teal gradient — serif headlines, solid translucent panels, deep Z-depth',
    variables: {
      accent: '#2d8a9a',
      accentHover: '#1e7080',
      bg: '#e8cfc0',
      text: '#0c1428',
      muted: '#607088',
      border: 'rgba(255,255,255,0.15)',
      bgSubtle: 'rgba(255,255,255,0.12)',
      buttonText: '#ffffff',
      codeBg: 'rgba(255,255,255,0.14)',
      radius: '1.625rem',
      fontBody: "'Plus Jakarta Sans', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "'Playfair Display', 'Cormorant Garamond', 'Georgia', 'Times New Roman', serif",
      fontMono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
      spacing: '2.25rem',
    },
    rawCss: `
.mkly-document { color: #0c1428; background: linear-gradient(160deg, #f0c8b0 0%, #ddd8d8 35%, #b8d4dc 65%, #94c0cc 100%); min-height: 100vh; }
.mkly-document p { color: #1c2838; }
.mkly-document a { color: #2d8a9a; text-decoration-color: rgba(45,138,154,0.4); }
.mkly-document a:not([class]):hover { color: #1e7080; text-decoration-color: #1e7080; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #060c18; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #0e1828; }
.mkly-document strong { color: #060c18; }
.mkly-document em { color: #354050; }
.mkly-document blockquote { color: #354050; border-left: 0.1875rem solid rgba(45,138,154,0.5); padding: 1rem 1.5rem; background: rgba(255,255,255,0.14); }
.mkly-document hr { border: none; height: 0.0625rem; background: rgba(255,255,255,0.25); }
.mkly-document code:not(pre code) { background: rgba(255,255,255,0.18); color: #1a4050; padding: 0.1875rem 0.5rem; border-radius: 0.375rem; font-size: 0.86em; }
.mkly-document pre { background: rgba(255,255,255,0.12); border: 0.0625rem solid rgba(255,255,255,0.12); }
.mkly-document img { border-radius: 1.125rem; }
.mkly-document ul, .mkly-document ol { color: #1c2838; }
.mkly-document li::marker { color: #2d8a9a; }

.mkly-core-heading { color: #060c18; }
.mkly-core-text { color: #1c2838; }
.mkly-core-button__link { background: rgba(14,24,40,0.80); color: #f0f0f5; backdrop-filter: blur(0.875rem); -webkit-backdrop-filter: blur(0.875rem); border: 0.0625rem solid rgba(255,255,255,0.12); }
.mkly-core-button__link:hover { background: rgba(14,24,40,0.88); }
.mkly-core-divider { background: rgba(255,255,255,0.25); }
.mkly-core-code { background: rgba(255,255,255,0.16); border: 0.0625rem solid rgba(255,255,255,0.12); backdrop-filter: blur(1.75rem); -webkit-backdrop-filter: blur(1.75rem); }
.mkly-core-code pre { background: transparent; border: none; color: #1c2838; }
.mkly-core-quote { color: #354050; border-left: 0.1875rem solid rgba(45,138,154,0.5); background: rgba(255,255,255,0.14); backdrop-filter: blur(1.5rem); -webkit-backdrop-filter: blur(1.5rem); }
.mkly-core-quote__author { color: #506878; }
.mkly-core-hero { background: rgba(255,255,255,0.28); border: 0.0625rem solid rgba(255,255,255,0.15); backdrop-filter: blur(2.25rem); -webkit-backdrop-filter: blur(2.25rem); }
.mkly-core-section { border-top: 0.0625rem solid rgba(255,255,255,0.20); }
.mkly-core-section__title { color: #060c18; border-bottom: 0.1875rem solid rgba(14,24,40,0.18); }
.mkly-core-card { background: rgba(255,255,255,0.30); border: 0.0625rem solid rgba(255,255,255,0.15); backdrop-filter: blur(2.25rem); -webkit-backdrop-filter: blur(2.25rem); }
.mkly-core-card__body h2 { color: #060c18; }
.mkly-core-card__link { color: #2d8a9a; }
.mkly-core-card__link:hover { color: #1e7080; }
.mkly-core-list { color: #1c2838; }
.mkly-core-header { border-bottom: 0.0625rem solid rgba(255,255,255,0.18); }
.mkly-core-header__title { color: #060c18; }
.mkly-core-footer { color: rgba(10,20,40,0.40); border-top: 0.0625rem solid rgba(255,255,255,0.15); }
.mkly-core-footer a { color: rgba(10,20,40,0.40); }
.mkly-core-footer a:hover { color: #2d8a9a; }
.mkly-core-cta { background: rgba(255,255,255,0.26); border: 0.0625rem solid rgba(255,255,255,0.15); backdrop-filter: blur(2.25rem); -webkit-backdrop-filter: blur(2.25rem); }
.mkly-core-cta__button { background: rgba(14,24,40,0.80); color: #f0f0f5; backdrop-filter: blur(0.875rem); -webkit-backdrop-filter: blur(0.875rem); border: 0.0625rem solid rgba(255,255,255,0.12); }
.mkly-core-cta__button:hover { background: rgba(14,24,40,0.88); }

.mkly-newsletter-intro { color: #283848; }
.mkly-newsletter-featured { background: rgba(255,255,255,0.32); border: 0.0625rem solid rgba(255,255,255,0.18); }
.mkly-newsletter-featured__source { color: #f0f0f5; background: rgba(14,24,40,0.70); border: none; backdrop-filter: blur(0.75rem); -webkit-backdrop-filter: blur(0.75rem); }
.mkly-newsletter-featured__author { color: #506878; }
.mkly-newsletter-featured__link { color: #2d8a9a; }
.mkly-newsletter-featured__link:hover { color: #1e7080; }
.mkly-newsletter-category { background: rgba(255,255,255,0.26); border: 0.0625rem solid rgba(255,255,255,0.15); backdrop-filter: blur(2.25rem); -webkit-backdrop-filter: blur(2.25rem); }
.mkly-newsletter-category__title { color: #060c18; border-bottom-color: rgba(14,24,40,0.15); }
.mkly-newsletter-item { background: rgba(255,255,255,0.26); border: 0.0625rem solid rgba(255,255,255,0.15); }
.mkly-newsletter-item__source { color: #f0f0f5; background: rgba(14,24,40,0.62); backdrop-filter: blur(0.625rem); -webkit-backdrop-filter: blur(0.625rem); }
.mkly-newsletter-item__meta { color: #506878; }
.mkly-newsletter-item__link { color: #2d8a9a; }
.mkly-newsletter-item__link:hover { color: #1e7080; }
.mkly-newsletter-quickHits { background: rgba(255,255,255,0.28); border: 0.0625rem solid rgba(255,255,255,0.15); }
.mkly-newsletter-quickHits__title { color: #060c18; border-bottom-color: rgba(14,24,40,0.15); }
.mkly-newsletter-quickHits a { color: #2d8a9a; }
.mkly-newsletter-tools { background: rgba(255,255,255,0.28); border: 0.0625rem solid rgba(255,255,255,0.15); }
.mkly-newsletter-tools__title { color: #060c18; border-bottom-color: rgba(14,24,40,0.15); }
.mkly-newsletter-tools a { color: #2d8a9a; }
.mkly-newsletter-tipOfTheDay { background: rgba(255,255,255,0.26); border-left: 0.25rem solid rgba(45,138,154,0.6); }
.mkly-newsletter-tipOfTheDay__title { color: #2d8a9a; }
.mkly-newsletter-community { background: rgba(255,255,255,0.28); border: 0.0625rem solid rgba(255,255,255,0.15); }
.mkly-newsletter-community__quote { color: #283848; border-left: 0.1875rem solid rgba(14,24,40,0.12); }
.mkly-newsletter-community__author { color: #060c18; border-top-color: rgba(255,255,255,0.15); }
.mkly-newsletter-personalNote { color: #283848; background: rgba(255,255,255,0.26); border-left: 0.25rem solid rgba(45,138,154,0.55); }
.mkly-newsletter-poll { background: rgba(255,255,255,0.28); border: 0.0625rem solid rgba(255,255,255,0.15); }
.mkly-newsletter-poll__question { color: #060c18; }
.mkly-newsletter-poll__option { color: #060c18; border: 0.0625rem solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.18); backdrop-filter: blur(0.875rem); -webkit-backdrop-filter: blur(0.875rem); }
.mkly-newsletter-poll__option:hover { border-color: rgba(45,138,154,0.4); background: rgba(255,255,255,0.28); }
.mkly-newsletter-recommendations { background: rgba(255,255,255,0.28); border: 0.0625rem solid rgba(255,255,255,0.15); }
.mkly-newsletter-recommendations__title { color: #060c18; border-bottom-color: rgba(14,24,40,0.15); }
.mkly-newsletter-recommendations a { color: #2d8a9a; }
.mkly-newsletter-sponsor { background: rgba(255,255,255,0.26); border: 0.0625rem solid rgba(255,255,255,0.15); }
.mkly-newsletter-sponsor__badge { color: #f0f0f5; background: rgba(14,24,40,0.62); backdrop-filter: blur(0.625rem); -webkit-backdrop-filter: blur(0.625rem); }
.mkly-newsletter-sponsor__link { color: #2d8a9a; }
.mkly-newsletter-sponsor__link:hover { color: #1e7080; }
.mkly-newsletter-outro { color: #283848; background: rgba(255,255,255,0.28); border: 0.0625rem solid rgba(255,255,255,0.15); }
.mkly-newsletter-outro__cta { background: rgba(14,24,40,0.80); color: #f0f0f5; backdrop-filter: blur(0.875rem); -webkit-backdrop-filter: blur(0.875rem); border: 0.0625rem solid rgba(255,255,255,0.12); }
.mkly-newsletter-outro__cta:hover { background: rgba(14,24,40,0.88); }
.mkly-newsletter-custom { background: rgba(255,255,255,0.28); border: 0.0625rem solid rgba(255,255,255,0.15); }
.mkly-newsletter-custom__title { color: #060c18; border-bottom-color: rgba(14,24,40,0.15); }`,
  },
  {
    name: 'forest-floor',
    displayName: 'Newsletter/Forest Floor',
    description: 'Deep moss and amber on bark brown — woodland retreat with rich earthy tones',
    variables: {
      accent: '#2e7d32',
      accentHover: '#1b5e20',
      bg: '#f2efe8',
      text: '#1a1c14',
      muted: '#6a7060',
      border: '#ccc8b8',
      bgSubtle: '#e6e2d6',
      buttonText: '#ffffff',
      codeBg: '#e2ded2',
      radius: '0.375rem',
      fontBody: "'Georgia', 'Iowan Old Style', 'Palatino Linotype', serif",
      fontHeading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'JetBrains Mono', 'SF Mono', monospace",
      spacing: '1.625rem',
    },
    rawCss: `
.mkly-document { color: #1a1c14; background: #f2efe8; }
.mkly-document p { color: #383e30; }
.mkly-document a { color: #2e7d32; }
.mkly-document a:not([class]):hover { color: #1b5e20; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #0c0e08; letter-spacing: -0.01em; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 { color: #1a1c14; }
.mkly-document strong { color: #0c0e08; }
.mkly-document em { color: #505840; }
.mkly-document blockquote { color: #505840; border-left: 0.1875rem solid #4caf50; padding: 1rem 1.5rem; background: #e6e2d6; }
.mkly-document hr { border: none; height: 0.0625rem; background: #c0bca8; }
.mkly-document code:not(pre code) { background: #dce8d0; color: #1b5e20; padding: 0.125rem 0.375rem; border-radius: 0.1875rem; font-size: 0.86em; border: 0.0625rem solid #c0d4b0; }
.mkly-document pre { background: #e2ded2; border: 0.0625rem solid #ccc8b8; }
.mkly-document img { border-radius: 0.375rem; }
.mkly-document ul, .mkly-document ol { color: #383e30; }
.mkly-document li::marker { color: #2e7d32; }

.mkly-core-heading { color: #0c0e08; }
.mkly-core-text { color: #383e30; }
.mkly-core-button__link { background: #2e7d32; color: #ffffff; }
.mkly-core-button__link:hover { background: #1b5e20; }
.mkly-core-divider { background: #c0bca8; }
.mkly-core-code { background: #e2ded2; border: 0.0625rem solid #ccc8b8; }
.mkly-core-code pre { background: transparent; border: none; color: #383e30; }
.mkly-core-quote { color: #505840; border-left: 0.1875rem solid #4caf50; background: #e6e2d6; }
.mkly-core-quote__author { color: #6a7060; }
.mkly-core-hero { background: #e6e2d6; }
.mkly-core-section { border-top: 0.0625rem solid #c0bca8; }
.mkly-core-section__title { color: #0c0e08; border-bottom: 0.125rem solid #2e7d32; }
.mkly-core-card { background: #f8f6f0; border: 0.0625rem solid #ccc8b8; }
.mkly-core-card__body h2 { color: #0c0e08; }
.mkly-core-card__link { color: #2e7d32; }
.mkly-core-card__link:hover { color: #1b5e20; }
.mkly-core-list { color: #383e30; }
.mkly-core-header { border-bottom: 0.125rem solid #2e7d32; }
.mkly-core-header__title { color: #0c0e08; }
.mkly-core-footer { color: #989080; border-top: 0.0625rem solid #c0bca8; }
.mkly-core-footer a { color: #989080; }
.mkly-core-footer a:hover { color: #2e7d32; }
.mkly-core-cta { background: #e6e2d6; border: 0.0625rem solid #c0bca8; }
.mkly-core-cta__button { background: #2e7d32; color: #ffffff; }
.mkly-core-cta__button:hover { background: #1b5e20; }

.mkly-newsletter-intro { color: #505840; }
.mkly-newsletter-featured { background: #f8f6f0; border: 0.0625rem solid #2e7d32; }
.mkly-newsletter-featured__source { color: #ffffff; background: #2e7d32; border: none; font-weight: 600; }
.mkly-newsletter-featured__author { color: #989080; }
.mkly-newsletter-featured__link { color: #2e7d32; }
.mkly-newsletter-featured__link:hover { color: #1b5e20; }
.mkly-newsletter-category { border-top: 0.0625rem solid #c0bca8; }
.mkly-newsletter-category__title { color: #0c0e08; border-bottom: 0.125rem solid #2e7d32; }
.mkly-newsletter-item { border-bottom: 0.0625rem solid #dad6c8; }
.mkly-newsletter-item__source { color: #2e7d32; }
.mkly-newsletter-item__link { color: #2e7d32; }
.mkly-newsletter-item__link:hover { color: #1b5e20; }
.mkly-newsletter-quickHits { background: #dce8d0; border-left: 0.25rem solid #2e7d32; }
.mkly-newsletter-quickHits__title { color: #0c0e08; }
.mkly-newsletter-quickHits a { color: #2e7d32; }
.mkly-newsletter-tools { background: #e6e2d6; border: 0.0625rem solid #ccc8b8; }
.mkly-newsletter-tools__title { color: #0c0e08; }
.mkly-newsletter-tools a { color: #2e7d32; }
.mkly-newsletter-tipOfTheDay { background: #f5e6c8; border-left: 0.25rem solid #e6960a; }
.mkly-newsletter-tipOfTheDay__title { color: #a06800; }
.mkly-newsletter-community { background: #e6e2d6; }
.mkly-newsletter-community__quote { color: #505840; border-left: 0.1875rem solid #b8b0a0; padding: 0.75rem 1.5rem; font-style: italic; }
.mkly-newsletter-community__author { color: #1a1c14; font-style: normal; }
.mkly-newsletter-personalNote { color: #383e30; background: #dce8d0; border-left: 0.25rem solid #4caf50; }
.mkly-newsletter-poll { background: #e6e2d6; border: 0.0625rem solid #ccc8b8; }
.mkly-newsletter-poll__question { color: #0c0e08; }
.mkly-newsletter-poll__option { color: #2e7d32; border: 0.0625rem solid #ccc8b8; background: #f2efe8; }
.mkly-newsletter-poll__option:hover { border-color: #2e7d32; background: #dce8d0; }
.mkly-newsletter-recommendations { background: #f5e6c8; border: 0.0625rem solid #e8d4a8; }
.mkly-newsletter-recommendations__title { color: #a06800; }
.mkly-newsletter-recommendations a { color: #e6960a; }
.mkly-newsletter-sponsor { background: #e2ded2; border: 0.0625rem dashed #b8b0a0; }
.mkly-newsletter-sponsor__badge { color: #989080; }
.mkly-newsletter-sponsor__link { color: #2e7d32; }
.mkly-newsletter-sponsor__link:hover { color: #1b5e20; }
.mkly-newsletter-outro { color: #989080; }
.mkly-newsletter-outro__cta { background: #2e7d32; color: #ffffff; }
.mkly-newsletter-outro__cta:hover { background: #1b5e20; }
.mkly-newsletter-custom { background: #e6e2d6; border: 0.0625rem solid #ccc8b8; }
.mkly-newsletter-custom__title { color: #0c0e08; }`,
  },
];
