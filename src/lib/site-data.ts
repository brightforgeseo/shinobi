import { media } from "./media";

export const site = {
  name: "Shinobi",
  legal: "Shinobi Studio",
  email: "hello@shinobi.studio",
  phone: "+63 969 620 6182",
  city: "Quezon City · Manila",
  serving: "Philippines · UK · US · AU",
  established: "2019",
  experience: "15+",
  parentName: "Bright Forge SEO",
  parentUrl: "https://brightforgeseo.com",
};

export const nav = [
  { href: "/seo-services", label: "SEO Services" },
  { href: "/development", label: "Development" },
  { href: "/industries", label: "Industries" },
  { href: "/cases", label: "Case Studies" },
  { href: "/blog", label: "Field Notes" },
  { href: "/about", label: "Dojo" },
] as const;

export const services = [
  {
    slug: "technical-seo",
    group: "core" as const,
    index: "01",
    name: "Technical SEO",
    mangaName: "Code Ninjutsu",
    lede: "Fix crawl waste, indexation, architecture, redirects, canonicals, Core Web Vitals and structured data so the site can actually rank.",
    body: "Sites that cannot be crawled, rendered or trusted do not generate enquiries. We treat technical health as the first product: evidence, priority, implementation detail, and a check that the change worked.",
    outcomes: ["Index coverage restored", "Crawl-waste cut", "CWV with owners"],
  },
  {
    slug: "on-page-seo",
    group: "core" as const,
    index: "02",
    name: "On-Page SEO",
    mangaName: "Page Seal",
    lede: "Titles, headings, internal links, content structure, search intent and conversion signals on the pages that should make the phone ring.",
    body: "On-page is not keyword stuffing. It is making money pages match the job the searcher is trying to do, then giving them a reason to enquire.",
    outcomes: ["Intent-aligned titles", "Internal link maps", "CTA friction cut"],
  },
  {
    slug: "content-seo",
    group: "core" as const,
    index: "03",
    name: "Content SEO",
    mangaName: "Story Arc Form",
    lede: "Plan and improve content around search demand, buyer intent and topical gaps. Useful pages that support rankings and enquiries.",
    body: "One heroic blog post does not compound. We brief, write and refresh the pages commercial search actually needs — service pages first, supporting content second.",
    outcomes: ["Topic-gap map", "Briefs writers use", "Refresh calendar"],
  },
  {
    slug: "local-seo",
    group: "core" as const,
    index: "04",
    name: "Local SEO",
    mangaName: "Territory Seal",
    lede: "Google Business Profile, local landing pages, citations, reviews and service-area relevance for SEO in the Philippines. Dominate the map pack and local organic.",
    body: "Local businesses need the phone to ring from people nearby. We strengthen GBP, location pages and trust signals without turning the brand into a directory.",
    outcomes: ["GBP systems", "Location pages", "Review operations"],
  },
  {
    slug: "seo-audits",
    group: "strategy" as const,
    index: "05",
    name: "SEO Audits",
    mangaName: "Status Scan",
    lede: "Diagnose technical, content, authority and conversion issues. Turn findings into a practical action plan with priorities and implementation notes.",
    body: "If your audit needs a table of contents, nobody will do the work. Ours has owners, severity and a date. You leave with a thesis even if you never retain us.",
    outcomes: ["One-page thesis", "Prioritised backlog", "Commercial mapping"],
  },
  {
    slug: "keyword-research",
    group: "strategy" as const,
    index: "06",
    name: "Keyword Research",
    mangaName: "Scouting Jutsu",
    lede: "Map commercial keywords, informational demand, local modifiers, page intent and competitor gaps. Target searches that bring qualified visitors.",
    body: "Keywords are a poor proxy for the job. We map demand, not just volume — including the queries your current tools never surface.",
    outcomes: ["Commercial clusters", "Cannibalization cleanup", "Page-intent map"],
  },
  {
    slug: "link-building",
    group: "strategy" as const,
    index: "07",
    name: "Link Building",
    mangaName: "Alliance Forging",
    lede: "High-quality backlink acquisition. Relevance, quality and risk control. Authority and trust without spam.",
    body: "Links are a side effect of being worth citing. No PBNs, no guest-post mills. If we cannot explain why a site would mention you, we do not pitch it.",
    outcomes: ["Research-led campaigns", "Publisher relationships", "Risk review"],
  },
  {
    slug: "ai-search",
    group: "strategy" as const,
    index: "08",
    name: "AI Search Optimization",
    mangaName: "Oracle Form",
    lede: "Visibility in Google, AI answers, voice and featured snippets. Entity clarity and sourceworthiness on top of SEO fundamentals.",
    body: "AI search depends on clear, crawlable, trustworthy sources. We treat AI readiness as a layer — not a substitute for technical health, content, links and conversion-focused pages.",
    outcomes: ["Entity clarity", "Answer-ready pages", "Citation potential"],
  },
  {
    slug: "website-migration",
    group: "strategy" as const,
    index: "09",
    name: "Website Migration",
    mangaName: "Realm Shift",
    lede: "Protect rankings, equity and tracking when the stack, domain or templates move. Redirects, canonicals, QA and a rollback plan.",
    body: "Migrations are where agencies go quiet. We map URLs, write the redirect spec, sit with engineering and watch GSC until the dust settles.",
    outcomes: ["URL mapping", "Redirect QA", "Post-launch watch"],
  },
  {
    slug: "white-label",
    group: "strategy" as const,
    index: "10",
    name: "White Label SEO",
    mangaName: "Shadow Pact",
    lede: "Delivery for agencies that need senior SEO without building a bench. Your brand. Our dojo. Approval-gated work.",
    body: "We sit behind your account team: technical, content, local, reporting. Clear owners, no mystery tasks, no poaching the client.",
    outcomes: ["White-label reporting", "Scoped sprints", "Your name on the work"],
  },
];

export const industries = [
  {
    slug: "gaming",
    group: "Play & Interactive",
    name: "Games & Interactive",
    mangaName: "Raid Form",
    lede: "Game studios, publishers, esports, tools and interactive worlds. Discovery before launch, through release and long after the first patch.",
    body: "We structure title, franchise, platform, update and community demand without burying the pages that drive wishlists, downloads, signups or sales.",
    fit: ["Studios & publishers", "Esports", "Platforms, tools & communities"],
  },
  {
    slug: "film-production",
    group: "Screen & Sound",
    name: "Film, TV & Production",
    mangaName: "Reel Arc",
    lede: "Production companies, filmmakers, post houses and video teams. Make the work, capabilities and credits findable without flattening the craft.",
    body: "Search has to understand what you make, where you work and why a commissioner, brand or collaborator should choose you. Showreels stay cinematic while service and project pages stay crawlable.",
    fit: ["Film & TV production", "Post-production", "Video and location services"],
  },
  {
    slug: "animation-vfx",
    group: "Screen & Sound",
    name: "Animation, VFX & Motion",
    mangaName: "Motion Frame",
    lede: "Animation studios, VFX houses, motion teams and 3D artists. Portfolio-led search architecture for work that moves.",
    body: "We connect visual portfolios to service, technique, sector and project intent while protecting performance on media-heavy sites.",
    fit: ["Animation studios", "VFX & virtual production", "Motion, 3D & character art"],
  },
  {
    slug: "music-entertainment",
    group: "Screen & Sound",
    name: "Music & Entertainment",
    mangaName: "Signal Stage",
    lede: "Artists, labels, studios, venues and entertainment platforms. Search visibility around releases, tickets, sessions and the catalogue.",
    body: "Social creates moments. Search helps people find the artist, event, venue, track, service or archive when they are ready to listen, book or buy.",
    fit: ["Artists & labels", "Studios & producers", "Venues, promoters & platforms"],
  },
  {
    slug: "arts-culture",
    group: "Art & Culture",
    name: "Arts & Cultural Organisations",
    mangaName: "Gallery Scroll",
    lede: "Artists, galleries, museums, collectives and cultural organisations. Discovery for programmes, exhibitions, collections and ideas.",
    body: "We make archives, events, artist pages and public programmes easier to find without turning cultural work into generic marketing copy.",
    fit: ["Artists & galleries", "Museums & institutions", "Collectives and cultural programmes"],
  },
  {
    slug: "creative-agencies",
    group: "Art & Culture",
    name: "Creative Agencies & Studios",
    mangaName: "Studio Pact",
    lede: "Brand, design, digital, photography and production studios. Be found for the work you want more of, not every service on earth.",
    body: "We turn portfolios, capabilities and sector experience into a search structure without sanding off the studio's point of view. White-label SEO is available behind your account team.",
    fit: ["Brand & design studios", "Digital & content agencies", "Photography and production"],
  },
  {
    slug: "fashion-lifestyle",
    group: "Art & Culture",
    name: "Fashion, Lifestyle & Design",
    mangaName: "Style Guild",
    lede: "Independent labels, streetwear, jewellery, objects and design-led ecommerce. Product discovery without generic retail language.",
    body: "Collections, materials, fit, category language and editorial stories need different jobs. We map them so search supports the brand rather than rewriting it into a catalogue template.",
    fit: ["Fashion & streetwear", "Jewellery & accessories", "Objects and lifestyle brands"],
  },
  {
    slug: "events-experiential",
    group: "Live & Editorial",
    name: "Events, Festivals & Experiential",
    mangaName: "Live Circuit",
    lede: "Festivals, exhibitions, immersive work, nightlife and event producers. Capture discovery before the date and retain value after it.",
    body: "Event pages expire quickly unless the architecture plans for editions, artists, venues, tickets and archives. We build search continuity around the live moment.",
    fit: ["Festivals & venues", "Experiential studios", "Exhibitions and nightlife"],
  },
  {
    slug: "media-publishing",
    group: "Live & Editorial",
    name: "Media, Publishing & Creators",
    mangaName: "Broadcast Ink",
    lede: "Publishers, magazines, podcasts, creators and community platforms. Editorial discovery without content-farm tactics.",
    body: "We work on taxonomy, archives, author and topic authority, media pages and commercial routes so a growing library remains useful and crawlable.",
    fit: ["Publishers & magazines", "Podcasts & creator brands", "Communities and media platforms"],
  },
  {
    slug: "football",
    group: "Sport & Fandom",
    name: "Football (Soccer)",
    mangaName: "Pitch Arc",
    lede: "Clubs, academies, apps and fan businesses. Coverage around the searches supporters, players and parents already make.",
    body: "Football sites drown in news and starve commercial pages. We rebuild around fixtures, trials, memberships, products, apps and local academy demand.",
    fit: ["Clubs", "Academies", "Football apps & media"],
  },
  {
    slug: "finance-crypto",
    group: "Other proven sectors",
    name: "Finance & Crypto",
    mangaName: "Ledger Clan",
    lede: "Fintech, crypto and financial services where trust, claims and source quality matter as much as traffic.",
    body: "Regulated categories punish thin content and carnival PR. We build sourceworthy pages, clean technical access and authority a compliance team can live with.",
    fit: ["Fintech SaaS", "Advisors", "Exchanges & education"],
  },
  {
    slug: "real-estate",
    group: "Other proven sectors",
    name: "Real Estate",
    mangaName: "Territory Scroll",
    lede: "Agents, developers and property businesses. Area pages, listing intent and local search without duplicate-city sludge.",
    body: "Property search is local, comparative and impatient. We map area and service intent, strengthen proof and stop the site cloning itself across suburbs.",
    fit: ["Agencies", "Developers", "Property portals"],
  },
  {
    slug: "home-services",
    group: "Other proven sectors",
    name: "Home Services",
    mangaName: "Call-Out Jutsu",
    lede: "Trades and service companies where the phone has to ring from people in the right area.",
    body: "Home services win on local intent, proof and a page that makes booking obvious. We build service and area coverage, reviews and conversion paths.",
    fit: ["HVAC & plumbing", "Roofing & electrical", "Cleaning & landscaping"],
  },
  {
    slug: "pet-services",
    group: "Other proven sectors",
    name: "Pet Services",
    mangaName: "Companion Seal",
    lede: "Vets and pet businesses where local trust, clear services and useful care content drive action.",
    body: "We cover services, conditions and locations without turning the clinic or pet brand into a content mill.",
    fit: ["Vets", "Grooming & training", "Boarding & retail"],
  },
];

export const development = [
  {
    slug: "astro",
    group: "Modern Frameworks",
    name: "Astro Development",
    lede: "Content-heavy sites that need to ship fast and stay crawlable. Islands where you need them. HTML where you do not.",
  },
  {
    slug: "sveltekit",
    group: "Modern Frameworks",
    name: "SvelteKit Development",
    lede: "Lean apps with a clean render path. Built so Googlebot and buyers see the same thing.",
  },
  {
    slug: "nextjs",
    group: "Modern Frameworks",
    name: "Next.js Development",
    lede: "App Router done without wrecking indexation. SSR, metadata and a render path we can defend.",
  },
  {
    slug: "react",
    group: "Core Technologies",
    name: "React Development",
    lede: "Interfaces that do not lie to crawlers. We sit with engineering until the SPA stops hiding the product.",
  },
  {
    slug: "wordpress",
    group: "Core Technologies",
    name: "WordPress Development",
    lede: "Themes, CWV and an editor your team will not break every Tuesday. SEO built into the templates.",
  },
];

export const cases = [
  {
    slug: "bridal-designer",
    client: "Bridal dress designer",
    sector: "Bridal fashion",
    year: "3 mo",
    image: media.caseKite,
    result: "+137.5%",
    resultLabel: "organic traffic · +118.1% impressions",
    headline: "Commercial page relevance and image-led quality across research-stage dress queries.",
    summary:
      "Grew bridal dress SEO by tightening commercial page relevance, image-led page quality and search coverage on the queries people use before they book a fitting.",
    metrics: [
      { value: "+137.5%", label: "Organic traffic" },
      { value: "+118.1%", label: "Impressions" },
      { value: "3 mo", label: "Timeline" },
    ],
    work: ["On-Page SEO", "Content SEO", "Technical SEO"],
  },
  {
    slug: "leather-wallet",
    client: "Leather wallet brand",
    sector: "E-commerce",
    year: "3 mo",
    image: media.caseHelio,
    result: "+49.3%",
    resultLabel: "organic clicks · +45.2% CTR",
    headline: "Snippets, page alignment and the message users saw before they clicked.",
    summary:
      "Lifted organic clicks by improving search snippets, aligning product pages to intent, and making the SERP message match the page.",
    metrics: [
      { value: "+49.3%", label: "Organic clicks" },
      { value: "+45.2%", label: "CTR" },
      { value: "3 mo", label: "Timeline" },
    ],
    work: ["On-Page SEO", "Content SEO"],
  },
  {
    slug: "football-app",
    client: "Football application",
    sector: "Sports & entertainment",
    year: "3 mo",
    image: media.caseNorthline,
    result: "+34%",
    resultLabel: "organic traffic · +29.3% impressions",
    headline: "Coverage around the searches users already made before choosing a tool.",
    summary:
      "Grew organic traffic by covering the jobs football users search before they pick an app — not feature language nobody types.",
    metrics: [
      { value: "+34%", label: "Organic traffic" },
      { value: "+29.3%", label: "Impressions" },
      { value: "3 mo", label: "Timeline" },
    ],
    work: ["Keyword Research", "Content SEO"],
  },
  {
    slug: "pest-control",
    client: "Pest control recovery",
    sector: "Local services",
    year: "6 mo",
    image: media.caseNorthline,
    result: "+128%",
    resultLabel: "clicks after a core update · +147% impressions",
    headline: "Recovered after a core update by tightening service relevance, local intent and trust.",
    summary:
      "Clicks came back after a Google core update once service relevance, technical health, local intent coverage and trust signals were pulled into one system.",
    metrics: [
      { value: "+128%", label: "Clicks" },
      { value: "+147%", label: "Impressions" },
      { value: "6 mo", label: "Timeline" },
    ],
    work: ["Local SEO", "Technical SEO", "Content SEO"],
  },
  {
    slug: "fintech-saas",
    client: "FinTech SaaS",
    sector: "AI search",
    year: "LLM",
    image: media.caseKite,
    result: "+71.7%",
    resultLabel: "LLM sessions · 80 countries",
    headline: "Educational content and support docs that AI platforms actually cite.",
    summary:
      "Deep educational content and support documentation helped a FinTech SaaS earn high-engagement AI referral traffic — not just classic blue links.",
    metrics: [
      { value: "+71.7%", label: "LLM sessions" },
      { value: "1,322", label: "LLM sessions" },
      { value: "80", label: "Countries" },
    ],
    work: ["AI Search Optimization", "Content SEO"],
  },
  {
    slug: "speediance-uk",
    client: "Fitness equipment · UK",
    sector: "Fitness",
    year: "3 mo",
    image: media.caseHelio,
    result: "+119%",
    resultLabel: "total clicks · +135% impressions",
    headline: "UK fitness brand, competitive SERPs, clearer commercial coverage.",
    summary:
      "Improved organic visibility for a UK fitness equipment brand by tightening catalogue relevance and the queries that actually convert.",
    metrics: [
      { value: "+119%", label: "Total clicks" },
      { value: "+135%", label: "Impressions" },
      { value: "3 mo", label: "Timeline" },
    ],
    work: ["On-Page SEO", "Content SEO", "Technical SEO"],
  },
];

export const first90 = [
  {
    days: "Days 1–15",
    name: "Diagnosis & commercial mapping",
    text: "Crawl data, GSC, GA4, rankings, competitors, conversion paths and priority pages. A practical map of the fixes that should move enquiries.",
  },
  {
    days: "Days 16–30",
    name: "Technical & on-page foundations",
    text: "Indexation, metadata, page structure, internal links, schema, tracking gaps and conversion blockers. The work that unblocks everything else.",
  },
  {
    days: "Days 31–60",
    name: "Content & authority",
    text: "Improve existing pages, brief new content, close topic gaps and build authority signals around the pages that generate leads.",
  },
  {
    days: "Days 61–90",
    name: "Test, report, next stage",
    text: "Review rankings, clicks, enquiries and page performance. Refine the campaign from evidence — not a recap deck.",
  },
];

export const nextSteps = [
  {
    n: "01",
    name: "We review your search position",
    text: "Site health, rankings, competitors, tracking and the pages most likely to drive leads.",
  },
  {
    n: "02",
    name: "We find the commercial gaps",
    text: "Technical issues, weak content, missing proof, unclear CTAs and conversion friction.",
  },
  {
    n: "03",
    name: "We map the growth plan",
    text: "A practical roadmap for SEO, content, authority, AI-search readiness and conversion improvements.",
  },
  {
    n: "04",
    name: "We scope it only if there is a fit",
    text: "No generic package if the site needs something more specific. If more SEO is not the answer yet, we say so.",
  },
];

export const whoWeHelp = [
  {
    name: "Game and interactive studios",
    text: "Studios, publishers, esports, platforms and communities that need discovery around titles, tools, releases and players.",
  },
  {
    name: "Film, animation and production",
    text: "Production companies, filmmakers, VFX houses and motion teams with visual work that still needs crawlable routes to buyers.",
  },
  {
    name: "Music, art and live culture",
    text: "Artists, labels, venues, galleries, festivals and cultural programmes connecting moments, catalogues and audiences.",
  },
  {
    name: "Fashion and design-led brands",
    text: "Independent labels, streetwear, objects, jewellery and lifestyle ecommerce where brand language cannot become generic retail copy.",
  },
  {
    name: "Creative agencies and studios",
    text: "Brand, design, digital, photography and production teams that need direct or white-label senior SEO.",
  },
  {
    name: "Media, publishers and creators",
    text: "Editorial libraries, podcasts, creator businesses and communities that need durable discovery beyond the feed.",
  },
];

export const people = [
  {
    name: "Ben Lowe",
    role: "Founder · 15+ years SEO",
    image: media.castKenji,
    bio: "Technical SEO, content, local and international campaigns. Leads strategy, commercial judgement and quality standards. Marketing degree, London Metropolitan.",
  },
  {
    name: "Sassin Lowe",
    role: "Co-founder",
    image: media.castMira,
    bio: "Keeps the dojo pointed at commercial outcomes — not vanity dashboards. Owns client fit and how work gets scoped.",
  },
  {
    name: "Jani A. Cañonero",
    role: "Head of team",
    image: media.castAsha,
    bio: "Philippines-based delivery. Clear ownership, implementation checks and reporting that a sceptical operator can sit through.",
  },
];

export const faqs = [
  {
    q: "Is Shinobi part of Bright Forge SEO?",
    a: "Yes. Shinobi is the themed SEO studio. Bright Forge SEO is the parent company. Same Quezon City dojo, same evidence rules, different armour.",
  },
  {
    q: "What do businesses usually need first?",
    a: "Most campaigns start with technical SEO, keyword mapping, on-page, internal linking and content-gap work. Local businesses need GBP and location signals. National or ecommerce sites need architecture, category content and authority.",
  },
  {
    q: "How long before anything moves?",
    a: "Technical fixes and on-page can show movement in weeks. Commercial growth usually takes 3–6 months. Competitive markets need 6–12 months of consistent work. We put dates on the thesis.",
  },
  {
    q: "Do you guarantee rankings?",
    a: "No. Google controls results and competitors move. We guarantee transparent work, clear priorities, evidence-led recommendations, and reporting on what changed.",
  },
  {
    q: "Do we still need SEO if AI search is changing Google?",
    a: "Yes. AI search depends on clear, crawlable, trustworthy sources. AI readiness sits on top of technical health, content, links, reviews and conversion-focused pages.",
  },
  {
    q: "Can you work outside the Philippines?",
    a: "Yes. Philippine and international companies — strategy, technical implementation, content, local SEO or an offshore partnership.",
  },
  {
    q: "What makes this different from cheap SEO packages?",
    a: "No mystery tasks. No thin busywork. We prioritise the fixes that affect rankings, leads and revenue, and we show the changes, the data and the next step.",
  },
];

export const clients = [
  "TeamStats",
  "Speediance",
  "Phoenix Spa",
  "Bridal atelier",
  "Leather goods",
  "Football app",
  "Pest control",
  "FinTech SaaS",
];

export const quotes = [
  {
    text: "Working with them has been a huge benefit for TeamStats. They understand our needs and deliver consistently.",
    author: "Tom Stanbury",
    role: "TeamStats",
    side: "left" as const,
  },
  {
    text: "The phone started ringing from people who were already looking. That is the only ranking report I care about.",
    author: "Operations lead",
    role: "Home services",
    side: "right" as const,
  },
  {
    text: "They sat in the technical work instead of sending a PDF. Rankings and enquiries both moved.",
    author: "Growth lead",
    role: "Ecommerce",
    side: "left" as const,
  },
];

export const notes = [
  {
    slug: "six-month-seo-myth",
    title: "The six-month SEO myth",
    date: "Mar 2026",
    excerpt:
      "Some technical defects clear in weeks. Competitive head terms take a quarter or two. Anyone selling a miracle month is selling you a story.",
    body: "Campaigns do not start working on a calendar invite. Technical fixes can move coverage quickly. Content and authority compound. We date the thesis so nobody is guessing — and we say so if the category will take longer than you have patience for.",
  },
  {
    slug: "audits-that-miss",
    title: "Why most SEO audits miss the real problems",
    date: "Jan 2026",
    excerpt:
      "If the audit needs a table of contents, nobody will do the work. Owners, severity, dates — or it is theatre.",
    body: "The useful audit is short. It separates blockers from nice-to-have clean-up. It names the pages that should generate enquiries. It does not congratulate itself for finding 400 missing alt attributes.",
  },
  {
    slug: "ai-cannot-kill-seo",
    title: "Why AI cannot kill SEO even if it wants to",
    date: "Nov 2025",
    excerpt:
      "AI answers still need crawlable, trustworthy sources. The job changed. The need for the work did not.",
    body: "For twenty years SEO had one job: rank. Now the front page is also an answer. That makes every click more expensive and the page that earns it more important. Fundamentals first. AI readiness on top.",
  },
  {
    slug: "local-seo-small-business",
    title: "Local SEO when the phone has to ring",
    date: "Oct 2025",
    excerpt:
      "GBP, service-area pages, reviews and a page that makes the next step obvious. Manila, Cebu, Davao, then the rest of the map.",
    body: "Small service businesses in the Philippines do not need a blog calendar. They need to win the searches people type when something is broken, then convert the visit. Map pack, location pages, proof, tracking. Same method Bright Forge uses on parent-company work.",
  },
];

export const commandLayers = [
  {
    name: "SEO monitoring",
    text: "GSC, ranking, page and query signals for movement, risk and opportunity. Always-on — not a monthly export.",
  },
  {
    name: "Opportunity detection",
    text: "High-impression pages, weak CTR, query gaps, competitor pressure, internal-link gaps and content opportunities.",
  },
  {
    name: "Delivery QA",
    text: "Work checked against evidence and implementation quality before anyone writes Done.",
  },
  {
    name: "Reporting intelligence",
    text: "What changed, why it matters, what should happen next. A commercial narrative — not a screenshot of rankings.",
  },
  {
    name: "AI search readiness",
    text: "Entity clarity, answer readiness, technical access, proof signals and citation potential on priority pages.",
  },
  {
    name: "Approval-gated ops",
    text: "The system proposes. Publishing, client-facing messages and material changes stay human.",
  },
];

export const croPoints = [
  "Clear above-the-fold value proposition and CTA",
  "Service pages that answer cost, process, timing and trust",
  "Reviews, proof and credentials near decision points",
  "Mobile calls, forms, quote paths and tracking",
  "GA4, GSC, form, call and GBP reporting tied to organic",
];
