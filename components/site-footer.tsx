import { personalInfo } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="mt-auto px-4 py-10 sm:px-6 sm:py-12">
      <div className="mx-auto flex max-w-6xl items-baseline justify-between gap-4">
        <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/60">
          {personalInfo.name}
        </p>
        <p className="font-mono text-[10px] tabular-nums tracking-[0.2em] text-muted-foreground/60">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
