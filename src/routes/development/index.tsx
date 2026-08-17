import { createFileRoute, Link } from "@tanstack/react-router";
import { Chapter } from "@/components/content/Chapter";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { TiltCard } from "@/components/ui/tilt-card";
import { buttonVariants } from "@/components/ui/button";
import { hubFaqs, hubFocus } from "@/lib/dev-pages";
import { development } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/development/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "SEO-First Web Development — Shinobi" },
      {
        name: "description",
        content:
          "Web development that protects rankings, performance and conversion paths from the start. Astro, SvelteKit, Next.js, React and WordPress.",
      },
    ],
  }),
});

function Page() {
  const modern = development.filter((d) => d.group === "Modern Frameworks");
  const core = development.filter((d) => d.group === "Core Technologies");

  return (
    <SiteShell>
      <PageHero
        chapter="00"
        jp="開"
        kicker="SEO-first web development"
        title="PROTECT RANKINGS"
        red="FROM THE START."
      >
        A good website build should not make SEO harder. We plan structure,
        speed, content, redirects, schema and tracking before launch so the site
        is ready to earn visibility — not just look finished.
      </PageHero>

      <section className="border-b-[3px] border-ink bg-paper-2/40">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-10 sm:px-8 md:grid-cols-3">
          {[
            { k: "SEO before polish", v: "Crawlability, metadata, content structure and redirects before visual extras." },
            { k: "Performance", v: "Fast pages help users and reduce technical drag before SEO work even starts." },
            { k: "Human QA", v: "Manual checks for forms, schema, indexing and conversion paths." },
          ].map((p) => (
            <TiltCard key={p.k} className="manga-panel h-full p-5">
              <p className="font-display text-xs tracking-[0.16em] text-manga-red">
                {p.k.toUpperCase()}
              </p>
              <p className="mt-2 text-sm">{p.v}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <Chapter n="01" jp="焦">
            Build focus
          </Chapter>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            More than a
            <span className="text-manga-red"> fast framework.</span>
          </h2>
          <p className="mt-4 max-w-3xl text-muted">
            A website build is an SEO decision as much as a design or framework
            decision. We plan around the commercial job first, then choose the
            stack, templates and launch checks that support visibility rather
            than create SEO debt.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hubFocus.map((item, i) => (
              <TiltCard
                key={item.name}
                className={cn(
                  "h-full p-5",
                  i % 3 === 1 ? "manga-panel-red" : i % 3 === 2 ? "manga-panel-cyan" : "manga-panel",
                )}
              >
                <h3 className="font-display text-xl">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <Chapter n="02" jp="法">
            How we build without creating SEO debt
          </Chapter>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Audit", "Current site, rankings, crawl, content, analytics, conversion risks."],
              ["02", "Plan", "Templates, URLs, content sections, redirects, schema, priorities."],
              ["03", "Build", "Speed, accessibility, crawlability, editorial control."],
              ["04", "QA", "Pages, metadata, forms, mobile, redirects, schema, indexation."],
              ["05", "Launch", "Checklist, Search Console, post-launch crawl."],
              ["06", "Improve", "Ranking, crawl and conversion data after launch."],
            ].map(([n, name, text]) => (
              <li key={n} className="border-[3px] border-paper/70 p-5">
                <p className="font-display text-manga-red">{n}</p>
                <h3 className="mt-1 font-display text-xl">{name}</h3>
                <p className="mt-2 text-sm text-paper/70">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <Chapter n="03" jp="栈">
            Choose the stack around the job
          </Chapter>
          <h2 className="mt-4 font-display text-3xl">Not the fashion cycle.</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Modern frameworks and core technologies. The right one depends on
            content, editing needs, interactivity, performance and SEO risk.
          </p>
          <h3 className="mt-10 font-display text-sm tracking-[0.16em] text-manga-red">
            MODERN FRAMEWORKS
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {modern.map((d, i) => (
              <TiltCard
                key={d.slug}
                className={cn("h-full p-5", i === 1 ? "manga-panel-red" : "manga-panel")}
              >
                <Link to="/development/$slug" params={{ slug: d.slug }} className="block">
                  <h3 className="font-display text-2xl">{d.name}</h3>
                  <p className="mt-2 text-sm text-muted">{d.lede}</p>
                </Link>
              </TiltCard>
            ))}
          </div>
          <h3 className="mt-10 font-display text-sm tracking-[0.16em] text-manga-red">
            CORE TECHNOLOGIES
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {core.map((d) => (
              <TiltCard key={d.slug} className="manga-panel-cyan h-full p-5">
                <Link to="/development/$slug" params={{ slug: d.slug }} className="block">
                  <h3 className="font-display text-2xl">{d.name}</h3>
                  <p className="mt-2 text-sm text-muted">{d.lede}</p>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-paper-2/50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <Chapter n="04" jp="誰">
            Who this suits
          </Chapter>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { n: "Replacing an old site", t: "Protect what already ranks while the templates change." },
              { n: "Rebuilding slow WordPress", t: "Keep the CMS if it still fits — or leave it if it does not." },
              { n: "Launching a service site", t: "Structure, speed and conversion paths before the visual extras." },
            ].map((item) => (
              <div key={item.n} className="manga-panel p-5">
                <h3 className="font-display text-xl">{item.n}</h3>
                <p className="mt-2 text-sm text-muted">{item.t}</p>
              </div>
            ))}
          </div>
          <div className="manga-panel-red mt-6 p-5">
            <p className="font-display text-xl">What we will not do</p>
            <p className="mt-2 text-sm text-muted">
              We will not sell a shiny rebuild that creates indexation problems,
              strips content, loses redirects or weakens the pages already
              supporting SEO performance.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Chapter n="05" jp="問">
              Development questions
            </Chapter>
            <h2 className="mt-4 font-display text-3xl">Worth answering first.</h2>
          </div>
          <div className="divide-y-[3px] divide-ink border-y-[3px] border-ink lg:col-span-8">
            {hubFaqs.map((item) => (
              <details key={item.q} className="group bg-panel px-3 py-4">
                <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-display text-base">{item.q}</span>
                  <span className="font-display text-manga-red group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-manga-red text-paper">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-xl font-display text-3xl">
            Need a site that does not break your SEO on launch?
          </p>
          <Link to="/contact" className={buttonVariants({ variant: "invert", size: "lg" })}>
            Map the build path
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
