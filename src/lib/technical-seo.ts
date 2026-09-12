export const SITE_ORIGIN = "https://shinobiseo.com";
export function pageGraph(path: string, title: string, description: string, faqs: { q: string; a: string }[] = []) {
  const url = SITE_ORIGIN + cleanPath(path);
  const org = { "@id": SITE_ORIGIN + "/#organization" };
  const website = { "@id": SITE_ORIGIN + "/#website" };
  const page = { "@id": url + "#webpage" };
  const segments = cleanPath(path).split("/").filter(Boolean);
  const hubs: Record<string, string> = { blog: "Field Notes", "seo-services": "SEO Services", industries: "Industries", development: "Web Development", cases: "Case Studies" };
  const collection = segments.length === 1 && segments[0] in hubs;
  const service = segments.length === 2 && ["seo-services", "industries", "development"].includes(segments[0]);
  const article = segments.length === 2 && segments[0] === "blog";
  const type = collection ? "CollectionPage" : path === "/about" ? "AboutPage" : path === "/contact" ? "ContactPage" : "WebPage";
  const crumbs = [{ "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN + "/" }];
  if (segments.length > 1) crumbs.push({ "@type": "ListItem", position: 2, name: hubs[segments[0]] || segments[0], item: SITE_ORIGIN + "/" + segments[0] });
  if (segments.length) crumbs.push({ "@type": "ListItem", position: crumbs.length + 1, name: title, item: url });
  const graph: Record<string, unknown>[] = [
    { "@type": "Organization", ...org, name: "Shinobi", url: SITE_ORIGIN + "/", logo: SITE_ORIGIN + "/logo-lockup.png", parentOrganization: { "@type": "Organization", name: "Bright Forge SEO", url: "https://brightforgeseo.com" } },
    { "@type": "WebSite", ...website, name: "Shinobi", url: SITE_ORIGIN + "/", publisher: org, inLanguage: "en" },
    { "@type": type, ...page, url, name: title, description, isPartOf: website, breadcrumb: { "@id": url + "#breadcrumb" }, ...(service || article ? { mainEntity: { "@id": url + "#main" } } : {}) },
    { "@type": "BreadcrumbList", "@id": url + "#breadcrumb", itemListElement: crumbs },
  ];
  if (service) graph.push({ "@type": "Service", "@id": url + "#main", name: title, description, url, provider: org, mainEntityOfPage: page });
  if (article) graph.push({ "@type": "Article", "@id": url + "#main", headline: title, description, url, publisher: org, mainEntityOfPage: page, inLanguage: "en" });
  if (faqs.length) graph.push({ "@type": "FAQPage", "@id": url + "#faq", isPartOf: page, mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
  return { "@context": "https://schema.org", "@graph": graph };
}
export const cleanPath = (path: string) => path.split(/[?#]/, 1)[0].replace(/\/+$/, "") || "/";
export function seoPolicy(path: string, paths: readonly string[]) {
  const clean = cleanPath(path);
  const canonical = paths.includes(clean) ? SITE_ORIGIN + clean : undefined;
  return { canonical, robots: canonical ? "index, follow" : "noindex, follow" };
}
