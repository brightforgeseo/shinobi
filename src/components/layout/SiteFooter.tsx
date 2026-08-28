import { Link } from "@tanstack/react-router";
import { industries, services, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-display text-3xl">SHINOBI 忍</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
            SEO and web development for games, film, music, design and culture-led
            brands. A studio of{" "}
            <a
              href={site.parentUrl}
              className="text-manga-cyan underline underline-offset-4 hover:text-manga-red"
            >
              {site.parentName}
            </a>
            , the parent company. British-led, Philippines-based.
          </p>
          <p className="mt-4 text-sm">{site.email}</p>
          <p className="text-sm text-paper/70">{site.phone}</p>
          <p className="text-sm text-paper/70">{site.city}</p>
        </div>
        <div className="md:col-span-3">
          <p className="font-display text-xs tracking-[0.18em] text-manga-cyan">
            SEO SERVICES
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/seo-services/$slug"
                  params={{ slug: s.slug }}
                  className="hover:text-manga-red"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/command-centre" className="hover:text-manga-red">
                Command Centre
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="font-display text-xs tracking-[0.18em] text-manga-cyan">
            INDUSTRIES
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {industries
              .filter((industry) => industry.group !== "Other proven sectors")
              .map((i) => (
                <li key={i.slug}>
                  <Link
                    to="/industries/$slug"
                    params={{ slug: i.slug }}
                    className="hover:text-manga-red"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            <li>
              <Link
                to="/industries"
                className="font-semibold text-manga-cyan hover:text-manga-red"
              >
                View every industry
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="font-display text-xs tracking-[0.18em] text-manga-cyan">
            DOJO
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/cases" className="hover:text-manga-red">
                Case Studies
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-manga-red">
                Field Notes
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-manga-red">
                About
              </Link>
            </li>
            <li>
              <Link to="/development" className="hover:text-manga-red">
                Development
              </Link>
            </li>
            <li>
              <a
                href={site.parentUrl}
                className="hover:text-manga-red"
              >
                Bright Forge SEO
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-manga-red">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t-[3px] border-paper/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 text-xs text-paper/45 sm:flex-row sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.legal}
          {" · "}
          <a href={site.parentUrl} className="hover:text-paper">
            A {site.parentName} studio
          </a>
          </p>
          <p>
            {site.serving} · Est. {site.established}
          </p>
        </div>
      </div>
    </footer>
  );
}
