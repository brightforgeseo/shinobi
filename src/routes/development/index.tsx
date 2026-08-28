import { createFileRoute, Link } from "@tanstack/react-router";
import { Chapter } from "@/components/content/Chapter";
import { PageHero } from "@/components/content/PageHero";
import { SiteShell } from "@/components/layout/SiteShell";
import { buttonVariants } from "@/components/ui/button";
import { hubFaqs, hubFocus } from "@/lib/dev-pages";
import { development } from "@/lib/site-data";

export const Route = createFileRoute("/development/")({
  component: Page,
  head: () => ({
    meta: [
      { title: "SEO-First Web Development Philippines | Shinobi" },
      {
        name: "description",
        content:
          "SEO-first web development for creative, media and entertainment sites. Fast portfolios, catalogues, releases and campaigns without hidden content.",
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
        title="VISUAL SITES."
        red="VISIBLE CONTENT."
      >
        Creative sites can move, play and misbehave without hiding the work. We
        build portfolio, catalogue, release and campaign pages with performance,
        crawlability and launch safety planned from the start.
      </PageHero>

      <section className="border-b-[3px] border-ink bg-ink text-paper">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 lg:grid-cols-12">
          <p className="font-display text-2xl text-manga-red lg:col-span-4">
            Motion is allowed.
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-paper/75 lg:col-span-8">
            The rule is simple: the reel, game, exhibition, collection or story
            should still exist as useful HTML, routes and metadata when the visual
            effects are stripped away. We test both versions.
          </p>
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
          <ol className="mt-8 divide-y-[3px] divide-ink border-y-[3px] border-ink">
            {hubFocus.map((item, i) => (
              <li
                key={item.name}
                className="grid gap-3 py-6 sm:grid-cols-[4rem_16rem_1fr] sm:items-start"
              >
                <p className="font-display text-sm text-manga-red">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-xl">{item.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <Chapter n="02" jp="法">
            How we build without creating SEO debt
          </Chapter>
          <ol className="mt-8 border-y-[2px] border-paper/40">
            {[
              ["01", "Audit", "Current site, rankings, crawl, content, analytics, conversion risks."],
              ["02", "Plan", "Templates, URLs, content sections, redirects, schema, priorities."],
              ["03", "Build", "Speed, accessibility, crawlability, editorial control."],
              ["04", "QA", "Pages, metadata, forms, mobile, redirects, schema, indexation."],
              ["05", "Launch", "Checklist, Search Console, post-launch crawl."],
              ["06", "Improve", "Ranking, crawl and conversion data after launch."],
            ].map(([n, name, text]) => (
              <li
                key={n}
                className="grid gap-2 border-b border-paper/30 py-5 last:border-b-0 sm:grid-cols-[4rem_10rem_1fr]"
              >
                <p className="font-display text-manga-red">{n}</p>
                <h3 className="font-display text-xl">{name}</h3>
                <p className="text-sm leading-relaxed text-paper/70">{text}</p>
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
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <h3 className="font-display text-sm tracking-[0.16em] text-manga-red lg:col-span-3">
              MODERN FRAMEWORKS
            </h3>
            <ul className="divide-y-[2px] divide-ink border-y-[3px] border-ink lg:col-span-9">
              {modern.map((d) => (
                <li key={d.slug}>
                  <Link
                    to="/development/$slug"
                    params={{ slug: d.slug }}
                    className="grid gap-2 py-5 hover:text-manga-red sm:grid-cols-[10rem_1fr_auto]"
                  >
                    <h3 className="font-display text-xl">{d.name}</h3>
                    <p className="text-sm leading-relaxed text-muted">{d.lede}</p>
                    <span className="font-display text-manga-red">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-display text-sm tracking-[0.16em] text-manga-red lg:col-span-3">
              CORE TECHNOLOGIES
            </h3>
            <ul className="divide-y-[2px] divide-ink border-y-[3px] border-ink lg:col-span-9">
              {core.map((d) => (
                <li key={d.slug}>
                  <Link
                    to="/development/$slug"
                    params={{ slug: d.slug }}
                    className="grid gap-2 py-5 hover:text-manga-red sm:grid-cols-[10rem_1fr_auto]"
                  >
                    <h3 className="font-display text-xl">{d.name}</h3>
                    <p className="text-sm leading-relaxed text-muted">{d.lede}</p>
                    <span className="font-display text-manga-red">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b-[3px] border-ink bg-paper-2/50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <Chapter n="04" jp="誰">
            Who this suits
          </Chapter>
          <ol className="mt-8 divide-y-[2px] divide-ink border-y-[3px] border-ink">
            {[
              { n: "Launching a title or release", t: "Build durable routes before launch traffic arrives." },
              { n: "Rebuilding a visual portfolio", t: "Keep the motion and image quality without hiding the work." },
              { n: "Growing a catalogue or archive", t: "Structure collections, projects, people and formats before they sprawl." },
            ].map((item, i) => (
              <li key={item.n} className="grid gap-2 py-5 sm:grid-cols-[4rem_18rem_1fr]">
                <p className="font-display text-sm text-manga-red">0{i + 1}</p>
                <h3 className="font-display text-xl">{item.n}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.t}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 border-l-[6px] border-manga-red bg-ink p-6 text-paper">
            <p className="font-display text-xl">What we will not do</p>
            <p className="mt-2 text-sm text-paper/70">
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
