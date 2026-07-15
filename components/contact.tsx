import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const links = [
  {
    href: `mailto:${personalInfo.email}`,
    label: "Email",
    detail: personalInfo.email,
    icon: Mail,
  },
  {
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    label: "Phone",
    detail: personalInfo.phone,
    icon: Phone,
  },
  {
    href: personalInfo.linkedin,
    label: "LinkedIn",
    detail: "abhisheky97",
    icon: Linkedin,
    external: true,
  },
  {
    href: personalInfo.github,
    label: "GitHub",
    detail: "iam-abhishek-yadav",
    icon: Github,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl sm:mb-16">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Contact
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s build something
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Open to thoughtful conversations - product engineering, founding roles,
            or interesting AI infrastructure problems.
          </p>
        </div>

        <div className="grid gap-0 divide-y divide-border/60 border-y border-border/60 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {links.map(({ href, label, detail, icon: Icon, external }) => (
            <Link
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center justify-between gap-4 px-1 py-6 transition-colors hover:bg-foreground/[0.03] sm:px-6"
            >
              <div className="flex items-center gap-4">
                <Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="mt-0.5 font-medium text-foreground">{detail}</p>
                </div>
              </div>
              <ArrowUpRight
                className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                strokeWidth={1.5}
              />
            </Link>
          ))}
        </div>

        <p className="mt-14 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </section>
  );
}
