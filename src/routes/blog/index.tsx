import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { notes } from "@/lib/site-data";
import { media } from "@/lib/media";
import { FrameImg } from "@/components/ui/frame-img";

export const Route = createFileRoute("/blog/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Field Notes — Shinobi" },
      {
        name: "description",
        content: "Notes from the dojo: audits, timelines, local SEO and AI search.",
      },
    ],
  }),
});

function Page() {
  return (
    <SiteShell>
      <PageHero
        chapter="11"
        jp="手記"
        kicker="Field notes"
        title="THINGS WE KEEP"
        red="WRITING DOWN."
      >
        Short, useful notes. Not a content mill.
      </PageHero>
      <section>
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:px-8 lg:grid-cols-12">
          <div className="manga-panel overflow-hidden lg:col-span-4">
            <FrameImg src={media.fieldNotes} alt="" className="aspect-[4/3] w-full" />
          </div>
          <ul className="divide-y-[3px] divide-ink border-y-[3px] border-ink lg:col-span-8">
            {notes.map((n) => (
              <li key={n.slug} className="bg-panel px-4 py-5">
                <p className="text-[0.7rem] uppercase tracking-wider text-muted">{n.date}</p>
                <h2 className="mt-1 font-display text-2xl">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: n.slug }}
                    className="hover:text-manga-red"
                  >
                    {n.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm text-muted">{n.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
