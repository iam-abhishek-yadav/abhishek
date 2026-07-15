"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { summary, education, skills } from "@/lib/data";
import { GraduationCap } from "lucide-react";

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
    <section id="about" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About"
          title="A bit of context"
          description="Founding engineer energy: ship the platform, own the architecture, talk directly with founders."
        />

        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          <div className="space-y-8">
            <p
              onClick={() => setIsExpanded(!isExpanded)}
              className={`text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9 cursor-pointer sm:cursor-default ${
                !isExpanded ? "line-clamp-6 sm:line-clamp-none" : ""
              }`}
            >
              {summary}
              {!isExpanded && (
                <span className="ml-1 inline-block text-xl font-semibold text-foreground/70 sm:hidden">
                  ...
                </span>
              )}
            </p>

            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Toolkit
              </p>
              <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                {featuredSkills.join("  ·  ")}
              </p>
            </div>
          </div>

          <aside className="space-y-6 border-t border-border/60 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Education
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <GraduationCap
                  className="mt-0.5 h-5 w-5 shrink-0 text-foreground"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-display text-lg font-semibold tracking-tight">
                    {education.degree}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {education.institution}
                  </p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {education.location} · {education.startDate} - {education.endDate}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
