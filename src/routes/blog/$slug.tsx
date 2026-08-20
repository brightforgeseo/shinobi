import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Kicker, Note } from "@/components/content/Editorial";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { buttonVariants } from "@/components/ui/button";
import { getFieldNoteArticle } from "@/lib/blog-articles";
import { notes, site } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const note = notes.find((entry) => entry.slug === params.slug);
    const article = getFieldNoteArticle(params.slug);
    if (!note || !article) throw notFound();
    return { note, article };
  },
  component: FieldNotePage,
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.note.title ?? "Field note"} | Shinobi SEO Philippines`,
      },
      {
        name: "description",
        content: loaderData?.article.dek ?? loaderData?.note.excerpt ?? "",
      },
    ],
  }),
});

function FieldNotePage() {
  const { note, article } = Route.useLoaderData();
  const related = notes.filter((entry) => entry.slug !== note.slug).slice(0, 3);

  return (
    <SiteShell>
      <PageHero
        chapter="11"
        jp="手記"
        kicker={`${note.date} · ${article.readingTime}`}
        title={note.title.toUpperCase()}
      >
        {article.dek}
      </PageHero>

      <article>
        <section className="border-b-[3px] border-ink">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
            <p className="border-l-[4px] border-manga-red pl-5 text-xl leading-relaxed">
              {note.excerpt}
            </p>
            <p className="mt-5 text-sm text-muted">
              From the Shinobi dojo in Quezon City. Shinobi is a studio of{" "}
              <a
                href={site.parentUrl}
                className="underline underline-offset-4 hover:text-manga-red"
              >
                {site.parentName}
              </a>
              .
            </p>
          </div>
        </section>

        {article.sections.map((section, index) => (
          <section
            key={section.heading}
            className={index % 2 === 0 ? "border-b-[3px] border-ink" : "border-b-[3px] border-ink bg-paper-2/50"}
          >
            <div className="mx-auto grid max-w-5xl gap-7 px-5 py-12 sm:px-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Kicker>{String(index + 1).padStart(2, "0")}</Kicker>
                <h2 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">
                  {section.heading}
                </h2>
              </div>
              <div className="space-y-5 lg:col-span-8">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[1.05rem] leading-[1.75] text-muted">
                    {paragraph}
                  </p>
                ))}
                {section.points ? (
                  <ul className="space-y-3 border-y-[2px] border-ink py-5">
                    {section.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed">
                        <span className="font-display text-manga-red">忍</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </section>
        ))}

        <section className="border-b-[3px] border-ink">
          <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
            <Note title="Dojo takeaway">{article.takeaway}</Note>
          </div>
        </section>
      </article>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          <Kicker>Keep reading</Kicker>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {related.map((entry) => (
              <li key={entry.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: entry.slug }}
                  className="manga-panel block h-full p-5 hover:bg-paper-2"
                >
                  <p className="text-[0.68rem] uppercase tracking-wider text-muted">
                    {entry.date}
                  </p>
                  <h2 className="mt-2 font-display text-lg">{entry.title}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-manga-red text-paper">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-lg font-display text-3xl">Want this applied to your site?</p>
          <Link to="/contact" className={buttonVariants({ variant: "invert", size: "lg" })}>
            Request an SEO review
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
