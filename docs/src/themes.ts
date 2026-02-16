import type { MklyTheme } from '@mklyml/core';

const LIGHT_COLORS = `/* Docs/Light — warm orange accent on stone */

/* document + html tags */
.mkly-document { color: #1c1917; background: #fafaf9; }
.mkly-document p { color: #292524; }
.mkly-document a { color: #ea580c; border-bottom-color: transparent; }
.mkly-document a:not([class]):hover { color: #c2410c; border-bottom-color: #c2410c; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #0c0a09; }
.mkly-document h4, .mkly-document h5 { color: #1c1917; }
.mkly-document h6 { color: #78716c; }
.mkly-document h2 { border-bottom-color: #e7e5e4; }
.mkly-document strong { color: #0c0a09; }
.mkly-document em { color: #57534e; }
.mkly-document blockquote:not([class]) { color: #78716c; border-left-color: #d6d3d1; }
.mkly-document hr { background: #e7e5e4; }
.mkly-document code:not(pre code) { background: #f5f5f4; color: #9a3412; border-color: #e7e5e4; }
.mkly-document pre { background: #f5f5f4; border-color: #e7e5e4; }
.mkly-document ul, .mkly-document ol { color: #292524; }
.mkly-document li::marker { color: #ea580c; }
.mkly-document th { color: #78716c; border-bottom-color: #e7e5e4; }
.mkly-document td { border-bottom-color: #f5f5f4; }

/* core blocks */
.mkly-core-heading { color: #0c0a09; }
.mkly-core-heading--2 { border-bottom-color: #e7e5e4; }
.mkly-core-text { color: #292524; }
.mkly-core-divider { background: #e7e5e4; }
.mkly-core-image__img { box-shadow: 0 1px 4px rgba(0,0,0,0.06); }
.mkly-core-button .mkly-core-button__link { background: #ea580c; color: #ffffff; box-shadow: 0 1px 2px rgba(234,88,12,0.2); }
.mkly-core-button .mkly-core-button__link:hover { background: #c2410c; }
.mkly-core-code { background: #f5f5f4; border-color: #e7e5e4; }
.mkly-core-code pre { background: transparent; border: none; color: #292524; }
.mkly-core-quote { color: #57534e; border-left-color: #fdba74; background: #fff7ed; }
.mkly-core-quote__author { color: #78716c; }
.mkly-core-section { border-top-color: #e7e5e4; }
.mkly-core-section__title { color: #0c0a09; border-bottom-color: #ea580c; }
.mkly-core-card { background: #ffffff; border-color: #e7e5e4; box-shadow: 0 1px 3px rgba(0,0,0,0.04); }
.mkly-core-card__body h2 { color: #0c0a09; }
.mkly-core-card__link { color: #ea580c; }
.mkly-core-card__link:hover { color: #c2410c; }
.mkly-core-header { border-bottom-color: #e7e5e4; }
.mkly-core-header__title { color: #0c0a09; }
.mkly-core-footer { color: #a8a29e; border-top-color: #e7e5e4; }
.mkly-core-footer a { color: #78716c; }
.mkly-core-footer a:hover { color: #ea580c; }
.mkly-core-cta { background: #f5f5f4; border-color: #e7e5e4; }
.mkly-core-cta .mkly-core-cta__button { background: #ea580c; color: #ffffff; }
.mkly-core-cta .mkly-core-cta__button:hover { background: #c2410c; }

/* callout */
.mkly-docs-callout { border-left-color: #ea580c; background: #fff7ed; }
.mkly-docs-callout--info { border-left-color: #ea580c; background: #fff7ed; }
.mkly-docs-callout--warning { border-left-color: #f59e0b; background: #fffbeb; }
.mkly-docs-callout--tip { border-left-color: #10b981; background: #ecfdf5; }
.mkly-docs-callout--danger { border-left-color: #ef4444; background: #fef2f2; }

/* codeExample */
.mkly-docs-codeExample { border-color: #e7e5e4; }
.mkly-docs-codeExample__header { background: #292524; color: #e7e5e4; }
.mkly-docs-codeExample__lang { background: rgba(255,255,255,0.1); }
.mkly-docs-codeExample__pre { background: #f5f5f4; border-top-color: #e7e5e4; }

/* apiRef */
.mkly-docs-apiRef { border-color: #e7e5e4; }
.mkly-docs-apiRef__header { background: #f5f5f4; border-bottom-color: #e7e5e4; }
.mkly-docs-apiRef__name { color: #ea580c; }
.mkly-docs-apiRef__sig { color: #78716c; }
.mkly-docs-apiRef__returns { color: #78716c; }

/* propTable */
.mkly-docs-propTable__table th { border-bottom-color: #e7e5e4; color: #78716c; }
.mkly-docs-propTable__table td { border-bottom-color: #f5f5f4; }
.mkly-docs-propTable__table td code { background: #f5f5f4; border-color: #e7e5e4; }
.mkly-docs-propTable__row:nth-child(even) td { background: #f5f5f4; }
.mkly-docs-propTable__table td[data-col="description"] code { background: #f5f5f4; border: none; }
.mkly-docs-propTable__required { color: #ef4444; }

/* tabs */
.mkly-docs-tabs { border-color: #e7e5e4; }
.mkly-docs-tab { border-top-color: #e7e5e4; }

/* steps */
.mkly-docs-step::before { background: #ea580c; color: #ffffff; }
.mkly-docs-step::after { background: #e7e5e4; }

/* linkCard */
.mkly-docs-linkCard { border-color: #e7e5e4; }
.mkly-docs-linkCard:hover { border-color: #ea580c; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }

/* badge */
.mkly-docs-badge--default { background: #f5f5f4; color: #57534e; border-color: #e7e5e4; }
.mkly-docs-badge--success { background: #dcfce7; color: #166534; border-color: #bbf7d0; }
.mkly-docs-badge--warning { background: #fef3c7; color: #92400e; border-color: #fde68a; }
.mkly-docs-badge--danger { background: #fee2e2; color: #991b1b; border-color: #fecaca; }

/* fileTree */
.mkly-docs-fileTree { background: #f5f5f4; border-color: #e7e5e4; }
.mkly-docs-fileTree pre { color: #292524; }

/* install */
.mkly-docs-install { box-shadow: 0 1px 3px rgba(0,0,0,0.08); }
.mkly-docs-install__pre { background: #292524; color: #e7e5e4; }
.mkly-docs-install__cmd { color: #4ade80; }

/* liveExample + reverseExample */
.mkly-docs-liveExample { border-color: #e7e5e4; }
.mkly-docs-liveExample__header { background: #292524; }
.mkly-docs-liveExample__title { color: #e7e5e4; }
.mkly-docs-liveExample__toggle { background: rgba(255,255,255,0.08); }
.mkly-docs-liveExample__tab { background: transparent; color: #a8a29e; }
.mkly-docs-liveExample__tab:hover { color: #e7e5e4; }
.mkly-docs-liveExample__tab--active { background: rgba(255,255,255,0.15); color: #ffffff; }
.mkly-docs-liveExample__pre { background: #f5f5f4; border-top-color: #e7e5e4; }
.mkly-docs-liveExample__frame { background: #ffffff; }

.mkly-docs-reverseExample { border-color: #e7e5e4; }
.mkly-docs-reverseExample__header { background: #292524; }
.mkly-docs-reverseExample__title { color: #e7e5e4; }
.mkly-docs-reverseExample__toggle { background: rgba(255,255,255,0.08); }
.mkly-docs-reverseExample__tab { background: transparent; color: #a8a29e; }
.mkly-docs-reverseExample__tab:hover { color: #e7e5e4; }
.mkly-docs-reverseExample__tab--active { background: rgba(255,255,255,0.15); color: #ffffff; }
.mkly-docs-reverseExample__pre { background: #f5f5f4; border-top-color: #e7e5e4; }`;

const DARK_COLORS = `/* Docs/Dark — warm orange on stone */

/* document + html tags */
.mkly-document { color: #e7e5e4; background: #1c1917; }
.mkly-document p { color: #d6d3d1; }
.mkly-document a { color: #fb923c; border-bottom-color: transparent; }
.mkly-document a:not([class]):hover { color: #fdba74; border-bottom-color: #fdba74; }
.mkly-document h1, .mkly-document h2, .mkly-document h3 { color: #fafaf9; }
.mkly-document h4, .mkly-document h5 { color: #e7e5e4; }
.mkly-document h6 { color: #a8a29e; }
.mkly-document h2 { border-bottom-color: #44403c; }
.mkly-document strong { color: #fafaf9; }
.mkly-document em { color: #a8a29e; }
.mkly-document blockquote:not([class]) { color: #a8a29e; border-left-color: #57534e; }
.mkly-document hr { background: #44403c; }
.mkly-document code:not(pre code) { background: #292524; color: #fdba74; border-color: #44403c; }
.mkly-document pre { background: #292524; border-color: #44403c; }
.mkly-document ul, .mkly-document ol { color: #d6d3d1; }
.mkly-document li::marker { color: #fb923c; }
.mkly-document th { color: #a8a29e; border-bottom-color: #44403c; }
.mkly-document td { border-bottom-color: #292524; }

/* core blocks */
.mkly-core-heading { color: #fafaf9; }
.mkly-core-heading--2 { border-bottom-color: #44403c; }
.mkly-core-text { color: #d6d3d1; }
.mkly-core-divider { background: #44403c; }
.mkly-core-image__img { box-shadow: 0 1px 4px rgba(0,0,0,0.3); }
.mkly-core-button .mkly-core-button__link { background: #fb923c; color: #1c1917; box-shadow: 0 1px 2px rgba(251,146,60,0.2); }
.mkly-core-button .mkly-core-button__link:hover { background: #fdba74; }
.mkly-core-code { background: #292524; border-color: #44403c; }
.mkly-core-code pre { background: transparent; border: none; color: #d6d3d1; }
.mkly-core-quote { color: #a8a29e; border-left-color: #ea580c; background: #431407; }
.mkly-core-quote__author { color: #a8a29e; }
.mkly-core-section { border-top-color: #44403c; }
.mkly-core-section__title { color: #fafaf9; border-bottom-color: #fb923c; }
.mkly-core-card { background: #292524; border-color: #44403c; box-shadow: 0 1px 3px rgba(0,0,0,0.2); }
.mkly-core-card__body h2 { color: #fafaf9; }
.mkly-core-card__link { color: #fb923c; }
.mkly-core-card__link:hover { color: #fdba74; }
.mkly-core-header { border-bottom-color: #44403c; }
.mkly-core-header__title { color: #fafaf9; }
.mkly-core-footer { color: #78716c; border-top-color: #44403c; }
.mkly-core-footer a { color: #a8a29e; }
.mkly-core-footer a:hover { color: #fb923c; }
.mkly-core-cta { background: #292524; border-color: #44403c; }
.mkly-core-cta .mkly-core-cta__button { background: #fb923c; color: #1c1917; }
.mkly-core-cta .mkly-core-cta__button:hover { background: #fdba74; }

/* callout */
.mkly-docs-callout { border-left-color: #fb923c; background: #431407; }
.mkly-docs-callout--info { border-left-color: #fb923c; background: #431407; }
.mkly-docs-callout--warning { border-left-color: #fbbf24; background: #422006; }
.mkly-docs-callout--tip { border-left-color: #34d399; background: #064e3b; }
.mkly-docs-callout--danger { border-left-color: #f87171; background: #450a0a; }

/* codeExample */
.mkly-docs-codeExample { border-color: #44403c; }
.mkly-docs-codeExample__header { background: #0c0a09; color: #d6d3d1; }
.mkly-docs-codeExample__lang { background: rgba(255,255,255,0.08); }
.mkly-docs-codeExample__pre { background: #292524; border-top-color: #44403c; }

/* apiRef */
.mkly-docs-apiRef { border-color: #44403c; }
.mkly-docs-apiRef__header { background: #292524; border-bottom-color: #44403c; }
.mkly-docs-apiRef__name { color: #fb923c; }
.mkly-docs-apiRef__sig { color: #a8a29e; }
.mkly-docs-apiRef__returns { color: #a8a29e; }

/* propTable */
.mkly-docs-propTable__table th { border-bottom-color: #44403c; color: #a8a29e; }
.mkly-docs-propTable__table td { border-bottom-color: #292524; }
.mkly-docs-propTable__table td code { background: #292524; border-color: #44403c; }
.mkly-docs-propTable__row:nth-child(even) td { background: #292524; }
.mkly-docs-propTable__table td[data-col="description"] code { background: #292524; border: none; }
.mkly-docs-propTable__required { color: #f87171; }

/* tabs */
.mkly-docs-tabs { border-color: #44403c; }
.mkly-docs-tab { border-top-color: #44403c; }

/* steps */
.mkly-docs-step::before { background: #fb923c; color: #1c1917; }
.mkly-docs-step::after { background: #44403c; }

/* linkCard */
.mkly-docs-linkCard { border-color: #44403c; }
.mkly-docs-linkCard:hover { border-color: #fb923c; box-shadow: 0 2px 12px rgba(0,0,0,0.3); }

/* badge */
.mkly-docs-badge--default { background: #292524; color: #a8a29e; border-color: #44403c; }
.mkly-docs-badge--success { background: #064e3b; color: #6ee7b7; border-color: #065f46; }
.mkly-docs-badge--warning { background: #422006; color: #fcd34d; border-color: #713f12; }
.mkly-docs-badge--danger { background: #450a0a; color: #fca5a5; border-color: #7f1d1d; }

/* fileTree */
.mkly-docs-fileTree { background: #292524; border-color: #44403c; }
.mkly-docs-fileTree pre { color: #d6d3d1; }

/* install */
.mkly-docs-install { box-shadow: 0 1px 3px rgba(0,0,0,0.3); }
.mkly-docs-install__pre { background: #0c0a09; color: #d6d3d1; }
.mkly-docs-install__cmd { color: #4ade80; }

/* liveExample + reverseExample */
.mkly-docs-liveExample { border-color: #44403c; }
.mkly-docs-liveExample__header { background: #0c0a09; }
.mkly-docs-liveExample__title { color: #d6d3d1; }
.mkly-docs-liveExample__toggle { background: rgba(255,255,255,0.06); }
.mkly-docs-liveExample__tab { background: transparent; color: #78716c; }
.mkly-docs-liveExample__tab:hover { color: #d6d3d1; }
.mkly-docs-liveExample__tab--active { background: rgba(255,255,255,0.1); color: #fafaf9; }
.mkly-docs-liveExample__pre { background: #292524; border-top-color: #44403c; }
.mkly-docs-liveExample__frame { background: #1c1917; }

.mkly-docs-reverseExample { border-color: #44403c; }
.mkly-docs-reverseExample__header { background: #0c0a09; }
.mkly-docs-reverseExample__title { color: #d6d3d1; }
.mkly-docs-reverseExample__toggle { background: rgba(255,255,255,0.06); }
.mkly-docs-reverseExample__tab { background: transparent; color: #78716c; }
.mkly-docs-reverseExample__tab:hover { color: #d6d3d1; }
.mkly-docs-reverseExample__tab--active { background: rgba(255,255,255,0.1); color: #fafaf9; }
.mkly-docs-reverseExample__pre { background: #292524; border-top-color: #44403c; }`;

export const DOCS_THEMES: MklyTheme[] = [
  {
    name: 'default',
    displayName: 'Docs/Default',
    description: 'Inherits browser light/dark preference',
    variables: {
      accent: '#ea580c',
      accentHover: '#c2410c',
      bg: '#fafaf9',
      text: '#1c1917',
      muted: '#78716c',
      border: '#e7e5e4',
      bgSubtle: '#f5f5f4',
      buttonText: '#ffffff',
      codeBg: '#f5f5f4',
      radius: '8px',
      fontBody: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
      spacing: '24px',
    },
    rawCss: `${LIGHT_COLORS}

@media (prefers-color-scheme: dark) {
  .mkly-document {
    --mkly-accent: #fb923c;
    --mkly-accent-hover: #fdba74;
    --mkly-bg: #1c1917;
    --mkly-text: #e7e5e4;
    --mkly-muted: #a8a29e;
    --mkly-border: #44403c;
    --mkly-bg-subtle: #292524;
    --mkly-button-text: #1c1917;
    --mkly-code-bg: #292524;
  }
  ${DARK_COLORS}
}`,
  },
  {
    name: 'light',
    displayName: 'Docs/Light',
    description: 'Light documentation theme — warm, readable',
    variables: {
      accent: '#ea580c',
      accentHover: '#c2410c',
      bg: '#fafaf9',
      text: '#1c1917',
      muted: '#78716c',
      border: '#e7e5e4',
      bgSubtle: '#f5f5f4',
      buttonText: '#ffffff',
      codeBg: '#f5f5f4',
      radius: '8px',
      fontBody: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
      spacing: '24px',
    },
    rawCss: LIGHT_COLORS,
  },
  {
    name: 'dark',
    displayName: 'Docs/Dark',
    description: 'Dark documentation theme for code-heavy content',
    variables: {
      accent: '#fb923c',
      accentHover: '#fdba74',
      bg: '#1c1917',
      text: '#e7e5e4',
      muted: '#a8a29e',
      border: '#44403c',
      bgSubtle: '#292524',
      buttonText: '#1c1917',
      codeBg: '#292524',
      radius: '8px',
      fontBody: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontHeading: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
      fontMono: "'SF Mono', 'Fira Code', 'JetBrains Mono', monospace",
      spacing: '24px',
    },
    rawCss: DARK_COLORS,
  },
];
