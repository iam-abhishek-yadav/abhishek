"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_COUNT = 3;

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="work" className="px-4 py-14 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader
            eyebrow="Selected work"
            title="Things I've built"
            description="Systems I've designed and shipped end-to-end - from ingestion and browsers to agents and alerts."
          />
        </Reveal>

        <div className="divide-y divide-border/60 border-y border-border/60">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index, 4) * 70}>
              <Link
                href={`/projects/${project.id}`}
                className="group grid grid-cols-[auto_1fr_auto] gap-x-3 gap-y-3 py-7 transition-colors sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-10 sm:py-12"
              >
                <span className="pt-1 font-mono text-xs text-muted-foreground/70 tabular-nums sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <h3 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-foreground sm:text-3xl md:text-4xl">
                      <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
                        {project.name}
                      </span>
                    </h3>
                    {"status" in project && project.status && (
                      <Badge
                        variant="outline"
                        className="rounded-full border-foreground/30 bg-foreground/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-foreground"
                      >
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:max-w-2xl sm:text-lg">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-0.5 sm:gap-2 sm:pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-md border-border/60 bg-transparent px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-muted-foreground sm:px-2.5 sm:py-1 sm:text-[10px]"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge
                        variant="outline"
                        className="rounded-md border-border/40 bg-transparent px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-muted-foreground/70 sm:px-2.5 sm:py-1 sm:text-[10px]"
                      >
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex items-start justify-end self-start pt-0.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground sm:items-center sm:self-center sm:pt-0">
                  <span className="mr-1 hidden sm:inline">Case study</span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {hasMore && (
          <Reveal delay={120}>
            <div className="mt-6 flex justify-center sm:mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAll((prev) => !prev)}
                className="h-11 w-full max-w-xs rounded-full border-border/80 px-6 hover:bg-foreground hover:text-background sm:w-auto"
              >
                {showAll ? (
                  <>
                    Show less
                    <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show more
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
