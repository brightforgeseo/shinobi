import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { TiltCard } from "@/components/ui/tilt-card";
import { buttonVariants } from "@/components/ui/button";
import { commandLayers } from "@/lib/site-data";

export const Route = createFileRoute("/command-centre")({
  component: Page,
  head: () => ({
    meta: [
      { title: "SEO Command Centre — Shinobi" },
      {
        name: "description",
        content:
          "An AI-assisted operating layer for SEO campaigns. Monitoring, opportunity detection, delivery QA, reporting intelligence and approval-gated operations.",
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
        Most campaigns fail because signals are missed, reports disconnect from
        action, and tasks get marked done without proof. The Command Centre is
        an operating layer — not a dashboard export.
      </PageHero>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="max-w-3xl text-lg">
            It is not blind automation. It is a controlled system for making
            technical SEO, content, CRO, AI search readiness and reporting work
            together — with human approval where it matters.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commandLayers.map((l, i) => (
              <TiltCard
                key={l.name}
                className={
                  i % 2 === 0 ? "manga-panel h-full p-5" : "manga-panel-red h-full p-5"
                }
              >
                <h2 className="font-display text-xl">{l.name}</h2>
                <p className="mt-2 text-sm text-muted">{l.text}</p>
              </TiltCard>
            ))}
          </div>
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
