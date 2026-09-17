import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import { fieldNoteArticles } from '../src/lib/blog-articles.ts';
import { parseArticle, inlineSegments } from '../src/lib/blog-markdown.ts';
const root='/home/benecho/state/article-production/brightforge-content-engine/production/shinobi';
const sha = text => createHash('sha256').update(text).digest('hex');
test('blog listing is exact approved metadata with no invented dates', () => {
  const text=fs.readFileSync(new URL('../src/lib/site-data.ts',import.meta.url),'utf8');
  const notes=JSON.parse(text.match(/export const notes = (\[[\s\S]*?\n\]);/)[1]);
  assert.deepEqual(notes,fieldNoteArticles.map(a=>({slug:a.slug,title:a.title,date:'',excerpt:a.metaDescription,body:a.metaDescription})));
});
test('original nine blog records retain exact staged Proof-approved Markdown bytes', () => {
  assert.equal(fieldNoteArticles.length, 17);
  assert.equal(new Set(fieldNoteArticles.map(a=>a.slug)).size, 17);
  for (let i=0;i<9;i++) {
    const record=fieldNoteArticles[i];
    const packageRoot=`${root}/SHINOBI-${String(i+1).padStart(2,'0')}`;
    const stage=`${packageRoot}/website_handoff`;
    const receipt=JSON.parse(fs.readFileSync(`${stage}/receipt.json`,'utf8'));
    const review=JSON.parse(fs.readFileSync(`${stage}/editorial_review.json`,'utf8'));
    const source=JSON.parse(fs.readFileSync(`${stage}/research/source_packet.json`,'utf8'));
    assert.equal(record.markdown, fs.readFileSync(`${stage}/article.md`,'utf8'));
    assert.equal(record.sha256, sha(record.markdown));
    assert.equal(review.article_sha256, record.sha256);
    assert.equal(review.status, 'PASS');
    assert.equal(receipt.hashes['article.md'], record.sha256);
    assert.equal(receipt.status, 'handoff_pending');
    const parsed=parseArticle(record.markdown);
    assert.equal(parsed.title, source.job_binding.h1);
    assert.equal(record.metaTitle, parsed.metaTitle);
    assert.equal(record.metaDescription, parsed.metaDescription);
    const texts=[...parsed.introduction, ...parsed.sections.flatMap(s=>s.blocks)].flatMap(b=>b.kind==='list'?b.items:[b.text]);
    const links=texts.flatMap(t=>inlineSegments(t)).filter(x=>x.href).map(x=>[x.text,x.href]).sort();
    assert.deepEqual(links,source.links.map(x=>[x.anchor,x.url]).sort());
    assert.equal(record.engineJob,4201+i);
  }
});
