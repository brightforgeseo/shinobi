import fs from 'node:fs';
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { fieldNoteArticles } from '../src/lib/blog-articles.ts';
import { parseArticle, inlineSegments } from '../src/lib/blog-markdown.ts';
const [base,out,inventoryFile]=process.argv.slice(2);
const {paths}=JSON.parse(fs.readFileSync(inventoryFile));
fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({headless:true});
const results=[];const normal=s=>s.replace(/\s+/g,' ').trim();
try{
 for(const [device,viewport] of [['desktop',{width:1440,height:1000}],['mobile',{width:390,height:844}]]){
  const context=await browser.newContext({viewport});const page=await context.newPage();
  let errors=[];page.on('pageerror',e=>errors.push(e.message));
  for(const path of paths){
   errors=[]; const issues=[];const response=await page.goto(base+path,{waitUntil:'networkidle'});
   await page.evaluate(()=>document.fonts.ready);
   const title=await page.title();
   const h1=await page.locator('h1').count();
   const canonical=await page.locator('link[rel="canonical"]').getAttribute('href');
   if(response.status()!==200) issues.push('status');
   if(h1!==1) issues.push('H1');
   if(canonical!=='https://shinobiseo.com'+path) issues.push('canonical');
   if(await page.locator('meta[property="og:title"]').getAttribute('content')!==title) issues.push('hydrated OG title');
   if(await page.locator('script[type="application/ld+json"]').count()!==1) issues.push('hydrated graph');
   const article=fieldNoteArticles.find(a=>path==='/blog/'+a.slug);
   if(article){
    const parsed=parseArticle(article.markdown);const texts=[...parsed.introduction,...parsed.sections.flatMap(s=>s.blocks)].flatMap(b=>b.kind==='list'?b.items:[b.text]);
    assert.deepEqual((await page.locator('[data-article-block]').allTextContents()).map(normal),texts.map(t=>normal(inlineSegments(t).map(s=>s.text).join(''))));
    assert.deepEqual(await page.locator('article a').evaluateAll(nodes=>nodes.map(n=>[n.textContent,n.getAttribute('href')])),texts.flatMap(t=>inlineSegments(t)).filter(s=>s.href).map(s=>[s.text,s.href]));
    assert.equal(await page.locator('article').getAttribute('data-article-sha256'),article.sha256);
   }
   // Trigger lazy images before judging decode; do not call off-screen images broken.
   await page.evaluate(async()=>{for(const img of document.images){img.loading='eager'; await img.decode().catch(()=>{});}});
   const images=await page.locator('img').evaluateAll(nodes=>nodes.filter(n=>!n.complete||!n.naturalWidth).map(n=>n.currentSrc||n.src));
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1);
   if(images.length) issues.push('broken images');if(overflow) issues.push('overflow');if(errors.length) issues.push('page errors');
   const shot=`${out}/${device}-${path.replaceAll('/','_')||'home'}.png`;await page.screenshot({path:shot});
   const performance=await page.evaluate(()=>({navigation:performance.getEntriesByType('navigation').map(n=>({ttfb:n.responseStart,dcl:n.domContentLoadedEventEnd,load:n.loadEventEnd})),resourceBytes:performance.getEntriesByType('resource').reduce((n,r)=>n+r.transferSize,0)}));
   results.push({device,path,status:response.status(),title,canonical,article_parity:article?true:null,overflow,broken_images:images,errors,issues,performance,screenshot:shot});
   fs.writeFileSync(out+'/results.json',JSON.stringify(results,null,2));console.log(device,path,issues.length?'FAIL '+issues.join(','):'PASS');
  }
  // Exercise real navigation, including mobile menu, without request interception.
  await page.goto(base+'/',{waitUntil:'networkidle'});
  if(device==='mobile') await page.getByRole('button',{name:'Open menu',exact:true}).click();
  await page.locator('header a[href="/blog"]:visible').click();
  await page.waitForURL('**/blog');await page.waitForFunction(()=>document.querySelector('link[rel="canonical"]')?.href==='https://shinobiseo.com/blog');
  await page.locator('main a[href="/blog/audits-that-miss"]').first().click();
  await page.waitForURL('**/blog/audits-that-miss');await page.waitForFunction(()=>document.querySelector('article[data-article-sha256]'));
  assert.equal(await page.locator('meta[property="og:type"]').getAttribute('content'),'article');
  await page.goBack({waitUntil:'networkidle'});assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),'https://shinobiseo.com/blog');
  await context.close();
 }
 assert.equal(results.length,paths.length*2);assert.deepEqual(results.filter(r=>r.issues.length).map(r=>({path:r.path,device:r.device,issues:r.issues})),[]);
 console.log('PASS all-route desktop/mobile, article parity and navigation');
}finally{await browser.close();}
