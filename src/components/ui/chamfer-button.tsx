import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "dark" | "red" | "outline";

const base =
  "chamfer inline-flex items-center justify-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.05em] transition-opacity hover:opacity-85";

const variants: Record<Variant, string> = {
  dark: "bg-ink text-paper",
  red: "bg-red text-ink",
  outline: "bg-transparent text-paper ring-1 ring-inset ring-line",
};

interface ChamferLinkProps extends ComponentProps<"a"> {
  variant?: Variant;
  children: ReactNode;
}

export function ChamferLink({ variant = "dark", className, children, ...props }: ChamferLinkProps) {
  return (
    <a className={cn(base, "px-6 py-3.5", variants[variant], className)} {...props}>
      {children}
    </a>
  );
}

interface ChamferButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
  children: ReactNode;
}

export function ChamferButton({ variant = "red", className, children, ...props }: ChamferButtonProps) {
  return (
    <button className={cn(base, "px-6 py-3.5", variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
