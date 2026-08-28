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

const creativeIndustryPages: IndustryPage[] = [
  {
    slug: "film-production",
    h1: "MAKE THE WORK.",
    red: "MAKE IT FINDABLE.",
    intro: "SEO for film, television and video production companies that need commissioners, brands, collaborators and audiences to find the right work. Showreels can stay cinematic while capabilities, credits, locations and project pages stay clear to search engines.",
    whyTitle: "A beautiful reel is not a search architecture",
    why: "Production sites often lead with motion and mood, then leave capabilities, sectors, locations and credits trapped inside a single portfolio. We build a crawlable route from search to the work without flattening the studio voice or turning every project into a sales page.",
    coverTitle: "What film and production SEO should cover",
    cover: [
      { name: "Capability pages", text: "Production, direction, post, location work and specialist services with a clear role." },
      { name: "Project and credit structure", text: "Films, campaigns, directors, craft and collaborators connected without duplicate archives." },
      { name: "Media performance", text: "Video, stills and scripts loaded with intent so the reel does not hide the rest of the site." },
      { name: "Market and location demand", text: "The places and production searches you can credibly serve, not copied city pages." },
    ],
    whoTitle: "Built for the screen industries",
    who: [
      { name: "Production companies", text: "Commercial, narrative, documentary and branded work." },
      { name: "Post-production houses", text: "Edit, grade, sound and finishing services." },
      { name: "Independent filmmakers", text: "Projects, screenings, press and professional discovery." },
      { name: "Video and location services", text: "Crew, equipment, studios and on-the-ground production support." },
    ],
    notFit: "Not the right fit when the site cannot name its capabilities, show credible work or give a commissioner a route to contact the team.",
    processTitle: "From reel to search route",
    process: sharedProcess,
    qualityTitle: "Keep the craft intact",
    quality: sharedQuality,
    faqs: industryFaqs("film and production"),
    cta: "Want the right people to find the work behind the reel? We review projects, capabilities, technical delivery and enquiry routes first.",
  },
  {
    slug: "animation-vfx",
    h1: "WORK THAT MOVES.",
    red: "PAGES THAT LOAD.",
    intro: "SEO for animation, VFX, motion design, 3D and virtual production studios. Portfolio-led sites need enough structure for buyers to find techniques, services and relevant work without making the experience feel like a stock agency template.",
    whyTitle: "Visual work still needs words, routes and performance",
    why: "A reel can prove taste but cannot carry every search intent. We connect services, techniques, projects and sector experience while controlling the performance cost of large video, canvas and image assets.",
    coverTitle: "What animation and VFX SEO should cover",
    cover: [
      { name: "Technique and service pages", text: "2D, 3D, character, motion, compositing, virtual production and the actual offer." },
      { name: "Portfolio taxonomy", text: "Projects linked by craft and sector without creating hundreds of thin tag pages." },
      { name: "Render and media performance", text: "Video posters, image delivery, JavaScript and Core Web Vitals checked on real devices." },
      { name: "Credits and entities", text: "Studio, artists, projects and collaborators made legible to people and search systems." },
    ],
    whoTitle: "Built for visual production teams",
    who: [
      { name: "Animation studios", text: "Commercial, entertainment, explainer and original work." },
      { name: "VFX houses", text: "Capabilities, credits and production partnerships." },
      { name: "Motion and design teams", text: "Portfolio discovery around style, craft and sector." },
      { name: "3D and virtual production", text: "Specialist pipelines that need clear language around the work." },
    ],
    notFit: "Not the right fit when the brief is to hide every useful word behind a canvas effect or publish copied technique pages with no work behind them.",
    processTitle: "Structure without sanding off the style",
    process: sharedProcess,
    qualityTitle: "Motion with technical discipline",
    quality: sharedQuality,
    faqs: industryFaqs("animation and VFX"),
    cta: "Have a strong reel but weak discovery? We review media performance, portfolio structure and the searches buyers use for your craft.",
  },
  {
    slug: "music-entertainment",
    h1: "RELEASES FADE.",
    red: "CATALOGUES COMPOUND.",
    intro: "SEO for artists, labels, producers, recording studios, venues and entertainment platforms. Search connects the moment around a release or show to the catalogue, venue, service or ticket path people return to later.",
    whyTitle: "Social carries the moment. Search carries the archive.",
    why: "Music and entertainment discovery moves between artist names, tracks, genres, venues, dates, tickets, sessions and services. We give those intents a durable structure instead of relying on a feed that disappears after launch week.",
    coverTitle: "What music and entertainment SEO should cover",
    cover: [
      { name: "Artist and catalogue structure", text: "Artists, releases, credits and related work connected cleanly." },
      { name: "Venue and event discovery", text: "Programme, location, ticket and access information that survives the date." },
      { name: "Studio and production services", text: "Recording, mixing, mastering and production pages with proof." },
      { name: "Platform and media hygiene", text: "Embeds, streaming links, schema and performance without an unusable page." },
    ],
    whoTitle: "Built for sound and live entertainment",
    who: [
      { name: "Artists and labels", text: "Releases, catalogues, press and direct audience paths." },
      { name: "Producers and studios", text: "Services, rooms, equipment, credits and bookings." },
      { name: "Venues and promoters", text: "Events, tickets, access and local discovery." },
      { name: "Entertainment platforms", text: "Large catalogues, personalities and recurring programmes." },
    ],
    notFit: "Not the right fit when there is no owned site, no durable catalogue or service, and every audience route ends on a third-party social profile.",
    processTitle: "Build discovery beyond release week",
    process: sharedProcess,
    qualityTitle: "No generic artist marketing filler",
    quality: sharedQuality,
    faqs: industryFaqs("music and entertainment"),
    cta: "Need search to support releases, tickets, bookings or the back catalogue? We map the durable pages first.",
  },
  {
    slug: "arts-culture",
    h1: "PROGRAMMES, PEOPLE,",
    red: "PUBLIC MEMORY.",
    intro: "SEO for artists, galleries, museums, collectives and cultural organisations. Make exhibitions, collections, programmes and ideas easier to discover without rewriting cultural work into empty campaign language.",
    whyTitle: "Culture needs discovery without losing context",
    why: "Cultural sites hold artists, objects, exhibitions, events, essays and archives that often sit in separate systems. We create useful connections between them, improve access and preserve the language the work deserves.",
    coverTitle: "What arts and culture SEO should cover",
    cover: [
      { name: "Programme and exhibition pages", text: "Dates, artists, venues, access and context with an afterlife beyond the event." },
      { name: "Collections and archives", text: "Taxonomy, internal links and indexation for material worth discovering." },
      { name: "Artist and contributor entities", text: "People, practices and related work connected consistently." },
      { name: "Accessibility and performance", text: "Media-rich pages that remain readable, navigable and fast enough." },
    ],
    whoTitle: "Built for cultural work",
    who: [
      { name: "Artists and galleries", text: "Practices, exhibitions, works and enquiries." },
      { name: "Museums and institutions", text: "Collections, public programmes and visitor information." },
      { name: "Collectives and nonprofits", text: "Projects, communities, funding proof and participation." },
      { name: "Cultural programmes", text: "Festivals, commissions, residencies and public art." },
    ],
    notFit: "Not the right fit when the only goal is raw traffic with no regard for access, context, public value or the integrity of the programme.",
    processTitle: "Findability with cultural judgement",
    process: sharedProcess,
    qualityTitle: "Context before volume",
    quality: sharedQuality,
    faqs: industryFaqs("arts and culture"),
    cta: "Want more people to find the programme, collection or practice? We review archives, events, entities and access routes first.",
  },
  {
    slug: "creative-agencies",
    h1: "YOUR POINT OF VIEW.",
    red: "CLEARLY FOUND.",
    intro: "SEO for brand, design, digital, photography, content and production studios. Be found for the work you want more of without turning the site into a list of every service an agency could possibly sell.",
    whyTitle: "A portfolio proves taste. Structure explains fit.",
    why: "Creative studios often have excellent work and vague service language. We connect capabilities, sectors, projects and thinking so prospective clients can recognise the fit while the studio voice remains intact.",
    coverTitle: "What creative agency SEO should cover",
    cover: [
      { name: "Capability architecture", text: "A focused service system based on the work you actually want." },
      { name: "Case study discovery", text: "Projects linked to capabilities and sectors without formulaic write-ups." },
      { name: "Thought and process content", text: "Useful expertise that earns attention without founder-post filler." },
      { name: "White-label support", text: "Senior SEO behind your account team with approval gates and no poaching." },
    ],
    whoTitle: "Built for independent studios and agency teams",
    who: [
      { name: "Brand and design studios", text: "Identity, strategy, packaging and experience work." },
      { name: "Digital agencies", text: "Web, product and campaign capability with technical search needs." },
      { name: "Photography and content teams", text: "Portfolio-led work with sector and location demand." },
      { name: "Production partners", text: "Specialist teams needing direct and white-label discovery." },
    ],
    notFit: "Not the right fit when the site is expected to rank for every agency service while showing no specialism, proof or clear point of view.",
    processTitle: "Turn the portfolio into a commercial route",
    process: sharedProcess,
    qualityTitle: "No interchangeable agency copy",
    quality: sharedQuality,
    faqs: industryFaqs("creative agency"),
    cta: "Strong work, weak search story? We map capabilities, cases and audience demand without flattening the brand.",
  },
  {
    slug: "fashion-lifestyle",
    h1: "DESIRE FIRST.",
    red: "DISCOVERY BUILT IN.",
    intro: "SEO for independent fashion, streetwear, jewellery, accessories, objects and design-led lifestyle brands. Search should support the collection, material story and product without replacing the brand voice with generic ecommerce copy.",
    whyTitle: "Collections and categories have different jobs",
    why: "Design-led ecommerce often mixes seasonal collections, permanent categories, editorial stories and product detail. We give each layer a clear search role, protect image performance and keep brand language recognisable.",
    coverTitle: "What fashion and lifestyle SEO should cover",
    cover: [
      { name: "Collection and category structure", text: "Evergreen demand separated from seasonal drops and campaign pages." },
      { name: "Product discovery", text: "Materials, fit, use and detail written for buyers, not keyword density." },
      { name: "Image-led performance", text: "Image delivery, alt text, product schema and Core Web Vitals." },
      { name: "Editorial to commerce", text: "Lookbooks, stories and collaborations linked to the products they support." },
    ],
    whoTitle: "Built for design-led commerce",
    who: [
      { name: "Independent labels", text: "Seasonal work with an evergreen discovery layer." },
      { name: "Streetwear and alternative fashion", text: "Drops, collaborations, categories and community language." },
      { name: "Jewellery and accessories", text: "Materials, styles, collections and considered product pages." },
      { name: "Objects and lifestyle brands", text: "Design-led products that need more than marketplace visibility." },
    ],
    notFit: "Not the right fit when the plan is mass-produced category copy, invented product claims or a redesign that strips existing search value.",
    processTitle: "Connect collection, story and product",
    process: sharedProcess,
    qualityTitle: "Brand voice stays recognisable",
    quality: sharedQuality,
    faqs: industryFaqs("fashion and lifestyle"),
    cta: "Want product discovery without generic retail copy? We review collections, categories, images and the path from story to sale.",
  },
  {
    slug: "events-experiential",
    h1: "THE DATE PASSES.",
    red: "THE VALUE SHOULD NOT.",
    intro: "SEO for festivals, venues, exhibitions, nightlife, immersive work and experiential production. Build discovery before the event, make practical information easy to find and retain an archive that supports the next edition.",
    whyTitle: "Event pages need a life before and after the date",
    why: "Live businesses face changing line-ups, dates, venues and ticket states. We plan editions, artists, schedules, access information and archives so search value does not disappear every time the homepage changes.",
    coverTitle: "What events and experiential SEO should cover",
    cover: [
      { name: "Edition and archive structure", text: "Current and past events connected without duplicate or dead pages." },
      { name: "Artist, venue and schedule discovery", text: "Line-ups and practical information linked in ways users can navigate." },
      { name: "Ticket and attendance routes", text: "Clear paths to buy, register, visit or enquire across mobile devices." },
      { name: "Experiential case studies", text: "Work, format, location and production capability made commercially legible." },
    ],
    whoTitle: "Built for live and spatial work",
    who: [
      { name: "Festivals and venues", text: "Programmes, tickets, line-ups, access and local discovery." },
      { name: "Experiential studios", text: "Projects, capabilities and commissioning routes." },
      { name: "Exhibitions and fairs", text: "Editions, exhibitors, visitor information and archives." },
      { name: "Nightlife and entertainment", text: "Recurring events, locations, performers and booking paths." },
    ],
    notFit: "Not the right fit when every event is deleted after the date or vital ticket, access and location information only exists in social posts.",
    processTitle: "Plan the live moment and its afterlife",
    process: sharedProcess,
    qualityTitle: "Useful before clever",
    quality: sharedQuality,
    faqs: industryFaqs("events and experiential"),
    cta: "Planning the next edition or rebuilding an event archive? We map dates, entities, tickets and search continuity first.",
  },
  {
    slug: "media-publishing",
    h1: "PUBLISH OFTEN.",
    red: "STAY FINDABLE.",
    intro: "SEO for publishers, magazines, podcasts, creator businesses and community platforms. Build topic authority and an archive people can use without turning editorial work into a search-volume production line.",
    whyTitle: "A growing archive needs editorial architecture",
    why: "Media sites accumulate tags, authors, episodes, formats and outdated pages quickly. We clean taxonomy, strengthen topic and author routes, protect indexation and connect attention to subscriptions, memberships, sponsorship or products.",
    coverTitle: "What media and publishing SEO should cover",
    cover: [
      { name: "Topic and archive architecture", text: "Sections, tags and formats governed so the library remains navigable." },
      { name: "Author and contributor authority", text: "People, expertise and bodies of work connected consistently." },
      { name: "Audio and video discovery", text: "Episode pages, transcripts, embeds and metadata with a useful page around them." },
      { name: "Editorial to commercial routes", text: "Subscriptions, memberships, sponsors, events and products without hostile UX." },
    ],
    whoTitle: "Built for editorial and creator businesses",
    who: [
      { name: "Publishers and magazines", text: "Large archives, recurring sections and commercial products." },
      { name: "Podcasts and video channels", text: "Episodes, guests, topics and owned audience discovery." },
      { name: "Creator-led brands", text: "Content, products, partnerships and communities on an owned site." },
      { name: "Community platforms", text: "Public knowledge and membership routes with indexation control." },
    ],
    notFit: "Not the right fit when the strategy is automated article volume, copied reporting or publishing solely to chase search terms outside the editorial mission.",
    processTitle: "Make the archive earn its keep",
    process: sharedProcess,
    qualityTitle: "Editorial judgement stays human",
    quality: sharedQuality,
    faqs: industryFaqs("media and publishing"),
    cta: "Is the archive growing faster than its structure? We review taxonomy, authors, formats, indexation and commercial routes.",
  },
];

export const industryPages: IndustryPage[] = [
  ...creativeIndustryPages,
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
    h1: "BEFORE LAUNCH.",
    red: "AFTER THE PATCH.",
    intro:
      "SEO for game studios, publishers, esports organisations, gaming platforms, tools and communities. Discovery starts before launch and keeps changing through reviews, patches, updates, downloadable content and the long life of a title. We connect those moments to wishlists, downloads, signups, sales and community growth without relying on hype.",
    whyTitle: "Build discovery across the life of a game",
    why: "Game search moves between title and franchise names, genres, platforms, characters, mechanics, updates, guides, comparisons and technical support. We decide which demand belongs to the studio, title, store, community or editorial layer, then keep commercial routes visible as the game changes.",
    coverTitle: "What gaming SEO should actually cover",
    cover: [
      {
        name: "Intent before content",
        text: "Discovery vs guides vs comparisons vs brand — each page type has a job.",
      },
      {
        name: "Title and franchise architecture",
        text: "Games, editions, platforms, updates and downloadable content connected without cannibal pages.",
      },
      {
        name: "Launch and evergreen demand",
        text: "Reveal, wishlist, release, review, patch and support pages with different jobs.",
      },
      {
        name: "Technical foundations",
        text: "Crawlability, speed, mobile, schema, indexation — before scaling a library.",
      },
    ],
    whoTitle: "Who this suits",
    who: [
      { name: "Studios and publishers", text: "Title, franchise, platform, press, support and storefront discovery." },
      { name: "Esports organisations", text: "Teams, players, competitions, schedules, tickets and commercial partners." },
      { name: "Gaming platforms and tools", text: "Features, integrations, comparisons and signup paths players already search." },
      { name: "Communities and media", text: "Guides, databases and editorial coverage that remain useful at scale." },
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
