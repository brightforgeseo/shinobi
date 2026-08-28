import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Kicker, Note, RuleList, Spine } from "@/components/content/Editorial";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { buttonVariants } from "@/components/ui/button";
import { getDevPage } from "@/lib/dev-pages";
import { toMetaDescription } from "@/lib/meta";
import { development } from "@/lib/site-data";

export const Route = createFileRoute("/development/$slug")({
  loader: ({ params }) => {
    const item = getDevPage(params.slug);
    if (!item) throw notFound();
    return item;
  },
  component: Page,
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Development"} Philippines | Shinobi` },
      {
        name: "description",
        content: toMetaDescription(loaderData?.intro ?? loaderData?.lede ?? "SEO-first development from Shinobi."),
      },
    ],
  }),
});

function Page() {
  const d = Route.useLoaderData();
  const related = development.filter((x) => x.slug !== d.slug);

  return (
    <SiteShell>
      <PageHero
        chapter="00"
        jp="開"
        kicker={`${d.group} · ${d.name}`}
        title={d.h1}
        red={d.red}
      >
        {d.intro}
      </PageHero>

      <section className="border-b-[3px] border-ink bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-9 sm:px-8 lg:grid-cols-12">
          <p className="font-display text-xl text-manga-red lg:col-span-4">
            Creative use case
          </p>
          <p className="max-w-3xl leading-relaxed text-paper/75 lg:col-span-8">
            The stack serves the work. Reels, game pages, catalogues, exhibitions,
            events and editorial archives should remain fast, crawlable and easy
            to update after the launch team moves on.
          </p>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Kicker>Why this stack</Kicker>
            <h2 className="mt-3 font-display text-3xl leading-tight">{d.whyTitle}</h2>
          </div>
          <p className="max-w-prose text-[1.05rem] leading-relaxed text-muted lg:col-span-8">
            {d.why}
          </p>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Kicker>{d.includedTitle}</Kicker>
          <div className="mt-8">
            <RuleList items={d.included} />
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-paper-2/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Kicker>Fit</Kicker>
            <h2 className="mt-3 font-display text-3xl leading-tight">{d.whoTitle}</h2>
          </div>
          <dl className="space-y-6 lg:col-span-8">
            {d.who.map((item) => (
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
            <Kicker>How we build</Kicker>
            <h2 className="mt-3 font-display text-3xl leading-tight">{d.processTitle}</h2>
          </div>
          <div className="lg:col-span-8">
            <Spine items={d.process} />
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Kicker>{d.avoidTitle}</Kicker>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {d.avoid.map((item) => (
              <Note key={item.name} title={item.name}>
                {item.text}
              </Note>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Kicker>Questions</Kicker>
            <h2 className="mt-3 font-display text-3xl">{d.name} questions.</h2>
          </div>
          <div className="divide-y-[2px] divide-ink border-y-[2px] border-ink lg:col-span-8">
            {d.faqs.map((item) => (
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
          <Kicker>Other stacks</Kicker>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  to="/development/$slug"
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
          <p className="max-w-xl font-display text-3xl">{d.cta}</p>
          <Link to="/contact" className={buttonVariants({ variant: "invert", size: "lg" })}>
            Review the build path
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
