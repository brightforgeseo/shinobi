import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { HomePage } from "@/components/home/HomePage";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "SEO Agency Philippines | Shinobi by Bright Forge" },
      {
        name: "description",
        content:
          "Quezon City SEO agency for SEO services in the Philippines. A studio of Bright Forge SEO. Rankings, leads and commercial growth.",
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
