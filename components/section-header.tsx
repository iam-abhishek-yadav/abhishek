import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  title,
  eyebrow,
  description,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-8 sm:mb-16", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:mb-3 sm:text-[11px] sm:tracking-[0.28em]">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
              {description}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}
