import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  index?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  title,
  index,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 sm:mb-14", className)}>
      <div className="flex items-end justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {index && (
              <span className="mr-3 font-mono text-sm font-normal tracking-[0.2em] text-muted-foreground sm:text-base">
                {index}
              </span>
            )}
            {title}
          </h2>
          <div className="mt-4 h-px w-full max-w-xs bg-gradient-to-r from-foreground/40 via-foreground/15 to-transparent" />
        </div>
        {action && <div className="shrink-0 pb-1">{action}</div>}
      </div>
    </div>
  );
}
