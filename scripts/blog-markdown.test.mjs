import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const file = new URL('../src/lib/blog-markdown.ts', import.meta.url);
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

test('rendered links are real accessible anchors and never execute raw HTML', async () => {
  const { BlogInline } = await import(file.href);
  assert.equal(typeof BlogInline, 'function', 'React inline renderer must exist');
  const html = renderToStaticMarkup(createElement(BlogInline, { text: '<script> [anchor](https://example.com/a) [bad](javascript:alert)' }));
  assert.match(html, /href="https:\/\/example.com\/a"/);
  assert.match(html, />anchor<\/a>/);
  assert.match(html, /&lt;script&gt;/);
  assert.doesNotMatch(html, /href="javascript/);
});
test('approved inline Markdown links retain visible text and exact URL', async () => {
  assert.ok(fs.existsSync(file), 'bounded blog Markdown parser must exist');
  const { inlineSegments } = await import(file.href);
  assert.deepEqual(inlineSegments('Before [anchor](https://example.com/a) after.'), [
    { text: 'Before ' }, { text: 'anchor', href: 'https://example.com/a' }, { text: ' after.' }
  ]);
});

test('unsupported rich Markdown cannot silently enter the bounded renderer', async () => {
  const { parseArticle } = await import(file.href);
  for (const rich of ['### Third Level', '| A | B |', '```code```', '**bold**']) {
    assert.throws(() => parseArticle(`# Heading\n\n${rich}\n\nMeta title: Meta\n\nMeta description: Description\n`), /Unsupported/);
  }
});

test('article parser preserves heading, paragraph/list order and approved metadata', async () => {
  const module = await import(file.href);
  assert.equal(typeof module.parseArticle, 'function', 'article block parser must exist');
  const parsed = module.parseArticle('# Heading\n\nIntro.\n\n## Section\n\nBefore.\n\n- One\n- Two\n\nAfter.\n\nMeta title: Meta\n\nMeta description: Description\n');
  assert.equal(parsed.title, 'Heading');
  assert.equal(parsed.metaTitle, 'Meta');
  assert.equal(parsed.metaDescription, 'Description');
  assert.deepEqual(parsed.introduction, [{ kind: 'paragraph', text: 'Intro.' }]);
  assert.deepEqual(parsed.sections, [{ heading: 'Section', blocks: [
    { kind: 'paragraph', text: 'Before.' }, { kind: 'list', items: ['One', 'Two'] }, { kind: 'paragraph', text: 'After.' }
  ] }]);
});
