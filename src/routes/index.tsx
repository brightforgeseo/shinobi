import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/SiteShell";
import { HomePage } from "@/components/home/HomePage";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Shinobi — SEO for rankings, leads and growth" },
      {
        name: "description",
        content:
          "SEO for businesses that need the phone to ring — not just rankings in a report. Technical SEO, content, local, authority and conversion.",
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
