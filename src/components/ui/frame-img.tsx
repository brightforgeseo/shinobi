import { cn } from "@/lib/utils";

/** Background-image frame so a failed file request never shows a broken icon. */
export function FrameImg({
  src,
  alt = "",
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div
      role={alt ? "img" : "presentation"}
      aria-label={alt || undefined}
      className={cn("bg-paper-2 bg-cover bg-center", className)}
      style={{ backgroundImage: `url("${src}")` }}
    />
  );
}
