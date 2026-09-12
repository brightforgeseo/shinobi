import { useRouterState } from "@tanstack/react-router";
import { pageGraph, seoPolicy, cleanPath } from "@/lib/technical-seo";
import { faqs as homeFaqs } from "@/lib/site-data";
import { publicRoutes } from "@/lib/public-routes";
export function RouteSeo() {
  const { pathname, matches } = useRouterState({ select: state => ({ pathname: state.location.pathname, matches: state.matches }) });
  const policy = seoPolicy(pathname, publicRoutes);
  const meta = matches.flatMap(match => match.meta || []);
  const title = [...meta].reverse().find(item => item && "title" in item)?.title || "Shinobi";
  const description = [...meta].reverse().find(item => item && "name" in item && item.name === "description");
  const content = description && "content" in description ? description.content || "" : "";
  const article = /^\/blog\/[^/]+\/?$/.test(pathname);
  const data = matches.at(-1)?.loaderData as { faqs?: { q: string; a: string }[]; shape?: string; article?: { title: string } } | undefined;
  const path = cleanPath(pathname);
  // Match the rendered templates, not every FAQ sitting in the source data.
  const faqs = path === "/" ? homeFaqs : path.startsWith("/seo-services/")
    ? data?.shape === "answer" ? (data.faqs || []).slice(0, 4) : []
    : /^\/(industries|development)(\/|$)/.test(path) ? data?.faqs || [] : [];
  const schemaTitle = data?.article?.title || title;
  return <>
    <meta name="robots" content={policy.robots} />
    {policy.canonical && <><link rel="canonical" href={policy.canonical} /><meta property="og:url" content={policy.canonical} /></>}
    <meta property="og:type" content={article ? "article" : "website"} />
    <meta property="og:title" content={title} /><meta name="twitter:title" content={title} />
    <meta property="og:description" content={content} /><meta name="twitter:description" content={content} />
    {policy.canonical && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraph(path, schemaTitle, content, faqs)).replace(/</g, "\\u003c") }} />}
  </>;
}
