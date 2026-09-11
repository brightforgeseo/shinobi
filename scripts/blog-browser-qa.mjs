// Local build only. Assert exact reviewed-to-rendered content on both viewports.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { chromium } from 'playwright';
import { fieldNoteArticles } from '../src/lib/blog-articles.ts';
import { parseArticle, inlineSegments } from '../src/lib/blog-markdown.ts';
const base='http://127.0.0.1:8092';
const out='/home/benecho/state/worknotes/shinobi-prelaunch-20260911/article-production/browser-qa';
await fs.mkdir(out,{recursive:true});
const browser=await chromium.launch({headless:true});
const results=[];
const normal=s=>s.replace(/\s+/g,' ').trim();
try {
 for(const [device,viewport] of [['desktop',{width:1440,height:1000}],['mobile',{width:390,height:844}]]) {
  const context=await browser.newContext({viewport,deviceScaleFactor:1});
  const page=await context.newPage();
  let errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.route('**/*',route=>{
    const url=new URL(route.request().url());
    return url.origin===base || ['fonts.googleapis.com','fonts.gstatic.com'].includes(url.hostname) ? route.continue() : route.abort();
  });
  for(const record of fieldNoteArticles) {
   errors=[];
   const article=parseArticle(record.markdown);
   const response=await page.goto(base+'/blog/'+record.slug,{waitUntil:'networkidle'});
   assert.equal(response.status(),200,record.slug);
   await page.waitForFunction(title=>document.querySelector('h1')?.textContent===title,article.title);
   await page.evaluate(()=>document.fonts.ready);
   assert.ok(await page.evaluate(()=>[...document.fonts].some(font=>font.family.includes('Dela Gothic One') && font.status==='loaded')), 'Design display font must be loaded');
   assert.ok(await page.locator('[data-article-block]').evaluateAll(nodes=>nodes.every(n=>n.getBoundingClientRect().height>0 && getComputedStyle(n).visibility==='visible')), 'all article blocks rendered');
   const blocks=[...article.introduction,...article.sections.flatMap(s=>s.blocks)].flatMap(b=>b.kind==='list'?b.items:[b.text]);
   const expectedBody=blocks.map(t=>normal(inlineSegments(t).map(s=>s.text).join('')));
   assert.deepEqual((await page.locator('[data-article-block]').allTextContents()).map(normal),expectedBody,record.slug+' body');
   assert.deepEqual(await page.locator('article h2').allTextContents(),article.sections.map(s=>s.heading));
   assert.equal(await page.locator('h1').count(),1);
   assert.equal(await page.title(),article.metaTitle);
   assert.equal(await page.locator('meta[name="description"]').getAttribute('content'),article.metaDescription);
   const links=await page.locator('article a').evaluateAll(nodes=>nodes.map(n=>[n.textContent,n.getAttribute('href')]));
   assert.deepEqual(links,blocks.flatMap(t=>inlineSegments(t)).filter(s=>s.href).map(s=>[s.text,s.href]));
   assert.equal(await page.locator('article').getAttribute('data-article-sha256'),record.sha256);
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
   assert.equal(overflow,false,record.slug+' horizontal overflow');
   const shots=[];
   for(const [position,locator] of [['top',null],['middle',page.locator('article section').nth(Math.floor(article.sections.length/2))],['end',page.locator('article section').last()]]) {
    if(position==='end') await page.locator('article').evaluate(n=>scrollTo({top:n.getBoundingClientRect().bottom+scrollY-innerHeight+30,behavior:'instant'}));
    else if(locator) await locator.evaluate(n=>scrollTo({top:n.getBoundingClientRect().top+scrollY-150,behavior:'instant'}));
    else await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));
    const shot=`${out}/${device}-${record.engineJob}-${position}.png`;
    await page.screenshot({path:shot});shots.push(shot);
   }
   assert.deepEqual(errors,[],record.slug+' browser errors');
   results.push({job_id:record.engineJob,slug:record.slug,device,sha256:record.sha256,headings:article.sections.length,blocks:blocks.length,links:links.length,status:200,body_parity:true,heading_parity:true,link_parity:true,meta_parity:true,horizontal_overflow:false,page_errors:errors,screenshots:shots});
   await fs.writeFile(out+'/results.json',JSON.stringify(results,null,2));
  }
  // Real client navigation from the blog index, then related article navigation.
  await page.goto(base+'/blog',{waitUntil:'networkidle'});
  assert.equal(await page.locator('main a[href^="/blog/"]').count(),9);
  await page.locator(`main a[href="/blog/${fieldNoteArticles[8].slug}"]`).click();
  await page.waitForFunction(title=>document.querySelector('h1')?.textContent===title,fieldNoteArticles[8].title);
  await page.locator(`a[href="/blog/${fieldNoteArticles[0].slug}"]`).last().click();
  await page.waitForFunction(title=>document.querySelector('h1')?.textContent===title,fieldNoteArticles[0].title);
  assert.deepEqual(errors,[]);
  await context.close();
 }
 // Approved commercial destinations are checked against this built local site, never the public preview.
 const internal=[...new Set(fieldNoteArticles.flatMap(a=>inlineSegments(a.markdown).filter(s=>s.href?.startsWith('https://shinobiseo.netlify.app/')).map(s=>s.href)))];
 const destinations=[];
 for(const href of internal){const path=new URL(href).pathname;const response=await fetch(base+path);assert.equal(response.status,200,path);destinations.push({approved_href:href,local_status:response.status});}
 await fs.writeFile(out+'/destinations.json',JSON.stringify(destinations,null,2));
 assert.equal(results.length,18);
 console.log(JSON.stringify({status:'PASS',articles:9,rendered_viewports:results.length,results:out+'/results.json',destinations:destinations.length,navigation:'index and related clicks passed on desktop and mobile',publication_writes:0},null,2));
}finally{await browser.close();}
