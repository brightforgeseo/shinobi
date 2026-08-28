import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { buttonVariants } from "@/components/ui/button";
import { first90, services } from "@/lib/site-data";

export const Route = createFileRoute("/seo-services/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "SEO Services Philippines | Shinobi by Bright Forge" },
      {
        name: "description",
        content:
          "SEO services for creative and entertainment brands: technical SEO, content, authority, migrations and white-label support from the Philippines.",
      },
    ],
  }),
});

function Page() {
  const core = services.filter((s) => s.group === "core");
  const strategy = services.filter((s) => s.group === "strategy");
  return (
    <SiteShell>
      <PageHero
        chapter="02"
        jp="術"
        kicker="SEO services"
        title="DISCOVERY FOR"
        red="CREATIVE WORK."
      >
        Technical SEO, content, authority and web development for creative and
        entertainment brands. We work around launches, catalogues, portfolios,
        audiences and commercial routes, not generic content volume. Shinobi is
        a studio of Bright Forge SEO.
      </PageHero>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">Core SEO</h2>
          <ol className="mt-8 divide-y-[3px] divide-ink border-y-[3px] border-ink">
            {core.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/seo-services/$slug"
                  params={{ slug: s.slug }}
                  className="grid gap-3 py-6 hover:bg-paper-2/60 sm:grid-cols-12 sm:items-start sm:px-3"
                >
                  <p className="font-display text-xs text-manga-red sm:col-span-2">
                    {s.index} · {s.mangaName}
                  </p>
                  <h3 className="font-display text-2xl sm:col-span-4">{s.name}</h3>
                  <p className="text-sm leading-relaxed text-muted sm:col-span-5">{s.lede}</p>
                  <span className="font-display text-sm text-manga-red sm:text-right">→</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-paper-2/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl">Strategy & growth</h2>
            <p className="mt-4 max-w-sm leading-relaxed text-muted">
              The growth layer depends on the business model. A game launch, venue,
              catalogue and agency pipeline do not need the same mix.
            </p>
            <Link
              to="/command-centre"
              className="mt-8 block border-l-[5px] border-manga-red bg-ink p-5 text-paper"
            >
              <p className="font-display text-xs text-manga-cyan">SPECIAL</p>
              <p className="mt-2 font-display text-xl">SEO Command Centre</p>
              <p className="mt-2 text-sm text-paper/70">
                Monitoring, QA and approval gates for active campaigns.
              </p>
            </Link>
          </div>
          <ol className="divide-y-[2px] divide-ink border-y-[3px] border-ink lg:col-span-8">
            {strategy.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/seo-services/$slug"
                  params={{ slug: s.slug }}
                  className="grid gap-2 py-5 hover:text-manga-red sm:grid-cols-[11rem_1fr_auto] sm:items-start"
                >
                  <h3 className="font-display text-lg">{s.name}</h3>
                  <p className="text-sm leading-relaxed text-muted">{s.lede}</p>
                  <span className="font-display text-sm text-manga-red">→</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">First 90 days</h2>
          <ol className="mt-8 border-l-[5px] border-manga-red">
            {first90.map((s) => (
              <li
                key={s.days}
                className="grid gap-2 border-b-[2px] border-ink px-5 py-6 last:border-b-0 sm:grid-cols-[8rem_12rem_1fr]"
              >
                <p className="font-display text-xs text-manga-red">{s.days}</p>
                <h3 className="font-display text-xl">{s.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-manga-red text-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-xl font-display text-3xl">
            Bring the title, release, catalogue, portfolio or platform.
          </p>
          <Link to="/contact" className={buttonVariants({ variant: "invert", size: "lg" })}>
            Request a review
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
