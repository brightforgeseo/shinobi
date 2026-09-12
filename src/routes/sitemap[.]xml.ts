import { createFileRoute } from "@tanstack/react-router";
import { publicRoutes } from "@/lib/public-routes";
import { SITE_ORIGIN } from "@/lib/technical-seo";
export const Route = createFileRoute("/sitemap.xml")({
  server: { handlers: { GET: () => new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...new Set(publicRoutes)].sort().map(path => `<url><loc>${SITE_ORIGIN}${path}</loc></url>`).join("")}</urlset>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } }) } },
});
