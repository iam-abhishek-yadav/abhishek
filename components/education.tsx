import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-baseline gap-4">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-lg bg-rose-500/20 blur-sm" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500/30 to-rose-400/10 border border-rose-500/30">
                  <GraduationCap className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Education</h2>
                <div className="mt-2 h-0.5 w-20 bg-gradient-to-r from-rose-500 to-transparent rounded-full" />
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <div className="space-y-2">
              <CardTitle className="text-lg sm:text-xl">{education.degree}</CardTitle>
              <p className="text-base font-medium text-foreground sm:text-lg">{education.institution}</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:text-base">
              <div className="flex items-center gap-2">
                <span className="font-medium">{education.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">
                  {education.startDate} – {education.endDate}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

