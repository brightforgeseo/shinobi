import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
  href?: string;
};

/** Static panel — 3D tilt was wiping the live preview compositor. */
export function TiltCard({ children, className, href }: Props) {
  const inner = <div className={cn("relative h-full", className)}>{children}</div>;
  if (href) {
    return (
      <a href={href} className="block h-full">
        {inner}
      </a>
    );
  }
  return inner;
}
