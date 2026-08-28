import { services } from "./site-data";

export type ServiceBlock = { name: string; text: string };
export type ServiceFaq = { q: string; a: string };

export type ServiceShape =
  | "crawl"
  | "anatomy"
  | "cluster"
  | "map"
  | "findings"
  | "grid"
  | "risk"
  | "answer"
  | "timeline"
  | "split";

export type ServicePage = {
  slug: string;
  shape: ServiceShape;
  jp: string;
  heroTone: "paper" | "ink" | "red";
  cta: string;
  h1: string;
  red: string;
  intro: string;
  pillars: { k: string; v: string }[];
  whyTitle: string;
  why: string;
  includedTitle: string;
  included: ServiceBlock[];
  whoTitle: string;
  who: ServiceBlock[];
  processTitle: string;
  process: ServiceBlock[];
  extraTitle?: string;
  extra?: ServiceBlock[];
  avoidTitle?: string;
  avoid?: ServiceBlock[];
  faqs: ServiceFaq[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "technical-seo",
    shape: "crawl",
    jp: "技",
    heroTone: "ink",
    cta: "Send the crawl before the next template change.",
    h1: "SITE HEALTH,",
    red: "INDEXATION, GROWTH.",
    intro:
      "A website can look polished and still be difficult for search engines to crawl, render, index or trust. Technical SEO finds the hidden problems behind stalled rankings, wasted crawl budget, slow templates, duplicate URLs and risky site changes. We turn the audit into practical fixes . not a spreadsheet graveyard. Shinobi is a Quezon City SEO studio of Bright Forge SEO. For creative sites, that often means video-heavy portfolios, game or platform routes, event archives and JavaScript experiences that look excellent but hide the work.",
    pillars: [
      { k: "Indexation", v: "Find the pages Google should and should not index." },
      { k: "Performance", v: "Speed, Core Web Vitals and mobile experience." },
      { k: "Release safety", v: "Protect rankings during migrations, redesigns and CMS changes." },
    ],
    whyTitle: "Technical problems usually hide behind normal-looking pages",
    why: "Most businesses do not discover technical SEO problems because the homepage looks broken. They discover them when rankings stall, important pages refuse to index, traffic drops after a redesign, or the site gets slower every time another plugin, script or template is added. If Google wastes time on duplicates, misses key pages, struggles to render content or finds inconsistent signals, content and links have to work harder than they should.",
    includedTitle: "What we check",
    included: [
      { name: "Crawl access and indexation", text: "Whether Google can reach the right pages and ignore the wrong ones: robots.txt, XML sitemaps, canonicals, noindex, redirects, crawl traps and index bloat." },
      { name: "Core Web Vitals and speed", text: "Templates, scripts, images, hosting and layout shifts that slow the site or make money pages harder to use — prioritised by commercial impact." },
      { name: "Site architecture and internal links", text: "Whether structure pushes authority toward service, category and location pages instead of burying them behind weak nav or orphaned URLs." },
      { name: "JavaScript and rendering", text: "Whether key content, links, metadata and structured data are available to crawlers — especially on JS-heavy sites where visible is not crawlable." },
      { name: "Schema and entity signals", text: "Clean structured data, remove unsupported claims, align schema with visible content, and make business, service, FAQ and local signals easier to interpret." },
      { name: "Migration and release QA", text: "Redesigns, CMS changes, domain moves, URL changes and template releases — protected before, during and after launch." },
    ],
    whoTitle: "Useful when SEO work is happening, but the site still feels held back",
    who: [
      { name: "Rankings stuck below page one", text: "Content and links are improving but rankings are not. Crawlability, indexation, architecture or page experience may be the ceiling." },
      { name: "About to migrate or redesign", text: "A redesign can wipe out years of organic progress if redirects, URL mapping, canonicals, metadata and crawl controls are handled badly." },
      { name: "Ecommerce and large catalogues", text: "Filters, faceted navigation, category depth, duplicate URLs and product churn create crawl waste and indexation mess quickly." },
      { name: "Service businesses with weak lead flow", text: "Slow pages, broken tracking, poor mobile layouts, buried service pages and unclear internal links reduce both rankings and enquiries." },
    ],
    processTitle: "From crawl export to fixes developers can actually ship",
    process: [
      { name: "Technical discovery", text: "Crawls, Search Console, templates, index coverage, speed data, analytics and manual checks. Find the issues that can actually affect rankings, traffic or leads." },
      { name: "Priority diagnosis", text: "Separate real blockers from harmless noise. A crawl can contain thousands of warnings. We prioritise by commercial impact, risk and implementation effort." },
      { name: "Fix briefs and implementation", text: "Developer-ready instructions — or we handle the fixes. Every recommendation explains the problem, the fix, the URLs and how success will be checked." },
      { name: "QA and monitoring", text: "Verify after release, compare crawls, watch Search Console. Technical SEO is not finished when a ticket moves to Done." },
    ],
    extraTitle: "Developer friendly",
    extra: [
      { name: "For founders", text: "Clear commercial priorities, not technical fog." },
      { name: "For marketers", text: "Practical fixes linked to rankings, traffic and conversions." },
      { name: "For developers", text: "Specific tickets, expected behaviour and QA criteria." },
    ],
    faqs: [
      { q: 'Will a crawl export tell us what to fix?', a: 'No. A crawl dumps warnings. We rank them by commercial impact, write developer-ready tickets, and check Search Console after the release.' },
      { q: "What are technical SEO services?", a: "They improve crawlability, indexation, speed, structure, rendering, schema and release safety — so search engines can find, understand and rank important pages." },
      { q: "Is technical SEO different from an SEO audit?", a: "An audit diagnoses. Technical SEO services go further: prioritise, write implementation briefs, help developers fix them, check the release and monitor after Google recrawls." },
      { q: "What issues usually matter most?", a: "Indexation problems, blocked pages, duplicate URLs, broken canonicals, slow templates, redirect chains, weak internal links, mobile usability, JavaScript rendering and unsupported schema." },
      { q: "Can you work with our developer?", a: "Yes. Developer-ready tickets, SEO risk explained, staging review, release tests and Search Console monitoring. We can also implement when access and platform allow." },
      { q: "How quickly does technical SEO improve rankings?", a: "Critical crawl and indexation fixes can move within weeks. Speed, architecture and internal linking usually compound over one to three months as Google recrawls." },
      { q: "Do small websites need technical SEO?", a: "Yes, but lighter: crawl checks, indexation cleanup, speed, schema, mobile and stronger internal links to service pages." },
      { q: "Do ecommerce sites need more?", a: "Usually. Filters, variants, category duplication, product churn, pagination, internal search URLs and faceted navigation waste crawl budget fast." },
      { q: "Can it help AI search visibility?", a: "Indirectly. AI systems still rely on crawlable, trustworthy source material. Clean structure, schema, entity clarity and accessible content help both." },
    ],
  },
  {
    slug: "on-page-seo",
    shape: "anatomy",
    jp: "頁",
    heroTone: "paper",
    cta: "Pick the money page that should convert first.",
    h1: "PAGES THAT RANK",
    red: "AND CONVERT.",
    intro:
      "Some pages do not need another blog supporting them. They need better structure, clearer intent, stronger proof, cleaner internal links and a reason for the visitor to act. On-page SEO is where we make service pages, local pages, category pages and landing pages clearer for Google and more convincing for buyers. Shinobi is a Quezon City SEO studio of Bright Forge SEO. We apply it to title pages, releases, projects, collections, artist profiles and capability pages where the language has to stay recognisable while the intent becomes clear.",
    pillars: [
      { k: "Clarify", v: "Intent, titles, headings, copy and page purpose." },
      { k: "Connect", v: "Internal links, related services and supporting content." },
      { k: "Convert", v: "Proof, FAQs, CTAs and enquiry paths." },
    ],
    whyTitle: "A page can rank and still fail commercially",
    why: "Ranking is only one job. A commercial page also has to explain the offer, match intent, show enough trust, answer objections and give a clear next step. If a page gets impressions but few clicks, ranks but attracts the wrong traffic, or gets visits without enquiries, the page itself usually needs work.",
    includedTitle: "What we optimise",
    included: [
      { name: "Search intent alignment", text: "Whether the page matches why someone searched, whether the angle fits the SERP, and whether the offer answers the buyer quickly enough." },
      { name: "Title tags and meta descriptions", text: "Relevance, click-through and commercial clarity — without stuffing the same keyword into every line." },
      { name: "H1 and heading structure", text: "Easier to scan, easier to understand, easier for search engines to map around the main topic and supporting questions." },
      { name: "Service and offer copy", text: "Clearer inclusions, buyer-fit language, proof points, objections, process details and practical next steps." },
      { name: "Internal links and anchors", text: "Connect related service pages, supporting articles and priority URLs so authority flows to the pages that need to rank." },
      { name: "FAQs and answer blocks", text: "Question-led content that handles objections, supports long-tail searches and gives AI answers clearer source material." },
      { name: "Schema recommendations", text: "Page-level schema that supports visible content — FAQ, Service, Breadcrumb and WebPage where it fits." },
      { name: "Proof and conversion signals", text: "Trust signals, examples, case-study links, CTA placement and contact prompts so rankings have a better chance of becoming leads." },
    ],
    whoTitle: "Priority pages should earn their place in search",
    who: [
      { name: "Service pages", text: "High-value offers that need to rank for commercial intent and convert visitors into enquiries." },
      { name: "Local landing pages", text: "Location or service-area pages where local relevance, proof, contact clarity and internal links need to work together." },
      { name: "Category and ecommerce pages", text: "Collection pages where crawlable copy, product discovery and commercial copy affect organic sales." },
      { name: "Blog and support assets", text: "Articles that already earn impressions but need better structure, stronger answers or clearer internal links." },
    ],
    processTitle: "From page audit to measurable improvement",
    process: [
      { name: "Page audit and baseline", text: "Rankings, Search Console, copy, metadata, headings, internal links, schema, conversion path and competitor page patterns." },
      { name: "Intent and page mapping", text: "Confirm primary intent, supporting topics, related pages and the role of the page before rewriting anything." },
      { name: "Structure and copy improvements", text: "Titles, headings, body, FAQs, proof, CTAs and page flow — clearer for search engines and buyers." },
      { name: "Internal links and technical checks", text: "Contextual links, indexability, schema fit, and support for the wider site structure." },
      { name: "QA and measurement", text: "Watch rankings, impressions, clicks, CTR, enquiries and behaviour to decide the next improvement." },
    ],
    avoidTitle: "What we avoid",
    avoid: [
      { name: "No keyword stuffing", text: "Repeating a phrase until the page reads badly is not strategy." },
      { name: "No metadata-only SEO", text: "Title tags help. They are not enough when the page fails to explain the offer." },
      { name: "No thin AI padding", text: "Generic paragraphs to hit a word count make the page weaker." },
      { name: "No pointless FAQ spam", text: "FAQs handle real objections. They should not exist only to stuff schema." },
    ],
    faqs: [
      { q: 'Is this just title tags and meta?', a: 'No. Titles help clicks. The page still has to match intent, prove the offer, and give a next step that a buyer will take.' },
      { q: "What is included in on-page SEO?", a: "Search intent checks, title tags, meta descriptions, H1s, heading structure, body copy, internal links, image alt text, schema recommendations, FAQs, proof placement and conversion-focused CTAs." },
      { q: "Is on-page SEO just keyword placement?", a: "No. Keyword placement is one part. Good on-page SEO makes the page clearer, more useful, better structured and more likely to earn the enquiry." },
      { q: "Which pages do you start with?", a: "Impressions with poor CTR, page-two commercial terms, service pages that get visits but few enquiries, cannibalising URLs, and pages with weak proof or vague CTAs." },
      { q: "How do you measure it?", a: "Keyword movement, Search Console impressions/clicks/CTR, landing-page sessions, enquiries and calls, internal-link flow, and snippet or AI-extractability signals." },
    ],
  },
  {
    slug: "content-seo",
    shape: "cluster",
    jp: "章",
    heroTone: "paper",
    cta: "Show us the service pages the content is meant to support.",
    h1: "CONTENT THAT EARNS",
    red: "ITS PLACE.",
    intro:
      "SEO content should do more than fill a blog. We plan, write and improve content that targets the right searches, supports your service pages, builds topical authority and helps turn organic traffic into enquiries. Search intent, not guesswork. Shinobi is a Quezon City SEO studio of Bright Forge SEO. For creative brands, the content system may include launch pages, production notes, catalogues, interviews, guides and archives, each supporting a real audience or commercial route.",
    pillars: [
      { k: "Search intent", v: "What the buyer actually needs." },
      { k: "Page mapping", v: "Where each topic should live." },
      { k: "Performance", v: "Rankings, clicks and enquiries — then refresh." },
    ],
    whyTitle: "Better content gives Google a reason to rank you and buyers a reason to trust you",
    why: "Most business content fails because it is written around what the company wants to say, not what the buyer is trying to solve. Good SEO content answers the search, proves the business can help, and points visitors toward the next sensible action. We use keyword research, SERP review, competitor checks and page-level data to decide what should be written, improved, or left alone.",
    includedTitle: "What is included",
    included: [
      { name: "SEO content strategy", text: "Topics mapped to real searches, buyer stages and priority pages. Topic clusters, calendars, keyword grouping and intent review." },
      { name: "SEO content writing", text: "Service pages, blogs, landing pages, local pages, FAQs and guides — structure, headings, natural coverage and conversion-focused CTAs." },
      { name: "Content optimisation", text: "Existing pages improved from ranking data and GSC: rewritten sections, metadata, H1/H2, answer blocks, internal links, freshness and proof." },
      { name: "Outlines and editorial QA", text: "If your team writes in-house, we handle the SEO layer: outlines, draft review, intent checks, headings and internal-link direction." },
      { name: "AI search ready content", text: "Services, locations, proof, FAQs and entity signals that search engines and AI answer systems can actually understand. SEO-first." },
    ],
    whoTitle: "Content with a commercial job — not another pile of posts",
    who: [
      { name: "Service businesses", text: "Stronger pages, better local visibility and enquiry-led content." },
      { name: "Ecommerce and product-led brands", text: "Category, guide and comparison content that supports buying decisions." },
      { name: "In-house marketing teams", text: "You already write. You need SEO outlines, structure and quality control." },
      { name: "Agencies and partners", text: "Reliable white-label SEO content without generic filler." },
    ],
    processTitle: "How we turn content into search assets",
    process: [
      { name: "Audit", text: "Current rankings, page quality, Search Console, internal links and content gaps." },
      { name: "Map", text: "Keywords and topics to the right pages, so blogs do not compete with service pages." },
      { name: "Outline", text: "Intent, headings, internal links, proof, FAQs and the conversion angle — before anyone writes." },
      { name: "Write", text: "Useful, readable content with SEO structure and enough commercial clarity to earn enquiries." },
      { name: "Connect", text: "Internal-link direction so supporting content passes relevance to priority pages." },
      { name: "Improve", text: "Track rankings, impressions, clicks and leads. Refresh when the data says so." },
    ],
    extraTitle: "Senior thinking before the first draft",
    extra: [
      { name: "Topic clusters", text: "Connected themes, not random articles that never support the money pages." },
      { name: "Buyer-led copy", text: "Questions, objections, proof and decision points — not vague traffic promises." },
      { name: "Content refreshes", text: "Existing pages improved when rankings stall, facts age or the SERP changes." },
      { name: "Useful reporting", text: "Rankings, impressions, clicks, links and enquiries — not a word-count report." },
    ],
    faqs: [
      { q: 'Do you just write blogs?', a: 'No. Service pages, location pages, guides and refreshes come first. Supporting articles exist to feed those money pages, not replace them.' },
      { q: "Do you just write blogs?", a: "No. Service pages, location pages, guides, FAQs and refreshes come first. Blogs exist to support money pages, not replace them." },
      { q: "Is the writing AI?", a: "AI can help the workflow. Strategy, fact-checking and final polish stay human-led." },
      { q: "How do you decide what to write?", a: "Search demand, buyer questions, existing impressions, competitor gaps and which commercial page the piece should support." },
    ],
  },
  {
    slug: "local-seo",
    shape: "map",
    jp: "領",
    heroTone: "red",
    cta: "Send the GBP and the service area you actually cover.",
    h1: "MAPS, GBP,",
    red: "LOCAL LEADS.",
    intro:
      "Local SEO is not just about showing up on a map. It is about helping nearby customers find the right business, trust it quickly and take the next step . call, book, visit, ask for directions or send an enquiry. Stronger Google Business Profile performance, cleaner local signals, better location pages. Shinobi is a Quezon City SEO studio of Bright Forge SEO. Local search matters to venues, studios, galleries, tattoo shops, production services, retailers and events when people need to visit, book or hire nearby.",
    pillars: [
      { k: "GBP", v: "Accuracy, services, photos, posts, Q&A and tracking." },
      { k: "Maps", v: "Local pack visibility for the services and areas that matter." },
      { k: "Leads", v: "Calls, forms, direction requests — not vanity traffic." },
    ],
    whyTitle: "Nearby customers compare a small set of businesses",
    why: "The Google Business Profile, review quality, map position, photos, services, website and call path all influence that decision before the visitor reads a long sales page. Local SEO needs more than citation submissions. Information must be accurate, the profile active, the website supporting the same services and locations, and the enquiry path clear.",
    includedTitle: "What we fix",
    included: [
      { name: "Google Business Profile optimisation", text: "Categories, services, description, hours, service areas, products, photos, posts, Q&A, tracking links and completeness. Accurate, active, built around how customers search." },
      { name: "Google Maps and local pack strategy", text: "Search terms, locations and competitor profiles. Relevance, proximity, prominence, reviews, landing pages and data consistency." },
      { name: "Citation and NAP cleanup", text: "Name, address, phone, website and core details consistent across important local platforms. Messy citations weaken trust." },
      { name: "Review growth and response systems", text: "Ethical collection and response. No fake reviews, no spam. Real customer feedback handled professionally." },
      { name: "Location and service page support", text: "City pages, service pages and contact pages. GBP traffic leaks if the landing page is weak, slow or generic." },
      { name: "Local SEO tracking", text: "Local rankings, GBP actions, calls, website clicks, direction requests, form enquiries and Search Console visibility." },
    ],
    whoTitle: "When customers choose on area, availability, reviews and convenience",
    who: [
      { name: "Service-area businesses", text: "Plumbers, clinics, trades, consultants, legal, cleaning — calls from a defined location." },
      { name: "Physical locations", text: "Shops, offices, clinics, gyms, restaurants, schools that need Maps and near-me searches." },
      { name: "Multi-location brands", text: "Consistent GBP, location-page structure, review standards and reporting across each branch." },
      { name: "Messy local data", text: "Duplicate listings, old phone numbers, moved addresses, weak reviews or location pages that do not convert." },
    ],
    processTitle: "How we work",
    process: [
      { name: "Local visibility audit", text: "GBP, local rankings, competitors, citations, reviews, landing pages, tracking and service-area signals." },
      { name: "Profile and signal cleanup", text: "Correct data, categories and services. Clean listing issues. Public information matches the website." },
      { name: "Page and proof improvements", text: "Service pages, location pages, internal links, trust, photos, reviews and clear enquiry paths." },
      { name: "Ongoing local growth", text: "Monitor rankings, GBP actions, reviews, competitors and enquiry quality. Adjust around the locations and services that matter." },
    ],
    extraTitle: "Local trust signals we check",
    extra: [
      { name: "Categories", text: "Correct primary and secondary GBP categories." },
      { name: "NAP", text: "Accurate name, address, phone and opening hours." },
      { name: "Service areas", text: "Match how the business actually operates." },
      { name: "Reviews", text: "Requests and responses without spam or scripts." },
      { name: "Photos", text: "Real people, premises, work or results — not stock." },
      { name: "Tracking", text: "Calls, forms, clicks and direction requests." },
    ],
    faqs: [
      { q: 'Is local SEO only for shopfronts?', a: 'No. Trades, clinics, legal, repair and home services need Maps, GBP and a landing page that can take the call, even when you go to the customer.' },
      { q: "Is local SEO only for shops?", a: "No. It also matters for service-area businesses — trades, clinics, legal, repair, consultants and home services — whether customers visit you, you visit them, or both." },
      { q: "How long does local SEO take?", a: "Some GBP improvements show within weeks if the listing is incomplete. Competitive local rankings usually take two to six months depending on market, reviews, website and competitors." },
      { q: "What is included in GBP optimisation?", a: "Category review, service setup, description, service-area checks, photo guidance, posts, Q&A, review standards, tracking links, duplicate listing checks and alignment with the website." },
      { q: "Do reviews affect local SEO?", a: "Yes — trust, conversion and visibility. We do not recommend fake reviews. Consistent requests, professional responses and clear ownership." },
      { q: "Do we need separate location pages?", a: "Usually, if you serve multiple important areas or have more than one branch. Useful and specific — not doorway pages stuffing city names." },
      { q: "How do you measure it?", a: "Local rankings, GBP actions, calls, website clicks, direction requests, form enquiries, Search Console and landing-page performance. The goal is qualified local enquiries." },
    ],
  },
  {
    slug: "seo-audits",
    shape: "findings",
    jp: "診",
    heroTone: "ink",
    cta: "Tell us what dropped, and when.",
    h1: "A ROADMAP",
    red: "YOU CAN USE.",
    intro:
      "More SEO activity does not help if the site has the wrong problem. Many sites do not need more random blogs, another backlink package or cosmetic metadata edits. They need to understand why organic performance is stuck, dropping or failing to convert. A proper audit connects technical evidence, content quality, search demand, authority and buyer behaviour into a roadmap. Shinobi is a Quezon City SEO studio of Bright Forge SEO. We audit how a creative site handles media, portfolios, releases, archives, commerce and conversion, then separate the real blockers from visual preferences.",
    pillars: [
      { k: "Evidence", v: "Crawl, GSC, rankings and conversion paths before we recommend." },
      { k: "Prioritised", v: "Blockers, opportunities, quick wins and noise — separated." },
      { k: "Implementable", v: "Written for owners, marketers, developers and writers." },
    ],
    whyTitle: "When the next SEO move is not obvious",
    why: "If a site has a clear technical blocker, fix it. If you already have a strong roadmap, execute it. When rankings, traffic, leads or stakeholder confidence are unclear, an audit prevents expensive guesswork.",
    includedTitle: "What we audit",
    included: [
      { name: "Crawlability and indexation", text: "Discover, crawl, render and index the right URLs: robots, noindex, canonicals, sitemaps, redirects and crawl waste." },
      { name: "Architecture and internal links", text: "How authority and relevance move. Whether priority pages are buried. Whether anchors support the right topics." },
      { name: "Technical SEO and performance", text: "Core Web Vitals, mobile, status codes, duplicates, JavaScript risks, schema and template problems." },
      { name: "Content quality and intent", text: "Whether key pages match the SERP, answer the buyer, avoid cannibalisation and have enough depth and proof." },
      { name: "Keyword and opportunity mapping", text: "Current rankings, missing opportunities and competitor coverage — tied to demand and business value." },
      { name: "Authority and backlink profile", text: "Quality, risky patterns, lost links, anchors, competitor gaps and the pages most likely to benefit." },
      { name: "Local and service-page signals", text: "Location relevance, service clarity, trust, NAP consistency and local conversion paths." },
      { name: "Conversion and enquiry path", text: "CTAs, proof, forms, contact clarity and whether the visitor has enough reason to act." },
    ],
    whoTitle: "When to audit",
    who: [
      { name: "Traffic dropped", text: "Organic is down and the cause is not obvious." },
      { name: "Keywords stuck", text: "Important terms are stuck despite ongoing SEO work." },
      { name: "Impressions, few leads", text: "The site gets seen. It does not get enough clicks or enquiries." },
      { name: "Before a move", text: "Redesign, migration, CMS change or domain move is planned." },
      { name: "GSC warnings", text: "Crawl, indexing or page-experience issues showing up." },
      { name: "Need a roadmap", text: "Before spending more on content, links or technical work." },
    ],
    processTitle: "From raw evidence to a practical roadmap",
    process: [
      { name: "Access and baseline", text: "Goals, priority pages, analytics, Search Console, rankings and the problem the audit needs to answer." },
      { name: "Crawl and technical diagnosis", text: "Indexation, templates, performance, structured data and technical blockers." },
      { name: "Content, intent and competitors", text: "Priority pages against SERP competitors, keyword mapping, depth, proof, internal links and conversion." },
      { name: "Authority and risk", text: "Backlink quality, gaps, anchors, lost links and off-page risks." },
      { name: "Roadmap and handover", text: "Prioritised findings, evidence, recommended fixes, owners and order of work." },
    ],
    extraTitle: "What you receive",
    extra: [
      { name: "Summary for decision makers", text: "Plain English: what is holding the site back, which fixes matter, what to do next." },
      { name: "Technical and content findings", text: "Evidence across crawl, indexation, structure, performance, content and conversion." },
      { name: "Implementation roadmap", text: "Tasks by impact, urgency, complexity and likely owner." },
      { name: "Strategic next steps", text: "Whether you need technical SEO, content, links, local, migration support or a wider campaign." },
    ],
    avoidTitle: "What we do not do",
    avoid: [
      { name: "No fake scores", text: "A random website score is not a strategy." },
      { name: "No issue dumping", text: "A 200-item export is not useful if nobody knows what matters." },
      { name: "No guaranteed ranking claims", text: "An audit uncovers blockers. It cannot honestly guarantee rankings." },
      { name: "No one-size checklist", text: "Ecommerce, local service and national B2B need different priorities." },
    ],
    faqs: [
      { q: 'Is a tool score an audit?', a: 'No. Tools list symptoms. The job is to say which issues hold this site back, who owns the fix, and what to do first.' },
      { q: "Is a tool export an audit?", a: "No. Tools report symptoms. The valuable part is interpreting what matters for this site, this market and this business." },
      { q: "What do you prioritise first?", a: "Blockers: indexation failures, broken templates, redirect errors, canonical conflicts, critical crawl issues and tracking that stops you judging performance." },
    ],
  },
  {
    slug: "keyword-research",
    shape: "grid",
    jp: "図",
    heroTone: "paper",
    cta: "Send the services and locations that have to pay for themselves.",
    h1: "DEMAND MAPPED",
    red: "TO PAGES.",
    intro:
      "Good keyword research tells you what to do next. Not a dump from Ahrefs. A roadmap: which terms matter, which page should own them, whether you can realistically compete, and what work is needed. Priorities, not noise. Shinobi is a Quezon City SEO studio of Bright Forge SEO. We map how players, commissioners, fans, buyers, visitors and collaborators search, then decide whether the answer is a title page, project, category, event, artist profile or guide.",
    pillars: [
      { k: "Mapped", v: "Search demand mapped to pages." },
      { k: "Priorities", v: "Not every term deserves a page." },
      { k: "Usable", v: "A roadmap your team can actually run." },
    ],
    whyTitle: "Search demand into decisions",
    why: "Tool exports show possible terms. Strategy decides which terms matter, which page should target them, whether the site can compete and what work is needed. We filter data into decisions.",
    includedTitle: "What you get",
    included: [
      { name: "Keyword opportunity set", text: "Cleaned and grouped: intent, commercial relevance, difficulty, volume context and priority notes." },
      { name: "Page mapping", text: "Primary and secondary terms mapped to existing URLs or new pages — create, rewrite, merge, expand or monitor." },
      { name: "Competitor keyword gaps", text: "Reviewed for business fit. Genuine opportunities separated from brand noise and vanity rankings." },
      { name: "Search intent and SERP notes", text: "Whether Google wants a service page, collection, guide, comparison, local result, video or FAQ." },
      { name: "Quick-win targets", text: "Queries where existing pages already have enough relevance or impressions to justify focused work." },
      { name: "Content and page roadmap", text: "Which pages to build or improve first, how they connect, and what each is meant to achieve." },
    ],
    whoTitle: "Different sites need different maps",
    who: [
      { name: "Service businesses", text: "Core services, location modifiers, comparison queries, pricing questions and problem-led searches around enquiry pages." },
      { name: "Ecommerce and catalogues", text: "Category, subcategory, product, buying-guide and comparison intent — so the wrong page type is not asked to rank." },
      { name: "Local SEO campaigns", text: "Service-area, suburb, city, GBP and local-intent opportunities without doorway location pages." },
      { name: "Agencies and white-label", text: "Maps that give writers, developers and account managers a brief — not a messy research export." },
    ],
    processTitle: "How we turn keyword data into a roadmap",
    process: [
      { name: "Business and site context", text: "Offer, customers, priority services, locations, margins, current pages, conversion goals, GSC and rankings." },
      { name: "Discovery and cleanup", text: "Candidate terms from multiple sources. Remove noise, duplicates, impossible terms and anything that does not fit." },
      { name: "SERP and intent validation", text: "What Google is actually rewarding — page type, format, depth and searcher expectation." },
      { name: "Page mapping and prioritisation", text: "Group terms into page targets. Flag existing-page opportunities. Order by commercial impact." },
      { name: "Roadmap and handoff", text: "Usable map with actions, priorities and next steps for content, on-page, internal links and tracking." },
    ],
    avoidTitle: "What we refuse",
    avoid: [
      { name: "No raw keyword dumps", text: "A spreadsheet of 2,000 terms is not a strategy." },
      { name: "No volume chasing", text: "High volume with no commercial fit is noise." },
      { name: "No competitor copying", text: "We do not recommend a term just because a competitor ranks for it." },
      { name: "No cannibalisation traps", text: "One intent, one page. We map to avoid splitting equity." },
    ],
    faqs: [
      { q: 'How is this different from an Ahrefs export?', a: 'Exports list possible terms. We decide which matter, which URL owns them, whether you can compete, and what work the page needs.' },
      { q: "How is this different from an Ahrefs export?", a: "Exports show possible terms. We decide which matter, which page owns them, whether you can compete and what work is needed." },
      { q: "Do you map to existing pages?", a: "Yes — current page, rewrite, merge or new page. That is how you avoid duplication and cannibalisation." },
      { q: "Do you include a content plan?", a: "When content is the right action. Some keywords need articles. Others need stronger service, category or location pages, FAQs or internal links." },
      { q: "Can our writers use the map directly?", a: "Yes. Page targets, priority terms, intent notes, actions and supporting topics." },
    ],
  },
  {
    slug: "link-building",
    shape: "risk",
    jp: "印",
    heroTone: "ink",
    cta: "Show the target pages. We will say if they are ready.",
    h1: "SAFER AUTHORITY.",
    red: "NOT VOLUME.",
    intro:
      "Link building for businesses that need relevant backlinks without a risky profile. Relevance, quality and risk control. Transparent reporting. No PBNs, no bulk DA packages, no exact-match abuse. Shinobi is a Quezon City SEO studio of Bright Forge SEO. For creative brands, strong authority can come from relevant press, collaborators, festivals, institutions, communities and specialist publications, not bulk guest-post inventory.",
    pillars: [
      { k: "Relevance", v: "Links that would make sense to a real reader." },
      { k: "Risk-aware", v: "Qualification before outreach. Review before reporting." },
      { k: "Tied to strategy", v: "Pages that deserve authority — after the page is ready." },
    ],
    whyTitle: "Why link building needs care",
    why: "Backlinks are still an authority signal, especially in competitive markets. They work best when the site already has strong technical SEO, useful content and clear target pages. Cheap links are usually expensive later.",
    includedTitle: "What we build",
    included: [
      { name: "Editorial outreach links", text: "Publishers, resource owners, niche sites and businesses — earned, not bought in bulk." },
      { name: "Competitor link gap opportunities", text: "Links helping competitors, separated from spam and unsuitable placements." },
      { name: "Resource and citation links", text: "Directories, associations, local citations, supplier and partner pages that are relevant and vetted." },
      { name: "Lost link and mention reclamation", text: "Broken backlinks, lost links, redirected assets and unlinked brand mentions." },
      { name: "Content-led link assets", text: "Guides, data pages, tools, case studies or resources that make a request credible." },
      { name: "Profile cleanup guidance", text: "Risky patterns, toxic sources and whether a disavow is actually warranted." },
    ],
    whoTitle: "When the foundations are ready",
    who: [
      { name: "Competitive campaigns", text: "Decent content and technical foundations, outranked by stronger domains." },
      { name: "Service pages that need authority", text: "On-page is solid. The page lacks enough external trust to compete." },
      { name: "Messy backlink profiles", text: "Bought links in the past, inherited poor SEO, or no clear view of help vs risk." },
      { name: "Agencies needing safe fulfilment", text: "Handled carefully, reported clearly, without putting client relationships at risk." },
    ],
    processTitle: "From backlink audit to safer authority growth",
    process: [
      { name: "Audit and baseline", text: "Referring domains, anchors, target pages, quality, lost links, competitor strength and risk patterns." },
      { name: "Strategy and target mapping", text: "Which pages should earn authority, which keywords they support, and whether content or technical fixes come first." },
      { name: "Prospecting and qualification", text: "Relevance and quality checks. Remove risky sites. Prioritise what fits the campaign." },
      { name: "Outreach and placement review", text: "Each link reviewed for anchor, target URL, page context and quality before it is reported." },
      { name: "Reporting and adjustment", text: "Links built, rankings, GSC visibility, referral signals. Adjust the mix as the site and market change." },
    ],
    avoidTitle: "What we refuse",
    avoid: [
      { name: "No PBNs or link farms", text: "Short-term movement, long-term risk. Not for serious businesses." },
      { name: "No bulk DA or DR packages", text: "A number is not a reason to place a link." },
      { name: "No exact-match anchor abuse", text: "Natural anchors. Controlled mix." },
      { name: "No irrelevant placements", text: "If a reader would not click it, we do not want it." },
    ],
    faqs: [
      { q: 'Do you sell a monthly link package?', a: 'No. No PBNs, no bulk DA buys, no guessed volume. We audit the profile, pick pages that are ready, then qualify placements one by one.' },
      { q: "Are backlinks still important?", a: "Yes, especially in competitive markets. Best when technical SEO, content and internal linking are already in shape." },
      { q: "Do you use PBNs?", a: "No. No expired-domain networks, link farms or bulk guest-post packages." },
      { q: "How do you decide if a link is safe?", a: "Relevance, indexation, page and site quality, organic visibility, outbound patterns, anchor, placement context. No single metric is enough." },
      { q: "How many backlinks do we need?", a: "Depends on market, competitors, target pages and the authority gap. We start with an audit, not a guessed number." },
      { q: "Should we build links before fixing the site?", a: "Not always. Thin, slow or misaligned pages waste backlinks. We check readiness first." },
    ],
  },
  {
    slug: "ai-search",
    shape: "answer",
    jp: "答",
    heroTone: "paper",
    cta: "Ask the buyer questions your pages still dodge.",
    h1: "AI SEARCH.",
    red: "SEO FIRST.",
    intro:
      "AI search is not a magic replacement for SEO. It rewards the same things serious SEO has always worked toward: technically accessible pages, clear entities, useful answers, strong proof, real authority and content that helps buyers decide. We make priority pages easier for Google, AI Overviews, ChatGPT-style answers and Perplexity-style citations to understand, verify and cite. Shinobi is a Quezon City SEO studio of Bright Forge SEO. We make projects, people, products and expertise easier to understand and cite without turning every page into an FAQ block or replacing SEO fundamentals with AI language.",
    pillars: [
      { k: "SEO-first", v: "No “SEO is dead” nonsense." },
      { k: "Answer-ready", v: "Snippets, AI Overviews and direct answers." },
      { k: "Commercial", v: "Enquiries — not vanity AI mentions." },
    ],
    whyTitle: "Why AI search visibility starts with strong SEO",
    why: "The goal is not to manipulate AI systems. The goal is to remove ambiguity. Common gaps: services described in agency language, claims with no evidence, weak internal links, schema that does not clarify the page, content that answers definitions but avoids buying questions, and competitors being cited where you are absent.",
    includedTitle: "What we check in an AI search audit",
    included: [
      { name: "Entity clarity", text: "Whether Google can connect your brand, services, locations, people, reviews, social profiles and source pages." },
      { name: "Answer readiness", text: "Whether priority pages answer direct buyer questions in a format that works for humans, snippets and answer-led search." },
      { name: "Technical access", text: "Crawlability, indexation, rendering, canonicals, schema, internal links and structure." },
      { name: "Proof and trust", text: "Reviews, case studies, credentials and commercial proof visible enough to support a recommendation." },
      { name: "Competitor citations", text: "Where competitors appear in AI-influenced SERPs, snippets and answer results — so we can close the gap." },
      { name: "Commercial impact", text: "Tied to rankings, impressions, clicks, qualified enquiries and the service pages most likely to generate revenue." },
    ],
    whoTitle: "Who this is for",
    who: [
      { name: "Service businesses", text: "Competing on expertise and trust." },
      { name: "Local companies", text: "Stronger discovery in Google and AI-assisted results." },
      { name: "B2B firms", text: "Buyers research before they enquire." },
      { name: "Ecommerce brands", text: "Complex products or comparison journeys." },
      { name: "Vague sites", text: "Good services, underpowered website content." },
    ],
    processTitle: "How we make pages easier to understand, trust and cite",
    process: [
      { name: "Clarify the offer", text: "Rewrite vague service copy into buyer language: who it is for, what it solves, what is included, when it makes sense." },
      { name: "Build answer-ready sections", text: "Summaries, comparison blocks, FAQs, process explanations and decision-support content." },
      { name: "Strengthen technical and structured signals", text: "Crawlability, schema, headings, internal links, canonicals and content structure." },
      { name: "Connect proof to priority pages", text: "Reviews, examples, case studies, locations, team expertise and trust signals where they are needed." },
      { name: "Monitor and refine", text: "Traditional SEO first, then AI-influenced visibility checks where they produce useful intelligence." },
    ],
    extraTitle: "Bigger than one platform",
    extra: [
      { name: "Google AI Overviews", text: "Clarity, usefulness and authority of pages that may support answer-led SERPs." },
      { name: "Featured snippets and PAA", text: "Direct answers, definitions, comparisons and next steps." },
      { name: "ChatGPT-style research", text: "Easier to describe accurately through positioning, proof, entity consistency and crawlable sources." },
      { name: "Perplexity-style citations", text: "Source pages that can support cited answers and commercial research queries." },
      { name: "Local and review-led discovery", text: "Local SEO, reviews, service areas and proof as trust signals." },
    ],
    faqs: [
      { q: 'Is this a replacement for SEO?', a: 'No. AI Overviews and answer engines still need crawlable pages, clear entities, proof and useful answers. We tighten those, not sprinkle prompts.' },
      { q: "Is AI search optimisation different from SEO?", a: "It is not a replacement. It is an extra layer that makes technical setup, content, proof, reviews and service pages easier for Google, AI Overviews and answer-led systems to understand, verify and cite." },
      { q: "Can you guarantee ChatGPT or AI Overviews?", a: "No. Nobody can. We improve the signals that make inclusion more plausible: crawlability, entity clarity, structured content, useful answers, reviews and authority." },
      { q: "What makes a page more likely to be cited?", a: "Clear answers, accurate entities, visible proof, consistent business information, useful service detail, structured headings, internal links, relevant schema, reviews and external authority." },
      { q: "Do we need new content?", a: "Most campaigns start by improving existing priority pages. New content is added when buyer questions are unanswered or topical coverage is missing." },
      { q: "How do you measure AI search visibility?", a: "Traditional SEO first — rankings, impressions, clicks, landing pages, conversions. Then whether the brand and priority pages appear in answer-led SERPs and AI Overviews where tracking is practical." },
    ],
  },
  {
    slug: "website-migration",
    shape: "timeline",
    jp: "移",
    heroTone: "ink",
    cta: "Bring us in before URLs and templates lock.",
    h1: "SAFER LAUNCHES.",
    red: "NOT BLIND HANDOFF.",
    intro:
      "Most migration losses are preventable. We map risk before launch, plan redirects with evidence, and stay for launch support . redesigns, CMS changes, domain moves, ecommerce replatforms, URL restructures and site consolidations. Shinobi is a Quezon City SEO studio of Bright Forge SEO. Creative migrations need extra care around image libraries, reels, project URLs, event archives, product collections and campaign pages that a redesign is tempted to delete.",
    pillars: [
      { k: "Risk mapped", v: "Before URLs and templates are locked in." },
      { k: "Redirects", v: "Planned with evidence. Not everything to the homepage." },
      { k: "Launch support", v: "Staging QA, go-live checklist, post-launch watch." },
    ],
    whyTitle: "What can go wrong",
    why: "Important URLs disappear. Redirects leak relevance. Metadata and headings change by accident. Indexation controls are wrong. Tracking breaks. Internal links point to the past. SEO should be in the room before developers lock the structure.",
    includedTitle: "What you get",
    included: [
      { name: "Migration risk review", text: "Pages, templates, rankings, traffic sources and technical controls that need protection." },
      { name: "URL and redirect map", text: "Old URLs, recommended destinations, redirect notes and priority flags for pages with rankings, traffic or backlinks." },
      { name: "Staging SEO QA", text: "Indexation settings, metadata, templates, canonicals, internal links, schema and tracking gaps." },
      { name: "Launch-day checklist", text: "Redirects, robots, sitemaps, analytics, Search Console, tracking, priority pages and developer handoff." },
      { name: "Post-launch monitoring", text: "Crawl issues, redirect behaviour, GSC coverage, rankings, landing pages and urgent fixes." },
      { name: "Developer-ready notes", text: "What matters most, where the evidence is, and how to verify each fix." },
    ],
    whoTitle: "Support for the moves that affect organic search",
    who: [
      { name: "Website redesigns", text: "Templates and IA changing under live rankings." },
      { name: "CMS changes", text: "New platform, new URL rules, new render path." },
      { name: "Domain changes", text: "Equity, canonicals and Search Console property moves." },
      { name: "Ecommerce replatforming", text: "Products, categories, filters, discontinued SKUs and faceted navigation." },
      { name: "URL structure changes", text: "Folders, trailing slashes, parameters and localisation." },
      { name: "Site consolidation", text: "Merging properties without dumping equity into a 404." },
    ],
    processTitle: "A practical process for safer launches",
    process: [
      { name: "Baseline and URL inventory", text: "Crawl the current site. Priority URLs. Preserve, redirect, merge or remove." },
      { name: "Redirect and destination mapping", text: "Relevant destinations. Flag weak matches. Implementation notes for CMS, server or developers." },
      { name: "Staging SEO review", text: "Compare templates, metadata, content, canonicals, structured data, internal links, sitemaps and indexation." },
      { name: "Launch checklist and sign-off", text: "Redirects, tracking, robots, sitemaps and core templates ready from an SEO-risk view." },
      { name: "Post-launch crawl and monitoring", text: "Live redirects, important pages, Search Console, organic movement." },
      { name: "Triage and recovery", text: "If issues appear, prioritise by risk and commercial impact." },
    ],
    avoidTitle: "What we will not promise",
    avoid: [
      { name: "No promise of zero movement", text: "Some short-term movement is normal. We reduce avoidable losses." },
      { name: "No bulk homepage redirects", text: "Match old URLs to the most relevant live destination." },
      { name: "No launch without measurement", text: "Baseline first. Watch after." },
      { name: "No checklist theatre", text: "The map has to match this site, not a generic PDF." },
    ],
    faqs: [
      { q: 'When should SEO join a rebuild?', a: 'Before the new URL map and templates are locked. After launch we can recover, but lost equity is harder than a planned redirect map.' },
      { q: "Will a migration affect rankings?", a: "It can. Short-term movement is normal when URLs, templates or platform signals change. The goal is to reduce avoidable losses." },
      { q: "When should SEO be involved?", a: "Before the new structure and templates are finalised — during planning, before URLs, navigation, templates, redirect logic and tracking are locked." },
      { q: "Do you create redirect maps?", a: "Yes — from crawl data, ranking pages, traffic pages, backlink URLs and the planned structure." },
      { q: "Can you work with our developers?", a: "Yes. Requirements, QA notes, redirect guidance, staging feedback and post-launch checks." },
      { q: "Can you fix a migration that already went wrong?", a: "Yes, depending on the issue. Lost URLs, redirect mistakes, indexation, content changes, tracking gaps — then recovery in priority order." },
    ],
  },
  {
    slug: "white-label",
    shape: "split",
    jp: "裏",
    heroTone: "red",
    cta: "Tell us the client type. We stay behind your brand.",
    h1: "YOUR BRAND.",
    red: "OUR DOJO.",
    intro:
      "SEO outsourcing for agencies that need depth without payroll drag. This is not a cheap package page. It is for teams that already own client trust and need a reliable SEO partner behind them. We do not contact or poach your clients. Shinobi is a Quezon City SEO studio of Bright Forge SEO. We support agencies and studios behind the scenes on technical SEO, research, content, migrations and QA while their client relationship and creative direction stay theirs.",
    pillars: [
      { k: "Your name", v: "Reports and summaries under your agency brand." },
      { k: "Our judgement", v: "Senior review before anything is client-ready." },
      { k: "No poaching", v: "Behind the scenes unless you invite us onto a call." },
    ],
    whyTitle: "Who this is for",
    why: "Cheaper fulfilment is easy to find. Client-safe SEO delivery is harder. The danger is not just bad rankings — it is poor judgement reaching your client under your name.",
    includedTitle: "What we handle",
    included: [
      { name: "SEO audits", text: "Technical, content, intent, indexation, competitor and conversion checks with prioritised fixes." },
      { name: "Technical SEO", text: "Crawlability, internal linking, schema, speed guidance, redirects, canonicals and migration support." },
      { name: "Keyword research", text: "Buyer-led maps, content opportunities, page targeting and practical demand analysis." },
      { name: "Content SEO", text: "Briefs, optimisation, gap analysis, editorial review and page rewrites built for ranking and conversion." },
      { name: "Local SEO", text: "GBP checks, local landing pages, citation direction and local SERP analysis." },
      { name: "Link quality support", text: "Backlink audits, prospect review, risk checks and white-hat direction. No spam packages." },
      { name: "Client reporting", text: "Monthly updates for stakeholders: rankings, traffic, work completed, issues and next priorities." },
      { name: "AI search readiness", text: "Entity clarity, answer-ready structure, schema and visibility recommendations." },
    ],
    whoTitle: "Agency shapes we already sit behind",
    who: [
      { name: "Web design agencies", text: "Add technical SEO, content and launch support without becoming an SEO department." },
      { name: "PPC and social agencies", text: "Keep clients longer by adding organic alongside paid." },
      { name: "Freelancers and consultants", text: "Bring in depth when the brief moves past your capacity." },
      { name: "Overloaded SEO teams", text: "Audits, overflow, reporting and specialist review when the bench is tight." },
    ],
    processTitle: "How the partnership works",
    process: [
      { name: "Partnership fit", text: "Your model, client type, communication style and the SEO support you actually need." },
      { name: "Scope and access", text: "Deliverables, timelines, data access, reporting format and how requests are handled." },
      { name: "SEO review", text: "Site, market, competitors, content, technical setup and opportunities before recommendations." },
      { name: "Delivery and QA", text: "Checked for accuracy, impact, client-readiness and risk before it goes back to your team." },
      { name: "White label report", text: "A report your agency can present, plus optional internal notes." },
      { name: "Ongoing support", text: "What matters next — not activity for the sake of a retainer." },
    ],
    extraTitle: "What your client sees vs what you get",
    extra: [
      { name: "Client-facing", text: "Branded reports. Plain English. Rankings, traffic, conversions. Completed work, blockers, next priorities." },
      { name: "Agency-facing", text: "Scope clarity. Strategic notes. Talking points for calls. A partner who will not poach." },
    ],
    avoidTitle: "Lines we will not cross",
    avoid: [
      { name: "No spam link packages", text: "We will not put your name on risky shortcuts." },
      { name: "No fake ranking guarantees", text: "Not under our name. Not under yours." },
      { name: "No recycled AI dumps", text: "AI-assisted drafts get human editorial review." },
      { name: "No vague activity reports", text: "Evidence, or it does not ship." },
      { name: "No direct client contact", text: "Unless you explicitly ask us onto a call." },
    ],
    faqs: [
      { q: 'Will you speak to our clients?', a: 'Not by default. You keep the relationship. Reports can go out under your brand. We join a call only if you ask.' },
      { q: "How does white label SEO work?", a: "You keep the client relationship. We work behind the scenes on strategy, audits, technical, content direction, reporting and campaign support. Deliverables can go out under your brand." },
      { q: "Can reports use our branding?", a: "Yes. Client-facing under your name and structure. Internal notes for your team so you understand evidence and next steps first." },
      { q: "Do you work directly with our clients?", a: "Not by default. If you want us on a technical call or handover, we agree the rules first." },
      { q: "Is this a cheap offshore VA?", a: "No. White label delivery needs strategy, prioritisation, QA and judgement — work you can confidently present." },
      { q: "Do you offer white label link building?", a: "Strategy, prospect review, outreach direction and quality control. We do not sell spam packages." },
    ],
  },
];

export function getServicePage(slug: string) {
  const page = servicePages.find((p) => p.slug === slug);
  const meta = services.find((s) => s.slug === slug);
  if (!page || !meta) return null;
  return { ...meta, ...page };
}

export function relatedServices(slug: string) {
  const rest = services.filter((s) => s.slug !== slug);
  const i = Math.max(0, services.findIndex((s) => s.slug === slug));
  return rest.slice(i).concat(rest.slice(0, i)).slice(0, 4);
}
