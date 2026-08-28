import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { TiltCard } from "@/components/ui/tilt-card";
import { buttonVariants } from "@/components/ui/button";
import { people, site } from "@/lib/site-data";
import { media } from "@/lib/media";
import { FrameImg } from "@/components/ui/frame-img";

export const Route = createFileRoute("/about")({
  component: Page,
  head: () => ({
    meta: [
      { title: "About Shinobi | SEO Company Philippines, Bright Forge studio" },
      {
        name: "description",
        content:
          "British-led, Philippines-based SEO and web studio for creative and culture-led brands. A studio of Bright Forge SEO.",
      },
    ],
  }),
});

function Page() {
  return (
    <SiteShell>
      <PageHero
        chapter="00"
        jp="堂"
        kicker="The dojo"
        title="BRITISH-LED."
        red="PHILIPPINES-BASED."
      >
        Founded after more than fifteen years of practical search work. Senior
        judgement, a Manila delivery team, and a focus on creative and culture-led
        businesses that need distinctive work to be found without becoming generic.
      </PageHero>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-12">
          <div className="manga-panel overflow-hidden lg:col-span-5">
            <FrameImg
              src={media.kanjiSplash}
              alt=""
              className="aspect-[4/3] w-full"
            />
          </div>
          <div className="space-y-4 text-[1.05rem] leading-relaxed text-muted lg:col-span-7">
            <p className="text-ink">
              Shinobi started because retainers kept producing activity and
              almost no change in the system. The name is the method: watch
              first, strike once, do not announce the work until it has landed.
            </p>
            <p>
              Ben Lowe leads strategy and quality. Delivery runs from {site.city}.
              We work with games, film, music, design, culture and other creative
              businesses in the Philippines and international teams across{" "}
              {site.serving}.
            </p>
            <p>
              Shinobi is a studio of{" "}
              <a
                href={site.parentUrl}
                className="text-ink underline underline-offset-4 hover:text-manga-red"
              >
                {site.parentName}
              </a>
              , the parent company. Same dojo rules. Different armour.
            </p>
            <p>
              We do not sell mystery task lists. We do not guarantee rankings.
              We connect technical SEO, useful content, portfolios, catalogues,
              conversion paths and reporting so creative attention has a route to
              bookings, sales, audiences or enquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-paper-2/50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">The cast</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {people.map((p) => (
              <li key={p.name}>
                <TiltCard className="manga-panel h-full overflow-hidden">
                  <FrameImg
                    src={p.image}
                    alt=""
                    className="aspect-[4/5] w-full"
                  />
                  <div className="border-t-[3px] border-ink p-4">
                    <h3 className="font-display text-xl">{p.name}</h3>
                    <p className="mt-1 text-[0.7rem] uppercase tracking-wider text-manga-red">
                      {p.role}
                    </p>
                    <p className="mt-2 text-sm text-muted">{p.bio}</p>
                  </div>
                </TiltCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-xl font-display text-3xl">
            If this is your kind of fight, write.
          </p>
          <Link to="/contact" className={buttonVariants({ variant: "invert", size: "lg" })}>
            Request a review
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
