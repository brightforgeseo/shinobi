import type { ReactNode } from "react";

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-manga-red">
      {children}
    </p>
  );
}

export function RuleList({
  items,
  dark = false,
}: {
  items: { name: string; text: string; n?: string }[];
  dark?: boolean;
}) {
  return (
    <ol
      className={
        dark
          ? "divide-y divide-paper/25 border-y border-paper/25"
          : "divide-y-[2px] divide-ink border-y-[2px] border-ink"
      }
    >
      {items.map((item, i) => (
        <li
          key={item.name}
          className="flex flex-col gap-2 py-5 md:flex-row md:items-start md:gap-10"
        >
          <div className="min-w-0 md:w-64 md:shrink-0">
            <p className="font-display text-xs text-manga-red">
              {item.n ?? String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 font-sans text-[1.05rem] font-semibold leading-snug tracking-tight break-normal">
              {item.name}
            </h3>
          </div>
          <p
            className={`min-w-0 flex-1 text-sm leading-relaxed ${dark ? "text-paper/70" : "text-muted"}`}
          >
            {item.text}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function Spine({
  items,
}: {
  items: { name: string; text: string }[];
}) {
  return (
    <ol className="relative border-l-[3px] border-manga-red pl-6">
      {items.map((item, i) => (
        <li key={item.name} className="relative pb-8 last:pb-0">
          <span className="absolute -left-[31px] top-1.5 size-3 bg-manga-red" />
          <p className="font-display text-xs text-manga-red">
            {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight">{item.name}</h3>
          <p className="mt-1 max-w-prose text-sm leading-relaxed text-muted">
            {item.text}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function Note({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="border-l-[4px] border-manga-red bg-paper-2/70 px-5 py-4">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>
    </aside>
  );
}
