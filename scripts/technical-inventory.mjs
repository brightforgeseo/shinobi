import { registerHooks } from 'node:module';
import fs from 'node:fs';
import assert from 'node:assert/strict';
registerHooks({resolve(specifier,context,next){
 if(specifier.startsWith('@/assets/')) return next('data:text/javascript,export default '+JSON.stringify(specifier),context);
 if(specifier.startsWith('.') && context.parentURL){const u=new URL(specifier+'.ts',context.parentURL);if(fs.existsSync(u)) return next(u.href,context);}
 return next(specifier,context);
}});
const {publicRoutes}=await import('../src/lib/public-routes.ts');
const {servicePages}=await import('../src/lib/service-pages.ts');
const {industryPages}=await import('../src/lib/industry-pages.ts');
const {devPages}=await import('../src/lib/dev-pages.ts');
const {cases}=await import('../src/lib/site-data.ts');
const {fieldNoteArticles}=await import('../src/lib/blog-articles.ts');
const expected=['/','/about','/contact','/command-centre','/seo-services','/industries','/development','/cases','/blog',...[[servicePages,'seo-services'],[industryPages,'industries'],[devPages,'development'],[cases,'cases'],[fieldNoteArticles,'blog']].flatMap(([items,hub])=>items.map(i=>`/${hub}/${i.slug}`))].sort();
assert.deepEqual([...publicRoutes].sort(),expected);
assert.equal(new Set(publicRoutes).size,publicRoutes.length);
const inventory={count:expected.length,paths:expected,utilities:['/login'],aliases:{'/studio':'/about','/work':'/seo-services'},server_routes:['/api/auth/*','/robots.txt','/sitemap.xml'],articles:fieldNoteArticles.map(a=>({slug:a.slug,engineJob:a.engineJob,sha256:a.sha256}))};
if(process.argv[2]) fs.writeFileSync(process.argv[2],JSON.stringify(inventory,null,2));
console.log(JSON.stringify(inventory,null,2));
