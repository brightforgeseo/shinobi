import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { HomePage } from "@/components/home/HomePage";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Creative Industry SEO Philippines | Shinobi" },
      {
        name: "description",
        content:
          "SEO and web development for games, film, music, design and culture-led brands. Philippines-based, working worldwide. A Bright Forge SEO studio.",
      },
    ],
  }),
});

function Home() {
  return (
    <SiteShell>
      <HomePage />
    </SiteShell>
  );
}
