import { development } from "./site-data";

export type DevBlock = { name: string; text: string };

export type DevPage = {
  slug: string;
  h1: string;
  red: string;
  intro: string;
  whyTitle: string;
  why: string;
  includedTitle: string;
  included: DevBlock[];
  whoTitle: string;
  who: DevBlock[];
  processTitle: string;
  process: DevBlock[];
  avoidTitle: string;
  avoid: DevBlock[];
  faqs: { q: string; a: string }[];
  cta: string;
};

const sharedIncluded: DevBlock[] = [
  {
    name: "Crawlable pages",
    text: "Clean URLs, internal links, server-rendered content where needed, and sensible indexation controls. Search engines should see the same product buyers see.",
  },
  {
    name: "Content structure",
    text: "Headings, body copy, proof, FAQs and conversion points that support SEO — not hidden behind visual components.",
  },
  {
    name: "Performance and Core Web Vitals",
    text: "Less bloat, fewer unnecessary scripts, fewer layout shifts and render delays. Fast pages reduce technical drag before SEO work even starts.",
  },
  {
    name: "Redirect and migration safety",
    text: "When replacing an old site, URL mapping and launch QA matter more than a prettier homepage.",
  },
  {
    name: "Schema and metadata",
    text: "Titles, descriptions, canonicals, structured data and Open Graph built in — not bolted on later.",
  },
  {
    name: "Analytics and forms",
    text: "A site that cannot track enquiries makes SEO reporting weaker than it needs to be. Forms, events and Search Console from day one.",
  },
];

const sharedProcess: DevBlock[] = [
  {
    name: "Audit",
    text: "Current site, rankings, crawl behaviour, content, analytics and conversion risks.",
  },
  {
    name: "Plan",
    text: "Templates, URLs, content sections, redirects, schema and development priorities.",
  },
  {
    name: "Build",
    text: "Speed, accessibility, crawlability and editorial control — not just visual polish.",
  },
  {
    name: "QA",
    text: "Pages, metadata, forms, mobile layouts, redirects, schema and indexation settings.",
  },
  {
    name: "Launch",
    text: "Launch checklist, Search Console monitoring and post-launch crawl checks.",
  },
  {
    name: "Improve",
    text: "Ranking, crawl and conversion data used to refine pages after launch.",
  },
];

const sharedFaqs = [
  {
    q: "Do we need to rebuild the whole website?",
    a: "Not always. Sometimes a technical cleanup, template improvement or content restructure is enough. A rebuild makes sense when the current site is holding back performance, editing, crawlability or conversion.",
  },
  {
    q: "How do you protect rankings during a rebuild?",
    a: "We map URLs, redirects, metadata, content, internal links, schema, analytics and Search Console checks before launch, then crawl and monitor after.",
  },
  {
    q: "Can you work with our existing developer?",
    a: "Yes. SEO direction, QA and implementation guidance while your developer or internal team carries out the build.",
  },
  {
    q: "Which framework should we choose?",
    a: "It depends on content, editing needs, interactivity, performance goals and SEO risk. We choose the stack around the job, not the fashion cycle.",
  },
  {
    q: "Do you guarantee better rankings after a new site?",
    a: "No. A better build can remove technical drag and improve conversion. Rankings still depend on content, authority, competition and implementation quality.",
  },
];

export const devPages: DevPage[] = [
  {
    slug: "astro",
    h1: "FAST PAGES.",
    red: "CLEAN HTML.",
    intro:
      "Astro builds for content-led sites that need speed, clean HTML and SEO-friendly structure. A strong choice when a site needs fast pages, mostly static content, clear templates and minimal JavaScript. We use it when the business case fits — not because every site needs the newest framework.",
    whyTitle: "Astro is useful when the site needs speed, control and clean content delivery",
    why: "Astro can be a strong fit for content-led and service-led websites because it keeps pages fast and limits unnecessary JavaScript. That only helps SEO when page structure, internal links, schema and launch checks are handled properly. We build around crawlability, performance, editable content needs and safe migration planning. Fit-for-purpose — not a magic ranking factor.",
    includedTitle: "What an Astro build still has to get right",
    included: sharedIncluded,
    whoTitle: "Where Astro has a clear role",
    who: [
      {
        name: "Service businesses",
        text: "Service pages, locations and proof that should ship as HTML, not a JS bundle.",
      },
      {
        name: "Content and resource sites",
        text: "Guides, libraries and marketing sites where most pages are documents.",
      },
      {
        name: "Lean marketing rebuilds",
        text: "Speed, maintainability and crawlable content as the priorities.",
      },
      {
        name: "Leaving a bloated CMS",
        text: "When the current stack is the drag, and most pages do not need an app runtime.",
      },
    ],
    processTitle: "How we build without creating SEO debt",
    process: sharedProcess,
    avoidTitle: "What we will not do",
    avoid: [
      {
        name: "No fashion rebuilds",
        text: "We will not sell Astro because it is new. If WordPress or Next is the better job, we say so.",
      },
      {
        name: "No stripped content",
        text: "A shiny rebuild that loses copy, redirects or money pages is a failed launch.",
      },
      {
        name: "No indexation surprises",
        text: "Islands where you need them. HTML where you do not. Crawlers see the product.",
      },
    ],
    faqs: [
      {
        q: "Is Astro good for SEO?",
        a: "It can be, if the site is built with crawlable content, clean metadata, sensible routes, fast templates, internal links and proper launch QA. The technology alone is not enough.",
      },
      ...sharedFaqs,
    ],
    cta: "Thinking about an Astro rebuild? We will confirm whether it is the right option before anyone plans templates or a migration.",
  },
  {
    slug: "sveltekit",
    h1: "LEAN SITES.",
    red: "SEARCH CLARITY.",
    intro:
      "SvelteKit builds for fast, lean sites where performance and developer experience both matter. It can produce elegant sites — but the SEO value still depends on routing, content structure, metadata, internal links and launch QA.",
    whyTitle: "SvelteKit should pair speed with search clarity",
    why: "SvelteKit can be a strong fit for fast, modern web experiences, but speed alone does not make a site search-ready. The build still needs sensible routes, content structure, metadata, schema, tracking and migration control. We use it where it fits the product and SEO requirements, then protect the launch with practical technical checks.",
    includedTitle: "What a SvelteKit build still has to get right",
    included: sharedIncluded,
    whoTitle: "Where SvelteKit has a clear role",
    who: [
      {
        name: "Fast marketing sites",
        text: "Performance matters, but SEO cannot be compromised.",
      },
      {
        name: "Interactive content",
        text: "Projects that need more than static pages without becoming a heavy SPA.",
      },
      {
        name: "Lean applications",
        text: "Small products where a lighter runtime is the point.",
      },
      {
        name: "Rebuilds with a speed brief",
        text: "The current site is slow. The new one still has to rank.",
      },
    ],
    processTitle: "How we build without creating SEO debt",
    process: sharedProcess,
    avoidTitle: "What we will not do",
    avoid: [
      {
        name: "No speed-only briefs",
        text: "A fast site that Googlebot cannot read is not a win.",
      },
      {
        name: "No lost redirects",
        text: "Pretty homepage, dead URLs. We will not ship that.",
      },
      {
        name: "No afterthought metadata",
        text: "Titles, canonicals and schema are part of the build, not a ticket after launch.",
      },
    ],
    faqs: [
      {
        q: "Is SvelteKit good for SEO?",
        a: "It can be, if the site is built with crawlable content, clean metadata, sensible routes, fast templates, internal links and proper launch QA. The technology alone is not enough.",
      },
      ...sharedFaqs,
    ],
    cta: "Considering SvelteKit for a faster site? We review goals, SEO risk and content needs before recommending it — or a safer alternative.",
  },
  {
    slug: "nextjs",
    h1: "REACT + SSR.",
    red: "WITHOUT THE DEBT.",
    intro:
      "Next.js builds for dynamic sites where React, server rendering and SEO planning all need to line up. Powerful for product-led sites and applications — and easy to get wrong if rendering, metadata, routing and performance are not planned.",
    whyTitle: "Next.js should solve a product problem without creating an SEO one",
    why: "Next.js can support complex sites, applications and scalable content systems, but the SEO value depends on rendering choices, information architecture and technical discipline. We plan builds around crawlable pages, reliable metadata, performance budgets, structured content and launch QA so the framework supports the strategy rather than distracting from it.",
    includedTitle: "What a Next.js build still has to get right",
    included: [
      ...sharedIncluded,
      {
        name: "Rendering decisions",
        text: "SSR, SSG, ISR or client — chosen per template, not as a default. App Router done without wrecking indexation.",
      },
    ],
    whoTitle: "Where Next.js has a clear role",
    who: [
      {
        name: "SaaS and product sites",
        text: "App-like marketing that still needs crawlable service and docs pages.",
      },
      {
        name: "Dashboards and portals",
        text: "Logged-in product plus a public site that has to rank.",
      },
      {
        name: "Dynamic marketing",
        text: "Personalisation and React architecture without sacrificing crawlability.",
      },
      {
        name: "Teams already on React",
        text: "The stack is decided. The render path still needs defending.",
      },
    ],
    processTitle: "How we build without creating SEO debt",
    process: sharedProcess,
    avoidTitle: "What we will not do",
    avoid: [
      {
        name: "No client-only marketing sites",
        text: "If the homepage is an empty shell until JS hydrates, we will not call it done.",
      },
      {
        name: "No mystery metadata",
        text: "App Router metadata, canonicals and sitemaps are part of the ticket list.",
      },
      {
        name: "No unchecked ISR",
        text: "Stale or missing pages after a content change is a launch bug.",
      },
    ],
    faqs: [
      {
        q: "Is Next.js good for SEO?",
        a: "It can be, if rendering, metadata, routes, templates, internal links and launch QA are planned. The framework alone is not enough — and a careless App Router setup can hide the product.",
      },
      ...sharedFaqs,
    ],
    cta: "Need a Next.js build that search engines can actually understand? We review the product, pages and rendering needs before recommending an architecture.",
  },
  {
    slug: "react",
    h1: "INTERFACES.",
    red: "NOT AFTERTHOUGHTS.",
    intro:
      "React builds for interfaces that need interactivity without turning SEO into an afterthought. Useful when the product needs real interaction — and it needs careful planning around rendering, routing, metadata and performance if organic search matters.",
    whyTitle: "React needs SEO guardrails before it becomes the default answer",
    why: "React can be right for interactive products and app-like experiences, but not every marketing site needs it. Poor rendering choices, heavy JavaScript and weak routes make organic visibility harder than it needs to be. We use React when the functionality justifies it, with clear decisions around rendering, routes, metadata, performance and content accessibility.",
    includedTitle: "What a React build still has to get right",
    included: sharedIncluded,
    whoTitle: "Where React has a clear role",
    who: [
      {
        name: "Interactive tools",
        text: "Calculators, configurators and product finders that still need a crawlable shell.",
      },
      {
        name: "Portals and dashboards",
        text: "App UX where the public pages cannot be an afterthought.",
      },
      {
        name: "Application interfaces",
        text: "When static pages are not enough and the product is the site.",
      },
      {
        name: "SPA recoveries",
        text: "An existing React app that is hiding the offer from Googlebot.",
      },
    ],
    processTitle: "How we build without creating SEO debt",
    process: sharedProcess,
    avoidTitle: "What we will not do",
    avoid: [
      {
        name: "No React-by-default marketing sites",
        text: "If Astro or WordPress would be safer, we say so.",
      },
      {
        name: "No empty crawlers",
        text: "We sit with engineering until the SPA stops hiding the product.",
      },
      {
        name: "No plugin SEO",
        text: "A helmet tag is not a strategy. Routes, render and content have to be designed.",
      },
    ],
    faqs: [
      {
        q: "Is React good for SEO?",
        a: "It can be, if crawlable content, clean metadata, sensible routes, fast templates, internal links and launch QA are in place. A client-rendered marketing site is usually the wrong default.",
      },
      ...sharedFaqs,
    ],
    cta: "Need React without making SEO harder? We review whether it is the right fit — and where server rendering, static content or a simpler stack would be safer.",
  },
  {
    slug: "wordpress",
    h1: "EDITORIAL CONTROL.",
    red: "LESS BLOAT.",
    intro:
      "WordPress builds with cleaner architecture, SEO controls and less plugin bloat. Still the right choice for many businesses — but only when the theme, plugins, content model and SEO controls are planned. A bloated setup makes every SEO task harder.",
    whyTitle: "WordPress works when the CMS is governed — not when it is a plugin pile",
    why: "WordPress can work well when teams need editorial control, but weak themes, plugin bloat and messy templates quietly damage SEO. We build or improve WordPress around clean templates, content governance, metadata control, structured data, performance and technical SEO foundations.",
    includedTitle: "What a WordPress build still has to get right",
    included: [
      {
        name: "Clean templates",
        text: "Theme and block markup that carries titles, headings, schema and internal links — not a page-builder soup.",
      },
      {
        name: "Plugin discipline",
        text: "Fewer plugins. Each one has a job. Performance and security reviewed before it ships.",
      },
      {
        name: "Editorial control",
        text: "A content model your team will not break every Tuesday. SEO fields in the editor, not a hidden panel.",
      },
      ...sharedIncluded.slice(2),
    ],
    whoTitle: "Where WordPress has a clear role",
    who: [
      {
        name: "Teams that need to edit",
        text: "Easy editing, blogs, resources and CMS workflows without losing speed.",
      },
      {
        name: "Service businesses",
        text: "Service pages and reliable SEO controls in a familiar admin.",
      },
      {
        name: "Slow WordPress recoveries",
        text: "The stack stays. The theme, plugins and templates do not.",
      },
      {
        name: "Content-led brands",
        text: "Publishing cadence matters more than a custom app runtime.",
      },
    ],
    processTitle: "How we build without creating SEO debt",
    process: sharedProcess,
    avoidTitle: "What we will not do",
    avoid: [
      {
        name: "No plugin SEO as a strategy",
        text: "Yoast is not a campaign. Templates, IA and content still have to be designed.",
      },
      {
        name: "No page-builder bloat",
        text: "If the DOM is a nesting doll, Core Web Vitals will not recover.",
      },
      {
        name: "No silent theme swaps",
        text: "A redesign that strips content or loses redirects is a failed launch.",
      },
    ],
    faqs: [
      {
        q: "Is WordPress good for SEO?",
        a: "It can be, if templates are clean, metadata is controlled, routes are sensible, the site is fast, internal links work and launch QA is real. The CMS alone is not enough — and a bloated setup makes every SEO task harder.",
      },
      ...sharedFaqs,
    ],
    cta: "Need WordPress that does not fight you on every SEO ticket? We can audit the current theme, plugins and templates before anyone redesigns.",
  },
];

export function getDevPage(slug: string) {
  const page = devPages.find((p) => p.slug === slug);
  const meta = development.find((d) => d.slug === slug);
  if (!page || !meta) return null;
  return { ...meta, ...page };
}

export const hubFocus = [
  {
    name: "Crawlable pages",
    text: "Clean URLs, internal links, server-rendered content where needed and sensible indexation controls.",
  },
  {
    name: "Content structure",
    text: "Headings, body copy, proof, FAQs and conversion points that support SEO rather than sit behind components.",
  },
  {
    name: "Performance and Core Web Vitals",
    text: "Less bloat, fewer scripts, fewer layout shifts. Fast pages help users and reduce technical drag.",
  },
  {
    name: "Redirect and migration safety",
    text: "URL mapping and launch QA matter more than a prettier homepage.",
  },
  {
    name: "Schema and metadata",
    text: "Titles, descriptions, canonicals, structured data and Open Graph built in.",
  },
  {
    name: "Analytics and forms",
    text: "If you cannot track enquiries, SEO reporting is weaker than it needs to be.",
  },
];

export const hubFaqs = [
  {
    q: "Is a new build good for SEO?",
    a: "It can be, if the site is built with crawlable content, clean metadata, sensible routes, fast templates, internal links and proper launch QA. The technology alone is not enough.",
  },
  {
    q: "Do we need to rebuild our whole website?",
    a: "Not always. Sometimes a technical cleanup, template improvement or content restructure is enough. A rebuild makes sense when the current site is holding back performance, editing, crawlability or conversion.",
  },
  {
    q: "How do you protect rankings during a rebuild?",
    a: "We map URLs, redirects, metadata, content, internal links, schema, analytics and Search Console checks before launch, then crawl and monitor after.",
  },
  {
    q: "Can your team work with our existing developer?",
    a: "Yes. SEO direction, QA and implementation guidance while your developer or internal team carries out the build.",
  },
  {
    q: "Which framework should we choose?",
    a: "Content, editing needs, interactivity, performance goals and SEO risk. We choose the stack around the job, not the fashion cycle.",
  },
  {
    q: "Do you guarantee better rankings after a new website?",
    a: "No. A better build can remove technical drag and improve conversion. Rankings still depend on content, authority, competition and implementation quality.",
  },
];
