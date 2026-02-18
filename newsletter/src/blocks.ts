import type { BlockDefinition, BlockDocs, MklyKit, ReverseBlockHandler, ParsedBlock } from '@mklyml/core';
import { escapeHtml, htmlToMarkdown } from '@mklyml/core';
import { safeUrl, md } from '@mklyml/core';
import { prop, errorHtml, requireProp } from '@mklyml/core';
import { cls, lineAttr } from '@mklyml/core';
import {
  extractAttr,
  extractInnerHtml,
  extractTextContent,
  extractAttrByClass,
  stripElementsByClass,
} from '@mklyml/core';
import { NEWSLETTER_SCHEMAS } from './schemas';
import { NEWSLETTER_THEMES } from './themes';
import { NEWSLETTER_PRESETS } from './presets';

const intro: BlockDefinition = {
  name: 'intro',
  contentMode: 'text',
  styleHints: {
    self: ['text-align', 'color', 'font-family', 'font-size', 'font-weight', 'font-style', 'line-height', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
  },
  contentHints: { contentBody: true },
  compile: (block) => `<div class="${cls(block)}">${md(block)}</div>`,
};

const featured: BlockDefinition = {
  name: 'featured',
  contentMode: 'mixed',
  targets: {
    img: { label: 'Image' },
    source: { label: 'Source badge' },
    author: { label: 'Author' },
    link: { label: 'Link' },
  },
  styleHints: {
    self: ['text-align', 'color', 'font-family', 'font-size', 'font-weight', 'font-style', 'line-height', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'box-shadow', 'overflow', 'opacity'],
    img: ['text-align', 'width', 'max-width', 'height', 'margin', 'padding', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
    source: ['color', 'background', 'font-size', 'font-weight', 'padding', 'margin', 'border-radius', 'border-width', 'border-style', 'border-color'],
    author: ['color', 'font-family', 'font-size', 'font-weight', 'margin', 'padding'],
    link: ['display', 'text-align', 'color', 'background', 'font-size', 'font-weight', 'padding', 'margin', 'border-radius'],
  },
  contentHints: { contentProps: ['image', 'source', 'author', 'link'], contentBody: true },
  compile: (block) => {
    const img = prop(block, 'image');
    const link = prop(block, 'link');
    const source = prop(block, 'source');
    const author = prop(block, 'author');
    const imgHtml = img
      ? `<img src="${safeUrl(img)}" alt="" class="${cls(block, '__img')}" style="display:block;width:100%;"${lineAttr(block, 'image')}>`
      : '';
    const sourceHtml = source
      ? `<span class="${cls(block, '__source')}"${lineAttr(block, 'source')}>${escapeHtml(source)}</span>`
      : '';
    const authorHtml = author
      ? `<span class="${cls(block, '__author')}"${lineAttr(block, 'author')}> by ${escapeHtml(author)}</span>`
      : '';
    const linkHtml = link
      ? `<a href="${safeUrl(link)}" class="${cls(block, '__link')}"${lineAttr(block, 'link')}>Read more</a>`
      : '';
    return `<article class="${cls(block)}">${imgHtml}${sourceHtml}${authorHtml}${md(block)}${linkHtml}</article>`;
  },
};

const category: BlockDefinition = {
  name: 'category',
  contentMode: 'properties',
  isContainer: true,
  targets: {
    title: { label: 'Title' },
  },
  styleHints: {
    self: ['text-align', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'gap', 'opacity', 'box-shadow'],
    title: ['color', 'font-family', 'font-size', 'font-weight', 'margin', 'padding', 'line-height', 'border-width', 'border-style', 'border-color'],
  },
  contentHints: { contentChildren: true },
  compile: (block) => {
    const title = prop(block, 'title');
    const titleHtml = title
      ? `<h2 class="${cls(block, '__title')}"${lineAttr(block, 'title')}>${escapeHtml(title)}</h2>`
      : '';
    return `<section class="${cls(block)}">${titleHtml}{{children}}</section>`;
  },
};

const item: BlockDefinition = {
  name: 'item',
  contentMode: 'mixed',
  targets: {
    img: { label: 'Image' },
    body: { label: 'Body' },
    source: { label: 'Source badge' },
    meta: { label: 'Meta' },
    link: { label: 'Link' },
  },
  styleHints: {
    self: ['display', 'grid-template-columns', 'gap', 'align-items', 'text-align', 'color', 'font-family', 'font-size', 'line-height', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow', 'overflow'],
    img: ['text-align', 'width', 'height', 'max-width', 'aspect-ratio', 'object-fit', 'margin', 'padding', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
    body: ['overflow', 'min-width', 'padding'],
    source: ['color', 'background', 'font-size', 'font-weight', 'padding', 'margin', 'border-radius', 'border-width', 'border-style', 'border-color'],
    meta: ['display', 'color', 'font-size', 'font-weight', 'margin', 'padding', 'opacity', 'letter-spacing'],
    link: ['display', 'text-align', 'color', 'background', 'font-size', 'font-weight', 'padding', 'margin', 'border-radius'],
  },
  contentHints: { contentProps: ['image', 'source', 'date', 'link'], contentBody: true },
  compile: (block) => {
    const img = prop(block, 'image');
    const link = prop(block, 'link');
    const source = prop(block, 'source');
    const date = prop(block, 'date');
    const sourceHtml = source
      ? `<span class="${cls(block, '__source')}"${lineAttr(block, 'source')}>${escapeHtml(source)}</span>`
      : '';
    const metaHtml = date
      ? `<span class="${cls(block, '__meta')}"${lineAttr(block, 'date')}>${escapeHtml(date)}</span>`
      : '';
    const linkHtml = link
      ? `<a href="${safeUrl(link)}" class="${cls(block, '__link')}"${lineAttr(block, 'link')}>Read more \u2192</a>`
      : '';
    const imgHtml = img
      ? `<img src="${safeUrl(img)}" alt="" class="${cls(block, '__img')}" style="display:block;"${lineAttr(block, 'image')}>`
      : '';
    return `<article class="${cls(block)}">${imgHtml}<div class="${cls(block, '__body')}">${sourceHtml}${metaHtml}${md(block)}${linkHtml}</div></article>`;
  },
};

const quickHits: BlockDefinition = {
  name: 'quickHits',
  contentMode: 'text',
  targets: {
    title: { label: 'Title' },
  },
  styleHints: {
    self: ['text-align', 'color', 'font-family', 'font-size', 'line-height', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
    title: ['color', 'font-family', 'font-size', 'font-weight', 'margin', 'padding'],
  },
  contentHints: { contentBody: true },
  compile: (block) => {
    const title = prop(block, 'title');
    const titleHtml = title
      ? `<h2 class="${cls(block, '__title')}"${lineAttr(block, 'title')}>${escapeHtml(title)}</h2>`
      : '';
    return `<div class="${cls(block)}">${titleHtml}${md(block)}</div>`;
  },
};

const tools: BlockDefinition = {
  name: 'tools',
  contentMode: 'mixed',
  isContainer: true,
  targets: {
    title: { label: 'Title' },
  },
  styleHints: {
    self: ['text-align', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'gap', 'opacity', 'box-shadow'],
    title: ['color', 'font-family', 'font-size', 'font-weight', 'margin', 'padding'],
  },
  contentHints: { contentChildren: true },
  compile: (block) => {
    const title = prop(block, 'title');
    const titleHtml = title
      ? `<h2 class="${cls(block, '__title')}"${lineAttr(block, 'title')}>${escapeHtml(title)}</h2>`
      : '';
    return `<div class="${cls(block)}">${titleHtml}{{children}}</div>`;
  },
};

const tipOfTheDay: BlockDefinition = {
  name: 'tipOfTheDay',
  contentMode: 'mixed',
  targets: {
    title: { label: 'Title' },
  },
  styleHints: {
    self: ['text-align', 'color', 'font-family', 'font-size', 'line-height', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
    title: ['color', 'font-family', 'font-size', 'font-weight', 'margin', 'padding'],
  },
  contentHints: { contentBody: true },
  compile: (block) => {
    const title = prop(block, 'title');
    const titleHtml = title
      ? `<strong class="${cls(block, '__title')}"${lineAttr(block, 'title')}>${escapeHtml(title)}</strong>`
      : '';
    return `<aside class="${cls(block)}">${titleHtml}${md(block)}</aside>`;
  },
};

const community: BlockDefinition = {
  name: 'community',
  contentMode: 'mixed',
  targets: {
    quote: { label: 'Quote' },
    author: { label: 'Author' },
  },
  styleHints: {
    self: ['text-align', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
    quote: ['text-align', 'color', 'font-family', 'font-size', 'font-style', 'line-height', 'padding', 'margin', 'border-color', 'border-radius', 'border-width', 'border-style', 'background'],
    author: ['color', 'font-family', 'font-size', 'font-weight', 'margin', 'padding'],
  },
  contentHints: { contentProps: ['author'], contentBody: true },
  compile: (block) => {
    const author = prop(block, 'author');
    const footer = author
      ? `<footer class="${cls(block, '__author')}"${lineAttr(block, 'author')}>\u2014 ${escapeHtml(author)}</footer>`
      : '';
    return `<div class="${cls(block)}"><blockquote class="${cls(block, '__quote')}">${md(block)}${footer}</blockquote></div>`;
  },
};

const personalNote: BlockDefinition = {
  name: 'personalNote',
  contentMode: 'text',
  styleHints: {
    self: ['text-align', 'color', 'font-family', 'font-size', 'font-style', 'line-height', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
  },
  contentHints: { contentBody: true },
  compile: (block) => `<div class="${cls(block)}">${md(block)}</div>`,
};

const poll: BlockDefinition = {
  name: 'poll',
  contentMode: 'mixed',
  targets: {
    question: { label: 'Question' },
    option: { label: 'Option' },
  },
  styleHints: {
    self: ['text-align', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
    question: ['color', 'font-family', 'font-size', 'font-weight', 'margin', 'padding'],
    option: ['display', 'text-align', 'color', 'background', 'font-size', 'font-weight', 'padding', 'margin', 'border-radius', 'border-width', 'border-style', 'border-color'],
  },
  contentHints: { contentProps: ['question', 'option1', 'option2', 'option3', 'option4'], contentBody: true },
  compile: (block, ctx) => {
    const question = prop(block, 'question') ?? block.content.split('\n')[0] ?? '';
    if (!question) {
      requireProp(block, 'question', ctx);
      return errorHtml('poll block requires "question" property', block.position.start.line);
    }
    const action = prop(block, 'action');
    const pollId = prop(block, 'id');
    const options = [
      prop(block, 'option1'),
      prop(block, 'option2'),
      prop(block, 'option3'),
      prop(block, 'option4'),
    ].filter((v): v is string => v !== undefined);
    const optionsHtml = options
      .map((opt, i) => {
        if (action) {
          const params = new URLSearchParams();
          if (pollId) params.set('pollId', pollId);
          params.set('choice', String(i + 1));
          params.set('label', opt);
          const href = `${action}${action.includes('?') ? '&' : '?'}${params.toString()}`;
          return `<a href="${safeUrl(href)}" class="${cls(block, '__option')}">${escapeHtml(opt)}</a>`;
        }
        return `<span class="${cls(block, '__option')}">${escapeHtml(opt)}</span>`;
      })
      .join('\n');
    const attrs = [
      action ? ` data-poll-action="${escapeHtml(action)}"` : '',
      pollId ? ` data-poll-id="${escapeHtml(pollId)}"` : '',
    ].join('');
    return `<div class="${cls(block)}"${attrs}><h3 class="${cls(block, '__question')}"${lineAttr(block, 'question')}>${escapeHtml(question)}</h3>${optionsHtml}</div>`;
  },
};

const recommendations: BlockDefinition = {
  name: 'recommendations',
  contentMode: 'text',
  targets: {
    title: { label: 'Title' },
  },
  styleHints: {
    self: ['text-align', 'color', 'font-family', 'font-size', 'line-height', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
    title: ['color', 'font-family', 'font-size', 'font-weight', 'margin', 'padding'],
  },
  contentHints: { contentBody: true },
  compile: (block) => {
    const title = prop(block, 'title');
    const titleHtml = title
      ? `<h2 class="${cls(block, '__title')}"${lineAttr(block, 'title')}>${escapeHtml(title)}</h2>`
      : '';
    return `<div class="${cls(block)}">${titleHtml}${md(block)}</div>`;
  },
};

const sponsor: BlockDefinition = {
  name: 'sponsor',
  contentMode: 'mixed',
  targets: {
    badge: { label: 'Badge' },
    img: { label: 'Image' },
    link: { label: 'Link' },
  },
  styleHints: {
    self: ['text-align', 'color', 'font-family', 'font-size', 'line-height', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
    badge: ['color', 'background', 'font-size', 'font-weight', 'padding', 'margin', 'border-radius', 'border-width', 'border-style', 'border-color'],
    img: ['text-align', 'width', 'height', 'max-width', 'margin', 'padding', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
    link: ['display', 'text-align', 'color', 'background', 'font-size', 'font-weight', 'padding', 'margin', 'border-radius'],
  },
  contentHints: { contentProps: ['image', 'link', 'label'], contentBody: true },
  compile: (block) => {
    const img = prop(block, 'image');
    const link = prop(block, 'link');
    const label = prop(block, 'label');
    const imgHtml = img
      ? `<img src="${safeUrl(img)}" alt="" class="${cls(block, '__img')}" style="display:block;"${lineAttr(block, 'image')}>`
      : '';
    const linkHtml = link && label
      ? `<a href="${safeUrl(link)}" class="${cls(block, '__link')}"${lineAttr(block, 'link')}>${escapeHtml(label)}</a>`
      : '';
    return `<aside class="${cls(block)}"><span class="${cls(block, '__badge')}">Sponsored</span>${imgHtml}${md(block)}${linkHtml}</aside>`;
  },
};

const outro: BlockDefinition = {
  name: 'outro',
  contentMode: 'mixed',
  targets: {
    cta: { label: 'CTA button' },
  },
  styleHints: {
    self: ['text-align', 'color', 'font-family', 'font-size', 'font-style', 'line-height', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
    cta: ['display', 'text-align', 'color', 'font-family', 'background', 'font-size', 'font-weight', 'padding', 'margin', 'border-radius', 'border-width', 'border-style', 'border-color', 'box-shadow'],
  },
  contentHints: { contentBody: true },
  compile: (block) => {
    const ctaUrl = prop(block, 'ctaUrl');
    const ctaText = prop(block, 'ctaText');
    const ctaHtml = ctaUrl && ctaText
      ? `<a href="${safeUrl(ctaUrl)}" class="${cls(block, '__cta')}"${lineAttr(block, 'ctaUrl', 'ctaText')}>${escapeHtml(ctaText)}</a>`
      : '';
    return `<div class="${cls(block)}">${md(block)}${ctaHtml}</div>`;
  },
};

const custom: BlockDefinition = {
  name: 'custom',
  contentMode: 'mixed',
  targets: {
    title: { label: 'Title' },
  },
  styleHints: {
    self: ['text-align', 'color', 'font-family', 'font-size', 'font-weight', 'line-height', 'padding', 'margin', 'background', 'border-radius', 'border-width', 'border-style', 'border-color', 'opacity', 'box-shadow'],
    title: ['color', 'font-family', 'font-size', 'font-weight', 'margin', 'padding'],
  },
  contentHints: { contentBody: true },
  compile: (block) => {
    const title = prop(block, 'title');
    const titleHtml = title
      ? `<h2 class="${cls(block, '__title')}"${lineAttr(block, 'title')}>${escapeHtml(title)}</h2>`
      : '';
    return `<div class="${cls(block)}">${titleHtml}${md(block)}</div>`;
  },
};

export const NEWSLETTER_BLOCKS: BlockDefinition[] = [
  intro, featured, category, item, quickHits, tools, tipOfTheDay,
  community, personalNote, poll, recommendations, sponsor, outro, custom,
];

// ---------------------------------------------------------------------------
// Reverse parsing helpers
// ---------------------------------------------------------------------------

function mkBlock(blockType: string, props: Record<string, string>, content: string, label?: string): ParsedBlock {
  return { blockType, properties: props, content, children: [], label };
}

// ---------------------------------------------------------------------------
// Reverse parsers for each newsletter block
// ---------------------------------------------------------------------------

function parseIntro(html: string): ParsedBlock {
  const inner = extractInnerHtml(html, 'mkly-newsletter-intro');
  return mkBlock('newsletter/intro', {}, inner ? htmlToMarkdown(inner) : '');
}

function parseFeatured(html: string): ParsedBlock {
  const props: Record<string, string> = {};
  const img = extractAttrByClass(html, 'mkly-newsletter-featured__img', 'src');
  if (img) props.image = img;
  const source = extractTextContent(html, 'mkly-newsletter-featured__source');
  if (source) props.source = source;
  const authorText = extractTextContent(html, 'mkly-newsletter-featured__author');
  if (authorText) props.author = authorText.replace(/^by\s+/i, '');
  const link = extractAttrByClass(html, 'mkly-newsletter-featured__link', 'href');
  if (link) props.link = link;
  let inner = extractInnerHtml(html, 'mkly-newsletter-featured') ?? '';
  inner = stripElementsByClass(inner, 'mkly-newsletter-featured__img', 'mkly-newsletter-featured__source', 'mkly-newsletter-featured__author', 'mkly-newsletter-featured__link');
  return mkBlock('newsletter/featured', props, htmlToMarkdown(inner));
}

function parseCategory(html: string): ParsedBlock {
  const title = extractTextContent(html, 'mkly-newsletter-category__title');
  return mkBlock('newsletter/category', title ? { title } : {}, '');
}

function parseItem(html: string): ParsedBlock {
  const props: Record<string, string> = {};
  const img = extractAttrByClass(html, 'mkly-newsletter-item__img', 'src');
  if (img) props.image = img;
  const source = extractTextContent(html, 'mkly-newsletter-item__source');
  if (source) props.source = source;
  const date = extractTextContent(html, 'mkly-newsletter-item__meta');
  if (date) props.date = date;
  const link = extractAttrByClass(html, 'mkly-newsletter-item__link', 'href');
  if (link) props.link = link;
  const bodyInner = extractInnerHtml(html, 'mkly-newsletter-item__body');
  let inner = bodyInner ?? extractInnerHtml(html, 'mkly-newsletter-item') ?? '';
  inner = stripElementsByClass(inner, 'mkly-newsletter-item__img', 'mkly-newsletter-item__source', 'mkly-newsletter-item__meta', 'mkly-newsletter-item__link');
  return mkBlock('newsletter/item', props, htmlToMarkdown(inner));
}

function parseQuickHits(html: string): ParsedBlock {
  const props: Record<string, string> = {};
  const title = extractTextContent(html, 'mkly-newsletter-quickHits__title');
  if (title) props.title = title;
  let inner = extractInnerHtml(html, 'mkly-newsletter-quickHits') ?? '';
  inner = stripElementsByClass(inner, 'mkly-newsletter-quickHits__title');
  return mkBlock('newsletter/quickHits', props, htmlToMarkdown(inner));
}

function parseTools(html: string): ParsedBlock {
  const title = extractTextContent(html, 'mkly-newsletter-tools__title');
  return mkBlock('newsletter/tools', title ? { title } : {}, '');
}

function parseTipOfTheDay(html: string): ParsedBlock {
  const props: Record<string, string> = {};
  const title = extractTextContent(html, 'mkly-newsletter-tipOfTheDay__title');
  if (title) props.title = title;
  let inner = extractInnerHtml(html, 'mkly-newsletter-tipOfTheDay') ?? '';
  inner = stripElementsByClass(inner, 'mkly-newsletter-tipOfTheDay__title');
  return mkBlock('newsletter/tipOfTheDay', props, htmlToMarkdown(inner));
}

function parseCommunity(html: string): ParsedBlock {
  const props: Record<string, string> = {};
  const authorText = extractTextContent(html, 'mkly-newsletter-community__author');
  if (authorText) props.author = authorText.replace(/^\u2014\s*/, '');
  const quoteInner = extractInnerHtml(html, 'mkly-newsletter-community__quote') ?? '';
  const cleaned = stripElementsByClass(quoteInner, 'mkly-newsletter-community__author');
  return mkBlock('newsletter/community', props, htmlToMarkdown(cleaned));
}

function parsePersonalNote(html: string): ParsedBlock {
  const inner = extractInnerHtml(html, 'mkly-newsletter-personalNote');
  return mkBlock('newsletter/personalNote', {}, inner ? htmlToMarkdown(inner) : '');
}

function parsePoll(html: string): ParsedBlock {
  const props: Record<string, string> = {};
  const question = extractTextContent(html, 'mkly-newsletter-poll__question');
  if (question) props.question = question;
  const actionMatch = html.match(/data-poll-action="([^"]*)"/);
  if (actionMatch) props.action = actionMatch[1];
  const idMatch = html.match(/data-poll-id="([^"]*)"/);
  if (idMatch) props.id = idMatch[1];
  const optionMatches = html.matchAll(/<(?:span|a)\b[^>]*\bmkly-newsletter-poll__option\b[^>]*>([^<]*)<\/(?:span|a)>/gi);
  let i = 1;
  for (const m of optionMatches) {
    props[`option${i}`] = m[1].trim();
    i++;
  }
  return mkBlock('newsletter/poll', props, '');
}

function parseRecommendations(html: string): ParsedBlock {
  const props: Record<string, string> = {};
  const title = extractTextContent(html, 'mkly-newsletter-recommendations__title');
  if (title) props.title = title;
  let inner = extractInnerHtml(html, 'mkly-newsletter-recommendations') ?? '';
  inner = stripElementsByClass(inner, 'mkly-newsletter-recommendations__title');
  return mkBlock('newsletter/recommendations', props, htmlToMarkdown(inner));
}

function parseSponsor(html: string): ParsedBlock {
  const props: Record<string, string> = {};
  const img = extractAttrByClass(html, 'mkly-newsletter-sponsor__img', 'src');
  if (img) props.image = img;
  const link = extractAttrByClass(html, 'mkly-newsletter-sponsor__link', 'href');
  if (link) props.link = link;
  const label = extractTextContent(html, 'mkly-newsletter-sponsor__link');
  if (label) props.label = label;
  let inner = extractInnerHtml(html, 'mkly-newsletter-sponsor') ?? '';
  inner = stripElementsByClass(inner, 'mkly-newsletter-sponsor__badge', 'mkly-newsletter-sponsor__img', 'mkly-newsletter-sponsor__link');
  return mkBlock('newsletter/sponsor', props, htmlToMarkdown(inner));
}

function parseOutro(html: string): ParsedBlock {
  const props: Record<string, string> = {};
  const ctaUrl = extractAttrByClass(html, 'mkly-newsletter-outro__cta', 'href');
  if (ctaUrl) props.ctaUrl = ctaUrl;
  const ctaText = extractTextContent(html, 'mkly-newsletter-outro__cta');
  if (ctaText) props.ctaText = ctaText;
  let inner = extractInnerHtml(html, 'mkly-newsletter-outro') ?? '';
  inner = stripElementsByClass(inner, 'mkly-newsletter-outro__cta');
  return mkBlock('newsletter/outro', props, htmlToMarkdown(inner));
}

function parseCustom(html: string): ParsedBlock {
  const props: Record<string, string> = {};
  const title = extractTextContent(html, 'mkly-newsletter-custom__title');
  if (title) props.title = title;
  let inner = extractInnerHtml(html, 'mkly-newsletter-custom') ?? '';
  inner = stripElementsByClass(inner, 'mkly-newsletter-custom__title');
  return mkBlock('newsletter/custom', props, htmlToMarkdown(inner));
}

const NEWSLETTER_REVERSE: ReverseBlockHandler[] = [
  { cssClass: 'mkly-newsletter-intro', blockType: 'newsletter/intro', parse: parseIntro },
  { cssClass: 'mkly-newsletter-featured', blockType: 'newsletter/featured', parse: parseFeatured },
  { cssClass: 'mkly-newsletter-category', blockType: 'newsletter/category', parse: parseCategory },
  { cssClass: 'mkly-newsletter-item', blockType: 'newsletter/item', parse: parseItem },
  { cssClass: 'mkly-newsletter-quickHits', blockType: 'newsletter/quickHits', parse: parseQuickHits },
  { cssClass: 'mkly-newsletter-tools', blockType: 'newsletter/tools', parse: parseTools },
  { cssClass: 'mkly-newsletter-tipOfTheDay', blockType: 'newsletter/tipOfTheDay', parse: parseTipOfTheDay },
  { cssClass: 'mkly-newsletter-community', blockType: 'newsletter/community', parse: parseCommunity },
  { cssClass: 'mkly-newsletter-personalNote', blockType: 'newsletter/personalNote', parse: parsePersonalNote },
  { cssClass: 'mkly-newsletter-poll', blockType: 'newsletter/poll', parse: parsePoll },
  { cssClass: 'mkly-newsletter-recommendations', blockType: 'newsletter/recommendations', parse: parseRecommendations },
  { cssClass: 'mkly-newsletter-sponsor', blockType: 'newsletter/sponsor', parse: parseSponsor },
  { cssClass: 'mkly-newsletter-outro', blockType: 'newsletter/outro', parse: parseOutro },
  { cssClass: 'mkly-newsletter-custom', blockType: 'newsletter/custom', parse: parseCustom },
];

const NEWSLETTER_DOCS: Record<string, BlockDocs> = {
  'newsletter/intro': {
    displayName: 'Intro',
    icon: 'intro',
    color: '#a855f7',
    summary: 'Opening paragraph for the newsletter. Sets the tone and hooks the reader.',
    usage: '--- newsletter/intro\n\nWelcome back! This week we dive into the latest **developer tools** and community highlights.',
    htmlPreview: '<div class="mkly-newsletter-intro"><p>Welcome back! This week we dive into the latest <strong>developer tools</strong> and community highlights.</p></div>',
    properties: [],
    tips: ['Supports full markdown', 'Keep it concise — 2-3 sentences max'],
  },
  'newsletter/featured': {
    displayName: 'Featured',
    icon: 'featured',
    color: '#eab308',
    summary: 'Highlighted article with image, source badge, author, and read-more link.',
    usage: '--- newsletter/featured\nimage: https://picsum.photos/seed/mkly-featured/600/300\nsource: TechCrunch\nauthor: Jane Smith\nlink: https://example.com/article\n\nA breakthrough in AI-powered code review tools is changing how teams ship software.',
    htmlPreview: '<article class="mkly-newsletter-featured"><img src="https://picsum.photos/seed/mkly-featured/600/300" alt="" class="mkly-newsletter-featured__img" style="display:block;width:100%;border-radius:6px;"><span class="mkly-newsletter-featured__source">TechCrunch</span><span class="mkly-newsletter-featured__author"> by Jane Smith</span><p>A breakthrough in AI-powered code review tools is changing how teams ship software.</p><a href="https://example.com/article" class="mkly-newsletter-featured__link">Read more</a></article>',
    properties: [
      { name: 'image', description: 'Featured image URL', example: 'https://example.com/feature.jpg' },
      { name: 'source', description: 'Publication or source name', example: 'TechCrunch' },
      { name: 'author', description: 'Article author', example: 'Jane Smith' },
      { name: 'link', description: 'Link to the full article', example: 'https://example.com/article' },
    ],
    tips: ['Image spans full width', 'Source renders as an accent badge', 'Content supports markdown for the editorial summary'],
  },
  'newsletter/category': {
    displayName: 'Category',
    icon: 'category',
    color: '#d946ef',
    summary: 'Container that groups related items under a titled section.',
    usage: '--- newsletter/category\ntitle: Frontend\n\n--- newsletter/item\nlink: https://example.com\n\nReact 20 ships with built-in signals.\n\n--- /newsletter/category',
    htmlPreview: '<section class="mkly-newsletter-category"><h2 class="mkly-newsletter-category__title">Frontend</h2><!-- child items --></section>',
    properties: [
      { name: 'title', description: 'Category heading text', example: 'Frontend' },
    ],
    tips: ['Set the title via the title: property', 'This is a container — close with --- /newsletter/category', 'Nest item blocks inside for content'],
  },
  'newsletter/item': {
    displayName: 'Item',
    icon: 'item',
    color: '#ec4899',
    summary: 'Individual content item with thumbnail, source badge, date, and link.',
    usage: '--- newsletter/item\nimage: https://picsum.photos/seed/mkly-item/240/160\nsource: GitHub Blog\ndate: Feb 18, 2026\nlink: https://example.com/post\n\nGitHub Copilot now supports inline refactoring suggestions.',
    htmlPreview: '<article class="mkly-newsletter-item"><img src="https://picsum.photos/seed/mkly-item/240/160" alt="" class="mkly-newsletter-item__img" style="display:block;"><div class="mkly-newsletter-item__body"><span class="mkly-newsletter-item__source">GitHub Blog</span><span class="mkly-newsletter-item__meta">Feb 18, 2026</span><p>GitHub Copilot now supports inline refactoring suggestions.</p><a href="https://example.com/post" class="mkly-newsletter-item__link">Read more \u2192</a></div></article>',
    properties: [
      { name: 'image', description: 'Thumbnail image URL', example: 'https://example.com/thumb.jpg' },
      { name: 'source', description: 'Source publication name', example: 'GitHub Blog' },
      { name: 'date', description: 'Publication date or metadata text', example: 'Feb 18, 2026' },
      { name: 'link', description: 'Link to full article', example: 'https://example.com/post' },
    ],
    tips: ['Image floats right at max 120px width', 'Body wrapper enables modern grid layouts in presets', 'Typically nested inside a category block', 'Content is the editorial summary'],
  },
  'newsletter/quickHits': {
    displayName: 'Quick Hits',
    icon: 'quickHits',
    color: '#f59e0b',
    summary: 'Compact list of brief news items or links in a highlighted box.',
    usage: '--- newsletter/quickHits\ntitle: Quick Hits\n\n- [Bun 2.0 released](https://example.com) — 3x faster installs\n- [TypeScript 6.0 beta](https://example.com) — new pattern matching\n- [Deno adds npm compat](https://example.com) — drop-in replacement',
    htmlPreview: '<div class="mkly-newsletter-quickHits"><h2 class="mkly-newsletter-quickHits__title">Quick Hits</h2><ul><li><a href="https://example.com">Bun 2.0 released</a> — 3x faster installs</li></ul></div>',
    properties: [
      { name: 'title', description: 'Section title', example: 'Quick Hits' },
    ],
    tips: ['Use markdown lists with inline links', 'Renders on a subtle background for visual distinction', 'Set the title via the title: property'],
  },
  'newsletter/tools': {
    displayName: 'Tools',
    icon: 'tools',
    color: '#f97316',
    summary: 'Container for tool/resource recommendations, grouping child items.',
    usage: '--- newsletter/tools\ntitle: Tools of the Week\n\n--- newsletter/item\nlink: https://example.com/tool\n\nA fantastic new debugging tool.\n\n--- /newsletter/tools',
    htmlPreview: '<div class="mkly-newsletter-tools"><h2 class="mkly-newsletter-tools__title">Tools of the Week</h2><!-- child items --></div>',
    properties: [
      { name: 'title', description: 'Section title', example: 'Tools of the Week' },
    ],
    tips: ['This is a container — close with --- /newsletter/tools', 'Nest item or card blocks inside', 'Set the title via the title: property'],
  },
  'newsletter/tipOfTheDay': {
    displayName: 'Tip of the Day',
    icon: 'tipOfTheDay',
    color: '#84cc16',
    summary: 'Callout box for a tip, trick, or piece of advice.',
    usage: '--- newsletter/tipOfTheDay\ntitle: Pro Tip\n\nUse `git stash --keep-index` to stash only unstaged changes.',
    htmlPreview: '<aside class="mkly-newsletter-tipOfTheDay"><strong class="mkly-newsletter-tipOfTheDay__title">Pro Tip</strong><p>Use <code>git stash --keep-index</code> to stash only unstaged changes.</p></aside>',
    properties: [
      { name: 'title', description: 'Tip heading', example: 'Pro Tip' },
    ],
    tips: ['Renders with a yellow/amber accent border', 'Content supports markdown including inline code'],
  },
  'newsletter/community': {
    displayName: 'Community',
    icon: 'community',
    color: '#14b8a6',
    summary: 'Community spotlight — a quote or highlight from a reader/community member.',
    usage: '--- newsletter/community\nauthor: Sarah K.\n\nThis newsletter helped me land my first developer job. The tool recommendations were spot on!',
    htmlPreview: '<div class="mkly-newsletter-community"><blockquote class="mkly-newsletter-community__quote"><p>This newsletter helped me land my first developer job.</p><footer class="mkly-newsletter-community__author">\u2014 Sarah K.</footer></blockquote></div>',
    properties: [
      { name: 'author', description: 'Community member name', example: 'Sarah K.' },
    ],
    tips: ['Renders as an italicized blockquote with accent border', 'Author is prefixed with an em dash'],
  },
  'newsletter/personalNote': {
    displayName: 'Personal Note',
    icon: 'personalNote',
    color: '#f43f5e',
    summary: 'Author\'s personal note — an informal, first-person aside.',
    usage: '--- newsletter/personalNote\n\nI\'ve been experimenting with local LLMs this week and I\'m genuinely impressed by how far they\'ve come.',
    htmlPreview: '<div class="mkly-newsletter-personalNote"><p>I\'ve been experimenting with local LLMs this week and I\'m genuinely impressed by how far they\'ve come.</p></div>',
    properties: [],
    tips: ['Renders in italic on a warm background', 'Supports full markdown', 'Best for 1-2 short paragraphs'],
  },
  'newsletter/poll': {
    displayName: 'Poll',
    icon: 'poll',
    color: '#6366f1',
    summary: 'Interactive poll with a question and up to 4 clickable options. When action URL is set, each option becomes a vote link.',
    usage: '--- newsletter/poll\nquestion: What framework do you use most?\naction: https://example.com/api/vote\nid: fw-poll-2026\noption1: React\noption2: Vue\noption3: Svelte\noption4: Angular',
    htmlPreview: '<div class="mkly-newsletter-poll" data-poll-action="https://example.com/api/vote" data-poll-id="fw-poll-2026"><h3 class="mkly-newsletter-poll__question">What framework do you use most?</h3><a href="#" class="mkly-newsletter-poll__option">React</a><a href="#" class="mkly-newsletter-poll__option">Vue</a><a href="#" class="mkly-newsletter-poll__option">Svelte</a><a href="#" class="mkly-newsletter-poll__option">Angular</a></div>',
    properties: [
      { name: 'question', description: 'Poll question text', required: true, example: 'What framework do you use most?' },
      { name: 'action', description: 'Vote endpoint URL — each option links to this URL with pollId, choice (1-based index), and label as query params', example: 'https://example.com/api/vote' },
      { name: 'id', description: 'Unique poll identifier sent as pollId query param', example: 'fw-poll-2026' },
      { name: 'option1', description: 'First option', example: 'React' },
      { name: 'option2', description: 'Second option', example: 'Vue' },
      { name: 'option3', description: 'Third option', example: 'Svelte' },
      { name: 'option4', description: 'Fourth option', example: 'Angular' },
    ],
    tips: [
      'Question is required, supports 2-4 options',
      'Set action URL to make options clickable vote links',
      'Each click sends: {action}?pollId={id}&choice={n}&label={optionText}',
      'Without action, options render as static text',
      'Options highlight on hover with the accent color',
    ],
  },
  'newsletter/recommendations': {
    displayName: 'Recommendations',
    icon: 'recommendations',
    color: '#10b981',
    summary: 'Curated list of recommended resources, tools, or reads.',
    usage: '--- newsletter/recommendations\ntitle: Recommended Reads\n\n- [Designing Data-Intensive Applications](https://example.com) — Essential for backend engineers\n- [The Pragmatic Programmer](https://example.com) — Timeless software wisdom',
    htmlPreview: '<div class="mkly-newsletter-recommendations"><h2 class="mkly-newsletter-recommendations__title">Recommended Reads</h2><ul><li><a href="https://example.com">Designing Data-Intensive Applications</a></li></ul></div>',
    properties: [
      { name: 'title', description: 'Section title', example: 'Recommended Reads' },
    ],
    tips: ['Use markdown lists with links', 'Set the title via the title: property'],
  },
  'newsletter/sponsor': {
    displayName: 'Sponsor',
    icon: 'sponsor',
    color: '#d97706',
    summary: 'Sponsored content block with badge, image, description, and link.',
    usage: '--- newsletter/sponsor\nimage: https://picsum.photos/seed/mkly-sponsor/400/200\nlink: https://sponsor.example.com\nlabel: Try it free\n\nBuild and deploy full-stack apps in minutes with **SuperCloud**.',
    htmlPreview: '<aside class="mkly-newsletter-sponsor"><span class="mkly-newsletter-sponsor__badge">Sponsored</span><img src="https://picsum.photos/seed/mkly-sponsor/400/200" alt="" class="mkly-newsletter-sponsor__img" style="display:block;max-width:100%;border-radius:6px;"><p>Build and deploy full-stack apps in minutes with <strong>SuperCloud</strong>.</p><a href="https://sponsor.example.com" class="mkly-newsletter-sponsor__link">Try it free</a></aside>',
    properties: [
      { name: 'image', description: 'Sponsor image/logo URL', example: 'https://example.com/sponsor.png' },
      { name: 'link', description: 'Sponsor link URL', example: 'https://sponsor.example.com' },
      { name: 'label', description: 'CTA link text', example: 'Try it free' },
    ],
    tips: ['Automatically includes a "Sponsored" badge', 'Rendered with a dashed border for visual distinction', 'Both link and label are needed for the CTA to appear'],
  },
  'newsletter/outro': {
    displayName: 'Outro',
    icon: 'outro',
    color: '#7c3aed',
    summary: 'Closing section with sign-off text and optional CTA button.',
    usage: '--- newsletter/outro\nctaUrl: https://example.com/share\nctaText: Share this issue\n\nThanks for reading! See you next week.',
    htmlPreview: '<div class="mkly-newsletter-outro"><p>Thanks for reading! See you next week.</p><a href="https://example.com/share" class="mkly-newsletter-outro__cta">Share this issue</a></div>',
    properties: [
      { name: 'ctaUrl', description: 'CTA button URL', example: 'https://example.com/share' },
      { name: 'ctaText', description: 'CTA button label', example: 'Share this issue' },
    ],
    tips: ['Both ctaUrl and ctaText are needed for the button to render', 'Content is centered by default', 'Content supports markdown'],
  },
  'newsletter/custom': {
    displayName: 'Custom',
    icon: 'custom',
    color: '#64748b',
    summary: 'Freeform section for any content that doesn\'t fit other block types.',
    usage: '--- newsletter/custom\ntitle: Behind the Scenes\n\nHere\'s a peek at what we\'re building next month.',
    htmlPreview: '<div class="mkly-newsletter-custom"><h2 class="mkly-newsletter-custom__title">Behind the Scenes</h2><p>Here\'s a peek at what we\'re building next month.</p></div>',
    properties: [
      { name: 'title', description: 'Section title', example: 'Behind the Scenes' },
    ],
    tips: ['Set the title via the title: property', 'Content supports full markdown', 'Use when no other block type fits'],
  },
};

const NEWSLETTER_KEYFRAMES: Record<string, string> = {
  revealCard: 'from{opacity:0;transform:translateY(12px) scale(0.98)}to{opacity:1;transform:translateY(0) scale(1)}',
  highlightPulse: '0%{box-shadow:0 0 0 0 var(--mkly-accent)}70%{box-shadow:0 0 0 8px transparent}100%{box-shadow:0 0 0 0 transparent}',
};

const NEWSLETTER_BASE_STYLES = `/* newsletter kit — base structural styles */

.mkly-document {
  padding: 0 24px;
  --_gs: var(--mkly-gap-scale, 1);
}

/* ── intro ── */
.mkly-newsletter-intro {
  font-size: 1.06em;
  line-height: 1.75;
  margin: 0 0 calc(24px * var(--_gs));
}
.mkly-newsletter-intro p { margin: 0 0 0.8em; }
.mkly-newsletter-intro p:last-child { margin-bottom: 0; }
.mkly-newsletter-intro a { font-weight: 600; }

/* ── featured ── */
.mkly-newsletter-featured {
  margin: 0 0 calc(24px * var(--_gs));
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-radius: var(--mkly-radius, 8px);
  overflow: hidden;
}
.mkly-newsletter-featured__img {
  width: 100%;
  display: block;
}
.mkly-newsletter-featured__source {
  display: inline-block;
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 18px 20px 6px;
  line-height: 1.3;
}
.mkly-newsletter-featured__author {
  font-size: 0.85em;
  margin: 0 20px 6px;
  line-height: 1.4;
  font-weight: 500;
}
.mkly-newsletter-featured p {
  margin: 6px 20px 12px;
  line-height: 1.65;
  font-size: 0.95em;
}
.mkly-newsletter-featured__link {
  display: inline-block;
  margin: 4px 20px 20px;
  font-weight: 600;
  font-size: 0.88em;
  text-decoration: none;
  letter-spacing: 0.01em;
}

/* ── category ── */
.mkly-newsletter-category {
  margin: 0 0 calc(24px * var(--_gs));
  padding-top: calc(24px * var(--_gs));
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: transparent;
}
.mkly-newsletter-category__title {
  font-size: 1.25em;
  font-weight: 700;
  margin: 0 0 16px;
  padding-bottom: 10px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  letter-spacing: -0.015em;
  line-height: 1.3;
}

/* ── item ── */
.mkly-newsletter-item {
  padding: 16px 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  position: relative;
}
.mkly-newsletter-item:last-child { border-bottom: none; }
.mkly-newsletter-item::after {
  content: '';
  display: table;
  clear: both;
}
.mkly-newsletter-item__img {
  max-width: 120px;
  float: right;
  margin-left: 16px;
  margin-bottom: 8px;
  border-radius: var(--mkly-radius, 8px);
  display: block;
}
.mkly-newsletter-item__body {
  overflow: hidden;
  min-width: 0;
}
.mkly-newsletter-item__source {
  display: inline-block;
  font-size: 0.7em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: 6px;
  line-height: 1.3;
}
.mkly-newsletter-item__meta {
  display: block;
  font-size: 0.75em;
  line-height: 1.4;
  margin-bottom: 6px;
  opacity: 0.6;
}
.mkly-newsletter-item p {
  margin: 0 0 8px;
  line-height: 1.65;
  font-size: 0.95em;
}
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
  letter-spacing: 0.01em;
}

/* ── quickHits ── */
.mkly-newsletter-quickHits {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 20px 24px;
  border-radius: var(--mkly-radius, 8px);
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
}
.mkly-newsletter-quickHits__title {
  font-size: 1.1em;
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
  line-height: 1.3;
}
.mkly-newsletter-quickHits ul {
  margin: 0;
  padding-left: 1.4em;
}
.mkly-newsletter-quickHits li {
  margin-bottom: 8px;
  line-height: 1.6;
  font-size: 0.95em;
}
.mkly-newsletter-quickHits li:last-child { margin-bottom: 0; }
.mkly-newsletter-quickHits a { font-weight: 600; }

/* ── tools ── */
.mkly-newsletter-tools {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 20px 24px;
  border-radius: var(--mkly-radius, 8px);
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
}
.mkly-newsletter-tools__title {
  font-size: 1.1em;
  font-weight: 700;
  margin: 0 0 14px;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

/* ── tipOfTheDay ── */
.mkly-newsletter-tipOfTheDay {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 20px 24px;
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: transparent;
  line-height: 1.65;
}
.mkly-newsletter-tipOfTheDay__title {
  display: block;
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 1em;
  letter-spacing: 0.01em;
}
.mkly-newsletter-tipOfTheDay p {
  margin: 0 0 8px;
  font-size: 0.95em;
}
.mkly-newsletter-tipOfTheDay p:last-child { margin-bottom: 0; }

/* ── community ── */
.mkly-newsletter-community {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 24px 28px;
  border-radius: var(--mkly-radius, 8px);
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
}
.mkly-newsletter-community__quote {
  font-style: italic;
  margin: 0;
  padding: 22px 28px 22px 32px;
  border-left-width: 4px;
  border-left-style: solid;
  border-left-color: transparent;
  border-radius: 0 var(--mkly-radius, 8px) var(--mkly-radius, 8px) 0;
  line-height: 1.75;
  font-size: 1.04em;
}
.mkly-newsletter-community__quote p { margin: 0 0 0.5em; }
.mkly-newsletter-community__quote p:last-of-type { margin-bottom: 0; }
.mkly-newsletter-community__author {
  display: block;
  margin-top: 14px;
  padding-top: 12px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: transparent;
  font-size: 0.86em;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.01em;
}

/* ── personalNote ── */
.mkly-newsletter-personalNote {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 20px 24px;
  font-style: italic;
  border-radius: var(--mkly-radius, 8px);
  line-height: 1.75;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
}
.mkly-newsletter-personalNote p { margin: 0 0 0.8em; }
.mkly-newsletter-personalNote p:last-child { margin-bottom: 0; }

/* ── poll ── */
.mkly-newsletter-poll {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 24px;
  border-radius: var(--mkly-radius, 8px);
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
}
.mkly-newsletter-poll__question {
  font-size: 1.1em;
  font-weight: 700;
  margin: 0 0 16px;
  line-height: 1.35;
  letter-spacing: -0.01em;
}
.mkly-newsletter-poll__option {
  display: block;
  margin: 8px 0;
  padding: 12px 16px;
  font-size: 0.95em;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  border-radius: var(--mkly-radius, 8px);
  line-height: 1.4;
  text-align: center;
}

/* ── recommendations ── */
.mkly-newsletter-recommendations {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 20px 24px;
  border-radius: var(--mkly-radius, 8px);
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
}
.mkly-newsletter-recommendations__title {
  font-size: 1.1em;
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
  line-height: 1.3;
}
.mkly-newsletter-recommendations ul {
  margin: 0;
  padding-left: 1.4em;
}
.mkly-newsletter-recommendations li {
  margin-bottom: 8px;
  line-height: 1.6;
  font-size: 0.95em;
}
.mkly-newsletter-recommendations li:last-child { margin-bottom: 0; }
.mkly-newsletter-recommendations a { font-weight: 600; }

/* ── sponsor ── */
.mkly-newsletter-sponsor {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 20px 24px;
  border-width: 1px;
  border-style: dashed;
  border-color: transparent;
  border-radius: var(--mkly-radius, 8px);
}
.mkly-newsletter-sponsor__badge {
  display: inline-block;
  font-size: 0.62em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: 10px;
  line-height: 1.3;
}
.mkly-newsletter-sponsor__img {
  max-width: 100%;
  display: block;
  margin-bottom: 12px;
  border-radius: var(--mkly-radius, 8px);
}
.mkly-newsletter-sponsor p {
  margin: 0 0 8px;
  line-height: 1.65;
  font-size: 0.95em;
}
.mkly-newsletter-sponsor__link {
  display: inline-block;
  margin-top: 8px;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none;
  letter-spacing: 0.01em;
}

/* ── outro ── */
.mkly-newsletter-outro {
  margin: 0 0 calc(24px * var(--_gs));
  text-align: center;
  padding: 24px;
}
.mkly-newsletter-outro p {
  margin: 0 0 8px;
  line-height: 1.7;
  font-size: 1.02em;
}
.mkly-newsletter-outro .mkly-newsletter-outro__cta {
  display: inline-block;
  margin-top: 16px;
  font-weight: 600;
  font-size: 0.9em;
  text-decoration: none !important;
  padding: 12px 28px;
  border-radius: var(--mkly-radius, 8px);
  letter-spacing: 0.01em;
  line-height: 1.4;
}

/* ── custom ── */
.mkly-newsletter-custom {
  margin: 0 0 calc(24px * var(--_gs));
  padding: 20px 24px;
  border-radius: var(--mkly-radius, 8px);
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
}
.mkly-newsletter-custom__title {
  font-size: 1.1em;
  font-weight: 700;
  margin: 0 0 12px;
  letter-spacing: -0.01em;
  line-height: 1.3;
}
.mkly-newsletter-custom p {
  margin: 0 0 8px;
  line-height: 1.65;
  font-size: 0.95em;
}`;

export const NEWSLETTER_KIT: MklyKit = {
  name: 'newsletter',
  displayName: 'Newsletter',
  description: 'Newsletter-specific blocks for email content',
  versions: { supported: [1], current: 1 },
  blocks: NEWSLETTER_BLOCKS,
  schemas: NEWSLETTER_SCHEMAS,
  styles: NEWSLETTER_BASE_STYLES,
  keyframes: NEWSLETTER_KEYFRAMES,
  themes: NEWSLETTER_THEMES,
  presets: NEWSLETTER_PRESETS,
  reverse: NEWSLETTER_REVERSE,
  docs: NEWSLETTER_DOCS,
  metaProperties: [
    { name: 'subject', description: 'Email subject line', example: 'What happened this week' },
    { name: 'preheader', description: 'Email preview text shown before opening', example: 'Your weekly roundup of...' },
  ],
};
