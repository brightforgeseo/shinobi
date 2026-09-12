import test from 'node:test';
import assert from 'node:assert/strict';
test('canonical edge redirects preserve path/query and bypass auth/non-GET',async()=>{
 const {default:canonical} = await import('../netlify/edge-functions/canonical.js');
 const next=()=>new Response('next');
 for(const host of ['https://shinobiseo.netlify.app','https://www.shinobiseo.com','http://shinobiseo.com','https://shinobiseo.com']){
 const r=await canonical(new Request(host+'/blog/audits-that-miss/?utm_source=a%2Fb&x=1'),{next});
 assert.equal(r.status,301);assert.equal(r.headers.get('location'),'https://shinobiseo.com/blog/audits-that-miss?utm_source=a%2Fb&x=1');
 }
 for(const path of ['/api/auth/get-session','/auth/popup','/__grok/manifest.webmanifest','/login','/studio','/work']) assert.equal(await (await canonical(new Request('https://shinobiseo.netlify.app'+path),{next})).text(),'next');
 assert.equal(await (await canonical(new Request('https://shinobiseo.netlify.app/contact',{method:'POST'}),{next})).text(),'next');
 assert.equal(await (await canonical(new Request('http://localhost:8080/about/'),{next})).text(),'next');
 assert.equal(await (await canonical(new Request('https://shinobiseo.com/about?x=1'),{next})).text(),'next');
});
