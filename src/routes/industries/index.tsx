import { createFileRoute, Link } from "@tanstack/react-router";
import { Chapter } from "@/components/content/Chapter";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { buttonVariants } from "@/components/ui/button";
import { industries } from "@/lib/site-data";

export const Route = createFileRoute("/industries/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Creative Industry SEO Philippines | Shinobi" },
      {
        name: "description",
        content:
          "SEO for games, film, animation, music, arts, fashion, events, creative studios and media. Philippines-based, working worldwide.",
      },
    ],
  }),
});

const groupNotes: Record<string, string> = {
  "Play & Interactive":
    "Titles, platforms, tools and communities. Search architecture has to survive launch day, updates and the long tail of player discovery.",
  "Screen & Sound":
    "Reels, catalogues, credits, releases and bookings. Rich media stays expressive while the route to the work stays crawlable.",
  "Art & Culture":
    "Practices, programmes, collections and designed products. Findability without replacing the language or point of view.",
  "Live & Editorial":
    "Events and publishing move quickly. Editions, archives, contributors and commercial routes need a structure that lasts.",
  "Sport & Fandom":
    "Communities, fixtures, programmes and products organised around the way fans and participants search.",
  "Other proven sectors":
    "Shinobi leads with the creative industries, but the parent-company method also carries into high-trust, local and service markets.",
};

function Page() {
  const groups = [...new Set(industries.map((industry) => industry.group))];

  return (
    <SiteShell>
      <PageHero
        chapter="09"
        jp="領域"
        kicker="Industries"
        title="MADE TO BE SEEN."
        red="BUILT TO BE FOUND."
      >
        SEO for games, film, animation, music, art, fashion and culture-led
        businesses. We keep the visual identity, then build the routes that help
        players, audiences, commissioners, buyers and collaborators find it.
      </PageHero>

      <section className="border-b-[3px] border-ink bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-xs tracking-[0.18em] text-manga-red">
              CREATIVE FIELD GUIDE
            </p>
            <h2 className="mt-3 font-display text-3xl">The work has a life cycle.</h2>
          </div>
          <p className="max-w-3xl text-lg leading-relaxed text-paper/75 lg:col-span-8">
            A game has a reveal, launch, patches and a community. A film has a reel,
            credits, screenings and distribution. A festival has editions. A label
            has a catalogue. We design search around those realities, not a generic
            service-page template copied across industries.
          </p>
        </div>
      </section>

      {groups.map((group, groupIndex) => {
        const groupIndustries = industries.filter((industry) => industry.group === group);
        return (
          <section
            key={group}
            className={`border-b-[3px] border-ink ${
              groupIndex % 2 ? "bg-paper-2/45" : "bg-paper"
            }`}
          >
            <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Chapter n={String(groupIndex + 1).padStart(2, "0")} jp="門">
                  {group}
                </Chapter>
                <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
                  {groupNotes[group]}
                </p>
              </div>
              <ol className="divide-y-[2px] divide-ink border-y-[2px] border-ink lg:col-span-8">
                {groupIndustries.map((industry, index) => (
                  <li key={industry.slug}>
                    <Link
                      to="/industries/$slug"
                      params={{ slug: industry.slug }}
                      className="grid gap-3 py-6 transition-colors hover:text-manga-red sm:grid-cols-[3rem_1fr_2fr] sm:gap-5"
                    >
                      <span className="font-display text-xs text-manga-red">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block font-display text-xl">{industry.name}</span>
                        <span className="mt-1 block text-[0.65rem] uppercase tracking-wider text-faint">
                          {industry.mangaName}
                        </span>
                      </span>
                      <span className="text-sm leading-relaxed text-muted">
                        {industry.lede}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        );
      })}

      <section className="bg-manga-red text-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-xl font-display text-3xl">
            Your field missing? Send the work, audience and commercial goal.
          </p>
          <Link to="/contact" className={buttonVariants({ variant: "invert", size: "lg" })}>
            Request a review
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
