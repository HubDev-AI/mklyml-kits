import { z } from 'zod';
import type { BlockSchema } from '@mklyml/core';

const optionalUrl = z.string().url().optional().describe('Optional URL');
const optionalString = z.string().optional().describe('Optional text');

const introSchema: BlockSchema = {
  name: 'intro',
  description: 'Newsletter introduction paragraph',
  properties: z.object({}),
  contentMode: 'text',
};

const featuredSchema: BlockSchema = {
  name: 'featured',
  description: 'Featured article highlight with image and source',
  properties: z.object({
    image: optionalUrl.describe('Featured article image'),
    link: optionalUrl.describe('Link to full article'),
    source: optionalString.describe('Source publication name'),
    author: optionalString.describe('Article author name'),
  }),
  contentMode: 'mixed',
};

const categorySchema: BlockSchema = {
  name: 'category',
  description: 'Category container for grouping items',
  properties: z.object({
    title: optionalString.describe('Category heading'),
  }),
  contentMode: 'properties',
  isContainer: true,
};

const itemSchema: BlockSchema = {
  name: 'item',
  description: 'Content item within a category',
  properties: z.object({
    image: optionalUrl.describe('Item thumbnail image'),
    link: optionalUrl.describe('Link to full article'),
    source: optionalString.describe('Source publication name'),
  }),
  contentMode: 'mixed',
};

const quickHitsSchema: BlockSchema = {
  name: 'quickHits',
  description: 'Quick bullet-point news roundup',
  properties: z.object({
    title: optionalString.describe('Section heading'),
  }),
  contentMode: 'text',
};

const toolsSchema: BlockSchema = {
  name: 'tools',
  description: 'Tools and resources showcase container',
  properties: z.object({
    title: optionalString.describe('Section heading'),
  }),
  contentMode: 'mixed',
  isContainer: true,
};

const tipOfTheDaySchema: BlockSchema = {
  name: 'tipOfTheDay',
  description: 'Highlighted tip or advice callout',
  properties: z.object({
    title: optionalString.describe('Tip heading (e.g. "Pro Tip")'),
  }),
  contentMode: 'mixed',
};

const communitySchema: BlockSchema = {
  name: 'community',
  description: 'Community highlight or testimonial',
  properties: z.object({
    author: optionalString.describe('Community member name'),
  }),
  contentMode: 'mixed',
};

const personalNoteSchema: BlockSchema = {
  name: 'personalNote',
  description: 'Personal message from the newsletter author',
  properties: z.object({}),
  contentMode: 'text',
};

const pollSchema: BlockSchema = {
  name: 'poll',
  description: 'Interactive poll with question and options',
  properties: z.object({
    question: z.string().describe('Poll question (required)'),
    action: optionalUrl.describe('Vote endpoint URL — options become clickable links'),
    id: optionalString.describe('Unique poll identifier sent as pollId param'),
    option1: optionalString.describe('First option'),
    option2: optionalString.describe('Second option'),
    option3: optionalString.describe('Third option'),
    option4: optionalString.describe('Fourth option'),
  }),
  contentMode: 'mixed',
};

const recommendationsSchema: BlockSchema = {
  name: 'recommendations',
  description: 'Recommended links or resources list',
  properties: z.object({
    title: optionalString.describe('Section heading'),
  }),
  contentMode: 'text',
};

const sponsorSchema: BlockSchema = {
  name: 'sponsor',
  description: 'Sponsored content section',
  properties: z.object({
    image: optionalUrl.describe('Sponsor logo or image'),
    link: optionalUrl.describe('Sponsor link URL'),
    label: optionalString.describe('Sponsor CTA text'),
  }),
  contentMode: 'mixed',
};

const outroSchema: BlockSchema = {
  name: 'outro',
  description: 'Newsletter closing section with optional CTA',
  properties: z.object({
    ctaUrl: optionalUrl.describe('Closing CTA link URL'),
    ctaText: optionalString.describe('Closing CTA button text'),
  }),
  contentMode: 'mixed',
};

const customSchema: BlockSchema = {
  name: 'custom',
  description: 'Freeform custom content section',
  properties: z.object({
    title: optionalString.describe('Section heading'),
  }),
  contentMode: 'mixed',
};

export const NEWSLETTER_SCHEMAS: BlockSchema[] = [
  introSchema, featuredSchema, categorySchema, itemSchema, quickHitsSchema,
  toolsSchema, tipOfTheDaySchema, communitySchema, personalNoteSchema,
  pollSchema, recommendationsSchema, sponsorSchema, outroSchema, customSchema,
];
