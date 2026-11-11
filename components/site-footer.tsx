import { personalInfo } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/70 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="label text-muted-foreground/80">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="label text-muted-foreground/80 transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="label text-muted-foreground/80 transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="label text-muted-foreground/80 transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
