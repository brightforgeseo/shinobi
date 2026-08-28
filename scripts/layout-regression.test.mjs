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
    assert.match(route, /key=\{`\$\{(?:metric|m)\.label\}.*\$\{(?:metric|m)\.value\}`\}/s);
  }
});
