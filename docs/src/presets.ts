import type { MklyPreset } from '@mklyml/core';

export const DOCS_PRESETS: MklyPreset[] = [
  {
    name: 'default',
    displayName: 'Docs/Default',
    description: 'Professional documentation portal — structure only, colors from theme',
    css: `core/heading
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

core/text
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

core/image
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

core/button
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

core/divider
  marginTop: calc(24px * var(--mkly-gap-scale, 0.3))
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

core/code
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

core/quote
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

core/hero
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

core/section
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

core/card
  marginBottom: calc(16px * var(--mkly-gap-scale, 0.3))

core/list
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

core/header
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

core/footer
  marginTop: calc(24px * var(--mkly-gap-scale, 0.3))

core/cta
  textAlign: center
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))
  padding: 28px 24px
  borderRadius: 8px

core/cta.button
  padding: 10px 24px
  borderRadius: 6px
  fontWeight: 600

docs/callout
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

docs/codeExample
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

docs/apiRef
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

docs/propTable
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

docs/tabs
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

docs/steps
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

docs/fileTree
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

docs/install
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

docs/liveExample
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

docs/reverseExample
  marginBottom: calc(24px * var(--mkly-gap-scale, 0.3))

docs/linkCard
  padding: 18px 20px
  marginBottom: 12px
  borderRadius: 8px`,
    rawCss: `/* docs/default preset — structure only (colors come from theme) */

/* ── document root ── */
.mkly-document {
  line-height: 1.7;
  max-width: 720px;
  --_gs: var(--mkly-gap-scale, 0.3);
}

/* ── scrollbars ── */
.mkly-document ::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.mkly-document ::-webkit-scrollbar-track {
  background: transparent;
}
.mkly-document ::-webkit-scrollbar-thumb {
  background: var(--mkly-border, #e7e5e4);
  border-radius: 3px;
}
.mkly-document ::-webkit-scrollbar-thumb:hover {
  background: var(--mkly-muted, #78716c);
}
.mkly-document * {
  scrollbar-width: thin;
  scrollbar-color: var(--mkly-border, #e7e5e4) transparent;
}

/* ── core block spacing ── */
.mkly-document .mkly-core-heading {
  margin: 1.8em 0 0.6em;
}
.mkly-document .mkly-core-heading:first-child {
  margin-top: 0;
}
.mkly-document .mkly-core-text {
  margin: 0 0 calc(24px * var(--_gs));
  line-height: 1.7;
}
.mkly-document .mkly-core-text p { margin: 0 0 0.6em; }
.mkly-document .mkly-core-text p:last-child { margin-bottom: 0; }
.mkly-document .mkly-core-divider {
  margin: calc(24px * var(--_gs)) 0;
  height: 1px;
  border: none;
}
.mkly-document .mkly-core-image {
  margin: 0 0 calc(24px * var(--_gs));
}
.mkly-document .mkly-core-list {
  margin: 0 0 calc(24px * var(--_gs));
}
.mkly-document .mkly-core-code {
  margin: 0 0 calc(24px * var(--_gs));
}
.mkly-document .mkly-core-quote {
  margin: 0 0 calc(24px * var(--_gs));
}
.mkly-document .mkly-core-button {
  margin: 0 0 calc(24px * var(--_gs));
}
.mkly-document .mkly-core-card {
  margin: 0 0 calc(16px * var(--_gs));
}
.mkly-document .mkly-core-section {
  margin: 0 0 calc(24px * var(--_gs));
}
.mkly-document .mkly-core-header {
  margin: 0 0 calc(24px * var(--_gs));
}
.mkly-document .mkly-core-footer {
  margin: calc(24px * var(--_gs)) 0 0;
}
.mkly-document .mkly-core-cta {
  text-align: center;
  margin: 0 0 calc(24px * var(--_gs));
  padding: 28px 24px;
  border-radius: 8px;
}
.mkly-document .mkly-core-cta p {
  margin: 0 0 8px;
  font-size: 1em;
  line-height: 1.6;
}
.mkly-document .mkly-core-cta__button {
  display: inline-block;
  margin-top: 14px;
  padding: 10px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none !important;
  letter-spacing: 0.01em;
  line-height: 1.4;
}
.mkly-document .mkly-core-hero {
  margin: 0 0 calc(24px * var(--_gs));
}

/* ── html tag overrides ── */
.mkly-document a {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  transition: border-color 0.15s;
}
.mkly-document a:not([class]):hover {
  text-decoration: none;
}

.mkly-document h1 { font-size: 2.25em; letter-spacing: -0.03em; }
.mkly-document h2 {
  font-size: 1.6em;
  letter-spacing: -0.02em;
  padding-bottom: 0.3em;
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

.mkly-document blockquote:not([class]) {
  border-left-width: 3px;
  border-left-style: solid;
  padding: 12px 20px;
}

/* ── core block refinements ── */
.mkly-document .mkly-core-heading--1 { font-size: 2.25em; letter-spacing: -0.03em; }
.mkly-document .mkly-core-heading--2 {
  font-size: 1.6em;
  letter-spacing: -0.02em;
  padding-bottom: 0.3em;
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

/* ── callout block ── */
.mkly-docs-callout {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 16px 20px;
  border-left-width: 4px;
  border-left-style: solid;
  border-radius: 0 var(--mkly-radius, 8px) var(--mkly-radius, 8px) 0;
  line-height: 1.65;
}
.mkly-docs-callout__icon {
  display: inline-block;
  margin-right: 8px;
  font-size: 1.1em;
  vertical-align: middle;
}
.mkly-docs-callout__title {
  display: inline;
  font-weight: 700;
  font-size: 0.95em;
  letter-spacing: 0.01em;
}
.mkly-docs-callout__body {
  margin-top: 10px;
  line-height: 1.65;
}
.mkly-docs-callout__body p { margin: 0 0 0.6em; }
.mkly-docs-callout__body p:last-child { margin-bottom: 0; }

/* ── codeExample block ── */
.mkly-docs-codeExample {
  margin: 0 0 calc(24px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  border-radius: var(--mkly-radius, 8px);
  overflow: hidden;
}
.mkly-docs-codeExample__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  font-size: 0.8em;
  font-family: var(--mkly-font-mono, monospace);
  letter-spacing: 0.02em;
}
.mkly-docs-codeExample__filename {
  opacity: 0.9;
  font-weight: 500;
}
.mkly-docs-codeExample__lang {
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 0.85em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
}
.mkly-docs-codeExample__pre {
  margin: 0;
  padding: 18px 20px;
  overflow-x: auto;
  font-family: var(--mkly-font-mono, monospace);
  font-size: 0.88em;
  line-height: 1.65;
  border-top-width: 1px;
  border-top-style: solid;
}
.mkly-docs-codeExample__pre code {
  font-family: inherit;
  font-size: inherit;
  background: none;
  border: none;
  padding: 0;
}

/* ── apiRef block ── */
.mkly-docs-apiRef {
  margin: 0 0 calc(24px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  border-radius: var(--mkly-radius, 8px);
  overflow: hidden;
}
.mkly-docs-apiRef__header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 20px;
  font-family: var(--mkly-font-mono, monospace);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  flex-wrap: wrap;
}
.mkly-docs-apiRef__name {
  font-weight: 700;
  font-size: 0.95em;
  background: none;
  border: none;
  padding: 0;
}
.mkly-docs-apiRef__sig {
  font-size: 0.88em;
  background: none;
  border: none;
  padding: 0;
}
.mkly-docs-apiRef__returns {
  margin-left: auto;
  font-size: 0.85em;
  font-family: var(--mkly-font-mono, monospace);
  white-space: nowrap;
}
.mkly-docs-apiRef__body {
  padding: 16px 20px;
  line-height: 1.65;
}
.mkly-docs-apiRef__body p { margin: 0 0 0.6em; }
.mkly-docs-apiRef__body p:last-child { margin-bottom: 0; }

/* ── propTable block ── */
.mkly-docs-propTable {
  margin: 0 0 calc(24px * var(--_gs));
  overflow-x: auto;
}
.mkly-docs-propTable__title {
  font-family: var(--mkly-font-heading, inherit);
  font-size: 1.1em;
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
}
.mkly-docs-propTable__table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9em;
  table-layout: fixed;
}
.mkly-docs-propTable__table th {
  text-align: left;
  padding: 10px 14px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  font-weight: 600;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.mkly-docs-propTable__table td {
  padding: 10px 14px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  vertical-align: top;
  line-height: 1.5;
}
.mkly-docs-propTable__table td[data-col="name"] { width: 14%; }
.mkly-docs-propTable__table td[data-col="type"] { width: 30%; }
.mkly-docs-propTable__table td[data-col="description"] { width: 56%; }
.mkly-docs-propTable__table td code {
  font-family: var(--mkly-font-mono, monospace);
  font-size: 0.88em;
  padding: 1px 6px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  white-space: normal;
  word-break: break-word;
}
.mkly-docs-propTable__table th.mkly-hide,
.mkly-docs-propTable__table[data-hide~="name"] td[data-col="name"],
.mkly-docs-propTable__table[data-hide~="type"] td[data-col="type"],
.mkly-docs-propTable__table[data-hide~="default"] td[data-col="default"],
.mkly-docs-propTable__table[data-hide~="description"] td[data-col="description"] {
  display: none;
}
.mkly-docs-propTable__table td[data-col="description"] code {
  border: none;
}
.mkly-docs-propTable__required {
  margin-left: 2px;
  font-weight: 700;
}

/* ── tabs block ── */
.mkly-docs-tabs {
  margin: 0 0 calc(24px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  border-radius: var(--mkly-radius, 8px);
  overflow: hidden;
}

/* ── tab block ── */
.mkly-docs-tab {
  padding: 18px 20px;
  border-top-width: 1px;
  border-top-style: solid;
  line-height: 1.65;
}
.mkly-docs-tab:first-child {
  border-top: none;
}
.mkly-docs-tab p { margin: 0 0 0.6em; }
.mkly-docs-tab p:last-child { margin-bottom: 0; }

/* ── steps block ── */
.mkly-docs-steps {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 0;
  list-style: none;
  counter-reset: mkly-docs-step;
}

/* ── step block ── */
.mkly-docs-step {
  position: relative;
  padding: 0 0 28px 52px;
  counter-increment: mkly-docs-step;
  line-height: 1.65;
}
.mkly-docs-step::before {
  content: counter(mkly-docs-step);
  position: absolute;
  left: 0;
  top: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85em;
  line-height: 1;
}
.mkly-docs-step::after {
  content: '';
  position: absolute;
  left: 16px;
  top: 38px;
  bottom: 0;
  width: 2px;
}
.mkly-docs-step:last-child::after {
  display: none;
}
.mkly-docs-step:last-child {
  padding-bottom: 0;
}
.mkly-docs-step__title {
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 1.05em;
  letter-spacing: -0.01em;
}
.mkly-docs-step p { margin: 0 0 0.6em; }
.mkly-docs-step p:last-child { margin-bottom: 0; }

/* ── linkCard block ── */
.mkly-docs-linkCard {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 18px 20px;
  margin: 0 0 12px;
  border-width: 1px;
  border-style: solid;
  border-radius: var(--mkly-radius, 8px);
  text-decoration: none !important;
  color: inherit;
  transition: border-color 0.15s, box-shadow 0.15s, transform 0.1s;
  line-height: 1.5;
}
.mkly-docs-linkCard:hover {
  transform: translateY(-1px);
}
.mkly-docs-linkCard__icon {
  font-size: 1.4em;
  flex-shrink: 0;
  line-height: 1;
}
.mkly-docs-linkCard__body {
  flex: 1;
  line-height: 1.55;
}
.mkly-docs-linkCard__body p { margin: 0; }
.mkly-docs-linkCard__body strong {
  display: block;
  margin-bottom: 4px;
  font-weight: 700;
}

/* ── badge block ── */
.mkly-docs-badge {
  display: inline-block;
  padding: 3px 12px;
  font-size: 0.75em;
  font-weight: 600;
  border-radius: 999px;
  letter-spacing: 0.03em;
  vertical-align: middle;
  line-height: 1.4;
  border-width: 1px;
  border-style: solid;
}

/* ── fileTree block ── */
.mkly-docs-fileTree {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 18px 20px;
  border-width: 1px;
  border-style: solid;
  border-radius: var(--mkly-radius, 8px);
}
.mkly-docs-fileTree pre {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  font-family: var(--mkly-font-mono, monospace);
  font-size: 0.88em;
  line-height: 1.65;
  white-space: pre;
}

/* ── install block ── */
.mkly-docs-install {
  margin: 0 0 calc(24px * var(--_gs));
  border-radius: var(--mkly-radius, 8px);
  overflow: hidden;
}
.mkly-docs-install__pre {
  margin: 0;
  padding: 16px 20px;
  font-family: var(--mkly-font-mono, monospace);
  font-size: 0.9em;
  line-height: 1.6;
  overflow-x: auto;
  border: none;
}
.mkly-docs-install__pre code {
  font-family: inherit;
  font-size: inherit;
  background: none;
  border: none;
  padding: 0;
  color: inherit;
}
.mkly-docs-install__cmd {
  font-weight: 600;
}

/* ── liveExample block ── */
.mkly-docs-liveExample {
  margin: 0 0 calc(24px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  border-radius: var(--mkly-radius, 8px);
  overflow: hidden;
}
.mkly-docs-liveExample__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  min-height: 42px;
}
.mkly-docs-liveExample__title {
  font-size: 0.85em;
  font-weight: 600;
  font-family: var(--mkly-font-mono, monospace);
  letter-spacing: 0.02em;
}
.mkly-docs-liveExample__toggle {
  display: flex;
  gap: 2px;
  border-radius: 6px;
  padding: 3px;
}
.mkly-docs-liveExample__tab {
  padding: 5px 14px;
  border: none;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  letter-spacing: 0.02em;
}
.mkly-docs-liveExample__pre {
  margin: 0;
  padding: 18px 20px;
  overflow-x: auto;
  font-family: var(--mkly-font-mono, monospace);
  font-size: 0.85em;
  line-height: 1.65;
  max-height: 500px;
  overflow-y: auto;
  border: none;
  border-top-width: 1px;
  border-top-style: solid;
}
.mkly-docs-liveExample__pre code {
  font-family: inherit;
  font-size: inherit;
  background: none;
  border: none;
  padding: 0;
}
.mkly-docs-liveExample__frame {
  display: block;
}

/* ── reverseExample block ── */
.mkly-docs-reverseExample {
  margin: 0 0 calc(24px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  border-radius: var(--mkly-radius, 8px);
  overflow: hidden;
}
.mkly-docs-reverseExample__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  min-height: 42px;
}
.mkly-docs-reverseExample__title {
  font-size: 0.85em;
  font-weight: 600;
  font-family: var(--mkly-font-mono, monospace);
  letter-spacing: 0.02em;
}
.mkly-docs-reverseExample__toggle {
  display: flex;
  gap: 2px;
  border-radius: 6px;
  padding: 3px;
}
.mkly-docs-reverseExample__tab {
  padding: 5px 14px;
  border: none;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  letter-spacing: 0.02em;
}
.mkly-docs-reverseExample__pre {
  margin: 0;
  padding: 18px 20px;
  overflow-x: auto;
  font-family: var(--mkly-font-mono, monospace);
  font-size: 0.85em;
  line-height: 1.65;
  max-height: 500px;
  overflow-y: auto;
  border: none;
  border-top-width: 1px;
  border-top-style: solid;
}
.mkly-docs-reverseExample__pre code {
  font-family: inherit;
  font-size: inherit;
  background: none;
  border: none;
  padding: 0;
}
.mkly-docs-reverseExample__result {
  white-space: pre-wrap;
  word-break: break-word;
}`,
  },
];
