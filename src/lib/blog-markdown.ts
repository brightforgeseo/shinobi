import { createElement, Fragment } from 'react';

export function BlogInline({ text }: { text: string }) {
  return createElement(Fragment, null, ...inlineSegments(text).map((segment, index) => segment.href
    ? createElement('a', { key: index, href: segment.href, className: 'underline underline-offset-4 decoration-manga-red hover:text-manga-red break-words' }, segment.text)
    : segment.text));
}

export type InlineSegment = { text: string; href?: string };
export type ArticleBlock = { kind: 'paragraph'; text: string } | { kind: 'list'; items: string[] };
export type ArticleSection = { heading: string; blocks: ArticleBlock[] };

export function parseArticle(markdown: string) {
  const title = markdown.match(/^# (.+)\n/)?.[1];
  const metaTitle = markdown.match(/^Meta title: (.+)$/m)?.[1];
  const metaDescription = markdown.match(/^Meta description: (.+)$/m)?.[1];
  if (!title || !metaTitle || !metaDescription) throw new Error('Incomplete approved article');
  const introduction: ArticleBlock[] = [];
  const sections: ArticleSection[] = [];
  let blocks = introduction;
  const body = markdown.slice(markdown.indexOf('\n') + 1).split(/^Meta title: /m)[0];
  for (const block of body.trim().split(/\n\s*\n/)) {
    if (/^###|^\||```|\*\*|!\[|<\/?[A-Za-z]/.test(block)) throw new Error('Unsupported article Markdown');
    if (block.startsWith('## ')) {
      sections.push({ heading: block.slice(3), blocks: [] });
      blocks = sections[sections.length - 1].blocks;
    } else if (block.startsWith('- ')) {
      blocks.push({ kind: 'list', items: block.split('\n').map(line => line.slice(2)) });
    } else {
      blocks.push({ kind: 'paragraph', text: block });
    }
  }
  return { title, metaTitle, metaDescription, introduction, sections };
}


/** Bounded engine syntax, rendered as React text nodes, never raw HTML. */
export function inlineSegments(text: string): InlineSegment[] {
  const result: InlineSegment[] = [];
  const pattern = /\[([^\]\n]+)\]\((https:\/\/[^\s)]+)\)/g;
  let offset = 0;
  for (const match of text.matchAll(pattern)) {
    if (match.index > offset) result.push({ text: text.slice(offset, match.index) });
    result.push({ text: match[1], href: match[2] });
    offset = match.index + match[0].length;
  }
  if (offset < text.length) result.push({ text: text.slice(offset) });
  return result;
}
