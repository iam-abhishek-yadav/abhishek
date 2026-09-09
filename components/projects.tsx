import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-20 py-16 sm:py-24">
      <Reveal>
        <SectionHeader
          index="03"
          title="The systems"
          description="One platform, exploded. Ingest, record, judge, alert — and a small tool I am making for myself."
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-px bg-border/70 sm:grid-cols-2">
        {projects.map((project, index) => {
          const featured = "featured" in project && project.featured;
          const status = "status" in project ? project.status : undefined;

          return (
            <Reveal
              key={project.id}
              delay={Math.min(index, 4) * 60}
              className={cn(featured && "sm:col-span-2")}
            >
              <Link
                href={`/projects/${project.id}`}
                className={cn(
                  "group flex h-full flex-col justify-between bg-background p-6 transition-colors hover:bg-foreground/3 sm:p-8",
                  featured ? "min-h-64 sm:min-h-72" : "min-h-56"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[11px] tracking-[0.18em] text-mark">
                    {project.label}
                  </p>
                  <ArrowUpRight
                    className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="mt-10 space-y-3 sm:mt-14">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <h3 className="font-display text-2xl font-medium italic tracking-tight sm:text-3xl">
                      {project.name}
                    </h3>
                    {status && (
                      <Badge
                        variant="outline"
                        className="rounded-none border-mark/40 px-2 py-0 font-mono text-[10px] uppercase tracking-wide text-mark"
                      >
                        {status}
                      </Badge>
                    )}
                  </div>
                  <p
                    className={cn(
                      "text-sm leading-7 text-muted-foreground sm:text-[15px] sm:leading-8",
                      featured ? "max-w-xl" : "max-w-md"
                    )}
                  >
                    {project.tagline}
                  </p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
