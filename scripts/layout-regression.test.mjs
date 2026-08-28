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
