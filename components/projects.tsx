import { Chip, SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-20 py-20 sm:py-28">
      <Reveal>
        <SectionHeader
          index="04"
          label="Selected work"
          title="Systems I designed"
          accent="and shipped."
          description="Four parts of the Decipher platform, each its own hard problem, plus a SaaS I'm building on the side. Open any card for the problem, the approach, and the stack."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.id}
            delay={Math.min(i, 3) * 70}
            className={cn("h-full", project.featured && "md:col-span-2")}
          >
            <Link
              href={`/projects/${project.id}`}
              className={cn(
                "group card-surface card-hover relative flex h-full flex-col overflow-hidden rounded-2xl border border-border p-6 sm:p-8",
                project.featured && "md:min-h-[22rem]"
              )}
            >
              {project.featured && (
                <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-mark/15 blur-3xl" />
              )}

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="label text-mark">{project.kicker}</span>
                  {project.status && (
                    <span className="rounded-full border border-mark/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-mark">
                      {project.status}
                    </span>
                  )}
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-background transition-colors group-hover:border-mark/60 group-hover:bg-mark group-hover:text-mark-foreground">
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
                    strokeWidth={1.75}
                  />
                </span>
              </div>

              <div
                className={cn(
                  "relative mt-10 flex-1",
                  project.featured && "md:grid md:grid-cols-[1.2fr_1fr] md:gap-12"
                )}
              >
                <div>
                  <h3
                    className={cn(
                      "font-semibold tracking-tight",
                      project.featured ? "text-3xl sm:text-4xl" : "text-2xl"
                    )}
                  >
                    {project.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-7 text-muted-foreground">
                    {project.oneLiner}
                  </p>
                </div>

                <dl
                  className={cn(
                    "mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border",
                    project.featured && "md:mt-0 md:grid-cols-1 md:self-end"
                  )}
                >
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className={cn(
                        "bg-background/80 p-3",
                        project.featured && "md:flex md:items-baseline md:justify-between md:gap-4 md:px-4"
                      )}
                    >
                      <dt className="sr-only">{m.label}</dt>
                      <dd className="contents">
                        <span className="block text-sm font-semibold tracking-tight sm:text-[15px]">
                          {m.value}
                        </span>
                        <span className="mt-0.5 block text-[11.5px] leading-4 text-muted-foreground">
                          {m.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-1.5">
                {project.stack.slice(0, project.featured ? 8 : 5).map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
                {project.stack.length > (project.featured ? 8 : 5) && (
                  <Chip className="border-dashed">
                    +{project.stack.length - (project.featured ? 8 : 5)}
                  </Chip>
                )}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
