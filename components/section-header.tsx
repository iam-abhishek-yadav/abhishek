import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  index?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  title,
  index,
  description,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 sm:mb-14", className)}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
        <div className="max-w-2xl">
          {index && (
            <p className="mb-3 font-mono text-[11px] tabular-nums tracking-[0.18em] text-mark">
              {index}
            </p>
          )}
          <h2 className="font-display text-3xl font-medium italic tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              {description}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}
