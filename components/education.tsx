import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Education" index="05" />
        <Card className="border-border/70 bg-card/60">
          <CardHeader>
            <div className="space-y-3">
              <CardTitle className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight sm:text-xl">
                <GraduationCap className="h-5 w-5 shrink-0 text-foreground" strokeWidth={1.5} />
                <span>{education.degree}</span>
              </CardTitle>
              <p className="text-base text-muted-foreground sm:text-lg">
                {education.institution}
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground sm:flex-row sm:items-center sm:gap-3">
              <span>{education.location}</span>
              <span className="hidden text-border sm:inline">/</span>
              <span>
                {education.startDate} – {education.endDate}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
