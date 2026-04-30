"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { summary } from "@/lib/data";
import { User } from "lucide-react";

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-baseline gap-4">
              <div className="relative shrink-0">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-muted/40 shadow-subtle">
                  <User className="h-5 w-5 text-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">About</h2>
                <div className="mt-2 h-0.5 w-20 rounded-full bg-border/70" />
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Who I Am</CardTitle>
          </CardHeader>
          <CardContent>
            <p
              onClick={() => setIsExpanded(!isExpanded)}
              className={`leading-8 text-base text-muted-foreground sm:text-lg cursor-pointer sm:cursor-default ${
                !isExpanded ? "line-clamp-5 sm:line-clamp-none" : ""
              }`}
            >
              {summary}
              {!isExpanded && (
                <span className="ml-1 inline-block text-xl font-bold text-foreground/70 transition-colors hover:text-foreground sm:hidden">
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

