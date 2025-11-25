import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { experience } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, ExternalLink, Briefcase } from "lucide-react";

export function Experience() {
  const featuredExperiences = experience.slice(0, 2);

  return (
    <section id="experience" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-baseline justify-between gap-4">
            <div className="flex items-baseline gap-4 flex-1">
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
            <Button variant="outline" asChild className="shrink-0">
              <Link href="/experience">
                View All Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredExperiences.map((exp) => (
            <Card
              key={exp.id}
              className="group transition-all duration-300 hover:shadow-strong hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-lg sm:text-xl group-hover:text-foreground transition-colors">
                      {exp.position}
                    </CardTitle>
                    <p className="text-base font-medium text-foreground sm:text-lg">{exp.company}</p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    asChild 
                    className="h-9 w-9 shrink-0 transition-all hover:scale-110 hover:bg-accent"
                  >
                    <Link href={`/experience/${exp.id}`}>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:rotate-12" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-4 flex flex-col gap-1 text-sm text-muted-foreground">
                  <p className="font-medium">{exp.location}</p>
                  <p className="text-xs sm:text-sm">
                    {exp.startDate} – {exp.endDate}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="mb-6 space-y-3">
                  {exp.description.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm leading-relaxed text-muted-foreground sm:text-base line-clamp-2">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  size="default" 
                  asChild 
                  className="w-full group/btn transition-all hover:shadow-soft"
                >
                  <Link href={`/experience/${exp.id}`}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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

