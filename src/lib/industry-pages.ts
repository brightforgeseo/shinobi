import { industries } from "./site-data";

export type IndBlock = { name: string; text: string };

export type IndustryPage = {
  slug: string;
  h1: string;
  red: string;
  intro: string;
  whyTitle: string;
  why: string;
  coverTitle: string;
  cover: IndBlock[];
  whoTitle: string;
  who: IndBlock[];
  notFit: string;
  processTitle: string;
  process: IndBlock[];
  qualityTitle: string;
  quality: IndBlock[];
  faqs: { q: string; a: string }[];
  cta: string;
};

const sharedProcess: IndBlock[] = [
  {
    name: "Audit",
    text: "Rankings, pages, Search Console, technical issues, local signals and conversion gaps.",
  },
  {
    name: "Map",
    text: "Topics and keywords to the right page type so content does not compete with money pages.",
  },
  {
    name: "Fix",
    text: "Page structure, copy, metadata, internal links, schema recommendations and technical blockers.",
  },
  {
    name: "Build",
    text: "Supporting content only where it helps authority, buyer education or service-page relevance.",
  },
  {
    name: "Measure",
    text: "Visibility, clicks, rankings and enquiries where tracking is available.",
  },
  {
    name: "Refine",
    text: "Refresh pages and priorities as the data shows what is working and what is stuck.",
  },
];

const sharedQuality: IndBlock[] = [
  {
    name: "No fake guarantees",
    text: "We do not promise rankings, traffic or revenue the data cannot support.",
  },
  {
    name: "Human SEO review",
    text: "AI can help the workflow. Strategy, fact-checking and final judgement stay human-led.",
  },
  {
    name: "Proof over filler",
    text: "Specific pages, user intent, trust signals and measurable next steps.",
  },
];

function industryFaqs(label: string): { q: string; a: string }[] {
  return [
    {
      q: `What is ${label} SEO?`,
      a: `${label} SEO is work focused on the searches, pages, technical signals and conversion paths that matter in this market. The plan starts with demand, page quality and measurable business outcomes.`,
    },
    {
      q: "How long does it take to work?",
      a: "It depends on competition, site condition, authority, technical issues and implementation speed. Existing pages can sometimes improve faster than new content. Sustainable results usually need several months of consistent work.",
    },
    {
      q: "Do we need new content or better existing pages?",
      a: "Usually both, but existing service, product, category and location pages should be checked first. New content only helps when it supports a clear search intent or authority gap.",
    },
    {
      q: "How do you measure success?",
      a: "Rankings, impressions, clicks, landing-page performance, enquiry paths where tracking is available, and whether the right pages are gaining visibility.",
    },
    {
      q: "Can you work with our developer or content team?",
      a: "Yes. SEO direction, content outlines, technical recommendations and QA while your team handles implementation.",
    },
    {
      q: "Do you guarantee rankings?",
      a: "No. Results depend on competition, site quality, authority and market demand. We provide evidence-led work, clear priorities and honest reporting.",
    },
  ];
}

export const industryPages: IndustryPage[] = [
  {
    slug: "finance-crypto",
    h1: "CREDIBILITY",
    red: "BEFORE SCALE.",
    intro:
      "SEO for high-trust finance and crypto businesses where credibility matters as much as traffic. Searchers compare risk, regulation, platform credibility, costs, security and evidence before they act. Thin content or hype-led pages can do more harm than good. We work this market in the Philippines and for international brands, as a studio of Bright Forge SEO.",
    whyTitle: "Finance and crypto pages live in a trust-sensitive SERP",
    why: "Thin claims, vague expertise and aggressive growth language can weaken the page before the technical work even starts. We focus on cautious claims, stronger expertise signals, cleaner technical foundations, content QA and page structures that support qualified demand without overpromising.",
    coverTitle: "What finance and crypto SEO should cover",
    cover: [
      {
        name: "Search intent mapping",
        text: "Informational, local, commercial and comparison searches — each page has a clear role.",
      },
      {
        name: "Page quality and structure",
        text: "Headings, copy, internal links, proof and conversion paths so pages deserve to rank and convert.",
      },
      {
        name: "Technical foundations",
        text: "Crawlability, speed, mobile, schema, indexation and architecture before scaling content.",
      },
      {
        name: "Claims and compliance posture",
        text: "Language legal will actually approve. No carnival PR. Sourceworthy pages.",
      },
    ],
    whoTitle: "Who this suits",
    who: [
      { name: "Finance firms", text: "Advisors and firms that need visibility without weakening trust." },
      { name: "Fintech products", text: "SaaS and platforms where buyers research before they enquire." },
      { name: "Crypto services", text: "Education, products and exchanges that cannot afford hype-led pages." },
      { name: "Comparison and advisory", text: "Sites that have to be cited, not just ranked." },
    ],
    notFit:
      "Not the right fit when the brief is guaranteed rankings, risky claims, thin affiliate pages, fake authority, or anything that could mislead users about financial risk.",
    processTitle: "A practical process for finance and crypto SEO",
    process: sharedProcess,
    qualityTitle: "How we reduce avoidable risk",
    quality: sharedQuality,
    faqs: industryFaqs("finance and crypto"),
    cta: "Need search visibility without cheapening trust? We review pages, claims, technical setup and demand before recommending safe, practical work.",
  },
  {
    slug: "real-estate",
    h1: "LOCATIONS,",
    red: "LISTINGS, TRUST.",
    intro:
      "SEO for property businesses where location, trust, listings and lead quality have to work together. Buyers and sellers compare locations, property types, agents, developments and advice before they ever make contact. We work this market in the Philippines and for international brands, as a studio of Bright Forge SEO.",
    whyTitle: "Make locations, listings and trust easier to find",
    why: "Property searches are shaped by location, property type, buyer intent and proof. A campaign needs more than broad visibility claims if it is going to support enquiries. We focus on area pages, listing structure, agent or brand trust, internal linking, content quality and the signals that help searchers move from research to contact.",
    coverTitle: "What real estate SEO should cover",
    cover: [
      {
        name: "Area and location pages",
        text: "Useful, specific pages — not doorway sludge cloning the same copy across suburbs.",
      },
      {
        name: "Listing and category structure",
        text: "Property types and collections that can be crawled, indexed and converted.",
      },
      {
        name: "Search intent mapping",
        text: "Informational, local, commercial and comparison — each page has a job.",
      },
      {
        name: "Technical foundations",
        text: "Crawlability, speed, mobile, schema, indexation and architecture before scaling content.",
      },
    ],
    whoTitle: "Who this suits",
    who: [
      { name: "Agents and brokerages", text: "Visibility for areas, property types and advice-led searches." },
      { name: "Developers", text: "Project and precinct pages that survive a launch cycle." },
      { name: "Property portals", text: "Catalogue IA, uniqueness and what to noindex." },
      { name: "Real estate service firms", text: "Conveyancing, valuation and related commercial searches." },
    ],
    notFit:
      "Not the right fit when the site has no clear locations, listings, services or enquiry path — or the only request is to rank for huge national terms without building supporting authority.",
    processTitle: "A practical process for real estate SEO",
    process: sharedProcess,
    qualityTitle: "How we keep real estate SEO useful",
    quality: sharedQuality,
    faqs: industryFaqs("real estate"),
    cta: "Want property searches to turn into better enquiries? We audit service pages, location coverage, listing structure and visibility before recommending the next move.",
  },
  {
    slug: "home-services",
    h1: "CALLS, TRUST,",
    red: "SERVICE AREA.",
    intro:
      "SEO for trade and home service businesses where calls, trust and service-area coverage matter. Not just ranking a homepage . strong service pages, local signals, Google Business Profile, review proof and a site that makes it easy to enquire. We work this market in the Philippines and for international brands, as a studio of Bright Forge SEO.",
    whyTitle: "Urgent buyers want to choose the right provider",
    why: "Home service searches are practical, local and often urgent. People want to know who serves their area, what the business does, whether they can trust it and how quickly they can get help. We focus on service pages, location signals, reviews, proof, technical basics and conversion paths that help local buyers move from the result to an enquiry.",
    coverTitle: "What home services SEO should cover",
    cover: [
      {
        name: "Service pages that convert",
        text: "What you do, where you do it, proof, and a next step that works on a phone.",
      },
      {
        name: "Google Business Profile",
        text: "Categories, services, photos, posts, Q&A and tracking — treated as a commercial asset.",
      },
      {
        name: "Local pack and Maps",
        text: "Relevance, proximity, prominence, reviews and landing pages that match the listing.",
      },
      {
        name: "Technical foundations",
        text: "Crawlability, speed, mobile, schema, indexation — before another blog is written.",
      },
    ],
    whoTitle: "Who this suits",
    who: [
      { name: "HVAC and plumbing", text: "Calls from the service area this week, not vanity traffic." },
      { name: "Roofing and electrical", text: "High-intent commercial terms plus local pack." },
      { name: "Cleaning and landscaping", text: "Recurring jobs, area pages, review systems." },
      { name: "Pest control and trades", text: "Recovery after updates, or first-time local coverage." },
    ],
    notFit:
      "Not the right fit when the business cannot handle new leads, has no defined service areas, or wants rankings without fixing weak pages, reviews, tracking or enquiry flow.",
    processTitle: "A practical process for home services SEO",
    process: sharedProcess,
    qualityTitle: "How we protect lead quality",
    quality: sharedQuality,
    faqs: industryFaqs("home services"),
    cta: "Want more useful local enquiries, not just more traffic? We review service pages, GBP signals, local visibility and the conversion path first.",
  },
  {
    slug: "pet-services",
    h1: "CARE, TRUST,",
    red: "LOCAL DEMAND.",
    intro:
      "SEO for pet businesses where local trust, service clarity and helpful content drive real enquiries. Owners search with practical intent: vets near me, grooming prices, trainers, stores, symptoms, services and care questions. We work this market in the Philippines and for international brands, as a studio of Bright Forge SEO.",
    whyTitle: "Pet SEO has to balance care, trust and local search demand",
    why: "Owners compare services, locations, reviews, care standards and practical advice before they book or buy. Visibility has to feel credible, not generic. We focus on service pages, local signals, review quality, useful content, technical health and conversion paths for clinics, groomers, trainers, stores and pet brands.",
    coverTitle: "What pet SEO should cover",
    cover: [
      {
        name: "Service and condition pages",
        text: "The queries owners type at 11pm — without turning the clinic into a content mill.",
      },
      {
        name: "Local signals and GBP",
        text: "Map pack, reviews, photos and location pages that match how the business actually operates.",
      },
      {
        name: "Search intent mapping",
        text: "Informational, local, commercial and comparison — each page has a role.",
      },
      {
        name: "Technical foundations",
        text: "Crawlability, speed, mobile, schema and indexation before scaling content.",
      },
    ],
    whoTitle: "Who this suits",
    who: [
      { name: "Veterinary clinics", text: "Local pack, service pages, trust and booking paths." },
      { name: "Groomers and trainers", text: "Area coverage, reviews and clear service menus." },
      { name: "Pet stores and retail", text: "Local plus category and product discovery." },
      { name: "Shelters and brands", text: "Care content that supports, not cannibalises, the commercial pages." },
    ],
    notFit:
      "Not the right fit when there are no clear services or service areas, poor review practices, or the brief is generic blog output instead of fixing the pages that drive enquiries.",
    processTitle: "A practical process for pet SEO",
    process: sharedProcess,
    qualityTitle: "How we keep pet SEO useful and trustworthy",
    quality: sharedQuality,
    faqs: industryFaqs("pet"),
    cta: "Want pet owners to find the right service faster? We audit local visibility, service pages, reviews, content and enquiry paths first.",
  },
  {
    slug: "gaming",
    h1: "PLAYERS, SIGNUPS.",
    red: "NOT HYPE.",
    intro:
      "SEO for gaming brands that need players, signups and communities . not vanity traffic. Discovery, guides, app comparisons, community searches, reviews, updates and brand queries. Useful demand, without relying on hype. We work this market in the Philippines and for international brands, as a studio of Bright Forge SEO.",
    whyTitle: "Connect search demand to players, signups and revenue",
    why: "Gaming search is messy. The work has to separate useful intent from hype before deciding which pages deserve attention. We focus on crawlable pages, stronger technical foundations, content that matches player intent and measurement that shows whether organic is helping acquisition.",
    coverTitle: "What gaming SEO should actually cover",
    cover: [
      {
        name: "Intent before content",
        text: "Discovery vs guides vs comparisons vs brand — each page type has a job.",
      },
      {
        name: "Patch-proof IA",
        text: "Category language that survives updates. Kill cannibal pages.",
      },
      {
        name: "Page quality and structure",
        text: "Headings, copy, internal links, proof and conversion paths that deserve to rank.",
      },
      {
        name: "Technical foundations",
        text: "Crawlability, speed, mobile, schema, indexation — before scaling a library.",
      },
    ],
    whoTitle: "Who this suits",
    who: [
      { name: "Studios", text: "Game pages, updates and storefronts with real search demand." },
      { name: "Gaming apps and tools", text: "Comparisons, features and signup paths players already search." },
      { name: "Communities and media", text: "Guides that support, not drown, the commercial pages." },
      { name: "Ecommerce stores", text: "Hardware, merch and catalogue pages that can be crawled." },
    ],
    notFit:
      "Not the right fit when the product has no clear search demand, no conversion path, or the goal is only hype rather than measurable discovery, signups or revenue.",
    processTitle: "A practical process for gaming SEO",
    process: sharedProcess,
    qualityTitle: "How we keep gaming SEO credible",
    quality: sharedQuality,
    faqs: industryFaqs("gaming"),
    cta: "Ready to find the searches your players already make? We audit current pages, demand and technical setup before recommending content, fixes or acquisition work.",
  },
  {
    slug: "football",
    h1: "FIXTURES, FANS,",
    red: "MEASURABLE DEMAND.",
    intro:
      "SEO for football brands where fixtures, fans, players, clubs and timing shape search demand. Academies, player questions, club information, apps and fan content all create demand at different points in the season. SEO has to account for that movement. We work this market in the Philippines and for international brands, as a studio of Bright Forge SEO.",
    whyTitle: "Turn match-day and training demand into measurable discovery",
    why: "Football searches range from clubs, academies and coaching to fixtures, products, fan content and local programmes. The plan needs to understand those intents before recommending content or technical work. We focus on useful page structure, technical visibility, stronger trust signals and search paths that support users, players, fans, enquiries or ecommerce.",
    coverTitle: "What football SEO should cover",
    cover: [
      {
        name: "Commercial pages first",
        text: "Trials, memberships, academies and apps — not only a news feed.",
      },
      {
        name: "Seasonal demand",
        text: "Fixtures, players and programmes move. The IA has to survive that.",
      },
      {
        name: "Search intent mapping",
        text: "Informational, local, commercial and comparison — each page has a role.",
      },
      {
        name: "Technical foundations",
        text: "Crawlability, speed, mobile, schema and indexation before another article ships.",
      },
    ],
    whoTitle: "Who this suits",
    who: [
      { name: "Clubs", text: "Fixtures, tickets, memberships and the pages that should convert." },
      { name: "Academies and coaching", text: "Local programmes, trials and parent-led searches." },
      { name: "Football apps", text: "Coverage around the searches users already make before they pick a tool." },
      { name: "Fan platforms and ecommerce", text: "Products and content that do not drown the money pages." },
    ],
    notFit:
      "Not the right fit when there is no clear offer, no useful pages to rank, or the strategy is only social hype without an organic search role.",
    processTitle: "A practical process for football SEO",
    process: sharedProcess,
    qualityTitle: "How we keep football SEO grounded",
    quality: sharedQuality,
    faqs: industryFaqs("football"),
    cta: "Want to see where football search can actually support growth? We audit pages, rankings, content opportunities and technical foundations first.",
  },
];

export function getIndustryPage(slug: string) {
  const page = industryPages.find((p) => p.slug === slug);
  const meta = industries.find((i) => i.slug === slug);
  if (!page || !meta) return null;
  return { ...meta, ...page };
}
