// Exercise the real Netlify handler with no database credentials.
// A 200 is insufficient: await eager bootstrap and a second warm request.
import assert from 'node:assert/strict';
import handler from '../.netlify/functions-internal/server/server.mjs';
import { fieldNoteArticles } from '../src/lib/blog-articles.ts';
for (const article of fieldNoteArticles) {
  const response = await handler(new Request(`https://shinobiseo.netlify.app/blog/${article.slug}`), {});
  assert.equal(response.status, 200);
  assert.ok((await response.text()).includes(article.sha256));
  console.log(JSON.stringify({slug: article.slug, status: response.status, sha256: article.sha256}));
}
assert.ok(globalThis.__pgBootstrapPromise__, 'no-credential bootstrap must run');
await globalThis.__pgBootstrapPromise__;
const pg = await globalThis.__pgliteInstance__;
assert.ok(pg, 'packaged PGLite must initialise');
assert.equal((await pg.query('select 1 as ready')).rows[0].ready, 1);
const warm = await handler(new Request('https://shinobiseo.netlify.app/blog'), {});
assert.equal(warm.status, 200);
await pg.close();
console.log('PASS: nine routes, complete database bootstrap, read-only query, warm index request');
// Nitro retains service timers; allow late promise failures before ending this CLI.
await new Promise(resolve => setTimeout(resolve, 2000));
process.exit(0);
