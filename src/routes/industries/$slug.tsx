import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Kicker, Note, RuleList, Spine } from "@/components/content/Editorial";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { buttonVariants } from "@/components/ui/button";
import { getIndustryPage } from "@/lib/industry-pages";
import { industries } from "@/lib/site-data";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const item = getIndustryPage(params.slug);
    if (!item) throw notFound();
    return item;
  },
  component: Page,
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Industry"} SEO — Shinobi` },
      { name: "description", content: loaderData?.intro ?? loaderData?.lede ?? "" },
    ],
  }),
});

function Page() {
  const i = Route.useLoaderData();
  const related = industries.filter((x) => x.slug !== i.slug);

  return (
    <SiteShell>
      <PageHero
        chapter="09"
        jp="領域"
        kicker={`${i.mangaName} · ${i.name}`}
        title={i.h1}
        red={i.red}
      >
        {i.intro}
      </PageHero>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Kicker>This market</Kicker>
            <h2 className="mt-3 font-display text-3xl leading-tight">{i.whyTitle}</h2>
          </div>
          <p className="max-w-prose text-[1.05rem] leading-relaxed text-muted lg:col-span-8">
            {i.why}
          </p>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Kicker>{i.coverTitle}</Kicker>
          <div className="mt-8">
            <RuleList items={i.cover} />
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-paper-2/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Kicker>Fit</Kicker>
            <h2 className="mt-3 font-display text-3xl leading-tight">{i.whoTitle}</h2>
          </div>
          <div className="space-y-8 lg:col-span-8">
            <dl className="space-y-6">
              {i.who.map((item) => (
                <div key={item.name} className="border-l-[3px] border-ink pl-4">
                  <dt className="font-display text-lg">{item.name}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted">{item.text}</dd>
                </div>
              ))}
            </dl>
            <Note title="Not the right fit when">{i.notFit}</Note>
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Kicker>How we work</Kicker>
            <h2 className="mt-3 font-display text-3xl leading-tight">{i.processTitle}</h2>
          </div>
          <div className="lg:col-span-8">
            <Spine items={i.process} />
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Kicker>{i.qualityTitle}</Kicker>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {i.quality.map((item) => (
              <div key={item.name}>
                <p className="font-display text-lg">{item.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Kicker>Questions</Kicker>
            <h2 className="mt-3 font-display text-3xl">{i.name} questions.</h2>
          </div>
          <div className="divide-y-[2px] divide-ink border-y-[2px] border-ink lg:col-span-8">
            {i.faqs.map((item) => (
              <details key={item.q} className="group py-4">
                <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-medium leading-snug">{item.q}</span>
                  <span className="text-manga-red group-open:hidden">+</span>
                  <span className="hidden text-manga-red group-open:inline">−</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <Kicker>Other markets</Kicker>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: r.slug }}
                  className="text-sm underline decoration-ink/30 underline-offset-4 hover:text-manga-red"
                >
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-xl font-display text-3xl">{i.cta}</p>
          <Link to="/contact" className={buttonVariants({ variant: "invert", size: "lg" })}>
            Request a review
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
