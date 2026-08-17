import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Kicker, Note, RuleList, Spine } from "@/components/content/Editorial";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { buttonVariants } from "@/components/ui/button";
import { getServicePage, relatedServices } from "@/lib/service-pages";

export const Route = createFileRoute("/seo-services/$slug")({
  loader: ({ params }) => {
    const item = getServicePage(params.slug);
    if (!item) throw notFound();
    return item;
  },
  component: Page,
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Service"} — Shinobi` },
      { name: "description", content: loaderData?.intro ?? loaderData?.lede ?? "" },
    ],
  }),
});

function Page() {
  const s = Route.useLoaderData();
  const related = relatedServices(s.slug);

  return (
    <SiteShell>
      <PageHero
        chapter={s.index}
        jp="術"
        kicker={`${s.mangaName} · ${s.name}`}
        title={s.h1}
        red={s.red}
      >
        {s.intro}
      </PageHero>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-12">
          {s.pillars.map((p) => (
            <div key={p.k} className="lg:col-span-4">
              <p className="font-display text-sm">{p.k}</p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{p.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Kicker>Why it matters</Kicker>
            <h2 className="mt-3 font-display text-3xl leading-tight">{s.whyTitle}</h2>
          </div>
          <p className="max-w-prose text-[1.05rem] leading-relaxed text-muted lg:col-span-8">
            {s.why}
          </p>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Kicker>{s.includedTitle}</Kicker>
          <h2 className="mt-3 font-display text-3xl">The work, not a menu.</h2>
          <div className="mt-8">
            <RuleList items={s.included} />
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-paper-2/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Kicker>Fit</Kicker>
            <h2 className="mt-3 font-display text-3xl leading-tight">{s.whoTitle}</h2>
          </div>
          <dl className="space-y-6 lg:col-span-8">
            {s.who.map((item) => (
              <div key={item.name} className="border-l-[3px] border-ink pl-4">
                <dt className="font-display text-lg">{item.name}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Kicker>How we work</Kicker>
            <h2 className="mt-3 font-display text-3xl leading-tight">{s.processTitle}</h2>
          </div>
          <div className="lg:col-span-8">
            <Spine items={s.process} />
          </div>
        </div>
      </section>

      {s.extra && s.extra.length > 0 ? (
        <section className="border-b-[3px] border-ink">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <Kicker>{s.extraTitle}</Kicker>
            <div className="mt-6">
              <RuleList items={s.extra} />
            </div>
          </div>
        </section>
      ) : null}

      {s.avoid && s.avoid.length > 0 ? (
        <section className="border-b-[3px] border-ink bg-paper-2/40">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
            <Kicker>{s.avoidTitle ?? "What we will not do"}</Kicker>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {s.avoid.map((item) => (
                <Note key={item.name} title={item.name}>
                  {item.text}
                </Note>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Kicker>Questions</Kicker>
            <h2 className="mt-3 font-display text-3xl">Before you start.</h2>
          </div>
          <div className="divide-y-[2px] divide-ink border-y-[2px] border-ink lg:col-span-8">
            {s.faqs.map((item) => (
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
          <Kicker>Also in the dojo</Kicker>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  to="/seo-services/$slug"
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
          <p className="max-w-xl font-display text-3xl">
            Start with a review of {s.name.toLowerCase()} — before the next push.
          </p>
          <Link to="/contact" className={buttonVariants({ variant: "invert", size: "lg" })}>
            Request a review
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
