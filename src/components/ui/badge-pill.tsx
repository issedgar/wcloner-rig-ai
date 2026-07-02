import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgePillProps {
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function BadgePill({ icon, children, className }: BadgePillProps) {
  return (
    <span className={cn("badge chamfer", className)}>
      {icon}
      {children}
    </span>
  );
}
