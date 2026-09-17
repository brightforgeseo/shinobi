import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { Kicker } from "@/components/content/Editorial";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { buttonVariants } from "@/components/ui/button";
import { getFieldNoteArticle } from "@/lib/blog-articles";
import { BlogInline, parseArticle, type ArticleBlock } from "@/lib/blog-markdown";
import { notes } from "@/lib/site-data";

const blogAliases: Record<string, string> = {
  "seo-for-game-studios-philippines": "game-studio",
  "seo-for-film-production-companies": "film-production-company",
  "seo-for-fashion-brands-philippines": "fashion-brand",
  "seo-for-creative-agencies-philippines": "creative-agency",
};

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({ params, location }) => {
    const dest = blogAliases[params.slug];
    if (dest) throw redirect({ href: `/blog/${dest}${location.searchStr}`, statusCode: 301 });
  },
  loader: ({ params }) => {
    const record = getFieldNoteArticle(params.slug);
    if (!record) throw notFound();
    return { record, article: parseArticle(record.markdown) };
  },
  component: FieldNotePage,
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData?.article.metaTitle ?? "Field note | Shinobi" },
      { name: "description", content: loaderData?.article.metaDescription ?? "" },
    ],
  }),
});

function Blocks({ blocks, introduction = false }: { blocks: ArticleBlock[]; introduction?: boolean }) {
  return blocks.map((block, index) => block.kind === "paragraph" ? (
    <p key={index} data-article-block="paragraph" className={introduction && index === 0
      ? "border-l-[4px] border-manga-red pl-5 text-xl leading-relaxed"
      : "text-[1.05rem] leading-[1.75] text-muted"}>
      <BlogInline text={block.text} />
    </p>
  ) : (
    <ul key={index} className="space-y-3 border-y-[2px] border-ink py-5">
      {block.items.map((point, itemIndex) => (
        <li key={itemIndex} className="flex gap-3 text-sm leading-relaxed">
          <span aria-hidden="true" className="font-display text-manga-red">忍</span>
          <span data-article-block="list-item"><BlogInline text={point} /></span>
        </li>
      ))}
    </ul>
  ));
}

function FieldNotePage() {
  const { record, article } = Route.useLoaderData();
  const related = notes.filter((entry) => entry.slug !== record.slug).slice(0, 3);
  return (
    <SiteShell>
      <PageHero chapter="11" jp="手記" kicker={record.readingTime} title={article.title} />
      <article data-engine-job={record.engineJob} data-article-sha256={record.sha256}>
        <section className="border-b-[3px] border-ink">
          <div className="mx-auto max-w-3xl space-y-5 px-5 py-12 sm:px-8">
            <Blocks blocks={article.introduction} introduction />
          </div>
        </section>
        {article.sections.map((section, index) => (
          <section key={section.heading} className={index % 2 === 0 ? "border-b-[3px] border-ink" : "border-b-[3px] border-ink bg-paper-2/50"}>
            <div className="mx-auto grid max-w-5xl gap-7 px-5 py-12 sm:px-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Kicker>{String(index + 1).padStart(2, "0")}</Kicker>
                <h2 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">{section.heading}</h2>
              </div>
              <div className="space-y-5 lg:col-span-8"><Blocks blocks={section.blocks} /></div>
            </div>
          </section>
        ))}
      </article>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          <Kicker>Keep reading</Kicker>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {related.map((entry) => (
              <li key={entry.slug}>
                <Link to="/blog/$slug" params={{ slug: entry.slug }} className="manga-panel block h-full p-5 hover:bg-paper-2">
                  <h2 className="mt-2 font-display text-lg">{entry.title}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-manga-red text-paper">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-lg font-display text-3xl">Want this applied to your title, portfolio, catalogue or platform?</p>
          <Link to="/contact" className={buttonVariants({ variant: "invert", size: "lg" })}>Request an SEO review</Link>
        </div>
      </section>
    </SiteShell>
  );
}
