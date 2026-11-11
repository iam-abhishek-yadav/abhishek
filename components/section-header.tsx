import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  accent?: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  index,
  label,
  title,
  accent,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 sm:mb-14", className)}>
      <div className="mb-6 flex items-center gap-3">
        <span className="label tabular-nums text-mark">{index}</span>
        <span className="label text-muted-foreground">{label}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl md:text-5xl md:leading-[1.05]">
        {title}
        {accent && (
          <>
            {" "}
            <span className="font-serif font-normal italic text-muted-foreground">
              {accent}
            </span>
          </>
        )}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground text-pretty sm:text-base sm:leading-8">
          {description}
        </p>
      )}
    </div>
  );
}

export function Chip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-background/60 px-2.5 py-1 font-mono text-[11px] leading-none text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
