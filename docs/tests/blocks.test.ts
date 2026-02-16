import { describe, test, expect } from 'bun:test';
import type { MklyBlock, CompileContext, SourceRange } from '@mklyml/core';
import { mkly, CORE_KIT } from '@mklyml/core';
import { DOCS_KIT, DOCS_BLOCKS } from '../src/index';

const POS: SourceRange = {
  start: { line: 1, column: 1 },
  end: { line: 1, column: 1 },
};

function block(
  blockType: string,
  properties: Record<string, string> = {},
  content = '',
  children: MklyBlock[] = [],
  label?: string,
): MklyBlock {
  return { blockType, properties, content, children, position: POS, label };
}

function ctx(variables: Record<string, string> = {}): CompileContext {
  return { variables, errors: [], extraStyles: new Set() };
}

function findBlock(name: string) {
  const b = DOCS_BLOCKS.find(b => b.name === name);
  if (!b) throw new Error(`Block "${name}" not found`);
  return b;
}

describe('callout', () => {
  test('renders with default info type', () => {
    const b = findBlock('callout');
    const html = b.compile(block('callout', {}, 'Be careful here.'), ctx());
    expect(html).toContain('mkly-callout--info');
    expect(html).toContain('Be careful here.');
  });

  test('renders with explicit warning type', () => {
    const b = findBlock('callout');
    const html = b.compile(block('callout', { type: 'warning', title: 'Heads up' }, 'Warning text'), ctx());
    expect(html).toContain('mkly-callout--warning');
    expect(html).toContain('Heads up');
    expect(html).toContain('Warning text');
  });

  test('renders tip and danger types', () => {
    const b = findBlock('callout');
    expect(b.compile(block('callout', { type: 'tip' }, ''), ctx())).toContain('mkly-callout--tip');
    expect(b.compile(block('callout', { type: 'danger' }, ''), ctx())).toContain('mkly-callout--danger');
  });
});

describe('codeExample', () => {
  test('renders code with lang and filename', () => {
    const b = findBlock('codeExample');
    const html = b.compile(block('codeExample', { lang: 'ts', filename: 'app.ts' }, 'const x = 1;'), ctx());
    expect(html).toContain('mkly-codeExample__header');
    expect(html).toContain('app.ts');
    expect(html).toContain('ts');
    expect(html).toContain('const x = 1;');
  });

  test('renders without header when no props', () => {
    const b = findBlock('codeExample');
    const html = b.compile(block('codeExample', {}, 'hello'), ctx());
    expect(html).not.toContain('mkly-codeExample__header');
    expect(html).toContain('hello');
  });
});

describe('apiRef', () => {
  test('renders with name, signature, and returns', () => {
    const b = findBlock('apiRef');
    const html = b.compile(block('apiRef', { name: 'useState', signature: '(init: T)', returns: '[T, SetState<T>]' }, 'Manages state.'), ctx());
    expect(html).toContain('useState');
    expect(html).toContain('(init: T)');
    expect(html).toContain('[T, SetState&lt;T&gt;]');
    expect(html).toContain('Manages state.');
  });

  test('requires name property', () => {
    const b = findBlock('apiRef');
    const c = ctx();
    const html = b.compile(block('apiRef', {}), c);
    expect(html).toContain('requires');
    expect(c.errors.length).toBeGreaterThan(0);
  });
});

describe('propTable', () => {
  test('renders table with thead', () => {
    const b = findBlock('propTable');
    const html = b.compile(block('propTable', { title: 'Props' }), ctx());
    expect(html).toContain('<thead>');
    expect(html).toContain('Name');
    expect(html).toContain('Type');
    expect(html).toContain('Default');
    expect(html).toContain('Description');
    expect(html).toContain('{{children}}');
    expect(html).toContain('Props');
  });
});

describe('propRow', () => {
  test('renders tr with td cells', () => {
    const b = findBlock('propRow');
    const html = b.compile(block('propRow', { name: 'size', type: 'number', default: '16', description: 'Icon size' }), ctx());
    expect(html).toContain('<tr');
    expect(html).toContain('<td data-col=');
    expect(html).toContain('size');
    expect(html).toContain('number');
    expect(html).toContain('16');
    expect(html).toContain('Icon size');
  });

  test('shows required asterisk', () => {
    const b = findBlock('propRow');
    const html = b.compile(block('propRow', { name: 'id', required: 'true' }), ctx());
    expect(html).toContain('mkly-propTable__required');
    expect(html).toContain('*');
  });

  test('requires name property', () => {
    const b = findBlock('propRow');
    const c = ctx();
    const html = b.compile(block('propRow', {}), c);
    expect(html).toContain('requires');
    expect(c.errors.length).toBeGreaterThan(0);
  });
});

describe('tabs', () => {
  test('renders wrapper div', () => {
    const b = findBlock('tabs');
    const html = b.compile(block('tabs'), ctx());
    expect(html).toContain('mkly-tabs');
    expect(html).toContain('{{children}}');
  });
});

describe('tab', () => {
  test('renders div with data-tab-label', () => {
    const b = findBlock('tab');
    const html = b.compile(block('tab', { label: 'React' }, 'React content'), ctx());
    expect(html).toContain('data-tab-label="React"');
    expect(html).toContain('React content');
  });

  test('requires label property', () => {
    const b = findBlock('tab');
    const c = ctx();
    const html = b.compile(block('tab', {}), c);
    expect(html).toContain('requires');
    expect(c.errors.length).toBeGreaterThan(0);
  });
});

describe('steps', () => {
  test('renders ol', () => {
    const b = findBlock('steps');
    const html = b.compile(block('steps'), ctx());
    expect(html).toContain('<ol');
    expect(html).toContain('mkly-steps');
    expect(html).toContain('{{children}}');
  });
});

describe('step', () => {
  test('renders li with title', () => {
    const b = findBlock('step');
    const html = b.compile(block('step', { title: 'Install' }, 'Run npm install'), ctx());
    expect(html).toContain('<li');
    expect(html).toContain('mkly-step');
    expect(html).toContain('Install');
    expect(html).toContain('Run npm install');
  });

  test('renders li without title', () => {
    const b = findBlock('step');
    const html = b.compile(block('step', {}, 'Just content'), ctx());
    expect(html).toContain('<li');
    expect(html).not.toContain('mkly-step__title');
    expect(html).toContain('Just content');
  });
});

describe('linkCard', () => {
  test('renders anchor with href', () => {
    const b = findBlock('linkCard');
    const html = b.compile(block('linkCard', { href: 'https://example.com', icon: '📖' }, 'Read the docs'), ctx());
    expect(html).toContain('href="https://example.com"');
    expect(html).toContain('mkly-linkCard');
    expect(html).toContain('Read the docs');
  });

  test('uses default arrow icon', () => {
    const b = findBlock('linkCard');
    const html = b.compile(block('linkCard', { href: 'https://example.com' }, 'Link'), ctx());
    expect(html).toContain('\u2192');
  });

  test('requires href property', () => {
    const b = findBlock('linkCard');
    const c = ctx();
    const html = b.compile(block('linkCard', {}), c);
    expect(html).toContain('requires');
    expect(c.errors.length).toBeGreaterThan(0);
  });
});

describe('badge', () => {
  test('renders with label and default variant', () => {
    const b = findBlock('badge');
    const html = b.compile(block('badge', { label: 'Stable' }), ctx());
    expect(html).toContain('mkly-badge--default');
    expect(html).toContain('Stable');
  });

  test('renders with explicit variant', () => {
    const b = findBlock('badge');
    const html = b.compile(block('badge', { label: 'Beta', variant: 'warning' }), ctx());
    expect(html).toContain('mkly-badge--warning');
    expect(html).toContain('Beta');
  });

  test('requires label property', () => {
    const b = findBlock('badge');
    const c = ctx();
    const html = b.compile(block('badge', {}), c);
    expect(html).toContain('requires');
    expect(c.errors.length).toBeGreaterThan(0);
  });
});

describe('fileTree', () => {
  test('renders pre with content', () => {
    const b = findBlock('fileTree');
    const html = b.compile(block('fileTree', {}, 'src/\n  index.ts\n  utils.ts'), ctx());
    expect(html).toContain('mkly-fileTree');
    expect(html).toContain('<pre>');
    expect(html).toContain('src/');
    expect(html).toContain('index.ts');
  });
});

describe('install', () => {
  test('renders npm install by default', () => {
    const b = findBlock('install');
    const html = b.compile(block('install', { pkg: 'react' }), ctx());
    expect(html).toContain('npm install');
    expect(html).toContain('react');
    expect(html).toContain('mkly-install__cmd');
  });

  test('renders bun add', () => {
    const b = findBlock('install');
    const html = b.compile(block('install', { pkg: 'hono', registry: 'bun' }), ctx());
    expect(html).toContain('bun add');
    expect(html).toContain('hono');
  });

  test('renders yarn add', () => {
    const b = findBlock('install');
    const html = b.compile(block('install', { pkg: 'next', registry: 'yarn' }), ctx());
    expect(html).toContain('yarn add');
  });

  test('renders pnpm add', () => {
    const b = findBlock('install');
    const html = b.compile(block('install', { pkg: 'vite', registry: 'pnpm' }), ctx());
    expect(html).toContain('pnpm add');
  });

  test('requires pkg property', () => {
    const b = findBlock('install');
    const c = ctx();
    const html = b.compile(block('install', {}), c);
    expect(html).toContain('requires');
    expect(c.errors.length).toBeGreaterThan(0);
  });
});

describe('integration', () => {
  test('compiles full mkly document with docs kit', () => {
    const source = `--- use: core
--- use: docs

--- meta
version: 1

--- docs/callout
type: tip
title: Getting Started

This is a helpful tip!

--- docs/codeExample
lang: ts
filename: hello.ts

const greeting = "Hello, world!";

--- /docs/codeExample

--- docs/steps

--- docs/step
title: Install

Run the install command.

--- docs/step
title: Configure

Edit your config file.

--- /docs/steps

--- docs/badge
label: v1.0
variant: success

--- docs/install
pkg: @mklyml/core
registry: bun`;

    const result = mkly(source, { kits: { core: CORE_KIT, docs: DOCS_KIT } });
    expect(result.html).toContain('mkly-docs-callout--tip');
    expect(result.html).toContain('Getting Started');
    expect(result.html).toContain('hello.ts');
    expect(result.html).toContain('greeting');
    expect(result.html).toContain('mkly-docs-steps');
    expect(result.html).toContain('Install');
    expect(result.html).toContain('Configure');
    expect(result.html).toContain('v1.0');
    expect(result.html).toContain('bun add');
    expect(result.html).toContain('@mklyml/core');
  });
});
