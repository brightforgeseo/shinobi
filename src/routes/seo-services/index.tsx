import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { TiltCard } from "@/components/ui/tilt-card";
import { buttonVariants } from "@/components/ui/button";
import { first90, services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/seo-services/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "SEO Services Philippines | Shinobi by Bright Forge" },
      {
        name: "description",
        content:
          "SEO services in the Philippines: technical SEO, on-page, content, local SEO, audits, keywords, links, AI search, migrations and white label. A Bright Forge SEO studio.",
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
        title="RANKINGS, LEADS"
        red="AND GROWTH."
      >
        SEO services in the Philippines from a Quezon City dojo. Technical SEO,
        content, local search, authority and conversion. Shinobi is a studio of
        Bright Forge SEO.
      </PageHero>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">Core SEO</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {core.map((s, i) => (
              <TiltCard
                key={s.slug}
                className={cn("h-full p-5", i % 2 ? "manga-panel-red" : "manga-panel")}
              >
                <Link to="/seo-services/$slug" params={{ slug: s.slug }} className="block">
                  <p className="font-display text-xs text-manga-red">
                    {s.index} · {s.mangaName}
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted">{s.lede}</p>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-paper-2/50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">Strategy & growth</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {strategy.map((s) => (
              <TiltCard key={s.slug} className="manga-panel-cyan h-full p-5">
                <Link to="/seo-services/$slug" params={{ slug: s.slug }} className="block">
                  <p className="font-display text-xs text-manga-red">{s.mangaName}</p>
                  <h3 className="mt-1 font-display text-xl">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted">{s.lede}</p>
                </Link>
              </TiltCard>
            ))}
            <TiltCard className="manga-panel-red h-full p-5">
              <Link to="/command-centre" className="block">
                <p className="font-display text-xs text-manga-red">SPECIAL</p>
                <h3 className="mt-1 font-display text-xl">SEO Command Centre</h3>
                <p className="mt-2 text-sm text-muted">
                  Evidence-led operations. Monitoring, QA, approval gates.
                </p>
              </Link>
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">First 90 days</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {first90.map((s) => (
              <li key={s.days} className="manga-panel p-5">
                <p className="font-display text-xs text-manga-red">{s.days}</p>
                <h3 className="mt-2 font-display text-xl">{s.name}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-manga-red text-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-xl font-display text-3xl">
            Start with a review that gets to the point.
          </p>
          <Link to="/contact" className={buttonVariants({ variant: "invert", size: "lg" })}>
            Request a review
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
