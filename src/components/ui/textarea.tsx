import { type TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-32 w-full border-[3px] border-ink bg-panel px-3.5 py-3 text-sm text-ink placeholder:text-faint",
      "shadow-[3px_3px_0_0_var(--color-ink)]",
      "focus-visible:outline-none focus-visible:shadow-[3px_3px_0_0_var(--color-manga-red)]",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
