import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { TiltCard } from "@/components/ui/tilt-card";
import { FrameImg } from "@/components/ui/frame-img";
import { cases } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/cases/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "SEO Case Studies Philippines | Shinobi" },
      {
        name: "description",
        content:
          "SEO case studies across fashion, ecommerce, sport, software and service markets. Parent-company proof used by Shinobi with clear labels.",
      },
    ],
  }),
});

function Page() {
  return (
    <SiteShell>
      <PageHero
        chapter="07"
        jp="伝説"
        kicker="Case studies"
        title="PROOF THAT MOVES"
        red="MORE THAN RANKINGS."
      >
        The current proof spans fashion, designed products, sport, software and
        service markets. We do not invent a film or game result to make the niche
        look fuller. These are Bright Forge parent-company cases, clearly labelled.
      </PageHero>

      {cases.map((c, i) => (
        <article key={c.slug} id={c.slug} className="border-b-[3px] border-ink">
          <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 py-12 sm:px-8 lg:grid-cols-12">
            <TiltCard
              className={cn(
                "overflow-hidden lg:col-span-5",
                i % 2 === 0 ? "manga-panel" : "manga-panel-red",
              )}
            >
              <FrameImg src={c.image} alt="" className="aspect-[16/10] w-full" />
            </TiltCard>
            <div className="lg:col-span-7">
              <p className="text-[0.75rem] uppercase tracking-[0.14em] text-muted">
                {c.sector} · {c.year}
              </p>
              <h2 className="mt-2 font-display text-4xl">{c.client}</h2>
              <p className="mt-3 text-lg">{c.headline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{c.summary}</p>
              <dl className="mt-6 grid grid-cols-3 gap-3">
                {c.metrics.map((m) => (
                  <div
                    key={`${m.label}-${m.value}`}
                    className="manga-panel px-2 py-3 text-center"
                  >
                    <dt className="font-display text-xl text-manga-red">{m.value}</dt>
                    <dd className="mt-1 text-[0.65rem] text-muted">{m.label}</dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.work.map((w) => (
                  <li key={w} className="border-[2px] border-ink px-2 py-1 text-[0.7rem]">
                    {w}
                  </li>
                ))}
              </ul>
              <Link
                to="/cases/$slug"
                params={{ slug: c.slug }}
                className="mt-7 inline-block font-display text-sm text-manga-red underline underline-offset-4"
              >
                Read the full case study
              </Link>
            </div>
          </div>
        </article>
      ))}
    </SiteShell>
  );
}
