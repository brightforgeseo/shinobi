import type { ReactNode } from "react";
import { Chapter } from "./Chapter";

export function PageHero({
  chapter,
  jp,
  kicker,
  title,
  red,
  children,
}: {
  chapter: string;
  jp: string;
  kicker?: string;
  title: ReactNode;
  red?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b-[3px] border-ink">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-18deg, transparent, transparent 14px, rgba(12,12,16,0.55) 14px, rgba(12,12,16,0.55) 15px)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <Chapter n={chapter} jp={jp}>
          {kicker}
        </Chapter>
        <h1 className="mt-5 font-display text-4xl sm:text-6xl">
          {title}
          {red ? <span className="block text-manga-red">{red}</span> : null}
        </h1>
        {children ? (
          <div className="mt-5 max-w-2xl text-lg text-muted">{children}</div>
        ) : null}
      </div>
    </section>
  );
}
