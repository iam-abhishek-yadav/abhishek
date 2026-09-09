import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { education, fieldNotes, toolkit } from "@/lib/data";

export function About() {
  return (
    <section id="notes" className="scroll-mt-20 py-16 sm:py-24">
      <Reveal>
        <SectionHeader
          index="02"
          title="A few notes"
          description="Not a manifesto. Just the habits that keep showing up in the work."
        />
      </Reveal>

      <div className="divide-y divide-border/70 border-y border-border/70">
        {fieldNotes.map((note, index) => (
          <Reveal key={note.title} delay={index * 50}>
            <article className="grid gap-3 py-8 sm:grid-cols-[4rem_minmax(0,14rem)_1fr] sm:gap-8 sm:py-10">
              <p className="font-mono text-[11px] tabular-nums text-mark">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-xl font-medium italic leading-snug sm:text-[1.35rem]">
                {note.title}
              </h3>
              <p className="text-sm leading-7 text-muted-foreground sm:text-[15px] sm:leading-8">
                {note.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={80}>
        <div className="mt-12 grid gap-8 border-t border-border/70 pt-10 sm:grid-cols-[4rem_1fr] sm:gap-8">
          <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
            Reach
          </p>
          <div className="space-y-8">
            <p className="text-sm leading-8 text-muted-foreground sm:text-[15px]">
              {toolkit.join("  ·  ")}
            </p>
            <p className="text-sm leading-7 text-muted-foreground">
              <span className="font-display italic text-foreground">
                {education.institution}
              </span>
              <span className="mx-2 text-border">—</span>
              {education.city}, {education.startDate}–{education.endDate}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
