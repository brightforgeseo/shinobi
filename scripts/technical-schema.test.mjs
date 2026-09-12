import test from 'node:test';
import assert from 'node:assert/strict';
test('FAQ schema retains exact supplied visible Q&A',async()=>{
 const {pageGraph} = await import('../src/lib/technical-seo.ts');
 const graph=pageGraph('/','Title','Description',[{q:'Exact question?',a:'Exact answer.'}]);
 assert.deepEqual(graph['@graph'].find(n=>n['@type']==='FAQPage').mainEntity,[{'@type':'Question',name:'Exact question?',acceptedAnswer:{'@type':'Answer',text:'Exact answer.'}}]);
});
test('page graph connects supported types without invented facts',async()=>{
 const {pageGraph} = await import('../src/lib/technical-seo.ts');
 for(const [path,type] of [['/blog/example','Article'],['/seo-services/technical-seo','Service'],['/blog','CollectionPage'],['/about','AboutPage'],['/contact','ContactPage']]) {
 const graph=pageGraph(path,'Visible title','Visible description');
 assert.ok(graph['@graph'].some(n=>n['@type']===type),type);
 assert.ok(graph['@graph'].some(n=>n['@type']==='BreadcrumbList'));
 assert.ok(graph['@graph'].some(n=>n['@type']==='Organization'));
 const text=JSON.stringify(graph); for(const key of ['datePublished','dateModified','aggregateRating','address','price','author']) assert.ok(!text.includes('"'+key+'"'));
 }
});
