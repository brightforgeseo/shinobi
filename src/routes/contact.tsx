import { createFileRoute } from "@tanstack/react-router";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { nextSteps, site } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Shinobi | SEO Agency Philippines" },
      {
        name: "description",
        content:
          "Request an SEO review from Shinobi in Quezon City. A studio of Bright Forge SEO. Philippines, UK, US and AU.",
      },
    ],
  }),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    if (!name) return;
    setSent(true);
    toast.success("Review request received. We usually reply within one business day.");
    e.currentTarget.reset();
  }

  return (
    <SiteShell>
      <section className="relative overflow-hidden border-b-[3px] border-ink">
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="chapter-stamp">Final</span>
            <h1 className="mt-5 font-display text-4xl sm:text-6xl">
              REQUEST A
              <span className="block text-manga-red">REVIEW.</span>
            </h1>
            <p className="mt-5 max-w-md text-muted">
              Quezon City dojo. SEO agency in the Philippines, and a studio of{" "}
              <a
                href={site.parentUrl}
                className="text-ink underline underline-offset-4 hover:text-manga-red"
              >
                {site.parentName}
              </a>
              . Send the site, the city and what is stuck. If more SEO is not the
              answer yet, we say so.
            </p>
            <dl className="mt-10 space-y-4 border-t-[3px] border-ink pt-8 text-sm">
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
                  Email
                </dt>
                <dd className="mt-1">{site.email}</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
                  Phone
                </dt>
                <dd className="mt-1">{site.phone}</dd>
              </div>
              <div>
                <dt className="text-[0.6875rem] uppercase tracking-[0.14em] text-faint">
                  Dojo
                </dt>
                <dd className="mt-1">
                  {site.city}
                  <br />
                  {site.serving}
                </dd>
              </div>
            </dl>
            <ol className="mt-10 space-y-3">
              {nextSteps.map((s) => (
                <li key={s.n} className="text-sm">
                  <span className="font-display text-manga-red">{s.n}</span>{" "}
                  {s.name}
                </li>
              ))}
            </ol>
          </div>

          <form
            onSubmit={onSubmit}
            className="manga-panel-red space-y-5 p-6 sm:p-8 lg:col-span-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required autoComplete="name" />
              </div>
              <div>
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="url">Website URL</Label>
              <Input id="url" name="url" type="url" required placeholder="https://" />
            </div>
            <div>
              <Label htmlFor="market">Main target market</Label>
              <Input
                id="market"
                name="market"
                placeholder="Philippines, UK, US…"
              />
            </div>
            <div>
              <Label htmlFor="problem">The problem you want SEO to solve</Label>
              <Textarea
                id="problem"
                name="problem"
                required
                rows={5}
                placeholder="Rankings, enquiries, a drop, a migration, AI visibility, weak service pages…"
              />
            </div>
            <div>
              <Label htmlFor="success">What success should look like</Label>
              <Input
                id="success"
                name="success"
                placeholder="Calls, forms, pipeline, rankings…"
              />
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" variant="primary" size="lg">
                {sent ? "Send another" : "Request the review"}
              </Button>
              <p className="text-xs text-faint">Usually one business day.</p>
            </div>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}
