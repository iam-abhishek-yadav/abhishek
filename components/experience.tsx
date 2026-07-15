import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { experience } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Experience" index="02" />
        <div className="grid gap-5 md:grid-cols-2">
          {experience.map((exp) => (
            <Card
              key={exp.id}
              className="group border-border/70 bg-card/60 hover:border-foreground/25"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1 space-y-2">
                    <CardTitle className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                      {exp.position}
                    </CardTitle>
                    <p className="text-sm font-medium text-muted-foreground sm:text-base">
                      {exp.company}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                    className="h-9 w-9 shrink-0 rounded-full opacity-60 transition-all hover:opacity-100 group-hover:bg-muted"
                  >
                    <Link href={`/experience/${exp.id}`}>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  <span>{exp.location}</span>
                  <span className="text-border">/</span>
                  <span>
                    {exp.startDate} – {exp.endDate}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-3">
                  {exp.description.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                      <span className="line-clamp-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  size="default"
                  asChild
                  className="w-full rounded-full border-border/80 group/btn hover:bg-foreground hover:text-background"
                >
                  <Link href={`/experience/${exp.id}`}>
                    View details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
