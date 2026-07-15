"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_COUNT = 3;

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="work" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Selected work"
          title="Things I've built"
          description="Systems I've designed and shipped end-to-end - from ingestion and browsers to agents and alerts."
        />

        <div className="divide-y divide-border/60 border-y border-border/60">
          {visibleProjects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group grid gap-6 py-10 transition-colors sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-10 sm:py-12"
            >
              <span className="font-mono text-sm text-muted-foreground/70 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-foreground sm:text-3xl md:text-4xl">
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
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="rounded-md border-border/60 bg-transparent px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 5 && (
                    <Badge
                      variant="outline"
                      className="rounded-md border-border/40 bg-transparent px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground/70"
                    >
                      +{project.technologies.length - 5}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 self-center text-sm text-muted-foreground transition-colors group-hover:text-foreground sm:justify-self-end">
                <span className="hidden sm:inline">Case study</span>
                <ArrowUpRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </div>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-full border-border/80 px-6 hover:bg-foreground hover:text-background"
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
        )}
      </div>
    </section>
  );
}
