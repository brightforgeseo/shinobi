import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-11 w-full border-[3px] border-ink bg-panel px-3.5 text-sm text-ink placeholder:text-faint",
      "shadow-[3px_3px_0_0_var(--color-ink)]",
      "focus-visible:outline-none focus-visible:shadow-[3px_3px_0_0_var(--color-manga-red)]",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";
