import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";

import { buttonVariants } from "@/components/ui/button";
import { commandLayers } from "@/lib/site-data";

export const Route = createFileRoute("/command-centre")({
  component: Page,
  head: () => ({
    meta: [
      { title: "SEO Command Centre Philippines | Shinobi" },
      {
        name: "description",
        content:
          "Monitoring, QA and reporting for launch cycles, catalogues, portfolios and creative SEO campaigns. Human-controlled operations from Shinobi.",
      },
    ],
  }),
});

function Page() {
  return (
    <SiteShell>
      <PageHero
        chapter="08"
        jp="司令"
        kicker="SEO Command Centre"
        title="CONTROL."
        red="NOT MORE AUTOMATION."
      >
        Creative campaigns move around launches, releases, events and changing
        catalogues. The Command Centre catches technical drift, missed demand and
        weak handoffs without turning the work into another automated dashboard.
      </PageHero>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="max-w-3xl text-lg">
            It is not blind automation. It is a controlled system for making
            technical SEO, content, launch monitoring and reporting work together,
            with human approval where it matters.
          </p>
          <ol className="mt-10 divide-y-[2px] divide-ink border-y-[2px] border-ink">
            {commandLayers.map((l, i) => (
              <li key={l.name} className="grid gap-2 py-6 sm:grid-cols-[4rem_1fr_2fr] sm:gap-5">
                <span className="font-display text-sm text-manga-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-xl">{l.name}</h2>
                <p className="text-sm leading-relaxed text-muted">{l.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-xl font-display text-3xl">
            Want a clearer operating layer for SEO growth?
          </p>
          <Link to="/contact" className={buttonVariants({ variant: "invert", size: "lg" })}>
            Review your operating model
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
