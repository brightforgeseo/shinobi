export type FieldNoteSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type FieldNoteArticle = {
  slug: string;
  dek: string;
  readingTime: string;
  sections: FieldNoteSection[];
  takeaway: string;
};

export const fieldNoteArticles: FieldNoteArticle[] = [
  {
    slug: "six-month-seo-myth",
    dek: "SEO has no universal six-month switch. Different problems move on different clocks, so a useful plan dates the evidence rather than selling one deadline.",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Six months is a planning shortcut, not a law",
        paragraphs: [
          "The phrase survives because it sounds responsible. It is long enough to discourage miracle promises and short enough to fit a proposal. The problem is that it collapses several different jobs into one date.",
          "A blocked template, broken canonical or internal-link problem may improve after Google recrawls the affected pages. A new commercial page in a competitive market may need repeated refinement, stronger supporting content and authority before it reaches the same point.",
        ],
      },
      {
        heading: "Start with the kind of problem",
        paragraphs: [
          "Technical recovery, local search, new content and competitive category growth do not share a timetable. We first identify what is actually stopping the page, then estimate when the next useful signal should appear.",
        ],
        points: [
          "Critical crawl and indexation fixes can show movement in weeks.",
          "On-page changes may improve clicks before rankings move far.",
          "Local SEO depends on location strength, reviews, relevance and competition.",
          "New authority and content usually compound across several months.",
        ],
      },
      {
        heading: "Date the thesis",
        paragraphs: [
          "Every campaign needs a thesis that can be challenged. It should name the pages, the expected signal and the date we will review it. That turns waiting into measurement.",
          "If impressions rise without clicks, the snippet or intent may be wrong. If a technically fixed page is still absent from the index, the diagnosis may be incomplete. If rankings move but enquiries do not, the page has a commercial problem, not a patience problem.",
        ],
      },
      {
        heading: "What a sensible first 90 days looks like",
        paragraphs: [
          "The opening period should establish the baseline, remove obvious blockers and improve priority pages. It should not burn three months publishing articles while the service pages remain vague or untracked.",
        ],
        points: [
          "Baseline Search Console, analytics, rankings and lead paths.",
          "Fix technical blockers and tracking gaps.",
          "Map commercial demand to the right pages.",
          "Improve existing money pages before adding volume.",
          "Review the evidence and change the next sprint accordingly.",
        ],
      },
    ],
    takeaway: "Do not buy a date. Buy a diagnosis, an expected signal and a review point.",
  },
  {
    slug: "audits-that-miss",
    dek: "A useful SEO audit does not win by finding the most warnings. It wins by showing which problem matters, who owns it and how we will prove the fix landed.",
    readingTime: "7 min read",
    sections: [
      {
        heading: "Most audit exports are inventories",
        paragraphs: [
          "Crawlers are excellent at collecting symptoms. They can list missing descriptions, redirect chains, duplicate headings and thousands of URLs. The export becomes theatre when every warning is presented as equal.",
          "A founder does not need 400 rows of colour coding. A developer does not need a vague instruction to improve crawlability. Both need a clear claim about what is holding the commercial pages back.",
        ],
      },
      {
        heading: "Start with the pages that carry the business",
        paragraphs: [
          "We identify the service, category, product and location pages that should generate enquiries. Their indexation, internal links, search intent, proof and conversion path come before harmless site-wide housekeeping.",
        ],
        points: [
          "Which pages should rank and for what job?",
          "Can Google crawl, render and index them consistently?",
          "Do their titles and headings match the search intent?",
          "Can a visitor understand the offer and take the next step?",
          "Does tracking show calls, forms or sales from organic traffic?",
        ],
      },
      {
        heading: "Separate blockers from hygiene",
        paragraphs: [
          "A blocker prevents discovery, understanding, ranking or conversion. Hygiene makes the site cleaner but may not change a commercial result. Both can matter, but they should not compete for the same priority.",
          "A broken canonical on a revenue page is not the same as a missing description on an old tag archive. Severity needs page value, scale, risk and implementation effort, not a crawler's default label.",
        ],
      },
      {
        heading: "Every recommendation needs a finish line",
        paragraphs: [
          "A recommendation is not complete when it reaches a ticket. It needs the affected URLs, expected behaviour and a check after release. That may mean a recrawl, rendered-page review, Search Console inspection or a lead-path test.",
        ],
        points: [
          "Problem and commercial impact.",
          "Exact scope and owner.",
          "Implementation instruction.",
          "Acceptance criteria.",
          "Post-release evidence.",
        ],
      },
    ],
    takeaway: "The best audit is not the longest. It is the one the team can execute and verify.",
  },
  {
    slug: "ai-cannot-kill-seo",
    dek: "AI changes the search interface. It does not remove the need for crawlable sources, clear entities, useful pages and evidence worth citing.",
    readingTime: "6 min read",
    sections: [
      {
        heading: "The interface changed before the fundamentals did",
        paragraphs: [
          "Search results now include generated answers, summaries and conversational follow-ups. That can reduce clicks for simple questions. It also makes the source behind a valuable answer more important.",
          "An AI system still needs material it can access, interpret and trust. If the site is blocked, contradictory, thin or anonymous, adding an AI optimisation label will not rescue it.",
        ],
      },
      {
        heading: "AI visibility sits on top of SEO",
        paragraphs: [
          "The same foundations support classic rankings and answer visibility. Clean technical access, specific service pages, strong supporting content, third-party authority and consistent entity information all help a system decide whether the brand is usable as a source.",
        ],
        points: [
          "Crawlable HTML and stable URLs.",
          "Clear authorship, organisation and service information.",
          "Original evidence, examples and useful explanations.",
          "Internal links that show topical relationships.",
          "Relevant external mentions and citations.",
        ],
      },
      {
        heading: "Answer-ready does not mean FAQ spam",
        paragraphs: [
          "Breaking a page into direct questions can improve clarity, but repeating obvious prompts to manufacture schema does not create authority. The answer must still be accurate, specific and supported by the page around it.",
          "We use concise answer blocks where they help the reader, then connect them to deeper evidence. Structured data should describe visible content, not make claims the page cannot prove.",
        ],
      },
      {
        heading: "Measure more than blue links",
        paragraphs: [
          "AI referral sessions, assisted conversions, branded search, citation checks and priority-page engagement can all add context. None should be presented as a perfect market-share score.",
          "The practical goal stays commercial. The brand should be discoverable when a buyer researches the problem, credible when compared, and easy to contact when ready.",
        ],
      },
    ],
    takeaway: "Do the SEO fundamentals well enough to become a source. Add AI-readiness as a layer, not a replacement.",
  },
  {
    slug: "local-seo-small-business",
    dek: "Local SEO in the Philippines works when location relevance, service proof and an easy next step meet the searcher at the same time.",
    readingTime: "7 min read",
    sections: [
      {
        heading: "Local search is a commercial job",
        paragraphs: [
          "A person searching for a clinic in Quezon City, a supplier in Cebu or an emergency service in Davao is usually closer to action than someone reading a broad guide. The page and Google Business Profile need to respect that urgency.",
          "Local SEO is not adding city names to every heading. It is proving that the business offers the service, serves the location and can be trusted to answer the enquiry.",
        ],
      },
      {
        heading: "Get the business profile and the website to agree",
        paragraphs: [
          "Categories, services, opening hours, contact details and locations should match the live offer. A strong profile cannot compensate for a vague or broken landing page, and a good page cannot fully compensate for the wrong map category.",
        ],
        points: [
          "Use the most accurate primary and secondary categories.",
          "Keep name, address and phone details consistent.",
          "Link to the best matching service or location page.",
          "Show real opening hours and service areas.",
          "Build a repeatable review request and response process.",
        ],
      },
      {
        heading: "Build location pages only when the offer is real",
        paragraphs: [
          "A city page should contain evidence the business can serve that place: delivery details, local examples, travel areas, branch information or a distinct commercial offer. Cloning one paragraph across fifty cities creates a directory, not local authority.",
          "For one-location businesses, a strong core service page and an accurate profile may beat a stack of thin suburb pages. More URLs are not automatically more coverage.",
        ],
      },
      {
        heading: "Make the call or form easy",
        paragraphs: [
          "Mobile visitors should not hunt for a phone number, opening time or quote path. The page needs a clear offer, local proof and a next step that works on a small screen.",
        ],
        points: [
          "Tap-to-call and short forms.",
          "Service, price or timing guidance where possible.",
          "Reviews and proof near decision points.",
          "Call, form and profile tracking tied to organic traffic.",
        ],
      },
    ],
    takeaway: "Win the local query, prove the local offer and make the next step obvious.",
  },
];

export function getFieldNoteArticle(slug: string) {
  return fieldNoteArticles.find((article) => article.slug === slug);
}
