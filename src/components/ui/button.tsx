import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-display text-[0.8rem] tracking-wide transition-transform duration-150 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-manga-red active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
  {
    variants: {
      variant: {
        primary:
          "border-[3px] border-ink bg-ink text-paper shadow-[4px_4px_0_0_var(--color-manga-red)] hover:bg-ink-soft",
        accent:
          "border-[3px] border-ink bg-manga-red text-paper shadow-[4px_4px_0_0_var(--color-ink)] hover:bg-manga-red-deep",
        outline:
          "border-[3px] border-ink bg-paper text-ink shadow-[4px_4px_0_0_var(--color-manga-cyan)] hover:bg-paper-2",
        ghost: "text-ink hover:bg-ink/5",
        invert:
          "border-[3px] border-paper bg-paper text-ink shadow-[4px_4px_0_0_var(--color-manga-red)] hover:bg-paper-2",
      },
      size: {
        sm: "h-10 px-3.5",
        md: "h-11 px-5",
        lg: "h-12 px-6 text-[0.9rem]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>
>(({ className, variant, size, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(buttonVariants({ variant, size }), className)}
    {...props}
  />
));
Button.displayName = "Button";

export { buttonVariants };
