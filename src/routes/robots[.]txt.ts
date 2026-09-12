import { createFileRoute } from "@tanstack/react-router";
import { SITE_ORIGIN } from "@/lib/technical-seo";
export const Route = createFileRoute("/robots.txt")({
  server: { handlers: { GET: () => new Response(`User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /auth/\nDisallow: /__grok/\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } }) } },
});
