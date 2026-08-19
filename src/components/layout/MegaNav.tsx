"use client";

import { type ReactNode, useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  development,
  industries,
  services,
  site,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { AuthSlot } from "@/components/layout/AuthSlot";

const core = services.filter((s) => s.group === "core");
const strategy = services.filter((s) => s.group === "strategy");

const industryGroups = [...new Set(industries.map((i) => i.group))];
const devGroups = [...new Set(development.map((d) => d.group))];

type Panel = "seo" | "dev" | "ind" | null;

export function MegaNav() {
  const [panel, setPanel] = useState<Panel>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<Panel>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setPanel(null);
    setMobile(false);
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper/95"
      onMouseLeave={() => setPanel(null)}
    >
      <div className="mx-auto flex h-[8.25rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex h-full shrink-0 items-center py-2">
          <img
            src="/og.jpg"
            alt="Shinobi Search Dojo"
            width={1200}
            height={630}
            className="block h-[7.25rem] w-auto max-h-full object-contain object-left"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          <MegaTrigger
            label="SEO Services"
            open={panel === "seo"}
            active={pathname.startsWith("/seo-services") || pathname.startsWith("/command-centre")}
            onEnter={() => setPanel("seo")}
          />
          <MegaTrigger
            label="Development"
            open={panel === "dev"}
            active={pathname.startsWith("/development")}
            onEnter={() => setPanel("dev")}
          />
          <MegaTrigger
            label="Industries"
            open={panel === "ind"}
            active={pathname.startsWith("/industries")}
            onEnter={() => setPanel("ind")}
          />
          <PlainLink href="/cases" label="Case Studies" pathname={pathname} />
          <PlainLink href="/blog" label="Field Notes" pathname={pathname} />
          <PlainLink href="/about" label="Dojo" pathname={pathname} />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <AuthSlot />
          <Link
            to="/contact"
            className={buttonVariants({ variant: "accent", size: "sm" })}
          >
            Request a review
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border-[3px] border-ink bg-panel lg:hidden"
          aria-expanded={mobile}
          aria-label={mobile ? "Close menu" : "Open menu"}
          onClick={() => setMobile((v) => !v)}
        >
          {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {panel ? (
        <div
          className="absolute inset-x-0 top-full hidden border-b-[3px] border-ink bg-paper shadow-[0_16px_0_0_rgba(12,12,16,0.08)] lg:block"
          onMouseLeave={() => setPanel(null)}
        >
          <div className="mx-auto max-w-7xl px-6 py-7">
            {panel === "seo" ? <SeoMega /> : null}
            {panel === "dev" ? <DevMega /> : null}
            {panel === "ind" ? <IndMega /> : null}
          </div>
        </div>
      ) : null}

      {mobile ? (
        <div className="max-h-[80dvh] overflow-y-auto border-t-[3px] border-ink bg-paper px-4 py-4 lg:hidden">
          <MobileGroup
            label="SEO Services"
            open={mobileOpen === "seo"}
            onToggle={() => setMobileOpen((v) => (v === "seo" ? null : "seo"))}
          >
            <Link to="/seo-services" className="block py-2 font-display text-sm text-manga-red">
              All SEO services
            </Link>
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/seo-services/$slug"
                params={{ slug: s.slug }}
                className="block py-2 text-sm"
              >
                {s.name}
              </Link>
            ))}
            <Link to="/command-centre" className="block py-2 text-sm">
              SEO Command Centre
            </Link>
          </MobileGroup>
          <MobileGroup
            label="Development"
            open={mobileOpen === "dev"}
            onToggle={() => setMobileOpen((v) => (v === "dev" ? null : "dev"))}
          >
            <Link to="/development" className="block py-2 font-display text-sm text-manga-red">
              All development
            </Link>
            {development.map((d) => (
              <Link
                key={d.slug}
                to="/development/$slug"
                params={{ slug: d.slug }}
                className="block py-2 text-sm"
              >
                {d.name}
              </Link>
            ))}
          </MobileGroup>
          <MobileGroup
            label="Industries"
            open={mobileOpen === "ind"}
            onToggle={() => setMobileOpen((v) => (v === "ind" ? null : "ind"))}
          >
            <Link to="/industries" className="block py-2 font-display text-sm text-manga-red">
              All industries
            </Link>
            {industries.map((i) => (
              <Link
                key={i.slug}
                to="/industries/$slug"
                params={{ slug: i.slug }}
                className="block py-2 text-sm"
              >
                {i.name}
              </Link>
            ))}
          </MobileGroup>
          <Link to="/cases" className="flex min-h-11 items-center font-display">
            Case Studies
          </Link>
          <Link to="/blog" className="flex min-h-11 items-center font-display">
            Field Notes
          </Link>
          <Link to="/about" className="flex min-h-11 items-center font-display">
            Dojo
          </Link>
          <Link
            to="/contact"
            className={cn(buttonVariants({ variant: "accent", size: "md" }), "mt-3 w-full")}
          >
            Request a review
          </Link>
          <p className="mt-4 text-xs text-faint">
            {site.city} · {site.serving}
          </p>
        </div>
      ) : null}
    </header>
  );
}

function MegaTrigger({
  label,
  open,
  active,
  onEnter,
}: {
  label: string;
  open: boolean;
  active: boolean;
  onEnter: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onFocus={onEnter}
      className={cn(
        "inline-flex items-center gap-1 px-3 py-2 font-display text-[0.78rem] tracking-wide",
        open || active ? "text-manga-red" : "text-ink hover:text-manga-red",
      )}
    >
      {label}
      <ChevronDown className={cn("size-3.5 transition-transform", open && "rotate-180")} />
    </button>
  );
}

function PlainLink({
  href,
  label,
  pathname,
}: {
  href: "/cases" | "/blog" | "/about";
  label: string;
  pathname: string;
}) {
  const active = pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link
      to={href}
      className={cn(
        "px-3 py-2 font-display text-[0.78rem] tracking-wide",
        active ? "text-manga-red" : "text-ink hover:text-manga-red",
      )}
    >
      {label}
    </Link>
  );
}

function SeoMega() {
  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className="font-display text-xs tracking-[0.18em] text-manga-red">CORE SEO</p>
        <ul className="mt-3 space-y-1">
          {core.map((s) => (
            <li key={s.slug}>
              <Link
                to="/seo-services/$slug"
                params={{ slug: s.slug }}
                className="block border-[2px] border-transparent px-2 py-2 hover:border-ink hover:bg-panel"
              >
                <span className="font-display text-sm">{s.name}</span>
                <span className="mt-0.5 block text-xs text-muted">{s.mangaName}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-5">
        <p className="font-display text-xs tracking-[0.18em] text-manga-red">
          STRATEGY & GROWTH
        </p>
        <ul className="mt-3 grid gap-1 sm:grid-cols-2">
          {strategy.map((s) => (
            <li key={s.slug}>
              <Link
                to="/seo-services/$slug"
                params={{ slug: s.slug }}
                className="block border-[2px] border-transparent px-2 py-2 hover:border-ink hover:bg-panel"
              >
                <span className="font-display text-sm">{s.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="manga-panel-red p-4 lg:col-span-3">
        <p className="font-display text-xs text-manga-red">SPECIAL</p>
        <p className="mt-2 font-display text-xl">SEO Command Centre</p>
        <p className="mt-2 text-sm text-muted">
          Evidence-led operations. Not another dashboard.
        </p>
        <Link
          to="/command-centre"
          className="mt-4 inline-block font-display text-sm text-manga-red"
        >
          Open the centre →
        </Link>
        <Link
          to="/seo-services"
          className="mt-3 block font-display text-sm"
        >
          All SEO services →
        </Link>
      </div>
    </div>
  );
}

function DevMega() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {devGroups.map((g) => (
        <div key={g}>
          <p className="font-display text-xs tracking-[0.18em] text-manga-red">{g.toUpperCase()}</p>
          <ul className="mt-3 space-y-1">
            {development
              .filter((d) => d.group === g)
              .map((d) => (
                <li key={d.slug}>
                  <Link
                    to="/development/$slug"
                    params={{ slug: d.slug }}
                    className="block px-2 py-2 font-display text-sm hover:bg-panel"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
      <div className="manga-panel p-4">
        <p className="font-display text-xl">Built to be crawled.</p>
        <p className="mt-2 text-sm text-muted">
          Framework work with a render path Googlebot and buyers both see.
        </p>
        <Link to="/development" className="mt-3 inline-block font-display text-sm text-manga-red">
          All development →
        </Link>
      </div>
    </div>
  );
}

function IndMega() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {industryGroups.map((g) => (
        <div key={g}>
          <p className="font-display text-xs tracking-[0.18em] text-manga-red">
            {g.toUpperCase()}
          </p>
          <ul className="mt-3 space-y-1">
            {industries
              .filter((i) => i.group === g)
              .map((i) => (
                <li key={i.slug}>
                  <Link
                    to="/industries/$slug"
                    params={{ slug: i.slug }}
                    className="block px-2 py-2 hover:bg-panel"
                  >
                    <span className="font-display text-sm">{i.name}</span>
                    <span className="mt-0.5 block text-xs text-muted">{i.mangaName}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function MobileGroup({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-ink/15 py-1">
      <button
        type="button"
        onClick={onToggle}
        className="flex min-h-11 w-full items-center justify-between font-display"
      >
        {label}
        <ChevronDown className={cn("size-4", open && "rotate-180")} />
      </button>
      {open ? <div className="pb-3 pl-2">{children}</div> : null}
    </div>
  );
}
