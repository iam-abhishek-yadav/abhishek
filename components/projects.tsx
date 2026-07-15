import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export function Projects() {
  const previewSkillsCount = 4;

  return (
    <section id="projects" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Projects" index="03" />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => {
            const previewSkills = project.technologies.slice(0, previewSkillsCount);
            const remainingSkills = project.technologies.length - previewSkillsCount;

            return (
              <Card
                key={project.id}
                className="group border-border/70 bg-card/60 hover:border-foreground/25"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                      {project.name}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="h-9 w-9 shrink-0 rounded-full opacity-60 transition-all hover:opacity-100 group-hover:bg-muted"
                    >
                      <Link href={`/projects/${project.id}`}>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {previewSkills.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="rounded-md border-border/70 bg-background/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {remainingSkills > 0 && (
                      <Badge
                        variant="outline"
                        className="rounded-md border-border/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground/70"
                      >
                        +{remainingSkills}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-3">
                    {project.description.slice(0, 2).map((item, i) => (
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
                    <Link href={`/projects/${project.id}`}>
                      View details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
