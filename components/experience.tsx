import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { education, experience, pathIntro } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const school = {
  id: "school",
  city: education.city,
  startDate: education.startDate,
  endDate: education.endDate,
  position: "Computer Science",
  company: education.institution,
  summary: "Where the path starts.",
  href: null as string | null,
};

export function Experience() {
  const path = [
    school,
    ...[...experience].reverse().map((exp) => ({
      id: exp.id,
      city: exp.city,
      startDate: exp.startDate,
      endDate: exp.endDate,
      position: exp.position,
      company: exp.company,
      summary: exp.summary,
      href: `/experience/${exp.id}` as string | null,
    })),
  ];

  return (
    <section id="path" className="scroll-mt-20 py-16 sm:py-24">
      <Reveal>
        <SectionHeader index="04" title="The path" description={pathIntro} />
      </Reveal>

      <ol className="relative ml-1 space-y-0 border-l border-border/70 sm:ml-2">
        {path.map((stop, index) => {
          const inner = (
            <>
              <span className="absolute -left-[5px] top-8 h-2.5 w-2.5 bg-mark" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-2xl font-medium italic tracking-tight sm:text-3xl">
                  {stop.city}
                </h3>
                <p className="font-mono text-[11px] tabular-nums tracking-wide text-muted-foreground">
                  {stop.startDate}–{stop.endDate}
                </p>
              </div>
              <p className="mt-2 text-sm text-foreground sm:text-base">
                {stop.position}
                <span className="mx-2 text-border">·</span>
                <span className="text-muted-foreground">{stop.company}</span>
              </p>
              <p className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground">
                {stop.summary}
              </p>
              {stop.href && (
                <p className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                  Read
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </p>
              )}
            </>
          );

          return (
            <Reveal key={stop.id} delay={index * 70}>
              <li className="relative pl-8 sm:pl-12">
                {stop.href ? (
                  <Link
                    href={stop.href}
                    className="group block py-8 transition-colors sm:py-10"
                  >
                    {inner}
                  </Link>
                ) : (
                  <div className="py-8 sm:py-10">{inner}</div>
                )}
              </li>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
