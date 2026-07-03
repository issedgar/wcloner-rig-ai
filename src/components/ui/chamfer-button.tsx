import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "dark" | "red" | "outline";

const base =
  "chamfer inline-flex items-center justify-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.05em] transition-all duration-200 hover:opacity-85";

const variants: Record<Variant, string> = {
  dark: "bg-ink text-paper shadow-[inset_0_1px_0_oklch(1_0_0/8%)] hover:shadow-[inset_0_1px_0_oklch(1_0_0/8%),0_0_20px_rgba(0,161,255,0.15)]",
  red: "bg-red text-ink shadow-[inset_0_1px_0_oklch(1_0_0/12%)] hover:shadow-[inset_0_1px_0_oklch(1_0_0/12%),0_0_20px_rgba(0,161,255,0.2)]",
  outline: "bg-transparent text-paper ring-1 ring-inset ring-line shadow-[inset_0_1px_0_oklch(1_0_0/5%)] hover:shadow-[inset_0_1px_0_oklch(1_0_0/5%),0_0_16px_rgba(0,161,255,0.1)]",
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
