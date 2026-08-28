import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("service chapter clips decorative kanji before it can widen the page", () => {
  assert.match(read("src/styles.css"), /\.service-chapter\s*\{[^}]*overflow:\s*hidden/s);
});

test("case study metric keys remain unique when labels repeat", () => {
  for (const path of ["src/routes/cases/$slug.tsx", "src/routes/cases/index.tsx"]) {
    const route = read(path);
    assert.match(route, /key=\{`\$\{[a-z]+\.label\}.*\$\{[a-z]+\.value\}`\}/s);
  }
});

test("industry mega menu stacks groups inside independent columns", () => {
  const megaNav = read("src/components/layout/MegaNav.tsx");
  assert.match(megaNav, /industryColumns\.map/);
  assert.match(megaNav, /space-y-8/);
  assert.doesNotMatch(megaNav, /industryGroups\.map\(\(g\) =>/);
});

test("homepage media stays out of the server-rendered HTML payload", () => {
  const media = read("src/lib/media.ts");
  assert.doesNotMatch(media, /\?inline/);
});

test("homepage positioning copy uses a paper caption over the video", () => {
  const home = read("src/components/home/HomePage.tsx");
  assert.match(
    home,
    /manga-panel[^>]*bg-paper\/95[^>]*text-ink/,
  );
  assert.match(home, /font-bold text-manga-red underline/);
  assert.doesNotMatch(
    home,
    /text-white[^>]*>\s*SEO and web development for games, film, music, design and/s,
  );
});

test("desktop hero content sits to the right of the woman", () => {
  const home = read("src/components/home/HomePage.tsx");
  assert.match(home, /bg-gradient-to-r[^\n]*lg:bg-gradient-to-l/);
  assert.match(home, /max-w-xl lg:ml-auto/);
});

test("homepage close uses a compact paper briefing panel, not a red or black slab", () => {
  const home = read("src/components/home/HomePage.tsx");
  assert.match(home, /bg-paper-2 text-ink/);
  assert.match(home, /border-\[3px\] border-ink bg-paper/);
  assert.match(home, /nextSteps\.map/);
  assert.doesNotMatch(home, /overflow-hidden bg-manga-red text-paper/);
  assert.doesNotMatch(home, /function CloseBlock\(\)[\s\S]*?<section className="[^"]*bg-ink/);
});

test("critical homepage artwork is prioritised without changing the video", () => {
  const homeRoute = read("src/routes/index.tsx");
  const home = read("src/components/home/HomePage.tsx");
  assert.match(homeRoute, /rel: "preload"[\s\S]*as: "image"[\s\S]*fetchPriority: "high"/);
  assert.match(home, /autoPlay/);
  assert.match(home, /heroVideo/);
});

test("header serves lossless responsive logo artwork", () => {
  const nav = read("src/components/layout/MegaNav.tsx");
  assert.match(nav, /logo-lockup-290\.webp 290w/);
  assert.match(nav, /logo-lockup-580\.webp 580w/);
  assert.match(nav, /logo-lockup-870\.webp 870w/);
  assert.match(nav, /src="\/logo-lockup\.png"/);
});

test("homepage HTML is eligible for Netlify durable edge caching", () => {
  const middleware = read("server/middleware/grok-pwa.ts");
  assert.match(middleware, /path === "\/"/);
  assert.match(middleware, /Netlify-CDN-Cache-Control/);
  assert.match(middleware, /durable/);
});

test("exact site fonts use Google variable-weight ranges without duplicated weight CSS", () => {
  const root = read("src/routes/__root.tsx");
  const styles = read("src/styles.css");
  assert.doesNotMatch(styles, /site-fonts\.css/);
  assert.match(root, /IBM\+Plex\+Mono:wght@400\.\.500/);
  assert.match(root, /Noto\+Sans\+JP:wght@400\.\.700/);
  assert.doesNotMatch(root, /dela-gothic-site\.woff2/);
  assert.doesNotMatch(root, /noto-sans-jp-site\.woff2/);
});

test("below-fold artwork uses native lazy loading without changing crop quality", () => {
  const frame = read("src/components/ui/frame-img.tsx");
  assert.match(frame, /<img/);
  assert.match(frame, /loading="lazy"/);
  assert.match(frame, /decoding="async"/);
  assert.match(frame, /object-cover object-center/);
  assert.doesNotMatch(frame, /backgroundImage/);
});
