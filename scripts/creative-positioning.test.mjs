import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const siteData = read("src/lib/site-data.ts");
const industryPages = read("src/lib/industry-pages.ts");
const home = read("src/components/home/HomePage.tsx");
const industriesHub = read("src/routes/industries/index.tsx");
const servicesHub = read("src/routes/seo-services/index.tsx");
const developmentHub = read("src/routes/development/index.tsx");
const about = read("src/routes/about.tsx");
const contact = read("src/routes/contact.tsx");

const requiredIndustries = [
  "gaming",
  "film-production",
  "animation-vfx",
  "music-entertainment",
  "arts-culture",
  "creative-agencies",
  "fashion-lifestyle",
  "events-experiential",
  "media-publishing",
];

test("creative industries exist in navigation data and have substantive detail pages", () => {
  for (const slug of requiredIndustries) {
    assert.match(siteData, new RegExp(`slug: ["']${slug}["']`), `${slug} missing from site data`);
    assert.match(industryPages, new RegExp(`slug: ["']${slug}["']`), `${slug} missing detail page`);
  }
});

test("homepage leads with the creative and culture proposition", () => {
  assert.match(home, /games, film, music, design and\s+culture-led brands/i);
  assert.match(siteData, /Game and interactive studios/i);
  assert.match(siteData, /Film, animation and production/i);
});

test("public hubs speak to creative teams rather than generic businesses", () => {
  assert.match(industriesHub, /games, film, animation, music, art, fashion and culture/i);
  assert.match(servicesHub, /creative and entertainment brands/i);
  assert.match(developmentHub, /portfolio, catalogue, release and campaign pages/i);
  assert.match(about, /creative and culture-led/i);
  assert.match(contact, /project, release, catalogue or audience/i);
});

test("industry hub uses an editorial field guide instead of the old three-card intro", () => {
  assert.match(industriesHub, /Creative field guide/i);
  assert.doesNotMatch(industriesHub, /Intent first.*Commercial pages.*Measured/s);
});
