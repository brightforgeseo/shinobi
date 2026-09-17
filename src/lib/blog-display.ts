export const DISPLAY_H1_BY_SLUG: Record<string, string> = {
  "six-month-seo-myth": "Six Month SEO Myth",
  "audits-that-miss": "Audits That Miss",
  "ai-referrals-versus-citations": "AI Referrals Versus Citations",
  "collections-versus-categories": "Collections Versus Categories",
  "game-website-search-ownership": "Game Website Search Ownership",
  "local-seo-small-business": "Local SEO Small Business",
  "portfolio-rendering-checks": "Portfolio Rendering Checks",
  "quezon-city-seo-studio": "Quezon City SEO Studio",
  "seo-cost-for-studios-philippines": "SEO Cost for Studios Philippines",
  "video-performance-without-losing-design": "Video Performance Without Losing Design",
};

export function displayH1(slug: string, fallback: string) {
  return DISPLAY_H1_BY_SLUG[slug] || fallback;
}
