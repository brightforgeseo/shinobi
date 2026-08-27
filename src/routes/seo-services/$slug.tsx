import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/content/PageHero";
import { ServiceBody } from "@/components/content/ServiceBody";
import { SiteShell } from "@/components/layout/SiteShell";
import { getServicePage } from "@/lib/service-pages";

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
      { name: "description", content: loaderData?.intro ?? loaderData?.lede ?? "" },
    ],
  }),
});

function Page() {
  const s = Route.useLoaderData();

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
    </SiteShell>
  );
}
