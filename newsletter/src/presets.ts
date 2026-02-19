import type { MklyPreset } from '@mklyml/core';

export const NEWSLETTER_PRESETS: MklyPreset[] = [
  {
    name: 'default',
    displayName: 'Newsletter/Default',
    description: 'Premium newsletter — card-based items, refined shadows, modern typography',
    rawCss: `/* newsletter kit — default preset */

.mkly-document {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  padding: 0 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1em;
  line-height: calc(1.55 * var(--_lhs, 1));
  margin: 0 0 calc(1.75rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.7em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; text-decoration-thickness: 0.0938rem; text-underline-offset: 0.125rem; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(1.5rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.625rem;
  overflow: hidden;
  box-shadow: 0 0.0625rem 0.25rem rgba(0,0,0,0.05);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.3125rem 0.75rem;
  border-radius: 0.375rem;
  margin: 1.375rem 1.5rem 0.625rem;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  margin: 0 1.5rem 0.5rem;
  line-height: 1.4;
  font-weight: 500;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.5rem 1.5rem 0.625rem; }
.mkly-newsletter-featured p {
  margin: 0.5rem 1.5rem 0.625rem;
  line-height: calc(1.5 * var(--_lhs, 1));
  font-size: 0.94em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.375rem 1.5rem 1.125rem;
  font-weight: 600;
  font-size: 0.88em;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: opacity 0.15s;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding-top: calc(1.5rem * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 1rem;
  padding-bottom: 0.75rem;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  border-bottom: none;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.625rem;
  margin-bottom: calc(1rem * var(--_gs));
  box-shadow: 0 0.0625rem 0.25rem rgba(0,0,0,0.04);
  position: relative;
  transition: box-shadow 0.2s ease;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item__img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
  padding: 1.125rem 1.25rem 0.875rem;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.64em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.625rem;
  border-radius: 0.3125rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  line-height: 1.3;
  margin-bottom: 0.375rem;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 0.5rem;
  line-height: calc(1.5 * var(--_lhs, 1));
  font-size: 0.94em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.08em;
  font-weight: 650;
  margin: 0 0 0.375rem;
  line-height: 1.3;
  letter-spacing: -0.015em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.84em;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: opacity 0.15s;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  border-radius: 0.625rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.03);
}
.mkly-newsletter-quickHits__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.75rem;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li {
  margin-bottom: 0.5rem;
  line-height: calc(1.5 * var(--_lhs, 1));
  font-size: 0.94em;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  border-radius: 0.625rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.03);
}
.mkly-newsletter-tools__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.875rem;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  border-left-width: 0.25rem;
  border-left-style: solid;
  border-radius: 0 0.625rem 0.625rem 0;
  line-height: calc(1.5 * var(--_lhs, 1));
  box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.03);
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 0.72em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.375rem; font-size: 0.94em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  border-radius: 0.625rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.03);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 1rem 0 1rem 1.25rem;
  border-left-width: 0.1875rem;
  border-left-style: solid;
  line-height: calc(1.55 * var(--_lhs, 1));
  font-size: 1.02em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.4em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 0.75rem;
  padding-top: 0.625rem;
  border-top-width: 0.0625rem;
  border-top-style: solid;
  font-size: 0.84em;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.02em;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  font-style: italic;
  border-radius: 0.625rem;
  border-left-width: 0.25rem;
  border-left-style: solid;
  line-height: calc(1.55 * var(--_lhs, 1));
  box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.03);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.65em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.9375rem 1.375rem;
  border-radius: 0.625rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.03);
}
.mkly-newsletter-poll__question {
  font-size: 1.08em;
  font-weight: 700;
  margin: 0 0 1rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 0.5rem 0;
  padding: 0.75rem 1.125rem;
  font-size: 0.94em;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.5rem;
  transition: box-shadow 0.2s ease, transform 0.15s ease;
  line-height: 1.4;
  text-align: center;
  box-shadow: 0 0.0625rem 0.125rem rgba(0,0,0,0.03);
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  border-radius: 0.625rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.03);
}
.mkly-newsletter-recommendations__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.75rem;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li {
  margin-bottom: 0.5rem;
  line-height: calc(1.5 * var(--_lhs, 1));
  font-size: 0.94em;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.625rem;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.03);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.58em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0.1875rem 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.625rem;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 0.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.0625rem 0.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-sponsor p {
  margin: 0 0 0.5rem;
  line-height: calc(1.5 * var(--_lhs, 1));
  font-size: 0.94em;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: opacity 0.15s;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(1.5rem * var(--_gs));
  text-align: center;
  padding: 1.25rem 1.375rem;
  border-radius: 0.625rem;
}
.mkly-newsletter-outro p {
  margin: 0 0 0.5rem;
  line-height: calc(1.52 * var(--_lhs, 1));
  font-size: 1em;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 1rem;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none !important;
  padding: 0.75rem 1.75rem;
  border-radius: 0.5rem;
  transition: opacity 0.15s, transform 0.15s;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0 0.0625rem 0.25rem rgba(0,0,0,0.08);
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  border-radius: 0.625rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.03);
}
.mkly-newsletter-custom__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.75rem;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 0.5rem;
  line-height: calc(1.5 * var(--_lhs, 1));
  font-size: 0.94em;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(1.5rem * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-divider { margin: calc(1.5rem * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(1.5rem * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(1.5rem * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 0.375rem; font-size: 1em; line-height: calc(1.5 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 0.875rem;
  padding: 0.75rem 1.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: none !important;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0 0.0625rem 0.25rem rgba(0,0,0,0.06);
  transition: opacity 0.15s, transform 0.1s;
}
.mkly-core-footer { margin-top: calc(1.5rem * var(--_gs)); text-align: center; font-size: 0.85em; line-height: calc(1.5 * var(--_lhs, 1)); }
.mkly-core-footer p { margin: 0 0 0.25rem; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
    css: `core/image.img
  borderRadius: 0.625rem

core/button.link
  padding: 0.75rem 1.75rem
  borderRadius: 0.5rem
  fontWeight: 600

core/code
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0.625rem
  padding: 1.125rem 1.25rem

core/quote
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 1.375rem
  borderLeftWidth: 0.1875rem

core/hero
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0.625rem
  overflow: hidden

core/hero.img
  borderRadius: 0.625rem

core/hero.content
  padding: 1rem 1.375rem

core/section.title
  paddingBottom: 0.75rem
  fontSize: 0.72em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em

core/card
  borderRadius: 0.625rem
  overflow: hidden
  marginBottom: calc(1rem * var(--mkly-gap-scale, 1))

core/card.body
  padding: 1.125rem

core/header
  paddingBottom: 0.8125rem

core/footer
  paddingTop: 0.8125rem
  marginTop: calc(1.5rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(1.5rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 1.375rem
  borderRadius: 0.625rem

core/cta.button
  padding: 0.75rem 1.75rem
  borderRadius: 0.5rem
  fontWeight: 600

newsletter/featured
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0.625rem
  overflow: hidden

newsletter/featured.source
  padding: 0.25rem 0.625rem
  borderRadius: 0.3125rem

newsletter/category.title
  paddingBottom: 0.75rem

newsletter/item
  marginBottom: calc(1rem * var(--mkly-gap-scale, 1))
  borderRadius: 0.625rem
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  width: 100%
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0
  padding: 0.75rem 1.25rem 0.8125rem

newsletter/item.meta
  fontSize: 0.72em

newsletter/quickHits
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.625rem

newsletter/tools
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.625rem

newsletter/tipOfTheDay
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0 0.625rem 0.625rem 0

newsletter/community
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.625rem

newsletter/community.quote
  padding: 1rem 0 1rem 1.25rem

newsletter/personalNote
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.625rem

newsletter/poll
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.625rem

newsletter/poll.option
  padding: 0.75rem 1.125rem
  borderRadius: 0.5rem

newsletter/recommendations
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.625rem

newsletter/sponsor
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.625rem

newsletter/sponsor.badge
  padding: 0.1875rem 0.5rem
  borderRadius: 0.25rem

newsletter/sponsor.img
  borderRadius: 0.5rem

newsletter/outro
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 1.375rem
  borderRadius: 0.625rem

newsletter/outro.cta
  padding: 0.75rem 1.75rem
  borderRadius: 0.5rem

newsletter/custom
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.625rem
newsletter/intro
  fontSize: 1em
  lineHeight: calc(1.55 * var(--mkly-line-height-scale, 1))
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(1.5rem * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(1.5rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
`,
  },

  {
    name: 'brutalist',
    displayName: 'Newsletter/Brutalist',
    description: 'Raw industrial — monospace font, weight 900, sharp edges, thick borders',
    rawCss: `/* newsletter kit — brutalist preset */

.mkly-document {
  font-family: 'JetBrains Mono', 'Space Mono', 'Courier New', 'Courier', monospace;
  letter-spacing: 0.01em;
  padding: 0 1rem;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-family: 'JetBrains Mono', 'Space Mono', 'Courier New', 'Courier', monospace;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  line-height: 1.15;
}

.mkly-newsletter-intro {
  font-size: 1.05em;
  line-height: calc(1.55 * var(--_lhs, 1));
  margin: 0 0 calc(2.25rem * var(--_gs));
  font-weight: 500;
}
.mkly-newsletter-intro p { margin: 0 0 0.75em; }
.mkly-newsletter-intro a { font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em; }

.mkly-newsletter-featured {
  margin: 0 0 calc(2.25rem * var(--_gs));
  border-width: 0.1875rem;
  border-style: solid;
  border-radius: 0;
  overflow: hidden;
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.7em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.375rem 0.875rem;
  margin: 1.25rem 1.375rem 0.5rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: solid;
  line-height: 1;
}
.mkly-newsletter-featured__author {
  font-size: 0.82em;
  margin: 0 1.375rem 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.625rem 1.375rem 0.875rem; }
.mkly-newsletter-featured p {
  margin: 0.625rem 1.375rem 0.875rem;
  line-height: calc(1.5 * var(--_lhs, 1));
  font-size: 0.92em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.5rem 1.375rem 1.375rem;
  font-weight: 900;
  font-size: 0.85em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
  border-bottom-width: 0.1875rem;
  border-bottom-style: solid;
  padding-bottom: 0.125rem;
}

.mkly-newsletter-category {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding-top: calc(2rem * var(--_gs));
  border-top-width: 0.25rem;
  border-top-style: solid;
}
.mkly-newsletter-category__title {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 900;
  margin: 0 0 1.25rem;
  padding-bottom: 0.625rem;
  border-bottom-width: 0.25rem;
  border-bottom-style: solid;
  line-height: 1.1;
}

.mkly-newsletter-item {
  padding: 0;
  border-bottom: none;
  border-width: 0.1875rem;
  border-style: solid;
  border-radius: 0;
  margin-bottom: calc(1rem * var(--_gs));
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: 100%;
  float: none;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 0;
  display: block;
}
.mkly-newsletter-item__body {
  padding: 0.875rem 1.375rem 0.9375rem;
  overflow: visible;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.625rem;
  margin-bottom: 0.5rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: solid;
  line-height: 1;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.68em;
  line-height: 1.3;
  margin-bottom: 0.375rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.mkly-newsletter-item p {
  margin: 0 0 0.5rem;
  line-height: calc(1.5 * var(--_lhs, 1));
  font-size: 0.92em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.1em;
  font-weight: 900;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  line-height: 1.15;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.375rem;
  font-size: 0.82em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  padding-bottom: 0.0625rem;
}

.mkly-newsletter-quickHits {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 0.9375rem 1.375rem;
  border-radius: 0;
  border-width: 0.1875rem;
  border-style: solid;
}
.mkly-newsletter-quickHits__title {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 900;
  margin: 0 0 0.875rem;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  padding-bottom: 0.5rem;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-quickHits li {
  margin-bottom: 0.625rem;
  line-height: calc(1.5 * var(--_lhs, 1));
  font-size: 0.92em;
  padding-left: 1rem;
  position: relative;
}
.mkly-newsletter-quickHits li::before {
  content: '>';
  position: absolute;
  left: 0;
  font-weight: 900;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em; font-size: 0.95em; }

.mkly-newsletter-tools {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 0.9375rem 1.375rem;
  border-radius: 0;
  border-width: 0.1875rem;
  border-style: solid;
}
.mkly-newsletter-tools__title {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 900;
  margin: 0 0 1rem;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  padding-bottom: 0.5rem;
}

.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 0.9375rem 1.375rem;
  border-left-width: 0.5rem;
  border-left-style: solid;
  border-radius: 0;
  line-height: calc(1.5 * var(--_lhs, 1));
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 0.625rem;
  font-weight: 900;
  font-size: 0.82em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; font-size: 0.92em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

.mkly-newsletter-community {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 0.9375rem 1.375rem;
  border-radius: 0;
  border-width: 0.1875rem;
  border-style: solid;
}
.mkly-newsletter-community__quote {
  font-style: normal;
  margin: 0;
  padding: 1.125rem 1.375rem;
  border-left-width: 0.375rem;
  border-left-style: solid;
  font-size: 1em;
  line-height: calc(1.5 * var(--_lhs, 1));
  font-weight: 500;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 0.75rem;
  font-size: 0.82em;
  font-style: normal;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.mkly-newsletter-personalNote {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 0.9375rem 1.375rem;
  font-style: normal;
  border-radius: 0;
  border-width: 0.1875rem;
  border-style: solid;
  line-height: calc(1.55 * var(--_lhs, 1));
}
.mkly-newsletter-personalNote p { margin: 0 0 0.75em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

.mkly-newsletter-poll {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 1.0625rem 1.5rem;
  border-radius: 0;
  border-width: 0.1875rem;
  border-style: solid;
}
.mkly-newsletter-poll__question {
  font-size: 1.15em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 1.125rem;
  line-height: 1.2;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 0.625rem 0;
  padding: 0.875rem 1.125rem;
  font-size: 0.92em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  text-decoration: none;
  cursor: pointer;
  border-width: 0.1875rem;
  border-style: solid;
  border-radius: 0;
  transition: transform 0.08s;
  text-align: center;
  line-height: 1.3;
}

.mkly-newsletter-recommendations {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 0.9375rem 1.375rem;
  border-radius: 0;
  border-width: 0.1875rem;
  border-style: solid;
}
.mkly-newsletter-recommendations__title {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 900;
  margin: 0 0 0.875rem;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  padding-bottom: 0.5rem;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-recommendations li {
  margin-bottom: 0.625rem;
  line-height: calc(1.5 * var(--_lhs, 1));
  font-size: 0.92em;
  padding-left: 1rem;
  position: relative;
}
.mkly-newsletter-recommendations li::before {
  content: '>';
  position: absolute;
  left: 0;
  font-weight: 900;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em; font-size: 0.95em; }

.mkly-newsletter-sponsor {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 0.9375rem 1.375rem;
  border-width: 0.1875rem;
  border-style: double;
  border-radius: 0;
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.6em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding: 0.25rem 0.75rem;
  border-radius: 0;
  margin-bottom: 0.75rem;
  border-width: 0.0625rem;
  border-style: solid;
  line-height: 1;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 0.875rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: solid;
}
.mkly-newsletter-sponsor p { margin: 0 0 0.5rem; line-height: calc(1.5 * var(--_lhs, 1)); font-size: 0.92em; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.625rem;
  font-weight: 900;
  font-size: 0.85em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
  border-bottom-width: 0.1875rem;
  border-bottom-style: solid;
  padding-bottom: 0.125rem;
}

.mkly-newsletter-outro {
  margin: 0 0 calc(2.25rem * var(--_gs));
  text-align: left;
  padding: 1.25rem 0;
  border-top-width: 0.25rem;
  border-top-style: solid;
}
.mkly-newsletter-outro p { margin: 0 0 0.5rem; line-height: calc(1.5 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 1.125rem;
  font-weight: 900;
  font-size: 0.85em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none !important;
  padding: 0.875rem 2rem;
  border-radius: 0;
  border-width: 0.1875rem;
  border-style: solid;
  transition: transform 0.08s;
  line-height: 1.2;
}

.mkly-newsletter-custom {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 0.9375rem 1.375rem;
  border-radius: 0;
  border-width: 0.1875rem;
  border-style: solid;
}
.mkly-newsletter-custom__title {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 900;
  margin: 0 0 0.875rem;
}
.mkly-newsletter-custom p { margin: 0 0 0.5rem; line-height: calc(1.5 * var(--_lhs, 1)); font-size: 0.92em; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(2.25rem * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-divider { margin: calc(2.25rem * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(2.25rem * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(2.25rem * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 0.5rem; font-size: 0.95em; line-height: calc(1.5 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.875rem 2rem;
  border-radius: 0;
  font-weight: 900;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-decoration: none !important;
  line-height: 1.4;
  box-shadow: none;
  border-width: 0.1875rem;
  border-style: solid;
}
.mkly-core-footer { margin-top: calc(2.25rem * var(--_gs)); text-align: center; font-size: 0.85em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
    css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 0.875rem 2rem
  borderRadius: 0
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.04em

core/divider
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  marginTop: calc(2.25rem * var(--mkly-gap-scale, 1))
  height: 0.1875rem

core/code
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  borderWidth: 0.1875rem
  borderRadius: 0
  padding: 1.125rem 1.375rem

core/quote
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  borderLeftWidth: 0.375rem
  padding: 1.125rem 1.5rem
  fontStyle: normal

core/hero
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  borderRadius: 0

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 1.125rem 1.5rem

core/section.title
  paddingBottom: 0.75rem
  borderBottomWidth: 0.25rem
  textTransform: uppercase
  letterSpacing: 0.04em

core/card
  borderWidth: 0.1875rem
  borderRadius: 0
  overflow: hidden
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))

core/card.body
  padding: 0.875rem 1.375rem

core/header
  paddingBottom: 0.875rem
  borderBottomWidth: 0.1875rem

core/footer
  paddingTop: 0.875rem
  borderTopWidth: 0.1875rem
  marginTop: calc(2.25rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(2.25rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 1.3125rem 1.5rem
  borderRadius: 0

core/cta.button
  padding: 0.875rem 2rem
  borderRadius: 0
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.04em
newsletter/intro
  fontSize: 1.05em
  lineHeight: calc(1.55 * var(--mkly-line-height-scale, 1))
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  fontWeight: 500

newsletter/featured
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  borderWidth: 0.1875rem
  borderStyle: solid
  borderRadius: 0
  overflow: hidden

newsletter/featured.img
  width: 100%

newsletter/featured.source
  fontSize: 0.7em
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.1em
  padding: 0.375rem 0.875rem
  marginTop: 1.25rem
  marginRight: 1.375rem
  marginBottom: 0.5rem
  marginLeft: 1.375rem
  borderRadius: 0
  borderWidth: 0.125rem
  borderStyle: solid
  lineHeight: 1

newsletter/featured.author
  fontSize: 0.82em
  marginRight: 1.375rem
  marginBottom: 0.5rem
  marginLeft: 1.375rem
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.03em

newsletter/featured.link
  marginTop: 0.5rem
  marginRight: 1.375rem
  marginBottom: 1.375rem
  marginLeft: 1.375rem
  fontWeight: 900
  fontSize: 0.85em
  textTransform: uppercase
  letterSpacing: 0.06em
  textDecoration: none
  paddingBottom: 0.125rem

newsletter/category
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/category.title
  fontSize: 0.75em
  textTransform: uppercase
  letterSpacing: 0.12em
  fontWeight: 900
  marginBottom: 1.25rem
  paddingBottom: 0.625rem
  lineHeight: 1.1

newsletter/item
  padding: 0
  borderBottom: none
  borderWidth: 0.1875rem
  borderStyle: solid
  borderRadius: 0
  marginBottom: calc(1rem * var(--mkly-gap-scale, 1))
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  padding: 0.8125rem 1.375rem 0.875rem

newsletter/item.meta
  fontSize: 0.68em
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.06em

newsletter/item.source
  fontSize: 0.68em
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.1em
  padding: 0.25rem 0.625rem
  marginBottom: 0.5rem
  borderRadius: 0
  borderWidth: 0.125rem
  borderStyle: solid
  lineHeight: 1

newsletter/quickHits
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0
  borderWidth: 0.1875rem
  borderStyle: solid

newsletter/quickHits.title
  fontSize: 0.75em
  textTransform: uppercase
  letterSpacing: 0.12em
  fontWeight: 900
  marginBottom: 0.875rem
  paddingBottom: 0.5rem

newsletter/tools
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0
  borderWidth: 0.1875rem
  borderStyle: solid

newsletter/tools.title
  fontSize: 0.75em
  textTransform: uppercase
  letterSpacing: 0.12em
  fontWeight: 900
  marginBottom: 1rem
  paddingBottom: 0.5rem

newsletter/tipOfTheDay
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0
  lineHeight: calc(1.5 * var(--mkly-line-height-scale, 1))

newsletter/tipOfTheDay.title
  marginBottom: 0.625rem
  fontWeight: 900
  fontSize: 0.82em
  textTransform: uppercase
  letterSpacing: 0.1em

newsletter/community
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0
  borderWidth: 0.1875rem
  borderStyle: solid

newsletter/community.quote
  padding: 1.125rem 1.375rem
  fontSize: 1em
  lineHeight: calc(1.5 * var(--mkly-line-height-scale, 1))
  fontWeight: 500

newsletter/community.author
  marginTop: 0.75rem
  fontSize: 0.82em
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.06em

newsletter/personalNote
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0
  borderWidth: 0.1875rem
  borderStyle: solid
  lineHeight: calc(1.55 * var(--mkly-line-height-scale, 1))

newsletter/poll
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.5rem
  borderRadius: 0
  borderWidth: 0.1875rem
  borderStyle: solid

newsletter/poll.question
  fontSize: 1.15em
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.04em
  marginBottom: 1.125rem
  lineHeight: 1.2

newsletter/poll.option
  marginTop: 0.625rem
  marginBottom: 0.625rem
  padding: 0.875rem 1.125rem
  fontSize: 0.92em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.03em
  textDecoration: none
  borderWidth: 0.1875rem
  borderStyle: solid
  borderRadius: 0
  textAlign: center
  lineHeight: 1.3

newsletter/recommendations
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0
  borderWidth: 0.1875rem
  borderStyle: solid

newsletter/recommendations.title
  fontSize: 0.75em
  textTransform: uppercase
  letterSpacing: 0.12em
  fontWeight: 900
  marginBottom: 0.875rem
  paddingBottom: 0.5rem

newsletter/sponsor
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderWidth: 0.1875rem
  borderStyle: double
  borderRadius: 0

newsletter/sponsor.badge
  fontSize: 0.6em
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.14em
  padding: 0.25rem 0.75rem
  borderRadius: 0
  marginBottom: 0.75rem
  borderWidth: 0.125rem
  borderStyle: solid
  lineHeight: 1

newsletter/sponsor.img
  maxWidth: 100%
  marginBottom: 0.875rem
  borderRadius: 0
  borderWidth: 0.125rem
  borderStyle: solid

newsletter/sponsor.link
  marginTop: 0.625rem
  fontWeight: 900
  fontSize: 0.85em
  textTransform: uppercase
  letterSpacing: 0.06em
  textDecoration: none
  paddingBottom: 0.125rem

newsletter/outro
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  textAlign: left
  padding: 1.125rem 0

newsletter/outro.cta
  marginTop: 1.125rem
  fontWeight: 900
  fontSize: 0.85em
  textTransform: uppercase
  letterSpacing: 0.06em
  textDecoration: none !important
  padding: 0.875rem 2rem
  borderRadius: 0
  borderWidth: 0.1875rem
  borderStyle: solid
  lineHeight: 1.2

newsletter/custom
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0
  borderWidth: 0.1875rem
  borderStyle: solid

newsletter/custom.title
  fontSize: 0.75em
  textTransform: uppercase
  letterSpacing: 0.12em
  fontWeight: 900
  marginBottom: 0.875rem

core/heading
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
`,
  },

  {
    name: 'neon',
    displayName: 'Newsletter/Neon',
    description: 'Futuristic glow — pill shapes, smooth transitions, glowing shadows',
    rawCss: `/* newsletter kit — neon preset */

.mkly-document {
  font-family: 'Space Grotesk', 'Inter', -apple-system, system-ui, sans-serif;
  padding: 0 1.5rem;
  letter-spacing: 0.01em;
  -webkit-font-smoothing: antialiased;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-family: 'Space Grotesk', 'Inter', -apple-system, system-ui, sans-serif;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1.08em;
  line-height: calc(1.75 * var(--_lhs, 1));
  margin: 0 0 calc(2.25rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.85em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; text-decoration-thickness: 0.125rem; text-underline-offset: 0.1875rem; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(1.75rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 2.5rem rgba(0,0,0,0.08), 0 0.25rem 1.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.63em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.3125rem 0.875rem;
  border-radius: 6.25rem;
  margin: 1.375rem 1.625rem 0.625rem;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  margin: 0 1.625rem 0.5rem;
  font-weight: 500;
  line-height: 1.4;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.5rem 1.625rem 0.875rem; }
.mkly-newsletter-featured p {
  margin: 0.5rem 1.625rem 0.875rem;
  line-height: calc(1.72 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.375rem 1.625rem 1.625rem;
  font-weight: 700;
  font-size: 0.82em;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: opacity 0.3s ease;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding-top: calc(2rem * var(--_gs));
  border-top-width: 0.0625rem;
  border-top-style: solid;
}
.mkly-newsletter-category__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 1.375rem;
  padding-bottom: 0.875rem;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  border-bottom: none;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.875rem;
  margin-bottom: calc(1rem * var(--_gs));
  box-shadow: 0 0 1.25rem rgba(0,0,0,0.04);
  position: relative;
  transition: box-shadow 0.3s ease;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item__img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
  padding: 0.875rem 1.375rem 0.9375rem;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.62em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.75rem;
  border-radius: 6.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.68em;
  line-height: 1.3;
  margin-bottom: 0.375rem;
  opacity: 0.55;
  letter-spacing: 0.04em;
}
.mkly-newsletter-item p { margin: 0 0 0.5rem; line-height: calc(1.68 * var(--_lhs, 1)); font-size: 0.94em; }
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.08em;
  font-weight: 700;
  margin: 0 0 0.375rem;
  line-height: 1.25;
  letter-spacing: -0.02em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.8em;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: opacity 0.3s ease;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0 1.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-quickHits__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 1rem;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li { margin-bottom: 0.75rem; line-height: calc(1.65 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0 1.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-tools__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 1.125rem;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-left-width: 0.1875rem;
  border-left-style: solid;
  border-radius: 0 1rem 1rem 0;
  line-height: calc(1.68 * var(--_lhs, 1));
  box-shadow: 0 0 1.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 0.625rem;
  font-weight: 700;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.125rem 1.75rem;
  border-radius: 1rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0 1.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 0.875rem 0 0.875rem 1.5rem;
  border-left-width: 0.1875rem;
  border-left-style: solid;
  font-size: 1.06em;
  line-height: calc(1.78 * var(--_lhs, 1));
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 0.875rem;
  padding-top: 0.75rem;
  border-top-width: 0.0625rem;
  border-top-style: solid;
  font-size: 0.84em;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.125rem 1.75rem;
  font-style: italic;
  border-radius: 1rem;
  border-left-width: 0.1875rem;
  border-left-style: solid;
  line-height: calc(1.78 * var(--_lhs, 1));
  box-shadow: 0 0 1.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.25rem 1.75rem;
  border-radius: 1rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0 1.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-poll__question {
  font-size: 1.14em;
  font-weight: 700;
  margin: 0 0 1.25rem;
  letter-spacing: -0.02em;
  line-height: 1.3;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 0.625rem 0;
  padding: 0.875rem 1.375rem;
  font-size: 0.95em;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 6.25rem;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  text-align: center;
  line-height: 1.4;
  box-shadow: 0 0 0.75rem rgba(0,0,0,0.03);
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0 1.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-recommendations__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 1rem;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li { margin-bottom: 0.75rem; line-height: calc(1.65 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 1rem;
  box-shadow: 0 0 1.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.58em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0.25rem 0.75rem;
  border-radius: 6.25rem;
  margin-bottom: 0.875rem;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 1rem rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor p { margin: 0 0 0.625rem; line-height: calc(1.68 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.625rem;
  font-weight: 700;
  font-size: 0.86em;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: opacity 0.3s ease;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(1.75rem * var(--_gs));
  text-align: center;
  padding: 1.5625rem 1.75rem;
  border-radius: 1rem;
}
.mkly-newsletter-outro p { margin: 0 0 0.625rem; line-height: calc(1.72 * var(--_lhs, 1)); font-size: 1.06em; }
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 1.375rem;
  font-weight: 700;
  font-size: 0.88em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-decoration: none !important;
  padding: 0.875rem 2.25rem;
  border-radius: 6.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  line-height: 1.4;
  box-shadow: 0 0 1.5rem rgba(0,0,0,0.06);
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0 1.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-custom__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 1rem;
  line-height: 1.2;
}
.mkly-newsletter-custom p { margin: 0 0 0.625rem; line-height: calc(1.68 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(1.75rem * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-divider { margin: calc(1.75rem * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(1.75rem * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(1.75rem * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 0.5rem; font-size: 1.05em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.875rem 2.25rem;
  border-radius: 6.25rem;
  font-weight: 700;
  font-size: 0.9375rem;
  text-decoration: none !important;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0 0 1.25rem rgba(0,0,0,0.15);
  transition: box-shadow 0.2s, transform 0.1s;
}
.mkly-core-footer { margin-top: calc(1.75rem * var(--_gs)); text-align: center; font-size: 0.85em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
    css: `core/image.img
  borderRadius: 1rem

core/button.link
  padding: 0.875rem 2.25rem
  borderRadius: 6.25rem
  fontWeight: 700

core/code
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderRadius: 1rem
  padding: 1.125rem 1.375rem

core/quote
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderLeftWidth: 0.1875rem
  padding: 0.8125rem 0 0.8125rem 1.5rem
  borderRadius: 0 1rem 1rem 0

core/hero
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderRadius: 1rem

core/hero.img
  borderRadius: 1rem

core/hero.content
  padding: 1.25rem 1.75rem

core/section.title
  paddingBottom: 0.875rem

core/card
  borderRadius: 1rem
  overflow: hidden
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))

core/card.body
  padding: 1rem 1.5rem

core/header
  paddingBottom: 0.875rem

core/footer
  paddingTop: 0.875rem
  marginTop: calc(1.75rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(1.75rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 1.75rem
  borderRadius: 1rem

core/cta.button
  padding: 0.875rem 2.25rem
  borderRadius: 6.25rem
  fontWeight: 700

newsletter/featured
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderRadius: 1rem

newsletter/featured.source
  borderRadius: 6.25rem

newsletter/category.title
  paddingBottom: 0.875rem

newsletter/item
  marginBottom: calc(1rem * var(--mkly-gap-scale, 1))
  borderRadius: 0.875rem
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  width: 100%
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0
  padding: 0.8125rem 1.375rem 0.875rem

newsletter/item.meta
  fontSize: 0.68em
  letterSpacing: 0.04em

newsletter/item.source
  borderRadius: 6.25rem

newsletter/quickHits
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1rem

newsletter/tools
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1rem

newsletter/tipOfTheDay
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 0 1rem 1rem 0

newsletter/community
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1.0625rem 1.75rem
  borderRadius: 1rem

newsletter/community.quote
  padding: 0.8125rem 0 0.8125rem 1.5rem

newsletter/personalNote
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1.0625rem 1.75rem
  borderRadius: 1rem

newsletter/poll
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 1.75rem
  borderRadius: 1rem

newsletter/poll.option
  padding: 0.875rem 1.375rem
  borderRadius: 6.25rem

newsletter/recommendations
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1rem

newsletter/sponsor
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1rem

newsletter/sponsor.badge
  borderRadius: 6.25rem

newsletter/sponsor.img
  borderRadius: 0.75rem

newsletter/outro
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 1.75rem
  borderRadius: 1rem

newsletter/outro.cta
  padding: 0.875rem 2.25rem
  borderRadius: 6.25rem

newsletter/custom
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1rem
newsletter/intro
  fontSize: 1.08em
  lineHeight: calc(1.75 * var(--mkly-line-height-scale, 1))
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(2rem * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(1.75rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
`,
  },

  {
    name: 'glass',
    displayName: 'Newsletter/Frosted Glass',
    description: 'Frosted glass — translucent layers, blur effects, floating depth',
    rawCss: `/* newsletter kit — glass preset */

.mkly-document {
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  padding: 0 1.5rem;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.22;
}

.mkly-newsletter-intro {
  font-size: 1.08em;
  line-height: calc(1.78 * var(--_lhs, 1));
  margin: 0 0 calc(2.25rem * var(--_gs));
  font-weight: 400;
}
.mkly-newsletter-intro p { margin: 0 0 0.85em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 500; }

.mkly-newsletter-featured {
  margin: 0 0 calc(1.75rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 1.25rem;
  overflow: hidden;
  backdrop-filter: blur(1.25rem);
  -webkit-backdrop-filter: blur(1.25rem);
  box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.06), inset 0 0.0625rem 0 rgba(255,255,255,0.12);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.64em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.3125rem 0.875rem;
  border-radius: 6.25rem;
  margin: 1.375rem 1.625rem 0.625rem;
  backdrop-filter: blur(0.75rem);
  -webkit-backdrop-filter: blur(0.75rem);
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  margin: 0 1.625rem 0.5rem;
  font-weight: 500;
  line-height: 1.4;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.5rem 1.625rem 0.875rem; }
.mkly-newsletter-featured p { margin: 0.5rem 1.625rem 0.875rem; line-height: calc(1.72 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.375rem 1.625rem 1.625rem;
  font-weight: 600;
  font-size: 0.88em;
  text-decoration: none;
  transition: opacity 0.25s ease;
}

.mkly-newsletter-category {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding-top: calc(2rem * var(--_gs));
  border-top-width: 0.0625rem;
  border-top-style: solid;
}
.mkly-newsletter-category__title {
  font-size: 0.7em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0 0 1.375rem;
  padding-bottom: 0.875rem;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
  line-height: 1.2;
}

.mkly-newsletter-item {
  border-bottom: none;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 1rem;
  margin-bottom: calc(1rem * var(--_gs));
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.08);
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item__img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
  padding: 0.875rem 1.375rem 0.9375rem;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.63em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.75rem;
  border-radius: 6.25rem;
  margin-bottom: 0.5rem;
  backdrop-filter: blur(0.625rem);
  -webkit-backdrop-filter: blur(0.625rem);
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.68em;
  line-height: 1.3;
  margin-bottom: 0.375rem;
  opacity: 0.5;
}
.mkly-newsletter-item p { margin: 0 0 0.5rem; line-height: calc(1.68 * var(--_lhs, 1)); font-size: 0.94em; }
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.06em;
  font-weight: 600;
  margin: 0 0 0.375rem;
  line-height: 1.28;
  letter-spacing: -0.015em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.84em;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.25s ease;
}

.mkly-newsletter-quickHits {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1.25rem;
  backdrop-filter: blur(1.25rem);
  -webkit-backdrop-filter: blur(1.25rem);
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.1);
}
.mkly-newsletter-quickHits__title { font-size: 0.7em; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 1rem; line-height: 1.2; }
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li { margin-bottom: 0.75rem; line-height: calc(1.65 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

.mkly-newsletter-tools {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1.25rem;
  backdrop-filter: blur(1.25rem);
  -webkit-backdrop-filter: blur(1.25rem);
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.1);
}
.mkly-newsletter-tools__title { font-size: 0.7em; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 1.125rem; line-height: 1.2; }

.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-left-width: 0.1875rem;
  border-left-style: solid;
  border-radius: 0 1.25rem 1.25rem 0;
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.04);
  line-height: calc(1.68 * var(--_lhs, 1));
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 0.625rem;
  font-weight: 600;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

.mkly-newsletter-community {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.125rem 1.75rem;
  border-radius: 1.25rem;
  backdrop-filter: blur(1.25rem);
  -webkit-backdrop-filter: blur(1.25rem);
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.1);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 0.875rem 0 0.875rem 1.5rem;
  border-left-width: 0.125rem;
  border-left-style: solid;
  font-size: 1.06em;
  line-height: calc(1.78 * var(--_lhs, 1));
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 0.875rem;
  padding-top: 0.75rem;
  border-top-width: 0.0625rem;
  border-top-style: solid;
  font-size: 0.84em;
  font-style: normal;
  font-weight: 600;
}

.mkly-newsletter-personalNote {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.125rem 1.75rem;
  font-style: italic;
  border-radius: 1.25rem;
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  border-left-width: 0.1875rem;
  border-left-style: solid;
  line-height: calc(1.78 * var(--_lhs, 1));
  box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

.mkly-newsletter-poll {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.25rem 1.75rem;
  border-radius: 1.25rem;
  backdrop-filter: blur(1.25rem);
  -webkit-backdrop-filter: blur(1.25rem);
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.1);
}
.mkly-newsletter-poll__question { font-size: 1.12em; font-weight: 600; margin: 0 0 1.25rem; letter-spacing: -0.01em; line-height: 1.35; }
.mkly-newsletter-poll__option {
  display: block;
  margin: 0.625rem 0;
  padding: 0.875rem 1.375rem;
  font-size: 0.95em;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.875rem;
  backdrop-filter: blur(0.75rem);
  -webkit-backdrop-filter: blur(0.75rem);
  transition: box-shadow 0.25s ease, transform 0.2s ease;
  text-align: center;
  line-height: 1.4;
  box-shadow: inset 0 0.0625rem 0 rgba(255,255,255,0.06);
}

.mkly-newsletter-recommendations {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1.25rem;
  backdrop-filter: blur(1.25rem);
  -webkit-backdrop-filter: blur(1.25rem);
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.1);
}
.mkly-newsletter-recommendations__title { font-size: 0.7em; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 1rem; line-height: 1.2; }
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li { margin-bottom: 0.75rem; line-height: calc(1.65 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

.mkly-newsletter-sponsor {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 1.25rem;
  backdrop-filter: blur(1.25rem);
  -webkit-backdrop-filter: blur(1.25rem);
  box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.1);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.58em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.875rem;
  border-radius: 6.25rem;
  margin-bottom: 0.875rem;
  backdrop-filter: blur(0.625rem);
  -webkit-backdrop-filter: blur(0.625rem);
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 1rem;
  border-radius: 0.875rem;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor p { margin: 0 0 0.625rem; line-height: calc(1.68 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.625rem;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none;
  transition: opacity 0.25s ease;
}

.mkly-newsletter-outro {
  margin: 0 0 calc(1.75rem * var(--_gs));
  text-align: center;
  padding: 1.5625rem 1.75rem;
  border-radius: 1.25rem;
}
.mkly-newsletter-outro p { margin: 0 0 0.625rem; line-height: calc(1.72 * var(--_lhs, 1)); font-size: 1.06em; }
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 1.375rem;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none !important;
  padding: 0.875rem 2.125rem;
  border-radius: 0.875rem;
  backdrop-filter: blur(0.75rem);
  -webkit-backdrop-filter: blur(0.75rem);
  border-width: 0.0625rem;
  border-style: solid;
  transition: box-shadow 0.25s ease;
  line-height: 1.4;
  box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.06), inset 0 0.0625rem 0 rgba(255,255,255,0.1);
}

.mkly-newsletter-custom {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1.25rem;
  backdrop-filter: blur(1.25rem);
  -webkit-backdrop-filter: blur(1.25rem);
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.5rem 2rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.1);
}
.mkly-newsletter-custom__title { font-size: 0.7em; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 1rem; line-height: 1.2; }
.mkly-newsletter-custom p { margin: 0 0 0.625rem; line-height: calc(1.68 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(1.75rem * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-divider { margin: calc(1.75rem * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(1.75rem * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(1.75rem * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 0.5rem; font-size: 1.05em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.875rem 2.125rem;
  border-radius: 0.875rem;
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: none !important;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.08);
  transition: opacity 0.15s, transform 0.1s;
}
.mkly-core-footer { margin-top: calc(1.75rem * var(--_gs)); text-align: center; font-size: 0.85em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
    css: `core/image.img
  borderRadius: 1.25rem

core/button.link
  padding: 0.875rem 2.125rem
  borderRadius: 0.875rem

core/code
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderRadius: 1.25rem
  padding: 1.125rem 1.5rem
  backdrop-filter: blur(1.25rem)

core/quote
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderLeftWidth: 0.125rem
  padding: 0.875rem 1.5rem
  borderRadius: 0 1.25rem 1.25rem 0

core/hero
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderRadius: 1.25rem

core/hero.img
  borderRadius: 1.25rem

core/hero.content
  padding: 1.3125rem 1.75rem

core/section.title
  paddingBottom: 0.875rem

core/card
  borderRadius: 1.25rem
  overflow: hidden
  backdrop-filter: blur(1.25rem)
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))

core/card.body
  padding: 1rem 1.5rem

core/header
  paddingBottom: 0.875rem

core/footer
  paddingTop: 0.875rem
  marginTop: calc(1.75rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(1.75rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 1.75rem
  borderRadius: 1.25rem
  backdrop-filter: blur(1.25rem)

core/cta.button
  padding: 0.875rem 2.125rem
  borderRadius: 0.875rem
newsletter/intro
  fontSize: 1.08em
  lineHeight: calc(1.78 * var(--mkly-line-height-scale, 1))
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  fontWeight: 400

newsletter/featured
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderWidth: 0.0625rem
  borderStyle: solid
  borderRadius: 1.25rem
  overflow: hidden
  boxShadow: 0 0.5rem 2rem rgba(0,0,0,0.06), inset 0 0.0625rem 0 rgba(255,255,255,0.12)

newsletter/featured.img
  width: 100%

newsletter/featured.source
  fontSize: 0.64em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.08em
  padding: 0.3125rem 0.875rem
  borderRadius: 6.25rem
  marginTop: 1.375rem
  marginRight: 1.625rem
  marginBottom: 0.625rem
  marginLeft: 1.625rem
  lineHeight: 1.2

newsletter/featured.author
  fontSize: 0.84em
  marginRight: 1.625rem
  marginBottom: 0.5rem
  marginLeft: 1.625rem
  fontWeight: 500
  lineHeight: 1.4

newsletter/featured.link
  marginTop: 0.375rem
  marginRight: 1.625rem
  marginBottom: 1.625rem
  marginLeft: 1.625rem
  fontWeight: 600
  fontSize: 0.88em
  textDecoration: none

newsletter/category
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/category.title
  fontSize: 0.7em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.12em
  marginBottom: 1.375rem
  paddingBottom: 0.875rem
  lineHeight: 1.2

newsletter/item
  borderBottom: none
  borderWidth: 0.0625rem
  borderStyle: solid
  borderRadius: 1rem
  marginBottom: calc(1rem * var(--mkly-gap-scale, 1))
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.08)
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  width: 100%
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0
  padding: 0.8125rem 1.375rem 0.875rem

newsletter/item.meta
  fontSize: 0.68em

newsletter/item.source
  fontSize: 0.63em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.08em
  padding: 0.25rem 0.75rem
  borderRadius: 6.25rem
  marginBottom: 0.5rem
  lineHeight: 1.2

newsletter/quickHits
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1.25rem
  borderWidth: 0.0625rem
  borderStyle: solid
  boxShadow: 0 0.5rem 2rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.1)

newsletter/quickHits.title
  fontSize: 0.7em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.12em
  marginBottom: 1rem
  lineHeight: 1.2

newsletter/tools
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1.25rem
  borderWidth: 0.0625rem
  borderStyle: solid
  boxShadow: 0 0.5rem 2rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.1)

newsletter/tools.title
  fontSize: 0.7em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.12em
  marginBottom: 1.125rem
  lineHeight: 1.2

newsletter/tipOfTheDay
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 0 1.25rem 1.25rem 0
  boxShadow: 0 0.25rem 1.25rem rgba(0,0,0,0.04)
  lineHeight: calc(1.68 * var(--mkly-line-height-scale, 1))

newsletter/tipOfTheDay.title
  marginBottom: 0.625rem
  fontWeight: 600
  fontSize: 0.7em
  textTransform: uppercase
  letterSpacing: 0.1em
  lineHeight: 1.2

newsletter/community
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1.0625rem 1.75rem
  borderRadius: 1.25rem
  borderWidth: 0.0625rem
  borderStyle: solid
  boxShadow: 0 0.5rem 2rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.1)

newsletter/community.quote
  padding: 0.8125rem 0 0.8125rem 1.5rem
  fontSize: 1.06em
  lineHeight: calc(1.78 * var(--mkly-line-height-scale, 1))

newsletter/community.author
  marginTop: 0.875rem
  paddingTop: 0.75rem
  fontSize: 0.84em
  fontWeight: 600

newsletter/personalNote
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1.0625rem 1.75rem
  borderRadius: 1.25rem
  lineHeight: calc(1.78 * var(--mkly-line-height-scale, 1))
  boxShadow: 0 0.25rem 1.25rem rgba(0,0,0,0.04)

newsletter/poll
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 1.75rem
  borderRadius: 1.25rem
  borderWidth: 0.0625rem
  borderStyle: solid
  boxShadow: 0 0.5rem 2rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.1)

newsletter/poll.question
  fontSize: 1.12em
  fontWeight: 600
  marginBottom: 1.25rem
  letterSpacing: -0.01em
  lineHeight: 1.35

newsletter/poll.option
  marginTop: 0.625rem
  marginBottom: 0.625rem
  padding: 0.875rem 1.375rem
  fontSize: 0.95em
  fontWeight: 500
  textDecoration: none
  borderWidth: 0.0625rem
  borderStyle: solid
  borderRadius: 0.875rem
  textAlign: center
  lineHeight: 1.4
  boxShadow: inset 0 0.0625rem 0 rgba(255,255,255,0.06)

newsletter/recommendations
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1.25rem
  borderWidth: 0.0625rem
  borderStyle: solid
  boxShadow: 0 0.5rem 2rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.1)

newsletter/recommendations.title
  fontSize: 0.7em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.12em
  marginBottom: 1rem
  lineHeight: 1.2

newsletter/sponsor
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderWidth: 0.0625rem
  borderStyle: solid
  borderRadius: 1.25rem
  boxShadow: 0 0.5rem 2rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.1)

newsletter/sponsor.badge
  fontSize: 0.58em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.1em
  padding: 0.25rem 0.875rem
  borderRadius: 6.25rem
  marginBottom: 0.875rem
  lineHeight: 1.2

newsletter/sponsor.img
  maxWidth: 100%
  marginBottom: 1rem
  borderRadius: 0.875rem
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.06)

newsletter/sponsor.link
  marginTop: 0.625rem
  fontWeight: 600
  fontSize: 0.9em
  textDecoration: none

newsletter/outro
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  textAlign: center
  padding: 1.4375rem 1.75rem
  borderRadius: 1.25rem

newsletter/outro.cta
  marginTop: 1.375rem
  fontWeight: 600
  fontSize: 0.9em
  textDecoration: none !important
  padding: 0.875rem 2.125rem
  borderRadius: 0.875rem
  borderWidth: 0.0625rem
  borderStyle: solid
  lineHeight: 1.4
  boxShadow: 0 0.25rem 1.25rem rgba(0,0,0,0.06), inset 0 0.0625rem 0 rgba(255,255,255,0.1)

newsletter/custom
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1.25rem
  borderWidth: 0.0625rem
  borderStyle: solid
  boxShadow: 0 0.5rem 2rem rgba(0,0,0,0.04), inset 0 0.0625rem 0 rgba(255,255,255,0.1)

newsletter/custom.title
  fontSize: 0.7em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.12em
  marginBottom: 1rem
  lineHeight: 1.2

core/heading
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(1.75rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
`,
  },

  {
    name: 'elevated',
    displayName: 'Newsletter/Elevated',
    description: 'Floating cards — deep shadows, no borders, lifted surfaces',
    rawCss: `/* newsletter kit — elevated preset */

.mkly-document {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  font-weight: 400;
  padding: 0 1.75rem;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 700;
  letter-spacing: -0.02em;
}

.mkly-newsletter-intro {
  font-size: 1.06em;
  line-height: calc(1.75 * var(--_lhs, 1));
  margin: 0 0 calc(2rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.85em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; }

.mkly-newsletter-featured {
  margin: 0 0 calc(2.25rem * var(--_gs));
  border: none;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0.5rem 2.25rem rgba(0,0,0,0.12), 0 0.125rem 0.5rem rgba(0,0,0,0.06);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.3125rem 0.75rem;
  border-radius: 0.375rem;
  margin: 1.375rem 1.5rem 0.5rem;
  line-height: 1.2;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.06);
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  margin: 0 1.5rem 0.5rem;
  font-weight: 500;
  line-height: 1.4;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.5rem 1.5rem 0.875rem; }
.mkly-newsletter-featured p { margin: 0.5rem 1.5rem 0.875rem; line-height: calc(1.7 * var(--_lhs, 1)); font-size: 0.96em; }
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.375rem 1.5rem 1.5rem;
  font-weight: 600;
  font-size: 0.88em;
  text-decoration: none;
  transition: opacity 0.2s;
}

.mkly-newsletter-category {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding-top: calc(1.75rem * var(--_gs));
  border-top: none;
}
.mkly-newsletter-category__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 1.25rem;
  line-height: 1.25;
}

.mkly-newsletter-item {
  border-bottom: none;
  border-radius: 0.75rem;
  margin-bottom: calc(1.125rem * var(--_gs));
  box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04);
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item__img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
  padding: 0.875rem 1.25rem 0.9375rem;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.1875rem 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.375rem;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  line-height: 1.3;
  margin-bottom: 0.375rem;
  opacity: 0.45;
}
.mkly-newsletter-item p { margin: 0 0 0.5rem; line-height: calc(1.65 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.06em;
  font-weight: 600;
  margin: 0 0 0.375rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.375rem;
  font-size: 0.85em;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
}

.mkly-newsletter-quickHits {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-quickHits__title { font-size: 0.72em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.875rem; }
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li { margin-bottom: 0.625rem; line-height: calc(1.6 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

.mkly-newsletter-tools {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-tools__title { font-size: 0.72em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 1rem; }

.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-left-width: 0.25rem;
  border-left-style: solid;
  border-radius: 0 1rem 1rem 0;
  box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.06);
}
.mkly-newsletter-tipOfTheDay__title { display: block; margin-bottom: 0.625rem; font-weight: 700; font-size: 1em; }
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

.mkly-newsletter-community {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 1.125rem 1.625rem;
  border-left-width: 0.1875rem;
  border-left-style: solid;
  font-size: 1.04em;
  line-height: calc(1.75 * var(--_lhs, 1));
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author { display: block; margin-top: 0.75rem; font-size: 0.86em; font-style: normal; font-weight: 600; }

.mkly-newsletter-personalNote {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  font-style: italic;
  border-radius: 1rem;
  border: none;
  line-height: calc(1.75 * var(--_lhs, 1));
  box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

.mkly-newsletter-poll {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 1.25rem 1.75rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-poll__question { font-size: 1.12em; font-weight: 700; margin: 0 0 1.125rem; letter-spacing: -0.01em; line-height: 1.35; }
.mkly-newsletter-poll__option {
  display: block;
  margin: 0.625rem 0;
  padding: 0.875rem 1.25rem;
  font-size: 0.95em;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 0.625rem;
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
  line-height: 1.4;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.06);
}

.mkly-newsletter-recommendations {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-recommendations__title { font-size: 0.72em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.875rem; }
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li { margin-bottom: 0.625rem; line-height: calc(1.6 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

.mkly-newsletter-sponsor {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.6em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.625rem;
  border-radius: 0.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.2;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 0.875rem;
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.75rem rgba(0,0,0,0.08);
}
.mkly-newsletter-sponsor p { margin: 0 0 0.625rem; line-height: calc(1.65 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.625rem;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none;
  transition: opacity 0.2s;
}

.mkly-newsletter-outro {
  margin: 0 0 calc(2.25rem * var(--_gs));
  text-align: center;
  padding: 1.375rem 2rem;
}
.mkly-newsletter-outro p { margin: 0 0 0.625rem; line-height: calc(1.7 * var(--_lhs, 1)); font-size: 1.04em; }
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 1.25rem;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none !important;
  padding: 0.875rem 2rem;
  border: none;
  border-radius: 0.75rem;
  transition: transform 0.2s, box-shadow 0.2s;
  line-height: 1.4;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.1);
}

.mkly-newsletter-custom {
  margin: 0 0 calc(2.25rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-custom__title { font-size: 0.72em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 0.875rem; }
.mkly-newsletter-custom p { margin: 0 0 0.625rem; line-height: calc(1.65 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(2.25rem * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-divider { margin: calc(2.25rem * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(2.25rem * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(2.25rem * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(2.25rem * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 0.5rem; font-size: 1.05em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.875rem 2rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: none !important;
  border: none;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.12);
  transition: box-shadow 0.2s, transform 0.1s;
}
.mkly-core-footer { margin-top: calc(2.25rem * var(--_gs)); text-align: center; font-size: 0.85em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
    css: `core/image.img
  borderRadius: 0.875rem
  border: none

core/button.link
  padding: 0.875rem 2rem
  borderRadius: 0.75rem
  border: none

core/code
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  border: none
  borderRadius: 1rem
  padding: 0.875rem 1.5rem

core/quote
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  borderLeftWidth: 0.1875rem
  padding: 1.125rem 1.625rem

core/hero
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  borderRadius: 1rem
  border: none

core/hero.img
  borderRadius: 1rem

core/hero.content
  padding: 1.25rem 1.75rem

core/section.title
  paddingBottom: 0.75rem

core/card
  border: none
  borderRadius: 1rem
  overflow: hidden
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))

core/card.body
  padding: 1rem 1.5rem

core/header
  paddingBottom: 0.875rem
  borderBottom: none

core/footer
  paddingTop: 0.875rem
  borderTop: none
  marginTop: calc(2.25rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(2.25rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 1.75rem
  borderRadius: 1rem
  border: none

core/cta.button
  padding: 0.875rem 2rem
  borderRadius: 0.75rem
  border: none
newsletter/intro
  fontSize: 1.06em
  lineHeight: calc(1.75 * var(--mkly-line-height-scale, 1))
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/featured
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  borderRadius: 1rem
  overflow: hidden
  boxShadow: 0 0.5rem 2.25rem rgba(0,0,0,0.12), 0 0.125rem 0.5rem rgba(0,0,0,0.06)

newsletter/featured.img
  width: 100%

newsletter/featured.source
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.06em
  padding: 0.3125rem 0.75rem
  borderRadius: 0.375rem
  marginTop: 1.375rem
  marginRight: 1.5rem
  marginBottom: 0.5rem
  marginLeft: 1.5rem
  lineHeight: 1.2
  boxShadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.06)

newsletter/featured.author
  fontSize: 0.84em
  marginRight: 1.5rem
  marginBottom: 0.5rem
  marginLeft: 1.5rem
  fontWeight: 500
  lineHeight: 1.4

newsletter/featured.link
  marginTop: 0.375rem
  marginRight: 1.5rem
  marginBottom: 1.5rem
  marginLeft: 1.5rem
  fontWeight: 600
  fontSize: 0.88em
  textDecoration: none

newsletter/category
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderTop: none

newsletter/category.title
  fontSize: 0.72em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  marginBottom: 1.25rem
  lineHeight: 1.25

newsletter/item
  borderBottom: none
  borderRadius: 0.75rem
  marginBottom: calc(1.125rem * var(--mkly-gap-scale, 1))
  boxShadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04)
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  width: 100%
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0
  padding: 0.8125rem 1.25rem 0.875rem

newsletter/item.meta
  fontSize: 0.72em

newsletter/item.source
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.06em
  padding: 0.1875rem 0.5rem
  borderRadius: 0.25rem
  marginBottom: 0.375rem
  lineHeight: 1.2

newsletter/quickHits
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1rem
  boxShadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04)

newsletter/quickHits.title
  fontSize: 0.72em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  marginBottom: 0.875rem

newsletter/tools
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1rem
  boxShadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04)

newsletter/tools.title
  fontSize: 0.72em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  marginBottom: 1rem

newsletter/tipOfTheDay
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 0 1rem 1rem 0
  boxShadow: 0 0.25rem 1.25rem rgba(0,0,0,0.06)

newsletter/tipOfTheDay.title
  marginBottom: 0.625rem
  fontWeight: 700
  fontSize: 1em

newsletter/community
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1rem
  boxShadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04)

newsletter/community.quote
  padding: 1.125rem 1.625rem
  fontSize: 1.04em
  lineHeight: calc(1.75 * var(--mkly-line-height-scale, 1))

newsletter/community.author
  marginTop: 0.75rem
  fontSize: 0.86em
  fontWeight: 600

newsletter/personalNote
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1rem
  lineHeight: calc(1.75 * var(--mkly-line-height-scale, 1))
  boxShadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04)

newsletter/poll
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 1.75rem
  borderRadius: 1rem
  boxShadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04)

newsletter/poll.question
  fontSize: 1.12em
  fontWeight: 700
  marginBottom: 1.125rem
  letterSpacing: -0.01em
  lineHeight: 1.35

newsletter/poll.option
  marginTop: 0.625rem
  marginBottom: 0.625rem
  padding: 0.875rem 1.25rem
  fontSize: 0.95em
  fontWeight: 500
  textDecoration: none
  borderRadius: 0.625rem
  textAlign: center
  lineHeight: 1.4
  boxShadow: 0 0.125rem 0.5rem rgba(0,0,0,0.06)

newsletter/recommendations
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1rem
  boxShadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04)

newsletter/recommendations.title
  fontSize: 0.72em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  marginBottom: 0.875rem

newsletter/sponsor
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1rem
  boxShadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04)

newsletter/sponsor.badge
  fontSize: 0.6em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  padding: 0.25rem 0.625rem
  borderRadius: 0.25rem
  marginBottom: 0.75rem
  lineHeight: 1.2
  boxShadow: 0 0.0625rem 0.1875rem rgba(0,0,0,0.06)

newsletter/sponsor.img
  maxWidth: 100%
  marginBottom: 0.875rem
  borderRadius: 0.75rem
  boxShadow: 0 0.125rem 0.75rem rgba(0,0,0,0.08)

newsletter/sponsor.link
  marginTop: 0.625rem
  fontWeight: 600
  fontSize: 0.9em
  textDecoration: none

newsletter/outro
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  textAlign: center
  padding: 1.3125rem 2rem

newsletter/outro.cta
  marginTop: 1.25rem
  fontWeight: 600
  fontSize: 0.9em
  textDecoration: none !important
  padding: 0.875rem 2rem
  borderRadius: 0.75rem
  lineHeight: 1.4
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.1)

newsletter/custom
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 1rem
  boxShadow: 0 0.25rem 1.25rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04)

newsletter/custom.title
  fontSize: 0.72em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  marginBottom: 0.875rem

core/heading
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(2.25rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(2.25rem * var(--mkly-gap-scale, 1))
`,
  },

  {
    name: 'editorial',
    displayName: 'Newsletter/Editorial',
    description: 'Print-inspired — serif font, rule lines, no backgrounds, generous spacing',
    rawCss: `/* newsletter kit — editorial preset */

.mkly-document {
  font-family: Georgia, 'Times New Roman', 'Noto Serif', serif;
  font-size: 1.0625rem;
  line-height: calc(1.85 * var(--_lhs, 1));
  letter-spacing: 0.005em;
  padding: 0 2rem;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-family: Georgia, 'Times New Roman', 'Noto Serif', serif;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
}
.mkly-document a {
  text-decoration: underline;
  font-weight: inherit;
}

.mkly-newsletter-intro {
  font-size: 1.12em;
  line-height: calc(1.85 * var(--_lhs, 1));
  margin: 0 0 calc(2.5rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 1em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: inherit; }

.mkly-newsletter-featured {
  margin: 0 0 calc(2.5rem * var(--_gs));
  border: none;
  border-radius: 0;
  overflow: visible;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  padding-bottom: 2rem;
}
.mkly-newsletter-featured__img { width: 100%; display: block; margin-bottom: 1rem; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0;
  margin: 1rem 0 0.5rem;
  border-radius: 0;
  background: none;
  line-height: 1.3;
}
.mkly-newsletter-featured__author {
  font-size: 0.88em;
  margin: 0 0 0.5rem;
  font-style: italic;
  font-weight: 400;
  line-height: 1.4;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.625rem 0 0.875rem; }
.mkly-newsletter-featured p {
  margin: 0.625rem 0 0.875rem;
  line-height: calc(1.85 * var(--_lhs, 1));
  font-size: 1.02em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.5rem 0 0;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: underline;
  transition: opacity 0.15s;
}

.mkly-newsletter-category {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding-top: calc(2rem * var(--_gs));
  border-top-width: 0.1875rem;
  border-top-style: double;
}
.mkly-newsletter-category__title {
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin: 0 0 1.375rem;
  padding-bottom: 0.75rem;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
  line-height: 1.2;
}

.mkly-newsletter-item {
  padding: 0;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: 100%;
  float: none;
  aspect-ratio: 2/1;
  object-fit: cover;
  border-radius: 0;
  display: block;
}
.mkly-newsletter-item__body {
  padding: 1.125rem 1.5rem 1.0625rem;
  overflow: visible;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.66em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0;
  margin-bottom: 0.375rem;
  background: none;
  border-radius: 0;
  line-height: 1.3;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  line-height: 1.3;
  margin-bottom: 0.375rem;
  font-style: italic;
  opacity: 0.6;
}
.mkly-newsletter-item p {
  margin: 0 0 0.625rem;
  line-height: calc(1.8 * var(--_lhs, 1));
  font-size: 0.98em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.14em;
  font-weight: 700;
  letter-spacing: -0.015em;
  margin: 0 0 0.375rem;
  line-height: 1.25;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.375rem;
  font-size: 0.88em;
  font-weight: 600;
  text-decoration: underline;
  transition: opacity 0.15s;
}

.mkly-newsletter-quickHits {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 1.0625rem 0.5rem;
  background: none;
  border-radius: 0;
  border-top-width: 0.0625rem;
  border-top-style: solid;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
}
.mkly-newsletter-quickHits__title {
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin: 0 0 0.875rem;
  font-style: normal;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li { margin-bottom: 0.625rem; line-height: calc(1.7 * var(--_lhs, 1)); font-size: 0.96em; }
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; text-decoration: underline; }

.mkly-newsletter-tools {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 1.0625rem 0.5rem;
  background: none;
  border-radius: 0;
  border-top-width: 0.0625rem;
  border-top-style: solid;
}
.mkly-newsletter-tools__title { font-size: 0.68em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.16em; margin: 0 0 1rem; font-style: normal; }

.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 0.875rem 0 0.875rem 1.5rem;
  background: none;
  border-left-width: 0.125rem;
  border-left-style: solid;
  border-radius: 0;
  line-height: calc(1.8 * var(--_lhs, 1));
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 0.82em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style: normal;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.625rem; font-size: 0.98em; line-height: calc(1.8 * var(--_lhs, 1)); }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

.mkly-newsletter-community {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 1.0625rem 0.5rem;
  background: none;
  border-radius: 0;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 0 0 0 1.5rem;
  border-left-width: 0.125rem;
  border-left-style: solid;
  font-size: 1.08em;
  line-height: calc(1.85 * var(--_lhs, 1));
}
.mkly-newsletter-community__quote p { margin: 0 0 0.6em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 0.875rem;
  padding-left: 1.5rem;
  font-size: 0.85em;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.mkly-newsletter-personalNote {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 1.25rem 0.5rem;
  font-style: italic;
  background: none;
  border-radius: 0;
  border-top-width: 0.0625rem;
  border-top-style: solid;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
  line-height: calc(1.85 * var(--_lhs, 1));
  font-size: 1.05em;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

.mkly-newsletter-poll {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 1.25rem 0.5rem;
  background: none;
  border-radius: 0;
  border-top-width: 0.0625rem;
  border-top-style: solid;
}
.mkly-newsletter-poll__question { font-size: 1.15em; font-weight: 700; margin: 0 0 1.125rem; line-height: 1.3; }
.mkly-newsletter-poll__option {
  display: block;
  margin: 0.5rem 0;
  padding: 0.875rem 1.25rem;
  font-size: 0.98em;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
  border-radius: 0;
  transition: opacity 0.15s;
  text-align: left;
  line-height: calc(1.5 * var(--_lhs, 1));
}

.mkly-newsletter-recommendations {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 1.0625rem 0.5rem;
  background: none;
  border-radius: 0;
  border-top-width: 0.0625rem;
  border-top-style: solid;
}
.mkly-newsletter-recommendations__title { font-size: 0.68em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.16em; margin: 0 0 0.875rem; font-style: normal; }
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li { margin-bottom: 0.625rem; line-height: calc(1.7 * var(--_lhs, 1)); font-size: 0.96em; }
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; text-decoration: underline; }

.mkly-newsletter-sponsor {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 1.0625rem 0.5rem;
  border: none;
  border-top-width: 0.0625rem;
  border-top-style: solid;
  border-radius: 0;
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.58em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding: 0;
  margin-bottom: 0.625rem;
  border-radius: 0;
  background: none;
  line-height: 1.3;
}
.mkly-newsletter-sponsor__img { max-width: 100%; display: block; margin-bottom: 0.875rem; border-radius: 0; }
.mkly-newsletter-sponsor p { margin: 0 0 0.625rem; line-height: calc(1.8 * var(--_lhs, 1)); font-size: 0.98em; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.625rem;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: underline;
  transition: opacity 0.15s;
}

.mkly-newsletter-outro {
  margin: 0 0 calc(2.5rem * var(--_gs));
  text-align: center;
  padding: 1.5625rem 0;
  border-top-width: 0.1875rem;
  border-top-style: double;
}
.mkly-newsletter-outro p { margin: 0 0 0.625rem; line-height: calc(1.8 * var(--_lhs, 1)); font-size: 1.05em; }
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 1.25rem;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: underline !important;
  padding: 0;
  border: none;
  background: none;
  border-radius: 0;
  transition: opacity 0.15s;
  line-height: calc(1.5 * var(--_lhs, 1));
  letter-spacing: 0.02em;
}

.mkly-newsletter-custom {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 1.0625rem 0.5rem;
  background: none;
  border-radius: 0;
  border-top-width: 0.0625rem;
  border-top-style: solid;
}
.mkly-newsletter-custom__title {
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin: 0 0 0.875rem;
  font-style: normal;
}
.mkly-newsletter-custom p { margin: 0 0 0.625rem; line-height: calc(1.8 * var(--_lhs, 1)); font-size: 0.98em; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(2.5rem * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-divider { margin: calc(2.5rem * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(2.5rem * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(2.5rem * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 0.625rem; font-size: 1.05em; line-height: calc(1.8 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0;
  border-radius: 0;
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: underline !important;
  background: none;
  letter-spacing: 0.02em;
  line-height: calc(1.5 * var(--_lhs, 1));
  box-shadow: none;
  transition: opacity 0.15s;
}
.mkly-core-footer { margin-top: calc(2.5rem * var(--_gs)); text-align: center; font-size: 0.85em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
    css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 0
  background: none
  borderRadius: 0
  textDecoration: underline
  fontWeight: 600

core/divider
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  marginTop: calc(2.5rem * var(--mkly-gap-scale, 1))
  height: 0.125rem

core/code
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  background: none
  borderRadius: 0
  padding: 0.875rem 1.5rem
  borderWidth: 0.0625rem
  borderStyle: solid

core/quote
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  borderLeftWidth: 0.125rem
  padding: 0 0 0 1.5rem
  fontStyle: italic

core/hero
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 1.3125rem 0.5rem

core/section.title
  paddingBottom: 0.625rem
  borderBottomWidth: 0.0625rem

core/card
  borderRadius: 0
  border: none
  overflow: hidden
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

core/card.body
  padding: 1rem 0.5rem

core/header
  paddingBottom: 1rem
  borderBottomWidth: 0.125rem

core/footer
  paddingTop: 1rem
  borderTopWidth: 0.125rem
  borderTopStyle: double
  marginTop: calc(2.5rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(2.5rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 0
  background: none
  borderRadius: 0

core/cta.button
  padding: 0
  background: none
  borderRadius: 0
  textDecoration: underline
newsletter/intro
  fontSize: 1.12em
  lineHeight: calc(1.85 * var(--mkly-line-height-scale, 1))
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))

newsletter/featured
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: visible
  paddingBottom: 1.3125rem

newsletter/featured.img
  width: 100%
  marginBottom: 1rem

newsletter/featured.source
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.12em
  padding: 0
  marginTop: 1rem
  marginBottom: 0.5rem
  borderRadius: 0
  lineHeight: 1.3

newsletter/featured.author
  fontSize: 0.88em
  marginBottom: 0.5rem
  fontWeight: 400
  lineHeight: 1.4

newsletter/featured.link
  marginTop: 0.5rem
  fontWeight: 600
  fontSize: 0.9em
  textDecoration: underline

newsletter/category
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/category.title
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.16em
  marginBottom: 1.375rem
  paddingBottom: 0.75rem
  lineHeight: 1.2

newsletter/item
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  padding: 0
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  aspectRatio: 2/1
  objectFit: cover

newsletter/item.body
  overflow: visible
  padding: 0.75rem 1.5rem 1rem

newsletter/item.meta
  fontSize: 0.72em
  fontStyle: italic

newsletter/item.source
  fontSize: 0.66em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.12em
  padding: 0
  marginBottom: 0.375rem
  borderRadius: 0
  lineHeight: 1.3

newsletter/quickHits
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1rem 0.5rem
  borderRadius: 0

newsletter/quickHits.title
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.16em
  marginBottom: 0.875rem

newsletter/tools
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1rem 0.5rem
  borderRadius: 0

newsletter/tools.title
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.16em
  marginBottom: 1rem

newsletter/tipOfTheDay
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0.8125rem 0 0.8125rem 1.5rem
  borderRadius: 0
  lineHeight: calc(1.8 * var(--mkly-line-height-scale, 1))

newsletter/tipOfTheDay.title
  marginBottom: 0.5rem
  fontWeight: 700
  fontSize: 0.82em
  textTransform: uppercase
  letterSpacing: 0.1em

newsletter/community
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1rem 0.5rem
  borderRadius: 0

newsletter/community.quote
  padding: 0 0 0 1.5rem
  fontSize: 1.08em
  lineHeight: calc(1.85 * var(--mkly-line-height-scale, 1))

newsletter/community.author
  marginTop: 0.875rem
  paddingLeft: 1.5rem
  fontSize: 0.85em
  fontWeight: 600
  letterSpacing: 0.03em
  textTransform: uppercase

newsletter/personalNote
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 0.5rem
  borderRadius: 0
  lineHeight: calc(1.85 * var(--mkly-line-height-scale, 1))
  fontSize: 1.05em

newsletter/poll
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 0.5rem
  borderRadius: 0

newsletter/poll.question
  fontSize: 1.15em
  fontWeight: 700
  marginBottom: 1.125rem
  lineHeight: 1.3

newsletter/poll.option
  marginTop: 0.5rem
  marginBottom: 0.5rem
  padding: 0.875rem 1.25rem
  fontSize: 0.98em
  fontWeight: 500
  textDecoration: none
  borderRadius: 0
  textAlign: left
  lineHeight: calc(1.5 * var(--mkly-line-height-scale, 1))

newsletter/recommendations
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1rem 0.5rem
  borderRadius: 0

newsletter/recommendations.title
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.16em
  marginBottom: 0.875rem

newsletter/sponsor
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1rem 0.5rem
  borderRadius: 0

newsletter/sponsor.badge
  fontSize: 0.58em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.14em
  padding: 0
  marginBottom: 0.625rem
  borderRadius: 0
  lineHeight: 1.3

newsletter/sponsor.img
  maxWidth: 100%
  marginBottom: 0.875rem
  borderRadius: 0

newsletter/sponsor.link
  marginTop: 0.625rem
  fontWeight: 600
  fontSize: 0.9em
  textDecoration: underline

newsletter/outro
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  textAlign: center
  padding: 1.4375rem 0

newsletter/outro.cta
  marginTop: 1.25rem
  fontWeight: 600
  fontSize: 0.9em
  textDecoration: underline !important
  padding: 0
  borderRadius: 0
  lineHeight: calc(1.5 * var(--mkly-line-height-scale, 1))
  letterSpacing: 0.02em

newsletter/custom
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1rem 0.5rem
  borderRadius: 0

newsletter/custom.title
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.16em
  marginBottom: 0.875rem

core/heading
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
`,
  },

  {
    name: 'retro',
    displayName: 'Newsletter/Retro',
    description: 'Nostalgic fun — offset shadows, dotted borders, rounded corners, playful feel',
    rawCss: `/* newsletter kit — retro preset */

.mkly-document {
  font-family: 'Fredoka', 'Nunito', 'Quicksand', -apple-system, system-ui, sans-serif;
  letter-spacing: 0.01em;
  padding: 0 1.25rem;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-family: 'Fredoka', 'Nunito', 'Quicksand', -apple-system, system-ui, sans-serif;
  font-weight: 800;
  letter-spacing: 0;
}

.mkly-newsletter-intro {
  font-size: 1.06em;
  line-height: calc(1.7 * var(--_lhs, 1));
  margin: 0 0 calc(1.75rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.8em; }
.mkly-newsletter-intro a { font-weight: 700; }

.mkly-newsletter-featured {
  margin: 0 0 calc(1.75rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.375rem;
  overflow: hidden;
  box-shadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.12);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.7em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  margin: 1.125rem 1.25rem 0.5rem;
  line-height: 1.2;
  box-shadow: 0.125rem 0.125rem 0 rgba(0,0,0,0.08);
}
.mkly-newsletter-featured__author {
  font-size: 0.85em;
  margin: 0 1.25rem 0.5rem;
  font-weight: 600;
  line-height: 1.4;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.5rem 1.25rem 0.75rem; }
.mkly-newsletter-featured p {
  margin: 0.5rem 1.25rem 0.75rem;
  line-height: calc(1.65 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.375rem 1.25rem 1.25rem;
  font-weight: 700;
  font-size: 0.88em;
  text-decoration: none;
  transition: transform 0.15s ease;
}

.mkly-newsletter-category {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding-top: calc(1.625rem * var(--_gs));
  border-top-width: 0.125rem;
  border-top-style: dashed;
}
.mkly-newsletter-category__title {
  font-size: 0.78em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 1.125rem;
  padding-bottom: 0.625rem;
  border-bottom-width: 0.125rem;
  border-bottom-style: dashed;
  line-height: 1.2;
}

.mkly-newsletter-item {
  border-bottom: none;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.375rem;
  margin-bottom: calc(1rem * var(--_gs));
  box-shadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1);
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: 100%;
  float: none;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
  padding: 1.125rem 1.25rem 0.875rem;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.1875rem 0.625rem;
  border-radius: 0.25rem;
  margin-bottom: 0.375rem;
  line-height: 1.2;
  box-shadow: 0.125rem 0.125rem 0 rgba(0,0,0,0.06);
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  line-height: 1.3;
  margin-bottom: 0.375rem;
  font-weight: 700;
  opacity: 0.55;
}
.mkly-newsletter-item p { margin: 0 0 0.5rem; line-height: calc(1.65 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.06em;
  font-weight: 700;
  margin: 0 0 0.375rem;
  line-height: 1.3;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.375rem;
  font-size: 0.85em;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.15s ease;
}

.mkly-newsletter-quickHits {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  border-radius: 0.375rem;
  border-width: 0.0625rem;
  border-style: dashed;
  box-shadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-quickHits__title {
  font-size: 0.78em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 0.75rem;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; list-style-type: square; }
.mkly-newsletter-quickHits li { margin-bottom: 0.625rem; line-height: calc(1.6 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 700; }

.mkly-newsletter-tools {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  border-radius: 0.375rem;
  border-width: 0.0625rem;
  border-style: dashed;
  box-shadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-tools__title { font-size: 0.78em; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 1rem; }

.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  border-left-width: 0.3125rem;
  border-left-style: solid;
  border-radius: 0 0.375rem 0.375rem 0;
  box-shadow: 0.1875rem 0.1875rem 0 rgba(0,0,0,0.08);
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 0.625rem;
  font-weight: 800;
  font-size: 0.95em;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

.mkly-newsletter-community {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  border-radius: 0.375rem;
  border-width: 0.0625rem;
  border-style: dashed;
  box-shadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 1rem 1.25rem;
  border-left-width: 0.25rem;
  border-left-style: dotted;
  font-size: 1.02em;
  line-height: calc(1.7 * var(--_lhs, 1));
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 0.75rem;
  padding-top: 0.5rem;
  font-size: 0.86em;
  font-style: normal;
  font-weight: 700;
}

.mkly-newsletter-personalNote {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  font-style: italic;
  border-radius: 0.375rem;
  border-width: 0.0625rem;
  border-style: dashed;
  line-height: calc(1.7 * var(--_lhs, 1));
  box-shadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.8em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

.mkly-newsletter-poll {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 0.9375rem 1.375rem;
  border-radius: 0.375rem;
  border-width: 0.0625rem;
  border-style: dashed;
  box-shadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-poll__question {
  font-size: 1.12em;
  font-weight: 800;
  margin: 0 0 1.125rem;
  line-height: 1.3;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 0.625rem 0;
  padding: 0.75rem 1rem;
  font-size: 0.95em;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.375rem;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  text-align: center;
  line-height: 1.4;
  box-shadow: 0.1875rem 0.1875rem 0 rgba(0,0,0,0.08);
}

.mkly-newsletter-recommendations {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  border-radius: 0.375rem;
  border-width: 0.0625rem;
  border-style: dashed;
  box-shadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-recommendations__title { font-size: 0.78em; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 0.75rem; }
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; list-style-type: square; }
.mkly-newsletter-recommendations li { margin-bottom: 0.625rem; line-height: calc(1.6 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 700; }

.mkly-newsletter-sponsor {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  border-width: 0.0625rem;
  border-style: dotted;
  border-radius: 0.375rem;
  box-shadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.62em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.625rem;
  border-radius: 0.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.2;
  box-shadow: 0.125rem 0.125rem 0 rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 0.875rem;
  border-radius: 0.375rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0.1875rem 0.1875rem 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-sponsor p { margin: 0 0 0.625rem; line-height: calc(1.65 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.625rem;
  font-weight: 700;
  font-size: 0.9em;
  text-decoration: none;
  transition: transform 0.15s ease;
}

.mkly-newsletter-outro {
  margin: 0 0 calc(1.75rem * var(--_gs));
  text-align: center;
  padding: 1.25rem 1.75rem;
}
.mkly-newsletter-outro p { margin: 0 0 0.625rem; line-height: calc(1.65 * var(--_lhs, 1)); font-size: 1.02em; }
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 1.125rem;
  font-weight: 700;
  font-size: 0.9em;
  text-decoration: none !important;
  padding: 0.75rem 1.75rem;
  border-radius: 0.375rem;
  border-width: 0.0625rem;
  border-style: solid;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0.1875rem 0.1875rem 0 rgba(0,0,0,0.1);
}

.mkly-newsletter-custom {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 0.875rem 1.375rem;
  border-radius: 0.375rem;
  border-width: 0.0625rem;
  border-style: dashed;
  box-shadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-custom__title { font-size: 0.78em; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 0.875rem; }
.mkly-newsletter-custom p { margin: 0 0 0.625rem; line-height: calc(1.65 * var(--_lhs, 1)); font-size: 0.95em; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(1.75rem * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-divider { margin: calc(1.75rem * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(1.75rem * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(1.75rem * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(1.75rem * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 0.5rem; font-size: 1.02em; line-height: calc(1.65 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.75rem;
  border-radius: 0.375rem;
  font-weight: 700;
  font-size: 0.9375rem;
  text-decoration: none !important;
  border-width: 0.0625rem;
  border-style: solid;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0.1875rem 0.1875rem 0 rgba(0,0,0,0.1);
  transition: transform 0.15s, box-shadow 0.15s;
}
.mkly-core-footer { margin-top: calc(1.75rem * var(--_gs)); text-align: center; font-size: 0.85em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
    css: `core/image.img
  borderRadius: 0.375rem

core/button.link
  padding: 0.75rem 1.625rem
  borderRadius: 0.375rem
  fontWeight: 700

core/code
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderWidth: 0.125rem
  borderStyle: dashed
  borderRadius: 0.375rem
  padding: 1.125rem 1.375rem

core/quote
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderLeftWidth: 0.25rem
  borderLeftStyle: dotted
  padding: 1rem 1.375rem

core/hero
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderRadius: 0.375rem

core/hero.img
  borderRadius: 0.375rem

core/hero.content
  padding: 1.0625rem 1.375rem

core/section.title
  paddingBottom: 0.625rem
  borderBottomWidth: 0.125rem
  borderBottomStyle: dashed

core/card
  borderWidth: 0.125rem
  borderRadius: 0.375rem
  overflow: hidden
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))

core/card.body
  padding: 0.875rem 1.25rem

core/header
  paddingBottom: 0.8125rem
  borderBottomWidth: 0.125rem
  borderBottomStyle: dashed

core/footer
  paddingTop: 0.8125rem
  borderTopWidth: 0.125rem
  borderTopStyle: dashed
  marginTop: calc(1.75rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(1.75rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 1.25rem 1.375rem
  borderRadius: 0.375rem

core/cta.button
  padding: 0.75rem 1.75rem
  borderRadius: 0.375rem
  fontWeight: 700
newsletter/intro
  fontSize: 1.06em
  lineHeight: calc(1.7 * var(--mkly-line-height-scale, 1))
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

newsletter/featured
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderWidth: 0.125rem
  borderStyle: solid
  borderRadius: 0.375rem
  overflow: hidden
  boxShadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.12)

newsletter/featured.img
  width: 100%

newsletter/featured.source
  fontSize: 0.7em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.06em
  padding: 0.25rem 0.75rem
  borderRadius: 0.25rem
  marginTop: 1.125rem
  marginRight: 1.25rem
  marginBottom: 0.5rem
  marginLeft: 1.25rem
  lineHeight: 1.2
  boxShadow: 0.125rem 0.125rem 0 rgba(0,0,0,0.08)

newsletter/featured.author
  fontSize: 0.85em
  marginRight: 1.25rem
  marginBottom: 0.5rem
  marginLeft: 1.25rem
  fontWeight: 600
  lineHeight: 1.4

newsletter/featured.link
  marginTop: 0.375rem
  marginRight: 1.25rem
  marginBottom: 1.25rem
  marginLeft: 1.25rem
  fontWeight: 700
  fontSize: 0.88em
  textDecoration: none

newsletter/category
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(1.625rem * var(--mkly-gap-scale, 1))

newsletter/category.title
  fontSize: 0.78em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.08em
  marginBottom: 1.125rem
  paddingBottom: 0.625rem
  lineHeight: 1.2

newsletter/item
  borderBottom: none
  borderWidth: 0.125rem
  borderStyle: solid
  borderRadius: 0.375rem
  marginBottom: calc(1rem * var(--mkly-gap-scale, 1))
  boxShadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1)
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  width: 100%
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0
  padding: 0.75rem 1.25rem 0.8125rem

newsletter/item.meta
  fontSize: 0.72em
  fontWeight: 700

newsletter/item.source
  fontSize: 0.68em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.06em
  padding: 0.1875rem 0.625rem
  borderRadius: 0.25rem
  marginBottom: 0.375rem
  lineHeight: 1.2
  boxShadow: 0.125rem 0.125rem 0 rgba(0,0,0,0.06)

newsletter/quickHits
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.375rem
  borderWidth: 0.125rem
  borderStyle: dashed
  boxShadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1)

newsletter/quickHits.title
  fontSize: 0.78em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.06em
  marginBottom: 0.75rem

newsletter/tools
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.375rem
  borderWidth: 0.125rem
  borderStyle: dashed
  boxShadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1)

newsletter/tools.title
  fontSize: 0.78em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.06em
  marginBottom: 1rem

newsletter/tipOfTheDay
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0 0.375rem 0.375rem 0
  boxShadow: 0.1875rem 0.1875rem 0 rgba(0,0,0,0.08)

newsletter/tipOfTheDay.title
  marginBottom: 0.625rem
  fontWeight: 800
  fontSize: 0.95em

newsletter/community
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.375rem
  borderWidth: 0.125rem
  borderStyle: dashed
  boxShadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1)

newsletter/community.quote
  padding: 1rem 1.25rem
  fontSize: 1.02em
  lineHeight: calc(1.7 * var(--mkly-line-height-scale, 1))

newsletter/community.author
  marginTop: 0.75rem
  paddingTop: 0.5rem
  fontSize: 0.86em
  fontWeight: 700

newsletter/personalNote
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.375rem
  borderWidth: 0.125rem
  borderStyle: dashed
  lineHeight: calc(1.7 * var(--mkly-line-height-scale, 1))
  boxShadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1)

newsletter/poll
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.375rem
  borderWidth: 0.125rem
  borderStyle: dashed
  boxShadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1)

newsletter/poll.question
  fontSize: 1.12em
  fontWeight: 800
  marginBottom: 1.125rem
  lineHeight: 1.3

newsletter/poll.option
  marginTop: 0.625rem
  marginBottom: 0.625rem
  padding: 0.75rem 1rem
  fontSize: 0.95em
  fontWeight: 600
  textDecoration: none
  borderWidth: 0.125rem
  borderStyle: solid
  borderRadius: 0.375rem
  textAlign: center
  lineHeight: 1.4
  boxShadow: 0.1875rem 0.1875rem 0 rgba(0,0,0,0.08)

newsletter/recommendations
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.375rem
  borderWidth: 0.125rem
  borderStyle: dashed
  boxShadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1)

newsletter/recommendations.title
  fontSize: 0.78em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.06em
  marginBottom: 0.75rem

newsletter/sponsor
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderWidth: 0.125rem
  borderStyle: dotted
  borderRadius: 0.375rem
  boxShadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1)

newsletter/sponsor.badge
  fontSize: 0.62em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.1em
  padding: 0.25rem 0.625rem
  borderRadius: 0.25rem
  marginBottom: 0.75rem
  lineHeight: 1.2
  boxShadow: 0.125rem 0.125rem 0 rgba(0,0,0,0.06)

newsletter/sponsor.img
  maxWidth: 100%
  marginBottom: 0.875rem
  borderRadius: 0.375rem
  borderWidth: 0.125rem
  borderStyle: solid
  boxShadow: 0.1875rem 0.1875rem 0 rgba(0,0,0,0.1)

newsletter/sponsor.link
  marginTop: 0.625rem
  fontWeight: 700
  fontSize: 0.9em
  textDecoration: none

newsletter/outro
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  textAlign: center
  padding: 1.125rem 1.75rem

newsletter/outro.cta
  marginTop: 1.125rem
  fontWeight: 700
  fontSize: 0.9em
  textDecoration: none !important
  padding: 0.75rem 1.75rem
  borderRadius: 0.375rem
  borderWidth: 0.125rem
  borderStyle: solid
  letterSpacing: 0.01em
  lineHeight: 1.4
  boxShadow: 0.1875rem 0.1875rem 0 rgba(0,0,0,0.1)

newsletter/custom
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.375rem
  borderRadius: 0.375rem
  borderWidth: 0.125rem
  borderStyle: dashed
  boxShadow: 0.25rem 0.25rem 0 rgba(0,0,0,0.1)

newsletter/custom.title
  fontSize: 0.78em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.06em
  marginBottom: 0.875rem

core/heading
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(1.75rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
`,
  },

  // ── New presets (batch 1: minimal, magazine) ──
{
  name: 'minimal',
  displayName: 'Newsletter/Minimal',
  description: 'Whisper-quiet editorial restraint — no borders, only separator lines, ultra-light typography',
  rawCss: `/* newsletter kit — minimal preset */

.mkly-document {
  font-family: 'Instrument Sans', 'Inter', system-ui, sans-serif;
  padding: 0 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.2;
}

/* ── intro ── */
.mkly-newsletter-intro {
  line-height: calc(1.9 * var(--_lhs, 1));
  margin: 0 0 calc(2.5rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 1em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { text-decoration: underline; text-underline-offset: 0.1875rem; font-weight: 400; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(2.5rem * var(--_gs));
  border: none;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.64em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 0.3125rem 0;
  border-radius: 0;
  margin: 1.75rem 0 0.625rem;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.82em;
  margin: 0 0 0.625rem;
  line-height: 1.4;
  font-weight: 400;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.625rem 0 0.875rem; }
.mkly-newsletter-featured p {
  margin: 0.625rem 0 0.875rem;
  line-height: calc(1.8 * var(--_lhs, 1));
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.5rem 0 0;
  font-weight: 400;
  text-decoration: underline;
  text-underline-offset: 0.1875rem;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding-top: calc(2.5rem * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.64em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 1.5rem;
  padding-bottom: 0;
  border-bottom: none;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  border: none;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
  border-radius: 0;
  margin-bottom: 0;
  box-shadow: none;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; border-bottom: none; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: 100%;
  float: none;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
  padding: 1.125rem 0 1.25rem;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.62em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 0;
  border-radius: 0;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.7em;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  opacity: 0.4;
  letter-spacing: 0.1em;
}
.mkly-newsletter-item p {
  margin: 0 0 0.5rem;
  line-height: calc(1.75 * var(--_lhs, 1));
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.1em;
  font-weight: 500;
  margin: 0 0 0.5rem;
  line-height: 1.3;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 400;
  text-decoration: underline;
  text-underline-offset: 0.1875rem;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 0;
  border-radius: 0;
  border: none;
  box-shadow: none;
}
.mkly-newsletter-quickHits__title {
  font-size: 0.64em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 1.25rem;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-quickHits li {
  margin-bottom: 0.875rem;
  line-height: calc(1.75 * var(--_lhs, 1));
}
.mkly-newsletter-quickHits li::before {
  content: '—';
  margin-right: 0.5rem;
  opacity: 0.3;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 400; text-decoration: underline; text-underline-offset: 0.1875rem; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 0.875rem 0;
  border-radius: 0;
  border: none;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
  box-shadow: none;
}
.mkly-newsletter-tools__title {
  font-size: 0.64em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 1.125rem;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 1rem 0 1rem 1.5rem;
  border: none;
  border-left-width: 0.0625rem;
  border-left-style: solid;
  border-radius: 0;
}
.mkly-newsletter-tipOfTheDay__title {
  font-size: 0.64em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 0.875rem;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; line-height: calc(1.75 * var(--_lhs, 1)); }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  line-height: calc(1.8 * var(--_lhs, 1));
  padding: 0 0 0 1.25rem;
  border-left-width: 0.0625rem;
  border-left-style: solid;
  margin-bottom: 0.875rem;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.9em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  font-size: 0.85em;
  font-weight: 400;
  margin-top: 0.875rem;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 1rem 0 1rem 1.5rem;
  border: none;
  border-left-width: 0.0625rem;
  border-left-style: solid;
  border-radius: 0;
  font-style: italic;
  line-height: calc(1.8 * var(--_lhs, 1));
}
.mkly-newsletter-personalNote p { margin: 0 0 0.9em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-poll__question {
  font-size: 1em;
  font-weight: 500;
  margin: 0 0 1.125rem;
  line-height: 1.4;
}
.mkly-newsletter-poll__option {
  display: block;
  border: none;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
  border-radius: 0;
  padding: 0.875rem 0;
  font-weight: 400;
  text-align: left;
  cursor: pointer;
  margin: 0;
  box-shadow: none;
  line-height: calc(1.5 * var(--_lhs, 1));
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 0;
  border-radius: 0;
  border: none;
  box-shadow: none;
}
.mkly-newsletter-recommendations__title {
  font-size: 0.64em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 1.25rem;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-recommendations li {
  margin-bottom: 0.875rem;
  line-height: calc(1.75 * var(--_lhs, 1));
}
.mkly-newsletter-recommendations li::before {
  content: '—';
  margin-right: 0.5rem;
  opacity: 0.3;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 400; text-decoration: underline; text-underline-offset: 0.1875rem; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 0.875rem 0;
  border: none;
  border-top-width: 0.0625rem;
  border-top-style: solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.55em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 0;
  border-radius: 0;
  border: none;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  border-radius: 0;
  margin-bottom: 0.875rem;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 0.5rem;
  line-height: calc(1.75 * var(--_lhs, 1));
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 400;
  text-decoration: underline;
  text-underline-offset: 0.1875rem;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(2.5rem * var(--_gs));
  text-align: center;
  padding: 1.25rem 0;
  border: none;
  border-top-width: 0.0625rem;
  border-top-style: solid;
  border-radius: 0;
}
.mkly-newsletter-outro p {
  margin: 0 0 0.75rem;
  line-height: calc(1.8 * var(--_lhs, 1));
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0;
  font-weight: 500;
  text-decoration: none;
  margin-top: 0.75rem;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 0.875rem 0;
  border: none;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
  border-radius: 0;
}
.mkly-newsletter-custom__title {
  font-size: 0.64em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 1rem;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 0.5rem;
  line-height: calc(1.75 * var(--_lhs, 1));
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core blocks ── */
.mkly-core-hero {
  margin-bottom: calc(2.5rem * var(--_gs));
  border-radius: 0;
  overflow: hidden;
  border: none;
  box-shadow: none;
}
.mkly-core-hero__img { border-radius: 0; }
.mkly-core-hero__content { padding: 1.75rem 0; }

.mkly-core-heading {
  margin-bottom: calc(1.25rem * var(--_gs));
  font-weight: 500;
}

.mkly-core-text {
  margin-bottom: calc(1.25rem * var(--_gs));
  line-height: calc(1.75 * var(--_lhs, 1));
}

.mkly-core-image {
  margin-bottom: calc(1.75rem * var(--_gs));
  border-radius: 0;
}
.mkly-core-image__img {
  border-radius: 0;
  box-shadow: none;
}

.mkly-core-quote {
  padding: 1.125rem 0 1.125rem 1.25rem;
  border-left-width: 0.0625rem;
  border-left-style: solid;
  margin-bottom: calc(1.75rem * var(--_gs));
  font-style: italic;
  border-radius: 0;
}

.mkly-core-code {
  border-radius: 0;
  padding: 1.25rem 0;
  margin-bottom: calc(1.5rem * var(--_gs));
  border: none;
  border-left-width: 0.0625rem;
  border-left-style: solid;
  padding-left: 1.25rem;
}

.mkly-core-list {
  margin-bottom: calc(1.5rem * var(--_gs));
  padding-left: 0;
  list-style: none;
}
.mkly-core-list li::before {
  content: '—';
  margin-right: 0.5rem;
  opacity: 0.3;
}

.mkly-core-button {
  margin-bottom: calc(1.5rem * var(--_gs));
}
.mkly-core-button__link {
  padding: 0.75rem 1.75rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: solid;
  font-weight: 500;
  text-decoration: none;
}

.mkly-core-section {
  margin-bottom: calc(2rem * var(--_gs));
}
.mkly-core-section__title {
  padding-bottom: 0;
  margin-bottom: 1.25rem;
  font-size: 0.64em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.mkly-core-divider {
  margin: calc(1.75rem * var(--_gs)) 0;
  height: 0.0625rem;
  border: none;
  opacity: 0.3;
}

.mkly-core-card {
  border-radius: 0;
  overflow: hidden;
  margin-bottom: calc(1.5rem * var(--_gs));
  border: none;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
  box-shadow: none;
}
.mkly-core-card__body {
  padding: 1.25rem 0;
}

.mkly-core-header {
  padding-bottom: 1.25rem;
  margin-bottom: calc(1.75rem * var(--_gs));
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
}

.mkly-core-footer {
  padding-top: 1.75rem;
  margin-top: calc(2.5rem * var(--_gs));
  border-top-width: 0.0625rem;
  border-top-style: solid;
  text-align: center;
  font-size: 0.85em;
  background: none;
}
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer a { font-weight: 400; text-decoration: underline; text-underline-offset: 0.1875rem; }

.mkly-core-cta {
  text-align: center;
  margin-top: calc(2.5rem * var(--_gs));
  margin-bottom: calc(2.5rem * var(--_gs));
  padding: 1.75rem 0;
  border-radius: 0;
  border: none;
  border-top-width: 0.0625rem;
  border-top-style: solid;
}
.mkly-core-cta p { margin: 0 0 0.75rem; line-height: calc(1.8 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  padding: 0.75rem 1.75rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: solid;
  font-weight: 500;
  text-decoration: none;
}
`,
  css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 0.75rem 1.75rem
  borderRadius: 0
  fontWeight: 500

core/code
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  padding: 0.8125rem 0 0.8125rem 1.25rem
  borderLeftWidth: 1

core/quote
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0.75rem 0 0.75rem 1.25rem
  borderLeftWidth: 1

core/hero
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 1.125rem 0

core/section.title
  paddingBottom: 0
  fontSize: 0.64em
  fontWeight: 400
  textTransform: uppercase
  letterSpacing: 0.2em

core/card
  borderRadius: 0
  overflow: hidden
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  borderBottomWidth: 1

core/card.body
  padding: 0.875rem 0

core/header
  paddingBottom: 1.125rem
  borderBottomWidth: 1

core/footer
  paddingTop: 1.125rem
  marginTop: calc(2.5rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none
  borderTopWidth: 1

core/cta
  textAlign: center
  marginTop: calc(2.5rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 0
  borderRadius: 0
  borderTopWidth: 1

core/cta.button
  padding: 0.75rem 1.75rem
  borderRadius: 0
  fontWeight: 500

newsletter/featured
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden

newsletter/featured.source
  padding: 0.3125rem 0
  borderRadius: 0

newsletter/category.title
  paddingBottom: 0

newsletter/item
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  borderBottomWidth: 1
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  width: 100%
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0
  padding: 0.75rem 0 0.8125rem

newsletter/item.meta
  fontSize: 0.7em
  letterSpacing: 0.1em

newsletter/quickHits
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/tools
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 0
  borderRadius: 0
  borderBottomWidth: 1

newsletter/tipOfTheDay
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1rem 0 1rem 1.5rem
  borderRadius: 0
  borderLeftWidth: 1

newsletter/community
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/community.quote
  padding: 0 0 0 1.25rem
  borderLeftWidth: 1

newsletter/personalNote
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1rem 0 1rem 1.5rem
  borderRadius: 0
  borderLeftWidth: 1

newsletter/poll
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/poll.option
  borderRadius: 0
  padding: 0.875rem 0
  borderBottomWidth: 1

newsletter/recommendations
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/sponsor
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 0
  borderRadius: 0
  borderTopWidth: 1

newsletter/sponsor.badge
  padding: 0
  borderRadius: 0

newsletter/sponsor.img
  borderRadius: 0

newsletter/outro
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 0
  borderRadius: 0
  borderTopWidth: 1

newsletter/outro.cta
  padding: 0.75rem 1.75rem
  borderRadius: 0

newsletter/custom
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 0
  borderRadius: 0
  borderBottomWidth: 1
newsletter/intro
  lineHeight: calc(1.9 * var(--mkly-line-height-scale, 1))
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(2.5rem * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  fontWeight: 500

core/text
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  lineHeight: calc(1.75 * var(--mkly-line-height-scale, 1))

core/divider
  marginTop: calc(1.75rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  height: 0.0625rem
  opacity: 0.3

core/list
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  paddingLeft: 0
`,
},

{
  name: 'magazine',
  displayName: 'Newsletter/Magazine',
  description: 'Classical print sophistication — serif typography, small-caps headers, double-rule separators',
  rawCss: `/* newsletter kit — magazine preset */

.mkly-document {
  font-family: 'Merriweather', 'Georgia', 'Times New Roman', serif;
  font-size: 1.0625rem;
  line-height: calc(1.85 * var(--_lhs, 1));
  padding: 0 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-family: 'DM Serif Display', 'Georgia', serif;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.2;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1.08em;
  line-height: calc(1.85 * var(--_lhs, 1));
  margin: 0 0 calc(2rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(2rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-variant: small-caps;
  letter-spacing: 0.06em;
  font-size: 0.72em;
  padding: 0.25rem 0.75rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0;
  margin: 1.375rem 1.5rem 0.625rem;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-variant: small-caps;
  letter-spacing: 0.04em;
  font-size: 0.84em;
  margin: 0 1.5rem 0.5rem;
  line-height: 1.4;
  font-weight: 400;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.5rem 1.5rem 0.875rem; }
.mkly-newsletter-featured p {
  margin: 0.5rem 1.5rem 0.875rem;
  line-height: calc(1.85 * var(--_lhs, 1));
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.375rem 1.5rem 1.5rem;
  font-weight: 600;
  text-decoration: none;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(2rem * var(--_gs));
  padding-top: calc(2rem * var(--_gs));
}
.mkly-newsletter-category__title {
  font-variant: small-caps;
  font-size: 0.9em;
  letter-spacing: 0.06em;
  text-transform: none;
  font-style: normal;
  margin: 0 0 1.25rem;
  padding-bottom: 0.625rem;
  border-bottom-width: 0.1875rem;
  border-bottom-style: double;
  line-height: 1.2;
  font-weight: 700;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 0;
  border: none;
  border-top-width: 0.0625rem;
  border-top-style: solid;
  border-radius: 0;
  margin-bottom: 0;
  box-shadow: none;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: 100%;
  float: none;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 0;
  display: block;
}
.mkly-newsletter-item__body {
  padding: 0.875rem 1.5rem 1.0625rem;
  overflow: visible;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-variant: small-caps;
  letter-spacing: 0.06em;
  font-size: 0.65em;
  padding: 0.1875rem 0.5rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.7em;
  line-height: 1.3;
  margin-bottom: 0.375rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 0.5rem;
  line-height: calc(1.85 * var(--_lhs, 1));
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.14em;
  font-weight: 700;
  margin: 0 0 0.375rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 600;
  text-decoration: none;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.0625rem 1.625rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: none;
}
.mkly-newsletter-quickHits__title {
  font-variant: small-caps;
  font-size: 0.85em;
  letter-spacing: 0.06em;
  margin: 0 0 1rem;
  line-height: 1.2;
  font-weight: 700;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li {
  margin-bottom: 0.75rem;
  line-height: calc(1.85 * var(--_lhs, 1));
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.0625rem 1.625rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: none;
}
.mkly-newsletter-tools__title {
  font-variant: small-caps;
  font-size: 0.85em;
  letter-spacing: 0.06em;
  margin: 0 0 1.125rem;
  line-height: 1.2;
  font-weight: 700;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 0.875rem 0 0.875rem 1.5rem;
  border: none;
  border-left-width: 0.1875rem;
  border-left-style: double;
  border-radius: 0;
}
.mkly-newsletter-tipOfTheDay__title {
  font-variant: small-caps;
  font-size: 0.85em;
  letter-spacing: 0.06em;
  margin: 0 0 0.875rem;
  line-height: 1.2;
  font-weight: 700;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; line-height: calc(1.85 * var(--_lhs, 1)); }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-size: 1.18em;
  line-height: calc(1.8 * var(--_lhs, 1));
  padding: 0 0 0 1.5rem;
  border-left-width: 0.125rem;
  border-left-style: solid;
  margin-bottom: 0.875rem;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.9em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  font-variant: small-caps;
  letter-spacing: 0.04em;
  font-size: 0.85em;
  font-weight: 400;
  margin-top: 0.875rem;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 0.875rem 0 0.875rem 1.5rem;
  border: none;
  border-left-width: 0.125rem;
  border-left-style: solid;
  border-radius: 0;
  font-style: italic;
  line-height: calc(1.85 * var(--_lhs, 1));
}
.mkly-newsletter-personalNote p { margin: 0 0 0.9em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.125rem 1.625rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-poll__question {
  font-size: 1em;
  font-weight: 700;
  margin: 0 0 1.125rem;
  line-height: 1.4;
}
.mkly-newsletter-poll__option {
  display: block;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0;
  padding: 0.875rem 1.25rem;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  margin: 0.5rem 0;
  box-shadow: none;
  line-height: calc(1.5 * var(--_lhs, 1));
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.0625rem 1.625rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: none;
}
.mkly-newsletter-recommendations__title {
  font-variant: small-caps;
  font-size: 0.85em;
  letter-spacing: 0.06em;
  margin: 0 0 1rem;
  line-height: 1.2;
  font-weight: 700;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li {
  margin-bottom: 0.75rem;
  line-height: calc(1.85 * var(--_lhs, 1));
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 0.9375rem 0;
  border: none;
  border-top-width: 0.0625rem;
  border-top-style: solid;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-variant: small-caps;
  letter-spacing: 0.06em;
  font-size: 0.62em;
  padding: 0.1875rem 0;
  border: none;
  border-radius: 0;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  border-radius: 0;
  margin-bottom: 0.875rem;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 0.5rem;
  line-height: calc(1.85 * var(--_lhs, 1));
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 600;
  text-decoration: none;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(2rem * var(--_gs));
  text-align: center;
  padding: 1.375rem 0;
  border: none;
  border-top-width: 0.1875rem;
  border-top-style: double;
  border-radius: 0;
}
.mkly-newsletter-outro p {
  margin: 0 0 0.75rem;
  line-height: calc(1.85 * var(--_lhs, 1));
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  padding: 0.875rem 2.125rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0;
  font-weight: 600;
  text-decoration: none;
  margin-top: 0.75rem;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 0.9375rem 1.5rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0;
}
.mkly-newsletter-custom__title {
  font-variant: small-caps;
  font-size: 0.85em;
  letter-spacing: 0.06em;
  margin: 0 0 1rem;
  line-height: 1.2;
  font-weight: 700;
}
.mkly-newsletter-custom p {
  margin: 0 0 0.5rem;
  line-height: calc(1.85 * var(--_lhs, 1));
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core blocks ── */
.mkly-core-hero {
  margin-bottom: calc(2rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
}
.mkly-core-hero__img { border-radius: 0; }
.mkly-core-hero__content { padding: 1.75rem 1.5rem; }

.mkly-core-heading {
  margin-bottom: calc(1.25rem * var(--_gs));
  font-weight: 700;
}

.mkly-core-text {
  margin-bottom: calc(1.25rem * var(--_gs));
  line-height: calc(1.85 * var(--_lhs, 1));
}

.mkly-core-image {
  margin-bottom: calc(1.75rem * var(--_gs));
  border-radius: 0;
}
.mkly-core-image__img {
  border-radius: 0;
  box-shadow: none;
}

.mkly-core-quote {
  padding: 1.25rem 0 1.25rem 1.5rem;
  border-left-width: 0.125rem;
  border-left-style: solid;
  margin-bottom: calc(1.75rem * var(--_gs));
  font-size: 1.1em;
  line-height: calc(1.8 * var(--_lhs, 1));
  border-radius: 0;
}

.mkly-core-code {
  border-radius: 0;
  padding: 1.25rem 1.5rem;
  margin-bottom: calc(1.5rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: solid;
}

.mkly-core-list {
  margin-bottom: calc(1.5rem * var(--_gs));
  padding-left: 1.4em;
}

.mkly-core-button {
  margin-bottom: calc(1.5rem * var(--_gs));
}
.mkly-core-button__link {
  padding: 0.875rem 2rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: solid;
  font-weight: 600;
  text-decoration: none;
}

.mkly-core-section {
  margin-bottom: calc(2rem * var(--_gs));
}
.mkly-core-section__title {
  padding-bottom: 0.625rem;
  margin-bottom: 1.25rem;
  font-variant: small-caps;
  font-size: 0.9em;
  letter-spacing: 0.06em;
  border-bottom-width: 0.1875rem;
  border-bottom-style: double;
  font-weight: 700;
}

.mkly-core-divider {
  margin: calc(1.75rem * var(--_gs)) 0;
  height: 0.0625rem;
  border: none;
}

.mkly-core-card {
  border-radius: 0;
  overflow: hidden;
  margin-bottom: calc(1.5rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: none;
}
.mkly-core-card__body {
  padding: 1.375rem 1.5rem;
}

.mkly-core-header {
  padding-bottom: 1.25rem;
  margin-bottom: calc(1.75rem * var(--_gs));
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
}

.mkly-core-footer {
  padding-top: 1.75rem;
  margin-top: calc(2rem * var(--_gs));
  border-top-width: 0.0625rem;
  border-top-style: solid;
  text-align: center;
  font-size: 0.85em;
  background: none;
}
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer a { font-weight: 600; }

.mkly-core-cta {
  text-align: center;
  margin-top: calc(2rem * var(--_gs));
  margin-bottom: calc(2rem * var(--_gs));
  padding: 2rem 0;
  border-radius: 0;
  border: none;
  border-top-width: 0.1875rem;
  border-top-style: double;
}
.mkly-core-cta p { margin: 0 0 0.75rem; line-height: calc(1.85 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  padding: 0.875rem 2.125rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: solid;
  font-weight: 600;
  text-decoration: none;
}
`,
  css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 0.875rem 2rem
  borderRadius: 0
  fontWeight: 600

core/code
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  padding: 0.875rem 1.5rem
  borderWidth: 1

core/quote
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 0.8125rem 0 0.8125rem 1.5rem
  borderLeftWidth: 2
  fontSize: 1.1em

core/hero
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden
  borderWidth: 1

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 1.125rem 1.5rem

core/section.title
  paddingBottom: 0.625rem
  fontSize: 0.9em
  fontWeight: 700
  borderBottomWidth: 3
  borderBottomStyle: double
  fontVariant: small-caps
  letterSpacing: 0.06em

core/card
  borderRadius: 0
  overflow: hidden
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  borderWidth: 1

core/card.body
  padding: 0.875rem 1.5rem

core/header
  paddingBottom: 1.125rem
  borderBottomWidth: 1

core/footer
  paddingTop: 1.125rem
  marginTop: calc(2rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none
  borderTopWidth: 1

core/cta
  textAlign: center
  marginTop: calc(2rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.3125rem 0
  borderRadius: 0
  borderTopWidth: 3
  borderTopStyle: double

core/cta.button
  padding: 0.875rem 2.125rem
  borderRadius: 0
  fontWeight: 600

newsletter/featured
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden
  borderWidth: 1

newsletter/featured.source
  padding: 0.25rem 0.75rem
  borderRadius: 0
  borderWidth: 1

newsletter/category.title
  paddingBottom: 0.625rem
  borderBottomWidth: 3
  borderBottomStyle: double

newsletter/item
  marginBottom: calc(1rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0
  borderTopWidth: 1
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  padding: 0.8125rem 1.5rem 1rem

newsletter/item.meta
  fontSize: 0.7em
  textTransform: uppercase
  letterSpacing: 0.08em

newsletter/quickHits
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.625rem
  borderRadius: 0
  borderWidth: 1

newsletter/tools
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.625rem
  borderRadius: 0
  borderWidth: 1

newsletter/tipOfTheDay
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 0.8125rem 0 0.8125rem 1.5rem
  borderRadius: 0
  borderLeftWidth: 3
  borderLeftStyle: double

newsletter/community
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/community.quote
  padding: 0 0 0 1.5rem
  borderLeftWidth: 2
  fontSize: 1.18em

newsletter/personalNote
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 0.8125rem 0 0.8125rem 1.5rem
  borderRadius: 0
  borderLeftWidth: 2

newsletter/poll
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.0625rem 1.625rem
  borderRadius: 0
  borderWidth: 1

newsletter/poll.option
  borderRadius: 0
  padding: 0.875rem 1.25rem
  borderWidth: 1

newsletter/recommendations
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.625rem
  borderRadius: 0
  borderWidth: 1

newsletter/sponsor
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 0
  borderRadius: 0
  borderTopWidth: 1
  borderBottomWidth: 1

newsletter/sponsor.badge
  padding: 0.1875rem 0
  borderRadius: 0

newsletter/sponsor.img
  borderRadius: 0

newsletter/outro
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.3125rem 0
  borderRadius: 0
  borderTopWidth: 3
  borderTopStyle: double

newsletter/outro.cta
  padding: 0.875rem 2.125rem
  borderRadius: 0

newsletter/custom
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.5rem
  borderRadius: 0
  borderWidth: 1
newsletter/intro
  fontSize: 1.08em
  lineHeight: calc(1.85 * var(--mkly-line-height-scale, 1))
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(2rem * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  fontWeight: 700

core/text
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  lineHeight: calc(1.85 * var(--mkly-line-height-scale, 1))

core/divider
  marginTop: calc(1.75rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  height: 0.0625rem

core/list
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  paddingLeft: 1.4em
`,
},

  // ── New presets (batch 3: compact, soft, typewriter) ──
{
  name: 'compact',
  displayName: 'Newsletter/Compact',
  description: 'Dense information-rich layout for power readers — tight spacing, small thumbnails, flat panels',
  rawCss: `/* newsletter kit — compact preset */

.mkly-document {
  font-family: 'IBM Plex Sans', 'Inter', -apple-system, system-ui, sans-serif;
  font-size: 0.8125rem;
  line-height: 1.45;
  padding: 0 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.25;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 0.92em;
  line-height: calc(1.5 * var(--_lhs, 1));
  margin: 0 0 calc(0.75rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.6em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; text-underline-offset: 0.125rem; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(0.75rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: none;
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.6em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.125rem 0.375rem;
  border-radius: 0.1875rem;
  margin: 0.625rem 0.75rem 0.375rem;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.78em;
  margin: 0 0.75rem 0.25rem;
  line-height: 1.3;
  font-weight: 500;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.25rem 0.75rem 0.5rem; }
.mkly-newsletter-featured p {
  margin: 0.25rem 0.75rem 0.5rem;
  line-height: 1.45;
  font-size: 0.88em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.25rem 0.75rem 0.75rem;
  font-weight: 600;
  font-size: 0.82em;
  text-decoration: none;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(0.75rem * var(--_gs));
  padding-top: calc(0.75rem * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.625rem;
  padding-bottom: 0.375rem;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  border: none;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
  border-radius: 0;
  margin-bottom: 0;
  box-shadow: none;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; border-bottom: none; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: 100%;
  float: none;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
  padding: 0.625rem 0 0.75rem;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.6em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.125rem 0.375rem;
  border-radius: 0.1875rem;
  margin-bottom: 0.25rem;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.68em;
  line-height: 1.3;
  margin-bottom: 0.25rem;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 0.25rem;
  line-height: 1.45;
  font-size: 0.88em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1em;
  font-weight: 600;
  margin: 0 0 0.25rem;
  line-height: 1.25;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.25rem;
  font-weight: 600;
  font-size: 0.82em;
  text-decoration: none;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(0.75rem * var(--_gs));
  padding: 0.625rem 0.75rem;
  border-radius: 0.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: none;
}
.mkly-newsletter-quickHits__title {
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.5rem;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-quickHits li {
  margin-bottom: 0.375rem;
  line-height: 1.45;
  font-size: 0.92em;
}
.mkly-newsletter-quickHits li::before {
  content: '\\25AA';
  margin-right: 0.375rem;
  font-size: 0.7em;
  vertical-align: middle;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(0.75rem * var(--_gs));
  padding: 0.625rem 0.75rem;
  border-radius: 0.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: none;
}
.mkly-newsletter-tools__title {
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.5rem;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(0.75rem * var(--_gs));
  padding: 0.5rem 0 0.5rem 0.75rem;
  border: none;
  border-left-width: 0.125rem;
  border-left-style: solid;
  border-radius: 0;
}
.mkly-newsletter-tipOfTheDay__title {
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.375rem;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.25rem; line-height: 1.45; font-size: 0.92em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(0.75rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  line-height: calc(1.5 * var(--_lhs, 1));
  padding: 0 0 0 0.75rem;
  border-left-width: 0.125rem;
  border-left-style: solid;
  margin-bottom: 0.5rem;
  font-size: 0.92em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.6em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  font-size: 0.78em;
  font-weight: 500;
  margin-top: 0.5rem;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(0.75rem * var(--_gs));
  padding: 0.5rem 0 0.5rem 0.75rem;
  border: none;
  border-left-width: 0.125rem;
  border-left-style: solid;
  border-radius: 0;
  font-style: italic;
  line-height: calc(1.5 * var(--_lhs, 1));
  font-size: 0.92em;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.6em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(0.75rem * var(--_gs));
  padding: 0.625rem 0.75rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.25rem;
  box-shadow: none;
}
.mkly-newsletter-poll__question {
  font-size: 0.92em;
  font-weight: 600;
  margin: 0 0 0.5rem;
  line-height: 1.3;
}
.mkly-newsletter-poll__option {
  display: block;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.25rem;
  padding: 0.5rem 0.625rem;
  font-weight: 400;
  text-align: left;
  cursor: pointer;
  margin: 0.25rem 0;
  box-shadow: none;
  line-height: 1.3;
  font-size: 0.88em;
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(0.75rem * var(--_gs));
  padding: 0.625rem 0.75rem;
  border-radius: 0.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: none;
}
.mkly-newsletter-recommendations__title {
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.5rem;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-recommendations li {
  margin-bottom: 0.375rem;
  line-height: 1.45;
  font-size: 0.92em;
}
.mkly-newsletter-recommendations li::before {
  content: '\\25AA';
  margin-right: 0.375rem;
  font-size: 0.7em;
  vertical-align: middle;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(0.75rem * var(--_gs));
  padding: 0.625rem 0;
  border: none;
  border-top-width: 0.0625rem;
  border-top-style: solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.55em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.125rem 0.375rem;
  border-radius: 0.1875rem;
  border: none;
  margin-bottom: 0.375rem;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 0.25rem;
  line-height: 1.45;
  font-size: 0.88em;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.25rem;
  font-weight: 600;
  font-size: 0.82em;
  text-decoration: none;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(0.75rem * var(--_gs));
  text-align: center;
  padding: 1rem 0;
  border: none;
  border-top-width: 0.0625rem;
  border-top-style: solid;
  border-radius: 0;
}
.mkly-newsletter-outro p {
  margin: 0 0 0.375rem;
  line-height: 1.45;
  font-size: 0.92em;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.25rem;
  font-weight: 600;
  font-size: 0.85em;
  text-decoration: none;
  margin-top: 0.5rem;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(0.75rem * var(--_gs));
  padding: 0.625rem 0.75rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.25rem;
}
.mkly-newsletter-custom__title {
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.5rem;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 0.25rem;
  line-height: 1.45;
  font-size: 0.88em;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core blocks ── */
.mkly-core-hero {
  margin-bottom: calc(0.75rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: none;
}
.mkly-core-hero__img { border-radius: 0; }
.mkly-core-hero__content { padding: 0.875rem 0.75rem; }

.mkly-core-heading {
  margin-bottom: calc(0.5rem * var(--_gs));
  font-weight: 600;
}

.mkly-core-text {
  margin-bottom: calc(0.5rem * var(--_gs));
  line-height: 1.45;
}

.mkly-core-image {
  margin-bottom: calc(0.75rem * var(--_gs));
  border-radius: 0.25rem;
}
.mkly-core-image__img {
  border-radius: 0.25rem;
  box-shadow: none;
}

.mkly-core-quote {
  padding: 0.5rem 0 0.5rem 0.75rem;
  border-left-width: 0.125rem;
  border-left-style: solid;
  margin-bottom: calc(0.75rem * var(--_gs));
  font-style: italic;
  border-radius: 0;
  font-size: 0.95em;
}

.mkly-core-code {
  border-radius: 0.25rem;
  padding: 0.625rem 0.75rem;
  margin-bottom: calc(0.75rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: solid;
  font-size: 0.85em;
}

.mkly-core-list {
  margin-bottom: calc(0.75rem * var(--_gs));
  padding-left: 1.2em;
  font-size: 0.92em;
}

.mkly-core-button {
  margin-bottom: calc(0.75rem * var(--_gs));
}
.mkly-core-button__link {
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  font-weight: 600;
  font-size: 0.85em;
  text-decoration: none;
}

.mkly-core-section {
  margin-bottom: calc(1rem * var(--_gs));
}
.mkly-core-section__title {
  padding-bottom: 0.375rem;
  margin-bottom: 0.625rem;
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
}

.mkly-core-divider {
  margin: calc(0.75rem * var(--_gs)) 0;
  height: 0.0625rem;
  border: none;
}

.mkly-core-card {
  border-radius: 0.25rem;
  overflow: hidden;
  margin-bottom: calc(0.75rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: none;
}
.mkly-core-card__body {
  padding: 0.625rem 0.75rem;
}

.mkly-core-header {
  padding-bottom: 0.875rem;
  margin-bottom: calc(0.75rem * var(--_gs));
  border-bottom-width: 0.0625rem;
  border-bottom-style: solid;
}

.mkly-core-footer {
  padding-top: 0.875rem;
  margin-top: calc(1rem * var(--_gs));
  border-top-width: 0.0625rem;
  border-top-style: solid;
  text-align: center;
  font-size: 0.78em;
  background: none;
}
.mkly-core-footer p { margin: 0 0 0.25rem; }
.mkly-core-footer a { font-weight: 600; }

.mkly-core-cta {
  text-align: center;
  margin-top: calc(1rem * var(--_gs));
  margin-bottom: calc(1rem * var(--_gs));
  padding: 1rem 0;
  border-radius: 0;
  border: none;
  border-top-width: 0.0625rem;
  border-top-style: solid;
}
.mkly-core-cta p { margin: 0 0 0.375rem; line-height: 1.45; }
.mkly-core-cta__button {
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  font-weight: 600;
  font-size: 0.85em;
  text-decoration: none;
}
`,
  css: `core/image.img
  borderRadius: 0.25rem

core/button.link
  padding: 0.5rem 1.25rem
  borderRadius: 0.25rem
  fontWeight: 600
  fontSize: 0.85em

core/code
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))
  borderRadius: 0.25rem
  padding: 0.625rem 0.75rem
  borderWidth: 1
  fontSize: 0.85em

core/quote
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))
  padding: 0.5rem 0 0.5rem 0.75rem
  borderLeftWidth: 2
  fontSize: 0.95em

core/hero
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))
  borderRadius: 0.25rem
  overflow: hidden
  borderWidth: 1

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 0.875rem 0.75rem

core/heading
  marginBottom: calc(0.5rem * var(--mkly-gap-scale, 1))
  fontWeight: 600

core/text
  marginBottom: calc(0.5rem * var(--mkly-gap-scale, 1))
  lineHeight: 1.45

core/image
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))
  borderRadius: 0.25rem

core/list
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))
  paddingLeft: 1.2em
  fontSize: 0.92em

core/section
  marginBottom: calc(1rem * var(--mkly-gap-scale, 1))

core/section.title
  paddingBottom: 0.375rem
  fontSize: 0.68em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.08em
  borderBottomWidth: 1

core/divider
  marginTop: calc(0.75rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))

core/card
  borderRadius: 0.25rem
  overflow: hidden
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))
  borderWidth: 1

core/card.body
  padding: 0.625rem 0.75rem

core/header
  paddingBottom: 0.875rem
  borderBottomWidth: 1

core/footer
  paddingTop: 0.875rem
  marginTop: calc(1rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.78em
  background: none
  borderTopWidth: 1

core/cta
  textAlign: center
  marginTop: calc(1rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1rem * var(--mkly-gap-scale, 1))
  padding: 1rem 0
  borderRadius: 0
  borderTopWidth: 1

core/cta.button
  padding: 0.5rem 1.25rem
  borderRadius: 0.25rem
  fontWeight: 600
  fontSize: 0.85em

core/button
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))

newsletter/intro
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))
  fontSize: 0.92em

newsletter/featured
  borderRadius: 0.25rem
  overflow: hidden
  borderWidth: 1
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))

newsletter/featured.source
  padding: 0.125rem 0.375rem
  borderRadius: 0.1875rem
  fontSize: 0.6em

newsletter/featured.img
  width: 100%

newsletter/featured.author
  fontSize: 0.78em

newsletter/featured.link
  fontSize: 0.82em

newsletter/category
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(0.75rem * var(--mkly-gap-scale, 1))

newsletter/category.title
  paddingBottom: 0.375rem
  borderBottomWidth: 1
  fontSize: 0.68em

newsletter/item
  marginBottom: calc(0.625rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  borderBottomWidth: 1
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  width: 100%
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0
  padding: 0.625rem 0 0.75rem

newsletter/item.meta
  fontSize: 0.68em

newsletter/item.source
  padding: 0.125rem 0.375rem
  borderRadius: 0.1875rem
  fontSize: 0.6em

newsletter/quickHits
  padding: 0.625rem 0.75rem
  borderRadius: 0.25rem
  borderWidth: 1
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))

newsletter/tools
  padding: 0.625rem 0.75rem
  borderRadius: 0.25rem
  borderWidth: 1
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))

newsletter/tipOfTheDay
  padding: 0.5rem 0 0.5rem 0.75rem
  borderRadius: 0
  borderLeftWidth: 2
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))

newsletter/community
  padding: 0
  borderRadius: 0
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))

newsletter/community.quote
  padding: 0 0 0 0.75rem
  borderLeftWidth: 2
  fontSize: 0.92em

newsletter/personalNote
  padding: 0.5rem 0 0.5rem 0.75rem
  borderRadius: 0
  borderLeftWidth: 2
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))

newsletter/poll
  padding: 0.625rem 0.75rem
  borderRadius: 0.25rem
  borderWidth: 1
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))

newsletter/poll.question
  fontSize: 0.92em
  fontWeight: 600

newsletter/poll.option
  borderRadius: 0.25rem
  padding: 0.5rem 0.625rem
  borderWidth: 1
  fontSize: 0.88em

newsletter/recommendations
  padding: 0.625rem 0.75rem
  borderRadius: 0.25rem
  borderWidth: 1
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))

newsletter/sponsor
  padding: 0.625rem 0
  borderRadius: 0
  borderTopWidth: 1
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))

newsletter/sponsor.badge
  padding: 0.125rem 0.375rem
  borderRadius: 0.1875rem
  fontSize: 0.55em

newsletter/sponsor.img
  borderRadius: 0.25rem

newsletter/outro
  padding: 1rem 0
  borderRadius: 0
  borderTopWidth: 1
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))

newsletter/outro.cta
  padding: 0.5rem 1.25rem
  borderRadius: 0.25rem
  fontWeight: 600
  fontSize: 0.85em

newsletter/custom
  padding: 0.625rem 0.75rem
  borderRadius: 0.25rem
  borderWidth: 1
  marginBottom: calc(0.75rem * var(--mkly-gap-scale, 1))
`,
},

{
  name: 'soft',
  displayName: 'Newsletter/Soft',
  description: 'Dreamy cloud-like feel — diffuse multi-layer shadows, ultra-round containers, no borders anywhere',
  rawCss: `/* newsletter kit — soft preset */

.mkly-document {
  font-family: 'Nunito', 'Inter', -apple-system, system-ui, sans-serif;
  line-height: calc(1.78 * var(--_lhs, 1));
  padding: 0 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1.06em;
  line-height: calc(1.78 * var(--_lhs, 1));
  margin: 0 0 calc(1.75rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; text-underline-offset: 0.1875rem; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(1.75rem * var(--_gs));
  border: none;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.3125rem 0.875rem;
  border-radius: 6.25rem;
  margin: 1.375rem 1.75rem 0.625rem;
  line-height: 1.2;
  border: none;
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  margin: 0 1.75rem 0.5rem;
  line-height: 1.4;
  font-weight: 500;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.5rem 1.75rem 0.875rem; }
.mkly-newsletter-featured p {
  margin: 0.5rem 1.75rem 0.875rem;
  line-height: calc(1.78 * var(--_lhs, 1));
  font-size: 0.96em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.375rem 1.75rem 1.75rem;
  font-weight: 600;
  font-size: 0.88em;
  text-decoration: none;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding-top: calc(1.75rem * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 1.25rem;
  padding-bottom: 0;
  border-bottom: none;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  border: none;
  border-radius: 1.25rem;
  margin-bottom: calc(1rem * var(--_gs));
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: 100%;
  float: none;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
  padding: 0.9375rem 1.5rem 1.0625rem;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.64em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.75rem;
  border-radius: 6.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  border: none;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  line-height: 1.3;
  margin-bottom: 0.375rem;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 0.5rem;
  line-height: calc(1.78 * var(--_lhs, 1));
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.12em;
  font-weight: 600;
  margin: 0 0 0.5rem;
  line-height: 1.3;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 0.88em;
  text-decoration: none;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1.5rem;
  border: none;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-quickHits__title {
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 1rem;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li {
  margin-bottom: 0.75rem;
  line-height: calc(1.78 * var(--_lhs, 1));
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1.5rem;
  border: none;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-tools__title {
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 1rem;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 0.9375rem 1.75rem;
  border: none;
  border-radius: 1.5rem;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-tipOfTheDay__title {
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.875rem;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; line-height: calc(1.78 * var(--_lhs, 1)); }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  line-height: calc(1.78 * var(--_lhs, 1));
  padding: 0 0 0 1.25rem;
  border: none;
  box-shadow: inset 0.1875rem 0 0 0 currentColor;
  margin-bottom: 0.875rem;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.9em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  font-size: 0.85em;
  font-weight: 500;
  margin-top: 0.875rem;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 0.9375rem 1.5rem 0.9375rem 1.5rem;
  border: none;
  border-radius: 0;
  font-style: italic;
  line-height: calc(1.78 * var(--_lhs, 1));
  box-shadow: inset 0.1875rem 0 0 0 currentColor;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.9em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.25rem 1.75rem;
  border: none;
  border-radius: 1.5rem;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-poll__question {
  font-size: 1em;
  font-weight: 600;
  margin: 0 0 1.125rem;
  line-height: 1.4;
}
.mkly-newsletter-poll__option {
  display: block;
  border: none;
  border-radius: 6.25rem;
  padding: 0.875rem 1.5rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  margin: 0.625rem 0;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04);
  line-height: calc(1.5 * var(--_lhs, 1));
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-radius: 1.5rem;
  border: none;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-recommendations__title {
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 1rem;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li {
  margin-bottom: 0.75rem;
  line-height: calc(1.78 * var(--_lhs, 1));
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border: none;
  border-radius: 1.5rem;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.58em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.875rem;
  border-radius: 6.25rem;
  border: none;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  border-radius: 1rem;
  margin-bottom: 0.875rem;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 0.5rem;
  line-height: calc(1.78 * var(--_lhs, 1));
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 600;
  text-decoration: none;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(1.75rem * var(--_gs));
  text-align: center;
  padding: 1.375rem 1.75rem;
  border: none;
  border-radius: 1.5rem;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-outro p {
  margin: 0 0 0.75rem;
  line-height: calc(1.78 * var(--_lhs, 1));
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  padding: 0.875rem 2.25rem;
  border: none;
  border-radius: 6.25rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 0.75rem;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.08);
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(1.75rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border: none;
  border-radius: 1.5rem;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
}
.mkly-newsletter-custom__title {
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 1rem;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 0.5rem;
  line-height: calc(1.78 * var(--_lhs, 1));
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core blocks ── */
.mkly-core-hero {
  margin-bottom: calc(1.75rem * var(--_gs));
  border: none;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
}
.mkly-core-hero__img { border-radius: 0; }
.mkly-core-hero__content { padding: 1.75rem; }

.mkly-core-heading {
  margin-bottom: calc(1rem * var(--_gs));
  font-weight: 600;
}

.mkly-core-text {
  margin-bottom: calc(1rem * var(--_gs));
  line-height: calc(1.78 * var(--_lhs, 1));
}

.mkly-core-image {
  margin-bottom: calc(1.5rem * var(--_gs));
  border-radius: 1.25rem;
}
.mkly-core-image__img {
  border-radius: 1.25rem;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
}

.mkly-core-quote {
  padding: 1.375rem 1.5rem 1.375rem 1.5rem;
  border: none;
  margin-bottom: calc(1.5rem * var(--_gs));
  font-style: italic;
  border-radius: 0;
  box-shadow: inset 0.1875rem 0 0 0 currentColor;
}

.mkly-core-code {
  border-radius: 1.25rem;
  padding: 1.375rem 1.5rem;
  margin-bottom: calc(1.5rem * var(--_gs));
  border: none;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
}

.mkly-core-list {
  margin-bottom: calc(1.25rem * var(--_gs));
  padding-left: 1.4em;
}

.mkly-core-button {
  margin-bottom: calc(1.25rem * var(--_gs));
}
.mkly-core-button__link {
  padding: 0.875rem 2.25rem;
  border-radius: 6.25rem;
  border: none;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.08);
}

.mkly-core-section {
  margin-bottom: calc(1.75rem * var(--_gs));
}
.mkly-core-section__title {
  padding-bottom: 0;
  margin-bottom: 1.25rem;
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-bottom: none;
}

.mkly-core-divider {
  margin: calc(1.5rem * var(--_gs)) 0;
  height: 0.0625rem;
  border: none;
  opacity: 0.15;
}

.mkly-core-card {
  border-radius: 1.5rem;
  overflow: hidden;
  margin-bottom: calc(1.25rem * var(--_gs));
  border: none;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
}
.mkly-core-card__body {
  padding: 1.5rem 1.75rem;
}

.mkly-core-header {
  padding-bottom: 1.25rem;
  margin-bottom: calc(1.75rem * var(--_gs));
  border-bottom: none;
}

.mkly-core-footer {
  padding-top: 1.75rem;
  margin-top: calc(2rem * var(--_gs));
  border-top: none;
  text-align: center;
  font-size: 0.85em;
  background: none;
}
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer a { font-weight: 600; }

.mkly-core-cta {
  text-align: center;
  margin-top: calc(2rem * var(--_gs));
  margin-bottom: calc(2rem * var(--_gs));
  padding: 2rem 1.75rem;
  border-radius: 1.5rem;
  border: none;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04);
}
.mkly-core-cta p { margin: 0 0 0.75rem; line-height: calc(1.78 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  padding: 0.875rem 2.25rem;
  border-radius: 6.25rem;
  border: none;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.08);
}
`,
  css: `core/image.img
  borderRadius: 1.25rem
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)

core/button.link
  padding: 0.875rem 2.25rem
  borderRadius: 6.25rem
  fontWeight: 600
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.08)

core/code
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderRadius: 1.25rem
  padding: 0.875rem 1.5rem
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)

core/quote
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.5rem 0.875rem 1.5rem
  borderRadius: 0
  boxShadow: inset 0.1875rem 0 0 0 currentColor

core/hero
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderRadius: 1.5rem
  overflow: hidden
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 1.125rem 1.75rem

core/heading
  marginBottom: calc(1rem * var(--mkly-gap-scale, 1))
  fontWeight: 600

core/text
  marginBottom: calc(1rem * var(--mkly-gap-scale, 1))
  lineHeight: calc(1.78 * var(--mkly-line-height-scale, 1))

core/image
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 1.25rem

core/list
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  paddingLeft: 1.4em

core/section
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

core/section.title
  paddingBottom: 0
  fontSize: 0.72em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.1em

core/divider
  marginTop: calc(1.5rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  opacity: 0.15

core/card
  borderRadius: 1.5rem
  overflow: hidden
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)

core/card.body
  padding: 1rem 1.75rem

core/header
  paddingBottom: 1.125rem

core/footer
  paddingTop: 1.125rem
  marginTop: calc(2rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(2rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.3125rem 1.75rem
  borderRadius: 1.5rem
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)

core/cta.button
  padding: 0.875rem 2.25rem
  borderRadius: 6.25rem
  fontWeight: 600
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.08)

core/button
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))

newsletter/intro
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  fontSize: 1.06em

newsletter/featured
  borderRadius: 1.5rem
  overflow: hidden
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)

newsletter/featured.source
  padding: 0.3125rem 0.875rem
  borderRadius: 6.25rem
  fontSize: 0.68em

newsletter/featured.img
  width: 100%

newsletter/featured.author
  fontSize: 0.84em

newsletter/featured.link
  fontSize: 0.88em

newsletter/category
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(1.75rem * var(--mkly-gap-scale, 1))

newsletter/category.title
  paddingBottom: 0
  fontSize: 0.72em

newsletter/item
  borderRadius: 1.25rem
  marginBottom: calc(1rem * var(--mkly-gap-scale, 1))
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  width: 100%
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0
  padding: 0.875rem 1.5rem 1rem

newsletter/item.meta
  fontSize: 0.72em

newsletter/item.source
  padding: 0.25rem 0.75rem
  borderRadius: 6.25rem
  fontSize: 0.64em

newsletter/quickHits
  padding: 1rem 1.75rem
  borderRadius: 1.5rem
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)

newsletter/tools
  padding: 1rem 1.75rem
  borderRadius: 1.5rem
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)

newsletter/tipOfTheDay
  padding: 0.875rem 1.75rem
  borderRadius: 1.5rem
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)

newsletter/community
  padding: 0
  borderRadius: 0
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

newsletter/community.quote
  padding: 0 0 0 1.25rem
  boxShadow: inset 0.1875rem 0 0 0 currentColor

newsletter/personalNote
  padding: 0.875rem 1.5rem
  borderRadius: 0
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  boxShadow: inset 0.1875rem 0 0 0 currentColor

newsletter/poll
  padding: 1.125rem 1.75rem
  borderRadius: 1.5rem
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)

newsletter/poll.question
  fontSize: 1em
  fontWeight: 600

newsletter/poll.option
  borderRadius: 6.25rem
  padding: 0.875rem 1.5rem
  boxShadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04)

newsletter/recommendations
  padding: 1rem 1.75rem
  borderRadius: 1.5rem
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)

newsletter/sponsor
  padding: 1rem 1.75rem
  borderRadius: 1.5rem
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)

newsletter/sponsor.badge
  padding: 0.25rem 0.875rem
  borderRadius: 6.25rem
  fontSize: 0.58em

newsletter/sponsor.img
  borderRadius: 1rem

newsletter/outro
  padding: 1.3125rem 1.75rem
  borderRadius: 1.5rem
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)

newsletter/outro.cta
  padding: 0.875rem 2.25rem
  borderRadius: 6.25rem
  fontWeight: 600
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.08)

newsletter/custom
  padding: 1rem 1.75rem
  borderRadius: 1.5rem
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  boxShadow: 0 0.25rem 1rem rgba(0,0,0,0.03), 0 0.75rem 2.5rem rgba(0,0,0,0.04)
`,
},

{
  name: 'typewriter',
  displayName: 'Newsletter/Typewriter',
  description: 'Authentic typewriter manuscript feel — monospaced font, text indents, dashed borders, zero radius',
  rawCss: `/* newsletter kit — typewriter preset */

.mkly-document {
  font-family: 'Courier Prime', 'Courier New', monospace;
  line-height: calc(1.75 * var(--_lhs, 1));
  letter-spacing: 0.02em;
  padding: 0 1.5rem;
  -webkit-font-smoothing: auto;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
  letter-spacing: 0.02em;
  line-height: 1.3;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1em;
  line-height: calc(1.75 * var(--_lhs, 1));
  margin: 0 0 calc(2rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; text-indent: 2em; }
.mkly-newsletter-intro p:first-child { text-indent: 0; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 700; text-decoration: underline; text-underline-offset: 0.1875rem; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(2rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: dashed;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.125rem 0;
  border-radius: 0;
  border: none;
  text-decoration: underline;
  text-underline-offset: 0.125rem;
  margin: 1.25rem 1.25rem 0.5rem;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.85em;
  margin: 0 1.25rem 0.5rem;
  line-height: 1.4;
  font-weight: 400;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.5rem 1.25rem 0.875rem; }
.mkly-newsletter-featured p {
  margin: 0.5rem 1.25rem 0.875rem;
  line-height: calc(1.75 * var(--_lhs, 1));
  text-indent: 2em;
}
.mkly-newsletter-featured p:first-of-type { text-indent: 0; }
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.375rem 1.25rem 1.25rem;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 0.1875rem;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(2rem * var(--_gs));
  padding-top: calc(2rem * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.85em;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  margin: 0 0 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom-width: 0.0625rem;
  border-bottom-style: dashed;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}

/* ── item ── */
.mkly-newsletter-item {
  border: none;
  border-bottom-width: 0.0625rem;
  border-bottom-style: dashed;
  border-radius: 0;
  margin-bottom: 0;
  box-shadow: none;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; border-bottom: none; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: 100%;
  float: none;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
  padding: 1.125rem 0 1.25rem;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0;
  border-radius: 0;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  text-decoration: underline;
  text-underline-offset: 0.125rem;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  line-height: 1.4;
  margin-bottom: 0.375rem;
  opacity: 0.6;
}
.mkly-newsletter-item p {
  margin: 0 0 0.5rem;
  line-height: calc(1.75 * var(--_lhs, 1));
  text-indent: 2em;
}
.mkly-newsletter-item p:first-of-type { text-indent: 0; }
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.1em;
  font-weight: 700;
  margin: 0 0 0.5rem;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 0.1875rem;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 0.875rem 1.25rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: dashed;
  box-shadow: none;
}
.mkly-newsletter-quickHits__title {
  font-size: 0.85em;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  margin: 0 0 1rem;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 2em; text-indent: -0.5em; list-style: none; }
.mkly-newsletter-quickHits li {
  margin-bottom: 0.625rem;
  line-height: calc(1.75 * var(--_lhs, 1));
}
.mkly-newsletter-quickHits li::before {
  content: '-- ';
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 700; text-decoration: underline; text-underline-offset: 0.1875rem; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 0.875rem 1.25rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: dashed;
  box-shadow: none;
}
.mkly-newsletter-tools__title {
  font-size: 0.85em;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  margin: 0 0 1rem;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1rem 0 1rem 1.5rem;
  border: none;
  border-left-width: 0.0625rem;
  border-left-style: dashed;
  border-radius: 0;
}
.mkly-newsletter-tipOfTheDay__title {
  font-size: 0.85em;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  margin: 0 0 0.875rem;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; line-height: calc(1.75 * var(--_lhs, 1)); text-indent: 2em; }
.mkly-newsletter-tipOfTheDay p:first-of-type { text-indent: 0; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  line-height: calc(1.75 * var(--_lhs, 1));
  padding: 0 0 0 1.5rem;
  border-left-width: 0.0625rem;
  border-left-style: dashed;
  margin-bottom: 0.875rem;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.9em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  font-size: 0.85em;
  font-weight: 400;
  margin-top: 0.875rem;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1rem 0 1rem 1.5rem;
  border: none;
  border-left-width: 0.0625rem;
  border-left-style: dashed;
  border-radius: 0;
  font-style: italic;
  line-height: calc(1.75 * var(--_lhs, 1));
}
.mkly-newsletter-personalNote p { margin: 0 0 0.9em; text-indent: 2em; }
.mkly-newsletter-personalNote p:first-child { text-indent: 0; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 0.875rem 1.25rem;
  border-width: 0.0625rem;
  border-style: dashed;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-poll__question {
  font-size: 1em;
  font-weight: 700;
  margin: 0 0 1.125rem;
  line-height: 1.4;
}
.mkly-newsletter-poll__option {
  display: block;
  border-width: 0.0625rem;
  border-style: dashed;
  border-radius: 0;
  padding: 0.75rem 1rem;
  font-weight: 400;
  text-align: left;
  cursor: pointer;
  margin: 0.5rem 0;
  box-shadow: none;
  line-height: calc(1.5 * var(--_lhs, 1));
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 0.875rem 1.25rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: dashed;
  box-shadow: none;
}
.mkly-newsletter-recommendations__title {
  font-size: 0.85em;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  margin: 0 0 1rem;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 2em; text-indent: -0.5em; list-style: none; }
.mkly-newsletter-recommendations li {
  margin-bottom: 0.625rem;
  line-height: calc(1.75 * var(--_lhs, 1));
}
.mkly-newsletter-recommendations li::before {
  content: '-- ';
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 700; text-decoration: underline; text-underline-offset: 0.1875rem; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 0.875rem 0;
  border: none;
  border-top-width: 0.0625rem;
  border-top-style: dashed;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.62em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0;
  border-radius: 0;
  border: none;
  text-decoration: underline;
  text-underline-offset: 0.125rem;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  border-radius: 0;
  margin-bottom: 0.875rem;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 0.5rem;
  line-height: calc(1.75 * var(--_lhs, 1));
  text-indent: 2em;
}
.mkly-newsletter-sponsor p:first-of-type { text-indent: 0; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 0.1875rem;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(2rem * var(--_gs));
  text-align: center;
  padding: 1.25rem 0;
  border: none;
  border-top-width: 0.0625rem;
  border-top-style: dashed;
  border-radius: 0;
}
.mkly-newsletter-outro p {
  margin: 0 0 0.75rem;
  line-height: calc(1.75 * var(--_lhs, 1));
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  padding: 0.75rem 1.75rem;
  border-width: 0.0625rem;
  border-style: dashed;
  border-radius: 0;
  font-weight: 700;
  text-decoration: none;
  margin-top: 0.75rem;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 0.875rem 1.25rem;
  border-width: 0.0625rem;
  border-style: dashed;
  border-radius: 0;
}
.mkly-newsletter-custom__title {
  font-size: 0.85em;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  margin: 0 0 1rem;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}
.mkly-newsletter-custom p {
  margin: 0 0 0.5rem;
  line-height: calc(1.75 * var(--_lhs, 1));
  text-indent: 2em;
}
.mkly-newsletter-custom p:first-of-type { text-indent: 0; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core blocks ── */
.mkly-core-hero {
  margin-bottom: calc(2rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: dashed;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
}
.mkly-core-hero__img { border-radius: 0; }
.mkly-core-hero__content { padding: 1.5rem 1.25rem; }

.mkly-core-heading {
  margin-bottom: calc(1.25rem * var(--_gs));
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}

.mkly-core-text {
  margin-bottom: calc(1.25rem * var(--_gs));
  line-height: calc(1.75 * var(--_lhs, 1));
}
.mkly-core-text p { text-indent: 2em; }
.mkly-core-text p:first-child { text-indent: 0; }

.mkly-core-image {
  margin-bottom: calc(1.75rem * var(--_gs));
  border-radius: 0;
}
.mkly-core-image__img {
  border-radius: 0;
  box-shadow: none;
}

.mkly-core-quote {
  padding: 1rem 0 1rem 1.5rem;
  border-left-width: 0.0625rem;
  border-left-style: dashed;
  margin-bottom: calc(1.75rem * var(--_gs));
  font-style: italic;
  border-radius: 0;
}

.mkly-core-code {
  border-radius: 0;
  padding: 1.25rem;
  margin-bottom: calc(1.5rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: dashed;
}

.mkly-core-list {
  margin-bottom: calc(1.5rem * var(--_gs));
  padding-left: 2em;
  text-indent: -0.5em;
  list-style: none;
}

.mkly-core-button {
  margin-bottom: calc(1.5rem * var(--_gs));
}
.mkly-core-button__link {
  padding: 0.75rem 1.75rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: dashed;
  font-weight: 700;
  text-decoration: none;
}

.mkly-core-section {
  margin-bottom: calc(2rem * var(--_gs));
}
.mkly-core-section__title {
  padding-bottom: 0.5rem;
  margin-bottom: 1.25rem;
  font-size: 0.85em;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  border-bottom-width: 0.0625rem;
  border-bottom-style: dashed;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}

.mkly-core-divider {
  margin: calc(1.75rem * var(--_gs)) 0;
  height: 0;
  border: none;
  border-bottom-width: 0.0625rem;
  border-bottom-style: dashed;
}

.mkly-core-card {
  border-radius: 0;
  overflow: hidden;
  margin-bottom: calc(1.5rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: dashed;
  box-shadow: none;
}
.mkly-core-card__body {
  padding: 1.25rem;
}

.mkly-core-header {
  padding-bottom: 1.0625rem;
  margin-bottom: calc(1.75rem * var(--_gs));
  border-bottom-width: 0.0625rem;
  border-bottom-style: dashed;
}

.mkly-core-footer {
  padding-top: 1.5rem;
  margin-top: calc(2rem * var(--_gs));
  border-top-width: 0.0625rem;
  border-top-style: dashed;
  text-align: center;
  font-size: 0.85em;
  background: none;
}
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer a { font-weight: 700; text-decoration: underline; text-underline-offset: 0.1875rem; }

.mkly-core-cta {
  text-align: center;
  margin-top: calc(2rem * var(--_gs));
  margin-bottom: calc(2rem * var(--_gs));
  padding: 1.75rem 0;
  border-radius: 0;
  border: none;
  border-top-width: 0.0625rem;
  border-top-style: dashed;
}
.mkly-core-cta p { margin: 0 0 0.75rem; line-height: calc(1.75 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  padding: 0.75rem 1.75rem;
  border-radius: 0;
  border-width: 0.0625rem;
  border-style: dashed;
  font-weight: 700;
  text-decoration: none;
}
`,
  css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 0.75rem 1.75rem
  borderRadius: 0
  fontWeight: 700
  borderStyle: dashed

core/code
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  padding: 0.875rem 1.25rem
  borderWidth: 1
  borderStyle: dashed

core/quote
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1rem 0 1rem 1.5rem
  borderLeftWidth: 1
  borderLeftStyle: dashed

core/hero
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden
  borderWidth: 1
  borderStyle: dashed

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 1rem 1.25rem

core/heading
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  fontWeight: 700
  textDecoration: underline
  textUnderlineOffset: 0.25rem

core/text
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  lineHeight: calc(1.75 * var(--mkly-line-height-scale, 1))

core/image
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderRadius: 0

core/list
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  paddingLeft: 2em

core/section
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

core/section.title
  paddingBottom: 0.5rem
  fontSize: 0.85em
  fontWeight: 700
  letterSpacing: 0.02em
  borderBottomWidth: 1
  borderBottomStyle: dashed
  textDecoration: underline
  textUnderlineOffset: 0.25rem

core/divider
  marginTop: calc(1.75rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))
  borderBottomWidth: 1
  borderBottomStyle: dashed

core/card
  borderRadius: 0
  overflow: hidden
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  borderWidth: 1
  borderStyle: dashed

core/card.body
  padding: 0.875rem 1.25rem

core/header
  paddingBottom: 1rem
  borderBottomWidth: 1
  borderBottomStyle: dashed

core/footer
  paddingTop: 1rem
  marginTop: calc(2rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none
  borderTopWidth: 1
  borderTopStyle: dashed

core/cta
  textAlign: center
  marginTop: calc(2rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 0
  borderRadius: 0
  borderTopWidth: 1
  borderTopStyle: dashed

core/cta.button
  padding: 0.75rem 1.75rem
  borderRadius: 0
  fontWeight: 700
  borderStyle: dashed

core/button
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))

newsletter/intro
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  fontSize: 1em

newsletter/featured
  borderRadius: 0
  overflow: hidden
  borderWidth: 1
  borderStyle: dashed
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/featured.source
  padding: 0.125rem 0
  borderRadius: 0
  fontSize: 0.72em
  textDecoration: underline

newsletter/featured.img
  width: 100%

newsletter/featured.author
  fontSize: 0.85em

newsletter/featured.link
  fontWeight: 700
  textDecoration: underline

newsletter/category
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/category.title
  paddingBottom: 0.5rem
  borderBottomWidth: 1
  borderBottomStyle: dashed
  fontSize: 0.85em
  fontWeight: 700
  textDecoration: underline
  textUnderlineOffset: 0.25rem

newsletter/item
  marginBottom: calc(1rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  borderBottomWidth: 1
  borderBottomStyle: dashed
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  width: 100%
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0
  padding: 0.75rem 0 0.8125rem

newsletter/item.meta
  fontSize: 0.72em

newsletter/item.source
  padding: 0
  borderRadius: 0
  fontSize: 0.68em
  textDecoration: underline

newsletter/quickHits
  padding: 0.875rem 1.25rem
  borderRadius: 0
  borderWidth: 1
  borderStyle: dashed
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/tools
  padding: 0.875rem 1.25rem
  borderRadius: 0
  borderWidth: 1
  borderStyle: dashed
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/tipOfTheDay
  padding: 1rem 0 1rem 1.5rem
  borderRadius: 0
  borderLeftWidth: 1
  borderLeftStyle: dashed
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/community
  padding: 0
  borderRadius: 0
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/community.quote
  padding: 0 0 0 1.5rem
  borderLeftWidth: 1
  borderLeftStyle: dashed

newsletter/personalNote
  padding: 1rem 0 1rem 1.5rem
  borderRadius: 0
  borderLeftWidth: 1
  borderLeftStyle: dashed
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/poll
  padding: 0.875rem 1.25rem
  borderRadius: 0
  borderWidth: 1
  borderStyle: dashed
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/poll.question
  fontSize: 1em
  fontWeight: 700

newsletter/poll.option
  borderRadius: 0
  padding: 0.75rem 1rem
  borderWidth: 1
  borderStyle: dashed
  textAlign: left

newsletter/recommendations
  padding: 0.875rem 1.25rem
  borderRadius: 0
  borderWidth: 1
  borderStyle: dashed
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/sponsor
  padding: 0.875rem 0
  borderRadius: 0
  borderTopWidth: 1
  borderTopStyle: dashed
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/sponsor.badge
  padding: 0
  borderRadius: 0
  fontSize: 0.62em
  textDecoration: underline

newsletter/sponsor.img
  borderRadius: 0

newsletter/outro
  padding: 1.125rem 0
  borderRadius: 0
  borderTopWidth: 1
  borderTopStyle: dashed
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/outro.cta
  padding: 0.75rem 1.75rem
  borderRadius: 0
  fontWeight: 700
  borderStyle: dashed

newsletter/custom
  padding: 0.875rem 1.25rem
  borderRadius: 0
  borderWidth: 1
  borderStyle: dashed
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
`,
},

{
  name: 'bold',
  displayName: 'Newsletter/Bold',
  description: 'Maximum visual impact — weight 900 headings, thick 0.1875rem borders, strong shadows, huge CTA buttons',
  rawCss: `/* newsletter kit — bold preset */

.mkly-document {
  font-family: 'Sora', 'Inter', -apple-system, system-ui, sans-serif;
  padding: 0 1.5rem;
  -webkit-font-smoothing: antialiased;
  font-weight: 500;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.1;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1.12em;
  line-height: calc(1.7 * var(--_lhs, 1));
  font-weight: 500;
  margin: 0 0 calc(2rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 700; text-decoration-thickness: 0.0938rem; text-underline-offset: 0.125rem; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(2rem * var(--_gs));
  border-width: 0.1875rem;
  border-style: solid;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.375rem 1.5rem rgba(0,0,0,0.12);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.375rem 0.875rem;
  border-radius: 0.375rem;
  margin: 1.375rem 1.5rem 0.625rem;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.86em;
  font-weight: 600;
  margin: 0 1.5rem 0.5rem;
  line-height: 1.4;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.5rem 1.5rem 0.875rem; }
.mkly-newsletter-featured p {
  margin: 0.5rem 1.5rem 0.875rem;
  line-height: calc(1.65 * var(--_lhs, 1));
  font-size: 0.96em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.375rem 1.5rem 1.5rem;
  font-weight: 800;
  font-size: 0.92em;
  text-decoration: none;
  letter-spacing: 0.01em;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(2rem * var(--_gs));
  padding-top: calc(2rem * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.85em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 1.375rem;
  padding-bottom: 0.875rem;
  border-bottom-width: 0.1875rem;
  border-bottom-style: solid;
  line-height: 1.1;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 0;
  border-width: 0.1875rem;
  border-style: solid;
  border-radius: 0.5rem;
  margin-bottom: calc(1.125rem * var(--_gs));
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.08);
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: 100%;
  float: none;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 0;
  display: block;
}
.mkly-newsletter-item__body {
  padding: 1.125rem 1.375rem 0.9375rem;
  overflow: visible;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.65em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.625rem;
  border-radius: 0.3125rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 0.375rem;
}
.mkly-newsletter-item p {
  margin: 0 0 0.5rem;
  line-height: calc(1.6 * var(--_lhs, 1));
  font-size: 0.95em;
  font-weight: 500;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.18em;
  font-weight: 900;
  margin: 0 0 0.375rem;
  line-height: 1.15;
  letter-spacing: -0.03em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.88em;
  font-weight: 800;
  text-decoration: none;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.0625rem 1.625rem;
  border-radius: 0.5rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.06);
}
.mkly-newsletter-quickHits__title {
  font-size: 0.78em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 1rem;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li {
  margin-bottom: 0.625rem;
  line-height: calc(1.6 * var(--_lhs, 1));
  font-size: 0.95em;
  font-weight: 500;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 700; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.0625rem 1.625rem;
  border-radius: 0.5rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.06);
}
.mkly-newsletter-tools__title {
  font-size: 0.78em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 1rem;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.0625rem 1.625rem;
  border-left-width: 0.375rem;
  border-left-style: solid;
  border-radius: 0 0.5rem 0.5rem 0;
  line-height: calc(1.68 * var(--_lhs, 1));
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.06);
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 0.625rem;
  font-weight: 900;
  font-size: 0.78em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; font-size: 0.95em; font-weight: 500; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.0625rem 1.625rem;
  border-radius: 0.5rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.06);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 1.125rem 0 1.125rem 1.375rem;
  border-left-width: 0.25rem;
  border-left-style: solid;
  line-height: calc(1.72 * var(--_lhs, 1));
  font-size: 1.06em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 0.875rem;
  font-size: 0.86em;
  font-style: normal;
  font-weight: 800;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.0625rem 1.625rem;
  font-style: italic;
  border-radius: 0.5rem;
  border-width: 0.0625rem;
  border-style: solid;
  line-height: calc(1.72 * var(--_lhs, 1));
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.06);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.25rem 1.75rem;
  border-radius: 0.5rem;
  border-width: 0.1875rem;
  border-style: solid;
  box-shadow: 0 0.375rem 1.5rem rgba(0,0,0,0.08);
}
.mkly-newsletter-poll__question {
  font-size: 1.18em;
  font-weight: 900;
  margin: 0 0 1.25rem;
  line-height: 1.15;
  letter-spacing: -0.02em;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 0.625rem 0;
  padding: 1rem 1.375rem;
  font-size: 0.95em;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.5rem;
  transition: transform 0.15s, box-shadow 0.15s;
  line-height: 1.3;
  text-align: center;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.06);
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.0625rem 1.625rem;
  border-radius: 0.5rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.06);
}
.mkly-newsletter-recommendations__title {
  font-size: 0.78em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 1rem;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li {
  margin-bottom: 0.625rem;
  line-height: calc(1.6 * var(--_lhs, 1));
  font-size: 0.95em;
  font-weight: 500;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 700; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.0625rem 1.625rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.62em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.75rem;
  border-radius: 0.3125rem;
  margin-bottom: 0.875rem;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 1rem;
  border-radius: 0.375rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,0.08);
}
.mkly-newsletter-sponsor p {
  margin: 0 0 0.625rem;
  line-height: calc(1.68 * var(--_lhs, 1));
  font-size: 0.95em;
  font-weight: 500;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.625rem;
  font-weight: 800;
  font-size: 0.92em;
  text-decoration: none;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(2rem * var(--_gs));
  text-align: center;
  padding: 1.5625rem 1.75rem;
  border-radius: 0.5rem;
}
.mkly-newsletter-outro p {
  margin: 0 0 0.625rem;
  line-height: calc(1.65 * var(--_lhs, 1));
  font-size: 1.06em;
  font-weight: 500;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 1.25rem;
  font-weight: 800;
  font-size: 1em;
  text-decoration: none !important;
  padding: 1.125rem 3rem;
  border-radius: 0.5rem;
  letter-spacing: 0.01em;
  line-height: 1.3;
  box-shadow: 0 0.375rem 1.5rem rgba(0,0,0,0.12);
  transition: transform 0.15s, box-shadow 0.15s;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.0625rem 1.625rem;
  border-radius: 0.5rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.06);
}
.mkly-newsletter-custom__title {
  font-size: 0.78em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 1rem;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 0.625rem;
  line-height: calc(1.68 * var(--_lhs, 1));
  font-size: 0.95em;
  font-weight: 500;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(2rem * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-divider { margin: calc(2rem * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(2rem * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(2rem * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 0.5rem; font-size: 1.05em; line-height: calc(1.6 * var(--_lhs, 1)); font-weight: 500; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 1rem;
  padding: 1.125rem 3rem;
  border-radius: 0.5rem;
  font-weight: 800;
  font-size: 1rem;
  text-decoration: none !important;
  line-height: 1.4;
  box-shadow: 0 0.375rem 1.5rem rgba(0,0,0,0.12);
}
.mkly-core-footer { margin-top: calc(2rem * var(--_gs)); text-align: center; font-size: 0.85em; line-height: calc(1.6 * var(--_lhs, 1)); font-weight: 500; }
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
  css: `core/image.img
  borderRadius: 0.5rem

core/button.link
  padding: 1.125rem 3rem
  borderRadius: 0.5rem
  fontWeight: 800

core/code
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  borderRadius: 0.5rem
  padding: 0.875rem 1.625rem

core/quote
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.625rem
  borderLeftWidth: 0.25rem

core/hero
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  borderRadius: 0.5rem
  overflow: hidden

core/hero.img
  borderRadius: 0.5rem

core/hero.content
  padding: 1.3125rem 1.75rem

core/section.title
  paddingBottom: 0.875rem
  fontSize: 0.85em
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.06em

core/card
  borderRadius: 0.5rem
  overflow: hidden
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))

core/card.body
  padding: 1.0625rem 1.625rem

core/header
  paddingBottom: 1rem

core/footer
  paddingTop: 1rem
  marginTop: calc(2rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em

core/cta
  textAlign: center
  marginTop: calc(2rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 1.75rem
  borderRadius: 0.5rem

core/cta.button
  padding: 1.125rem 3rem
  borderRadius: 0.5rem
  fontWeight: 800

newsletter/featured
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  borderRadius: 0.5rem
  overflow: hidden

newsletter/featured.source
  padding: 0.375rem 0.875rem
  borderRadius: 0.375rem

newsletter/category.title
  paddingBottom: 0.875rem

newsletter/item
  marginBottom: calc(1rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0.5rem
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  padding: 0.75rem 1.375rem 0.875rem

newsletter/item.meta
  fontSize: 0.72em

newsletter/quickHits
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.625rem
  borderRadius: 0.5rem

newsletter/tools
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.625rem
  borderRadius: 0.5rem

newsletter/tipOfTheDay
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.625rem
  borderRadius: 0 0.5rem 0.5rem 0

newsletter/community
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.625rem
  borderRadius: 0.5rem

newsletter/community.quote
  padding: 0.75rem 0 0.75rem 1.375rem

newsletter/personalNote
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.625rem
  borderRadius: 0.5rem

newsletter/poll
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 1.75rem
  borderRadius: 0.5rem

newsletter/poll.option
  padding: 1rem 1.375rem
  borderRadius: 0.5rem

newsletter/recommendations
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.625rem
  borderRadius: 0.5rem

newsletter/sponsor
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.625rem
  borderRadius: 0.5rem

newsletter/sponsor.badge
  padding: 0.25rem 0.75rem
  borderRadius: 0.3125rem

newsletter/sponsor.img
  borderRadius: 0.375rem

newsletter/outro
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 1.75rem
  borderRadius: 0.5rem

newsletter/outro.cta
  padding: 1.125rem 3rem
  borderRadius: 0.5rem

newsletter/custom
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.625rem
  borderRadius: 0.5rem
newsletter/intro
  fontSize: 1.12em
  lineHeight: calc(1.7 * var(--mkly-line-height-scale, 1))
  fontWeight: 500
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(2rem * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(2rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
`,
},

{
  name: 'airy',
  displayName: 'Newsletter/Airy',
  description: 'Pure negative space — NO borders, NO shadows, typography-only hierarchy, massive whitespace',
  rawCss: `/* newsletter kit — airy preset */

.mkly-document {
  font-family: 'General Sans', 'Inter', system-ui, sans-serif;
  padding: 0 1.5rem;
  -webkit-font-smoothing: antialiased;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1.1em;
  line-height: calc(1.82 * var(--_lhs, 1));
  margin: 0 0 calc(3rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 500; text-decoration: underline; text-underline-offset: 0.1875rem; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(3rem * var(--_gs));
  border: none;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline;
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.5;
  padding: 0;
  border: none;
  border-radius: 0;
  margin: 1.5rem 0 0.625rem;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  opacity: 0.5;
  font-weight: 400;
  margin: 0 0 0.625rem;
  line-height: 1.4;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.625rem 0 1rem; }
.mkly-newsletter-featured p {
  margin: 0.625rem 0 1rem;
  line-height: calc(1.82 * var(--_lhs, 1));
  font-size: 1em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.5rem 0 0;
  font-weight: 500;
  font-size: 0.9em;
  text-decoration: underline;
  text-underline-offset: 0.1875rem;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(3rem * var(--_gs));
  padding-top: calc(3rem * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 1.1em;
  font-weight: 600;
  text-transform: none;
  letter-spacing: -0.01em;
  margin: 0 0 1.75rem;
  padding-bottom: 0;
  border-bottom: none;
  line-height: 1.25;
}

/* ── item ── */
.mkly-newsletter-item {
  border: none;
  border-radius: 0;
  margin-bottom: calc(2.5rem * var(--_gs));
  box-shadow: none;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item__img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
  padding: 1.25rem 0 0;
}
.mkly-newsletter-item__source {
  display: inline;
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.5;
  padding: 0;
  border: none;
  border-radius: 0;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  line-height: 1.3;
  margin-bottom: 0.375rem;
  opacity: 0.4;
}
.mkly-newsletter-item p {
  margin: 0 0 0.5rem;
  line-height: calc(1.75 * var(--_lhs, 1));
  font-size: 0.96em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.1em;
  font-weight: 600;
  margin: 0 0 0.375rem;
  line-height: 1.25;
  letter-spacing: -0.015em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.88em;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 0.1875rem;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-quickHits__title {
  font-size: 1em;
  font-weight: 600;
  text-transform: none;
  letter-spacing: -0.01em;
  margin: 0 0 1.25rem;
  line-height: 1.25;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li {
  margin-bottom: 0.75rem;
  line-height: calc(1.72 * var(--_lhs, 1));
  font-size: 0.96em;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 500; text-decoration: underline; text-underline-offset: 0.125rem; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-tools__title {
  font-size: 1em;
  font-weight: 600;
  text-transform: none;
  letter-spacing: -0.01em;
  margin: 0 0 1.25rem;
  line-height: 1.25;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  line-height: calc(1.68 * var(--_lhs, 1));
  box-shadow: none;
}
.mkly-newsletter-tipOfTheDay__title {
  display: inline;
  margin-bottom: 0.75rem;
  font-weight: 600;
  font-size: 0.72em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.5;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; font-size: 0.96em; line-height: calc(1.75 * var(--_lhs, 1)); }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 0;
  border-left: none;
  line-height: calc(1.82 * var(--_lhs, 1));
  font-size: 1.15em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.6em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 1rem;
  font-size: 0.86em;
  font-style: normal;
  font-weight: 500;
  opacity: 0.6;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 0;
  font-style: italic;
  border: none;
  border-radius: 0;
  line-height: calc(1.82 * var(--_lhs, 1));
  box-shadow: none;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-poll__question {
  font-size: 1.12em;
  font-weight: 600;
  margin: 0 0 1.375rem;
  line-height: 1.25;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 0;
  padding: 0.875rem 0;
  font-size: 0.96em;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-bottom: 0.0625rem solid;
  border-radius: 0;
  transition: opacity 0.2s;
  line-height: 1.4;
  text-align: left;
  box-shadow: none;
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-recommendations__title {
  font-size: 1em;
  font-weight: 600;
  text-transform: none;
  letter-spacing: -0.01em;
  margin: 0 0 1.25rem;
  line-height: 1.25;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li {
  margin-bottom: 0.75rem;
  line-height: calc(1.72 * var(--_lhs, 1));
  font-size: 0.96em;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 500; text-decoration: underline; text-underline-offset: 0.125rem; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-sponsor__badge {
  display: inline;
  font-size: 0.6em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.4;
  padding: 0;
  border: none;
  border-radius: 0;
  margin-bottom: 0.875rem;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 1rem;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 0.625rem;
  line-height: calc(1.68 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.625rem;
  font-weight: 500;
  font-size: 0.9em;
  text-decoration: underline;
  text-underline-offset: 0.1875rem;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(3rem * var(--_gs));
  text-align: center;
  padding: 0;
  border: none;
  box-shadow: none;
}
.mkly-newsletter-outro p {
  margin: 0 0 0.625rem;
  line-height: calc(1.75 * var(--_lhs, 1));
  font-size: 1.06em;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 1.25rem;
  font-weight: 600;
  font-size: 0.92em;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
  text-decoration-thickness: 0.125rem;
  padding: 0;
  border: none;
  border-radius: 0;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: none;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-custom__title {
  font-size: 1em;
  font-weight: 600;
  text-transform: none;
  letter-spacing: -0.01em;
  margin: 0 0 1.25rem;
  line-height: 1.25;
}
.mkly-newsletter-custom p {
  margin: 0 0 0.625rem;
  line-height: calc(1.68 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(3rem * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-divider { margin: calc(3rem * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(3rem * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(3rem * var(--_gs)) 0; padding: 0; border: none; border-radius: 0; }
.mkly-core-cta p { margin: 0 0 0.5rem; font-size: 1.05em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0;
  border: none;
  border-radius: 0;
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: underline;
  text-underline-offset: 0.25rem;
  text-decoration-thickness: 0.125rem;
  line-height: 1.4;
  box-shadow: none;
}
.mkly-core-footer { margin-top: calc(3rem * var(--_gs)); text-align: center; font-size: 0.85em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
  css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 0
  borderRadius: 0
  fontWeight: 600
  textDecoration: underline
  textUnderlineOffset: 0.25rem

core/code
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  padding: 0
  border: none

core/quote
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderLeft: none

core/hero
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 0

core/section.title
  paddingBottom: 0
  fontSize: 1.1em
  fontWeight: 600
  textTransform: none
  letterSpacing: -0.01em

core/card
  borderRadius: 0
  overflow: hidden
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  border: none
  boxShadow: none

core/card.body
  padding: 0

core/header
  paddingBottom: 0

core/footer
  paddingTop: 0
  marginTop: calc(3rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em

core/cta
  textAlign: center
  marginTop: calc(3rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

core/cta.button
  padding: 0
  borderRadius: 0
  fontWeight: 600
  textDecoration: underline
  textUnderlineOffset: 0.25rem

newsletter/featured
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden

newsletter/featured.source
  padding: 0
  borderRadius: 0

newsletter/category.title
  paddingBottom: 0

newsletter/item
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  width: 100%
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0
  padding: 0.8125rem 0 0

newsletter/item.meta
  fontSize: 0.72em

newsletter/quickHits
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/tools
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/tipOfTheDay
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/community
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/community.quote
  padding: 0

newsletter/personalNote
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/poll
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/poll.option
  padding: 0.875rem 0
  borderRadius: 0

newsletter/recommendations
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/sponsor
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/sponsor.badge
  padding: 0
  borderRadius: 0

newsletter/sponsor.img
  borderRadius: 0

newsletter/outro
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/outro.cta
  padding: 0
  borderRadius: 0

newsletter/custom
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0
newsletter/intro
  fontSize: 1.1em
  lineHeight: calc(1.82 * var(--mkly-line-height-scale, 1))
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(3rem * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(3rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
`,
},

{
  name: 'gazette',
  displayName: 'Newsletter/Gazette',
  description: 'Broadsheet newspaper — double rules, small-caps attribution, decimal lists, column rules',
  rawCss: `/* newsletter kit — gazette preset */

.mkly-document {
  font-family: 'Newsreader', 'Times New Roman', 'Times', serif;
  font-size: 1.0312rem;
  line-height: calc(1.72 * var(--_lhs, 1));
  letter-spacing: 0.005em;
  padding: 0 1.25rem;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.18;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1.05em;
  line-height: calc(1.72 * var(--_lhs, 1));
  margin: 0 0 calc(1.5rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 500; text-decoration: underline; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(1.5rem * var(--_gs));
  border: 0.0625rem solid;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-variant: small-caps;
  font-size: 0.75em;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: none;
  padding: 0.1875rem 0.625rem;
  border: 0.0625rem solid;
  border-radius: 0;
  margin: 1.125rem 1.25rem 0.5rem;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.82em;
  font-weight: 400;
  font-style: italic;
  margin: 0 1.25rem 0.375rem;
  line-height: 1.4;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.375rem 1.25rem 0.75rem; }
.mkly-newsletter-featured p {
  margin: 0.375rem 1.25rem 0.75rem;
  line-height: calc(1.72 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.25rem 1.25rem 1.125rem;
  font-weight: 500;
  font-size: 0.88em;
  text-decoration: underline;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding-top: calc(1.25rem * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 1.125rem;
  padding: 0.5rem 0;
  border-bottom: 0.1875rem double;
  border-top: 0.0625rem solid;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 0;
  border: none;
  border-top: 0.0625rem solid;
  border-radius: 0;
  margin-bottom: 0;
  box-shadow: none;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: 100%;
  float: none;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 0;
  display: block;
}
.mkly-newsletter-item__body {
  padding: 1rem 1.25rem 0.875rem;
  overflow: visible;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-variant: small-caps;
  font-size: 0.72em;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: none;
  padding: 0;
  border: none;
  border-radius: 0;
  margin-bottom: 0.375rem;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.68em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  line-height: 1.3;
  margin-bottom: 0.375rem;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 0.375rem;
  line-height: calc(1.72 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.08em;
  font-weight: 700;
  margin: 0 0 0.25rem;
  line-height: 1.2;
  letter-spacing: 0;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.375rem;
  font-size: 0.84em;
  font-weight: 500;
  text-decoration: underline;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 1.125rem 0;
  border: none;
  border-top: 0.0625rem solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-quickHits__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.875rem;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.6em; list-style-type: decimal; }
.mkly-newsletter-quickHits li {
  margin-bottom: 0.5rem;
  line-height: calc(1.65 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 500; text-decoration: underline; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 1.125rem 0;
  border: none;
  border-top: 0.0625rem solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-tools__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.875rem;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0 0 0 1.125rem;
  border-left: 0.125rem solid;
  border-radius: 0;
  line-height: calc(1.72 * var(--_lhs, 1));
  box-shadow: none;
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 0.72em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 0 0 0 1.125rem;
  border-left: 0.125rem solid;
  line-height: calc(1.72 * var(--_lhs, 1));
  font-size: 1.04em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 0.625rem;
  font-variant: small-caps;
  font-weight: 400;
  font-size: 0.88em;
  letter-spacing: 0.04em;
  font-style: normal;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0 0 0 1.125rem;
  font-style: italic;
  border-left: 0.125rem solid;
  border-radius: 0;
  line-height: calc(1.72 * var(--_lhs, 1));
  box-shadow: none;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.875rem 1.25rem;
  border: 0.0625rem solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-poll__question {
  font-size: 1.05em;
  font-weight: 700;
  margin: 0 0 1rem;
  line-height: 1.25;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 0.5rem 0;
  padding: 0.75rem 1rem;
  font-size: 0.95em;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  border: 0.0625rem solid;
  border-radius: 0;
  line-height: 1.4;
  text-align: center;
  box-shadow: none;
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 1.125rem 0;
  border: none;
  border-top: 0.0625rem solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-recommendations__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.875rem;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.6em; list-style-type: decimal; }
.mkly-newsletter-recommendations li {
  margin-bottom: 0.5rem;
  line-height: calc(1.65 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 500; text-decoration: underline; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 1.125rem 0;
  border-top: 0.0625rem solid;
  border-bottom: 0.0625rem solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-variant: small-caps;
  font-size: 0.62em;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: none;
  padding: 0;
  border: none;
  border-radius: 0;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 0.875rem;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 0.625rem;
  line-height: calc(1.72 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-weight: 500;
  font-size: 0.88em;
  text-decoration: underline;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(1.5rem * var(--_gs));
  text-align: center;
  padding: 1.0625rem 0;
  border-top: 0.0625rem solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-outro p {
  margin: 0 0 0.625rem;
  line-height: calc(1.72 * var(--_lhs, 1));
  font-size: 1.06em;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 1.25rem;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none;
  padding: 0.75rem 1.75rem;
  border: 0.0625rem solid;
  border-radius: 0;
  line-height: 1.4;
  box-shadow: none;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 1.125rem 1.25rem;
  border: 0.0625rem solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-custom__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.875rem;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 0.625rem;
  line-height: calc(1.72 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(1.5rem * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-divider { margin: calc(1.5rem * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(1.5rem * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(1.5rem * var(--_gs)) 0; padding: 1.25rem 0; border-top: 0.0625rem solid; border-bottom: 0.0625rem solid; }
.mkly-core-cta p { margin: 0 0 0.5rem; font-size: 1.05em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.75rem;
  border: 0.0625rem solid;
  border-radius: 0;
  font-weight: 600;
  font-size: 0.9375rem;
  text-decoration: none !important;
  line-height: 1.4;
  box-shadow: none;
}
.mkly-core-footer { margin-top: calc(1.5rem * var(--_gs)); text-align: center; font-size: 0.85em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
  css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 0.75rem 1.75rem
  borderRadius: 0
  fontWeight: 600
  border: 0.0625rem solid

core/code
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  padding: 1.125rem 1.25rem
  border: 0.0625rem solid

core/quote
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0 0 0 1.125rem
  borderLeftWidth: 0.125rem

core/hero
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden
  border: 0.0625rem solid

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 0.875rem 1.25rem

core/section.title
  paddingBottom: 0.5rem
  fontSize: 0.72em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  borderBottom: 0.1875rem double
  borderTop: 0.0625rem solid
  paddingTop: 0.5rem

core/card
  borderRadius: 0
  overflow: hidden
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  border: 0.0625rem solid

core/card.body
  padding: 1.125rem 1.25rem

core/header
  paddingBottom: 0.75rem
  borderBottom: 0.0625rem solid

core/footer
  paddingTop: 0.75rem
  marginTop: calc(1.5rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  borderTop: 0.0625rem solid

core/cta
  textAlign: center
  marginTop: calc(1.5rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 0
  borderTop: 0.0625rem solid
  borderBottom: 0.0625rem solid

core/cta.button
  padding: 0.75rem 1.75rem
  borderRadius: 0
  fontWeight: 600
  border: 0.0625rem solid

newsletter/featured
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden
  border: 0.0625rem solid

newsletter/featured.source
  padding: 0.1875rem 0.625rem
  borderRadius: 0
  border: 0.0625rem solid

newsletter/category.title
  paddingBottom: 0.5rem
  paddingTop: 0.5rem
  borderTop: 0.0625rem solid

newsletter/item
  marginBottom: calc(0.875rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0
  borderTop: 0.0625rem solid
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  padding: 1rem 1.25rem 0.8125rem

newsletter/item.meta
  fontSize: 0.68em

newsletter/quickHits
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 0
  borderRadius: 0
  borderTop: 0.0625rem solid

newsletter/tools
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 0
  borderRadius: 0
  borderTop: 0.0625rem solid

newsletter/tipOfTheDay
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0 0 0 1.125rem
  borderRadius: 0

newsletter/community
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/community.quote
  padding: 0 0 0 1.125rem

newsletter/personalNote
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0 0 0 1.125rem
  borderRadius: 0

newsletter/poll
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.25rem
  borderRadius: 0
  border: 0.0625rem solid

newsletter/poll.option
  padding: 0.75rem 1rem
  borderRadius: 0
  border: 0.0625rem solid

newsletter/recommendations
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 0
  borderRadius: 0
  borderTop: 0.0625rem solid

newsletter/sponsor
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 0
  borderRadius: 0
  borderTop: 0.0625rem solid
  borderBottom: 0.0625rem solid

newsletter/sponsor.badge
  padding: 0
  borderRadius: 0

newsletter/sponsor.img
  borderRadius: 0

newsletter/outro
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 1rem 0
  borderRadius: 0
  borderTop: 0.0625rem solid

newsletter/outro.cta
  padding: 0.75rem 1.75rem
  borderRadius: 0
  border: 0.0625rem solid

newsletter/custom
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 1.25rem
  borderRadius: 0
  border: 0.0625rem solid
newsletter/intro
  fontSize: 1.05em
  lineHeight: calc(1.72 * var(--mkly-line-height-scale, 1))
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(1.25rem * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(1.5rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
`,
},

{
  name: 'luxe',
  displayName: 'Newsletter/Luxe',
  description: 'Ultra-premium luxury — ultra-wide letter-spacing, weight 300 body, Bodoni headings, understated precision',
  rawCss: `/* newsletter kit — luxe preset */

.mkly-document {
  font-family: 'Cormorant', 'Garamond', 'Georgia', serif;
  font-weight: 300;
  line-height: calc(1.82 * var(--_lhs, 1));
  padding: 0 1.75rem;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-family: 'Bodoni Moda', 'Didot', 'Georgia', serif;
  font-weight: 500;
  letter-spacing: 0.06em;
  line-height: 1.25;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1.12em;
  line-height: calc(1.82 * var(--_lhs, 1));
  font-weight: 300;
  margin: 0 0 calc(2.5rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 400; text-decoration: underline; text-decoration-thickness: 0.0625rem; text-underline-offset: 0.1875rem; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(2.5rem * var(--_gs));
  border: 0.0625rem solid;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.6em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 0.25rem 0.875rem;
  border: 0.0625rem solid;
  border-radius: 0;
  margin: 1.75rem 1.75rem 0.625rem;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.82em;
  font-weight: 300;
  font-style: italic;
  margin: 0 1.75rem 0.5rem;
  line-height: 1.4;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.5rem 1.75rem 1rem; }
.mkly-newsletter-featured p {
  margin: 0.5rem 1.75rem 1rem;
  line-height: calc(1.82 * var(--_lhs, 1));
  font-size: 0.98em;
  font-weight: 300;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.375rem 1.75rem 1.75rem;
  font-weight: 400;
  font-size: 0.86em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding-top: calc(2.5rem * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.62em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  margin: 0 0 1.75rem;
  padding-bottom: 0.75rem;
  border-bottom: 0.0625rem solid;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  border: none;
  border-bottom: 0.0625rem solid;
  border-radius: 0;
  margin-bottom: 0;
  box-shadow: none;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item__img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
  padding: 1.0625rem 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.6em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 0;
  border: none;
  border-radius: 0;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.68em;
  font-weight: 300;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1.3;
  margin-bottom: 0.375rem;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 0.5rem;
  line-height: calc(1.82 * var(--_lhs, 1));
  font-size: 0.96em;
  font-weight: 300;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.12em;
  font-weight: 500;
  margin: 0 0 0.375rem;
  line-height: 1.25;
  letter-spacing: 0.04em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.84em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 0;
  padding-top: calc(2.5rem * var(--_gs));
  border: none;
  border-top: 0.0625rem solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-quickHits__title {
  font-size: 0.62em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 1.125rem;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li {
  margin-bottom: 0.75rem;
  line-height: calc(1.75 * var(--_lhs, 1));
  font-size: 0.96em;
  font-weight: 300;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 400; text-decoration: underline; text-underline-offset: 0.125rem; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 0;
  padding-top: calc(2.5rem * var(--_gs));
  border: none;
  border-top: 0.0625rem solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-tools__title {
  font-size: 0.62em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 1.125rem;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 1.0625rem 0 1.0625rem 1.75rem;
  border-left: 0.0625rem solid;
  border-radius: 0;
  line-height: calc(1.82 * var(--_lhs, 1));
  box-shadow: none;
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 500;
  font-size: 0.62em;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; font-size: 0.96em; line-height: calc(1.82 * var(--_lhs, 1)); font-weight: 300; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 0 0 0 1.75rem;
  border-left: 0.0625rem solid;
  line-height: calc(1.82 * var(--_lhs, 1));
  font-size: 1.12em;
  font-weight: 300;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 0.875rem;
  font-size: 0.82em;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-style: normal;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 1.0625rem 0 1.0625rem 1.75rem;
  font-style: italic;
  border-left: 0.0625rem solid;
  border-radius: 0;
  line-height: calc(1.82 * var(--_lhs, 1));
  font-weight: 300;
  box-shadow: none;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 1.25rem 0;
  border-top: 0.0625rem solid;
  border-bottom: 0.0625rem solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-poll__question {
  font-size: 1.08em;
  font-weight: 500;
  margin: 0 0 1.375rem;
  line-height: 1.25;
  letter-spacing: 0.04em;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 0.625rem 0;
  padding: 0.875rem 1.25rem;
  font-size: 0.96em;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  border: 0.0625rem solid;
  border-radius: 0;
  transition: opacity 0.2s;
  line-height: 1.4;
  text-align: center;
  letter-spacing: 0.04em;
  box-shadow: none;
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 0;
  padding-top: calc(2.5rem * var(--_gs));
  border: none;
  border-top: 0.0625rem solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-recommendations__title {
  font-size: 0.62em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 1.125rem;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li {
  margin-bottom: 0.75rem;
  line-height: calc(1.75 * var(--_lhs, 1));
  font-size: 0.96em;
  font-weight: 300;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 400; text-decoration: underline; text-underline-offset: 0.125rem; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 1.0625rem 0;
  border-top: 0.0625rem solid;
  border-bottom: 0.0625rem solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.58em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  padding: 0;
  border: none;
  border-radius: 0;
  margin-bottom: 0.875rem;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 1rem;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 0.625rem;
  line-height: calc(1.82 * var(--_lhs, 1));
  font-size: 0.96em;
  font-weight: 300;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.625rem;
  font-weight: 400;
  font-size: 0.86em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(2.5rem * var(--_gs));
  text-align: center;
  padding: 1.375rem 0;
  border-top: 0.0625rem solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-outro p {
  margin: 0 0 0.625rem;
  line-height: calc(1.82 * var(--_lhs, 1));
  font-size: 1.06em;
  font-weight: 300;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 1.125rem;
  font-weight: 500;
  font-size: 0.88em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none !important;
  padding: 0.875rem 2.25rem;
  border: 0.0625rem solid;
  border-radius: 0;
  line-height: 1.4;
  box-shadow: none;
  transition: opacity 0.2s;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding: 0;
  padding-top: calc(2.5rem * var(--_gs));
  border: none;
  border-top: 0.0625rem solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-custom__title {
  font-size: 0.62em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 1rem;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 0.625rem;
  line-height: calc(1.82 * var(--_lhs, 1));
  font-size: 0.96em;
  font-weight: 300;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(2.5rem * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-divider { margin: calc(2.5rem * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(2.5rem * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(2.5rem * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(2.5rem * var(--_gs)) 0; padding: 1.75rem 0; border-top: 0.0625rem solid; border-bottom: 0.0625rem solid; }
.mkly-core-cta p { margin: 0 0 0.5rem; font-size: 1.05em; line-height: calc(1.6 * var(--_lhs, 1)); font-weight: 300; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.875rem 2.25rem;
  border: 0.0625rem solid;
  border-radius: 0;
  font-weight: 500;
  font-size: 0.9375rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none !important;
  line-height: 1.4;
  box-shadow: none;
}
.mkly-core-footer { margin-top: calc(2.5rem * var(--_gs)); text-align: center; font-size: 0.85em; line-height: calc(1.6 * var(--_lhs, 1)); font-weight: 300; }
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
  css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 0.875rem 2.25rem
  borderRadius: 0
  fontWeight: 500
  textTransform: uppercase
  letterSpacing: 0.08em
  border: 0.0625rem solid

core/code
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  padding: 0.875rem 1.5rem
  border: 0.0625rem solid

core/quote
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0 0 0 1.75rem
  borderLeftWidth: 0.0625rem

core/hero
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden
  border: 0.0625rem solid

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 1.125rem 1.75rem

core/section.title
  paddingBottom: 0.75rem
  fontSize: 0.62em
  fontWeight: 500
  textTransform: uppercase
  letterSpacing: 0.25em
  borderBottom: 0.0625rem solid

core/card
  borderRadius: 0
  overflow: hidden
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  border: 0.0625rem solid

core/card.body
  padding: 1rem 1.75rem

core/header
  paddingBottom: 1rem
  borderBottom: 0.0625rem solid

core/footer
  paddingTop: 1rem
  marginTop: calc(2.5rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  borderTop: 0.0625rem solid

core/cta
  textAlign: center
  marginTop: calc(2.5rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 0
  borderTop: 0.0625rem solid
  borderBottom: 0.0625rem solid

core/cta.button
  padding: 0.875rem 2.25rem
  borderRadius: 0
  fontWeight: 500
  textTransform: uppercase
  letterSpacing: 0.08em
  border: 0.0625rem solid

newsletter/featured
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden
  border: 0.0625rem solid

newsletter/featured.source
  padding: 0.25rem 0.875rem
  borderRadius: 0
  border: 0.0625rem solid

newsletter/category.title
  paddingBottom: 0.75rem
  borderBottom: 0.0625rem solid

newsletter/item
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  borderBottom: 0.0625rem solid
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  width: 100%
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0
  padding: 1rem 0

newsletter/item.meta
  fontSize: 0.68em

newsletter/quickHits
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0
  paddingTop: calc(2.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  borderTop: 0.0625rem solid

newsletter/tools
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0
  paddingTop: calc(2.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  borderTop: 0.0625rem solid

newsletter/tipOfTheDay
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1rem 0 1rem 1.75rem
  borderRadius: 0

newsletter/community
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/community.quote
  padding: 0 0 0 1.75rem

newsletter/personalNote
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1rem 0 1rem 1.75rem
  borderRadius: 0

newsletter/poll
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 0
  borderRadius: 0
  borderTop: 0.0625rem solid
  borderBottom: 0.0625rem solid

newsletter/poll.option
  padding: 0.875rem 1.25rem
  borderRadius: 0
  border: 0.0625rem solid

newsletter/recommendations
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0
  paddingTop: calc(2.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  borderTop: 0.0625rem solid

newsletter/sponsor
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1rem 0
  borderRadius: 0
  borderTop: 0.0625rem solid
  borderBottom: 0.0625rem solid

newsletter/sponsor.badge
  padding: 0
  borderRadius: 0

newsletter/sponsor.img
  borderRadius: 0

newsletter/outro
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 1.3125rem 0
  borderRadius: 0
  borderTop: 0.0625rem solid

newsletter/outro.cta
  padding: 0.875rem 2.25rem
  borderRadius: 0
  border: 0.0625rem solid

newsletter/custom
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  padding: 0
  paddingTop: calc(2.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 0
  borderTop: 0.0625rem solid
newsletter/intro
  fontSize: 1.12em
  lineHeight: calc(1.82 * var(--mkly-line-height-scale, 1))
  fontWeight: 300
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(2.5rem * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(2.5rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
`,
},

{
  name: 'capsule',
  displayName: 'Newsletter/Capsule',
  description: 'iOS-inspired pill UI — 0.0938rem borders, outline ring shadows, 6.25rem radius pills, visible structure',
  rawCss: `/* newsletter kit — capsule preset */

.mkly-document {
  font-family: 'Outfit', 'Inter', system-ui, sans-serif;
  padding: 0 1.5rem;
  -webkit-font-smoothing: antialiased;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.24;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1.06em;
  line-height: calc(1.76 * var(--_lhs, 1));
  margin: 0 0 calc(1.5rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; text-decoration-thickness: 0.0938rem; text-underline-offset: 0.125rem; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(1.5rem * var(--_gs));
  border-width: 0.0938rem;
  border-style: solid;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04), 0 0 0 0.0625rem rgba(0,0,0,0.03);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.65em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.3125rem 1rem;
  border-radius: 6.25rem;
  margin: 1.375rem 1.5rem 0.625rem;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  font-weight: 500;
  margin: 0 1.5rem 0.5rem;
  line-height: 1.4;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.5rem 1.5rem 0.875rem; }
.mkly-newsletter-featured p {
  margin: 0.5rem 1.5rem 0.875rem;
  line-height: calc(1.72 * var(--_lhs, 1));
  font-size: 0.96em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.375rem 1.5rem 1.5rem;
  font-weight: 700;
  font-size: 0.88em;
  text-decoration: none;
  letter-spacing: 0.01em;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding-top: calc(1.5rem * var(--_gs));
}
.mkly-newsletter-category__title {
  display: inline-block;
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.375rem 1.25rem;
  border-radius: 6.25rem;
  border-width: 0.0938rem;
  border-style: solid;
  margin: 0 0 1.25rem;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  border-width: 0.0938rem;
  border-style: solid;
  border-radius: 1rem;
  margin-bottom: calc(1rem * var(--_gs));
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04), 0 0 0 0.0625rem rgba(0,0,0,0.03);
  position: relative;
  transition: box-shadow 0.2s ease;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: 100%;
  float: none;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
  padding: 0.875rem 1.375rem 0.9375rem;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.64em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.75rem;
  border-radius: 6.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.68em;
  line-height: 1.3;
  margin-bottom: 0.375rem;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 0.5rem;
  line-height: calc(1.68 * var(--_lhs, 1));
  font-size: 0.94em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.06em;
  font-weight: 700;
  margin: 0 0 0.375rem;
  line-height: 1.28;
  letter-spacing: -0.01em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.84em;
  font-weight: 700;
  text-decoration: none;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.9375rem 1.5rem;
  border-radius: 1.25rem;
  border-width: 0.0938rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04), 0 0 0 0.0625rem rgba(0,0,0,0.03);
}
.mkly-newsletter-quickHits__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.875rem;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li {
  margin-bottom: 0.625rem;
  line-height: calc(1.65 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.9375rem 1.5rem;
  border-radius: 1.25rem;
  border-width: 0.0938rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04), 0 0 0 0.0625rem rgba(0,0,0,0.03);
}
.mkly-newsletter-tools__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.875rem;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.9375rem 1.5rem;
  border-width: 0.0938rem;
  border-style: solid;
  border-radius: 1.25rem;
  line-height: calc(1.68 * var(--_lhs, 1));
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04), 0 0 0 0.0625rem rgba(0,0,0,0.03);
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 0.625rem;
  font-weight: 700;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.9375rem 1.5rem;
  border-radius: 1.25rem;
  border-width: 0.0938rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04), 0 0 0 0.0625rem rgba(0,0,0,0.03);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 1.125rem 0 1.125rem 1.375rem;
  border-left-width: 0.1875rem;
  border-left-style: solid;
  line-height: calc(1.78 * var(--_lhs, 1));
  font-size: 1.04em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 0.75rem;
  font-size: 0.84em;
  font-style: normal;
  font-weight: 600;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.9375rem 1.5rem;
  font-style: italic;
  border-radius: 1.25rem;
  border-width: 0.0938rem;
  border-style: solid;
  line-height: calc(1.78 * var(--_lhs, 1));
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04), 0 0 0 0.0625rem rgba(0,0,0,0.03);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 1.125rem 1.625rem;
  border-radius: 1.25rem;
  border-width: 0.0938rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04), 0 0 0 0.0625rem rgba(0,0,0,0.03);
}
.mkly-newsletter-poll__question {
  font-size: 1.1em;
  font-weight: 700;
  margin: 0 0 1.125rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 0.625rem 0;
  padding: 0.75rem 1.375rem;
  font-size: 0.95em;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-width: 0.0938rem;
  border-style: solid;
  border-radius: 6.25rem;
  transition: box-shadow 0.2s ease, transform 0.15s ease;
  line-height: 1.4;
  text-align: center;
  box-shadow: 0 0 0 0.0625rem rgba(0,0,0,0.03);
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.9375rem 1.5rem;
  border-radius: 1.25rem;
  border-width: 0.0938rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04), 0 0 0 0.0625rem rgba(0,0,0,0.03);
}
.mkly-newsletter-recommendations__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.875rem;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li {
  margin-bottom: 0.625rem;
  line-height: calc(1.65 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.9375rem 1.5rem;
  border-width: 0.0938rem;
  border-style: solid;
  border-radius: 1.25rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04), 0 0 0 0.0625rem rgba(0,0,0,0.03);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.6em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.875rem;
  border-radius: 6.25rem;
  margin-bottom: 0.875rem;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor p {
  margin: 0 0 0.625rem;
  line-height: calc(1.68 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.625rem;
  font-weight: 700;
  font-size: 0.88em;
  text-decoration: none;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(1.5rem * var(--_gs));
  text-align: center;
  padding: 1.375rem 1.5rem;
  border-width: 0.0938rem;
  border-style: solid;
  border-radius: 1.25rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04), 0 0 0 0.0625rem rgba(0,0,0,0.03);
}
.mkly-newsletter-outro p {
  margin: 0 0 0.625rem;
  line-height: calc(1.72 * var(--_lhs, 1));
  font-size: 1.04em;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 1.125rem;
  font-weight: 700;
  font-size: 0.92em;
  text-decoration: none !important;
  padding: 0.875rem 2.25rem;
  border-radius: 6.25rem;
  border-width: 0.0938rem;
  border-style: solid;
  transition: box-shadow 0.2s ease, transform 0.15s ease;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.08);
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(1.5rem * var(--_gs));
  padding: 0.9375rem 1.5rem;
  border-radius: 1.25rem;
  border-width: 0.0938rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04), 0 0 0 0.0625rem rgba(0,0,0,0.03);
}
.mkly-newsletter-custom__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 0.875rem;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 0.625rem;
  line-height: calc(1.68 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(1.5rem * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-divider { margin: calc(1.5rem * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(1.5rem * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(1.5rem * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(1.5rem * var(--_gs)) 0; padding: 2rem 1.5rem; border-width: 0.0938rem; border-style: solid; border-radius: 1.25rem; box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.04), 0 0 0 0.0625rem rgba(0,0,0,0.03); }
.mkly-core-cta p { margin: 0 0 0.5rem; font-size: 1.05em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.875rem 2.25rem;
  border-radius: 6.25rem;
  border-width: 0.0938rem;
  border-style: solid;
  font-weight: 700;
  font-size: 0.9375rem;
  text-decoration: none !important;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0 0.125rem 0.5rem rgba(0,0,0,0.08);
}
.mkly-core-footer { margin-top: calc(1.5rem * var(--_gs)); text-align: center; font-size: 0.85em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
  css: `core/image.img
  borderRadius: 0.75rem

core/button.link
  padding: 0.875rem 2.25rem
  borderRadius: 6.25rem
  fontWeight: 700
  borderWidth: 0.0938rem

core/code
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 1.25rem
  padding: 0.875rem 1.5rem
  borderWidth: 0.0938rem

core/quote
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.5rem
  borderLeftWidth: 0.1875rem

core/hero
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 1.25rem
  overflow: hidden
  borderWidth: 0.0938rem

core/hero.img
  borderRadius: 0.75rem

core/hero.content
  padding: 1.125rem 1.5rem

core/section.title
  paddingBottom: 0.375rem
  fontSize: 0.7em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  display: inline-block
  padding: 0.375rem 1.25rem
  borderRadius: 6.25rem
  borderWidth: 0.0938rem

core/card
  borderRadius: 1.25rem
  overflow: hidden
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))
  borderWidth: 0.0938rem

core/card.body
  padding: 0.875rem 1.5rem

core/header
  paddingBottom: 0.8125rem

core/footer
  paddingTop: 0.8125rem
  marginTop: calc(1.5rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em

core/cta
  textAlign: center
  marginTop: calc(1.5rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 1.3125rem 1.5rem
  borderRadius: 1.25rem
  borderWidth: 0.0938rem

core/cta.button
  padding: 0.875rem 2.25rem
  borderRadius: 6.25rem
  fontWeight: 700
  borderWidth: 0.0938rem

newsletter/featured
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  borderRadius: 1.25rem
  overflow: hidden

newsletter/featured.source
  padding: 0.3125rem 1rem
  borderRadius: 6.25rem

newsletter/category.title
  padding: 0.375rem 1.25rem
  borderRadius: 6.25rem

newsletter/item
  marginBottom: calc(0.875rem * var(--mkly-gap-scale, 1))
  borderRadius: 1rem
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  width: 100%
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0
  padding: 0.8125rem 1.375rem 0.875rem

newsletter/item.meta
  fontSize: 0.68em

newsletter/quickHits
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.5rem
  borderRadius: 1.25rem

newsletter/tools
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.5rem
  borderRadius: 1.25rem

newsletter/tipOfTheDay
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.5rem
  borderRadius: 1.25rem

newsletter/community
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.5rem
  borderRadius: 1.25rem

newsletter/community.quote
  padding: 0.75rem 0 0.75rem 1.375rem

newsletter/personalNote
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.5rem
  borderRadius: 1.25rem

newsletter/poll
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 1.0625rem 1.625rem
  borderRadius: 1.25rem

newsletter/poll.option
  padding: 0.75rem 1.375rem
  borderRadius: 6.25rem

newsletter/recommendations
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.5rem
  borderRadius: 1.25rem

newsletter/sponsor
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.5rem
  borderRadius: 1.25rem

newsletter/sponsor.badge
  padding: 0.25rem 0.875rem
  borderRadius: 6.25rem

newsletter/sponsor.img
  borderRadius: 0.75rem

newsletter/outro
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 1.3125rem 1.5rem
  borderRadius: 1.25rem

newsletter/outro.cta
  padding: 0.875rem 2.25rem
  borderRadius: 6.25rem

newsletter/custom
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.5rem
  borderRadius: 1.25rem
newsletter/intro
  fontSize: 1.06em
  lineHeight: calc(1.76 * var(--mkly-line-height-scale, 1))
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(1.5rem * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(1.5rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
`,
},

{
  name: 'studio',
  displayName: 'Newsletter/Studio',
  description: 'Magazine-editorial — CSS Grid items, full-width hero images, bold tight headlines, pill source labels, modern variable fonts',
  rawCss: `/* newsletter kit — studio preset */

.mkly-document {
  font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, system-ui, sans-serif;
  padding: 0 1.5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.2;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1.12em;
  line-height: calc(1.82 * var(--_lhs, 1));
  margin: 0 0 calc(2.5rem * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 700; text-decoration-thickness: 0.125rem; text-underline-offset: 0.1875rem; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(2rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 1.25rem;
  overflow: hidden;
  box-shadow: 0 0.25rem 1.5rem rgba(0,0,0,0.08), 0 0.0625rem 0.25rem rgba(0,0,0,0.04);
}
.mkly-newsletter-featured__img { width: 100%; display: block; aspect-ratio: 16/9; object-fit: cover; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.62em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.3125rem 0.875rem;
  border-radius: 6.25rem;
  margin: 1.5rem 1.75rem 0.625rem;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  margin: 0 1.75rem 0.625rem;
  line-height: 1.4;
  font-weight: 500;
  opacity: 0.6;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.5rem 1.75rem 0.875rem; }
.mkly-newsletter-featured p {
  margin: 0.5rem 1.75rem 0.875rem;
  line-height: calc(1.76 * var(--_lhs, 1));
  font-size: 0.97em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.5rem 1.75rem 1.75rem;
  font-weight: 700;
  font-size: 0.84em;
  text-decoration: none;
  letter-spacing: 0.02em;
  padding: 0.625rem 1.375rem;
  border-radius: 6.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  transition: opacity 0.15s;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(2.5rem * var(--_gs));
  padding-top: calc(2.25rem * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.68em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 1.5rem;
  padding-bottom: 1rem;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  padding: 0;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 1rem;
  margin-bottom: calc(1.25rem * var(--_gs));
  overflow: hidden;
  box-shadow: 0 0.125rem 0.75rem rgba(0,0,0,0.06);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: 100%;
  display: block;
  aspect-ratio: 16/9;
  object-fit: cover;
  float: none;
}
.mkly-newsletter-item__body {
  padding: 0.875rem 1.5rem 1.0625rem;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.62em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.25rem 0.75rem;
  border-radius: 6.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 0.625rem;
  line-height: calc(1.7 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.15em;
  font-weight: 700;
  margin: 0 0 0.5rem;
  line-height: 1.25;
  letter-spacing: -0.02em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.75rem;
  font-size: 0.82em;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.02em;
  padding: 0.5rem 1.25rem;
  border-radius: 6.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  transition: opacity 0.15s;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.125rem 1.75rem;
  border-radius: 1rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.625rem rgba(0,0,0,0.04);
}
.mkly-newsletter-quickHits__title {
  font-size: 0.68em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 1.125rem;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-quickHits li {
  margin-bottom: 0.875rem;
  line-height: calc(1.68 * var(--_lhs, 1));
  font-size: 0.95em;
  padding-left: 1.125rem;
  position: relative;
}
.mkly-newsletter-quickHits li::before { content: '→'; position: absolute; left: 0; font-weight: 700; }
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 700; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.125rem 1.75rem;
  border-radius: 1rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.625rem rgba(0,0,0,0.04);
}
.mkly-newsletter-tools__title {
  font-size: 0.68em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 1.25rem;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.0625rem 1.75rem;
  border-left-width: 0.25rem;
  border-left-style: solid;
  border-radius: 0 1rem 1rem 0;
  line-height: calc(1.72 * var(--_lhs, 1));
  box-shadow: 0 0.125rem 0.625rem rgba(0,0,0,0.04);
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 0.625rem;
  font-weight: 800;
  font-size: 0.68em;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.625rem; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.25rem 1.75rem;
  border-radius: 1rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.625rem rgba(0,0,0,0.04);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 0.875rem 0 0.875rem 1.5rem;
  border-left-width: 0.1875rem;
  border-left-style: solid;
  line-height: calc(1.82 * var(--_lhs, 1));
  font-size: 1.08em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 1rem;
  padding-top: 0.875rem;
  border-top-width: 0.0625rem;
  border-top-style: solid;
  font-size: 0.82em;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.03em;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.25rem 1.75rem;
  font-style: italic;
  border-radius: 1rem;
  border-left-width: 0.25rem;
  border-left-style: solid;
  line-height: calc(1.82 * var(--_lhs, 1));
  box-shadow: 0 0.125rem 0.625rem rgba(0,0,0,0.04);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.9em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.25rem 1.75rem;
  border-radius: 1rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.625rem rgba(0,0,0,0.04);
}
.mkly-newsletter-poll__question {
  font-size: 1.18em;
  font-weight: 800;
  margin: 0 0 1.375rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 0.625rem 0;
  padding: 0.875rem 1.375rem;
  font-size: 0.95em;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 6.25rem;
  transition: box-shadow 0.2s ease, transform 0.15s ease;
  line-height: 1.4;
  text-align: center;
  box-shadow: 0 0.0625rem 0.25rem rgba(0,0,0,0.04);
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.125rem 1.75rem;
  border-radius: 1rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.625rem rgba(0,0,0,0.04);
}
.mkly-newsletter-recommendations__title {
  font-size: 0.68em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 1.125rem;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-recommendations li {
  margin-bottom: 0.875rem;
  line-height: calc(1.68 * var(--_lhs, 1));
  font-size: 0.95em;
  padding-left: 1.125rem;
  position: relative;
}
.mkly-newsletter-recommendations li::before { content: '→'; position: absolute; left: 0; font-weight: 700; }
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 700; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.125rem 1.75rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.625rem rgba(0,0,0,0.04);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.58em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding: 0.25rem 0.75rem;
  border-radius: 6.25rem;
  margin-bottom: 0.875rem;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0.625rem rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor p {
  margin: 0 0 0.625rem;
  line-height: calc(1.72 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 0.75rem;
  font-weight: 700;
  font-size: 0.88em;
  text-decoration: none;
  letter-spacing: 0.02em;
  padding: 0.625rem 1.375rem;
  border-radius: 6.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  transition: opacity 0.15s;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(2rem * var(--_gs));
  text-align: center;
  padding: 1.75rem 1.75rem;
  border-radius: 1.25rem;
  border-width: 0.0625rem;
  border-style: solid;
}
.mkly-newsletter-outro p {
  margin: 0 0 0.625rem;
  line-height: calc(1.76 * var(--_lhs, 1));
  font-size: 1.08em;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 1.375rem;
  font-weight: 700;
  font-size: 0.9em;
  text-decoration: none !important;
  padding: 0.875rem 2.25rem;
  border-radius: 6.25rem;
  transition: opacity 0.15s, transform 0.15s;
  letter-spacing: 0.02em;
  line-height: 1.4;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.12);
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(2rem * var(--_gs));
  padding: 1.125rem 1.75rem;
  border-radius: 1rem;
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.625rem rgba(0,0,0,0.04);
}
.mkly-newsletter-custom__title {
  font-size: 0.68em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 1.125rem;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 0.625rem;
  line-height: calc(1.72 * var(--_lhs, 1));
  font-size: 0.95em;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(2rem * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-divider { margin: calc(2rem * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(2rem * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(2rem * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(2rem * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 0.5rem; font-size: 1.06em; line-height: calc(1.68 * var(--_lhs, 1)); }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 1.125rem;
  padding: 0.875rem 2.25rem;
  border-radius: 6.25rem;
  font-weight: 700;
  font-size: 0.9375rem;
  text-decoration: none !important;
  letter-spacing: 0.02em;
  line-height: 1.4;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.1);
  transition: opacity 0.15s, transform 0.1s;
}
.mkly-core-footer { margin-top: calc(2rem * var(--_gs)); text-align: center; font-size: 0.85em; line-height: calc(1.6 * var(--_lhs, 1)); }
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
  css: `core/image.img
  borderRadius: 1rem

core/button.link
  padding: 0.875rem 2.25rem
  borderRadius: 6.25rem
  fontWeight: 700

core/code
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  borderRadius: 1rem
  padding: 0.875rem 1.625rem

core/quote
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 0.875rem 1.75rem
  borderLeftWidth: 0.25rem

core/hero
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  borderRadius: 1.25rem
  overflow: hidden

core/hero.img
  borderRadius: 1rem

core/hero.content
  padding: 1.3125rem 1.75rem

core/section.title
  paddingBottom: 1rem
  fontSize: 0.68em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.14em

core/card
  borderRadius: 1rem
  overflow: hidden
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))

core/card.body
  padding: 1rem 1.75rem

core/header
  paddingBottom: 1rem

core/footer
  paddingTop: 1rem
  marginTop: calc(2rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(2rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.625rem 1.75rem
  borderRadius: 1.25rem

core/cta.button
  padding: 0.875rem 2.25rem
  borderRadius: 6.25rem
  fontWeight: 700

newsletter/intro
  fontSize: 1.12em
  lineHeight: calc(1.82 * var(--mkly-line-height-scale, 1))
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))

newsletter/featured
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  borderRadius: 1.25rem
  overflow: hidden

newsletter/featured.source
  padding: 0.3125rem 0.875rem
  borderRadius: 6.25rem

newsletter/featured.link
  marginTop: 0.5rem
  marginRight: 1.75rem
  marginBottom: 1.75rem
  marginLeft: 1.75rem
  fontWeight: 700
  fontSize: 0.84em
  textDecoration: none
  padding: 0.625rem 1.375rem
  borderRadius: 6.25rem
  borderWidth: 0.0625rem
  borderStyle: solid

newsletter/category
  marginBottom: calc(2.5rem * var(--mkly-gap-scale, 1))
  paddingTop: calc(2.25rem * var(--mkly-gap-scale, 1))

newsletter/category.title
  paddingBottom: 1rem
  fontSize: 0.68em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.14em

newsletter/item
  display: grid
  gridTemplateColumns: 1fr
  gap: 0
  padding: 0
  borderRadius: 1rem
  overflow: hidden
  marginBottom: calc(1.25rem * var(--mkly-gap-scale, 1))

newsletter/item.img
  width: 100%
  maxWidth: 100%
  borderRadius: 0

newsletter/item.body
  padding: 0.8125rem 1.5rem 1rem
  minWidth: 0

newsletter/item.source
  fontSize: 0.62em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  padding: 0.25rem 0.75rem
  borderRadius: 6.25rem
  marginBottom: 0.5rem
  lineHeight: 1.2

newsletter/item.meta
  fontSize: 0.72em
  fontWeight: 500
  letterSpacing: 0.02em
  lineHeight: 1.3
  marginBottom: 0.5rem

newsletter/item.link
  marginTop: 0.75rem
  fontSize: 0.82em
  fontWeight: 600
  textDecoration: none
  letterSpacing: 0.02em
  padding: 0.5rem 1.25rem
  borderRadius: 6.25rem
  borderWidth: 0.0625rem
  borderStyle: solid

newsletter/quickHits
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.0625rem 1.75rem
  borderRadius: 1rem

newsletter/quickHits.title
  fontSize: 0.68em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.14em
  marginBottom: 1.125rem

newsletter/tools
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.0625rem 1.75rem
  borderRadius: 1rem

newsletter/tools.title
  fontSize: 0.68em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.14em
  marginBottom: 1.25rem

newsletter/tipOfTheDay
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1rem 1.75rem
  borderRadius: 0 1rem 1rem 0
  lineHeight: calc(1.72 * var(--mkly-line-height-scale, 1))

newsletter/tipOfTheDay.title
  marginBottom: 0.625rem
  fontWeight: 800
  fontSize: 0.68em
  textTransform: uppercase
  letterSpacing: 0.14em

newsletter/community
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 1.75rem
  borderRadius: 1rem

newsletter/community.quote
  padding: 0.8125rem 0 0.8125rem 1.5rem
  fontSize: 1.08em
  lineHeight: calc(1.82 * var(--mkly-line-height-scale, 1))

newsletter/community.author
  marginTop: 1rem
  paddingTop: 0.875rem
  fontSize: 0.82em
  fontWeight: 700
  letterSpacing: 0.03em

newsletter/personalNote
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 1.75rem
  borderRadius: 1rem
  lineHeight: calc(1.82 * var(--mkly-line-height-scale, 1))

newsletter/poll
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.125rem 1.75rem
  borderRadius: 1rem

newsletter/poll.question
  fontSize: 1.18em
  fontWeight: 800
  marginBottom: 1.375rem
  lineHeight: 1.3
  letterSpacing: -0.02em

newsletter/poll.option
  padding: 0.875rem 1.375rem
  borderRadius: 6.25rem
  fontSize: 0.95em
  fontWeight: 600
  textAlign: center
  lineHeight: 1.4

newsletter/recommendations
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.0625rem 1.75rem
  borderRadius: 1rem

newsletter/recommendations.title
  fontSize: 0.68em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.14em
  marginBottom: 1.125rem

newsletter/sponsor
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.0625rem 1.75rem
  borderRadius: 1rem

newsletter/sponsor.badge
  fontSize: 0.58em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.14em
  padding: 0.25rem 0.75rem
  borderRadius: 6.25rem
  marginBottom: 0.875rem

newsletter/sponsor.img
  borderRadius: 0.75rem

newsletter/sponsor.link
  marginTop: 0.75rem
  fontWeight: 700
  fontSize: 0.88em
  textDecoration: none
  padding: 0.625rem 1.375rem
  borderRadius: 6.25rem
  borderWidth: 0.0625rem
  borderStyle: solid

newsletter/outro
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  textAlign: center
  padding: 1.625rem 1.75rem
  borderRadius: 1.25rem

newsletter/outro.cta
  padding: 0.875rem 2.25rem
  borderRadius: 6.25rem
  fontWeight: 700

newsletter/custom
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
  padding: 1.0625rem 1.75rem
  borderRadius: 1rem

newsletter/custom.title
  fontSize: 0.68em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.14em
  marginBottom: 1.125rem

core/heading
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(2rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(2rem * var(--mkly-gap-scale, 1))
`,
},

  {
  name: 'chronicle',
  displayName: 'Newsletter/Chronicle',
  description: 'Newspaper sections in deep frosted glass — bold mastheads, thick section rules, strongest blur depth',
  defaultTheme: 'creative-flux',
  rawCss: `/* newsletter kit — chronicle preset */

.mkly-document {
  font-family: 'Plus Jakarta Sans', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  padding: 0 2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 450;
  font-feature-settings: 'ss01', 'cv01';
  --_gs: var(--mkly-gap-scale, 1);
  --_lhs: var(--mkly-line-height-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-family: 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'Times New Roman', serif;
  font-feature-settings: normal;
}
.mkly-document h1 { font-size: 2.8em; font-weight: 900; letter-spacing: -0.03em; line-height: 1.0; margin-bottom: 0.25em; }
.mkly-document h2 { font-size: 1.6em; font-weight: 800; letter-spacing: -0.02em; line-height: 1.12; }
.mkly-document h3 { font-size: 1.25em; font-weight: 700; letter-spacing: -0.01em; line-height: 1.18; }
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.22;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1.18em;
  line-height: calc(1.82 * var(--_lhs, 1));
  margin: 0 0 calc(3rem * var(--_gs));
  font-weight: 450;
  letter-spacing: 0.005em;
}
.mkly-newsletter-intro p { margin: 0 0 1em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 650; text-decoration-thickness: 0.0938rem; text-underline-offset: 0.25rem; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(3rem * var(--_gs));
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 1.625rem;
  overflow: hidden;
  backdrop-filter: blur(2.25rem);
  -webkit-backdrop-filter: blur(2.25rem);
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.25rem rgba(0,0,0,0.07), 0 2rem 4.5rem rgba(0,0,0,0.10), 0 3.5rem 7rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.4), inset 0 -0.0625rem 0 rgba(0,0,0,0.06);
}
.mkly-newsletter-featured__img { width: 100%; display: block; aspect-ratio: 16/9; object-fit: cover; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-family: 'Plus Jakarta Sans', 'DM Sans', -apple-system, sans-serif;
  font-size: 0.62em;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0.5rem 1.25rem;
  border-radius: 6.25rem;
  margin: 2rem 2.25rem 0.875rem;
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.82em;
  margin: 0 2.25rem 0.5rem;
  font-weight: 550;
  line-height: 1.4;
  letter-spacing: 0.01em;
}
.mkly-newsletter-featured h2, .mkly-newsletter-featured h3 { margin: 0.5rem 2.25rem 0.875rem; }
.mkly-newsletter-featured p { margin: 0.5rem 2.25rem 0.875rem; line-height: calc(1.75 * var(--_lhs, 1)); font-size: 0.97em; font-weight: 450; }
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 0.75rem 2.25rem 2.25rem;
  font-weight: 700;
  font-size: 0.86em;
  text-decoration: none;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: opacity 0.2s;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 2.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 1.625rem;
  backdrop-filter: blur(2.25rem);
  -webkit-backdrop-filter: blur(2.25rem);
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05);
}
.mkly-newsletter-category__title {
  font-family: 'Plus Jakarta Sans', 'DM Sans', -apple-system, sans-serif;
  font-size: 0.72em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin: 0 0 1.875rem;
  padding-bottom: 1.25rem;
  border-bottom-width: 0.1875rem;
  border-bottom-style: solid;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 0;
  border-bottom: none;
  border-width: 0.0938rem;
  border-style: solid;
  border-radius: 1.375rem;
  margin-bottom: calc(1.5rem * var(--_gs));
  backdrop-filter: blur(1.75rem);
  -webkit-backdrop-filter: blur(1.75rem);
  box-shadow: 0 0.125rem 0.1875rem rgba(0,0,0,0.04), 0 0.375rem 0.875rem rgba(0,0,0,0.05), 0 1.125rem 2.5rem rgba(0,0,0,0.07), inset 0 0.0938rem 0 rgba(255,255,255,0.3), inset 0 -0.0625rem 0 rgba(0,0,0,0.04);
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  align-items: start;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: 100%;
  float: none;
  aspect-ratio: 16/10;
  object-fit: cover;
  display: block;
  border-radius: 0;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
  padding: 1.25rem 2.25rem 1.5625rem;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-family: 'Plus Jakarta Sans', 'DM Sans', -apple-system, sans-serif;
  font-size: 0.6em;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0.375rem 1rem;
  border-radius: 6.25rem;
  margin-bottom: 0.75rem;
  backdrop-filter: blur(0.875rem);
  -webkit-backdrop-filter: blur(0.875rem);
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.7em;
  line-height: 1.3;
  margin-bottom: 0.5rem;
  opacity: 0.45;
}
.mkly-newsletter-item p { margin: 0 0 0.5rem; line-height: calc(1.68 * var(--_lhs, 1)); font-size: 0.95em; font-weight: 450; }
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.15em;
  font-weight: 800;
  margin: 0 0 0.625rem;
  line-height: 1.18;
  letter-spacing: -0.02em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 0.75rem;
  font-size: 0.84em;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: opacity 0.2s;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 1.5625rem 2.25rem;
  border-radius: 1.625rem;
  backdrop-filter: blur(2.25rem);
  -webkit-backdrop-filter: blur(2.25rem);
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05);
}
.mkly-newsletter-quickHits__title {
  font-family: 'Plus Jakarta Sans', 'DM Sans', -apple-system, sans-serif;
  font-size: 0.72em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin: 0 0 1.5rem;
  padding-bottom: 1.125rem;
  border-bottom-width: 0.1875rem;
  border-bottom-style: solid;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li { margin-bottom: 0.875rem; line-height: calc(1.68 * var(--_lhs, 1)); font-size: 0.96em; font-weight: 450; }
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 650; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 1.5625rem 2.25rem;
  border-radius: 1.625rem;
  backdrop-filter: blur(2.25rem);
  -webkit-backdrop-filter: blur(2.25rem);
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05);
}
.mkly-newsletter-tools__title {
  font-family: 'Plus Jakarta Sans', 'DM Sans', -apple-system, sans-serif;
  font-size: 0.72em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin: 0 0 1.5rem;
  padding-bottom: 1.125rem;
  border-bottom-width: 0.1875rem;
  border-bottom-style: solid;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 1.5625rem 2.25rem;
  border-left-width: 0.3125rem;
  border-left-style: solid;
  border-radius: 0 1.625rem 1.625rem 0;
  backdrop-filter: blur(2.25rem);
  -webkit-backdrop-filter: blur(2.25rem);
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.375rem rgba(0,0,0,0.06), 0 1.75rem 4rem rgba(0,0,0,0.08), inset 0 0.0938rem 0 rgba(255,255,255,0.3), inset 0 -0.0625rem 0 rgba(0,0,0,0.05);
  line-height: calc(1.68 * var(--_lhs, 1));
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 1rem;
  font-family: 'Plus Jakarta Sans', 'DM Sans', -apple-system, sans-serif;
  font-weight: 800;
  font-size: 0.72em;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 0.5rem; font-size: 0.96em; font-weight: 450; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 1.5625rem 2.25rem;
  border-radius: 1.625rem;
  backdrop-filter: blur(2.25rem);
  -webkit-backdrop-filter: blur(2.25rem);
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 1.0625rem 0 1.0625rem 1.75rem;
  border-left-width: 0.1875rem;
  border-left-style: solid;
  font-size: 1.15em;
  line-height: calc(1.78 * var(--_lhs, 1));
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 1.25rem;
  padding-top: 1.125rem;
  border-top-width: 0.0625rem;
  border-top-style: solid;
  font-family: 'Plus Jakarta Sans', 'DM Sans', -apple-system, sans-serif;
  font-size: 0.82em;
  font-style: normal;
  font-weight: 750;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 1.5625rem 2.25rem;
  font-style: italic;
  border-radius: 1.625rem;
  backdrop-filter: blur(2.25rem);
  -webkit-backdrop-filter: blur(2.25rem);
  border-left-width: 0.3125rem;
  border-left-style: solid;
  line-height: calc(1.78 * var(--_lhs, 1));
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.375rem rgba(0,0,0,0.06), 0 1.75rem 4rem rgba(0,0,0,0.08), inset 0 0.0938rem 0 rgba(255,255,255,0.3), inset 0 -0.0625rem 0 rgba(0,0,0,0.05);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.9em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 1.5625rem 2.25rem;
  border-radius: 1.625rem;
  backdrop-filter: blur(2.25rem);
  -webkit-backdrop-filter: blur(2.25rem);
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05);
}
.mkly-newsletter-poll__question {
  font-size: 1.22em;
  font-weight: 800;
  margin: 0 0 1.625rem;
  letter-spacing: -0.02em;
  line-height: 1.22;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 0.875rem 0;
  padding: 1.125rem 1.75rem;
  font-size: 0.96em;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-width: 0.0938rem;
  border-style: solid;
  border-radius: 0.875rem;
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  transition: box-shadow 0.2s ease, transform 0.15s ease;
  text-align: center;
  line-height: 1.4;
  box-shadow: 0 0.125rem 0.1875rem rgba(0,0,0,0.04), 0 0.375rem 0.75rem rgba(0,0,0,0.05), inset 0 0.0625rem 0 rgba(255,255,255,0.25), inset 0 -0.0625rem 0 rgba(0,0,0,0.04);
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 1.5625rem 2.25rem;
  border-radius: 1.625rem;
  backdrop-filter: blur(2.25rem);
  -webkit-backdrop-filter: blur(2.25rem);
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05);
}
.mkly-newsletter-recommendations__title {
  font-family: 'Plus Jakarta Sans', 'DM Sans', -apple-system, sans-serif;
  font-size: 0.72em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin: 0 0 1.375rem;
  padding-bottom: 1.125rem;
  border-bottom-width: 0.1875rem;
  border-bottom-style: solid;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li { margin-bottom: 0.875rem; line-height: calc(1.68 * var(--_lhs, 1)); font-size: 0.96em; font-weight: 450; }
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 650; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 1.5625rem 2.25rem;
  border-width: 0.0625rem;
  border-style: solid;
  border-radius: 1.625rem;
  backdrop-filter: blur(2.25rem);
  -webkit-backdrop-filter: blur(2.25rem);
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-family: 'Plus Jakarta Sans', 'DM Sans', -apple-system, sans-serif;
  font-size: 0.58em;
  font-weight: 750;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding: 0.375rem 1.125rem;
  border-radius: 6.25rem;
  margin-bottom: 1.25rem;
  backdrop-filter: blur(0.875rem);
  -webkit-backdrop-filter: blur(0.875rem);
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 1.375rem;
  border-radius: 1.25rem;
  box-shadow: 0 0.125rem 0.1875rem rgba(0,0,0,0.04), 0 0.375rem 0.875rem rgba(0,0,0,0.05), 0 1.125rem 2.5rem rgba(0,0,0,0.07);
}
.mkly-newsletter-sponsor p { margin: 0 0 0.625rem; line-height: calc(1.68 * var(--_lhs, 1)); font-size: 0.96em; font-weight: 450; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 1rem;
  font-weight: 700;
  font-size: 0.86em;
  text-decoration: none;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: opacity 0.2s;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(3rem * var(--_gs));
  text-align: center;
  padding: 2.125rem 2.25rem;
  border-radius: 1.625rem;
  backdrop-filter: blur(2.25rem);
  -webkit-backdrop-filter: blur(2.25rem);
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05);
}
.mkly-newsletter-outro p { margin: 0 0 0.625rem; line-height: calc(1.72 * var(--_lhs, 1)); font-size: 1.12em; font-weight: 450; }
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 1.75rem;
  font-family: 'Plus Jakarta Sans', 'DM Sans', -apple-system, sans-serif;
  font-weight: 750;
  font-size: 0.9em;
  text-decoration: none !important;
  padding: 1.125rem 2.75rem;
  border-radius: 0.875rem;
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  border-width: 0.0938rem;
  border-style: solid;
  transition: box-shadow 0.2s ease;
  line-height: 1.4;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.25rem rgba(0,0,0,0.07), 0 1.5rem 3rem rgba(0,0,0,0.07), inset 0 0.0938rem 0 rgba(255,255,255,0.3), inset 0 -0.0625rem 0 rgba(0,0,0,0.05);
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(3rem * var(--_gs));
  padding: 1.5625rem 2.25rem;
  border-radius: 1.625rem;
  backdrop-filter: blur(2.25rem);
  -webkit-backdrop-filter: blur(2.25rem);
  border-width: 0.0625rem;
  border-style: solid;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05);
}
.mkly-newsletter-custom__title {
  font-family: 'Plus Jakarta Sans', 'DM Sans', -apple-system, sans-serif;
  font-size: 0.72em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin: 0 0 1.375rem;
  padding-bottom: 1.125rem;
  border-bottom-width: 0.1875rem;
  border-bottom-style: solid;
  line-height: 1.2;
}
.mkly-newsletter-custom p { margin: 0 0 0.625rem; line-height: calc(1.68 * var(--_lhs, 1)); font-size: 0.96em; font-weight: 450; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(3rem * var(--_gs)); font-weight: 450; }
.mkly-core-image { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-divider { margin: calc(3rem * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(3rem * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(3rem * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(3rem * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 0.5rem; font-size: 1.12em; line-height: calc(1.65 * var(--_lhs, 1)); font-weight: 450; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 1.375rem;
  padding: 1.125rem 2.75rem;
  border-radius: 0.875rem;
  font-family: 'Plus Jakarta Sans', 'DM Sans', -apple-system, sans-serif;
  font-weight: 750;
  font-size: 0.9375rem;
  text-decoration: none !important;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  line-height: 1.4;
  box-shadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.25rem rgba(0,0,0,0.07), 0 1.5rem 3rem rgba(0,0,0,0.07), inset 0 0.0938rem 0 rgba(255,255,255,0.25);
  transition: opacity 0.15s, transform 0.1s;
}
.mkly-core-footer { margin-top: calc(3rem * var(--_gs)); text-align: center; font-size: 0.83em; line-height: calc(1.6 * var(--_lhs, 1)); font-weight: 450; letter-spacing: 0.005em; }
.mkly-core-footer p { margin: 0 0 0.375rem; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; text-underline-offset: 0.1875rem; }`,
  css: `core/image.img
  borderRadius: 1.375rem

core/button.link
  padding: 1.125rem 2.75rem
  borderRadius: 0.875rem

core/code
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  borderRadius: 1.625rem
  padding: 1.125rem 2rem
  backdrop-filter: blur(2.25rem)

core/quote
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  borderLeftWidth: 0.1875rem
  padding: 1.125rem 2rem
  borderRadius: 0 1.625rem 1.625rem 0

core/hero
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  borderRadius: 1.625rem

core/hero.img
  borderRadius: 1.625rem

core/hero.content
  padding: 1.625rem 2.25rem

core/section.title
  paddingBottom: 0.8125rem

core/card
  borderRadius: 1.625rem
  overflow: hidden
  backdrop-filter: blur(2.25rem)
  marginBottom: calc(1.75rem * var(--mkly-gap-scale, 1))

core/card.body
  padding: 1.3125rem 2rem

core/header
  paddingBottom: 1.125rem

core/footer
  paddingTop: 1.125rem
  marginTop: calc(3rem * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.83em
  background: none

core/cta
  textAlign: center
  marginTop: calc(3rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 1.9375rem 2.25rem
  borderRadius: 1.625rem
  backdrop-filter: blur(2.25rem)

core/cta.button
  padding: 1.125rem 2.75rem
  borderRadius: 0.875rem

newsletter/intro
  fontSize: 1.18em
  lineHeight: calc(1.82 * var(--mkly-line-height-scale, 1))
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  fontWeight: 450

newsletter/featured
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  borderWidth: 0.0625rem
  borderStyle: solid
  borderRadius: 1.625rem
  overflow: hidden
  boxShadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.25rem rgba(0,0,0,0.07), 0 2rem 4.5rem rgba(0,0,0,0.10), 0 3.5rem 7rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.4), inset 0 -0.0625rem 0 rgba(0,0,0,0.06)

newsletter/featured.img
  width: 100%
  aspectRatio: 16/9
  objectFit: cover

newsletter/featured.source
  fontSize: 0.62em
  fontWeight: 750
  textTransform: uppercase
  letterSpacing: 0.12em
  padding: 0.5rem 1.25rem
  borderRadius: 6.25rem
  marginTop: 2rem
  marginRight: 2.25rem
  marginBottom: 0.875rem
  marginLeft: 2.25rem
  lineHeight: 1.2

newsletter/featured.author
  fontSize: 0.82em
  marginRight: 2.25rem
  marginBottom: 0.5rem
  marginLeft: 2.25rem
  fontWeight: 550
  lineHeight: 1.4

newsletter/featured.link
  marginTop: 0.75rem
  marginRight: 2.25rem
  marginBottom: 2.25rem
  marginLeft: 2.25rem
  fontWeight: 700
  fontSize: 0.86em
  textDecoration: none
  textTransform: uppercase

newsletter/category
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 2.25rem
  borderWidth: 0.0625rem
  borderStyle: solid
  borderRadius: 1.625rem
  boxShadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05)

newsletter/category.title
  fontSize: 0.72em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.18em
  marginBottom: 1.875rem
  paddingBottom: 0.8125rem
  borderBottomWidth: 0.1875rem
  borderBottomStyle: solid
  lineHeight: 1.2

newsletter/item
  padding: 0
  borderBottom: none
  borderWidth: 0.0938rem
  borderStyle: solid
  borderRadius: 1.375rem
  marginBottom: calc(1.5rem * var(--mkly-gap-scale, 1))
  boxShadow: 0 0.125rem 0.1875rem rgba(0,0,0,0.04), 0 0.375rem 0.875rem rgba(0,0,0,0.05), 0 1.125rem 2.5rem rgba(0,0,0,0.07), inset 0 0.0938rem 0 rgba(255,255,255,0.3), inset 0 -0.0625rem 0 rgba(0,0,0,0.04)
  overflow: hidden
  display: grid
  gridTemplateColumns: 1fr
  gap: 0
  alignItems: start

newsletter/item.img
  borderRadius: 0
  aspectRatio: 16/10
  objectFit: cover
  width: 100%

newsletter/item.body
  overflow: visible
  minWidth: 0
  padding: 1.125rem 2.25rem 1.4375rem

newsletter/item.meta
  fontSize: 0.7em

newsletter/item.source
  fontSize: 0.6em
  fontWeight: 750
  textTransform: uppercase
  letterSpacing: 0.12em
  padding: 0.375rem 1rem
  borderRadius: 6.25rem
  marginBottom: 0.75rem
  lineHeight: 1.2

newsletter/quickHits
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 2.25rem
  borderRadius: 1.625rem
  borderWidth: 0.0625rem
  borderStyle: solid
  boxShadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05)

newsletter/quickHits.title
  fontSize: 0.72em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.18em
  marginBottom: 1.5rem
  paddingBottom: 0.75rem
  borderBottomWidth: 0.1875rem
  borderBottomStyle: solid
  lineHeight: 1.2

newsletter/tools
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 2.25rem
  borderRadius: 1.625rem
  borderWidth: 0.0625rem
  borderStyle: solid
  boxShadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05)

newsletter/tools.title
  fontSize: 0.72em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.18em
  marginBottom: 1.5rem
  paddingBottom: 0.75rem
  borderBottomWidth: 0.1875rem
  borderBottomStyle: solid
  lineHeight: 1.2

newsletter/tipOfTheDay
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 2.25rem
  borderRadius: 0 1.625rem 1.625rem 0
  boxShadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.375rem rgba(0,0,0,0.06), 0 1.75rem 4rem rgba(0,0,0,0.08), inset 0 0.0938rem 0 rgba(255,255,255,0.3), inset 0 -0.0625rem 0 rgba(0,0,0,0.05)
  lineHeight: calc(1.68 * var(--mkly-line-height-scale, 1))

newsletter/tipOfTheDay.title
  marginBottom: 1rem
  fontWeight: 800
  fontSize: 0.72em
  textTransform: uppercase
  letterSpacing: 0.16em
  lineHeight: 1.2

newsletter/community
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 2.25rem
  borderRadius: 1.625rem
  borderWidth: 0.0625rem
  borderStyle: solid
  boxShadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05)

newsletter/community.quote
  padding: 1rem 0 1rem 1.75rem
  fontSize: 1.15em
  lineHeight: calc(1.78 * var(--mkly-line-height-scale, 1))

newsletter/community.author
  marginTop: 1.25rem
  paddingTop: 0.75rem
  fontSize: 0.82em
  fontWeight: 750
  textTransform: uppercase

newsletter/personalNote
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 2.25rem
  borderRadius: 1.625rem
  lineHeight: calc(1.78 * var(--mkly-line-height-scale, 1))
  boxShadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.375rem rgba(0,0,0,0.06), 0 1.75rem 4rem rgba(0,0,0,0.08), inset 0 0.0938rem 0 rgba(255,255,255,0.3), inset 0 -0.0625rem 0 rgba(0,0,0,0.05)

newsletter/poll
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 2.25rem
  borderRadius: 1.625rem
  borderWidth: 0.0625rem
  borderStyle: solid
  boxShadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05)

newsletter/poll.question
  fontSize: 1.22em
  fontWeight: 800
  marginBottom: 1.625rem
  letterSpacing: -0.02em
  lineHeight: 1.22

newsletter/poll.option
  marginTop: 0.875rem
  marginBottom: 0.875rem
  padding: 1.125rem 1.75rem
  fontSize: 0.96em
  fontWeight: 600
  textDecoration: none
  borderWidth: 0.0938rem
  borderStyle: solid
  borderRadius: 0.875rem
  textAlign: center
  lineHeight: 1.4
  boxShadow: 0 0.125rem 0.1875rem rgba(0,0,0,0.04), 0 0.375rem 0.75rem rgba(0,0,0,0.05), inset 0 0.0625rem 0 rgba(255,255,255,0.25), inset 0 -0.0625rem 0 rgba(0,0,0,0.04)

newsletter/recommendations
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 2.25rem
  borderRadius: 1.625rem
  borderWidth: 0.0625rem
  borderStyle: solid
  boxShadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05)

newsletter/recommendations.title
  fontSize: 0.72em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.18em
  marginBottom: 1.375rem
  paddingBottom: 0.75rem
  borderBottomWidth: 0.1875rem
  borderBottomStyle: solid
  lineHeight: 1.2

newsletter/sponsor
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 2.25rem
  borderWidth: 0.0625rem
  borderStyle: solid
  borderRadius: 1.625rem
  boxShadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05)

newsletter/sponsor.badge
  fontSize: 0.58em
  fontWeight: 750
  textTransform: uppercase
  letterSpacing: 0.14em
  padding: 0.375rem 1.125rem
  borderRadius: 6.25rem
  marginBottom: 1.25rem
  lineHeight: 1.2

newsletter/sponsor.img
  maxWidth: 100%
  marginBottom: 1.375rem
  borderRadius: 1.25rem
  boxShadow: 0 0.125rem 0.1875rem rgba(0,0,0,0.04), 0 0.375rem 0.875rem rgba(0,0,0,0.05), 0 1.125rem 2.5rem rgba(0,0,0,0.07)

newsletter/sponsor.link
  marginTop: 1rem
  fontWeight: 700
  fontSize: 0.86em
  textDecoration: none
  textTransform: uppercase

newsletter/outro
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  textAlign: center
  padding: 1.9375rem 2.25rem
  borderRadius: 1.625rem
  borderWidth: 0.0625rem
  borderStyle: solid
  boxShadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05)

newsletter/outro.cta
  marginTop: 1.75rem
  fontWeight: 750
  fontSize: 0.9em
  textDecoration: none !important
  padding: 1.125rem 2.75rem
  borderRadius: 0.875rem
  borderWidth: 0.0938rem
  borderStyle: solid
  lineHeight: 1.4
  textTransform: uppercase
  boxShadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.25rem rgba(0,0,0,0.07), 0 1.5rem 3rem rgba(0,0,0,0.07), inset 0 0.0938rem 0 rgba(255,255,255,0.3), inset 0 -0.0625rem 0 rgba(0,0,0,0.05)

newsletter/custom
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
  padding: 1.4375rem 2.25rem
  borderRadius: 1.625rem
  borderWidth: 0.0625rem
  borderStyle: solid
  boxShadow: 0 0.125rem 0.25rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(0,0,0,0.06), 0 1.75rem 3.75rem rgba(0,0,0,0.09), 0 3rem 6rem rgba(0,0,0,0.05), inset 0 0.0938rem 0 rgba(255,255,255,0.35), inset 0 -0.0625rem 0 rgba(0,0,0,0.05)

newsletter/custom.title
  fontSize: 0.72em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.18em
  marginBottom: 1.375rem
  paddingBottom: 0.75rem
  borderBottomWidth: 0.1875rem
  borderBottomStyle: solid
  lineHeight: 1.2

core/heading
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(3rem * var(--mkly-gap-scale, 1))
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(3rem * var(--mkly-gap-scale, 1))
`,
},
];
