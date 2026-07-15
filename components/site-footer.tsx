import { personalInfo } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/40 px-4 py-6 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
