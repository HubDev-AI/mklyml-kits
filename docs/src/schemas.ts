import { z } from 'zod';
import type { BlockSchema } from '@mklyml/core';

const optionalString = z.string().optional().describe('Optional text');

const calloutSchema: BlockSchema = {
  name: 'callout',
  description: 'Info, warning, tip, or danger callout box',
  properties: z.object({
    type: z.enum(['info', 'warning', 'tip', 'danger']).optional().describe('Callout type (info|warning|tip|danger)'),
    title: optionalString.describe('Callout heading'),
  }),
  contentMode: 'mixed',
};

const codeExampleSchema: BlockSchema = {
  name: 'codeExample',
  description: 'Code block with header bar showing filename and language',
  properties: z.object({
    lang: optionalString.describe('Programming language'),
    title: optionalString.describe('Code example title'),
    filename: optionalString.describe('Filename shown in header'),
  }),
  contentMode: 'verbatim',
};

const apiRefSchema: BlockSchema = {
  name: 'apiRef',
  description: 'API reference entry with signature and return type',
  properties: z.object({
    name: z.string().describe('Function or method name (required)'),
    signature: optionalString.describe('Function signature'),
    returns: optionalString.describe('Return type'),
  }),
  contentMode: 'mixed',
};

const propTableSchema: BlockSchema = {
  name: 'propTable',
  description: 'Property table container for documenting props',
  properties: z.object({
    title: optionalString.describe('Table heading'),
    columns: optionalString.describe('Comma-separated column names to show (name,type,default,description). Default: name,type,description'),
  }),
  contentMode: 'properties',
  isContainer: true,
};

const propRowSchema: BlockSchema = {
  name: 'propRow',
  description: 'Single property row inside a propTable',
  properties: z.object({
    name: z.string().describe('Property name (required)'),
    type: optionalString.describe('Property type'),
    default: optionalString.describe('Default value'),
    description: optionalString.describe('Property description'),
    required: optionalString.describe('Whether property is required (true|false)'),
  }),
  contentMode: 'properties',
};

const tabsSchema: BlockSchema = {
  name: 'tabs',
  description: 'Tabbed content container',
  properties: z.object({}),
  contentMode: 'properties',
  isContainer: true,
};

const tabSchema: BlockSchema = {
  name: 'tab',
  description: 'Individual tab panel with label',
  properties: z.object({
    label: z.string().describe('Tab label text (required)'),
  }),
  contentMode: 'mixed',
};

const stepsSchema: BlockSchema = {
  name: 'steps',
  description: 'Numbered step-by-step container',
  properties: z.object({}),
  contentMode: 'properties',
  isContainer: true,
};

const stepSchema: BlockSchema = {
  name: 'step',
  description: 'Individual step with optional title',
  properties: z.object({
    title: optionalString.describe('Step heading'),
  }),
  contentMode: 'mixed',
};

const linkCardSchema: BlockSchema = {
  name: 'linkCard',
  description: 'Navigation card with link and optional icon',
  properties: z.object({
    href: z.string().describe('Link URL (required)'),
    icon: optionalString.describe('Icon character or emoji'),
  }),
  contentMode: 'mixed',
};

const badgeSchema: BlockSchema = {
  name: 'badge',
  description: 'Status badge with label and variant',
  properties: z.object({
    label: z.string().describe('Badge text (required)'),
    variant: z.enum(['default', 'success', 'warning', 'danger']).optional().describe('Badge color variant'),
  }),
  contentMode: 'properties',
};

const fileTreeSchema: BlockSchema = {
  name: 'fileTree',
  description: 'File tree display with monospace formatting',
  properties: z.object({}),
  contentMode: 'text',
};

const installSchema: BlockSchema = {
  name: 'install',
  description: 'Package install command with registry variants',
  properties: z.object({
    pkg: z.string().describe('Package name (required)'),
    registry: z.enum(['npm', 'bun', 'yarn', 'pnpm']).optional().describe('Package registry (npm|bun|yarn|pnpm)'),
  }),
  contentMode: 'properties',
};

const liveExampleSchema: BlockSchema = {
  name: 'liveExample',
  description: 'Live preview showing mkly source alongside compiled HTML output',
  properties: z.object({
    title: optionalString.describe('Title shown above the panels'),
    height: optionalString.describe('Preview iframe height in pixels (default 300)'),
  }),
  contentMode: 'mixed',
};

const reverseExampleSchema: BlockSchema = {
  name: 'reverseExample',
  description: 'Reverse conversion example showing HTML input and resulting mkly output',
  properties: z.object({
    title: optionalString.describe('Title shown above the panels'),
    origin: z.enum(['auto', 'mkly-web', 'mkly-email', 'generic']).optional().describe('HTML origin hint for reverse parser'),
  }),
  contentMode: 'mixed',
};

export const DOCS_SCHEMAS: BlockSchema[] = [
  calloutSchema, codeExampleSchema, apiRefSchema, propTableSchema,
  propRowSchema, tabsSchema, tabSchema, stepsSchema, stepSchema,
  linkCardSchema, badgeSchema, fileTreeSchema, installSchema,
  liveExampleSchema, reverseExampleSchema,
];
