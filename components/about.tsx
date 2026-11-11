import { Chip, SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { pillars } from "@/lib/data";
import { Bot, Database, LayoutPanelTop } from "lucide-react";

const icons = [Bot, Database, LayoutPanelTop];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <Reveal>
        <SectionHeader
          index="01"
          label="About"
          title="Product and infrastructure,"
          accent="end to end."
          description="I do my best work where the product and the infrastructure meet: an AI feature only works if there's a reliable pipeline behind it, and a pipeline only matters if people use what it powers. These are the three areas I work across."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={pillar.title} delay={i * 80} className="h-full">
              <article className="card-surface card-hover flex h-full flex-col rounded-2xl border border-border p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-mark">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </span>
                  <span className="label text-muted-foreground">{pillar.kicker}</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight">
                  {pillar.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-7 text-muted-foreground">
                  {pillar.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {pillar.tools.map((tool) => (
                    <Chip key={tool}>{tool}</Chip>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
