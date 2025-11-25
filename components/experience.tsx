import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-baseline gap-4">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-lg bg-primary/10 blur-sm" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Experience</h2>
              <div className="mt-2 h-0.5 w-20 bg-gradient-to-r from-primary to-transparent rounded-full" />
            </div>
          </div>
        </div>
        <div className="relative space-y-8 sm:space-y-10">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />
          
          {experience.map((exp, index) => (
            <div key={index} className="relative flex gap-6 sm:gap-8">
              {/* Timeline dot */}
              {/* <div className="relative z-10 hidden sm:block">
                <div className="flex h-6 w-6 items-center justify-center">
                  <div className="h-4 w-4 rounded-full border-2 border-background bg-primary shadow-subtle" />
                </div>
              </div> */}
              
              <Card className="flex-1">
                <CardHeader>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg sm:text-xl">{exp.position}</CardTitle>
                      <p className="text-base font-medium text-foreground sm:text-lg">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-1 text-right text-sm text-muted-foreground">
                      <p className="font-medium">{exp.location}</p>
                      <p className="text-xs sm:text-sm">
                        {exp.startDate} – {exp.endDate}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

