import type { BlockDefinition, BlockDocs, MklyKit, ReverseBlockHandler } from '@mklyml/core';
import { escapeHtml, defineKit, cls, blockTypeToCssClass } from '@mklyml/core';
import { safeUrl, md } from '@mklyml/core';
import { prop, requireProp, errorHtml, cssVal } from '@mklyml/core';
import { lineAttr } from '@mklyml/core';
import { DOCS_SCHEMAS } from './schemas';
import { DOCS_THEMES } from './themes';
import { DOCS_PRESETS } from './presets';

function toBase64(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  return btoa(binary);
}

const CALLOUT_ICONS: Record<string, string> = {
  info: '\u2139\uFE0F',
  warning: '\u26A0\uFE0F',
  tip: '\uD83D\uDCA1',
  danger: '\uD83D\uDEAB',
};

const callout: BlockDefinition = {
  name: 'callout',
  contentMode: 'mixed',
  targets: {
    icon: { label: 'Icon' },
    title: { label: 'Title' },
    body: { label: 'Body' },
  },
  styleHints: {
    self: ['text-align', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
    icon: ['font-size', 'color', 'margin', 'padding'],
    title: ['color', 'font-size', 'font-weight', 'font-family', 'margin', 'padding'],
    body: ['text-align', 'color', 'font-size', 'line-height', 'font-family', 'margin', 'padding'],
  },
  compile: (block) => {
    const type = prop(block, 'type') ?? 'info';
    const title = prop(block, 'title');
    const icon = CALLOUT_ICONS[type] ?? CALLOUT_ICONS.info;
    const titleHtml = title
      ? `<strong class="${cls(block, '__title')}"${lineAttr(block, 'title')}>${escapeHtml(title)}</strong>`
      : '';
    return `<aside class="${cls(block)} ${cls(block, `--${escapeHtml(type)}`)}"><span class="${cls(block, '__icon')}">${icon}</span>${titleHtml}<div class="${cls(block, '__body')}">${md(block)}</div></aside>`;
  },
};

const codeExample: BlockDefinition = {
  name: 'codeExample',
  contentMode: 'verbatim',
  targets: {
    header: { label: 'Header' },
    filename: { label: 'Filename' },
    lang: { label: 'Language badge' },
    pre: { label: 'Code' },
  },
  styleHints: {
    self: ['margin', 'border-radius', 'overflow', 'box-shadow', 'padding', 'background', 'opacity', 'border-width', 'border-style', 'border-color'],
    header: ['color', 'background', 'padding', 'margin', 'border-radius'],
    filename: ['color', 'font-size', 'font-weight', 'font-family'],
    lang: ['color', 'background', 'font-size', 'padding', 'border-radius', 'font-weight', 'margin'],
    pre: ['color', 'background', 'font-size', 'padding', 'font-family', 'margin', 'border-radius'],
  },
  compile: (block) => {
    const lang = prop(block, 'lang');
    const title = prop(block, 'title');
    const filename = prop(block, 'filename');
    const headerLabel = filename ?? title ?? '';
    const langBadge = lang
      ? `<span class="${cls(block, '__lang')}"${lineAttr(block, 'lang')}>${escapeHtml(lang)}</span>`
      : '';
    const headerHtml = headerLabel || lang
      ? `<div class="${cls(block, '__header')}"${lineAttr(block, 'filename', 'title')}><span class="${cls(block, '__filename')}">${escapeHtml(headerLabel)}</span>${langBadge}</div>`
      : '';
    return `<div class="${cls(block)}">${headerHtml}<pre class="${cls(block, '__pre')}"><code>${escapeHtml(block.content)}</code></pre></div>`;
  },
};

const apiRef: BlockDefinition = {
  name: 'apiRef',
  contentMode: 'mixed',
  targets: {
    header: { label: 'Header' },
    name: { label: 'Name' },
    sig: { label: 'Signature' },
    returns: { label: 'Returns' },
    body: { label: 'Body' },
  },
  styleHints: {
    self: ['padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
    header: ['padding', 'background', 'border-radius', 'margin'],
    name: ['color', 'font-size', 'font-weight', 'font-family'],
    sig: ['color', 'font-size', 'font-family'],
    returns: ['color', 'font-size', 'font-family', 'font-weight'],
    body: ['color', 'font-size', 'line-height', 'font-family', 'margin', 'padding'],
  },
  compile: (block, ctx) => {
    const name = prop(block, 'name');
    if (!name) {
      requireProp(block, 'name', ctx);
      return errorHtml('apiRef block requires "name" property', block.position.start.line);
    }
    const signature = prop(block, 'signature');
    const returns = prop(block, 'returns');
    const nameHtml = `<code class="${cls(block, '__name')}"${lineAttr(block, 'name')}>${escapeHtml(name)}</code>`;
    const sigHtml = signature ? `<code class="${cls(block, '__sig')}"${lineAttr(block, 'signature')}>${escapeHtml(signature)}</code>` : '';
    const returnsHtml = returns ? `<span class="${cls(block, '__returns')}"${lineAttr(block, 'returns')}>\u2192 ${escapeHtml(returns)}</span>` : '';
    return `<div class="${cls(block)}"><div class="${cls(block, '__header')}">${nameHtml}${sigHtml}${returnsHtml}</div><div class="${cls(block, '__body')}">${md(block)}</div></div>`;
  },
};

const COLUMN_LABELS: Record<string, string> = {
  name: 'Name',
  type: 'Type',
  default: 'Default',
  description: 'Description',
};
const ALL_COLUMNS = ['name', 'type', 'default', 'description'];
const DEFAULT_COLUMNS = ['name', 'type', 'description'];

/** Convert backtick-wrapped text to <code> tags, escape the rest */
function inlineCode(text: string): string {
  return escapeHtml(text).replace(/`([^`]+)`/g, '<code>$1</code>');
}

const propTable: BlockDefinition = {
  name: 'propTable',
  contentMode: 'properties',
  isContainer: true,
  targets: {
    title: { label: 'Title' },
    table: { label: 'Table' },
  },
  styleHints: {
    self: ['margin', 'border-radius', 'overflow', 'padding', 'background', 'border-width', 'border-style', 'border-color', 'box-shadow'],
    title: ['color', 'font-size', 'font-weight', 'font-family', 'margin', 'padding'],
    table: ['font-size', 'border-color', 'color', 'background'],
  },
  compile: (block) => {
    const title = block.label ?? prop(block, 'title');
    const titleHtml = title
      ? `<h3 class="${cls(block, '__title')}"${lineAttr(block, 'title')}>${escapeHtml(title)}</h3>`
      : '';
    const cols = prop(block, 'columns')
      ? prop(block, 'columns')!.split(',').map(c => c.trim()).filter(c => c in COLUMN_LABELS)
      : DEFAULT_COLUMNS;
    const hiddenSet = new Set(ALL_COLUMNS.filter(c => !cols.includes(c)));
    const hiddenAttr = hiddenSet.size > 0 ? ` data-hide="${[...hiddenSet].join(' ')}"` : '';
    const ths = ALL_COLUMNS.map(c => `<th${hiddenSet.has(c) ? ' class="mkly-hide"' : ''}>${COLUMN_LABELS[c]}</th>`).join('');
    return `<div class="${cls(block)}">${titleHtml}<table class="${cls(block, '__table')}"${hiddenAttr}><thead><tr>${ths}</tr></thead><tbody>{{children}}</tbody></table></div>`;
  },
};

const propRow: BlockDefinition = {
  name: 'propRow',
  contentMode: 'properties',
  styleHints: {
    self: ['color', 'background', 'font-size', 'padding'],
  },
  compile: (block, ctx) => {
    const name = prop(block, 'name');
    if (!name) {
      requireProp(block, 'name', ctx);
      return errorHtml('propRow block requires "name" property', block.position.start.line);
    }
    const type = prop(block, 'type') ?? '';
    const defaultVal = prop(block, 'default') ?? '';
    const description = prop(block, 'description') ?? '';
    const required = prop(block, 'required');
    const kit = block.blockType.includes('/') ? block.blockType.split('/')[0] : '';
    const tableCls = blockTypeToCssClass(kit ? `${kit}/propTable` : 'propTable');
    const nameHtml = required === 'true'
      ? `${escapeHtml(name)}<span class="${tableCls}__required">*</span>`
      : escapeHtml(name);
    return `<tr class="${tableCls}__row"><td data-col="name"><code>${nameHtml}</code></td><td data-col="type"><code>${escapeHtml(type)}</code></td><td data-col="default"><code>${escapeHtml(defaultVal)}</code></td><td data-col="description">${inlineCode(description)}</td></tr>`;
  },
};

const tabs: BlockDefinition = {
  name: 'tabs',
  contentMode: 'properties',
  isContainer: true,
  styleHints: {
    self: ['margin', 'border-radius', 'background', 'padding', 'border-width', 'border-style', 'border-color', 'box-shadow', 'overflow'],
  },
  compile: (block) => {
    return `<div class="${cls(block)}">{{children}}</div>`;
  },
};

const tab: BlockDefinition = {
  name: 'tab',
  contentMode: 'mixed',
  styleHints: {
    self: ['padding', 'color', 'font-size', 'font-family', 'background', 'margin', 'line-height'],
  },
  compile: (block, ctx) => {
    const label = prop(block, 'label');
    if (!label) {
      requireProp(block, 'label', ctx);
      return errorHtml('tab block requires "label" property', block.position.start.line);
    }
    return `<div class="${cls(block)}" data-tab-label="${escapeHtml(label)}"${lineAttr(block, 'label')}>${md(block)}</div>`;
  },
};

const steps: BlockDefinition = {
  name: 'steps',
  contentMode: 'properties',
  isContainer: true,
  styleHints: {
    self: ['margin', 'padding', 'gap', 'background', 'border-radius'],
  },
  compile: (block) => {
    return `<ol class="${cls(block)}">{{children}}</ol>`;
  },
};

const step: BlockDefinition = {
  name: 'step',
  contentMode: 'mixed',
  targets: {
    title: { label: 'Title' },
  },
  styleHints: {
    self: ['text-align', 'padding', 'color', 'font-size', 'font-family', 'line-height', 'background', 'margin', 'border-radius', 'border-width', 'border-style', 'border-color'],
    title: ['color', 'font-size', 'font-weight', 'font-family', 'margin'],
  },
  compile: (block) => {
    const title = prop(block, 'title');
    const titleHtml = title
      ? `<strong class="${cls(block, '__title')}"${lineAttr(block, 'title')}>${escapeHtml(title)}</strong>`
      : '';
    return `<li class="${cls(block)}">${titleHtml}${md(block)}</li>`;
  },
};

const linkCard: BlockDefinition = {
  name: 'linkCard',
  contentMode: 'mixed',
  targets: {
    icon: { label: 'Icon' },
    body: { label: 'Body' },
  },
  styleHints: {
    self: ['padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'box-shadow', 'opacity'],
    icon: ['font-size', 'color', 'margin', 'padding'],
    body: ['color', 'font-size', 'font-family', 'line-height', 'padding'],
  },
  compile: (block, ctx) => {
    const href = prop(block, 'href');
    if (!href) {
      requireProp(block, 'href', ctx);
      return errorHtml('linkCard block requires "href" property', block.position.start.line);
    }
    const icon = prop(block, 'icon') ?? '\u2192';
    const url = safeUrl(href);
    return `<a href="${url}" class="${cls(block)}"${lineAttr(block, 'href')}><span class="${cls(block, '__icon')}">${escapeHtml(icon)}</span><div class="${cls(block, '__body')}">${md(block)}</div></a>`;
  },
};

const badge: BlockDefinition = {
  name: 'badge',
  contentMode: 'properties',
  styleHints: {
    self: ['color', 'background', 'font-size', 'font-weight', 'padding', 'border-radius', 'margin', 'border-width', 'border-style', 'border-color'],
  },
  compile: (block, ctx) => {
    const label = prop(block, 'label');
    if (!label) {
      requireProp(block, 'label', ctx);
      return errorHtml('badge block requires "label" property', block.position.start.line);
    }
    const variant = prop(block, 'variant') ?? 'default';
    return `<span class="${cls(block)} ${cls(block, `--${escapeHtml(variant)}`)}"${lineAttr(block, 'label')}>${escapeHtml(label)}</span>`;
  },
};

const fileTree: BlockDefinition = {
  name: 'fileTree',
  contentMode: 'text',
  styleHints: {
    self: ['color', 'background', 'font-size', 'padding', 'margin', 'border-radius', 'font-family', 'border-width', 'border-style', 'border-color', 'opacity'],
  },
  compile: (block) => {
    return `<div class="${cls(block)}"><pre>${escapeHtml(block.content)}</pre></div>`;
  },
};

const liveExample: BlockDefinition = {
  name: 'liveExample',
  contentMode: 'verbatim',
  targets: {
    header: { label: 'Header' },
    title: { label: 'Title' },
    toggle: { label: 'Toggle' },
    tab: { label: 'Tab' },
    pre: { label: 'Code' },
    frame: { label: 'Preview frame' },
  },
  styleHints: {
    self: ['margin', 'border-radius', 'overflow', 'box-shadow', 'padding', 'background', 'border-width', 'border-style', 'border-color'],
    header: ['color', 'background', 'padding', 'margin'],
    title: ['color', 'font-size', 'font-weight', 'font-family'],
    toggle: ['color', 'background', 'padding', 'margin', 'border-radius'],
    tab: ['color', 'background', 'font-size', 'padding', 'border-radius', 'font-weight', 'margin'],
    pre: ['color', 'background', 'font-size', 'padding', 'font-family', 'margin'],
    frame: ['border-radius', 'height', 'border-width', 'border-style', 'border-color'],
  },
  compile: (block) => {
    const title = prop(block, 'title');
    const height = prop(block, 'height') ?? '400';
    const safeHeight = /^\d+(\.\d+)?(px)?$/i.test(height) ? cssVal(height) : '400px';
    const encoded = toBase64(block.content);
    const titleHtml = title ? `<span class="${cls(block, '__title')}">${escapeHtml(title)}</span>` : '';
    return `<div class="${cls(block)}"><div class="${cls(block, '__header')}">${titleHtml}<div class="${cls(block, '__toggle')}"><button class="${cls(block, '__tab')} ${cls(block, '__tab--active')}" data-panel="source">Source</button><button class="${cls(block, '__tab')}" data-panel="preview">Preview</button></div></div><div class="${cls(block, '__panel')} ${cls(block, '__source')}"><pre class="${cls(block, '__pre')}"><code>${escapeHtml(block.content)}</code></pre></div><div class="${cls(block, '__panel')} ${cls(block, '__preview')}" data-mkly-preview="${encoded}" data-preview-height="${escapeHtml(safeHeight)}" style="display:none"><iframe class="${cls(block, '__frame')}" sandbox="allow-same-origin" style="height:${escapeHtml(safeHeight)};width:100%;border:none"></iframe></div></div>`;
  },
};

const reverseExample: BlockDefinition = {
  name: 'reverseExample',
  contentMode: 'verbatim',
  targets: {
    header: { label: 'Header' },
    title: { label: 'Title' },
    toggle: { label: 'Toggle' },
    tab: { label: 'Tab' },
    pre: { label: 'Code' },
  },
  styleHints: {
    self: ['margin', 'border-radius', 'overflow', 'box-shadow', 'padding', 'background', 'border-width', 'border-style', 'border-color'],
    header: ['color', 'background', 'padding', 'margin'],
    title: ['color', 'font-size', 'font-weight', 'font-family'],
    toggle: ['color', 'background', 'padding', 'margin', 'border-radius'],
    tab: ['color', 'background', 'font-size', 'padding', 'border-radius', 'font-weight', 'margin'],
    pre: ['color', 'background', 'font-size', 'padding', 'font-family', 'margin'],
  },
  compile: (block) => {
    const title = prop(block, 'title');
    const origin = prop(block, 'origin') ?? 'auto';
    const encoded = toBase64(block.content);
    const titleHtml = title ? `<span class="${cls(block, '__title')}">${escapeHtml(title)}</span>` : '';
    return `<div class="${cls(block)}"><div class="${cls(block, '__header')}">${titleHtml}<div class="${cls(block, '__toggle')}"><button class="${cls(block, '__tab')} ${cls(block, '__tab--active')}" data-panel="input">HTML</button><button class="${cls(block, '__tab')}" data-panel="output">mkly</button></div></div><div class="${cls(block, '__panel')} ${cls(block, '__input')}"><pre class="${cls(block, '__pre')}"><code>${escapeHtml(block.content)}</code></pre></div><div class="${cls(block, '__panel')} ${cls(block, '__output')}" data-mkly-reverse="${encoded}" data-reverse-origin="${escapeHtml(origin)}" style="display:none"><pre class="${cls(block, '__pre')}"><code class="${cls(block, '__result')}"></code></pre></div></div>`;
  },
};

const install: BlockDefinition = {
  name: 'install',
  contentMode: 'properties',
  targets: {
    pre: { label: 'Code' },
    cmd: { label: 'Command' },
  },
  styleHints: {
    self: ['margin', 'border-radius', 'padding', 'background', 'border-width', 'border-style', 'border-color', 'box-shadow'],
    pre: ['color', 'background', 'font-size', 'padding', 'font-family', 'margin', 'border-radius'],
    cmd: ['color', 'font-weight'],
  },
  compile: (block, ctx) => {
    const pkg = prop(block, 'pkg');
    if (!pkg) {
      requireProp(block, 'pkg', ctx);
      return errorHtml('install block requires "pkg" property', block.position.start.line);
    }
    const registry = prop(block, 'registry') ?? 'npm';
    const commands: Record<string, string> = {
      npm: 'npm install',
      bun: 'bun add',
      yarn: 'yarn add',
      pnpm: 'pnpm add',
    };
    const cmd = commands[registry] ?? commands.npm;
    return `<div class="${cls(block)}"${lineAttr(block, 'pkg')}><pre class="${cls(block, '__pre')}"><code><span class="${cls(block, '__cmd')}">${escapeHtml(cmd)}</span> ${escapeHtml(pkg)}</code></pre></div>`;
  },
};

export const DOCS_BLOCKS: BlockDefinition[] = [
  callout, codeExample, apiRef, propTable, propRow,
  tabs, tab, steps, step, linkCard, badge, fileTree, install,
  liveExample, reverseExample,
];

const DOCS_REVERSE: ReverseBlockHandler[] = [
  { cssClass: 'mkly-docs-callout', blockType: 'docs/callout' },
  { cssClass: 'mkly-docs-codeExample', blockType: 'docs/codeExample' },
  { cssClass: 'mkly-docs-apiRef', blockType: 'docs/apiRef' },
  { cssClass: 'mkly-docs-propTable', blockType: 'docs/propTable' },
  { cssClass: 'mkly-docs-tabs', blockType: 'docs/tabs' },
  { cssClass: 'mkly-docs-tab', blockType: 'docs/tab' },
  { cssClass: 'mkly-docs-steps', blockType: 'docs/steps' },
  { cssClass: 'mkly-docs-step', blockType: 'docs/step' },
  { cssClass: 'mkly-docs-linkCard', blockType: 'docs/linkCard' },
  { cssClass: 'mkly-docs-badge', blockType: 'docs/badge' },
  { cssClass: 'mkly-docs-fileTree', blockType: 'docs/fileTree' },
  { cssClass: 'mkly-docs-install', blockType: 'docs/install' },
  { cssClass: 'mkly-docs-liveExample', blockType: 'docs/liveExample' },
  { cssClass: 'mkly-docs-reverseExample', blockType: 'docs/reverseExample' },
];

const DOCS_DOCS: Record<string, BlockDocs> = {
  'docs/callout': {
    displayName: 'Callout',
    icon: 'callout',
    color: '#ea580c',
    summary: 'Info, warning, tip, or danger callout box with icon and optional title.',
    usage: '--- docs/callout\ntype: tip\ntitle: Good to know\n\nThis is a helpful tip for your readers.',
    htmlPreview: '<aside class="mkly-docs-callout mkly-docs-callout--tip"><span class="mkly-docs-callout__icon">\uD83D\uDCA1</span><strong class="mkly-docs-callout__title">Good to know</strong><div class="mkly-docs-callout__body"><p>This is a helpful tip for your readers.</p></div></aside>',
    properties: [
      { name: 'type', description: 'Callout type: info, warning, tip, or danger', example: 'tip' },
      { name: 'title', description: 'Optional callout heading', example: 'Good to know' },
    ],
    tips: ['Defaults to "info" type if not specified', 'Content supports markdown', 'Each type has a distinct color and icon'],
  },
  'docs/codeExample': {
    displayName: 'Code Example',
    icon: 'code',
    color: '#1e293b',
    summary: 'Code block with header bar showing filename and language badge.',
    usage: '--- docs/codeExample\nlang: typescript\nfilename: index.ts\n\nconst greeting = "Hello, world!";',
    htmlPreview: '<div class="mkly-docs-codeExample"><div class="mkly-docs-codeExample__header"><span class="mkly-docs-codeExample__filename">index.ts</span><span class="mkly-docs-codeExample__lang">typescript</span></div><pre class="mkly-docs-codeExample__pre"><code>const greeting = &quot;Hello, world!&quot;;</code></pre></div>',
    properties: [
      { name: 'lang', description: 'Programming language', example: 'typescript' },
      { name: 'title', description: 'Code example title', example: 'Basic usage' },
      { name: 'filename', description: 'Filename shown in header bar', example: 'index.ts' },
    ],
    tips: ['Content is verbatim — not processed as markdown', 'Filename takes precedence over title in the header', 'Language badge renders as uppercase pill'],
  },
  'docs/apiRef': {
    displayName: 'API Reference',
    icon: 'api',
    color: '#6366f1',
    summary: 'API reference entry with function name, signature, return type, and description.',
    usage: '--- docs/apiRef\nname: mkly\nsignature: (source: string, options?: MklyOptions) => CompileResult\nreturns: CompileResult\n\nCompiles mkly source into HTML.',
    htmlPreview: '<div class="mkly-docs-apiRef"><div class="mkly-docs-apiRef__header"><code class="mkly-docs-apiRef__name">mkly</code><code class="mkly-docs-apiRef__sig">(source: string, options?: MklyOptions) =&gt; CompileResult</code><span class="mkly-docs-apiRef__returns">\u2192 CompileResult</span></div><div class="mkly-docs-apiRef__body"><p>Compiles mkly source into HTML.</p></div></div>',
    properties: [
      { name: 'name', description: 'Function or method name', required: true, example: 'mkly' },
      { name: 'signature', description: 'Type signature', example: '(source: string) => CompileResult' },
      { name: 'returns', description: 'Return type', example: 'CompileResult' },
    ],
    tips: ['Name is required', 'Signature and returns render in monospace', 'Content is the description — supports markdown'],
  },
  'docs/propTable': {
    displayName: 'Property Table',
    icon: 'table',
    color: '#0ea5e9',
    summary: 'Container that renders child propRow blocks as a formatted property table.',
    usage: '--- docs/propTable\ntitle: Options\n\n--- docs/propRow\nname: theme\ntype: string\ndefault: default\ndescription: Theme name to apply\n\n--- /docs/propTable',
    htmlPreview: '<div class="mkly-docs-propTable"><h3 class="mkly-docs-propTable__title">Options</h3><table class="mkly-docs-propTable__table"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="mkly-docs-propTable__row"><td><code>theme</code></td><td><code>string</code></td><td><code>default</code></td><td>Theme name to apply</td></tr></tbody></table></div>',
    properties: [
      { name: 'title', description: 'Table heading', example: 'Options' },
    ],
    tips: ['This is a container — close with --- /docs/propTable', 'Nest propRow blocks inside for each property'],
  },
  'docs/propRow': {
    displayName: 'Property Row',
    icon: 'row',
    color: '#0ea5e9',
    summary: 'Single row inside a propTable — defines one property with name, type, default, and description.',
    usage: '--- docs/propRow\nname: maxWidth\ntype: number\ndefault: 600\nrequired: true\ndescription: Maximum content width in pixels',
    htmlPreview: '<tr class="mkly-docs-propTable__row"><td><code>maxWidth<span class="mkly-docs-propTable__required">*</span></code></td><td><code>number</code></td><td><code>600</code></td><td>Maximum content width in pixels</td></tr>',
    properties: [
      { name: 'name', description: 'Property name', required: true, example: 'maxWidth' },
      { name: 'type', description: 'Property type', example: 'number' },
      { name: 'default', description: 'Default value', example: '600' },
      { name: 'description', description: 'Property description', example: 'Maximum content width in pixels' },
      { name: 'required', description: 'Mark as required (shows red asterisk)', example: 'true' },
    ],
    tips: ['Must be nested inside a propTable', 'Name is required — other fields are optional'],
  },
  'docs/tabs': {
    displayName: 'Tabs',
    icon: 'tabs',
    color: '#8b5cf6',
    summary: 'Tabbed content container — groups child tab blocks into switchable panels.',
    usage: '--- docs/tabs\n\n--- docs/tab\nlabel: npm\n\n```bash\nnpm install mkly\n```\n\n--- docs/tab\nlabel: bun\n\n```bash\nbun add mkly\n```\n\n--- /docs/tabs',
    htmlPreview: '<div class="mkly-docs-tabs"><div class="mkly-docs-tab" data-tab-label="npm"><p><code>npm install mkly</code></p></div><div class="mkly-docs-tab" data-tab-label="bun"><p><code>bun add mkly</code></p></div></div>',
    properties: [],
    tips: ['This is a container — close with --- /docs/tabs', 'Nest tab blocks inside, each with a label property'],
  },
  'docs/tab': {
    displayName: 'Tab',
    icon: 'tab',
    color: '#8b5cf6',
    summary: 'Individual tab panel with a label — must be nested inside a tabs container.',
    usage: '--- docs/tab\nlabel: JavaScript\n\nconsole.log("Hello!");',
    htmlPreview: '<div class="mkly-docs-tab" data-tab-label="JavaScript"><p>console.log(&quot;Hello!&quot;);</p></div>',
    properties: [
      { name: 'label', description: 'Tab label text', required: true, example: 'JavaScript' },
    ],
    tips: ['Label is required', 'Must be inside a tabs container', 'Content supports markdown'],
  },
  'docs/steps': {
    displayName: 'Steps',
    icon: 'steps',
    color: '#10b981',
    summary: 'Numbered step-by-step container with a vertical progress line.',
    usage: '--- docs/steps\n\n--- docs/step\ntitle: Install\n\nRun `npm install mkly`.\n\n--- docs/step\ntitle: Import\n\nAdd `import { mkly } from "mkly"` to your file.\n\n--- /docs/steps',
    htmlPreview: '<ol class="mkly-docs-steps"><li class="mkly-docs-step"><strong class="mkly-docs-step__title">Install</strong><p>Run <code>npm install mkly</code>.</p></li><li class="mkly-docs-step"><strong class="mkly-docs-step__title">Import</strong><p>Add the import to your file.</p></li></ol>',
    properties: [],
    tips: ['This is a container — close with --- /docs/steps', 'Nest step blocks inside', 'Steps auto-number with accent-colored circles'],
  },
  'docs/step': {
    displayName: 'Step',
    icon: 'step',
    color: '#10b981',
    summary: 'Individual step with optional title — must be nested inside a steps container.',
    usage: '--- docs/step\ntitle: Configure\n\nCreate a config file at the project root.',
    htmlPreview: '<li class="mkly-docs-step"><strong class="mkly-docs-step__title">Configure</strong><p>Create a config file at the project root.</p></li>',
    properties: [
      { name: 'title', description: 'Step heading', example: 'Configure' },
    ],
    tips: ['Must be inside a steps container', 'Title is optional but recommended', 'Content supports markdown'],
  },
  'docs/linkCard': {
    displayName: 'Link Card',
    icon: 'link',
    color: '#f97316',
    summary: 'Navigation card with icon, text, and link — used for related pages and resources.',
    usage: '--- docs/linkCard\nhref: /getting-started\nicon: \uD83D\uDE80\n\n**Getting Started**\nLearn the basics of mkly.',
    htmlPreview: '<a href="/getting-started" class="mkly-docs-linkCard"><span class="mkly-docs-linkCard__icon">\uD83D\uDE80</span><div class="mkly-docs-linkCard__body"><p><strong>Getting Started</strong><br>Learn the basics of mkly.</p></div></a>',
    properties: [
      { name: 'href', description: 'Link URL', required: true, example: '/getting-started' },
      { name: 'icon', description: 'Icon emoji or character (defaults to \u2192)', example: '\uD83D\uDE80' },
    ],
    tips: ['Href is required', 'Renders as a clickable card with hover border effect', 'Content supports markdown for title + description'],
  },
  'docs/badge': {
    displayName: 'Badge',
    icon: 'badge',
    color: '#64748b',
    summary: 'Inline status badge with label and color variant.',
    usage: '--- docs/badge\nlabel: Stable\nvariant: success',
    htmlPreview: '<span class="mkly-docs-badge mkly-docs-badge--success">Stable</span>',
    properties: [
      { name: 'label', description: 'Badge text', required: true, example: 'Stable' },
      { name: 'variant', description: 'Color variant: default, success, warning, or danger', example: 'success' },
    ],
    tips: ['Label is required', 'Defaults to "default" variant if not specified', 'Renders inline — can be placed alongside headings'],
  },
  'docs/fileTree': {
    displayName: 'File Tree',
    icon: 'folder',
    color: '#94a3b8',
    summary: 'Monospace file tree display for showing directory structures.',
    usage: '--- docs/fileTree\n\nsrc/\n  index.ts\n  utils.ts\n  components/\n    App.tsx',
    htmlPreview: '<div class="mkly-docs-fileTree"><pre>src/\n  index.ts\n  utils.ts\n  components/\n    App.tsx</pre></div>',
    properties: [],
    tips: ['Content is plain text — use spaces for indentation', 'Renders in monospace font with a light background'],
  },
  'docs/install': {
    displayName: 'Install',
    icon: 'terminal',
    color: '#4ade80',
    summary: 'Package install command with dark terminal styling.',
    usage: '--- docs/install\npkg: @mklyml/core\nregistry: bun',
    htmlPreview: '<div class="mkly-docs-install"><pre class="mkly-docs-install__pre"><code><span class="mkly-docs-install__cmd">bun add</span> @mklyml/core</code></pre></div>',
    properties: [
      { name: 'pkg', description: 'Package name', required: true, example: '@mklyml/core' },
      { name: 'registry', description: 'Package manager: npm, bun, yarn, or pnpm', example: 'bun' },
    ],
    tips: ['Pkg is required', 'Defaults to npm if registry not specified', 'Command prefix is green-highlighted'],
  },
  'docs/liveExample': {
    displayName: 'Live Example',
    icon: 'play',
    color: '#f59e0b',
    summary: 'Interactive panel with mkly source and live HTML preview side by side.',
    usage: '--- docs/liveExample\ntitle: Hello World\nheight: 200\n\n--- core/heading\nlevel: 1\n\nHello, World!\n\n--- /docs/liveExample',
    htmlPreview: '<div class="mkly-docs-liveExample"><div class="mkly-docs-liveExample__header"><span class="mkly-docs-liveExample__title">Hello World</span><div class="mkly-docs-liveExample__toggle"><button class="mkly-docs-liveExample__tab mkly-docs-liveExample__tab--active">Source</button><button class="mkly-docs-liveExample__tab">Preview</button></div></div><pre class="mkly-docs-liveExample__pre"><code>--- core/heading\nlevel: 1\n\nHello, World!</code></pre></div>',
    properties: [
      { name: 'title', description: 'Title shown in header', example: 'Hello World' },
      { name: 'height', description: 'Preview iframe height in pixels (default 400)', example: '200' },
    ],
    tips: ['Content is verbatim mkly source', 'Toggles between Source and Preview panels', 'Preview renders in a sandboxed iframe'],
  },
  'docs/reverseExample': {
    displayName: 'Reverse Example',
    icon: 'reverse',
    color: '#ec4899',
    summary: 'Interactive panel showing HTML input and its mkly reverse-compiled output.',
    usage: '--- docs/reverseExample\ntitle: Basic HTML\norigin: generic\n\n<h2>Hello</h2>\n<p>A paragraph.</p>\n\n--- /docs/reverseExample',
    htmlPreview: '<div class="mkly-docs-reverseExample"><div class="mkly-docs-reverseExample__header"><span class="mkly-docs-reverseExample__title">Basic HTML</span><div class="mkly-docs-reverseExample__toggle"><button class="mkly-docs-reverseExample__tab mkly-docs-reverseExample__tab--active">HTML</button><button class="mkly-docs-reverseExample__tab">mkly</button></div></div><pre class="mkly-docs-reverseExample__pre"><code>&lt;h2&gt;Hello&lt;/h2&gt;\n&lt;p&gt;A paragraph.&lt;/p&gt;</code></pre></div>',
    properties: [
      { name: 'title', description: 'Title shown in header', example: 'Basic HTML' },
      { name: 'origin', description: 'HTML origin hint: auto, mkly-web, mkly-email, or generic', example: 'generic' },
    ],
    tips: ['Content is verbatim HTML', 'Toggles between HTML input and mkly output panels', 'Origin hint affects reverse parsing strategy'],
  },
};

export const DOCS_KIT: MklyKit = defineKit({
  name: 'docs',
  displayName: 'Docs',
  description: 'Documentation-specific blocks for docs sites',
  versions: { supported: [1], current: 1 },
  blocks: DOCS_BLOCKS,
  schemas: DOCS_SCHEMAS,
  themes: DOCS_THEMES,
  presets: DOCS_PRESETS,
  reverse: DOCS_REVERSE,
  docs: DOCS_DOCS,
  metaProperties: [
    { name: 'author', description: 'Document author name', example: 'Jane Smith' },
    { name: 'description', description: 'Page description for SEO', example: 'Getting started with mkly' },
  ],
});
