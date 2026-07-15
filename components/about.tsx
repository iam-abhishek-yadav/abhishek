"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { summary } from "@/lib/data";

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="About" index="01" />
        <Card className="overflow-hidden border-border/70 bg-card/60">
          <CardContent className="pt-2">
            <p
              onClick={() => setIsExpanded(!isExpanded)}
              className={`text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9 cursor-pointer sm:cursor-default ${
                !isExpanded ? "line-clamp-5 sm:line-clamp-none" : ""
              }`}
            >
              {summary}
              {!isExpanded && (
                <span className="ml-1 inline-block text-xl font-semibold text-foreground/70 transition-colors hover:text-foreground sm:hidden">
                  ...
                </span>
              )}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
