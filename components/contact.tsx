import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import Link from "next/link";

const links = [
  {
    href: `mailto:${personalInfo.email}`,
    label: "Email",
    icon: Mail,
  },
  {
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    label: "Phone",
    icon: Phone,
  },
  {
    href: personalInfo.linkedin,
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    href: personalInfo.github,
    label: "GitHub",
    icon: Github,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            <span className="mr-3 font-mono text-sm font-normal tracking-[0.2em] text-muted-foreground sm:text-base">
              06
            </span>
            Contact
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-foreground/40 to-transparent" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {links.map(({ href, label, icon: Icon, external }) => (
            <Link
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group inline-flex items-center gap-2.5 rounded-full border border-border/70 bg-card/50 px-5 py-3 text-sm text-muted-foreground transition-all hover:border-foreground/40 hover:bg-foreground hover:text-background"
              aria-label={label}
            >
              <Icon className="h-4 w-4 transition-transform group-hover:scale-110" strokeWidth={1.5} />
              <span className="font-medium">{label}</span>
            </Link>
          ))}
        </div>
        <p className="mt-12 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </section>
  );
}
