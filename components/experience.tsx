import { SectionHeader } from "@/components/section-header";
import { experience } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've worked"
          description="Roles where I owned product-critical systems - details live on each case page."
        />

        <div className="divide-y divide-border/60 border-y border-border/60">
          {experience.map((exp) => (
            <Link
              key={exp.id}
              href={`/experience/${exp.id}`}
              className="group grid gap-4 py-8 transition-colors sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:gap-8 sm:py-10"
            >
              <p className="font-mono text-sm tabular-nums text-muted-foreground">
                {exp.startDate} - {exp.endDate}
              </p>

              <div className="min-w-0 space-y-1">
                <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {exp.position}
                </h3>
                <p className="text-sm text-muted-foreground sm:text-base">
                  {exp.company}
                  <span className="mx-2 text-border">·</span>
                  {exp.location}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground sm:justify-self-end">
                <span className="hidden sm:inline">Details</span>
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
