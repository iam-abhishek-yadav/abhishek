import { contact, personalInfo } from "@/lib/data";
import { Reveal } from "@/components/reveal";
import { CopyEmail } from "@/components/copy-email";
import { ArrowUpRight, MapPin } from "lucide-react";

const socials = [
  { label: "GitHub", handle: personalInfo.githubHandle, href: personalInfo.github },
  { label: "LinkedIn", handle: personalInfo.linkedinHandle, href: personalInfo.linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border card-surface">
          <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_70%_at_50%_100%,black,transparent)]" />
          <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-mark/15 blur-3xl" />

          <div className="relative px-6 py-14 text-center sm:px-12 sm:py-20">
            <p className="label inline-flex items-center gap-3 text-muted-foreground">
              <span className="tabular-nums text-mark">06</span>
              Contact
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl sm:leading-[1.02]">
              {contact.title}{" "}
              <span className="font-serif font-normal italic text-mark">
                {contact.accent}
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-muted-foreground text-pretty sm:text-base sm:leading-8">
              {contact.body}
            </p>

            <div className="mt-10 flex justify-center">
              <CopyEmail email={personalInfo.email} />
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm transition-colors hover:border-mark/50"
                >
                  <span className="font-medium">{s.label}</span>
                  <span className="text-muted-foreground">/{s.handle}</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                  />
                </a>
              ))}
              <span className="inline-flex items-center gap-1.5 px-2 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />
                {personalInfo.location}
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
