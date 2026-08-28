import { cn } from "@/lib/utils";

/** Aspect-ratio frame reserves layout while native artwork loads near the viewport. */
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
    <div className={cn("relative overflow-hidden bg-paper-2", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 size-full object-cover object-center"
      />
    </div>
  );
}
