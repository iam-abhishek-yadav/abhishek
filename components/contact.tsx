import { contactCopy, personalInfo } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const links = [
  {
    href: `mailto:${personalInfo.email}`,
    label: "Email",
    detail: personalInfo.email,
  },
  {
    href: personalInfo.linkedin,
    label: "LinkedIn",
    detail: "abhisheky97",
    external: true,
  },
  {
    href: personalInfo.github,
    label: "GitHub",
    detail: "iam-abhishek-yadav",
    external: true,
  },
];

export function Contact() {
  return (
    <section id="write" className="scroll-mt-20 py-16 sm:py-24">
      <Reveal>
        <p className="mb-3 font-mono text-[11px] tabular-nums tracking-[0.18em] text-mark">
          05
        </p>
        <h2 className="font-display text-3xl font-medium italic tracking-tight sm:text-5xl">
          {contactCopy.title}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          {contactCopy.body}
        </p>
      </Reveal>

      <div className="mt-12 space-y-0 border-t border-border/70">
        {links.map((link, index) => (
          <Reveal key={link.label} delay={index * 50}>
            <Link
              href={link.href}
              {...("external" in link && link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-baseline justify-between gap-6 border-b border-border/70 py-5"
            >
              <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
                {link.label}
              </span>
              <span className="flex min-w-0 items-center gap-2 font-display text-lg italic tracking-tight sm:text-2xl">
                <span className="truncate">{link.detail}</span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  strokeWidth={1.5}
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
