import type { ReactNode } from "react";

export function Chapter({
  n,
  jp,
  children,
}: {
  n: string;
  jp: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="chapter-stamp">Ch. {n}</span>
      <span className="text-xs tracking-[0.2em] text-manga-red">{jp}</span>
      <span className="font-display text-sm">{children}</span>
    </div>
  );
}
