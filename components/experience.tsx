import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="px-4 py-14 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="Experience"
            title="Where I've worked"
            description="Roles where I owned product-critical systems - details live on each case page."
          />
        </Reveal>

        <div className="divide-y divide-border/60 border-y border-border/60">
          {experience.map((exp, index) => (
            <Reveal key={exp.id} delay={index * 80}>
              <Link
                href={`/experience/${exp.id}`}
                className="group flex items-start justify-between gap-3 py-6 transition-colors sm:grid sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-8 sm:py-10"
              >
                <div className="min-w-0 flex-1 space-y-2 sm:contents">
                  <p className="font-mono text-xs tabular-nums text-muted-foreground sm:text-sm">
                    {exp.startDate} - {exp.endDate}
                  </p>

                  <div className="min-w-0 space-y-1">
                    <h3 className="font-display text-lg font-semibold tracking-tight sm:text-2xl">
                      {exp.position}
                    </h3>
                    <p className="text-sm text-muted-foreground sm:text-base">
                      <span className="break-words">{exp.company}</span>
                      <span className="mx-2 text-border">·</span>
                      {exp.location}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2 pt-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground sm:justify-self-end sm:pt-0">
                  <span className="hidden sm:inline">Details</span>
                  <ArrowUpRight
                    className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
