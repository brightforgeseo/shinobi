import { createFileRoute, Link } from "@tanstack/react-router";
import { Chapter } from "@/components/content/Chapter";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { TiltCard } from "@/components/ui/tilt-card";
import { buttonVariants } from "@/components/ui/button";
import { industries } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/industries/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Industries | SEO Agency Philippines — Shinobi" },
      {
        name: "description",
        content:
          "Industry SEO in the Philippines and abroad: finance, real estate, home services, pet services, gaming and football. A studio of Bright Forge SEO.",
      },
    ],
  }),
});

function Page() {
  const groups = [...new Set(industries.map((i) => i.group))];

  return (
    <SiteShell>
      <PageHero
        chapter="09"
        jp="領域"
        kicker="Industries"
        title="BATTLEFIELDS"
        red="WE ALREADY READ."
      >
        Not a generic playbook copied across categories. Philippine search
        habits first, then UK, US and AU. Intent before content. Commercial
        pages first.
      </PageHero>

      <section className="border-b-[3px] border-ink bg-paper-2/40">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-10 sm:px-8 md:grid-cols-3">
          {[
            { k: "Intent first", v: "Map what buyers are trying to do before deciding which pages need work." },
            { k: "Commercial pages", v: "Service, product, category and location pages before generic blog volume." },
            { k: "Measured", v: "Rankings, visibility, clicks and enquiry paths — so the work has a job." },
          ].map((p) => (
            <TiltCard key={p.k} className="manga-panel h-full p-5">
              <p className="font-display text-xs tracking-[0.16em] text-manga-red">
                {p.k.toUpperCase()}
              </p>
              <p className="mt-2 text-sm">{p.v}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {groups.map((g) => (
        <section key={g} className="border-b-[3px] border-ink">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
            <Chapter n="—" jp="門">
              {g}
            </Chapter>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {industries
                .filter((a) => a.group === g)
                .map((a, n) => (
                  <TiltCard
                    key={a.slug}
                    className={cn("h-full p-5", n === 1 ? "manga-panel-red" : "manga-panel")}
                  >
                    <Link to="/industries/$slug" params={{ slug: a.slug }} className="block">
                      <p className="font-display text-xs text-manga-red">{a.mangaName}</p>
                      <h2 className="mt-1 font-display text-2xl">{a.name}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{a.lede}</p>
                      <p className="mt-4 font-display text-xs text-manga-red">Open scroll →</p>
                    </Link>
                  </TiltCard>
                ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-manga-red text-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-xl font-display text-3xl">
            If this is your market, start with a review — not a generic package.
          </p>
          <Link to="/contact" className={buttonVariants({ variant: "invert", size: "lg" })}>
            Request a review
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
