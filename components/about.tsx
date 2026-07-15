"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { summary, education, skills } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredSkills = [
  ...skills.languages.slice(0, 3),
  ...skills.frontend.slice(0, 2),
  ...skills.backend.slice(0, 2),
  ...skills.database.slice(0, 3),
  ...skills.ai.slice(0, 3),
  ...skills.testing.slice(0, 2),
  ...skills.devops.slice(0, 3),
];

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="px-4 py-14 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About"
          title="A bit of context"
          description="Founding engineer energy: ship the platform, own the architecture, talk directly with founders."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <p
                className={`text-sm leading-7 text-muted-foreground sm:text-lg sm:leading-9 ${
                  !isExpanded ? "line-clamp-5 sm:line-clamp-none" : ""
                }`}
              >
                {summary}
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded((v) => !v)}
                className="mt-2 h-9 px-0 text-sm text-foreground underline-offset-4 hover:bg-transparent hover:underline sm:hidden"
              >
                {isExpanded ? "Show less" : "Read more"}
              </Button>
            </div>

            <div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:mb-4 sm:text-[11px]">
                Toolkit
              </p>
              <p className="text-sm leading-7 text-muted-foreground break-words sm:text-base sm:leading-8">
                {featuredSkills.join(" · ")}
              </p>
            </div>
          </div>

          <aside className="space-y-4 border-t border-border/60 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-1 sm:space-y-6 sm:pt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[11px]">
              Education
            </p>
            <div className="flex items-start gap-3">
              <GraduationCap
                className="mt-0.5 h-5 w-5 shrink-0 text-foreground"
                strokeWidth={1.5}
              />
              <div className="min-w-0">
                <p className="font-display text-base font-semibold tracking-tight sm:text-lg">
                  {education.degree}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {education.institution}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                  {education.location} · {education.startDate} - {education.endDate}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
