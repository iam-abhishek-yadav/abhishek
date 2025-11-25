import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, ExternalLink, FolderKanban } from "lucide-react";

export function Projects() {
  const featuredProjects = projects.slice(0, 2);
  const previewSkillsCount = 4;

  return (
    <section id="projects" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-baseline justify-between gap-4">
            <div className="flex items-baseline gap-4 flex-1">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-lg bg-emerald-500/20 blur-sm" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/30 to-emerald-400/10 border border-emerald-500/30">
                  <FolderKanban className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Projects</h2>
                <div className="mt-2 h-0.5 w-20 bg-gradient-to-r from-emerald-500 to-transparent rounded-full" />
              </div>
            </div>
            <Button variant="outline" asChild className="shrink-0">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => {
            const previewSkills = project.technologies.slice(0, previewSkillsCount);
            const remainingSkills = project.technologies.length - previewSkillsCount;

            return (
              <Card
                key={project.id}
                className="group transition-all duration-300 hover:shadow-strong hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-lg sm:text-xl group-hover:text-foreground transition-colors">
                      {project.name}
                    </CardTitle>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      asChild 
                      className="h-9 w-9 shrink-0 transition-all hover:scale-110 hover:bg-accent"
                    >
                      <Link href={`/projects/${project.id}`}>
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:rotate-12" />
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {previewSkills.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-medium transition-all group-hover:bg-secondary/90 group-hover:shadow-subtle"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {remainingSkills > 0 && (
                      <Badge variant="outline" className="text-xs font-medium">
                        +{remainingSkills} more
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mb-6 space-y-3">
                    {project.description.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
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
                    <Link href={`/projects/${project.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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

