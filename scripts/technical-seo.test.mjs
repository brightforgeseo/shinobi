import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const root = fs.readFileSync('src/routes/__root.tsx','utf8');
test('exact GSC token once in initial head',()=>{
 assert.equal((root.match(/oMcrKoNHGoaMhLUcbbfnAo918wSq0rVuQqD4qv5BajI/g)||[]).length,1);
 assert.match(root,/name: "google-site-verification"/);
});

test('public metadata strips query/slash and excludes utilities', async()=>{
 const { seoPolicy } = await import('../src/lib/technical-seo.ts');
 assert.deepEqual(seoPolicy('/about/?utm_source=x',['/about']),{canonical:'https://shinobiseo.com/about',robots:'index, follow'});
 for(const path of ['/login','/studio','/work','/missing']) assert.equal(seoPolicy(path,['/about']).robots,'noindex, follow');
});
