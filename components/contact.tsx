import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-6 sm:gap-8">
          <Link
            href={`mailto:${personalInfo.email}`}
            className="group flex h-12 w-12 items-center justify-center rounded-lg border border-border/60 bg-muted/40 transition-all hover:bg-muted/60 hover:shadow-soft hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 text-muted-foreground transition-all group-hover:scale-110 group-hover:text-foreground" />
          </Link>
          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-lg border border-border/60 bg-muted/40 transition-all hover:bg-muted/60 hover:shadow-soft hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground transition-all group-hover:scale-110 group-hover:text-foreground" />
          </Link>
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-lg border border-border/60 bg-muted/40 transition-all hover:bg-muted/60 hover:shadow-soft hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-muted-foreground transition-all group-hover:scale-110 group-hover:text-foreground" />
          </Link>
        </div>
      </div>
    </section>
  );
}
