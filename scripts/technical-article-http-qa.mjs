import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { fieldNoteArticles } from '../src/lib/blog-articles.ts';
import { parseArticle, inlineSegments } from '../src/lib/blog-markdown.ts';
const out=process.argv[3]; await fs.mkdir(out,{recursive:true});
const base=process.argv[2];
const norm=s=>s.replace(/\s+/g,' ').trim();
const browser=await chromium.launch({headless:true});
const page=await browser.newPage();
const results=[];
try {
 for(const a of fieldNoteArticles){
  const url=base+'/blog/'+a.slug;
  const r=await fetch(url,{headers:{'user-agent':'Mozilla/5.0 (compatible; article-parity-check)'}});
  assert.equal(r.status,200);
  const html=await r.text();
  await fs.writeFile(`${out}/live-http-${a.engineJob}.html`,html);
  const actual=await page.evaluate(html=>{
   const d=new DOMParser().parseFromString(html,'text/html');
   return {title:d.title,description:d.querySelector('meta[name="description"]')?.content,h1:[...d.querySelectorAll('h1')].map(n=>n.textContent),h2:[...d.querySelectorAll('article h2')].map(n=>n.textContent),body:[...d.querySelectorAll('[data-article-block]')].map(n=>n.textContent),links:[...d.querySelectorAll('article a')].map(n=>[n.textContent,n.getAttribute('href')]),sha256:d.querySelector('article')?.getAttribute('data-article-sha256')};
  },html);
  const p=parseArticle(a.markdown);
  const texts=[...p.introduction,...p.sections.flatMap(s=>s.blocks)].flatMap(b=>b.kind==='list'?b.items:[b.text]);
  assert.equal(actual.title,p.metaTitle);assert.equal(actual.description,p.metaDescription);
  assert.deepEqual(actual.h1,[p.title]);assert.deepEqual(actual.h2,p.sections.map(s=>s.heading));
  assert.deepEqual(actual.body.map(norm),texts.map(t=>norm(inlineSegments(t).map(x=>x.text).join(''))));
  assert.deepEqual(actual.links,texts.flatMap(t=>inlineSegments(t)).filter(x=>x.href).map(x=>[x.text,x.href]));
  assert.equal(actual.sha256,a.sha256);
  results.push({job_id:a.engineJob,url,status:r.status,sha256:a.sha256,body_parity:true,heading_parity:true,link_parity:true,meta_parity:true,request_id:r.headers.get('x-nf-request-id'),html_file:`${out}/live-http-${a.engineJob}.html`});
  await fs.writeFile(out+'/live-http-results.json',JSON.stringify(results,null,2));
 }
 assert.equal(results.length,9);console.log(JSON.stringify({status:'PASS',public_routes:results.length,checks:'HTTP initial HTML body/headings/links/title/meta description/SHA parity'}));
} finally {await browser.close();}
