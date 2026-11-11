import { Chip, SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { education, experience } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-28">
      <Reveal>
        <SectionHeader
          index="03"
          label="Experience"
          title="Where I've"
          accent="shipped."
          description="Two jobs: a founding engineer at a YC startup, and before that an engineer on regulated enterprise software for banks. Both required systems that stay reliable under load."
        />
      </Reveal>

      <ol className="relative space-y-4">
        {experience.map((exp, i) => (
          <Reveal key={exp.id} as="li" delay={i * 80}>
            <article className="card-surface overflow-hidden rounded-2xl border border-border">
              <div className="grid md:grid-cols-[15rem_1fr]">
                <header className="border-b border-border p-6 sm:p-7 md:border-r md:border-b-0">
                  <p className="label tabular-nums text-mark">
                    {exp.startDate} — {exp.endDate}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    {exp.company}
                  </h3>
                  {exp.companyNote && (
                    <p className="mt-1 text-[13px] text-muted-foreground">
                      {exp.companyNote}
                    </p>
                  )}
                  <p className="mt-4 text-[13px] text-muted-foreground">{exp.location}</p>
                </header>

                <div className="p-6 sm:p-7">
                  <p className="text-[15px] font-medium tracking-tight sm:text-base">
                    {exp.position}
                  </p>
                  <p className="mt-3 max-w-3xl text-[15px] leading-7 text-muted-foreground">
                    {exp.summary}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-[14.5px] leading-7">
                        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-mark" />
                        <span className="text-foreground/85">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-col gap-5 border-t border-border pt-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.map((s) => (
                        <Chip key={s}>{s}</Chip>
                      ))}
                    </div>
                    <Link
                      href={`/experience/${exp.id}`}
                      className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-foreground"
                    >
                      Full story
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        strokeWidth={1.75}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal as="li" delay={160}>
          <div className="flex flex-col gap-3 rounded-2xl border border-dashed border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-background text-muted-foreground">
                <GraduationCap className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[15px] font-medium">{education.degree}</p>
                <p className="text-[13px] text-muted-foreground">
                  {education.institution}, {education.location}
                </p>
              </div>
            </div>
            <p className="label tabular-nums text-muted-foreground">
              {education.startDate} — {education.endDate}
            </p>
          </div>
        </Reveal>
      </ol>
    </section>
  );
}
