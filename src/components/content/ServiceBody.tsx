import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import type { ServicePage } from "@/lib/service-pages";
import { relatedServices } from "@/lib/service-pages";

type Page = ServicePage & {
  name: string;
  mangaName: string;
  index: string;
};

function Close({ s }: { s: Page }) {
  const related = relatedServices(s.slug);
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <p className="max-w-xl font-display text-3xl">{s.cta}</p>
        <Link
          to="/contact"
          className={`${buttonVariants({ variant: "invert", size: "lg" })} mt-6`}
        >
          Request a review
        </Link>
        <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-paper/55">
          {related.map((r) => (
            <li key={r.slug}>
              <Link
                to="/seo-services/$slug"
                params={{ slug: r.slug }}
                className="hover:text-paper"
              >
                {r.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Crawl({ s }: { s: Page }) {
  return (
    <>
      <section className="border-b-[3px] border-ink bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="font-mono text-xs tracking-[0.2em] text-manga-cyan">CRAWL / INDEX / RENDER</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl">{s.whyTitle}</h2>
          <p className="mt-4 max-w-prose text-paper/75">{s.why}</p>
        </div>
      </section>
      <ol>
        {s.included.map((item, i) => (
          <li key={item.name} className="border-b-[3px] border-ink">
            <div className="mx-auto grid max-w-7xl items-start gap-4 px-5 py-7 font-mono sm:px-8 md:grid-cols-12">
              <p className="text-manga-cyan md:col-span-1">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-display text-2xl md:col-span-4">{item.name}</h3>
              <p className="font-sans text-sm text-muted md:col-span-7">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="font-mono text-xs text-manga-cyan">{s.processTitle}</p>
          <ol className="mt-6 grid gap-px bg-ink sm:grid-cols-2 lg:grid-cols-4">
            {s.process.map((item, i) => (
              <li key={item.name} className="bg-paper p-5">
                <p className="font-mono text-xs text-manga-cyan">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-xl">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="font-mono text-xs text-manga-cyan">{s.whoTitle}</p>
          <dl className="mt-6 grid gap-6 md:grid-cols-2">
            {s.who.map((item) => (
              <div key={item.name}>
                <dt className="font-display text-lg">{item.name}</dt>
                <dd className="mt-1 text-sm text-muted">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

function Anatomy({ s }: { s: Page }) {
  return (
    <>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="border-b-[3px] border-ink px-5 py-14 sm:px-8 lg:border-b-0 lg:border-r-[3px]">
            <p className="font-display text-xs text-manga-red">PAGE LAYERS</p>
            <h2 className="mt-3 font-display text-3xl">{s.whyTitle}</h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-muted">{s.why}</p>
          </div>
          <ol>
            {["Title tag", "H1", "Offer copy", "Proof", "CTA"].map((layer, i) => (
              <li
                key={layer}
                className="border-b-[3px] border-ink px-5 py-4 last:border-b-0 sm:px-8"
                style={{ paddingLeft: `${1.25 + i * 0.55}rem` }}
              >
                <span className="font-display text-xs text-manga-red">{String(i + 1).padStart(2, "0")}</span>
                <span className="ml-3 font-display text-xl">{layer}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-b-[3px] border-ink bg-paper-2/50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.includedTitle}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {s.included.map((item, i) => (
              <li
                key={item.name}
                className={i % 3 === 0 ? "manga-panel-red p-5 sm:col-span-2" : "manga-panel p-5"}
              >
                <h3 className="font-display text-xl">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.whoTitle}</h2>
          <ul className="mt-8">
            {s.who.map((item) => (
              <li key={item.name} className="grid gap-2 border-l-[8px] border-manga-red py-4 pl-5 md:grid-cols-12">
                <p className="font-display text-lg md:col-span-4">{item.name}</p>
                <p className="text-sm text-muted md:col-span-8">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {s.avoid?.length ? (
        <section className="border-b-[3px] border-ink">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-14 sm:px-8 md:grid-cols-2">
            {s.avoid.map((item) => (
              <p key={item.name} className="text-sm">
                <span className="font-display text-manga-red">{item.name}. </span>
                <span className="text-muted">{item.text}</span>
              </p>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}

function Cluster({ s }: { s: Page }) {
  const hub = s.who[0];
  return (
    <>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="max-w-2xl font-display text-3xl">{s.whyTitle}</h2>
          <p className="mt-4 max-w-prose text-muted">{s.why}</p>
          <div className="mt-10 flex flex-col items-stretch gap-4 lg:flex-row">
            <div className="manga-panel-red p-6 lg:w-2/5">
              <p className="font-display text-xs text-manga-red">HUB PAGE</p>
              <p className="mt-2 font-display text-3xl">{hub?.name}</p>
              <p className="mt-3 text-sm text-muted">{hub?.text}</p>
            </div>
            <ul className="grid flex-1 gap-3">
              {s.who.slice(1).map((item) => (
                <li key={item.name} className="manga-panel p-4">
                  <p className="font-display text-lg">{item.name}</p>
                  <p className="mt-1 text-sm text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.includedTitle}</h2>
          <ol className="mt-8">
            {s.included.map((item, i) => (
              <li key={item.name} className="flex gap-4 border-b border-ink/20 py-5">
                <span className="font-display text-manga-red">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl">{item.name}</h3>
                  <p className="mt-1 text-sm text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-b-[3px] border-ink bg-paper-2/40">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.processTitle}</h2>
          <ol className="mt-8 flex flex-col gap-0 md:flex-row md:overflow-x-auto">
            {s.process.map((item, i) => (
              <li key={item.name} className="min-w-[12rem] flex-1 border-[3px] border-ink p-4 md:-ml-[3px]">
                <p className="font-display text-xs text-manga-red">Ch. {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-lg">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

function MapPack({ s }: { s: Page }) {
  return (
    <>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
          <div className="px-5 py-14 sm:px-8 lg:col-span-5">
            <h2 className="font-display text-3xl">{s.whyTitle}</h2>
            <p className="mt-4 text-muted">{s.why}</p>
          </div>
          <div className="border-t-[3px] border-ink lg:col-span-7 lg:border-t-0 lg:border-l-[3px]">
            <div className="bg-manga-red px-5 py-3 font-display text-paper">Google Business Profile</div>
            <ul className="grid sm:grid-cols-2">
              {(s.extra ?? []).map((item) => (
                <li key={item.name} className="border-b-[3px] border-ink p-5 sm:odd:border-r-[3px]">
                  <p className="font-display text-lg">{item.name}</p>
                  <p className="mt-2 text-sm text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="border-b-[3px] border-ink bg-paper-2/50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.includedTitle}</h2>
          <ul className="mt-8 space-y-3">
            {s.included.map((item) => (
              <li key={item.name} className="flex gap-3">
                <span className="mt-1 inline-block size-3 shrink-0 bg-manga-red" />
                <div>
                  <p className="font-display text-lg">{item.name}</p>
                  <p className="text-sm text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.whoTitle}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {s.who.map((item) => (
              <article key={item.name} className="manga-panel-red p-5">
                <h3 className="font-display text-xl">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Findings({ s }: { s: Page }) {
  return (
    <>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="max-w-2xl font-display text-3xl">{s.whyTitle}</h2>
          <p className="mt-4 max-w-prose text-muted">{s.why}</p>
          <ol className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {["Blocker", "Opportunity", "Quick win", "Noise"].map((label, i) => (
              <li
                key={label}
                className={
                  i === 0
                    ? "border-[3px] border-ink bg-manga-red p-4 text-paper"
                    : "border-[3px] border-ink p-4"
                }
              >
                <p className="font-display text-xs">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-display text-xl">{label}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.includedTitle}</h2>
          <table className="mt-8 w-full min-w-[36rem] border-[3px] border-ink text-left text-sm">
            <thead className="bg-ink font-display text-paper">
              <tr>
                <th className="px-4 py-3">Area</th>
                <th className="px-4 py-3">What we look at</th>
              </tr>
            </thead>
            <tbody>
              {s.included.map((item) => (
                <tr key={item.name} className="border-t-[2px] border-ink align-top">
                  <td className="px-4 py-4 font-semibold">{item.name}</td>
                  <td className="px-4 py-4 text-muted">{item.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="border-b-[3px] border-ink bg-paper-2/50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.whoTitle}</h2>
          <ul className="mt-6">
            {s.who.map((item) => (
              <li key={item.name} className="grid gap-1 border-b-[2px] border-ink py-4 md:grid-cols-12">
                <p className="font-display md:col-span-4">{item.name}</p>
                <p className="text-sm text-muted md:col-span-8">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {s.extra?.length ? (
        <section className="border-b-[3px] border-ink bg-ink text-paper">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
            <h2 className="font-display text-3xl text-paper">{s.extraTitle}</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {s.extra.map((item) => (
                <li key={item.name} className="border-[3px] border-paper/35 p-5">
                  <p className="font-display text-xl">{item.name}</p>
                  <p className="mt-2 text-sm text-paper/70">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}

function Grid({ s }: { s: Page }) {
  return (
    <>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="max-w-2xl font-display text-3xl">{s.whyTitle}</h2>
          <p className="mt-4 max-w-prose text-muted">{s.why}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {s.pillars.map((p) => (
              <li key={p.k} className="border-[3px] border-ink p-5">
                <p className="font-display text-2xl">{p.k}</p>
                <p className="mt-2 text-sm text-muted">{p.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-b-[3px] border-ink bg-paper-2/40">
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.includedTitle}</h2>
          <table className="mt-8 w-full min-w-[40rem] border-[3px] border-ink text-left text-sm">
            <thead className="bg-paper-3 font-display">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Deliverable</th>
                <th className="px-4 py-3">What it decides</th>
              </tr>
            </thead>
            <tbody>
              {s.included.map((item, i) => (
                <tr key={item.name} className="border-t-[2px] border-ink align-top">
                  <td className="px-4 py-3 font-mono text-manga-red">{String(i + 1).padStart(2, "0")}</td>
                  <td className="px-4 py-3 font-semibold">{item.name}</td>
                  <td className="px-4 py-3 text-muted">{item.text}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.whoTitle}</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {s.who.map((item) => (
              <article key={item.name} className="manga-panel-cyan p-5">
                <h3 className="font-display text-xl">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      {s.avoid?.length ? (
        <section className="border-b-[3px] border-ink">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
            <ul className="grid gap-3 md:grid-cols-2">
              {s.avoid.map((item) => (
                <li key={item.name} className="text-sm">
                  <span className="font-display text-manga-red">{item.name}. </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}

function Risk({ s }: { s: Page }) {
  return (
    <>
      {s.avoid?.length ? (
        <section className="border-b-[3px] border-ink bg-manga-red text-paper">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
            <h2 className="font-display text-3xl text-paper">{s.avoidTitle ?? "What we refuse"}</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {s.avoid.map((item) => (
                <li key={item.name} className="border-[3px] border-paper p-5">
                  <p className="font-display text-xl">{item.name}</p>
                  <p className="mt-2 text-sm text-paper/80">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="max-w-2xl font-display text-3xl">{s.whyTitle}</h2>
          <p className="mt-4 max-w-prose text-muted">{s.why}</p>
        </div>
      </section>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.includedTitle}</h2>
          <ol className="mt-8">
            {s.included.map((item, i) => (
              <li key={item.name} className="grid gap-2 border-b-[2px] border-ink py-5 md:grid-cols-12">
                <p className="font-display text-manga-red md:col-span-1">{String(i + 1).padStart(2, "0")}</p>
                <p className="font-display text-lg md:col-span-4">{item.name}</p>
                <p className="text-sm text-muted md:col-span-7">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-b-[3px] border-ink bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl text-paper">{s.processTitle}</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {s.process.map((item, i) => (
              <li key={item.name} className="border-[3px] border-paper/30 p-5">
                <p className="font-display text-xs text-manga-red">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-xl">{item.name}</h3>
                <p className="mt-2 text-sm text-paper/70">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

function Answer({ s }: { s: Page }) {
  return (
    <>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="max-w-2xl font-display text-3xl">{s.whyTitle}</h2>
          <p className="mt-4 max-w-prose text-muted">{s.why}</p>
        </div>
      </section>
      <section className="border-b-[3px] border-ink bg-paper-2/50">
        <div className="mx-auto max-w-3xl space-y-6 px-5 py-14 sm:px-8">
          {s.faqs.slice(0, 4).map((item, i) => (
            <figure
              key={item.q}
              className={i % 2 ? "ml-8 border-[3px] border-ink bg-paper p-5" : "mr-8 border-[3px] border-ink bg-paper p-5"}
            >
              <p className="font-display text-lg">{item.q}</p>
              <p className="mt-2 text-sm text-muted">{item.a}</p>
            </figure>
          ))}
        </div>
      </section>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.includedTitle}</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {s.included.map((item) => (
              <li key={item.name} className="manga-panel-cyan p-5">
                <h3 className="font-display text-xl">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {s.extra?.length ? (
        <section className="border-b-[3px] border-ink">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
            <h2 className="font-display text-3xl">{s.extraTitle}</h2>
            <ul className="mt-8">
              {s.extra.map((item) => (
                <li key={item.name} className="grid gap-2 border-b-[2px] border-ink py-4 md:grid-cols-12">
                  <p className="font-display md:col-span-4">{item.name}</p>
                  <p className="text-sm text-muted md:col-span-8">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}

function Timeline({ s }: { s: Page }) {
  return (
    <>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="max-w-2xl font-display text-3xl">{s.whyTitle}</h2>
          <p className="mt-4 max-w-prose text-muted">{s.why}</p>
        </div>
      </section>
      <section className="border-b-[3px] border-ink bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl text-paper">{s.processTitle}</h2>
          <ol className="mt-8">
            {s.process.map((item, i) => (
              <li key={item.name} className="grid gap-3 border-t border-paper/20 py-6 md:grid-cols-12">
                <p className="font-display text-4xl text-manga-red md:col-span-2">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-2xl md:col-span-4">{item.name}</h3>
                <p className="text-sm text-paper/70 md:col-span-6">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.includedTitle}</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {s.included.map((item) => (
              <li key={item.name} className="manga-panel p-5">
                <h3 className="font-display text-xl">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.whoTitle}</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {s.who.map((item) => (
              <li key={item.name}>
                <p className="font-display text-lg">{item.name}</p>
                <p className="text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function Split({ s }: { s: Page }) {
  const client = s.extra?.[0];
  const agency = s.extra?.[1];
  return (
    <>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="border-b-[3px] border-ink p-8 md:border-b-0 md:border-r-[3px]">
            <p className="font-display text-xs text-manga-red">CLIENT SEES</p>
            <h2 className="mt-3 font-display text-3xl">{client?.name}</h2>
            <p className="mt-4 text-sm text-muted">{client?.text}</p>
          </div>
          <div className="bg-ink p-8 text-paper">
            <p className="font-display text-xs text-manga-cyan">YOU GET</p>
            <h2 className="mt-3 font-display text-3xl text-paper">{agency?.name}</h2>
            <p className="mt-4 text-sm text-paper/70">{agency?.text}</p>
          </div>
        </div>
      </section>
      <section className="border-b-[3px] border-ink">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="max-w-2xl font-display text-3xl">{s.whyTitle}</h2>
          <p className="mt-4 max-w-prose text-muted">{s.why}</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {s.who.map((item) => (
              <li key={item.name} className="manga-panel p-5">
                <p className="font-display text-lg">{item.name}</p>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="border-b-[3px] border-ink bg-paper-2/40">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl">{s.includedTitle}</h2>
          <ul className="mt-8 columns-1 gap-8 md:columns-2">
            {s.included.map((item) => (
              <li key={item.name} className="mb-5 break-inside-avoid">
                <p className="font-display text-lg">{item.name}</p>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {s.avoid?.length ? (
        <section className="border-b-[3px] border-ink">
          <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
            <h2 className="font-display text-2xl">{s.avoidTitle}</h2>
            <ul className="mt-4 grid gap-2 md:grid-cols-2">
              {s.avoid.map((item) => (
                <li key={item.name} className="text-sm">
                  <span className="font-display text-manga-red">{item.name}. </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}

const layouts = {
  crawl: Crawl,
  anatomy: Anatomy,
  cluster: Cluster,
  map: MapPack,
  findings: Findings,
  grid: Grid,
  risk: Risk,
  answer: Answer,
  timeline: Timeline,
  split: Split,
};

export function ServiceBody({ s }: { s: Page }) {
  const Body = layouts[s.shape];
  return (
    <div className={`service-chapter service-${s.shape}`}>
      <span className="service-kanji" aria-hidden="true">
        {s.jp}
      </span>
      <Body s={s} />
      <Close s={s} />
    </div>
  );
}
