import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Kicker, Note, RuleList } from "@/components/content/Editorial";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { FrameImg } from "@/components/ui/frame-img";
import { buttonVariants } from "@/components/ui/button";
import { cases, site } from "@/lib/site-data";

export const Route = createFileRoute("/cases/$slug")({
  loader: ({ params }) => {
    const item = cases.find((entry) => entry.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  component: CaseStudyPage,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.client ?? "SEO case study"} | Shinobi SEO`,
      },
      {
        name: "description",
        content: loaderData?.summary ?? "Evidence-led SEO case study from the Shinobi dojo.",
      },
    ],
  }),
});

function CaseStudyPage() {
  const item = Route.useLoaderData();
  const otherCases = cases.filter((entry) => entry.slug !== item.slug).slice(0, 4);
  const parentHref =
    "parentHref" in item && typeof item.parentHref === "string"
      ? item.parentHref
      : "https://brightforgeseo.com/case-studies/";

  return (
    <SiteShell>
      <PageHero
        chapter="07"
        jp="戦果"
        kicker={`${item.sector} · ${item.year}`}
        title={item.client.toUpperCase()}
        red={item.result}
      >
        {item.headline}
      </PageHero>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12">
          <div className="manga-panel overflow-hidden lg:col-span-5">
            <FrameImg src={item.image} alt="" className="aspect-[16/10] w-full" />
          </div>
          <div className="lg:col-span-7">
            <Kicker>The result</Kicker>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-muted">
              {item.summary}
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-3">
              {item.metrics.map((metric) => (
                <div key={metric.label} className="manga-panel px-3 py-4 text-center">
                  <dt className="font-display text-2xl text-manga-red">{metric.value}</dt>
                  <dd className="mt-1 text-[0.68rem] uppercase tracking-wider text-muted">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-paper-2/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Kicker>The mission</Kicker>
            <h2 className="mt-3 font-display text-3xl">What had to change.</h2>
          </div>
          <div className="space-y-6 lg:col-span-8">
            <p className="text-[1.05rem] leading-relaxed text-muted">
              The job was not to publish activity for its own sake. We had to make the
              commercial pages clearer, remove the search friction holding them back,
              and connect the work to evidence that could be checked after release.
            </p>
            <Note title="Scope">
              Client details are anonymised where publication permission is limited.
              Percentages and time periods are retained from the parent-company case record.
            </Note>
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <Kicker>Techniques used</Kicker>
          <h2 className="mt-3 font-display text-3xl">The work behind the numbers.</h2>
          <div className="mt-8">
            <RuleList
              items={item.work.map((name) => ({
                name,
                text: techniqueDescription(name),
              }))}
            />
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Kicker>Parent-company proof</Kicker>
            <h2 className="mt-3 font-display text-3xl">Bright Forge case record.</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="max-w-prose leading-relaxed text-muted">
              This work was delivered under {site.parentName}, Shinobi&apos;s parent
              company. Same team, same evidence bar, different armour.
            </p>
            <a
              href={parentHref}
              className="mt-6 inline-block font-display text-sm text-manga-red underline underline-offset-4"
            >
              {parentHref.endsWith("/case-studies/")
                ? "Browse Bright Forge case studies"
                : "Read the parent case study"}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <Kicker>More field results</Kicker>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherCases.map((entry) => (
              <li key={entry.slug}>
                <Link
                  to="/cases/$slug"
                  params={{ slug: entry.slug }}
                  className="manga-panel block h-full p-4 hover:bg-paper-2"
                >
                  <p className="font-display text-xl text-manga-red">{entry.result}</p>
                  <p className="mt-2 font-display text-sm">{entry.client}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-manga-red text-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-xl font-display text-3xl">
            Want the same evidence-first review on your site?
          </p>
          <Link to="/contact" className={buttonVariants({ variant: "invert", size: "lg" })}>
            Request a review
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

function techniqueDescription(name: string) {
  const descriptions: Record<string, string> = {
    "Technical SEO": "Crawl, indexation, architecture and release checks focused on the pages that should generate enquiries.",
    "On-Page SEO": "Intent, titles, headings, internal links, proof and conversion paths improved on the live commercial pages.",
    "Content SEO": "Existing pages strengthened first, then supporting content added only where demand and authority justified it.",
    "Local SEO": "Service-area relevance, Google Business Profile and trust signals aligned around local demand.",
    "Keyword Research": "Commercial demand mapped to the right page type so content did not compete with the money pages.",
    "AI Search Optimization": "Clear, crawlable and sourceworthy material built for citation without abandoning SEO fundamentals.",
  };
  return descriptions[name] ?? "Evidence-led implementation, checked after release rather than marked complete from a task list.";
}
