import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/content/PageHero";
import { ServiceBody } from "@/components/content/ServiceBody";
import { SiteShell } from "@/components/layout/SiteShell";
import { getServicePage } from "@/lib/service-pages";
import { toMetaDescription } from "@/lib/meta";
import { industries } from "@/lib/site-data";

export const Route = createFileRoute("/seo-services/$slug")({
  loader: ({ params }) => {
    const item = getServicePage(params.slug);
    if (!item) throw notFound();
    return item;
  },
  component: Page,
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "SEO"} Philippines | Shinobi` },
      {
        name: "description",
        content: toMetaDescription(loaderData?.intro ?? loaderData?.lede ?? "SEO services from Shinobi."),
      },
    ],
  }),
});

function Page() {
  const s = Route.useLoaderData();
  const creativeIndustries = industries.filter(
    (industry) => industry.group !== "Other proven sectors",
  );

  return (
    <SiteShell>
      <PageHero
        chapter={s.index}
        jp={s.jp}
        kicker={`${s.mangaName} · ${s.name}`}
        title={s.h1}
        red={s.red}
      >
        {s.intro}
      </PageHero>
      <ServiceBody s={s} />
      <section className="border-b-[3px] border-ink bg-paper-2/45">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 lg:grid-cols-12">
          <p className="font-display text-xl lg:col-span-4">Apply this to your field.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:col-span-8">
            {creativeIndustries.map((industry) => (
              <li key={industry.slug}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: industry.slug }}
                  className="text-sm underline decoration-ink/30 underline-offset-4 hover:text-manga-red"
                >
                  {industry.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteShell>
  );
}
