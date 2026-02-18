import type { MklyPreset } from '@mklyml/core';

export const NEWSLETTER_PRESETS: MklyPreset[] = [
  {
    name: 'default',
    displayName: 'Newsletter/Default',
    description: 'Premium newsletter — card-based items, refined shadows, modern typography',
    rawCss: `/* newsletter kit — default preset */

.mkly-document {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  padding: 0 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --_gs: var(--mkly-gap-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1.1em;
  line-height: 1.8;
  margin: 0 0 calc(36px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; text-decoration-thickness: 1.5px; text-underline-offset: 2px; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(28px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06), 0 8px 28px rgba(0,0,0,0.04);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 5px 12px;
  border-radius: 6px;
  margin: 22px 24px 10px;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  margin: 0 24px 8px;
  line-height: 1.4;
  font-weight: 500;
}
.mkly-newsletter-featured p {
  margin: 8px 24px 14px;
  line-height: 1.72;
  font-size: 0.96em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 6px 24px 24px;
  font-weight: 600;
  font-size: 0.88em;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: opacity 0.15s;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(36px * var(--_gs));
  padding-top: calc(32px * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 20px;
  padding-bottom: 14px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 20px 22px;
  border-bottom: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 12px;
  margin-bottom: calc(18px * var(--_gs));
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  position: relative;
  transition: box-shadow 0.2s ease;
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 16px;
  align-items: start;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: none;
  float: none;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 10px;
  display: block;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.64em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 5px;
  margin-bottom: 8px;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  line-height: 1.3;
  margin-bottom: 6px;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 8px;
  line-height: 1.68;
  font-size: 0.94em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.08em;
  font-weight: 650;
  margin: 0 0 6px;
  line-height: 1.3;
  letter-spacing: -0.015em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 8px;
  font-size: 0.84em;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: opacity 0.15s;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 14px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-quickHits__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li {
  margin-bottom: 12px;
  line-height: 1.65;
  font-size: 0.95em;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 14px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-tools__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 18px;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-left-width: 4px;
  border-left-style: solid;
  border-radius: 0 14px 14px 0;
  line-height: 1.68;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 0.72em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 26px 28px;
  border-radius: 14px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 20px 0 20px 24px;
  border-left-width: 3px;
  border-left-style: solid;
  line-height: 1.78;
  font-size: 1.06em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 14px;
  padding-top: 12px;
  border-top-width: 1px;
  border-top-style: solid;
  font-size: 0.84em;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.02em;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 26px 28px;
  font-style: italic;
  border-radius: 14px;
  border-left-width: 4px;
  border-left-style: solid;
  line-height: 1.78;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 28px;
  border-radius: 14px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-poll__question {
  font-size: 1.12em;
  font-weight: 700;
  margin: 0 0 20px;
  line-height: 1.35;
  letter-spacing: -0.01em;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 10px 0;
  padding: 14px 20px;
  font-size: 0.95em;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 10px;
  transition: box-shadow 0.2s ease, transform 0.15s ease;
  line-height: 1.4;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 14px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-recommendations__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li {
  margin-bottom: 12px;
  line-height: 1.65;
  font-size: 0.95em;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-width: 1px;
  border-style: solid;
  border-radius: 14px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.58em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px 10px;
  border-radius: 5px;
  margin-bottom: 14px;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor p {
  margin: 0 0 10px;
  line-height: 1.68;
  font-size: 0.95em;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 10px;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: opacity 0.15s;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(28px * var(--_gs));
  text-align: center;
  padding: 36px 28px;
  border-radius: 14px;
}
.mkly-newsletter-outro p {
  margin: 0 0 10px;
  line-height: 1.72;
  font-size: 1.06em;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 20px;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none !important;
  padding: 14px 34px;
  border-radius: 10px;
  transition: opacity 0.15s, transform 0.15s;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 14px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-custom__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 10px;
  line-height: 1.68;
  font-size: 0.95em;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(28px * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-divider { margin: calc(28px * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(28px * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(28px * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 8px; font-size: 1.05em; line-height: 1.6; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 16px;
  padding: 14px 34px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none !important;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: opacity 0.15s, transform 0.1s;
}
.mkly-core-footer { margin-top: calc(28px * var(--_gs)); text-align: center; font-size: 0.85em; line-height: 1.6; }
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
    css: `core/image.img
  borderRadius: 14px

core/button.link
  padding: 14px 34px
  borderRadius: 10px
  fontWeight: 600

core/code
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderRadius: 14px
  padding: 20px 24px

core/quote
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 20px 28px
  borderLeftWidth: 3px

core/hero
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderRadius: 14px
  overflow: hidden

core/hero.img
  borderRadius: 14px

core/hero.content
  padding: 32px 28px

core/section.title
  paddingBottom: 14px
  fontSize: 0.72em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em

core/card
  borderRadius: 14px
  overflow: hidden
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))

core/card.body
  padding: 24px

core/header
  paddingBottom: 24px

core/footer
  paddingTop: 24px
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 36px 28px
  borderRadius: 14px

core/cta.button
  padding: 14px 34px
  borderRadius: 10px
  fontWeight: 600

newsletter/featured
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderRadius: 14px
  overflow: hidden

newsletter/featured.source
  padding: 5px 12px
  borderRadius: 6px

newsletter/category.title
  paddingBottom: 14px

newsletter/item
  marginBottom: calc(16px * var(--mkly-gap-scale, 1))
  padding: 20px 22px
  borderRadius: 12px
  display: grid
  gridTemplateColumns: 140px 1fr
  gap: 16px
  alignItems: start

newsletter/item.img
  borderRadius: 10px
  aspectRatio: 3/4
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0

newsletter/item.meta
  fontSize: 0.72em

newsletter/quickHits
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 14px

newsletter/tools
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 14px

newsletter/tipOfTheDay
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 0 14px 14px 0

newsletter/community
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 26px 28px
  borderRadius: 14px

newsletter/community.quote
  padding: 20px 0 20px 24px

newsletter/personalNote
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 26px 28px
  borderRadius: 14px

newsletter/poll
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 28px
  borderRadius: 14px

newsletter/poll.option
  padding: 14px 20px
  borderRadius: 10px

newsletter/recommendations
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 14px

newsletter/sponsor
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 14px

newsletter/sponsor.badge
  padding: 4px 10px
  borderRadius: 5px

newsletter/sponsor.img
  borderRadius: 10px

newsletter/outro
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 36px 28px
  borderRadius: 14px

newsletter/outro.cta
  padding: 14px 34px
  borderRadius: 10px

newsletter/custom
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 14px
newsletter/intro
  fontSize: 1.1em
  lineHeight: 1.8
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  paddingTop: calc(32px * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
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
  padding: 0 16px;
  --_gs: var(--mkly-gap-scale, 1);
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
  line-height: 1.55;
  margin: 0 0 calc(36px * var(--_gs));
  font-weight: 500;
}
.mkly-newsletter-intro p { margin: 0 0 0.75em; }
.mkly-newsletter-intro a { font-weight: 700; text-transform: uppercase; letter-spacing: 0.02em; }

.mkly-newsletter-featured {
  margin: 0 0 calc(36px * var(--_gs));
  border-width: 3px;
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
  padding: 6px 14px;
  margin: 20px 22px 8px;
  border-radius: 0;
  border-width: 2px;
  border-style: solid;
  line-height: 1;
}
.mkly-newsletter-featured__author {
  font-size: 0.82em;
  margin: 0 22px 8px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.mkly-newsletter-featured p {
  margin: 10px 22px 14px;
  line-height: 1.5;
  font-size: 0.92em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 8px 22px 22px;
  font-weight: 900;
  font-size: 0.85em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  padding-bottom: 2px;
}

.mkly-newsletter-category {
  margin: 0 0 calc(36px * var(--_gs));
  padding-top: calc(32px * var(--_gs));
  border-top-width: 4px;
  border-top-style: solid;
}
.mkly-newsletter-category__title {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 900;
  margin: 0 0 20px;
  padding-bottom: 10px;
  border-bottom-width: 4px;
  border-bottom-style: solid;
  line-height: 1.1;
}

.mkly-newsletter-item {
  padding: 0;
  border-bottom: none;
  border-width: 3px;
  border-style: solid;
  border-radius: 0;
  margin-bottom: calc(16px * var(--_gs));
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
  padding: 20px 22px 22px;
  overflow: visible;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 4px 10px;
  margin-bottom: 8px;
  border-radius: 0;
  border-width: 2px;
  border-style: solid;
  line-height: 1;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.68em;
  line-height: 1.3;
  margin-bottom: 6px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.mkly-newsletter-item p {
  margin: 0 0 8px;
  line-height: 1.5;
  font-size: 0.92em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.1em;
  font-weight: 900;
  margin: 0 0 8px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  line-height: 1.15;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 6px;
  font-size: 0.82em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  padding-bottom: 1px;
}

.mkly-newsletter-quickHits {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 22px;
  border-radius: 0;
  border-width: 3px;
  border-style: solid;
}
.mkly-newsletter-quickHits__title {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 900;
  margin: 0 0 14px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  padding-bottom: 8px;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-quickHits li {
  margin-bottom: 10px;
  line-height: 1.5;
  font-size: 0.92em;
  padding-left: 16px;
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
  margin: 0 0 calc(36px * var(--_gs));
  padding: 22px;
  border-radius: 0;
  border-width: 3px;
  border-style: solid;
}
.mkly-newsletter-tools__title {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 900;
  margin: 0 0 16px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  padding-bottom: 8px;
}

.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 22px;
  border-left-width: 8px;
  border-left-style: solid;
  border-radius: 0;
  line-height: 1.5;
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 10px;
  font-weight: 900;
  font-size: 0.82em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; font-size: 0.92em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

.mkly-newsletter-community {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 22px;
  border-radius: 0;
  border-width: 3px;
  border-style: solid;
}
.mkly-newsletter-community__quote {
  font-style: normal;
  margin: 0;
  padding: 18px 22px;
  border-left-width: 6px;
  border-left-style: solid;
  font-size: 1em;
  line-height: 1.5;
  font-weight: 500;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 12px;
  font-size: 0.82em;
  font-style: normal;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.mkly-newsletter-personalNote {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 22px;
  font-style: normal;
  border-radius: 0;
  border-width: 3px;
  border-style: solid;
  line-height: 1.55;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.75em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

.mkly-newsletter-poll {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 24px;
  border-radius: 0;
  border-width: 3px;
  border-style: solid;
}
.mkly-newsletter-poll__question {
  font-size: 1.15em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 18px;
  line-height: 1.2;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 10px 0;
  padding: 14px 18px;
  font-size: 0.92em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  text-decoration: none;
  cursor: pointer;
  border-width: 3px;
  border-style: solid;
  border-radius: 0;
  transition: transform 0.08s;
  text-align: center;
  line-height: 1.3;
}

.mkly-newsletter-recommendations {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 22px;
  border-radius: 0;
  border-width: 3px;
  border-style: solid;
}
.mkly-newsletter-recommendations__title {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 900;
  margin: 0 0 14px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  padding-bottom: 8px;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-recommendations li {
  margin-bottom: 10px;
  line-height: 1.5;
  font-size: 0.92em;
  padding-left: 16px;
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
  margin: 0 0 calc(36px * var(--_gs));
  padding: 22px;
  border-width: 3px;
  border-style: double;
  border-radius: 0;
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.6em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding: 4px 12px;
  border-radius: 0;
  margin-bottom: 12px;
  border-width: 2px;
  border-style: solid;
  line-height: 1;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 14px;
  border-radius: 0;
  border-width: 2px;
  border-style: solid;
}
.mkly-newsletter-sponsor p { margin: 0 0 8px; line-height: 1.5; font-size: 0.92em; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 10px;
  font-weight: 900;
  font-size: 0.85em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  padding-bottom: 2px;
}

.mkly-newsletter-outro {
  margin: 0 0 calc(36px * var(--_gs));
  text-align: left;
  padding: 28px 0;
  border-top-width: 4px;
  border-top-style: solid;
}
.mkly-newsletter-outro p { margin: 0 0 8px; line-height: 1.5; font-size: 0.95em; }
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 18px;
  font-weight: 900;
  font-size: 0.85em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none !important;
  padding: 14px 32px;
  border-radius: 0;
  border-width: 3px;
  border-style: solid;
  transition: transform 0.08s;
  line-height: 1.2;
}

.mkly-newsletter-custom {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 22px;
  border-radius: 0;
  border-width: 3px;
  border-style: solid;
}
.mkly-newsletter-custom__title {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 900;
  margin: 0 0 14px;
}
.mkly-newsletter-custom p { margin: 0 0 8px; line-height: 1.5; font-size: 0.92em; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(36px * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-divider { margin: calc(36px * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(36px * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(36px * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 8px; font-size: 0.95em; line-height: 1.5; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 16px;
  padding: 14px 32px;
  border-radius: 0;
  font-weight: 900;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-decoration: none !important;
  line-height: 1.4;
  box-shadow: none;
  border-width: 3px;
  border-style: solid;
}
.mkly-core-footer { margin-top: calc(36px * var(--_gs)); text-align: center; font-size: 0.85em; line-height: 1.6; }
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
    css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 14px 32px
  borderRadius: 0
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.04em

core/divider
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  marginTop: calc(36px * var(--mkly-gap-scale, 1))
  height: 3px

core/code
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  borderWidth: 3px
  borderRadius: 0
  padding: 18px 22px

core/quote
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  borderLeftWidth: 6px
  padding: 18px 24px
  fontStyle: normal

core/hero
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  borderRadius: 0

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 28px 24px

core/section.title
  paddingBottom: 12px
  borderBottomWidth: 4px
  textTransform: uppercase
  letterSpacing: 0.04em

core/card
  borderWidth: 3px
  borderRadius: 0
  overflow: hidden
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))

core/card.body
  padding: 22px

core/header
  paddingBottom: 22px
  borderBottomWidth: 3px

core/footer
  paddingTop: 22px
  borderTopWidth: 3px
  marginTop: calc(36px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(36px * var(--mkly-gap-scale, 1))
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 32px 24px
  borderRadius: 0

core/cta.button
  padding: 14px 32px
  borderRadius: 0
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.04em
newsletter/intro
  fontSize: 1.05em
  lineHeight: 1.55
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  fontWeight: 500

newsletter/featured
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  borderWidth: 3px
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
  padding: 6px 14px
  marginTop: 20px
  marginRight: 22px
  marginBottom: 8px
  marginLeft: 22px
  borderRadius: 0
  borderWidth: 2px
  borderStyle: solid
  lineHeight: 1

newsletter/featured.author
  fontSize: 0.82em
  marginRight: 22px
  marginBottom: 8px
  marginLeft: 22px
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.03em

newsletter/featured.link
  marginTop: 8px
  marginRight: 22px
  marginBottom: 22px
  marginLeft: 22px
  fontWeight: 900
  fontSize: 0.85em
  textTransform: uppercase
  letterSpacing: 0.06em
  textDecoration: none
  paddingBottom: 2px

newsletter/category
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  paddingTop: calc(32px * var(--mkly-gap-scale, 1))

newsletter/category.title
  fontSize: 0.75em
  textTransform: uppercase
  letterSpacing: 0.12em
  fontWeight: 900
  marginBottom: 20px
  paddingBottom: 10px
  lineHeight: 1.1

newsletter/item
  padding: 0
  borderBottom: none
  borderWidth: 3px
  borderStyle: solid
  borderRadius: 0
  marginBottom: calc(16px * var(--mkly-gap-scale, 1))
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  padding: 20px 22px 22px

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
  padding: 4px 10px
  marginBottom: 8px
  borderRadius: 0
  borderWidth: 2px
  borderStyle: solid
  lineHeight: 1

newsletter/quickHits
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 22px
  borderRadius: 0
  borderWidth: 3px
  borderStyle: solid

newsletter/quickHits.title
  fontSize: 0.75em
  textTransform: uppercase
  letterSpacing: 0.12em
  fontWeight: 900
  marginBottom: 14px
  paddingBottom: 8px

newsletter/tools
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 22px
  borderRadius: 0
  borderWidth: 3px
  borderStyle: solid

newsletter/tools.title
  fontSize: 0.75em
  textTransform: uppercase
  letterSpacing: 0.12em
  fontWeight: 900
  marginBottom: 16px
  paddingBottom: 8px

newsletter/tipOfTheDay
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 22px
  borderRadius: 0
  lineHeight: 1.5

newsletter/tipOfTheDay.title
  marginBottom: 10px
  fontWeight: 900
  fontSize: 0.82em
  textTransform: uppercase
  letterSpacing: 0.1em

newsletter/community
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 22px
  borderRadius: 0
  borderWidth: 3px
  borderStyle: solid

newsletter/community.quote
  padding: 18px 22px
  fontSize: 1em
  lineHeight: 1.5
  fontWeight: 500

newsletter/community.author
  marginTop: 12px
  fontSize: 0.82em
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.06em

newsletter/personalNote
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 22px
  borderRadius: 0
  borderWidth: 3px
  borderStyle: solid
  lineHeight: 1.55

newsletter/poll
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 24px
  borderRadius: 0
  borderWidth: 3px
  borderStyle: solid

newsletter/poll.question
  fontSize: 1.15em
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.04em
  marginBottom: 18px
  lineHeight: 1.2

newsletter/poll.option
  marginTop: 10px
  marginBottom: 10px
  padding: 14px 18px
  fontSize: 0.92em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.03em
  textDecoration: none
  borderWidth: 3px
  borderStyle: solid
  borderRadius: 0
  textAlign: center
  lineHeight: 1.3

newsletter/recommendations
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 22px
  borderRadius: 0
  borderWidth: 3px
  borderStyle: solid

newsletter/recommendations.title
  fontSize: 0.75em
  textTransform: uppercase
  letterSpacing: 0.12em
  fontWeight: 900
  marginBottom: 14px
  paddingBottom: 8px

newsletter/sponsor
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 22px
  borderWidth: 3px
  borderStyle: double
  borderRadius: 0

newsletter/sponsor.badge
  fontSize: 0.6em
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.14em
  padding: 4px 12px
  borderRadius: 0
  marginBottom: 12px
  borderWidth: 2px
  borderStyle: solid
  lineHeight: 1

newsletter/sponsor.img
  maxWidth: 100%
  marginBottom: 14px
  borderRadius: 0
  borderWidth: 2px
  borderStyle: solid

newsletter/sponsor.link
  marginTop: 10px
  fontWeight: 900
  fontSize: 0.85em
  textTransform: uppercase
  letterSpacing: 0.06em
  textDecoration: none
  paddingBottom: 2px

newsletter/outro
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  textAlign: left
  padding: 28px 0

newsletter/outro.cta
  marginTop: 18px
  fontWeight: 900
  fontSize: 0.85em
  textTransform: uppercase
  letterSpacing: 0.06em
  textDecoration: none !important
  padding: 14px 32px
  borderRadius: 0
  borderWidth: 3px
  borderStyle: solid
  lineHeight: 1.2

newsletter/custom
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 22px
  borderRadius: 0
  borderWidth: 3px
  borderStyle: solid

newsletter/custom.title
  fontSize: 0.75em
  textTransform: uppercase
  letterSpacing: 0.12em
  fontWeight: 900
  marginBottom: 14px

core/heading
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
`,
  },

  {
    name: 'neon',
    displayName: 'Newsletter/Neon',
    description: 'Futuristic glow — pill shapes, smooth transitions, glowing shadows',
    rawCss: `/* newsletter kit — neon preset */

.mkly-document {
  font-family: 'Space Grotesk', 'Inter', -apple-system, system-ui, sans-serif;
  padding: 0 24px;
  letter-spacing: 0.01em;
  -webkit-font-smoothing: antialiased;
  --_gs: var(--mkly-gap-scale, 1);
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
  line-height: 1.75;
  margin: 0 0 calc(36px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.85em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; text-decoration-thickness: 2px; text-underline-offset: 3px; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(28px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(0,0,0,0.08), 0 4px 20px rgba(0,0,0,0.04);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.63em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 5px 14px;
  border-radius: 100px;
  margin: 22px 26px 10px;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  margin: 0 26px 8px;
  font-weight: 500;
  line-height: 1.4;
}
.mkly-newsletter-featured p {
  margin: 8px 26px 14px;
  line-height: 1.72;
  font-size: 0.95em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 6px 26px 26px;
  font-weight: 700;
  font-size: 0.82em;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: opacity 0.3s ease;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(36px * var(--_gs));
  padding-top: calc(32px * var(--_gs));
  border-top-width: 1px;
  border-top-style: solid;
}
.mkly-newsletter-category__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 22px;
  padding-bottom: 14px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 20px 22px;
  border-bottom: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 14px;
  margin-bottom: calc(16px * var(--_gs));
  box-shadow: 0 0 20px rgba(0,0,0,0.04);
  position: relative;
  transition: box-shadow 0.3s ease;
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 14px;
  align-items: start;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: none;
  float: none;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 12px;
  display: block;
  box-shadow: 0 0 16px rgba(0,0,0,0.06);
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.62em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 4px 12px;
  border-radius: 100px;
  margin-bottom: 8px;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.68em;
  line-height: 1.3;
  margin-bottom: 6px;
  opacity: 0.55;
  letter-spacing: 0.04em;
}
.mkly-newsletter-item p { margin: 0 0 8px; line-height: 1.68; font-size: 0.94em; }
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.08em;
  font-weight: 700;
  margin: 0 0 6px;
  line-height: 1.25;
  letter-spacing: -0.02em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 8px;
  font-size: 0.8em;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: opacity 0.3s ease;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 0 24px rgba(0,0,0,0.04);
}
.mkly-newsletter-quickHits__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li { margin-bottom: 12px; line-height: 1.65; font-size: 0.95em; }
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 0 24px rgba(0,0,0,0.04);
}
.mkly-newsletter-tools__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 18px;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-left-width: 3px;
  border-left-style: solid;
  border-radius: 0 16px 16px 0;
  line-height: 1.68;
  box-shadow: 0 0 20px rgba(0,0,0,0.04);
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 26px 28px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 0 24px rgba(0,0,0,0.04);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 20px 0 20px 24px;
  border-left-width: 3px;
  border-left-style: solid;
  font-size: 1.06em;
  line-height: 1.78;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 14px;
  padding-top: 12px;
  border-top-width: 1px;
  border-top-style: solid;
  font-size: 0.84em;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 26px 28px;
  font-style: italic;
  border-radius: 16px;
  border-left-width: 3px;
  border-left-style: solid;
  line-height: 1.78;
  box-shadow: 0 0 20px rgba(0,0,0,0.04);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 28px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 0 24px rgba(0,0,0,0.04);
}
.mkly-newsletter-poll__question {
  font-size: 1.14em;
  font-weight: 700;
  margin: 0 0 20px;
  letter-spacing: -0.02em;
  line-height: 1.3;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 10px 0;
  padding: 14px 22px;
  font-size: 0.95em;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 100px;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  text-align: center;
  line-height: 1.4;
  box-shadow: 0 0 12px rgba(0,0,0,0.03);
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 0 24px rgba(0,0,0,0.04);
}
.mkly-newsletter-recommendations__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li { margin-bottom: 12px; line-height: 1.65; font-size: 0.95em; }
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(0,0,0,0.04);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.58em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px 12px;
  border-radius: 100px;
  margin-bottom: 14px;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 16px;
  border-radius: 12px;
  box-shadow: 0 0 16px rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor p { margin: 0 0 10px; line-height: 1.68; font-size: 0.95em; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 10px;
  font-weight: 700;
  font-size: 0.86em;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  transition: opacity 0.3s ease;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(28px * var(--_gs));
  text-align: center;
  padding: 36px 28px;
  border-radius: 16px;
}
.mkly-newsletter-outro p { margin: 0 0 10px; line-height: 1.72; font-size: 1.06em; }
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 22px;
  font-weight: 700;
  font-size: 0.88em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-decoration: none !important;
  padding: 14px 36px;
  border-radius: 100px;
  border-width: 1px;
  border-style: solid;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
  line-height: 1.4;
  box-shadow: 0 0 24px rgba(0,0,0,0.06);
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 0 24px rgba(0,0,0,0.04);
}
.mkly-newsletter-custom__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.mkly-newsletter-custom p { margin: 0 0 10px; line-height: 1.68; font-size: 0.95em; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(28px * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-divider { margin: calc(28px * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(28px * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(28px * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 8px; font-size: 1.05em; line-height: 1.6; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 16px;
  padding: 14px 36px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none !important;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0 0 20px rgba(0,0,0,0.15);
  transition: box-shadow 0.2s, transform 0.1s;
}
.mkly-core-footer { margin-top: calc(28px * var(--_gs)); text-align: center; font-size: 0.85em; line-height: 1.6; }
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
    css: `core/image.img
  borderRadius: 16px

core/button.link
  padding: 14px 36px
  borderRadius: 100px
  fontWeight: 700

core/code
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderRadius: 16px
  padding: 18px 22px

core/quote
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderLeftWidth: 3px
  padding: 20px 0 20px 24px
  borderRadius: 0 16px 16px 0

core/hero
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderRadius: 16px

core/hero.img
  borderRadius: 16px

core/hero.content
  padding: 30px 28px

core/section.title
  paddingBottom: 14px

core/card
  borderRadius: 16px
  overflow: hidden
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))

core/card.body
  padding: 24px

core/header
  paddingBottom: 22px

core/footer
  paddingTop: 22px
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 36px 28px
  borderRadius: 16px

core/cta.button
  padding: 14px 36px
  borderRadius: 100px
  fontWeight: 700

newsletter/featured
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderRadius: 16px

newsletter/featured.source
  borderRadius: 100px

newsletter/category.title
  paddingBottom: 14px

newsletter/item
  marginBottom: calc(16px * var(--mkly-gap-scale, 1))
  padding: 20px 22px
  borderRadius: 14px
  display: grid
  gridTemplateColumns: 130px 1fr
  gap: 14px
  alignItems: start

newsletter/item.img
  borderRadius: 12px
  aspectRatio: 1
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0

newsletter/item.meta
  fontSize: 0.68em
  letterSpacing: 0.04em

newsletter/item.source
  borderRadius: 100px

newsletter/quickHits
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 16px

newsletter/tools
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 16px

newsletter/tipOfTheDay
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 0 16px 16px 0

newsletter/community
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 26px 28px
  borderRadius: 16px

newsletter/community.quote
  padding: 20px 0 20px 24px

newsletter/personalNote
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 26px 28px
  borderRadius: 16px

newsletter/poll
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 28px
  borderRadius: 16px

newsletter/poll.option
  padding: 14px 22px
  borderRadius: 100px

newsletter/recommendations
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 16px

newsletter/sponsor
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 16px

newsletter/sponsor.badge
  borderRadius: 100px

newsletter/sponsor.img
  borderRadius: 12px

newsletter/outro
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 36px 28px
  borderRadius: 16px

newsletter/outro.cta
  padding: 14px 36px
  borderRadius: 100px

newsletter/custom
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 16px
newsletter/intro
  fontSize: 1.08em
  lineHeight: 1.75
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  paddingTop: calc(32px * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
`,
  },

  {
    name: 'glass',
    displayName: 'Newsletter/Frosted Glass',
    description: 'Frosted glass — translucent layers, blur effects, floating depth',
    rawCss: `/* newsletter kit — glass preset */

.mkly-document {
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  padding: 0 24px;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  --_gs: var(--mkly-gap-scale, 1);
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
  line-height: 1.78;
  margin: 0 0 calc(36px * var(--_gs));
  font-weight: 400;
}
.mkly-newsletter-intro p { margin: 0 0 0.85em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 500; }

.mkly-newsletter-featured {
  margin: 0 0 calc(28px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.12);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.64em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 5px 14px;
  border-radius: 100px;
  margin: 22px 26px 10px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  margin: 0 26px 8px;
  font-weight: 500;
  line-height: 1.4;
}
.mkly-newsletter-featured p { margin: 8px 26px 14px; line-height: 1.72; font-size: 0.95em; }
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 6px 26px 26px;
  font-weight: 600;
  font-size: 0.88em;
  text-decoration: none;
  transition: opacity 0.25s ease;
}

.mkly-newsletter-category {
  margin: 0 0 calc(36px * var(--_gs));
  padding-top: calc(32px * var(--_gs));
  border-top-width: 1px;
  border-top-style: solid;
}
.mkly-newsletter-category__title {
  font-size: 0.7em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0 0 22px;
  padding-bottom: 14px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  line-height: 1.2;
}

.mkly-newsletter-item {
  padding: 20px 22px;
  border-bottom: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
  margin-bottom: calc(16px * var(--_gs));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.08);
  position: relative;
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 16px;
  align-items: start;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: none;
  float: none;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 14px;
  display: block;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.63em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 12px;
  border-radius: 100px;
  margin-bottom: 8px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.68em;
  line-height: 1.3;
  margin-bottom: 6px;
  opacity: 0.5;
}
.mkly-newsletter-item p { margin: 0 0 8px; line-height: 1.68; font-size: 0.94em; }
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.06em;
  font-weight: 600;
  margin: 0 0 6px;
  line-height: 1.28;
  letter-spacing: -0.015em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 8px;
  font-size: 0.84em;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.25s ease;
}

.mkly-newsletter-quickHits {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1);
}
.mkly-newsletter-quickHits__title { font-size: 0.7em; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 16px; line-height: 1.2; }
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li { margin-bottom: 12px; line-height: 1.65; font-size: 0.95em; }
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

.mkly-newsletter-tools {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1);
}
.mkly-newsletter-tools__title { font-size: 0.7em; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 18px; line-height: 1.2; }

.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-left-width: 3px;
  border-left-style: solid;
  border-radius: 0 20px 20px 0;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
  line-height: 1.68;
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

.mkly-newsletter-community {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 26px 28px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 20px 0 20px 24px;
  border-left-width: 2px;
  border-left-style: solid;
  font-size: 1.06em;
  line-height: 1.78;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 14px;
  padding-top: 12px;
  border-top-width: 1px;
  border-top-style: solid;
  font-size: 0.84em;
  font-style: normal;
  font-weight: 600;
}

.mkly-newsletter-personalNote {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 26px 28px;
  font-style: italic;
  border-radius: 20px;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-left-width: 3px;
  border-left-style: solid;
  line-height: 1.78;
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

.mkly-newsletter-poll {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 28px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1);
}
.mkly-newsletter-poll__question { font-size: 1.12em; font-weight: 600; margin: 0 0 20px; letter-spacing: -0.01em; line-height: 1.35; }
.mkly-newsletter-poll__option {
  display: block;
  margin: 10px 0;
  padding: 14px 22px;
  font-size: 0.95em;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 14px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: box-shadow 0.25s ease, transform 0.2s ease;
  text-align: center;
  line-height: 1.4;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.06);
}

.mkly-newsletter-recommendations {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1);
}
.mkly-newsletter-recommendations__title { font-size: 0.7em; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 16px; line-height: 1.2; }
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li { margin-bottom: 12px; line-height: 1.65; font-size: 0.95em; }
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

.mkly-newsletter-sponsor {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-width: 1px;
  border-style: solid;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.58em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 4px 14px;
  border-radius: 100px;
  margin-bottom: 14px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 16px;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor p { margin: 0 0 10px; line-height: 1.68; font-size: 0.95em; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 10px;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none;
  transition: opacity 0.25s ease;
}

.mkly-newsletter-outro {
  margin: 0 0 calc(28px * var(--_gs));
  text-align: center;
  padding: 36px 28px;
  border-radius: 20px;
}
.mkly-newsletter-outro p { margin: 0 0 10px; line-height: 1.72; font-size: 1.06em; }
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 22px;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none !important;
  padding: 14px 34px;
  border-radius: 14px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-width: 1px;
  border-style: solid;
  transition: box-shadow 0.25s ease;
  line-height: 1.4;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.1);
}

.mkly-newsletter-custom {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1);
}
.mkly-newsletter-custom__title { font-size: 0.7em; font-weight: 600; text-transform: uppercase; letter-spacing: 0.12em; margin: 0 0 16px; line-height: 1.2; }
.mkly-newsletter-custom p { margin: 0 0 10px; line-height: 1.68; font-size: 0.95em; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(28px * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-divider { margin: calc(28px * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(28px * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(28px * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 8px; font-size: 1.05em; line-height: 1.6; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 16px;
  padding: 14px 34px;
  border-radius: 14px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none !important;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transition: opacity 0.15s, transform 0.1s;
}
.mkly-core-footer { margin-top: calc(28px * var(--_gs)); text-align: center; font-size: 0.85em; line-height: 1.6; }
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
    css: `core/image.img
  borderRadius: 20px

core/button.link
  padding: 14px 34px
  borderRadius: 14px

core/code
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderRadius: 20px
  padding: 18px 24px
  backdrop-filter: blur(20px)

core/quote
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderLeftWidth: 2px
  padding: 20px 24px
  borderRadius: 0 20px 20px 0

core/hero
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderRadius: 20px

core/hero.img
  borderRadius: 20px

core/hero.content
  padding: 32px 28px

core/section.title
  paddingBottom: 14px

core/card
  borderRadius: 20px
  overflow: hidden
  backdrop-filter: blur(20px)
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))

core/card.body
  padding: 24px

core/header
  paddingBottom: 22px

core/footer
  paddingTop: 22px
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 36px 28px
  borderRadius: 20px
  backdrop-filter: blur(20px)

core/cta.button
  padding: 14px 34px
  borderRadius: 14px
newsletter/intro
  fontSize: 1.08em
  lineHeight: 1.78
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  fontWeight: 400

newsletter/featured
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderWidth: 1px
  borderStyle: solid
  borderRadius: 20px
  overflow: hidden
  boxShadow: 0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.12)

newsletter/featured.img
  width: 100%

newsletter/featured.source
  fontSize: 0.64em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.08em
  padding: 5px 14px
  borderRadius: 100px
  marginTop: 22px
  marginRight: 26px
  marginBottom: 10px
  marginLeft: 26px
  lineHeight: 1.2

newsletter/featured.author
  fontSize: 0.84em
  marginRight: 26px
  marginBottom: 8px
  marginLeft: 26px
  fontWeight: 500
  lineHeight: 1.4

newsletter/featured.link
  marginTop: 6px
  marginRight: 26px
  marginBottom: 26px
  marginLeft: 26px
  fontWeight: 600
  fontSize: 0.88em
  textDecoration: none

newsletter/category
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  paddingTop: calc(32px * var(--mkly-gap-scale, 1))

newsletter/category.title
  fontSize: 0.7em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.12em
  marginBottom: 22px
  paddingBottom: 14px
  lineHeight: 1.2

newsletter/item
  padding: 20px 22px
  borderBottom: none
  borderWidth: 1px
  borderStyle: solid
  borderRadius: 16px
  marginBottom: calc(16px * var(--mkly-gap-scale, 1))
  boxShadow: 0 4px 16px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.08)
  display: grid
  gridTemplateColumns: 130px 1fr
  gap: 16px
  alignItems: start

newsletter/item.img
  borderRadius: 14px
  aspectRatio: 1
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0

newsletter/item.meta
  fontSize: 0.68em

newsletter/item.source
  fontSize: 0.63em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.08em
  padding: 4px 12px
  borderRadius: 100px
  marginBottom: 8px
  lineHeight: 1.2

newsletter/quickHits
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 20px
  borderWidth: 1px
  borderStyle: solid
  boxShadow: 0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1)

newsletter/quickHits.title
  fontSize: 0.7em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.12em
  marginBottom: 16px
  lineHeight: 1.2

newsletter/tools
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 20px
  borderWidth: 1px
  borderStyle: solid
  boxShadow: 0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1)

newsletter/tools.title
  fontSize: 0.7em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.12em
  marginBottom: 18px
  lineHeight: 1.2

newsletter/tipOfTheDay
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 0 20px 20px 0
  boxShadow: 0 4px 20px rgba(0,0,0,0.04)
  lineHeight: 1.68

newsletter/tipOfTheDay.title
  marginBottom: 10px
  fontWeight: 600
  fontSize: 0.7em
  textTransform: uppercase
  letterSpacing: 0.1em
  lineHeight: 1.2

newsletter/community
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 26px 28px
  borderRadius: 20px
  borderWidth: 1px
  borderStyle: solid
  boxShadow: 0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1)

newsletter/community.quote
  padding: 20px 0 20px 24px
  fontSize: 1.06em
  lineHeight: 1.78

newsletter/community.author
  marginTop: 14px
  paddingTop: 12px
  fontSize: 0.84em
  fontWeight: 600

newsletter/personalNote
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 26px 28px
  borderRadius: 20px
  lineHeight: 1.78
  boxShadow: 0 4px 20px rgba(0,0,0,0.04)

newsletter/poll
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 28px
  borderRadius: 20px
  borderWidth: 1px
  borderStyle: solid
  boxShadow: 0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1)

newsletter/poll.question
  fontSize: 1.12em
  fontWeight: 600
  marginBottom: 20px
  letterSpacing: -0.01em
  lineHeight: 1.35

newsletter/poll.option
  marginTop: 10px
  marginBottom: 10px
  padding: 14px 22px
  fontSize: 0.95em
  fontWeight: 500
  textDecoration: none
  borderWidth: 1px
  borderStyle: solid
  borderRadius: 14px
  textAlign: center
  lineHeight: 1.4
  boxShadow: inset 0 1px 0 rgba(255,255,255,0.06)

newsletter/recommendations
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 20px
  borderWidth: 1px
  borderStyle: solid
  boxShadow: 0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1)

newsletter/recommendations.title
  fontSize: 0.7em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.12em
  marginBottom: 16px
  lineHeight: 1.2

newsletter/sponsor
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderWidth: 1px
  borderStyle: solid
  borderRadius: 20px
  boxShadow: 0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1)

newsletter/sponsor.badge
  fontSize: 0.58em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.1em
  padding: 4px 14px
  borderRadius: 100px
  marginBottom: 14px
  lineHeight: 1.2

newsletter/sponsor.img
  maxWidth: 100%
  marginBottom: 16px
  borderRadius: 14px
  boxShadow: 0 4px 16px rgba(0,0,0,0.06)

newsletter/sponsor.link
  marginTop: 10px
  fontWeight: 600
  fontSize: 0.9em
  textDecoration: none

newsletter/outro
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  textAlign: center
  padding: 36px 28px
  borderRadius: 20px

newsletter/outro.cta
  marginTop: 22px
  fontWeight: 600
  fontSize: 0.9em
  textDecoration: none !important
  padding: 14px 34px
  borderRadius: 14px
  borderWidth: 1px
  borderStyle: solid
  lineHeight: 1.4
  boxShadow: 0 4px 20px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.1)

newsletter/custom
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 20px
  borderWidth: 1px
  borderStyle: solid
  boxShadow: 0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1)

newsletter/custom.title
  fontSize: 0.7em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.12em
  marginBottom: 16px
  lineHeight: 1.2

core/heading
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
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
  padding: 0 28px;
  --_gs: var(--mkly-gap-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 700;
  letter-spacing: -0.02em;
}

.mkly-newsletter-intro {
  font-size: 1.06em;
  line-height: 1.75;
  margin: 0 0 calc(32px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.85em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; }

.mkly-newsletter-featured {
  margin: 0 0 calc(36px * var(--_gs));
  border: none;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 36px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 5px 12px;
  border-radius: 6px;
  margin: 22px 24px 8px;
  line-height: 1.2;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  margin: 0 24px 8px;
  font-weight: 500;
  line-height: 1.4;
}
.mkly-newsletter-featured p { margin: 8px 24px 14px; line-height: 1.7; font-size: 0.96em; }
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 6px 24px 24px;
  font-weight: 600;
  font-size: 0.88em;
  text-decoration: none;
  transition: opacity 0.2s;
}

.mkly-newsletter-category {
  margin: 0 0 calc(36px * var(--_gs));
  padding-top: calc(28px * var(--_gs));
  border-top: none;
}
.mkly-newsletter-category__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 20px;
  line-height: 1.25;
}

.mkly-newsletter-item {
  padding: 20px 20px;
  border-bottom: none;
  border-radius: 12px;
  margin-bottom: calc(18px * var(--_gs));
  box-shadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
  position: relative;
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 16px;
  align-items: start;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: none;
  float: none;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 10px;
  display: block;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: 6px;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  line-height: 1.3;
  margin-bottom: 6px;
  opacity: 0.45;
}
.mkly-newsletter-item p { margin: 0 0 8px; line-height: 1.65; font-size: 0.95em; }
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.06em;
  font-weight: 600;
  margin: 0 0 6px;
  line-height: 1.3;
  letter-spacing: -0.01em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 6px;
  font-size: 0.85em;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
}

.mkly-newsletter-quickHits {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 24px 28px;
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-quickHits__title { font-size: 0.72em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 14px; }
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li { margin-bottom: 10px; line-height: 1.6; font-size: 0.95em; }
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

.mkly-newsletter-tools {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 24px 28px;
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-tools__title { font-size: 0.72em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 16px; }

.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 24px 28px;
  border-left-width: 4px;
  border-left-style: solid;
  border-radius: 0 16px 16px 0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}
.mkly-newsletter-tipOfTheDay__title { display: block; margin-bottom: 10px; font-weight: 700; font-size: 1em; }
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

.mkly-newsletter-community {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 24px 28px;
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 18px 26px;
  border-left-width: 3px;
  border-left-style: solid;
  font-size: 1.04em;
  line-height: 1.75;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author { display: block; margin-top: 12px; font-size: 0.86em; font-style: normal; font-weight: 600; }

.mkly-newsletter-personalNote {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 24px 28px;
  font-style: italic;
  border-radius: 16px;
  border: none;
  line-height: 1.75;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

.mkly-newsletter-poll {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 28px;
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-poll__question { font-size: 1.12em; font-weight: 700; margin: 0 0 18px; letter-spacing: -0.01em; line-height: 1.35; }
.mkly-newsletter-poll__option {
  display: block;
  margin: 10px 0;
  padding: 14px 20px;
  font-size: 0.95em;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
  line-height: 1.4;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.mkly-newsletter-recommendations {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 24px 28px;
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-recommendations__title { font-size: 0.72em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 14px; }
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li { margin-bottom: 10px; line-height: 1.6; font-size: 0.95em; }
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

.mkly-newsletter-sponsor {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 24px 28px;
  border: none;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.6em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
  line-height: 1.2;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 14px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
.mkly-newsletter-sponsor p { margin: 0 0 10px; line-height: 1.65; font-size: 0.95em; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 10px;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none;
  transition: opacity 0.2s;
}

.mkly-newsletter-outro {
  margin: 0 0 calc(36px * var(--_gs));
  text-align: center;
  padding: 32px;
}
.mkly-newsletter-outro p { margin: 0 0 10px; line-height: 1.7; font-size: 1.04em; }
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 20px;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none !important;
  padding: 14px 32px;
  border: none;
  border-radius: 12px;
  transition: transform 0.2s, box-shadow 0.2s;
  line-height: 1.4;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.mkly-newsletter-custom {
  margin: 0 0 calc(36px * var(--_gs));
  padding: 24px 28px;
  border-radius: 16px;
  border: none;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-custom__title { font-size: 0.72em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 14px; }
.mkly-newsletter-custom p { margin: 0 0 10px; line-height: 1.65; font-size: 0.95em; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(36px * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-divider { margin: calc(36px * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(36px * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(36px * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(36px * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 8px; font-size: 1.05em; line-height: 1.6; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 16px;
  padding: 14px 32px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none !important;
  border: none;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  transition: box-shadow 0.2s, transform 0.1s;
}
.mkly-core-footer { margin-top: calc(36px * var(--_gs)); text-align: center; font-size: 0.85em; line-height: 1.6; }
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
    css: `core/image.img
  borderRadius: 14px
  border: none

core/button.link
  padding: 14px 32px
  borderRadius: 12px
  border: none

core/code
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  border: none
  borderRadius: 16px
  padding: 20px 24px

core/quote
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  borderLeftWidth: 3px
  padding: 18px 26px

core/hero
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  borderRadius: 16px
  border: none

core/hero.img
  borderRadius: 16px

core/hero.content
  padding: 30px 28px

core/section.title
  paddingBottom: 12px

core/card
  border: none
  borderRadius: 16px
  overflow: hidden
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))

core/card.body
  padding: 24px

core/header
  paddingBottom: 22px
  borderBottom: none

core/footer
  paddingTop: 22px
  borderTop: none
  marginTop: calc(36px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(36px * var(--mkly-gap-scale, 1))
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 36px 28px
  borderRadius: 16px
  border: none

core/cta.button
  padding: 14px 32px
  borderRadius: 12px
  border: none
newsletter/intro
  fontSize: 1.06em
  lineHeight: 1.75
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

newsletter/featured
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  borderRadius: 16px
  overflow: hidden
  boxShadow: 0 8px 36px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)

newsletter/featured.img
  width: 100%

newsletter/featured.source
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.06em
  padding: 5px 12px
  borderRadius: 6px
  marginTop: 22px
  marginRight: 24px
  marginBottom: 8px
  marginLeft: 24px
  lineHeight: 1.2
  boxShadow: 0 1px 3px rgba(0,0,0,0.06)

newsletter/featured.author
  fontSize: 0.84em
  marginRight: 24px
  marginBottom: 8px
  marginLeft: 24px
  fontWeight: 500
  lineHeight: 1.4

newsletter/featured.link
  marginTop: 6px
  marginRight: 24px
  marginBottom: 24px
  marginLeft: 24px
  fontWeight: 600
  fontSize: 0.88em
  textDecoration: none

newsletter/category
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  paddingTop: calc(28px * var(--mkly-gap-scale, 1))
  borderTop: none

newsletter/category.title
  fontSize: 0.72em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  marginBottom: 20px
  lineHeight: 1.25

newsletter/item
  padding: 20px 20px
  borderBottom: none
  borderRadius: 12px
  marginBottom: calc(18px * var(--mkly-gap-scale, 1))
  boxShadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)
  display: grid
  gridTemplateColumns: 140px 1fr
  gap: 16px
  alignItems: start

newsletter/item.img
  borderRadius: 10px
  aspectRatio: 3/4
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0

newsletter/item.meta
  fontSize: 0.72em

newsletter/item.source
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.06em
  padding: 3px 8px
  borderRadius: 4px
  marginBottom: 6px
  lineHeight: 1.2

newsletter/quickHits
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 16px
  boxShadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)

newsletter/quickHits.title
  fontSize: 0.72em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  marginBottom: 14px

newsletter/tools
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 16px
  boxShadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)

newsletter/tools.title
  fontSize: 0.72em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  marginBottom: 16px

newsletter/tipOfTheDay
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 0 16px 16px 0
  boxShadow: 0 4px 20px rgba(0,0,0,0.06)

newsletter/tipOfTheDay.title
  marginBottom: 10px
  fontWeight: 700
  fontSize: 1em

newsletter/community
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 16px
  boxShadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)

newsletter/community.quote
  padding: 18px 26px
  fontSize: 1.04em
  lineHeight: 1.75

newsletter/community.author
  marginTop: 12px
  fontSize: 0.86em
  fontWeight: 600

newsletter/personalNote
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 16px
  lineHeight: 1.75
  boxShadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)

newsletter/poll
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 28px
  borderRadius: 16px
  boxShadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)

newsletter/poll.question
  fontSize: 1.12em
  fontWeight: 700
  marginBottom: 18px
  letterSpacing: -0.01em
  lineHeight: 1.35

newsletter/poll.option
  marginTop: 10px
  marginBottom: 10px
  padding: 14px 20px
  fontSize: 0.95em
  fontWeight: 500
  textDecoration: none
  borderRadius: 10px
  textAlign: center
  lineHeight: 1.4
  boxShadow: 0 2px 8px rgba(0,0,0,0.06)

newsletter/recommendations
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 16px
  boxShadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)

newsletter/recommendations.title
  fontSize: 0.72em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  marginBottom: 14px

newsletter/sponsor
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 16px
  boxShadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)

newsletter/sponsor.badge
  fontSize: 0.6em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  padding: 4px 10px
  borderRadius: 4px
  marginBottom: 12px
  lineHeight: 1.2
  boxShadow: 0 1px 3px rgba(0,0,0,0.06)

newsletter/sponsor.img
  maxWidth: 100%
  marginBottom: 14px
  borderRadius: 12px
  boxShadow: 0 2px 12px rgba(0,0,0,0.08)

newsletter/sponsor.link
  marginTop: 10px
  fontWeight: 600
  fontSize: 0.9em
  textDecoration: none

newsletter/outro
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  textAlign: center
  padding: 32px

newsletter/outro.cta
  marginTop: 20px
  fontWeight: 600
  fontSize: 0.9em
  textDecoration: none !important
  padding: 14px 32px
  borderRadius: 12px
  lineHeight: 1.4
  boxShadow: 0 4px 16px rgba(0,0,0,0.1)

newsletter/custom
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 16px
  boxShadow: 0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)

newsletter/custom.title
  fontSize: 0.72em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  marginBottom: 14px

core/heading
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(36px * var(--mkly-gap-scale, 1))
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(36px * var(--mkly-gap-scale, 1))
`,
  },

  {
    name: 'editorial',
    displayName: 'Newsletter/Editorial',
    description: 'Print-inspired — serif font, rule lines, no backgrounds, generous spacing',
    rawCss: `/* newsletter kit — editorial preset */

.mkly-document {
  font-family: Georgia, 'Times New Roman', 'Noto Serif', serif;
  font-size: 17px;
  line-height: 1.85;
  letter-spacing: 0.005em;
  padding: 0 32px;
  --_gs: var(--mkly-gap-scale, 1);
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
  line-height: 1.85;
  margin: 0 0 calc(40px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 1em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: inherit; }

.mkly-newsletter-featured {
  margin: 0 0 calc(40px * var(--_gs));
  border: none;
  border-radius: 0;
  overflow: visible;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  padding-bottom: 32px;
}
.mkly-newsletter-featured__img { width: 100%; display: block; margin-bottom: 16px; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 0;
  margin: 16px 0 8px;
  border-radius: 0;
  background: none;
  line-height: 1.3;
}
.mkly-newsletter-featured__author {
  font-size: 0.88em;
  margin: 0 0 8px;
  font-style: italic;
  font-weight: 400;
  line-height: 1.4;
}
.mkly-newsletter-featured p {
  margin: 10px 0 14px;
  line-height: 1.85;
  font-size: 1.02em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 8px 0 0;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: underline;
  transition: opacity 0.15s;
}

.mkly-newsletter-category {
  margin: 0 0 calc(40px * var(--_gs));
  padding-top: calc(32px * var(--_gs));
  border-top-width: 3px;
  border-top-style: double;
}
.mkly-newsletter-category__title {
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin: 0 0 22px;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  line-height: 1.2;
}

.mkly-newsletter-item {
  padding: 0;
  border-bottom-width: 1px;
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
  padding: 18px 24px 24px;
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
  margin-bottom: 6px;
  background: none;
  border-radius: 0;
  line-height: 1.3;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  line-height: 1.3;
  margin-bottom: 6px;
  font-style: italic;
  opacity: 0.6;
}
.mkly-newsletter-item p {
  margin: 0 0 10px;
  line-height: 1.8;
  font-size: 0.98em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.14em;
  font-weight: 700;
  letter-spacing: -0.015em;
  margin: 0 0 6px;
  line-height: 1.25;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 6px;
  font-size: 0.88em;
  font-weight: 600;
  text-decoration: underline;
  transition: opacity 0.15s;
}

.mkly-newsletter-quickHits {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 24px 8px;
  background: none;
  border-radius: 0;
  border-top-width: 1px;
  border-top-style: solid;
  border-bottom-width: 1px;
  border-bottom-style: solid;
}
.mkly-newsletter-quickHits__title {
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin: 0 0 14px;
  font-style: normal;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li { margin-bottom: 10px; line-height: 1.7; font-size: 0.96em; }
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; text-decoration: underline; }

.mkly-newsletter-tools {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 24px 8px;
  background: none;
  border-radius: 0;
  border-top-width: 1px;
  border-top-style: solid;
}
.mkly-newsletter-tools__title { font-size: 0.68em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.16em; margin: 0 0 16px; font-style: normal; }

.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 20px 0 20px 24px;
  background: none;
  border-left-width: 2px;
  border-left-style: solid;
  border-radius: 0;
  line-height: 1.8;
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 0.82em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-style: normal;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 10px; font-size: 0.98em; line-height: 1.8; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

.mkly-newsletter-community {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 24px 8px;
  background: none;
  border-radius: 0;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 0 0 0 24px;
  border-left-width: 2px;
  border-left-style: solid;
  font-size: 1.08em;
  line-height: 1.85;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.6em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 14px;
  padding-left: 24px;
  font-size: 0.85em;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.mkly-newsletter-personalNote {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 28px 8px;
  font-style: italic;
  background: none;
  border-radius: 0;
  border-top-width: 1px;
  border-top-style: solid;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  line-height: 1.85;
  font-size: 1.05em;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

.mkly-newsletter-poll {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 28px 8px;
  background: none;
  border-radius: 0;
  border-top-width: 1px;
  border-top-style: solid;
}
.mkly-newsletter-poll__question { font-size: 1.15em; font-weight: 700; margin: 0 0 18px; line-height: 1.3; }
.mkly-newsletter-poll__option {
  display: block;
  margin: 8px 0;
  padding: 14px 20px;
  font-size: 0.98em;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-radius: 0;
  transition: opacity 0.15s;
  text-align: left;
  line-height: 1.5;
}

.mkly-newsletter-recommendations {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 24px 8px;
  background: none;
  border-radius: 0;
  border-top-width: 1px;
  border-top-style: solid;
}
.mkly-newsletter-recommendations__title { font-size: 0.68em; font-weight: 700; text-transform: uppercase; letter-spacing: 0.16em; margin: 0 0 14px; font-style: normal; }
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li { margin-bottom: 10px; line-height: 1.7; font-size: 0.96em; }
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; text-decoration: underline; }

.mkly-newsletter-sponsor {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 24px 8px;
  border: none;
  border-top-width: 1px;
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
  margin-bottom: 10px;
  border-radius: 0;
  background: none;
  line-height: 1.3;
}
.mkly-newsletter-sponsor__img { max-width: 100%; display: block; margin-bottom: 14px; border-radius: 0; }
.mkly-newsletter-sponsor p { margin: 0 0 10px; line-height: 1.8; font-size: 0.98em; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 10px;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: underline;
  transition: opacity 0.15s;
}

.mkly-newsletter-outro {
  margin: 0 0 calc(40px * var(--_gs));
  text-align: center;
  padding: 36px 0;
  border-top-width: 3px;
  border-top-style: double;
}
.mkly-newsletter-outro p { margin: 0 0 10px; line-height: 1.8; font-size: 1.05em; }
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 20px;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: underline !important;
  padding: 0;
  border: none;
  background: none;
  border-radius: 0;
  transition: opacity 0.15s;
  line-height: 1.5;
  letter-spacing: 0.02em;
}

.mkly-newsletter-custom {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 24px 8px;
  background: none;
  border-radius: 0;
  border-top-width: 1px;
  border-top-style: solid;
}
.mkly-newsletter-custom__title {
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin: 0 0 14px;
  font-style: normal;
}
.mkly-newsletter-custom p { margin: 0 0 10px; line-height: 1.8; font-size: 0.98em; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(40px * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-divider { margin: calc(40px * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(40px * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(40px * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 10px; font-size: 1.05em; line-height: 1.8; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 16px;
  padding: 0;
  border-radius: 0;
  font-weight: 600;
  font-size: 15px;
  text-decoration: underline !important;
  background: none;
  letter-spacing: 0.02em;
  line-height: 1.5;
  box-shadow: none;
  transition: opacity 0.15s;
}
.mkly-core-footer { margin-top: calc(40px * var(--_gs)); text-align: center; font-size: 0.85em; line-height: 1.6; }
.mkly-core-footer p { margin: 0 0 6px; }
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
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  marginTop: calc(40px * var(--mkly-gap-scale, 1))
  height: 2px

core/code
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  background: none
  borderRadius: 0
  padding: 20px 24px
  borderWidth: 1px
  borderStyle: solid

core/quote
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  borderLeftWidth: 2px
  padding: 0 0 0 24px
  fontStyle: italic

core/hero
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  borderRadius: 0

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 32px 8px

core/section.title
  paddingBottom: 10px
  borderBottomWidth: 1px

core/card
  borderRadius: 0
  border: none
  overflow: hidden
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

core/card.body
  padding: 24px 8px

core/header
  paddingBottom: 24px
  borderBottomWidth: 2px

core/footer
  paddingTop: 24px
  borderTopWidth: 2px
  borderTopStyle: double
  marginTop: calc(40px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(40px * var(--mkly-gap-scale, 1))
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 36px 0
  background: none
  borderRadius: 0

core/cta.button
  padding: 0
  background: none
  borderRadius: 0
  textDecoration: underline
newsletter/intro
  fontSize: 1.12em
  lineHeight: 1.85
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))

newsletter/featured
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: visible
  paddingBottom: 32px

newsletter/featured.img
  width: 100%
  marginBottom: 16px

newsletter/featured.source
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.12em
  padding: 0
  marginTop: 16px
  marginBottom: 8px
  borderRadius: 0
  lineHeight: 1.3

newsletter/featured.author
  fontSize: 0.88em
  marginBottom: 8px
  fontWeight: 400
  lineHeight: 1.4

newsletter/featured.link
  marginTop: 8px
  fontWeight: 600
  fontSize: 0.9em
  textDecoration: underline

newsletter/category
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  paddingTop: calc(32px * var(--mkly-gap-scale, 1))

newsletter/category.title
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.16em
  marginBottom: 22px
  paddingBottom: 12px
  lineHeight: 1.2

newsletter/item
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  padding: 0
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  aspectRatio: 2/1
  objectFit: cover

newsletter/item.body
  overflow: visible
  padding: 18px 24px 24px

newsletter/item.meta
  fontSize: 0.72em
  fontStyle: italic

newsletter/item.source
  fontSize: 0.66em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.12em
  padding: 0
  marginBottom: 6px
  borderRadius: 0
  lineHeight: 1.3

newsletter/quickHits
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 24px 8px
  borderRadius: 0

newsletter/quickHits.title
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.16em
  marginBottom: 14px

newsletter/tools
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 24px 8px
  borderRadius: 0

newsletter/tools.title
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.16em
  marginBottom: 16px

newsletter/tipOfTheDay
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 20px 0 20px 24px
  borderRadius: 0
  lineHeight: 1.8

newsletter/tipOfTheDay.title
  marginBottom: 8px
  fontWeight: 700
  fontSize: 0.82em
  textTransform: uppercase
  letterSpacing: 0.1em

newsletter/community
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 24px 8px
  borderRadius: 0

newsletter/community.quote
  padding: 0 0 0 24px
  fontSize: 1.08em
  lineHeight: 1.85

newsletter/community.author
  marginTop: 14px
  paddingLeft: 24px
  fontSize: 0.85em
  fontWeight: 600
  letterSpacing: 0.03em
  textTransform: uppercase

newsletter/personalNote
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 28px 8px
  borderRadius: 0
  lineHeight: 1.85
  fontSize: 1.05em

newsletter/poll
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 28px 8px
  borderRadius: 0

newsletter/poll.question
  fontSize: 1.15em
  fontWeight: 700
  marginBottom: 18px
  lineHeight: 1.3

newsletter/poll.option
  marginTop: 8px
  marginBottom: 8px
  padding: 14px 20px
  fontSize: 0.98em
  fontWeight: 500
  textDecoration: none
  borderRadius: 0
  textAlign: left
  lineHeight: 1.5

newsletter/recommendations
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 24px 8px
  borderRadius: 0

newsletter/recommendations.title
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.16em
  marginBottom: 14px

newsletter/sponsor
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 24px 8px
  borderRadius: 0

newsletter/sponsor.badge
  fontSize: 0.58em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.14em
  padding: 0
  marginBottom: 10px
  borderRadius: 0
  lineHeight: 1.3

newsletter/sponsor.img
  maxWidth: 100%
  marginBottom: 14px
  borderRadius: 0

newsletter/sponsor.link
  marginTop: 10px
  fontWeight: 600
  fontSize: 0.9em
  textDecoration: underline

newsletter/outro
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  textAlign: center
  padding: 36px 0

newsletter/outro.cta
  marginTop: 20px
  fontWeight: 600
  fontSize: 0.9em
  textDecoration: underline !important
  padding: 0
  borderRadius: 0
  lineHeight: 1.5
  letterSpacing: 0.02em

newsletter/custom
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 24px 8px
  borderRadius: 0

newsletter/custom.title
  fontSize: 0.68em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.16em
  marginBottom: 14px

core/heading
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
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
  padding: 0 20px;
  --_gs: var(--mkly-gap-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-family: 'Fredoka', 'Nunito', 'Quicksand', -apple-system, system-ui, sans-serif;
  font-weight: 800;
  letter-spacing: 0;
}

.mkly-newsletter-intro {
  font-size: 1.06em;
  line-height: 1.7;
  margin: 0 0 calc(28px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.8em; }
.mkly-newsletter-intro a { font-weight: 700; }

.mkly-newsletter-featured {
  margin: 0 0 calc(28px * var(--_gs));
  border-width: 2px;
  border-style: solid;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.12);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.7em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 12px;
  border-radius: 4px;
  margin: 18px 20px 8px;
  line-height: 1.2;
  box-shadow: 2px 2px 0 rgba(0,0,0,0.08);
}
.mkly-newsletter-featured__author {
  font-size: 0.85em;
  margin: 0 20px 8px;
  font-weight: 600;
  line-height: 1.4;
}
.mkly-newsletter-featured p {
  margin: 8px 20px 12px;
  line-height: 1.65;
  font-size: 0.95em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 6px 20px 20px;
  font-weight: 700;
  font-size: 0.88em;
  text-decoration: none;
  transition: transform 0.15s ease;
}

.mkly-newsletter-category {
  margin: 0 0 calc(28px * var(--_gs));
  padding-top: calc(26px * var(--_gs));
  border-top-width: 2px;
  border-top-style: dashed;
}
.mkly-newsletter-category__title {
  font-size: 0.78em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 18px;
  padding-bottom: 10px;
  border-bottom-width: 2px;
  border-bottom-style: dashed;
  line-height: 1.2;
}

.mkly-newsletter-item {
  padding: 18px 20px;
  border-bottom: none;
  border-width: 2px;
  border-style: solid;
  border-radius: 6px;
  margin-bottom: calc(16px * var(--_gs));
  box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
  position: relative;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  max-width: 110px;
  float: right;
  margin-left: 16px;
  margin-bottom: 8px;
  border-radius: 6px;
  display: block;
  border-width: 2px;
  border-style: solid;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.1);
  aspect-ratio: 4/3;
  object-fit: cover;
}
.mkly-newsletter-item__body {
  overflow: hidden;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 10px;
  border-radius: 4px;
  margin-bottom: 6px;
  line-height: 1.2;
  box-shadow: 2px 2px 0 rgba(0,0,0,0.06);
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  line-height: 1.3;
  margin-bottom: 6px;
  font-weight: 700;
  opacity: 0.55;
}
.mkly-newsletter-item p { margin: 0 0 8px; line-height: 1.65; font-size: 0.95em; }
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.06em;
  font-weight: 700;
  margin: 0 0 6px;
  line-height: 1.3;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 6px;
  font-size: 0.85em;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.15s ease;
}

.mkly-newsletter-quickHits {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 20px 22px;
  border-radius: 6px;
  border-width: 2px;
  border-style: dashed;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-quickHits__title {
  font-size: 0.78em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 12px;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; list-style-type: square; }
.mkly-newsletter-quickHits li { margin-bottom: 10px; line-height: 1.6; font-size: 0.95em; }
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 700; }

.mkly-newsletter-tools {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 20px 22px;
  border-radius: 6px;
  border-width: 2px;
  border-style: dashed;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-tools__title { font-size: 0.78em; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 16px; }

.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 20px 22px;
  border-left-width: 5px;
  border-left-style: solid;
  border-radius: 0 6px 6px 0;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.08);
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 10px;
  font-weight: 800;
  font-size: 0.95em;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

.mkly-newsletter-community {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 20px 22px;
  border-radius: 6px;
  border-width: 2px;
  border-style: dashed;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 16px 20px;
  border-left-width: 4px;
  border-left-style: dotted;
  font-size: 1.02em;
  line-height: 1.7;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 12px;
  padding-top: 8px;
  font-size: 0.86em;
  font-style: normal;
  font-weight: 700;
}

.mkly-newsletter-personalNote {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 20px 22px;
  font-style: italic;
  border-radius: 6px;
  border-width: 2px;
  border-style: dashed;
  line-height: 1.7;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.8em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

.mkly-newsletter-poll {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 22px;
  border-radius: 6px;
  border-width: 2px;
  border-style: dashed;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-poll__question {
  font-size: 1.12em;
  font-weight: 800;
  margin: 0 0 18px;
  line-height: 1.3;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 10px 0;
  padding: 12px 16px;
  font-size: 0.95em;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  border-radius: 6px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  text-align: center;
  line-height: 1.4;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.08);
}

.mkly-newsletter-recommendations {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 20px 22px;
  border-radius: 6px;
  border-width: 2px;
  border-style: dashed;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-recommendations__title { font-size: 0.78em; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 12px; }
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; list-style-type: square; }
.mkly-newsletter-recommendations li { margin-bottom: 10px; line-height: 1.6; font-size: 0.95em; }
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 700; }

.mkly-newsletter-sponsor {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 20px 22px;
  border-width: 2px;
  border-style: dotted;
  border-radius: 6px;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.62em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
  line-height: 1.2;
  box-shadow: 2px 2px 0 rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 14px;
  border-radius: 6px;
  border-width: 2px;
  border-style: solid;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-sponsor p { margin: 0 0 10px; line-height: 1.65; font-size: 0.95em; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 10px;
  font-weight: 700;
  font-size: 0.9em;
  text-decoration: none;
  transition: transform 0.15s ease;
}

.mkly-newsletter-outro {
  margin: 0 0 calc(28px * var(--_gs));
  text-align: center;
  padding: 28px;
}
.mkly-newsletter-outro p { margin: 0 0 10px; line-height: 1.65; font-size: 1.02em; }
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 18px;
  font-weight: 700;
  font-size: 0.9em;
  text-decoration: none !important;
  padding: 12px 28px;
  border-radius: 6px;
  border-width: 2px;
  border-style: solid;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.1);
}

.mkly-newsletter-custom {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 20px 22px;
  border-radius: 6px;
  border-width: 2px;
  border-style: dashed;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
}
.mkly-newsletter-custom__title { font-size: 0.78em; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 14px; }
.mkly-newsletter-custom p { margin: 0 0 10px; line-height: 1.65; font-size: 0.95em; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(28px * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-divider { margin: calc(28px * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(28px * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(28px * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(28px * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 8px; font-size: 1.02em; line-height: 1.65; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 16px;
  padding: 12px 28px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none !important;
  border-width: 2px;
  border-style: solid;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 3px 3px 0 rgba(0,0,0,0.1);
  transition: transform 0.15s, box-shadow 0.15s;
}
.mkly-core-footer { margin-top: calc(28px * var(--_gs)); text-align: center; font-size: 0.85em; line-height: 1.6; }
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
    css: `core/image.img
  borderRadius: 6px

core/button.link
  padding: 12px 26px
  borderRadius: 6px
  fontWeight: 700

core/code
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderWidth: 2px
  borderStyle: dashed
  borderRadius: 6px
  padding: 18px 22px

core/quote
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderLeftWidth: 4px
  borderLeftStyle: dotted
  padding: 16px 22px

core/hero
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderRadius: 6px

core/hero.img
  borderRadius: 6px

core/hero.content
  padding: 26px 22px

core/section.title
  paddingBottom: 10px
  borderBottomWidth: 2px
  borderBottomStyle: dashed

core/card
  borderWidth: 2px
  borderRadius: 6px
  overflow: hidden
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))

core/card.body
  padding: 20px

core/header
  paddingBottom: 20px
  borderBottomWidth: 2px
  borderBottomStyle: dashed

core/footer
  paddingTop: 20px
  borderTopWidth: 2px
  borderTopStyle: dashed
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 30px 22px
  borderRadius: 6px

core/cta.button
  padding: 12px 28px
  borderRadius: 6px
  fontWeight: 700
newsletter/intro
  fontSize: 1.06em
  lineHeight: 1.7
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

newsletter/featured
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderWidth: 2px
  borderStyle: solid
  borderRadius: 6px
  overflow: hidden
  boxShadow: 4px 4px 0 rgba(0,0,0,0.12)

newsletter/featured.img
  width: 100%

newsletter/featured.source
  fontSize: 0.7em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.06em
  padding: 4px 12px
  borderRadius: 4px
  marginTop: 18px
  marginRight: 20px
  marginBottom: 8px
  marginLeft: 20px
  lineHeight: 1.2
  boxShadow: 2px 2px 0 rgba(0,0,0,0.08)

newsletter/featured.author
  fontSize: 0.85em
  marginRight: 20px
  marginBottom: 8px
  marginLeft: 20px
  fontWeight: 600
  lineHeight: 1.4

newsletter/featured.link
  marginTop: 6px
  marginRight: 20px
  marginBottom: 20px
  marginLeft: 20px
  fontWeight: 700
  fontSize: 0.88em
  textDecoration: none

newsletter/category
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  paddingTop: calc(26px * var(--mkly-gap-scale, 1))

newsletter/category.title
  fontSize: 0.78em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.08em
  marginBottom: 18px
  paddingBottom: 10px
  lineHeight: 1.2

newsletter/item
  padding: 18px 20px
  borderBottom: none
  borderWidth: 2px
  borderStyle: solid
  borderRadius: 6px
  marginBottom: calc(16px * var(--mkly-gap-scale, 1))
  boxShadow: 4px 4px 0 rgba(0,0,0,0.1)

newsletter/item.img
  maxWidth: 110px
  marginLeft: 16px
  marginBottom: 8px
  borderRadius: 6px
  borderWidth: 2px
  borderStyle: solid
  boxShadow: 3px 3px 0 rgba(0,0,0,0.1)
  aspectRatio: 4/3
  objectFit: cover

newsletter/item.body
  overflow: hidden
  minWidth: 0

newsletter/item.meta
  fontSize: 0.72em
  fontWeight: 700

newsletter/item.source
  fontSize: 0.68em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.06em
  padding: 3px 10px
  borderRadius: 4px
  marginBottom: 6px
  lineHeight: 1.2
  boxShadow: 2px 2px 0 rgba(0,0,0,0.06)

newsletter/quickHits
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 20px 22px
  borderRadius: 6px
  borderWidth: 2px
  borderStyle: dashed
  boxShadow: 4px 4px 0 rgba(0,0,0,0.1)

newsletter/quickHits.title
  fontSize: 0.78em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.06em
  marginBottom: 12px

newsletter/tools
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 20px 22px
  borderRadius: 6px
  borderWidth: 2px
  borderStyle: dashed
  boxShadow: 4px 4px 0 rgba(0,0,0,0.1)

newsletter/tools.title
  fontSize: 0.78em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.06em
  marginBottom: 16px

newsletter/tipOfTheDay
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 20px 22px
  borderRadius: 0 6px 6px 0
  boxShadow: 3px 3px 0 rgba(0,0,0,0.08)

newsletter/tipOfTheDay.title
  marginBottom: 10px
  fontWeight: 800
  fontSize: 0.95em

newsletter/community
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 20px 22px
  borderRadius: 6px
  borderWidth: 2px
  borderStyle: dashed
  boxShadow: 4px 4px 0 rgba(0,0,0,0.1)

newsletter/community.quote
  padding: 16px 20px
  fontSize: 1.02em
  lineHeight: 1.7

newsletter/community.author
  marginTop: 12px
  paddingTop: 8px
  fontSize: 0.86em
  fontWeight: 700

newsletter/personalNote
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 20px 22px
  borderRadius: 6px
  borderWidth: 2px
  borderStyle: dashed
  lineHeight: 1.7
  boxShadow: 4px 4px 0 rgba(0,0,0,0.1)

newsletter/poll
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 22px
  borderRadius: 6px
  borderWidth: 2px
  borderStyle: dashed
  boxShadow: 4px 4px 0 rgba(0,0,0,0.1)

newsletter/poll.question
  fontSize: 1.12em
  fontWeight: 800
  marginBottom: 18px
  lineHeight: 1.3

newsletter/poll.option
  marginTop: 10px
  marginBottom: 10px
  padding: 12px 16px
  fontSize: 0.95em
  fontWeight: 600
  textDecoration: none
  borderWidth: 2px
  borderStyle: solid
  borderRadius: 6px
  textAlign: center
  lineHeight: 1.4
  boxShadow: 3px 3px 0 rgba(0,0,0,0.08)

newsletter/recommendations
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 20px 22px
  borderRadius: 6px
  borderWidth: 2px
  borderStyle: dashed
  boxShadow: 4px 4px 0 rgba(0,0,0,0.1)

newsletter/recommendations.title
  fontSize: 0.78em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.06em
  marginBottom: 12px

newsletter/sponsor
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 20px 22px
  borderWidth: 2px
  borderStyle: dotted
  borderRadius: 6px
  boxShadow: 4px 4px 0 rgba(0,0,0,0.1)

newsletter/sponsor.badge
  fontSize: 0.62em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.1em
  padding: 4px 10px
  borderRadius: 4px
  marginBottom: 12px
  lineHeight: 1.2
  boxShadow: 2px 2px 0 rgba(0,0,0,0.06)

newsletter/sponsor.img
  maxWidth: 100%
  marginBottom: 14px
  borderRadius: 6px
  borderWidth: 2px
  borderStyle: solid
  boxShadow: 3px 3px 0 rgba(0,0,0,0.1)

newsletter/sponsor.link
  marginTop: 10px
  fontWeight: 700
  fontSize: 0.9em
  textDecoration: none

newsletter/outro
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  textAlign: center
  padding: 28px

newsletter/outro.cta
  marginTop: 18px
  fontWeight: 700
  fontSize: 0.9em
  textDecoration: none !important
  padding: 12px 28px
  borderRadius: 6px
  borderWidth: 2px
  borderStyle: solid
  letterSpacing: 0.01em
  lineHeight: 1.4
  boxShadow: 3px 3px 0 rgba(0,0,0,0.1)

newsletter/custom
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 20px 22px
  borderRadius: 6px
  borderWidth: 2px
  borderStyle: dashed
  boxShadow: 4px 4px 0 rgba(0,0,0,0.1)

newsletter/custom.title
  fontSize: 0.78em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.06em
  marginBottom: 14px

core/heading
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
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
  padding: 0 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --_gs: var(--mkly-gap-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.2;
}

/* ── intro ── */
.mkly-newsletter-intro {
  line-height: 1.9;
  margin: 0 0 calc(40px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 1em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { text-decoration: underline; text-underline-offset: 3px; font-weight: 400; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(40px * var(--_gs));
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
  padding: 5px 0;
  border-radius: 0;
  margin: 28px 0 10px;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.82em;
  margin: 0 0 10px;
  line-height: 1.4;
  font-weight: 400;
}
.mkly-newsletter-featured p {
  margin: 10px 0 14px;
  line-height: 1.8;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 8px 0 0;
  font-weight: 400;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(40px * var(--_gs));
  padding-top: calc(40px * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.64em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 24px;
  padding-bottom: 0;
  border-bottom: none;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 20px 0;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-radius: 0;
  margin-bottom: 0;
  box-shadow: none;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; border-bottom: none; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  max-width: 110px;
  float: right;
  margin-left: 18px;
  margin-bottom: 8px;
  border-radius: 0;
  display: block;
  box-shadow: none;
  aspect-ratio: 4/3;
  object-fit: cover;
}
.mkly-newsletter-item__body {
  overflow: hidden;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.62em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 0;
  border-radius: 0;
  margin-bottom: 8px;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.7em;
  line-height: 1.3;
  margin-bottom: 8px;
  opacity: 0.4;
  letter-spacing: 0.1em;
}
.mkly-newsletter-item p {
  margin: 0 0 8px;
  line-height: 1.75;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.1em;
  font-weight: 500;
  margin: 0 0 8px;
  line-height: 1.3;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 8px;
  font-weight: 400;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(40px * var(--_gs));
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
  margin: 0 0 20px;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-quickHits li {
  margin-bottom: 14px;
  line-height: 1.75;
}
.mkly-newsletter-quickHits li::before {
  content: '—';
  margin-right: 8px;
  opacity: 0.3;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 400; text-decoration: underline; text-underline-offset: 3px; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 20px 0;
  border-radius: 0;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  box-shadow: none;
}
.mkly-newsletter-tools__title {
  font-size: 0.64em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 18px;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 16px 0 16px 24px;
  border: none;
  border-left-width: 1px;
  border-left-style: solid;
  border-radius: 0;
}
.mkly-newsletter-tipOfTheDay__title {
  font-size: 0.64em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 14px;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; line-height: 1.75; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  line-height: 1.8;
  padding: 0 0 0 20px;
  border-left-width: 1px;
  border-left-style: solid;
  margin-bottom: 14px;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.9em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  font-size: 0.85em;
  font-weight: 400;
  margin-top: 14px;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 16px 0 16px 24px;
  border: none;
  border-left-width: 1px;
  border-left-style: solid;
  border-radius: 0;
  font-style: italic;
  line-height: 1.8;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.9em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-poll__question {
  font-size: 1em;
  font-weight: 500;
  margin: 0 0 18px;
  line-height: 1.4;
}
.mkly-newsletter-poll__option {
  display: block;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-radius: 0;
  padding: 14px 0;
  font-weight: 400;
  text-align: left;
  cursor: pointer;
  margin: 0;
  box-shadow: none;
  line-height: 1.5;
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(40px * var(--_gs));
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
  margin: 0 0 20px;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-recommendations li {
  margin-bottom: 14px;
  line-height: 1.75;
}
.mkly-newsletter-recommendations li::before {
  content: '—';
  margin-right: 8px;
  opacity: 0.3;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 400; text-decoration: underline; text-underline-offset: 3px; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 20px 0;
  border: none;
  border-top-width: 1px;
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
  margin-bottom: 12px;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  border-radius: 0;
  margin-bottom: 14px;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 8px;
  line-height: 1.75;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 8px;
  font-weight: 400;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(40px * var(--_gs));
  text-align: center;
  padding: 28px 0;
  border: none;
  border-top-width: 1px;
  border-top-style: solid;
  border-radius: 0;
}
.mkly-newsletter-outro p {
  margin: 0 0 12px;
  line-height: 1.8;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  padding: 12px 28px;
  border-width: 1px;
  border-style: solid;
  border-radius: 0;
  font-weight: 500;
  text-decoration: none;
  margin-top: 12px;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 20px 0;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-radius: 0;
}
.mkly-newsletter-custom__title {
  font-size: 0.64em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 8px;
  line-height: 1.75;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core blocks ── */
.mkly-core-hero {
  margin-bottom: calc(40px * var(--_gs));
  border-radius: 0;
  overflow: hidden;
  border: none;
  box-shadow: none;
}
.mkly-core-hero__img { border-radius: 0; }
.mkly-core-hero__content { padding: 28px 0; }

.mkly-core-heading {
  margin-bottom: calc(20px * var(--_gs));
  font-weight: 500;
}

.mkly-core-text {
  margin-bottom: calc(20px * var(--_gs));
  line-height: 1.75;
}

.mkly-core-image {
  margin-bottom: calc(28px * var(--_gs));
  border-radius: 0;
}
.mkly-core-image__img {
  border-radius: 0;
  box-shadow: none;
}

.mkly-core-quote {
  padding: 18px 0 18px 20px;
  border-left-width: 1px;
  border-left-style: solid;
  margin-bottom: calc(28px * var(--_gs));
  font-style: italic;
  border-radius: 0;
}

.mkly-core-code {
  border-radius: 0;
  padding: 20px 0;
  margin-bottom: calc(24px * var(--_gs));
  border: none;
  border-left-width: 1px;
  border-left-style: solid;
  padding-left: 20px;
}

.mkly-core-list {
  margin-bottom: calc(24px * var(--_gs));
  padding-left: 0;
  list-style: none;
}
.mkly-core-list li::before {
  content: '—';
  margin-right: 8px;
  opacity: 0.3;
}

.mkly-core-button {
  margin-bottom: calc(24px * var(--_gs));
}
.mkly-core-button__link {
  padding: 12px 28px;
  border-radius: 0;
  border-width: 1px;
  border-style: solid;
  font-weight: 500;
  text-decoration: none;
}

.mkly-core-section {
  margin-bottom: calc(32px * var(--_gs));
}
.mkly-core-section__title {
  padding-bottom: 0;
  margin-bottom: 20px;
  font-size: 0.64em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.mkly-core-divider {
  margin: calc(28px * var(--_gs)) 0;
  height: 1px;
  border: none;
  opacity: 0.3;
}

.mkly-core-card {
  border-radius: 0;
  overflow: hidden;
  margin-bottom: calc(24px * var(--_gs));
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  box-shadow: none;
}
.mkly-core-card__body {
  padding: 20px 0;
}

.mkly-core-header {
  padding-bottom: 28px;
  margin-bottom: calc(28px * var(--_gs));
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

.mkly-core-footer {
  padding-top: 28px;
  margin-top: calc(40px * var(--_gs));
  border-top-width: 1px;
  border-top-style: solid;
  text-align: center;
  font-size: 0.85em;
  background: none;
}
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer a { font-weight: 400; text-decoration: underline; text-underline-offset: 3px; }

.mkly-core-cta {
  text-align: center;
  margin-top: calc(40px * var(--_gs));
  margin-bottom: calc(40px * var(--_gs));
  padding: 28px 0;
  border-radius: 0;
  border: none;
  border-top-width: 1px;
  border-top-style: solid;
}
.mkly-core-cta p { margin: 0 0 12px; line-height: 1.8; }
.mkly-core-cta__button {
  padding: 12px 28px;
  border-radius: 0;
  border-width: 1px;
  border-style: solid;
  font-weight: 500;
  text-decoration: none;
}
`,
  css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 12px 28px
  borderRadius: 0
  fontWeight: 500

core/code
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  padding: 20px 0 20px 20px
  borderLeftWidth: 1

core/quote
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 18px 0 18px 20px
  borderLeftWidth: 1

core/hero
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 28px 0

core/section.title
  paddingBottom: 0
  fontSize: 0.64em
  fontWeight: 400
  textTransform: uppercase
  letterSpacing: 0.2em

core/card
  borderRadius: 0
  overflow: hidden
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  borderBottomWidth: 1

core/card.body
  padding: 20px 0

core/header
  paddingBottom: 28px
  borderBottomWidth: 1

core/footer
  paddingTop: 28px
  marginTop: calc(40px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none
  borderTopWidth: 1

core/cta
  textAlign: center
  marginTop: calc(40px * var(--mkly-gap-scale, 1))
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 28px 0
  borderRadius: 0
  borderTopWidth: 1

core/cta.button
  padding: 12px 28px
  borderRadius: 0
  fontWeight: 500

newsletter/featured
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden

newsletter/featured.source
  padding: 5px 0
  borderRadius: 0

newsletter/category.title
  paddingBottom: 0

newsletter/item
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  padding: 20px 0
  borderRadius: 0
  borderBottomWidth: 1

newsletter/item.img
  borderRadius: 0
  aspectRatio: 4/3
  objectFit: cover

newsletter/item.body
  overflow: hidden
  minWidth: 0

newsletter/item.meta
  fontSize: 0.7em
  letterSpacing: 0.1em

newsletter/quickHits
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/tools
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 20px 0
  borderRadius: 0
  borderBottomWidth: 1

newsletter/tipOfTheDay
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 16px 0 16px 24px
  borderRadius: 0
  borderLeftWidth: 1

newsletter/community
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/community.quote
  padding: 0 0 0 20px
  borderLeftWidth: 1

newsletter/personalNote
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 16px 0 16px 24px
  borderRadius: 0
  borderLeftWidth: 1

newsletter/poll
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/poll.option
  borderRadius: 0
  padding: 14px 0
  borderBottomWidth: 1

newsletter/recommendations
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/sponsor
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 20px 0
  borderRadius: 0
  borderTopWidth: 1

newsletter/sponsor.badge
  padding: 0
  borderRadius: 0

newsletter/sponsor.img
  borderRadius: 0

newsletter/outro
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 28px 0
  borderRadius: 0
  borderTopWidth: 1

newsletter/outro.cta
  padding: 12px 28px
  borderRadius: 0

newsletter/custom
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 20px 0
  borderRadius: 0
  borderBottomWidth: 1
newsletter/intro
  lineHeight: 1.9
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  paddingTop: calc(40px * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  fontWeight: 500

core/text
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  lineHeight: 1.75

core/divider
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  height: 1px
  opacity: 0.3

core/list
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
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
  font-size: 17px;
  line-height: 1.85;
  padding: 0 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --_gs: var(--mkly-gap-scale, 1);
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
  line-height: 1.85;
  margin: 0 0 calc(32px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(32px * var(--_gs));
  border-width: 1px;
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
  padding: 4px 12px;
  border-width: 1px;
  border-style: solid;
  border-radius: 0;
  margin: 22px 24px 10px;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-variant: small-caps;
  letter-spacing: 0.04em;
  font-size: 0.84em;
  margin: 0 24px 8px;
  line-height: 1.4;
  font-weight: 400;
}
.mkly-newsletter-featured p {
  margin: 8px 24px 14px;
  line-height: 1.85;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 6px 24px 24px;
  font-weight: 600;
  text-decoration: none;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(32px * var(--_gs));
  padding-top: calc(32px * var(--_gs));
}
.mkly-newsletter-category__title {
  font-variant: small-caps;
  font-size: 0.9em;
  letter-spacing: 0.06em;
  text-transform: none;
  font-style: normal;
  margin: 0 0 20px;
  padding-bottom: 10px;
  border-bottom-width: 3px;
  border-bottom-style: double;
  line-height: 1.2;
  font-weight: 700;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 0;
  border: none;
  border-top-width: 1px;
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
  padding: 20px 24px 24px;
  overflow: visible;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-variant: small-caps;
  letter-spacing: 0.06em;
  font-size: 0.65em;
  padding: 3px 8px;
  border-width: 1px;
  border-style: solid;
  border-radius: 0;
  margin-bottom: 8px;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.7em;
  line-height: 1.3;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 8px;
  line-height: 1.85;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.14em;
  font-weight: 700;
  margin: 0 0 6px;
  line-height: 1.3;
  letter-spacing: -0.01em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 8px;
  font-weight: 600;
  text-decoration: none;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 24px 26px;
  border-radius: 0;
  border-width: 1px;
  border-style: solid;
  box-shadow: none;
}
.mkly-newsletter-quickHits__title {
  font-variant: small-caps;
  font-size: 0.85em;
  letter-spacing: 0.06em;
  margin: 0 0 16px;
  line-height: 1.2;
  font-weight: 700;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li {
  margin-bottom: 12px;
  line-height: 1.85;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 24px 26px;
  border-radius: 0;
  border-width: 1px;
  border-style: solid;
  box-shadow: none;
}
.mkly-newsletter-tools__title {
  font-variant: small-caps;
  font-size: 0.85em;
  letter-spacing: 0.06em;
  margin: 0 0 18px;
  line-height: 1.2;
  font-weight: 700;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 20px 0 20px 24px;
  border: none;
  border-left-width: 3px;
  border-left-style: double;
  border-radius: 0;
}
.mkly-newsletter-tipOfTheDay__title {
  font-variant: small-caps;
  font-size: 0.85em;
  letter-spacing: 0.06em;
  margin: 0 0 14px;
  line-height: 1.2;
  font-weight: 700;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; line-height: 1.85; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-size: 1.18em;
  line-height: 1.8;
  padding: 0 0 0 24px;
  border-left-width: 2px;
  border-left-style: solid;
  margin-bottom: 14px;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.9em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  font-variant: small-caps;
  letter-spacing: 0.04em;
  font-size: 0.85em;
  font-weight: 400;
  margin-top: 14px;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 20px 0 20px 24px;
  border: none;
  border-left-width: 2px;
  border-left-style: solid;
  border-radius: 0;
  font-style: italic;
  line-height: 1.85;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.9em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 26px;
  border-width: 1px;
  border-style: solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-poll__question {
  font-size: 1em;
  font-weight: 700;
  margin: 0 0 18px;
  line-height: 1.4;
}
.mkly-newsletter-poll__option {
  display: block;
  border-width: 1px;
  border-style: solid;
  border-radius: 0;
  padding: 14px 20px;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  margin: 8px 0;
  box-shadow: none;
  line-height: 1.5;
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 24px 26px;
  border-radius: 0;
  border-width: 1px;
  border-style: solid;
  box-shadow: none;
}
.mkly-newsletter-recommendations__title {
  font-variant: small-caps;
  font-size: 0.85em;
  letter-spacing: 0.06em;
  margin: 0 0 16px;
  line-height: 1.2;
  font-weight: 700;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li {
  margin-bottom: 12px;
  line-height: 1.85;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 22px 0;
  border: none;
  border-top-width: 1px;
  border-top-style: solid;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-variant: small-caps;
  letter-spacing: 0.06em;
  font-size: 0.62em;
  padding: 3px 0;
  border: none;
  border-radius: 0;
  margin-bottom: 12px;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  border-radius: 0;
  margin-bottom: 14px;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 8px;
  line-height: 1.85;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 8px;
  font-weight: 600;
  text-decoration: none;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(32px * var(--_gs));
  text-align: center;
  padding: 32px 0;
  border: none;
  border-top-width: 3px;
  border-top-style: double;
  border-radius: 0;
}
.mkly-newsletter-outro p {
  margin: 0 0 12px;
  line-height: 1.85;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  padding: 14px 34px;
  border-width: 1px;
  border-style: solid;
  border-radius: 0;
  font-weight: 600;
  text-decoration: none;
  margin-top: 12px;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 22px 24px;
  border-width: 1px;
  border-style: solid;
  border-radius: 0;
}
.mkly-newsletter-custom__title {
  font-variant: small-caps;
  font-size: 0.85em;
  letter-spacing: 0.06em;
  margin: 0 0 16px;
  line-height: 1.2;
  font-weight: 700;
}
.mkly-newsletter-custom p {
  margin: 0 0 8px;
  line-height: 1.85;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core blocks ── */
.mkly-core-hero {
  margin-bottom: calc(32px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
}
.mkly-core-hero__img { border-radius: 0; }
.mkly-core-hero__content { padding: 28px 24px; }

.mkly-core-heading {
  margin-bottom: calc(20px * var(--_gs));
  font-weight: 700;
}

.mkly-core-text {
  margin-bottom: calc(20px * var(--_gs));
  line-height: 1.85;
}

.mkly-core-image {
  margin-bottom: calc(28px * var(--_gs));
  border-radius: 0;
}
.mkly-core-image__img {
  border-radius: 0;
  box-shadow: none;
}

.mkly-core-quote {
  padding: 20px 0 20px 24px;
  border-left-width: 2px;
  border-left-style: solid;
  margin-bottom: calc(28px * var(--_gs));
  font-size: 1.1em;
  line-height: 1.8;
  border-radius: 0;
}

.mkly-core-code {
  border-radius: 0;
  padding: 20px 24px;
  margin-bottom: calc(24px * var(--_gs));
  border-width: 1px;
  border-style: solid;
}

.mkly-core-list {
  margin-bottom: calc(24px * var(--_gs));
  padding-left: 1.4em;
}

.mkly-core-button {
  margin-bottom: calc(24px * var(--_gs));
}
.mkly-core-button__link {
  padding: 14px 32px;
  border-radius: 0;
  border-width: 1px;
  border-style: solid;
  font-weight: 600;
  text-decoration: none;
}

.mkly-core-section {
  margin-bottom: calc(32px * var(--_gs));
}
.mkly-core-section__title {
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-variant: small-caps;
  font-size: 0.9em;
  letter-spacing: 0.06em;
  border-bottom-width: 3px;
  border-bottom-style: double;
  font-weight: 700;
}

.mkly-core-divider {
  margin: calc(28px * var(--_gs)) 0;
  height: 1px;
  border: none;
}

.mkly-core-card {
  border-radius: 0;
  overflow: hidden;
  margin-bottom: calc(24px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  box-shadow: none;
}
.mkly-core-card__body {
  padding: 22px 24px;
}

.mkly-core-header {
  padding-bottom: 28px;
  margin-bottom: calc(28px * var(--_gs));
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

.mkly-core-footer {
  padding-top: 28px;
  margin-top: calc(32px * var(--_gs));
  border-top-width: 1px;
  border-top-style: solid;
  text-align: center;
  font-size: 0.85em;
  background: none;
}
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer a { font-weight: 600; }

.mkly-core-cta {
  text-align: center;
  margin-top: calc(32px * var(--_gs));
  margin-bottom: calc(32px * var(--_gs));
  padding: 32px 0;
  border-radius: 0;
  border: none;
  border-top-width: 3px;
  border-top-style: double;
}
.mkly-core-cta p { margin: 0 0 12px; line-height: 1.85; }
.mkly-core-cta__button {
  padding: 14px 34px;
  border-radius: 0;
  border-width: 1px;
  border-style: solid;
  font-weight: 600;
  text-decoration: none;
}
`,
  css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 14px 32px
  borderRadius: 0
  fontWeight: 600

core/code
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  padding: 20px 24px
  borderWidth: 1

core/quote
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 20px 0 20px 24px
  borderLeftWidth: 2
  fontSize: 1.1em

core/hero
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden
  borderWidth: 1

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 28px 24px

core/section.title
  paddingBottom: 10px
  fontSize: 0.9em
  fontWeight: 700
  borderBottomWidth: 3
  borderBottomStyle: double
  fontVariant: small-caps
  letterSpacing: 0.06em

core/card
  borderRadius: 0
  overflow: hidden
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  borderWidth: 1

core/card.body
  padding: 22px 24px

core/header
  paddingBottom: 28px
  borderBottomWidth: 1

core/footer
  paddingTop: 28px
  marginTop: calc(32px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none
  borderTopWidth: 1

core/cta
  textAlign: center
  marginTop: calc(32px * var(--mkly-gap-scale, 1))
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 32px 0
  borderRadius: 0
  borderTopWidth: 3
  borderTopStyle: double

core/cta.button
  padding: 14px 34px
  borderRadius: 0
  fontWeight: 600

newsletter/featured
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden
  borderWidth: 1

newsletter/featured.source
  padding: 4px 12px
  borderRadius: 0
  borderWidth: 1

newsletter/category.title
  paddingBottom: 10px
  borderBottomWidth: 3
  borderBottomStyle: double

newsletter/item
  marginBottom: calc(16px * var(--mkly-gap-scale, 1))
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
  padding: 20px 24px 24px

newsletter/item.meta
  fontSize: 0.7em
  textTransform: uppercase
  letterSpacing: 0.08em

newsletter/quickHits
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 24px 26px
  borderRadius: 0
  borderWidth: 1

newsletter/tools
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 24px 26px
  borderRadius: 0
  borderWidth: 1

newsletter/tipOfTheDay
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 20px 0 20px 24px
  borderRadius: 0
  borderLeftWidth: 3
  borderLeftStyle: double

newsletter/community
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/community.quote
  padding: 0 0 0 24px
  borderLeftWidth: 2
  fontSize: 1.18em

newsletter/personalNote
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 20px 0 20px 24px
  borderRadius: 0
  borderLeftWidth: 2

newsletter/poll
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 26px
  borderRadius: 0
  borderWidth: 1

newsletter/poll.option
  borderRadius: 0
  padding: 14px 20px
  borderWidth: 1

newsletter/recommendations
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 24px 26px
  borderRadius: 0
  borderWidth: 1

newsletter/sponsor
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 22px 0
  borderRadius: 0
  borderTopWidth: 1
  borderBottomWidth: 1

newsletter/sponsor.badge
  padding: 3px 0
  borderRadius: 0

newsletter/sponsor.img
  borderRadius: 0

newsletter/outro
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 32px 0
  borderRadius: 0
  borderTopWidth: 3
  borderTopStyle: double

newsletter/outro.cta
  padding: 14px 34px
  borderRadius: 0

newsletter/custom
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 22px 24px
  borderRadius: 0
  borderWidth: 1
newsletter/intro
  fontSize: 1.08em
  lineHeight: 1.85
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  paddingTop: calc(32px * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  fontWeight: 700

core/text
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  lineHeight: 1.85

core/divider
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  height: 1px

core/list
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
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
  font-size: 13px;
  line-height: 1.45;
  padding: 0 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --_gs: var(--mkly-gap-scale, 1);
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
  line-height: 1.5;
  margin: 0 0 calc(12px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.6em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; text-underline-offset: 2px; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(12px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
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
  padding: 2px 6px;
  border-radius: 3px;
  margin: 10px 12px 6px;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.78em;
  margin: 0 12px 4px;
  line-height: 1.3;
  font-weight: 500;
}
.mkly-newsletter-featured p {
  margin: 4px 12px 8px;
  line-height: 1.45;
  font-size: 0.88em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 4px 12px 12px;
  font-weight: 600;
  font-size: 0.82em;
  text-decoration: none;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(12px * var(--_gs));
  padding-top: calc(12px * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 10px;
  padding-bottom: 6px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 10px 0;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-radius: 0;
  margin-bottom: 0;
  box-shadow: none;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; border-bottom: none; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  max-width: 70px;
  float: right;
  margin-left: 10px;
  margin-bottom: 4px;
  border-radius: 4px;
  display: block;
  aspect-ratio: 1;
  object-fit: cover;
  box-shadow: none;
}
.mkly-newsletter-item__body {
  overflow: hidden;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.6em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 2px 6px;
  border-radius: 3px;
  margin-bottom: 4px;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.68em;
  line-height: 1.3;
  margin-bottom: 4px;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 4px;
  line-height: 1.45;
  font-size: 0.88em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1em;
  font-weight: 600;
  margin: 0 0 4px;
  line-height: 1.25;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 4px;
  font-weight: 600;
  font-size: 0.82em;
  text-decoration: none;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(12px * var(--_gs));
  padding: 10px 12px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  box-shadow: none;
}
.mkly-newsletter-quickHits__title {
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 8px;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-quickHits li {
  margin-bottom: 6px;
  line-height: 1.45;
  font-size: 0.92em;
}
.mkly-newsletter-quickHits li::before {
  content: '\\25AA';
  margin-right: 6px;
  font-size: 0.7em;
  vertical-align: middle;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(12px * var(--_gs));
  padding: 10px 12px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  box-shadow: none;
}
.mkly-newsletter-tools__title {
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 8px;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(12px * var(--_gs));
  padding: 8px 0 8px 12px;
  border: none;
  border-left-width: 2px;
  border-left-style: solid;
  border-radius: 0;
}
.mkly-newsletter-tipOfTheDay__title {
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 6px;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 4px; line-height: 1.45; font-size: 0.92em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(12px * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  line-height: 1.5;
  padding: 0 0 0 12px;
  border-left-width: 2px;
  border-left-style: solid;
  margin-bottom: 8px;
  font-size: 0.92em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.6em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  font-size: 0.78em;
  font-weight: 500;
  margin-top: 8px;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(12px * var(--_gs));
  padding: 8px 0 8px 12px;
  border: none;
  border-left-width: 2px;
  border-left-style: solid;
  border-radius: 0;
  font-style: italic;
  line-height: 1.5;
  font-size: 0.92em;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.6em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(12px * var(--_gs));
  padding: 10px 12px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  box-shadow: none;
}
.mkly-newsletter-poll__question {
  font-size: 0.92em;
  font-weight: 600;
  margin: 0 0 8px;
  line-height: 1.3;
}
.mkly-newsletter-poll__option {
  display: block;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  padding: 8px 10px;
  font-weight: 400;
  text-align: left;
  cursor: pointer;
  margin: 4px 0;
  box-shadow: none;
  line-height: 1.3;
  font-size: 0.88em;
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(12px * var(--_gs));
  padding: 10px 12px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  box-shadow: none;
}
.mkly-newsletter-recommendations__title {
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 8px;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-recommendations li {
  margin-bottom: 6px;
  line-height: 1.45;
  font-size: 0.92em;
}
.mkly-newsletter-recommendations li::before {
  content: '\\25AA';
  margin-right: 6px;
  font-size: 0.7em;
  vertical-align: middle;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(12px * var(--_gs));
  padding: 10px 0;
  border: none;
  border-top-width: 1px;
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
  padding: 2px 6px;
  border-radius: 3px;
  border: none;
  margin-bottom: 6px;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  border-radius: 4px;
  margin-bottom: 8px;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 4px;
  line-height: 1.45;
  font-size: 0.88em;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 4px;
  font-weight: 600;
  font-size: 0.82em;
  text-decoration: none;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(12px * var(--_gs));
  text-align: center;
  padding: 16px 0;
  border: none;
  border-top-width: 1px;
  border-top-style: solid;
  border-radius: 0;
}
.mkly-newsletter-outro p {
  margin: 0 0 6px;
  line-height: 1.45;
  font-size: 0.92em;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  padding: 8px 20px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.85em;
  text-decoration: none;
  margin-top: 8px;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(12px * var(--_gs));
  padding: 10px 12px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
}
.mkly-newsletter-custom__title {
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 8px;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 4px;
  line-height: 1.45;
  font-size: 0.88em;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core blocks ── */
.mkly-core-hero {
  margin-bottom: calc(12px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: none;
}
.mkly-core-hero__img { border-radius: 0; }
.mkly-core-hero__content { padding: 14px 12px; }

.mkly-core-heading {
  margin-bottom: calc(8px * var(--_gs));
  font-weight: 600;
}

.mkly-core-text {
  margin-bottom: calc(8px * var(--_gs));
  line-height: 1.45;
}

.mkly-core-image {
  margin-bottom: calc(12px * var(--_gs));
  border-radius: 4px;
}
.mkly-core-image__img {
  border-radius: 4px;
  box-shadow: none;
}

.mkly-core-quote {
  padding: 8px 0 8px 12px;
  border-left-width: 2px;
  border-left-style: solid;
  margin-bottom: calc(12px * var(--_gs));
  font-style: italic;
  border-radius: 0;
  font-size: 0.95em;
}

.mkly-core-code {
  border-radius: 4px;
  padding: 10px 12px;
  margin-bottom: calc(12px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  font-size: 0.85em;
}

.mkly-core-list {
  margin-bottom: calc(12px * var(--_gs));
  padding-left: 1.2em;
  font-size: 0.92em;
}

.mkly-core-button {
  margin-bottom: calc(12px * var(--_gs));
}
.mkly-core-button__link {
  padding: 8px 20px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  font-weight: 600;
  font-size: 0.85em;
  text-decoration: none;
}

.mkly-core-section {
  margin-bottom: calc(16px * var(--_gs));
}
.mkly-core-section__title {
  padding-bottom: 6px;
  margin-bottom: 10px;
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

.mkly-core-divider {
  margin: calc(12px * var(--_gs)) 0;
  height: 1px;
  border: none;
}

.mkly-core-card {
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: calc(12px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  box-shadow: none;
}
.mkly-core-card__body {
  padding: 10px 12px;
}

.mkly-core-header {
  padding-bottom: 14px;
  margin-bottom: calc(12px * var(--_gs));
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

.mkly-core-footer {
  padding-top: 14px;
  margin-top: calc(16px * var(--_gs));
  border-top-width: 1px;
  border-top-style: solid;
  text-align: center;
  font-size: 0.78em;
  background: none;
}
.mkly-core-footer p { margin: 0 0 4px; }
.mkly-core-footer a { font-weight: 600; }

.mkly-core-cta {
  text-align: center;
  margin-top: calc(16px * var(--_gs));
  margin-bottom: calc(16px * var(--_gs));
  padding: 16px 0;
  border-radius: 0;
  border: none;
  border-top-width: 1px;
  border-top-style: solid;
}
.mkly-core-cta p { margin: 0 0 6px; line-height: 1.45; }
.mkly-core-cta__button {
  padding: 8px 20px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  font-weight: 600;
  font-size: 0.85em;
  text-decoration: none;
}
`,
  css: `core/image.img
  borderRadius: 4px

core/button.link
  padding: 8px 20px
  borderRadius: 4px
  fontWeight: 600
  fontSize: 0.85em

core/code
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))
  borderRadius: 4px
  padding: 10px 12px
  borderWidth: 1
  fontSize: 0.85em

core/quote
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))
  padding: 8px 0 8px 12px
  borderLeftWidth: 2
  fontSize: 0.95em

core/hero
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))
  borderRadius: 4px
  overflow: hidden
  borderWidth: 1

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 14px 12px

core/heading
  marginBottom: calc(8px * var(--mkly-gap-scale, 1))
  fontWeight: 600

core/text
  marginBottom: calc(8px * var(--mkly-gap-scale, 1))
  lineHeight: 1.45

core/image
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))
  borderRadius: 4px

core/list
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))
  paddingLeft: 1.2em
  fontSize: 0.92em

core/section
  marginBottom: calc(16px * var(--mkly-gap-scale, 1))

core/section.title
  paddingBottom: 6px
  fontSize: 0.68em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.08em
  borderBottomWidth: 1

core/divider
  marginTop: calc(12px * var(--mkly-gap-scale, 1))
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))

core/card
  borderRadius: 4px
  overflow: hidden
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))
  borderWidth: 1

core/card.body
  padding: 10px 12px

core/header
  paddingBottom: 14px
  borderBottomWidth: 1

core/footer
  paddingTop: 14px
  marginTop: calc(16px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.78em
  background: none
  borderTopWidth: 1

core/cta
  textAlign: center
  marginTop: calc(16px * var(--mkly-gap-scale, 1))
  marginBottom: calc(16px * var(--mkly-gap-scale, 1))
  padding: 16px 0
  borderRadius: 0
  borderTopWidth: 1

core/cta.button
  padding: 8px 20px
  borderRadius: 4px
  fontWeight: 600
  fontSize: 0.85em

core/button
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))

newsletter/intro
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))
  fontSize: 0.92em

newsletter/featured
  borderRadius: 4px
  overflow: hidden
  borderWidth: 1
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))

newsletter/featured.source
  padding: 2px 6px
  borderRadius: 3px
  fontSize: 0.6em

newsletter/featured.img
  width: 100%

newsletter/featured.author
  fontSize: 0.78em

newsletter/featured.link
  fontSize: 0.82em

newsletter/category
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))
  paddingTop: calc(12px * var(--mkly-gap-scale, 1))

newsletter/category.title
  paddingBottom: 6px
  borderBottomWidth: 1
  fontSize: 0.68em

newsletter/item
  marginBottom: calc(10px * var(--mkly-gap-scale, 1))
  padding: 10px 0
  borderRadius: 0
  borderBottomWidth: 1

newsletter/item.img
  borderRadius: 4px
  maxWidth: 70px
  aspectRatio: 1
  objectFit: cover

newsletter/item.body
  overflow: hidden
  minWidth: 0

newsletter/item.meta
  fontSize: 0.68em

newsletter/item.source
  padding: 2px 6px
  borderRadius: 3px
  fontSize: 0.6em

newsletter/quickHits
  padding: 10px 12px
  borderRadius: 4px
  borderWidth: 1
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))

newsletter/tools
  padding: 10px 12px
  borderRadius: 4px
  borderWidth: 1
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))

newsletter/tipOfTheDay
  padding: 8px 0 8px 12px
  borderRadius: 0
  borderLeftWidth: 2
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))

newsletter/community
  padding: 0
  borderRadius: 0
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))

newsletter/community.quote
  padding: 0 0 0 12px
  borderLeftWidth: 2
  fontSize: 0.92em

newsletter/personalNote
  padding: 8px 0 8px 12px
  borderRadius: 0
  borderLeftWidth: 2
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))

newsletter/poll
  padding: 10px 12px
  borderRadius: 4px
  borderWidth: 1
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))

newsletter/poll.question
  fontSize: 0.92em
  fontWeight: 600

newsletter/poll.option
  borderRadius: 4px
  padding: 8px 10px
  borderWidth: 1
  fontSize: 0.88em

newsletter/recommendations
  padding: 10px 12px
  borderRadius: 4px
  borderWidth: 1
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))

newsletter/sponsor
  padding: 10px 0
  borderRadius: 0
  borderTopWidth: 1
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))

newsletter/sponsor.badge
  padding: 2px 6px
  borderRadius: 3px
  fontSize: 0.55em

newsletter/sponsor.img
  borderRadius: 4px

newsletter/outro
  padding: 16px 0
  borderRadius: 0
  borderTopWidth: 1
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))

newsletter/outro.cta
  padding: 8px 20px
  borderRadius: 4px
  fontWeight: 600
  fontSize: 0.85em

newsletter/custom
  padding: 10px 12px
  borderRadius: 4px
  borderWidth: 1
  marginBottom: calc(12px * var(--mkly-gap-scale, 1))
`,
},

{
  name: 'soft',
  displayName: 'Newsletter/Soft',
  description: 'Dreamy cloud-like feel — diffuse multi-layer shadows, ultra-round containers, no borders anywhere',
  rawCss: `/* newsletter kit — soft preset */

.mkly-document {
  font-family: 'Nunito', 'Inter', -apple-system, system-ui, sans-serif;
  line-height: 1.78;
  padding: 0 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --_gs: var(--mkly-gap-scale, 1);
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
  line-height: 1.78;
  margin: 0 0 calc(28px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; text-underline-offset: 3px; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(28px * var(--_gs));
  border: none;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 5px 14px;
  border-radius: 100px;
  margin: 22px 28px 10px;
  line-height: 1.2;
  border: none;
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  margin: 0 28px 8px;
  line-height: 1.4;
  font-weight: 500;
}
.mkly-newsletter-featured p {
  margin: 8px 28px 14px;
  line-height: 1.78;
  font-size: 0.96em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 6px 28px 28px;
  font-weight: 600;
  font-size: 0.88em;
  text-decoration: none;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(28px * var(--_gs));
  padding-top: calc(28px * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 20px;
  padding-bottom: 0;
  border-bottom: none;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 22px 24px;
  border: none;
  border-radius: 20px;
  margin-bottom: calc(16px * var(--_gs));
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  max-width: 120px;
  float: right;
  margin-left: 20px;
  margin-bottom: 8px;
  border-radius: 16px;
  display: block;
  aspect-ratio: 4/3;
  object-fit: cover;
  box-shadow: none;
}
.mkly-newsletter-item__body {
  overflow: hidden;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.64em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 12px;
  border-radius: 100px;
  margin-bottom: 8px;
  line-height: 1.2;
  border: none;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  line-height: 1.3;
  margin-bottom: 6px;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 8px;
  line-height: 1.78;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.12em;
  font-weight: 600;
  margin: 0 0 8px;
  line-height: 1.3;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 8px;
  font-weight: 600;
  font-size: 0.88em;
  text-decoration: none;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 24px;
  border: none;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}
.mkly-newsletter-quickHits__title {
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li {
  margin-bottom: 12px;
  line-height: 1.78;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 24px;
  border: none;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}
.mkly-newsletter-tools__title {
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 16px;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 22px 28px;
  border: none;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}
.mkly-newsletter-tipOfTheDay__title {
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 14px;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; line-height: 1.78; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  line-height: 1.78;
  padding: 0 0 0 20px;
  border: none;
  box-shadow: inset 3px 0 0 0 currentColor;
  margin-bottom: 14px;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.9em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  font-size: 0.85em;
  font-weight: 500;
  margin-top: 14px;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 22px 24px 22px 24px;
  border: none;
  border-radius: 0;
  font-style: italic;
  line-height: 1.78;
  box-shadow: inset 3px 0 0 0 currentColor;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.9em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 28px;
  border: none;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}
.mkly-newsletter-poll__question {
  font-size: 1em;
  font-weight: 600;
  margin: 0 0 18px;
  line-height: 1.4;
}
.mkly-newsletter-poll__option {
  display: block;
  border: none;
  border-radius: 100px;
  padding: 14px 24px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  margin: 10px 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  line-height: 1.5;
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border-radius: 24px;
  border: none;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}
.mkly-newsletter-recommendations__title {
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li {
  margin-bottom: 12px;
  line-height: 1.78;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border: none;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.58em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 14px;
  border-radius: 100px;
  border: none;
  margin-bottom: 12px;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  border-radius: 16px;
  margin-bottom: 14px;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 8px;
  line-height: 1.78;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 8px;
  font-weight: 600;
  text-decoration: none;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(28px * var(--_gs));
  text-align: center;
  padding: 32px 28px;
  border: none;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}
.mkly-newsletter-outro p {
  margin: 0 0 12px;
  line-height: 1.78;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  padding: 14px 36px;
  border: none;
  border-radius: 100px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(28px * var(--_gs));
  padding: 24px 28px;
  border: none;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}
.mkly-newsletter-custom__title {
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 8px;
  line-height: 1.78;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core blocks ── */
.mkly-core-hero {
  margin-bottom: calc(28px * var(--_gs));
  border: none;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}
.mkly-core-hero__img { border-radius: 0; }
.mkly-core-hero__content { padding: 28px; }

.mkly-core-heading {
  margin-bottom: calc(16px * var(--_gs));
  font-weight: 600;
}

.mkly-core-text {
  margin-bottom: calc(16px * var(--_gs));
  line-height: 1.78;
}

.mkly-core-image {
  margin-bottom: calc(24px * var(--_gs));
  border-radius: 20px;
}
.mkly-core-image__img {
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}

.mkly-core-quote {
  padding: 22px 24px 22px 24px;
  border: none;
  margin-bottom: calc(24px * var(--_gs));
  font-style: italic;
  border-radius: 0;
  box-shadow: inset 3px 0 0 0 currentColor;
}

.mkly-core-code {
  border-radius: 20px;
  padding: 22px 24px;
  margin-bottom: calc(24px * var(--_gs));
  border: none;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}

.mkly-core-list {
  margin-bottom: calc(20px * var(--_gs));
  padding-left: 1.4em;
}

.mkly-core-button {
  margin-bottom: calc(20px * var(--_gs));
}
.mkly-core-button__link {
  padding: 14px 36px;
  border-radius: 100px;
  border: none;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.mkly-core-section {
  margin-bottom: calc(28px * var(--_gs));
}
.mkly-core-section__title {
  padding-bottom: 0;
  margin-bottom: 20px;
  font-size: 0.72em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-bottom: none;
}

.mkly-core-divider {
  margin: calc(24px * var(--_gs)) 0;
  height: 1px;
  border: none;
  opacity: 0.15;
}

.mkly-core-card {
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: calc(20px * var(--_gs));
  border: none;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}
.mkly-core-card__body {
  padding: 24px 28px;
}

.mkly-core-header {
  padding-bottom: 28px;
  margin-bottom: calc(28px * var(--_gs));
  border-bottom: none;
}

.mkly-core-footer {
  padding-top: 28px;
  margin-top: calc(32px * var(--_gs));
  border-top: none;
  text-align: center;
  font-size: 0.85em;
  background: none;
}
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer a { font-weight: 600; }

.mkly-core-cta {
  text-align: center;
  margin-top: calc(32px * var(--_gs));
  margin-bottom: calc(32px * var(--_gs));
  padding: 32px 28px;
  border-radius: 24px;
  border: none;
  box-shadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04);
}
.mkly-core-cta p { margin: 0 0 12px; line-height: 1.78; }
.mkly-core-cta__button {
  padding: 14px 36px;
  border-radius: 100px;
  border: none;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
`,
  css: `core/image.img
  borderRadius: 20px
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)

core/button.link
  padding: 14px 36px
  borderRadius: 100px
  fontWeight: 600
  boxShadow: 0 4px 16px rgba(0,0,0,0.08)

core/code
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderRadius: 20px
  padding: 22px 24px
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)

core/quote
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  padding: 22px 24px 22px 24px
  borderRadius: 0
  boxShadow: inset 3px 0 0 0 currentColor

core/hero
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderRadius: 24px
  overflow: hidden
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 28px

core/heading
  marginBottom: calc(16px * var(--mkly-gap-scale, 1))
  fontWeight: 600

core/text
  marginBottom: calc(16px * var(--mkly-gap-scale, 1))
  lineHeight: 1.78

core/image
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  borderRadius: 20px

core/list
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  paddingLeft: 1.4em

core/section
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

core/section.title
  paddingBottom: 0
  fontSize: 0.72em
  fontWeight: 600
  textTransform: uppercase
  letterSpacing: 0.1em

core/divider
  marginTop: calc(24px * var(--mkly-gap-scale, 1))
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  opacity: 0.15

core/card
  borderRadius: 24px
  overflow: hidden
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)

core/card.body
  padding: 24px 28px

core/header
  paddingBottom: 28px

core/footer
  paddingTop: 28px
  marginTop: calc(32px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(32px * var(--mkly-gap-scale, 1))
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 32px 28px
  borderRadius: 24px
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)

core/cta.button
  padding: 14px 36px
  borderRadius: 100px
  fontWeight: 600
  boxShadow: 0 4px 16px rgba(0,0,0,0.08)

core/button
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))

newsletter/intro
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  fontSize: 1.06em

newsletter/featured
  borderRadius: 24px
  overflow: hidden
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)

newsletter/featured.source
  padding: 5px 14px
  borderRadius: 100px
  fontSize: 0.68em

newsletter/featured.img
  width: 100%

newsletter/featured.author
  fontSize: 0.84em

newsletter/featured.link
  fontSize: 0.88em

newsletter/category
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  paddingTop: calc(28px * var(--mkly-gap-scale, 1))

newsletter/category.title
  paddingBottom: 0
  fontSize: 0.72em

newsletter/item
  padding: 22px 24px
  borderRadius: 20px
  marginBottom: calc(16px * var(--mkly-gap-scale, 1))
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)

newsletter/item.img
  borderRadius: 16px
  maxWidth: 120px
  aspectRatio: 4/3
  objectFit: cover

newsletter/item.body
  overflow: hidden
  minWidth: 0

newsletter/item.meta
  fontSize: 0.72em

newsletter/item.source
  padding: 4px 12px
  borderRadius: 100px
  fontSize: 0.64em

newsletter/quickHits
  padding: 24px 28px
  borderRadius: 24px
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)

newsletter/tools
  padding: 24px 28px
  borderRadius: 24px
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)

newsletter/tipOfTheDay
  padding: 22px 28px
  borderRadius: 24px
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)

newsletter/community
  padding: 0
  borderRadius: 0
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))

newsletter/community.quote
  padding: 0 0 0 20px
  boxShadow: inset 3px 0 0 0 currentColor

newsletter/personalNote
  padding: 22px 24px
  borderRadius: 0
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  boxShadow: inset 3px 0 0 0 currentColor

newsletter/poll
  padding: 28px
  borderRadius: 24px
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)

newsletter/poll.question
  fontSize: 1em
  fontWeight: 600

newsletter/poll.option
  borderRadius: 100px
  padding: 14px 24px
  boxShadow: 0 2px 8px rgba(0,0,0,0.04)

newsletter/recommendations
  padding: 24px 28px
  borderRadius: 24px
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)

newsletter/sponsor
  padding: 24px 28px
  borderRadius: 24px
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)

newsletter/sponsor.badge
  padding: 4px 14px
  borderRadius: 100px
  fontSize: 0.58em

newsletter/sponsor.img
  borderRadius: 16px

newsletter/outro
  padding: 32px 28px
  borderRadius: 24px
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)

newsletter/outro.cta
  padding: 14px 36px
  borderRadius: 100px
  fontWeight: 600
  boxShadow: 0 4px 16px rgba(0,0,0,0.08)

newsletter/custom
  padding: 24px 28px
  borderRadius: 24px
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  boxShadow: 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)
`,
},

{
  name: 'typewriter',
  displayName: 'Newsletter/Typewriter',
  description: 'Authentic typewriter manuscript feel — monospaced font, text indents, dashed borders, zero radius',
  rawCss: `/* newsletter kit — typewriter preset */

.mkly-document {
  font-family: 'Courier Prime', 'Courier New', monospace;
  line-height: 1.75;
  letter-spacing: 0.02em;
  padding: 0 24px;
  -webkit-font-smoothing: auto;
  --_gs: var(--mkly-gap-scale, 1);
}
.mkly-document h1, .mkly-document h2, .mkly-document h3,
.mkly-document h4, .mkly-document h5, .mkly-document h6 {
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 4px;
  letter-spacing: 0.02em;
  line-height: 1.3;
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1em;
  line-height: 1.75;
  margin: 0 0 calc(32px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; text-indent: 2em; }
.mkly-newsletter-intro p:first-child { text-indent: 0; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(32px * var(--_gs));
  border-width: 1px;
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
  padding: 2px 0;
  border-radius: 0;
  border: none;
  text-decoration: underline;
  text-underline-offset: 2px;
  margin: 20px 20px 8px;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.85em;
  margin: 0 20px 8px;
  line-height: 1.4;
  font-weight: 400;
}
.mkly-newsletter-featured p {
  margin: 8px 20px 14px;
  line-height: 1.75;
  text-indent: 2em;
}
.mkly-newsletter-featured p:first-of-type { text-indent: 0; }
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 6px 20px 20px;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(32px * var(--_gs));
  padding-top: calc(32px * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.85em;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  margin: 0 0 20px;
  padding-bottom: 8px;
  border-bottom-width: 1px;
  border-bottom-style: dashed;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 20px 0;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: dashed;
  border-radius: 0;
  margin-bottom: 0;
  box-shadow: none;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; border-bottom: none; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  max-width: 120px;
  float: right;
  margin-left: 20px;
  margin-bottom: 8px;
  border-radius: 0;
  display: block;
  aspect-ratio: 1;
  object-fit: cover;
  box-shadow: none;
}
.mkly-newsletter-item__body {
  overflow: hidden;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0;
  border-radius: 0;
  margin-bottom: 8px;
  line-height: 1.2;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  line-height: 1.4;
  margin-bottom: 6px;
  opacity: 0.6;
}
.mkly-newsletter-item p {
  margin: 0 0 8px;
  line-height: 1.75;
  text-indent: 2em;
}
.mkly-newsletter-item p:first-of-type { text-indent: 0; }
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.1em;
  font-weight: 700;
  margin: 0 0 8px;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 8px;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 20px;
  border-radius: 0;
  border-width: 1px;
  border-style: dashed;
  box-shadow: none;
}
.mkly-newsletter-quickHits__title {
  font-size: 0.85em;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  margin: 0 0 16px;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 2em; text-indent: -0.5em; list-style: none; }
.mkly-newsletter-quickHits li {
  margin-bottom: 10px;
  line-height: 1.75;
}
.mkly-newsletter-quickHits li::before {
  content: '-- ';
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 20px;
  border-radius: 0;
  border-width: 1px;
  border-style: dashed;
  box-shadow: none;
}
.mkly-newsletter-tools__title {
  font-size: 0.85em;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  margin: 0 0 16px;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 16px 0 16px 24px;
  border: none;
  border-left-width: 1px;
  border-left-style: dashed;
  border-radius: 0;
}
.mkly-newsletter-tipOfTheDay__title {
  font-size: 0.85em;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  margin: 0 0 14px;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; line-height: 1.75; text-indent: 2em; }
.mkly-newsletter-tipOfTheDay p:first-of-type { text-indent: 0; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  line-height: 1.75;
  padding: 0 0 0 24px;
  border-left-width: 1px;
  border-left-style: dashed;
  margin-bottom: 14px;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.9em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  font-size: 0.85em;
  font-weight: 400;
  margin-top: 14px;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 16px 0 16px 24px;
  border: none;
  border-left-width: 1px;
  border-left-style: dashed;
  border-radius: 0;
  font-style: italic;
  line-height: 1.75;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.9em; text-indent: 2em; }
.mkly-newsletter-personalNote p:first-child { text-indent: 0; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 20px;
  border-width: 1px;
  border-style: dashed;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-poll__question {
  font-size: 1em;
  font-weight: 700;
  margin: 0 0 18px;
  line-height: 1.4;
}
.mkly-newsletter-poll__option {
  display: block;
  border-width: 1px;
  border-style: dashed;
  border-radius: 0;
  padding: 12px 16px;
  font-weight: 400;
  text-align: left;
  cursor: pointer;
  margin: 8px 0;
  box-shadow: none;
  line-height: 1.5;
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 20px;
  border-radius: 0;
  border-width: 1px;
  border-style: dashed;
  box-shadow: none;
}
.mkly-newsletter-recommendations__title {
  font-size: 0.85em;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  margin: 0 0 16px;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 2em; text-indent: -0.5em; list-style: none; }
.mkly-newsletter-recommendations li {
  margin-bottom: 10px;
  line-height: 1.75;
}
.mkly-newsletter-recommendations li::before {
  content: '-- ';
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 20px 0;
  border: none;
  border-top-width: 1px;
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
  text-underline-offset: 2px;
  margin-bottom: 12px;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  border-radius: 0;
  margin-bottom: 14px;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 8px;
  line-height: 1.75;
  text-indent: 2em;
}
.mkly-newsletter-sponsor p:first-of-type { text-indent: 0; }
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 8px;
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(32px * var(--_gs));
  text-align: center;
  padding: 28px 0;
  border: none;
  border-top-width: 1px;
  border-top-style: dashed;
  border-radius: 0;
}
.mkly-newsletter-outro p {
  margin: 0 0 12px;
  line-height: 1.75;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  padding: 12px 28px;
  border-width: 1px;
  border-style: dashed;
  border-radius: 0;
  font-weight: 700;
  text-decoration: none;
  margin-top: 12px;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 20px;
  border-width: 1px;
  border-style: dashed;
  border-radius: 0;
}
.mkly-newsletter-custom__title {
  font-size: 0.85em;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  margin: 0 0 16px;
  line-height: 1.3;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.mkly-newsletter-custom p {
  margin: 0 0 8px;
  line-height: 1.75;
  text-indent: 2em;
}
.mkly-newsletter-custom p:first-of-type { text-indent: 0; }
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core blocks ── */
.mkly-core-hero {
  margin-bottom: calc(32px * var(--_gs));
  border-width: 1px;
  border-style: dashed;
  border-radius: 0;
  overflow: hidden;
  box-shadow: none;
}
.mkly-core-hero__img { border-radius: 0; }
.mkly-core-hero__content { padding: 24px 20px; }

.mkly-core-heading {
  margin-bottom: calc(20px * var(--_gs));
  font-weight: 700;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.mkly-core-text {
  margin-bottom: calc(20px * var(--_gs));
  line-height: 1.75;
}
.mkly-core-text p { text-indent: 2em; }
.mkly-core-text p:first-child { text-indent: 0; }

.mkly-core-image {
  margin-bottom: calc(28px * var(--_gs));
  border-radius: 0;
}
.mkly-core-image__img {
  border-radius: 0;
  box-shadow: none;
}

.mkly-core-quote {
  padding: 16px 0 16px 24px;
  border-left-width: 1px;
  border-left-style: dashed;
  margin-bottom: calc(28px * var(--_gs));
  font-style: italic;
  border-radius: 0;
}

.mkly-core-code {
  border-radius: 0;
  padding: 20px;
  margin-bottom: calc(24px * var(--_gs));
  border-width: 1px;
  border-style: dashed;
}

.mkly-core-list {
  margin-bottom: calc(24px * var(--_gs));
  padding-left: 2em;
  text-indent: -0.5em;
  list-style: none;
}

.mkly-core-button {
  margin-bottom: calc(24px * var(--_gs));
}
.mkly-core-button__link {
  padding: 12px 28px;
  border-radius: 0;
  border-width: 1px;
  border-style: dashed;
  font-weight: 700;
  text-decoration: none;
}

.mkly-core-section {
  margin-bottom: calc(32px * var(--_gs));
}
.mkly-core-section__title {
  padding-bottom: 8px;
  margin-bottom: 20px;
  font-size: 0.85em;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.02em;
  border-bottom-width: 1px;
  border-bottom-style: dashed;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.mkly-core-divider {
  margin: calc(28px * var(--_gs)) 0;
  height: 0;
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: dashed;
}

.mkly-core-card {
  border-radius: 0;
  overflow: hidden;
  margin-bottom: calc(24px * var(--_gs));
  border-width: 1px;
  border-style: dashed;
  box-shadow: none;
}
.mkly-core-card__body {
  padding: 20px;
}

.mkly-core-header {
  padding-bottom: 24px;
  margin-bottom: calc(28px * var(--_gs));
  border-bottom-width: 1px;
  border-bottom-style: dashed;
}

.mkly-core-footer {
  padding-top: 24px;
  margin-top: calc(32px * var(--_gs));
  border-top-width: 1px;
  border-top-style: dashed;
  text-align: center;
  font-size: 0.85em;
  background: none;
}
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer a { font-weight: 700; text-decoration: underline; text-underline-offset: 3px; }

.mkly-core-cta {
  text-align: center;
  margin-top: calc(32px * var(--_gs));
  margin-bottom: calc(32px * var(--_gs));
  padding: 28px 0;
  border-radius: 0;
  border: none;
  border-top-width: 1px;
  border-top-style: dashed;
}
.mkly-core-cta p { margin: 0 0 12px; line-height: 1.75; }
.mkly-core-cta__button {
  padding: 12px 28px;
  border-radius: 0;
  border-width: 1px;
  border-style: dashed;
  font-weight: 700;
  text-decoration: none;
}
`,
  css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 12px 28px
  borderRadius: 0
  fontWeight: 700
  borderStyle: dashed

core/code
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  padding: 20px
  borderWidth: 1
  borderStyle: dashed

core/quote
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 16px 0 16px 24px
  borderLeftWidth: 1
  borderLeftStyle: dashed

core/hero
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden
  borderWidth: 1
  borderStyle: dashed

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 24px 20px

core/heading
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  fontWeight: 700
  textDecoration: underline
  textUnderlineOffset: 4px

core/text
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  lineHeight: 1.75

core/image
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderRadius: 0

core/list
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  paddingLeft: 2em

core/section
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

core/section.title
  paddingBottom: 8px
  fontSize: 0.85em
  fontWeight: 700
  letterSpacing: 0.02em
  borderBottomWidth: 1
  borderBottomStyle: dashed
  textDecoration: underline
  textUnderlineOffset: 4px

core/divider
  marginTop: calc(28px * var(--mkly-gap-scale, 1))
  marginBottom: calc(28px * var(--mkly-gap-scale, 1))
  borderBottomWidth: 1
  borderBottomStyle: dashed

core/card
  borderRadius: 0
  overflow: hidden
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  borderWidth: 1
  borderStyle: dashed

core/card.body
  padding: 20px

core/header
  paddingBottom: 24px
  borderBottomWidth: 1
  borderBottomStyle: dashed

core/footer
  paddingTop: 24px
  marginTop: calc(32px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none
  borderTopWidth: 1
  borderTopStyle: dashed

core/cta
  textAlign: center
  marginTop: calc(32px * var(--mkly-gap-scale, 1))
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 28px 0
  borderRadius: 0
  borderTopWidth: 1
  borderTopStyle: dashed

core/cta.button
  padding: 12px 28px
  borderRadius: 0
  fontWeight: 700
  borderStyle: dashed

core/button
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))

newsletter/intro
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  fontSize: 1em

newsletter/featured
  borderRadius: 0
  overflow: hidden
  borderWidth: 1
  borderStyle: dashed
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

newsletter/featured.source
  padding: 2px 0
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
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  paddingTop: calc(32px * var(--mkly-gap-scale, 1))

newsletter/category.title
  paddingBottom: 8px
  borderBottomWidth: 1
  borderBottomStyle: dashed
  fontSize: 0.85em
  fontWeight: 700
  textDecoration: underline
  textUnderlineOffset: 4px

newsletter/item
  marginBottom: calc(16px * var(--mkly-gap-scale, 1))
  padding: 20px 0
  borderRadius: 0
  borderBottomWidth: 1
  borderBottomStyle: dashed

newsletter/item.img
  borderRadius: 0
  maxWidth: 120px
  aspectRatio: 1
  objectFit: cover

newsletter/item.body
  overflow: hidden
  minWidth: 0

newsletter/item.meta
  fontSize: 0.72em

newsletter/item.source
  padding: 0
  borderRadius: 0
  fontSize: 0.68em
  textDecoration: underline

newsletter/quickHits
  padding: 20px
  borderRadius: 0
  borderWidth: 1
  borderStyle: dashed
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

newsletter/tools
  padding: 20px
  borderRadius: 0
  borderWidth: 1
  borderStyle: dashed
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

newsletter/tipOfTheDay
  padding: 16px 0 16px 24px
  borderRadius: 0
  borderLeftWidth: 1
  borderLeftStyle: dashed
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

newsletter/community
  padding: 0
  borderRadius: 0
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

newsletter/community.quote
  padding: 0 0 0 24px
  borderLeftWidth: 1
  borderLeftStyle: dashed

newsletter/personalNote
  padding: 16px 0 16px 24px
  borderRadius: 0
  borderLeftWidth: 1
  borderLeftStyle: dashed
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

newsletter/poll
  padding: 20px
  borderRadius: 0
  borderWidth: 1
  borderStyle: dashed
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

newsletter/poll.question
  fontSize: 1em
  fontWeight: 700

newsletter/poll.option
  borderRadius: 0
  padding: 12px 16px
  borderWidth: 1
  borderStyle: dashed
  textAlign: left

newsletter/recommendations
  padding: 20px
  borderRadius: 0
  borderWidth: 1
  borderStyle: dashed
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

newsletter/sponsor
  padding: 20px 0
  borderRadius: 0
  borderTopWidth: 1
  borderTopStyle: dashed
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

newsletter/sponsor.badge
  padding: 0
  borderRadius: 0
  fontSize: 0.62em
  textDecoration: underline

newsletter/sponsor.img
  borderRadius: 0

newsletter/outro
  padding: 28px 0
  borderRadius: 0
  borderTopWidth: 1
  borderTopStyle: dashed
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

newsletter/outro.cta
  padding: 12px 28px
  borderRadius: 0
  fontWeight: 700
  borderStyle: dashed

newsletter/custom
  padding: 20px
  borderRadius: 0
  borderWidth: 1
  borderStyle: dashed
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
`,
},

{
  name: 'bold',
  displayName: 'Newsletter/Bold',
  description: 'Maximum visual impact — weight 900 headings, thick 3px borders, strong shadows, huge CTA buttons',
  rawCss: `/* newsletter kit — bold preset */

.mkly-document {
  font-family: 'Sora', 'Inter', -apple-system, system-ui, sans-serif;
  padding: 0 24px;
  -webkit-font-smoothing: antialiased;
  font-weight: 500;
  --_gs: var(--mkly-gap-scale, 1);
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
  line-height: 1.7;
  font-weight: 500;
  margin: 0 0 calc(32px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 700; text-decoration-thickness: 1.5px; text-underline-offset: 2px; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(32px * var(--_gs));
  border-width: 3px;
  border-style: solid;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.68em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 6px 14px;
  border-radius: 6px;
  margin: 22px 24px 10px;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.86em;
  font-weight: 600;
  margin: 0 24px 8px;
  line-height: 1.4;
}
.mkly-newsletter-featured p {
  margin: 8px 24px 14px;
  line-height: 1.65;
  font-size: 0.96em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 6px 24px 24px;
  font-weight: 800;
  font-size: 0.92em;
  text-decoration: none;
  letter-spacing: 0.01em;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(32px * var(--_gs));
  padding-top: calc(32px * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.85em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 22px;
  padding-bottom: 14px;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  line-height: 1.1;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 0;
  border-width: 3px;
  border-style: solid;
  border-radius: 8px;
  margin-bottom: calc(18px * var(--_gs));
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
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
  padding: 18px 22px 22px;
  overflow: visible;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.65em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 5px;
  margin-bottom: 8px;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 6px;
}
.mkly-newsletter-item p {
  margin: 0 0 8px;
  line-height: 1.6;
  font-size: 0.95em;
  font-weight: 500;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.18em;
  font-weight: 900;
  margin: 0 0 6px;
  line-height: 1.15;
  letter-spacing: -0.03em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 8px;
  font-size: 0.88em;
  font-weight: 800;
  text-decoration: none;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 24px 26px;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.mkly-newsletter-quickHits__title {
  font-size: 0.78em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li {
  margin-bottom: 10px;
  line-height: 1.6;
  font-size: 0.95em;
  font-weight: 500;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 700; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 24px 26px;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.mkly-newsletter-tools__title {
  font-size: 0.78em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 16px;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 24px 26px;
  border-left-width: 6px;
  border-left-style: solid;
  border-radius: 0 8px 8px 0;
  line-height: 1.68;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 10px;
  font-weight: 900;
  font-size: 0.78em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; font-size: 0.95em; font-weight: 500; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 24px 26px;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 18px 0 18px 22px;
  border-left-width: 4px;
  border-left-style: solid;
  line-height: 1.72;
  font-size: 1.06em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 14px;
  font-size: 0.86em;
  font-style: normal;
  font-weight: 800;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 24px 26px;
  font-style: italic;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  line-height: 1.72;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 28px;
  border-radius: 8px;
  border-width: 3px;
  border-style: solid;
  box-shadow: 0 6px 24px rgba(0,0,0,0.08);
}
.mkly-newsletter-poll__question {
  font-size: 1.18em;
  font-weight: 900;
  margin: 0 0 20px;
  line-height: 1.15;
  letter-spacing: -0.02em;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 10px 0;
  padding: 16px 22px;
  font-size: 0.95em;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  border-width: 2px;
  border-style: solid;
  border-radius: 8px;
  transition: transform 0.15s, box-shadow 0.15s;
  line-height: 1.3;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 24px 26px;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.mkly-newsletter-recommendations__title {
  font-size: 0.78em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li {
  margin-bottom: 10px;
  line-height: 1.6;
  font-size: 0.95em;
  font-weight: 500;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 700; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 24px 26px;
  border-width: 2px;
  border-style: solid;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.62em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 4px 12px;
  border-radius: 5px;
  margin-bottom: 14px;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 16px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
.mkly-newsletter-sponsor p {
  margin: 0 0 10px;
  line-height: 1.68;
  font-size: 0.95em;
  font-weight: 500;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 10px;
  font-weight: 800;
  font-size: 0.92em;
  text-decoration: none;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(32px * var(--_gs));
  text-align: center;
  padding: 36px 28px;
  border-radius: 8px;
}
.mkly-newsletter-outro p {
  margin: 0 0 10px;
  line-height: 1.65;
  font-size: 1.06em;
  font-weight: 500;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 20px;
  font-weight: 800;
  font-size: 1em;
  text-decoration: none !important;
  padding: 18px 48px;
  border-radius: 8px;
  letter-spacing: 0.01em;
  line-height: 1.3;
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
  transition: transform 0.15s, box-shadow 0.15s;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 24px 26px;
  border-radius: 8px;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
}
.mkly-newsletter-custom__title {
  font-size: 0.78em;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 10px;
  line-height: 1.68;
  font-size: 0.95em;
  font-weight: 500;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(32px * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-divider { margin: calc(32px * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(32px * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(32px * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 8px; font-size: 1.05em; line-height: 1.6; font-weight: 500; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 16px;
  padding: 18px 48px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 16px;
  text-decoration: none !important;
  line-height: 1.4;
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
}
.mkly-core-footer { margin-top: calc(32px * var(--_gs)); text-align: center; font-size: 0.85em; line-height: 1.6; font-weight: 500; }
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
  css: `core/image.img
  borderRadius: 8px

core/button.link
  padding: 18px 48px
  borderRadius: 8px
  fontWeight: 800

core/code
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  borderRadius: 8px
  padding: 22px 26px

core/quote
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 22px 26px
  borderLeftWidth: 4px

core/hero
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  borderRadius: 8px
  overflow: hidden

core/hero.img
  borderRadius: 8px

core/hero.content
  padding: 32px 28px

core/section.title
  paddingBottom: 14px
  fontSize: 0.85em
  fontWeight: 900
  textTransform: uppercase
  letterSpacing: 0.06em

core/card
  borderRadius: 8px
  overflow: hidden
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))

core/card.body
  padding: 26px

core/header
  paddingBottom: 24px

core/footer
  paddingTop: 24px
  marginTop: calc(32px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em

core/cta
  textAlign: center
  marginTop: calc(32px * var(--mkly-gap-scale, 1))
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 36px 28px
  borderRadius: 8px

core/cta.button
  padding: 18px 48px
  borderRadius: 8px
  fontWeight: 800

newsletter/featured
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  borderRadius: 8px
  overflow: hidden

newsletter/featured.source
  padding: 6px 14px
  borderRadius: 6px

newsletter/category.title
  paddingBottom: 14px

newsletter/item
  marginBottom: calc(16px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 8px
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  padding: 18px 22px 22px

newsletter/item.meta
  fontSize: 0.72em

newsletter/quickHits
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 24px 26px
  borderRadius: 8px

newsletter/tools
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 24px 26px
  borderRadius: 8px

newsletter/tipOfTheDay
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 24px 26px
  borderRadius: 0 8px 8px 0

newsletter/community
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 24px 26px
  borderRadius: 8px

newsletter/community.quote
  padding: 18px 0 18px 22px

newsletter/personalNote
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 24px 26px
  borderRadius: 8px

newsletter/poll
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 28px
  borderRadius: 8px

newsletter/poll.option
  padding: 16px 22px
  borderRadius: 8px

newsletter/recommendations
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 24px 26px
  borderRadius: 8px

newsletter/sponsor
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 24px 26px
  borderRadius: 8px

newsletter/sponsor.badge
  padding: 4px 12px
  borderRadius: 5px

newsletter/sponsor.img
  borderRadius: 6px

newsletter/outro
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 36px 28px
  borderRadius: 8px

newsletter/outro.cta
  padding: 18px 48px
  borderRadius: 8px

newsletter/custom
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 24px 26px
  borderRadius: 8px
newsletter/intro
  fontSize: 1.12em
  lineHeight: 1.7
  fontWeight: 500
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  paddingTop: calc(32px * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(32px * var(--mkly-gap-scale, 1))
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
`,
},

{
  name: 'airy',
  displayName: 'Newsletter/Airy',
  description: 'Pure negative space — NO borders, NO shadows, typography-only hierarchy, massive whitespace',
  rawCss: `/* newsletter kit — airy preset */

.mkly-document {
  font-family: 'General Sans', 'Inter', system-ui, sans-serif;
  padding: 0 24px;
  -webkit-font-smoothing: antialiased;
  --_gs: var(--mkly-gap-scale, 1);
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
  line-height: 1.82;
  margin: 0 0 calc(48px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 500; text-decoration: underline; text-underline-offset: 3px; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(48px * var(--_gs));
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
  margin: 24px 0 10px;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  opacity: 0.5;
  font-weight: 400;
  margin: 0 0 10px;
  line-height: 1.4;
}
.mkly-newsletter-featured p {
  margin: 10px 0 16px;
  line-height: 1.82;
  font-size: 1em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 8px 0 0;
  font-weight: 500;
  font-size: 0.9em;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(48px * var(--_gs));
  padding-top: calc(48px * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 1.1em;
  font-weight: 600;
  text-transform: none;
  letter-spacing: -0.01em;
  margin: 0 0 28px;
  padding-bottom: 0;
  border-bottom: none;
  line-height: 1.25;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 0;
  border: none;
  border-radius: 0;
  margin-bottom: calc(40px * var(--_gs));
  box-shadow: none;
  position: relative;
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 20px;
  align-items: start;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: none;
  float: none;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 0;
  display: block;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
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
  margin-bottom: 8px;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  line-height: 1.3;
  margin-bottom: 6px;
  opacity: 0.4;
}
.mkly-newsletter-item p {
  margin: 0 0 8px;
  line-height: 1.75;
  font-size: 0.96em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.1em;
  font-weight: 600;
  margin: 0 0 6px;
  line-height: 1.25;
  letter-spacing: -0.015em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 8px;
  font-size: 0.88em;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(48px * var(--_gs));
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
  margin: 0 0 20px;
  line-height: 1.25;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li {
  margin-bottom: 12px;
  line-height: 1.72;
  font-size: 0.96em;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 500; text-decoration: underline; text-underline-offset: 2px; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(48px * var(--_gs));
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
  margin: 0 0 20px;
  line-height: 1.25;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(48px * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  line-height: 1.68;
  box-shadow: none;
}
.mkly-newsletter-tipOfTheDay__title {
  display: inline;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 0.72em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  opacity: 0.5;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; font-size: 0.96em; line-height: 1.75; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(48px * var(--_gs));
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
  line-height: 1.82;
  font-size: 1.15em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.6em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 16px;
  font-size: 0.86em;
  font-style: normal;
  font-weight: 500;
  opacity: 0.6;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(48px * var(--_gs));
  padding: 0;
  font-style: italic;
  border: none;
  border-radius: 0;
  line-height: 1.82;
  box-shadow: none;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(48px * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-poll__question {
  font-size: 1.12em;
  font-weight: 600;
  margin: 0 0 22px;
  line-height: 1.25;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 0;
  padding: 14px 0;
  font-size: 0.96em;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid;
  border-radius: 0;
  transition: opacity 0.2s;
  line-height: 1.4;
  text-align: left;
  box-shadow: none;
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(48px * var(--_gs));
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
  margin: 0 0 20px;
  line-height: 1.25;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li {
  margin-bottom: 12px;
  line-height: 1.72;
  font-size: 0.96em;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 500; text-decoration: underline; text-underline-offset: 2px; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(48px * var(--_gs));
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
  margin-bottom: 14px;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 16px;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 10px;
  line-height: 1.68;
  font-size: 0.95em;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 10px;
  font-weight: 500;
  font-size: 0.9em;
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(48px * var(--_gs));
  text-align: center;
  padding: 0;
  border: none;
  box-shadow: none;
}
.mkly-newsletter-outro p {
  margin: 0 0 10px;
  line-height: 1.75;
  font-size: 1.06em;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 20px;
  font-weight: 600;
  font-size: 0.92em;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
  padding: 0;
  border: none;
  border-radius: 0;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: none;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(48px * var(--_gs));
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
  margin: 0 0 20px;
  line-height: 1.25;
}
.mkly-newsletter-custom p {
  margin: 0 0 10px;
  line-height: 1.68;
  font-size: 0.95em;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(48px * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(48px * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(48px * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(48px * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(48px * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(48px * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(48px * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(48px * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(48px * var(--_gs)); }
.mkly-core-divider { margin: calc(48px * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(48px * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(48px * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(48px * var(--_gs)) 0; padding: 0; border: none; border-radius: 0; }
.mkly-core-cta p { margin: 0 0 8px; font-size: 1.05em; line-height: 1.6; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 16px;
  padding: 0;
  border: none;
  border-radius: 0;
  font-weight: 600;
  font-size: 15px;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
  line-height: 1.4;
  box-shadow: none;
}
.mkly-core-footer { margin-top: calc(48px * var(--_gs)); text-align: center; font-size: 0.85em; line-height: 1.6; }
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
  css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 0
  borderRadius: 0
  fontWeight: 600
  textDecoration: underline
  textUnderlineOffset: 4px

core/code
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  padding: 0
  border: none

core/quote
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  padding: 0
  borderLeft: none

core/hero
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
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
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  border: none
  boxShadow: none

core/card.body
  padding: 0

core/header
  paddingBottom: 0

core/footer
  paddingTop: 0
  marginTop: calc(48px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em

core/cta
  textAlign: center
  marginTop: calc(48px * var(--mkly-gap-scale, 1))
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

core/cta.button
  padding: 0
  borderRadius: 0
  fontWeight: 600
  textDecoration: underline
  textUnderlineOffset: 4px

newsletter/featured
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden

newsletter/featured.source
  padding: 0
  borderRadius: 0

newsletter/category.title
  paddingBottom: 0

newsletter/item
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0
  display: grid
  gridTemplateColumns: 150px 1fr
  gap: 20px
  alignItems: start

newsletter/item.img
  aspectRatio: 3/4
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0

newsletter/item.meta
  fontSize: 0.72em

newsletter/quickHits
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/tools
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/tipOfTheDay
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/community
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/community.quote
  padding: 0

newsletter/personalNote
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/poll
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/poll.option
  padding: 14px 0
  borderRadius: 0

newsletter/recommendations
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/sponsor
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/sponsor.badge
  padding: 0
  borderRadius: 0

newsletter/sponsor.img
  borderRadius: 0

newsletter/outro
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/outro.cta
  padding: 0
  borderRadius: 0

newsletter/custom
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0
newsletter/intro
  fontSize: 1.1em
  lineHeight: 1.82
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
  paddingTop: calc(48px * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(48px * var(--mkly-gap-scale, 1))
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(48px * var(--mkly-gap-scale, 1))
`,
},

{
  name: 'gazette',
  displayName: 'Newsletter/Gazette',
  description: 'Broadsheet newspaper — double rules, small-caps attribution, decimal lists, column rules',
  rawCss: `/* newsletter kit — gazette preset */

.mkly-document {
  font-family: 'Newsreader', 'Times New Roman', 'Times', serif;
  font-size: 16.5px;
  line-height: 1.72;
  letter-spacing: 0.005em;
  padding: 0 20px;
  --_gs: var(--mkly-gap-scale, 1);
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
  line-height: 1.72;
  margin: 0 0 calc(24px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 500; text-decoration: underline; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(24px * var(--_gs));
  border: 1px solid;
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
  padding: 3px 10px;
  border: 1px solid;
  border-radius: 0;
  margin: 18px 20px 8px;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.82em;
  font-weight: 400;
  font-style: italic;
  margin: 0 20px 6px;
  line-height: 1.4;
}
.mkly-newsletter-featured p {
  margin: 6px 20px 12px;
  line-height: 1.72;
  font-size: 0.95em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 4px 20px 18px;
  font-weight: 500;
  font-size: 0.88em;
  text-decoration: underline;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(24px * var(--_gs));
  padding-top: calc(20px * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 18px;
  padding: 8px 0;
  border-bottom: 3px double;
  border-top: 1px solid;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 0;
  border: none;
  border-top: 1px solid;
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
  padding: 16px 20px 20px;
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
  margin-bottom: 6px;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.68em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  line-height: 1.3;
  margin-bottom: 6px;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 6px;
  line-height: 1.72;
  font-size: 0.95em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.08em;
  font-weight: 700;
  margin: 0 0 4px;
  line-height: 1.2;
  letter-spacing: 0;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 6px;
  font-size: 0.84em;
  font-weight: 500;
  text-decoration: underline;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 18px 0;
  border: none;
  border-top: 1px solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-quickHits__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 14px;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.6em; list-style-type: decimal; }
.mkly-newsletter-quickHits li {
  margin-bottom: 8px;
  line-height: 1.65;
  font-size: 0.95em;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 500; text-decoration: underline; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 18px 0;
  border: none;
  border-top: 1px solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-tools__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 14px;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 0 0 0 18px;
  border-left: 2px solid;
  border-radius: 0;
  line-height: 1.72;
  box-shadow: none;
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 0.72em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 0 0 0 18px;
  border-left: 2px solid;
  line-height: 1.72;
  font-size: 1.04em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 10px;
  font-variant: small-caps;
  font-weight: 400;
  font-size: 0.88em;
  letter-spacing: 0.04em;
  font-style: normal;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 0 0 0 18px;
  font-style: italic;
  border-left: 2px solid;
  border-radius: 0;
  line-height: 1.72;
  box-shadow: none;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 20px;
  border: 1px solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-poll__question {
  font-size: 1.05em;
  font-weight: 700;
  margin: 0 0 16px;
  line-height: 1.25;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 8px 0;
  padding: 12px 16px;
  font-size: 0.95em;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid;
  border-radius: 0;
  line-height: 1.4;
  text-align: center;
  box-shadow: none;
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 18px 0;
  border: none;
  border-top: 1px solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-recommendations__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 14px;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.6em; list-style-type: decimal; }
.mkly-newsletter-recommendations li {
  margin-bottom: 8px;
  line-height: 1.65;
  font-size: 0.95em;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 500; text-decoration: underline; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 18px 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
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
  margin-bottom: 12px;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 14px;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 10px;
  line-height: 1.72;
  font-size: 0.95em;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 8px;
  font-weight: 500;
  font-size: 0.88em;
  text-decoration: underline;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(24px * var(--_gs));
  text-align: center;
  padding: 24px 0;
  border-top: 1px solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-outro p {
  margin: 0 0 10px;
  line-height: 1.72;
  font-size: 1.06em;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 20px;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none;
  padding: 12px 28px;
  border: 1px solid;
  border-radius: 0;
  line-height: 1.4;
  box-shadow: none;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 18px 20px;
  border: 1px solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-custom__title {
  font-size: 0.72em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 14px;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 10px;
  line-height: 1.72;
  font-size: 0.95em;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(24px * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-divider { margin: calc(24px * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(24px * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(24px * var(--_gs)) 0; padding: 20px 0; border-top: 1px solid; border-bottom: 1px solid; }
.mkly-core-cta p { margin: 0 0 8px; font-size: 1.05em; line-height: 1.6; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 16px;
  padding: 12px 28px;
  border: 1px solid;
  border-radius: 0;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none !important;
  line-height: 1.4;
  box-shadow: none;
}
.mkly-core-footer { margin-top: calc(24px * var(--_gs)); text-align: center; font-size: 0.85em; line-height: 1.6; }
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
  css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 12px 28px
  borderRadius: 0
  fontWeight: 600
  border: 1px solid

core/code
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  padding: 18px 20px
  border: 1px solid

core/quote
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 0 0 0 18px
  borderLeftWidth: 2px

core/hero
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden
  border: 1px solid

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 20px

core/section.title
  paddingBottom: 8px
  fontSize: 0.72em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  borderBottom: 3px double
  borderTop: 1px solid
  paddingTop: 8px

core/card
  borderRadius: 0
  overflow: hidden
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  border: 1px solid

core/card.body
  padding: 18px 20px

core/header
  paddingBottom: 18px
  borderBottom: 1px solid

core/footer
  paddingTop: 18px
  marginTop: calc(24px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  borderTop: 1px solid

core/cta
  textAlign: center
  marginTop: calc(24px * var(--mkly-gap-scale, 1))
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 20px 0
  borderTop: 1px solid
  borderBottom: 1px solid

core/cta.button
  padding: 12px 28px
  borderRadius: 0
  fontWeight: 600
  border: 1px solid

newsletter/featured
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden
  border: 1px solid

newsletter/featured.source
  padding: 3px 10px
  borderRadius: 0
  border: 1px solid

newsletter/category.title
  paddingBottom: 8px
  paddingTop: 8px
  borderTop: 1px solid

newsletter/item
  marginBottom: calc(14px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0
  borderTop: 1px solid
  display: grid
  gridTemplateColumns: 1fr
  overflow: hidden

newsletter/item.img
  aspectRatio: 16/9
  objectFit: cover

newsletter/item.body
  overflow: visible
  padding: 16px 20px 20px

newsletter/item.meta
  fontSize: 0.68em

newsletter/quickHits
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 18px 0
  borderRadius: 0
  borderTop: 1px solid

newsletter/tools
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 18px 0
  borderRadius: 0
  borderTop: 1px solid

newsletter/tipOfTheDay
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 0 0 0 18px
  borderRadius: 0

newsletter/community
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/community.quote
  padding: 0 0 0 18px

newsletter/personalNote
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 0 0 0 18px
  borderRadius: 0

newsletter/poll
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 20px
  borderRadius: 0
  border: 1px solid

newsletter/poll.option
  padding: 12px 16px
  borderRadius: 0
  border: 1px solid

newsletter/recommendations
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 18px 0
  borderRadius: 0
  borderTop: 1px solid

newsletter/sponsor
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 18px 0
  borderRadius: 0
  borderTop: 1px solid
  borderBottom: 1px solid

newsletter/sponsor.badge
  padding: 0
  borderRadius: 0

newsletter/sponsor.img
  borderRadius: 0

newsletter/outro
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 24px 0
  borderRadius: 0
  borderTop: 1px solid

newsletter/outro.cta
  padding: 12px 28px
  borderRadius: 0
  border: 1px solid

newsletter/custom
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 18px 20px
  borderRadius: 0
  border: 1px solid
newsletter/intro
  fontSize: 1.05em
  lineHeight: 1.72
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  paddingTop: calc(20px * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(24px * var(--mkly-gap-scale, 1))
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
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
  line-height: 1.82;
  padding: 0 28px;
  --_gs: var(--mkly-gap-scale, 1);
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
  line-height: 1.82;
  font-weight: 300;
  margin: 0 0 calc(40px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 400; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(40px * var(--_gs));
  border: 1px solid;
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
  padding: 4px 14px;
  border: 1px solid;
  border-radius: 0;
  margin: 28px 28px 10px;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.82em;
  font-weight: 300;
  font-style: italic;
  margin: 0 28px 8px;
  line-height: 1.4;
}
.mkly-newsletter-featured p {
  margin: 8px 28px 16px;
  line-height: 1.82;
  font-size: 0.98em;
  font-weight: 300;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 6px 28px 28px;
  font-weight: 400;
  font-size: 0.86em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(40px * var(--_gs));
  padding-top: calc(40px * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.62em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  margin: 0 0 28px;
  padding-bottom: 12px;
  border-bottom: 1px solid;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 24px 0;
  border: none;
  border-bottom: 1px solid;
  border-radius: 0;
  margin-bottom: 0;
  box-shadow: none;
  position: relative;
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 18px;
  align-items: start;
}
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  width: 100%;
  max-width: none;
  float: none;
  aspect-ratio: 3/4;
  object-fit: cover;
  border-radius: 0;
  display: block;
}
.mkly-newsletter-item__body {
  overflow: visible;
  min-width: 0;
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
  margin-bottom: 8px;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.68em;
  font-weight: 300;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  line-height: 1.3;
  margin-bottom: 6px;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 8px;
  line-height: 1.82;
  font-size: 0.96em;
  font-weight: 300;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.12em;
  font-weight: 500;
  margin: 0 0 6px;
  line-height: 1.25;
  letter-spacing: 0.04em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 8px;
  font-size: 0.84em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 0;
  padding-top: calc(40px * var(--_gs));
  border: none;
  border-top: 1px solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-quickHits__title {
  font-size: 0.62em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 18px;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li {
  margin-bottom: 12px;
  line-height: 1.75;
  font-size: 0.96em;
  font-weight: 300;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 400; text-decoration: underline; text-underline-offset: 2px; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 0;
  padding-top: calc(40px * var(--_gs));
  border: none;
  border-top: 1px solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-tools__title {
  font-size: 0.62em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 18px;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 24px 0 24px 28px;
  border-left: 1px solid;
  border-radius: 0;
  line-height: 1.82;
  box-shadow: none;
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 0.62em;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; font-size: 0.96em; line-height: 1.82; font-weight: 300; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 0 0 0 28px;
  border-left: 1px solid;
  line-height: 1.82;
  font-size: 1.12em;
  font-weight: 300;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 14px;
  font-size: 0.82em;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-style: normal;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 24px 0 24px 28px;
  font-style: italic;
  border-left: 1px solid;
  border-radius: 0;
  line-height: 1.82;
  font-weight: 300;
  box-shadow: none;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 28px 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-poll__question {
  font-size: 1.08em;
  font-weight: 500;
  margin: 0 0 22px;
  line-height: 1.25;
  letter-spacing: 0.04em;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 10px 0;
  padding: 14px 20px;
  font-size: 0.96em;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid;
  border-radius: 0;
  transition: opacity 0.2s;
  line-height: 1.4;
  text-align: center;
  letter-spacing: 0.04em;
  box-shadow: none;
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 0;
  padding-top: calc(40px * var(--_gs));
  border: none;
  border-top: 1px solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-recommendations__title {
  font-size: 0.62em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 18px;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li {
  margin-bottom: 12px;
  line-height: 1.75;
  font-size: 0.96em;
  font-weight: 300;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 400; text-decoration: underline; text-underline-offset: 2px; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 24px 0;
  border-top: 1px solid;
  border-bottom: 1px solid;
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
  margin-bottom: 14px;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 16px;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-sponsor p {
  margin: 0 0 10px;
  line-height: 1.82;
  font-size: 0.96em;
  font-weight: 300;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 10px;
  font-weight: 400;
  font-size: 0.86em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(40px * var(--_gs));
  text-align: center;
  padding: 32px 0;
  border-top: 1px solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-outro p {
  margin: 0 0 10px;
  line-height: 1.82;
  font-size: 1.06em;
  font-weight: 300;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 18px;
  font-weight: 500;
  font-size: 0.88em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none !important;
  padding: 14px 36px;
  border: 1px solid;
  border-radius: 0;
  line-height: 1.4;
  box-shadow: none;
  transition: opacity 0.2s;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(40px * var(--_gs));
  padding: 0;
  padding-top: calc(40px * var(--_gs));
  border: none;
  border-top: 1px solid;
  border-radius: 0;
  box-shadow: none;
}
.mkly-newsletter-custom__title {
  font-size: 0.62em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin: 0 0 16px;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 10px;
  line-height: 1.82;
  font-size: 0.96em;
  font-weight: 300;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(40px * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-divider { margin: calc(40px * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(40px * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(40px * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(40px * var(--_gs)) 0; padding: 28px 0; border-top: 1px solid; border-bottom: 1px solid; }
.mkly-core-cta p { margin: 0 0 8px; font-size: 1.05em; line-height: 1.6; font-weight: 300; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 16px;
  padding: 14px 36px;
  border: 1px solid;
  border-radius: 0;
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none !important;
  line-height: 1.4;
  box-shadow: none;
}
.mkly-core-footer { margin-top: calc(40px * var(--_gs)); text-align: center; font-size: 0.85em; line-height: 1.6; font-weight: 300; }
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
  css: `core/image.img
  borderRadius: 0

core/button.link
  padding: 14px 36px
  borderRadius: 0
  fontWeight: 500
  textTransform: uppercase
  letterSpacing: 0.08em
  border: 1px solid

core/code
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  padding: 20px 24px
  border: 1px solid

core/quote
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 0 0 0 28px
  borderLeftWidth: 1px

core/hero
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden
  border: 1px solid

core/hero.img
  borderRadius: 0

core/hero.content
  padding: 28px

core/section.title
  paddingBottom: 12px
  fontSize: 0.62em
  fontWeight: 500
  textTransform: uppercase
  letterSpacing: 0.25em
  borderBottom: 1px solid

core/card
  borderRadius: 0
  overflow: hidden
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  border: 1px solid

core/card.body
  padding: 24px 28px

core/header
  paddingBottom: 24px
  borderBottom: 1px solid

core/footer
  paddingTop: 24px
  marginTop: calc(40px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  borderTop: 1px solid

core/cta
  textAlign: center
  marginTop: calc(40px * var(--mkly-gap-scale, 1))
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 28px 0
  borderTop: 1px solid
  borderBottom: 1px solid

core/cta.button
  padding: 14px 36px
  borderRadius: 0
  fontWeight: 500
  textTransform: uppercase
  letterSpacing: 0.08em
  border: 1px solid

newsletter/featured
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  overflow: hidden
  border: 1px solid

newsletter/featured.source
  padding: 4px 14px
  borderRadius: 0
  border: 1px solid

newsletter/category.title
  paddingBottom: 12px
  borderBottom: 1px solid

newsletter/item
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  padding: 24px 0
  borderRadius: 0
  borderBottom: 1px solid
  display: grid
  gridTemplateColumns: 140px 1fr
  gap: 18px
  alignItems: start

newsletter/item.img
  aspectRatio: 3/4
  objectFit: cover

newsletter/item.body
  overflow: visible
  minWidth: 0

newsletter/item.meta
  fontSize: 0.68em

newsletter/quickHits
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 0
  paddingTop: calc(40px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  borderTop: 1px solid

newsletter/tools
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 0
  paddingTop: calc(40px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  borderTop: 1px solid

newsletter/tipOfTheDay
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 24px 0 24px 28px
  borderRadius: 0

newsletter/community
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 0
  borderRadius: 0

newsletter/community.quote
  padding: 0 0 0 28px

newsletter/personalNote
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 24px 0 24px 28px
  borderRadius: 0

newsletter/poll
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 28px 0
  borderRadius: 0
  borderTop: 1px solid
  borderBottom: 1px solid

newsletter/poll.option
  padding: 14px 20px
  borderRadius: 0
  border: 1px solid

newsletter/recommendations
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 0
  paddingTop: calc(40px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  borderTop: 1px solid

newsletter/sponsor
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 24px 0
  borderRadius: 0
  borderTop: 1px solid
  borderBottom: 1px solid

newsletter/sponsor.badge
  padding: 0
  borderRadius: 0

newsletter/sponsor.img
  borderRadius: 0

newsletter/outro
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 32px 0
  borderRadius: 0
  borderTop: 1px solid

newsletter/outro.cta
  padding: 14px 36px
  borderRadius: 0
  border: 1px solid

newsletter/custom
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  padding: 0
  paddingTop: calc(40px * var(--mkly-gap-scale, 1))
  borderRadius: 0
  borderTop: 1px solid
newsletter/intro
  fontSize: 1.12em
  lineHeight: 1.82
  fontWeight: 300
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  paddingTop: calc(40px * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(40px * var(--mkly-gap-scale, 1))
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
`,
},

{
  name: 'capsule',
  displayName: 'Newsletter/Capsule',
  description: 'iOS-inspired pill UI — 1.5px borders, outline ring shadows, 100px radius pills, visible structure',
  rawCss: `/* newsletter kit — capsule preset */

.mkly-document {
  font-family: 'Outfit', 'Inter', system-ui, sans-serif;
  padding: 0 24px;
  -webkit-font-smoothing: antialiased;
  --_gs: var(--mkly-gap-scale, 1);
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
  line-height: 1.76;
  margin: 0 0 calc(24px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; text-decoration-thickness: 1.5px; text-underline-offset: 2px; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(24px * var(--_gs));
  border-width: 1.5px;
  border-style: solid;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03);
}
.mkly-newsletter-featured__img { width: 100%; display: block; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.65em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 5px 16px;
  border-radius: 100px;
  margin: 22px 24px 10px;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  font-weight: 500;
  margin: 0 24px 8px;
  line-height: 1.4;
}
.mkly-newsletter-featured p {
  margin: 8px 24px 14px;
  line-height: 1.72;
  font-size: 0.96em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 6px 24px 24px;
  font-weight: 700;
  font-size: 0.88em;
  text-decoration: none;
  letter-spacing: 0.01em;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(24px * var(--_gs));
  padding-top: calc(24px * var(--_gs));
}
.mkly-newsletter-category__title {
  display: inline-block;
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 6px 20px;
  border-radius: 100px;
  border-width: 1.5px;
  border-style: solid;
  margin: 0 0 20px;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 20px 22px;
  border-width: 1.5px;
  border-style: solid;
  border-radius: 16px;
  margin-bottom: calc(16px * var(--_gs));
  box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03);
  position: relative;
  transition: box-shadow 0.2s ease;
}
.mkly-newsletter-item:last-child { margin-bottom: 0; }
.mkly-newsletter-item::after { content: ''; display: table; clear: both; }
.mkly-newsletter-item__img {
  max-width: 110px;
  float: right;
  margin-left: 18px;
  margin-bottom: 8px;
  border-radius: 12px;
  display: block;
  aspect-ratio: 1;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.mkly-newsletter-item__body {
  overflow: hidden;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.64em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 12px;
  border-radius: 100px;
  margin-bottom: 8px;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.68em;
  line-height: 1.3;
  margin-bottom: 6px;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 8px;
  line-height: 1.68;
  font-size: 0.94em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.06em;
  font-weight: 700;
  margin: 0 0 6px;
  line-height: 1.28;
  letter-spacing: -0.01em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 8px;
  font-size: 0.84em;
  font-weight: 700;
  text-decoration: none;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 22px 24px;
  border-radius: 20px;
  border-width: 1.5px;
  border-style: solid;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03);
}
.mkly-newsletter-quickHits__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 14px;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-quickHits li {
  margin-bottom: 10px;
  line-height: 1.65;
  font-size: 0.95em;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 22px 24px;
  border-radius: 20px;
  border-width: 1.5px;
  border-style: solid;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03);
}
.mkly-newsletter-tools__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 14px;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 22px 24px;
  border-width: 1.5px;
  border-style: solid;
  border-radius: 20px;
  line-height: 1.68;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03);
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 8px; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 22px 24px;
  border-radius: 20px;
  border-width: 1.5px;
  border-style: solid;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 18px 0 18px 22px;
  border-left-width: 3px;
  border-left-style: solid;
  line-height: 1.78;
  font-size: 1.04em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 12px;
  font-size: 0.84em;
  font-style: normal;
  font-weight: 600;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 22px 24px;
  font-style: italic;
  border-radius: 20px;
  border-width: 1.5px;
  border-style: solid;
  line-height: 1.78;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.85em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 26px;
  border-radius: 20px;
  border-width: 1.5px;
  border-style: solid;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03);
}
.mkly-newsletter-poll__question {
  font-size: 1.1em;
  font-weight: 700;
  margin: 0 0 18px;
  line-height: 1.3;
  letter-spacing: -0.01em;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 10px 0;
  padding: 12px 22px;
  font-size: 0.95em;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-width: 1.5px;
  border-style: solid;
  border-radius: 100px;
  transition: box-shadow 0.2s ease, transform 0.15s ease;
  line-height: 1.4;
  text-align: center;
  box-shadow: 0 0 0 1px rgba(0,0,0,0.03);
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 22px 24px;
  border-radius: 20px;
  border-width: 1.5px;
  border-style: solid;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03);
}
.mkly-newsletter-recommendations__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 14px;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 1.4em; }
.mkly-newsletter-recommendations li {
  margin-bottom: 10px;
  line-height: 1.65;
  font-size: 0.95em;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 22px 24px;
  border-width: 1.5px;
  border-style: solid;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.6em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 4px 14px;
  border-radius: 100px;
  margin-bottom: 14px;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor p {
  margin: 0 0 10px;
  line-height: 1.68;
  font-size: 0.95em;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 10px;
  font-weight: 700;
  font-size: 0.88em;
  text-decoration: none;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(24px * var(--_gs));
  text-align: center;
  padding: 32px 24px;
  border-width: 1.5px;
  border-style: solid;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03);
}
.mkly-newsletter-outro p {
  margin: 0 0 10px;
  line-height: 1.72;
  font-size: 1.04em;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 18px;
  font-weight: 700;
  font-size: 0.92em;
  text-decoration: none !important;
  padding: 14px 36px;
  border-radius: 100px;
  border-width: 1.5px;
  border-style: solid;
  transition: box-shadow 0.2s ease, transform 0.15s ease;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 22px 24px;
  border-radius: 20px;
  border-width: 1.5px;
  border-style: solid;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03);
}
.mkly-newsletter-custom__title {
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 0 14px;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 10px;
  line-height: 1.68;
  font-size: 0.95em;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(24px * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-divider { margin: calc(24px * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(24px * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(24px * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(24px * var(--_gs)) 0; padding: 32px 24px; border-width: 1.5px; border-style: solid; border-radius: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.03); }
.mkly-core-cta p { margin: 0 0 8px; font-size: 1.05em; line-height: 1.6; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 16px;
  padding: 14px 36px;
  border-radius: 100px;
  border-width: 1.5px;
  border-style: solid;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none !important;
  letter-spacing: 0.01em;
  line-height: 1.4;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.mkly-core-footer { margin-top: calc(24px * var(--_gs)); text-align: center; font-size: 0.85em; line-height: 1.6; }
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
  css: `core/image.img
  borderRadius: 12px

core/button.link
  padding: 14px 36px
  borderRadius: 100px
  fontWeight: 700
  borderWidth: 1.5px

core/code
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  borderRadius: 20px
  padding: 22px 24px
  borderWidth: 1.5px

core/quote
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 22px 24px
  borderLeftWidth: 3px

core/hero
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  borderRadius: 20px
  overflow: hidden
  borderWidth: 1.5px

core/hero.img
  borderRadius: 12px

core/hero.content
  padding: 28px 24px

core/section.title
  paddingBottom: 6px
  fontSize: 0.7em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  display: inline-block
  padding: 6px 20px
  borderRadius: 100px
  borderWidth: 1.5px

core/card
  borderRadius: 20px
  overflow: hidden
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))
  borderWidth: 1.5px

core/card.body
  padding: 22px 24px

core/header
  paddingBottom: 20px

core/footer
  paddingTop: 20px
  marginTop: calc(24px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em

core/cta
  textAlign: center
  marginTop: calc(24px * var(--mkly-gap-scale, 1))
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 32px 24px
  borderRadius: 20px
  borderWidth: 1.5px

core/cta.button
  padding: 14px 36px
  borderRadius: 100px
  fontWeight: 700
  borderWidth: 1.5px

newsletter/featured
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  borderRadius: 20px
  overflow: hidden

newsletter/featured.source
  padding: 5px 16px
  borderRadius: 100px

newsletter/category.title
  padding: 6px 20px
  borderRadius: 100px

newsletter/item
  marginBottom: calc(14px * var(--mkly-gap-scale, 1))
  padding: 20px 22px
  borderRadius: 16px

newsletter/item.img
  borderRadius: 12px
  aspectRatio: 1
  objectFit: cover

newsletter/item.body
  overflow: hidden
  minWidth: 0

newsletter/item.meta
  fontSize: 0.68em

newsletter/quickHits
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 22px 24px
  borderRadius: 20px

newsletter/tools
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 22px 24px
  borderRadius: 20px

newsletter/tipOfTheDay
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 22px 24px
  borderRadius: 20px

newsletter/community
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 22px 24px
  borderRadius: 20px

newsletter/community.quote
  padding: 18px 0 18px 22px

newsletter/personalNote
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 22px 24px
  borderRadius: 20px

newsletter/poll
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 26px
  borderRadius: 20px

newsletter/poll.option
  padding: 12px 22px
  borderRadius: 100px

newsletter/recommendations
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 22px 24px
  borderRadius: 20px

newsletter/sponsor
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 22px 24px
  borderRadius: 20px

newsletter/sponsor.badge
  padding: 4px 14px
  borderRadius: 100px

newsletter/sponsor.img
  borderRadius: 12px

newsletter/outro
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 32px 24px
  borderRadius: 20px

newsletter/outro.cta
  padding: 14px 36px
  borderRadius: 100px

newsletter/custom
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  padding: 22px 24px
  borderRadius: 20px
newsletter/intro
  fontSize: 1.06em
  lineHeight: 1.76
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))

newsletter/category
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
  paddingTop: calc(24px * var(--mkly-gap-scale, 1))

core/heading
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(24px * var(--mkly-gap-scale, 1))
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(24px * var(--mkly-gap-scale, 1))
`,
},

{
  name: 'studio',
  displayName: 'Newsletter/Studio',
  description: 'Magazine-editorial — CSS Grid items, full-width hero images, bold tight headlines, pill source labels, modern variable fonts',
  rawCss: `/* newsletter kit — studio preset */

.mkly-document {
  font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, system-ui, sans-serif;
  padding: 0 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  --_gs: var(--mkly-gap-scale, 1);
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
  line-height: 1.82;
  margin: 0 0 calc(40px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.9em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 700; text-decoration-thickness: 2px; text-underline-offset: 3px; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(32px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
}
.mkly-newsletter-featured__img { width: 100%; display: block; aspect-ratio: 16/9; object-fit: cover; }
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.62em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 5px 14px;
  border-radius: 100px;
  margin: 24px 28px 10px;
  line-height: 1.2;
}
.mkly-newsletter-featured__author {
  font-size: 0.84em;
  margin: 0 28px 10px;
  line-height: 1.4;
  font-weight: 500;
  opacity: 0.6;
}
.mkly-newsletter-featured p {
  margin: 8px 28px 14px;
  line-height: 1.76;
  font-size: 0.97em;
}
.mkly-newsletter-featured p:last-child { margin-bottom: 0; }
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 8px 28px 28px;
  font-weight: 700;
  font-size: 0.84em;
  text-decoration: none;
  letter-spacing: 0.02em;
  padding: 10px 22px;
  border-radius: 100px;
  border-width: 1px;
  border-style: solid;
  transition: opacity 0.15s;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(40px * var(--_gs));
  padding-top: calc(36px * var(--_gs));
}
.mkly-newsletter-category__title {
  font-size: 0.68em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 24px;
  padding-bottom: 16px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  line-height: 1.2;
}

/* ── item ── */
.mkly-newsletter-item {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  padding: 0;
  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
  margin-bottom: calc(20px * var(--_gs));
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
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
  padding: 20px 24px 24px;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.62em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 4px 12px;
  border-radius: 100px;
  margin-bottom: 8px;
  line-height: 1.2;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.72em;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.3;
  margin-bottom: 8px;
  opacity: 0.5;
}
.mkly-newsletter-item p {
  margin: 0 0 10px;
  line-height: 1.7;
  font-size: 0.95em;
}
.mkly-newsletter-item p:last-child { margin-bottom: 0; }
.mkly-newsletter-item h2, .mkly-newsletter-item h3 {
  font-size: 1.15em;
  font-weight: 700;
  margin: 0 0 8px;
  line-height: 1.25;
  letter-spacing: -0.02em;
}
.mkly-newsletter-item__link {
  display: inline-block;
  margin-top: 12px;
  font-size: 0.82em;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.02em;
  padding: 8px 20px;
  border-radius: 100px;
  border-width: 1px;
  border-style: solid;
  transition: opacity 0.15s;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 26px 28px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.mkly-newsletter-quickHits__title {
  font-size: 0.68em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 18px;
  line-height: 1.2;
}
.mkly-newsletter-quickHits ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-quickHits li {
  margin-bottom: 14px;
  line-height: 1.68;
  font-size: 0.95em;
  padding-left: 18px;
  position: relative;
}
.mkly-newsletter-quickHits li::before { content: '→'; position: absolute; left: 0; font-weight: 700; }
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 700; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 26px 28px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.mkly-newsletter-tools__title {
  font-size: 0.68em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 20px;
  line-height: 1.2;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 24px 28px;
  border-left-width: 4px;
  border-left-style: solid;
  border-radius: 0 16px 16px 0;
  line-height: 1.72;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 10px;
  font-weight: 800;
  font-size: 0.68em;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  line-height: 1.2;
}
.mkly-newsletter-tipOfTheDay p { margin: 0 0 10px; font-size: 0.95em; }
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 28px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 20px 0 20px 24px;
  border-left-width: 3px;
  border-left-style: solid;
  line-height: 1.82;
  font-size: 1.08em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 16px;
  padding-top: 14px;
  border-top-width: 1px;
  border-top-style: solid;
  font-size: 0.82em;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.03em;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 28px;
  font-style: italic;
  border-radius: 16px;
  border-left-width: 4px;
  border-left-style: solid;
  line-height: 1.82;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.mkly-newsletter-personalNote p { margin: 0 0 0.9em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 28px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.mkly-newsletter-poll__question {
  font-size: 1.18em;
  font-weight: 800;
  margin: 0 0 22px;
  line-height: 1.3;
  letter-spacing: -0.02em;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 10px 0;
  padding: 14px 22px;
  font-size: 0.95em;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 100px;
  transition: box-shadow 0.2s ease, transform 0.15s ease;
  line-height: 1.4;
  text-align: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 26px 28px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.mkly-newsletter-recommendations__title {
  font-size: 0.68em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 18px;
  line-height: 1.2;
}
.mkly-newsletter-recommendations ul { margin: 0; padding-left: 0; list-style: none; }
.mkly-newsletter-recommendations li {
  margin-bottom: 14px;
  line-height: 1.68;
  font-size: 0.95em;
  padding-left: 18px;
  position: relative;
}
.mkly-newsletter-recommendations li::before { content: '→'; position: absolute; left: 0; font-weight: 700; }
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 700; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 26px 28px;
  border-width: 1px;
  border-style: solid;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.58em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  padding: 4px 12px;
  border-radius: 100px;
  margin-bottom: 14px;
  line-height: 1.2;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
}
.mkly-newsletter-sponsor p {
  margin: 0 0 10px;
  line-height: 1.72;
  font-size: 0.95em;
}
.mkly-newsletter-sponsor p:last-child { margin-bottom: 0; }
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 12px;
  font-weight: 700;
  font-size: 0.88em;
  text-decoration: none;
  letter-spacing: 0.02em;
  padding: 10px 22px;
  border-radius: 100px;
  border-width: 1px;
  border-style: solid;
  transition: opacity 0.15s;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(32px * var(--_gs));
  text-align: center;
  padding: 40px 28px;
  border-radius: 20px;
  border-width: 1px;
  border-style: solid;
}
.mkly-newsletter-outro p {
  margin: 0 0 10px;
  line-height: 1.76;
  font-size: 1.08em;
}
.mkly-newsletter-outro p:last-child { margin-bottom: 0; }
.mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 22px;
  font-weight: 700;
  font-size: 0.9em;
  text-decoration: none !important;
  padding: 14px 36px;
  border-radius: 100px;
  transition: opacity 0.15s, transform 0.15s;
  letter-spacing: 0.02em;
  line-height: 1.4;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(32px * var(--_gs));
  padding: 26px 28px;
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
}
.mkly-newsletter-custom__title {
  font-size: 0.68em;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin: 0 0 18px;
  line-height: 1.2;
}
.mkly-newsletter-custom p {
  margin: 0 0 10px;
  line-height: 1.72;
  font-size: 0.95em;
}
.mkly-newsletter-custom p:last-child { margin-bottom: 0; }

/* ── core block spacing ── */
.mkly-core-hero { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-heading { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-text { margin-bottom: calc(32px * var(--_gs)); }
.mkly-core-image { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-quote { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-code { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-list { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-button { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-section { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-divider { margin: calc(32px * var(--_gs)) 0; }
.mkly-core-header { margin-bottom: calc(32px * var(--_gs)); }
.mkly-core-card { margin: 0 0 calc(32px * var(--_gs)); }
.mkly-core-cta { text-align: center; margin: calc(32px * var(--_gs)) 0; }
.mkly-core-cta p { margin: 0 0 8px; font-size: 1.06em; line-height: 1.68; }
.mkly-core-cta__button {
  display: inline-block;
  margin-top: 18px;
  padding: 14px 36px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 15px;
  text-decoration: none !important;
  letter-spacing: 0.02em;
  line-height: 1.4;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transition: opacity 0.15s, transform 0.1s;
}
.mkly-core-footer { margin-top: calc(32px * var(--_gs)); text-align: center; font-size: 0.85em; line-height: 1.6; }
.mkly-core-footer p { margin: 0 0 6px; }
.mkly-core-footer p:last-child { margin-bottom: 0; }
.mkly-core-footer a { text-decoration: underline; }`,
  css: `core/image.img
  borderRadius: 16px

core/button.link
  padding: 14px 36px
  borderRadius: 100px
  fontWeight: 700

core/code
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  borderRadius: 16px
  padding: 22px 26px

core/quote
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 22px 28px
  borderLeftWidth: 4px

core/hero
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  borderRadius: 20px
  overflow: hidden

core/hero.img
  borderRadius: 16px

core/hero.content
  padding: 32px 28px

core/section.title
  paddingBottom: 16px
  fontSize: 0.68em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.14em

core/card
  borderRadius: 16px
  overflow: hidden
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))

core/card.body
  padding: 24px 28px

core/header
  paddingBottom: 24px

core/footer
  paddingTop: 24px
  marginTop: calc(32px * var(--mkly-gap-scale, 1))
  textAlign: center
  fontSize: 0.85em
  background: none

core/cta
  textAlign: center
  marginTop: calc(32px * var(--mkly-gap-scale, 1))
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 40px 28px
  borderRadius: 20px

core/cta.button
  padding: 14px 36px
  borderRadius: 100px
  fontWeight: 700

newsletter/intro
  fontSize: 1.12em
  lineHeight: 1.82
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))

newsletter/featured
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  borderRadius: 20px
  overflow: hidden

newsletter/featured.source
  padding: 5px 14px
  borderRadius: 100px

newsletter/featured.link
  marginTop: 8px
  marginRight: 28px
  marginBottom: 28px
  marginLeft: 28px
  fontWeight: 700
  fontSize: 0.84em
  textDecoration: none
  padding: 10px 22px
  borderRadius: 100px
  borderWidth: 1px
  borderStyle: solid

newsletter/category
  marginBottom: calc(40px * var(--mkly-gap-scale, 1))
  paddingTop: calc(36px * var(--mkly-gap-scale, 1))

newsletter/category.title
  paddingBottom: 16px
  fontSize: 0.68em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.14em

newsletter/item
  display: grid
  gridTemplateColumns: 1fr
  gap: 0
  padding: 0
  borderRadius: 16px
  overflow: hidden
  marginBottom: calc(20px * var(--mkly-gap-scale, 1))

newsletter/item.img
  width: 100%
  maxWidth: 100%
  borderRadius: 0

newsletter/item.body
  padding: 20px 24px 24px
  minWidth: 0

newsletter/item.source
  fontSize: 0.62em
  fontWeight: 700
  textTransform: uppercase
  letterSpacing: 0.1em
  padding: 4px 12px
  borderRadius: 100px
  marginBottom: 8px
  lineHeight: 1.2

newsletter/item.meta
  fontSize: 0.72em
  fontWeight: 500
  letterSpacing: 0.02em
  lineHeight: 1.3
  marginBottom: 8px

newsletter/item.link
  marginTop: 12px
  fontSize: 0.82em
  fontWeight: 600
  textDecoration: none
  letterSpacing: 0.02em
  padding: 8px 20px
  borderRadius: 100px
  borderWidth: 1px
  borderStyle: solid

newsletter/quickHits
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 26px 28px
  borderRadius: 16px

newsletter/quickHits.title
  fontSize: 0.68em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.14em
  marginBottom: 18px

newsletter/tools
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 26px 28px
  borderRadius: 16px

newsletter/tools.title
  fontSize: 0.68em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.14em
  marginBottom: 20px

newsletter/tipOfTheDay
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 24px 28px
  borderRadius: 0 16px 16px 0
  lineHeight: 1.72

newsletter/tipOfTheDay.title
  marginBottom: 10px
  fontWeight: 800
  fontSize: 0.68em
  textTransform: uppercase
  letterSpacing: 0.14em

newsletter/community
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 28px
  borderRadius: 16px

newsletter/community.quote
  padding: 20px 0 20px 24px
  fontSize: 1.08em
  lineHeight: 1.82

newsletter/community.author
  marginTop: 16px
  paddingTop: 14px
  fontSize: 0.82em
  fontWeight: 700
  letterSpacing: 0.03em

newsletter/personalNote
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 28px
  borderRadius: 16px
  lineHeight: 1.82

newsletter/poll
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 28px
  borderRadius: 16px

newsletter/poll.question
  fontSize: 1.18em
  fontWeight: 800
  marginBottom: 22px
  lineHeight: 1.3
  letterSpacing: -0.02em

newsletter/poll.option
  padding: 14px 22px
  borderRadius: 100px
  fontSize: 0.95em
  fontWeight: 600
  textAlign: center
  lineHeight: 1.4

newsletter/recommendations
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 26px 28px
  borderRadius: 16px

newsletter/recommendations.title
  fontSize: 0.68em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.14em
  marginBottom: 18px

newsletter/sponsor
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 26px 28px
  borderRadius: 16px

newsletter/sponsor.badge
  fontSize: 0.58em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.14em
  padding: 4px 12px
  borderRadius: 100px
  marginBottom: 14px

newsletter/sponsor.img
  borderRadius: 12px

newsletter/sponsor.link
  marginTop: 12px
  fontWeight: 700
  fontSize: 0.88em
  textDecoration: none
  padding: 10px 22px
  borderRadius: 100px
  borderWidth: 1px
  borderStyle: solid

newsletter/outro
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  textAlign: center
  padding: 40px 28px
  borderRadius: 20px

newsletter/outro.cta
  padding: 14px 36px
  borderRadius: 100px
  fontWeight: 700

newsletter/custom
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
  padding: 26px 28px
  borderRadius: 16px

newsletter/custom.title
  fontSize: 0.68em
  fontWeight: 800
  textTransform: uppercase
  letterSpacing: 0.14em
  marginBottom: 18px

core/heading
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

core/text
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

core/divider
  marginTop: calc(32px * var(--mkly-gap-scale, 1))
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))

core/list
  marginBottom: calc(32px * var(--mkly-gap-scale, 1))
`,
},
];
