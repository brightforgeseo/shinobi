import { Link } from "@tanstack/react-router";
import { Chapter } from "@/components/content/Chapter";

import { FrameImg } from "@/components/ui/frame-img";
import { buttonVariants } from "@/components/ui/button";
import { media } from "@/lib/media";
import heroVideo from "@/assets/video/hero.mp4";
import {
  cases,
  clients,
  commandLayers,
  croPoints,
  faqs,
  first90,
  industries,
  nextSteps,
  people,
  quotes,
  services,
  site,
  whoWeHelp,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

function SpeechBubble({
  text,
  author,
  role,
  side = "left",
}: {
  text: string;
  author: string;
  role: string;
  side?: "left" | "right";
}) {
  return (
    <figure
      className={cn(
        "relative max-w-xl border-[3px] border-ink bg-paper px-5 py-4",
        side === "right" && "ml-auto",
      )}
    >
      <p className="text-[1.05rem] leading-relaxed">“{text}”</p>
      <figcaption className="mt-3 text-sm">
        <span className="font-semibold">{author}</span>
        <span className="text-muted"> · {role}</span>
      </figcaption>
    </figure>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-[3px] border-ink">
      <div className="relative h-[calc(100svh-8.25rem-3px)] min-h-[30rem] max-h-[52rem] w-full">
        <video
          className="absolute inset-0 h-full w-full bg-ink object-cover object-[32%_16%] sm:object-[40%_14%] lg:object-[45%_12%]"
          poster={media.heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/55 to-paper/10 sm:bg-none" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-paper/70 via-paper/20 to-transparent sm:block lg:bg-gradient-to-l" />
        <div className="absolute inset-x-0 bottom-0 hidden h-32 bg-gradient-to-t from-paper/35 to-transparent sm:block" />
        <span className="absolute right-4 top-4 font-display text-3xl text-manga-red drop-shadow-[2px_2px_0_#fff6e8] sm:right-6 sm:top-6 sm:text-4xl lg:right-10 lg:text-5xl">
          参上
        </span>
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="mx-auto max-w-7xl px-4 pb-[max(1.75rem,env(safe-area-inset-bottom))] sm:px-8 sm:pb-12 lg:pb-16">
            <div className="max-w-xl lg:ml-auto">
              <p className="font-display text-[0.62rem] tracking-[0.14em] text-manga-red sm:text-xs sm:tracking-[0.22em]">
                <span className="sm:hidden">第01話 · PHILIPPINES SEO</span>
                <span className="hidden sm:inline">
                  第01話 · PHILIPPINES SEO · {site.serving}
                </span>
              </p>
              <h1 className="mt-3 font-display text-[1.7rem] leading-[1.12] sm:mt-4 sm:text-4xl lg:text-[2.85rem]">
                THE PHONE HAS
                <span className="block text-manga-red">TO RING.</span>
                NOT JUST THE REPORT.
              </h1>
              <p className="manga-panel mt-3 max-w-md bg-paper/95 px-3 py-2 text-sm font-bold leading-relaxed text-ink sm:mt-5 sm:text-[1.05rem] sm:leading-[1.65]">
                SEO and web development for games, film, music, design and
                culture-led brands. Built in the Philippines for creative
                businesses competing worldwide. Shinobi is a studio of{" "}
                <a
                  href={site.parentUrl}
                  className="font-bold text-manga-red underline underline-offset-4 hover:text-ink"
                >
                  {site.parentName}
                </a>
                , the parent company.
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
                <Link
                  to="/contact"
                  className={cn(
                    buttonVariants({ variant: "accent", size: "lg" }),
                    "w-full sm:w-auto",
                  )}
                >
                  Request an SEO review
                </Link>
                <Link
                  to="/cases"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "w-full sm:w-auto",
                  )}
                >
                  View case studies
                </Link>
              </div>
              <div className="mt-5 grid max-w-md grid-cols-3 gap-2 sm:mt-10 sm:gap-3">
                {[
                  { k: "Experience", v: `${site.experience} yrs` },
                  { k: "Parent cases", v: String(cases.length) },
                  { k: "Focus", v: "Creative" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="manga-panel bg-paper/90 px-2 py-2 text-center sm:px-3 sm:py-3"
                  >
                    <p className="font-display text-base leading-none sm:text-lg">
                      {s.v}
                    </p>
                    <p className="mt-1 text-[0.58rem] uppercase tracking-wider text-muted sm:mt-1.5 sm:text-[0.65rem]">
                      {s.k}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientStrip() {
  return (
    <section className="border-b-[3px] border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:gap-8 sm:px-8">
        <p className="shrink-0 font-display text-xs tracking-[0.18em] text-manga-red">
          IN THE FIELD
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper/80">
          {clients.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServicesBlock() {
  const core = services.filter((s) => s.group === "core");
  const strategy = services.filter((s) => s.group === "strategy").slice(0, 4);
  return (
    <section className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <Chapter n="02" jp="術">
          SEO services
        </Chapter>
        <h2 className="mt-4 font-display text-3xl sm:text-5xl">
          Core SEO.
          <span className="text-manga-red"> Then the growth layer.</span>
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {core.map((s, i) => (
            <li key={s.slug}>
              <Link
                to="/seo-services/$slug"
                params={{ slug: s.slug }}
                className={cn(
                  "flex h-full min-h-[210px] flex-col justify-between p-5",
                  i % 2 === 0 ? "manga-panel" : "manga-panel-red",
                )}
              >
                <p className="font-display text-xs text-manga-red">{s.index}</p>
                <div>
                  <p className="font-display text-xl">{s.mangaName}</p>
                  <p className="mt-1 text-sm">{s.name}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.lede}</p>
                </div>
                <p className="mt-4 font-display text-xs text-manga-red">Open →</p>
              </Link>
            </li>
          ))}
        </ul>
        <ol className="mt-6 divide-y-[2px] divide-ink border-y-[2px] border-ink">
          {strategy.map((s) => (
            <li key={s.slug}>
              <Link
                to="/seo-services/$slug"
                params={{ slug: s.slug }}
                className="flex flex-col gap-2 py-5 hover:text-manga-red md:flex-row md:items-start md:gap-10"
              >
                <div className="md:w-64 md:shrink-0">
                  <p className="font-display text-xs text-manga-red">{s.index}</p>
                  <p className="mt-1 font-sans text-[1.05rem] font-semibold leading-snug tracking-tight">
                    {s.name}
                  </p>
                </div>
                <span className="min-w-0 flex-1 text-sm text-muted">{s.lede}</span>
              </Link>
            </li>
          ))}
        </ol>
        <Link
          to="/seo-services"
          className={cn(buttonVariants({ variant: "outline" }), "mt-8")}
        >
          All SEO services
        </Link>
      </div>
    </section>
  );
}

function WhoBlock() {
  return (
    <section className="border-b-[3px] border-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Chapter n="03" jp="誰">
            Who this is for
          </Chapter>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Built for people who make
            <span className="text-manga-red"> things worth finding.</span>
          </h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {whoWeHelp.map((w) => (
            <li key={w.name} className="manga-panel p-5">
              <h3 className="font-display text-xl">{w.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function First90() {
  return (
    <section className="border-b-[3px] border-ink bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 py-14 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Chapter n="05" jp="九十">
            First 90 days
          </Chapter>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Diagnosis. Foundations. Building. Proof.
          </h2>
          <div className="manga-panel mt-6 overflow-hidden">
            <FrameImg
              src={media.strategyTable}
              alt=""
              className="aspect-[16/10] w-full"
            />
          </div>
        </div>
        <ol className="lg:col-span-8">
          {first90.map((s) => (
            <li
              key={s.days}
              className="border-b border-paper/20 py-5 first:pt-0 last:border-0"
            >
              <p className="font-display text-xs text-manga-red">{s.days}</p>
              <h3 className="mt-1 text-xl font-semibold">{s.name}</h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-paper/70">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CommandBlock() {
  return (
    <section className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <Chapter n="06" jp="指令">
          Command Centre
        </Chapter>
        <h2 className="mt-4 max-w-3xl font-display text-3xl sm:text-5xl">
          Evidence-led operations.
          <span className="text-manga-red"> Not another dashboard.</span>
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {commandLayers.map((c, i) => (
            <li
              key={c.name}
              className={cn(
                "p-5",
                i % 3 === 1 ? "manga-panel-red" : "manga-panel",
              )}
            >
              <p className="font-display text-xs text-manga-red">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-xl">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
            </li>
          ))}
        </ul>
        <Link
          to="/command-centre"
          className={cn(buttonVariants({ variant: "outline" }), "mt-8")}
        >
          Open the centre
        </Link>
      </div>
    </section>
  );
}

function CasesBlock() {
  const [lead, ...rest] = cases;
  return (
    <section className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <Chapter n="07" jp="伝説">
          Case studies
        </Chapter>
        <h2 className="mt-4 font-display text-3xl sm:text-5xl">
          Proof that moves
          <span className="text-manga-red"> more than rankings.</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">
          These numbers come from{" "}
          <a
            href={site.parentUrl}
            className="underline underline-offset-4 hover:text-manga-red"
          >
            {site.parentName}
          </a>
          , our parent company. Same dojo. Same evidence bar.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          <Link
            to="/cases/$slug"
            params={{ slug: lead.slug }}
            className="manga-panel group overflow-hidden lg:col-span-7"
          >
            <FrameImg src={lead.image} alt="" className="aspect-[16/10] w-full" />
            <div className="border-t-[3px] border-ink p-5">
              <p className="text-[0.7rem] uppercase tracking-wider text-muted">
                {lead.sector} · {lead.year} · Parent company
              </p>
              <h3 className="mt-1 font-display text-2xl group-hover:text-manga-red">
                {lead.client}
              </h3>
              <p className="mt-2 text-sm text-muted">{lead.headline}</p>
              <p className="mt-4 font-display text-3xl text-manga-red">{lead.result}</p>
              <p className="text-xs text-muted">{lead.resultLabel}</p>
            </div>
          </Link>
          <div className="flex flex-col gap-5 lg:col-span-5">
            {rest.slice(0, 2).map((c) => (
              <Link
                key={c.slug}
                to="/cases/$slug"
                params={{ slug: c.slug }}
                className="manga-panel group flex min-h-0 flex-1 flex-col overflow-hidden"
              >
                <FrameImg src={c.image} alt="" className="aspect-[16/7] w-full" />
                <div className="border-t-[3px] border-ink p-4">
                  <h3 className="font-display text-xl group-hover:text-manga-red">
                    {c.client}
                  </h3>
                  <p className="mt-1 font-display text-2xl text-manga-red">{c.result}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Link to="/cases" className={cn(buttonVariants({ variant: "outline" }), "mt-8")}>
          All case studies
        </Link>
      </div>
    </section>
  );
}

function CastBlock() {
  return (
    <section className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <Chapter n="08" jp="忍">
          The dojo
        </Chapter>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl">
          British-led.
          <span className="text-manga-red"> Philippines-based.</span>
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {people.map((p) => (
            <li key={p.name} className="manga-panel overflow-hidden">
              <FrameImg
                src={p.image}
                alt=""
                className="aspect-[4/5] w-full border-b-[3px] border-ink"
              />
              <div className="p-4">
                <h3 className="font-display text-xl">{p.name}</h3>
                <p className="mt-1 text-[0.7rem] uppercase tracking-wider text-manga-red">
                  {p.role}
                </p>
                <p className="mt-2 text-sm text-muted">{p.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function QuotesBlock() {
  return (
    <section className="border-b-[3px] border-ink bg-paper-2/50">
      <div className="mx-auto max-w-7xl space-y-5 px-5 py-14 sm:px-8">
        <Chapter n="09" jp="声">
          From the field
        </Chapter>
        {quotes.map((q) => (
          <SpeechBubble key={q.author} {...q} />
        ))}
      </div>
    </section>
  );
}

function IndustriesBlock() {
  const creative = industries.filter((i) => i.group !== "Other proven sectors");
  return (
    <section className="border-b-[3px] border-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
        <Chapter n="10" jp="領">
          Industries
        </Chapter>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl">
          Games, screens, stages
          <span className="text-manga-red"> and subcultures.</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Search for businesses that make things people play, watch, hear,
          wear, visit and follow. The creative industries lead the studio.
        </p>
        <Link
          to="/industries"
          className={cn(buttonVariants({ variant: "outline" }), "mt-7")}
        >
          Explore every industry
        </Link>
        </div>
        <ol className="divide-y-[2px] divide-ink border-y-[2px] border-ink lg:col-span-8">
          {creative.map((i, index) => (
            <li key={i.slug}>
              <Link
                to="/industries/$slug"
                params={{ slug: i.slug }}
                className="grid gap-2 py-5 transition-colors hover:text-manga-red sm:grid-cols-[3rem_1fr_2fr] sm:items-start sm:gap-5"
              >
                <span className="font-display text-xs text-manga-red">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-lg">{i.name}</span>
                  <span className="mt-1 block text-[0.65rem] uppercase tracking-wider text-faint">
                    {i.mangaName}
                  </span>
                </span>
                <span className="text-sm leading-relaxed text-muted">{i.lede}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CroBlock() {
  return (
    <section className="border-b-[3px] border-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Chapter n="11" jp="変">
            Conversion
          </Chapter>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Rankings without
            <span className="text-manga-red"> a next step are decoration.</span>
          </h2>
        </div>
        <ul className="space-y-3 lg:col-span-7">
          {croPoints.map((p) => (
            <li key={p} className="border-b border-ink/15 pb-3 text-sm leading-relaxed">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FaqBlock() {
  return (
    <section className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <Chapter n="12" jp="問">
          Questions
        </Chapter>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl">
          Straight answers.
        </h2>
        <dl className="mt-8 divide-y-[2px] divide-ink border-y-[2px] border-ink">
          {faqs.map((f) => (
            <div key={f.q} className="grid gap-3 py-6 lg:grid-cols-12">
              <dt className="font-display text-lg lg:col-span-5">{f.q}</dt>
              <dd className="text-sm leading-relaxed text-muted lg:col-span-7">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function CloseBlock() {
  return (
    <section className="border-t-[3px] border-ink bg-paper-2 text-ink">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-12 lg:items-center lg:py-14">
        <div className="lg:col-span-5">
          <Chapter n="13" jp="次">
            Next
          </Chapter>
          <h2 className="mt-4 max-w-md font-display text-4xl sm:text-5xl">
            Request a review.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted">
            Send the site. We look at search position, commercial gaps and whether
            there is a fit. If more SEO is not the answer yet, we say so.
          </p>
          <Link
            to="/contact"
            className={cn(buttonVariants({ variant: "accent", size: "lg" }), "mt-7")}
          >
            Request an SEO review
          </Link>
        </div>
        <ol className="border-[3px] border-ink bg-paper lg:col-span-7">
          {nextSteps.map((step, index) => (
            <li
              key={step.name}
              className="grid gap-2 border-b-2 border-ink px-4 py-4 last:border-b-0 sm:grid-cols-[3rem_12rem_1fr] sm:items-start sm:gap-4 sm:px-5"
            >
              <span className="font-display text-sm text-manga-red">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold leading-snug">{step.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <ClientStrip />
      <ServicesBlock />
      <WhoBlock />
      <First90 />
      <CommandBlock />
      <CasesBlock />
      <CastBlock />
      <QuotesBlock />
      <IndustriesBlock />
      <CroBlock />
      <FaqBlock />
      <CloseBlock />
    </>
  );
}
