"use client";

import { type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  front: ReactNode;
  back: ReactNode;
  className?: string;
};

export function FlipCard({ front, back, className }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => setFlipped((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((v) => !v);
        }
      }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      aria-pressed={flipped}
      className={cn(
        "group h-full w-full cursor-pointer text-left [perspective:1200px]",
        className,
      )}
    >
      <span
        className={cn(
          "relative block h-full w-full transform-gpu transition-transform duration-500 [transform-style:preserve-3d]",
          flipped && "[transform:rotateY(180deg)]",
        )}
      >
        <span className="absolute inset-0 [backface-visibility:hidden]">
          {front}
        </span>
        <span className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </span>
      </span>
    </div>
  );
}
