import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { notes } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const item = notes.find((n) => n.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  component: Page,
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Note"} — Shinobi` },
      { name: "description", content: loaderData?.excerpt ?? "" },
    ],
  }),
});

function Page() {
  const n = Route.useLoaderData();
  return (
    <SiteShell>
      <PageHero chapter="11" jp="手記" kicker={n.date} title={n.title.toUpperCase()}>
        {n.excerpt}
      </PageHero>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <p className="text-lg leading-relaxed">{n.body}</p>
          <Link to="/blog" className="mt-10 inline-block font-display text-sm text-manga-red">
            ← All field notes
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
