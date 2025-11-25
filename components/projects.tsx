import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export function Projects() {
  // Show only first 2 projects on main page
  const featuredProjects = projects.slice(0, 2);
  const previewSkillsCount = 4;

  return (
    <section id="projects" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between sm:mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl">Projects</h2>
          <Button variant="outline" asChild>
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => {
            const previewSkills = project.technologies.slice(0, previewSkillsCount);
            const remainingSkills = project.technologies.length - previewSkillsCount;

            return (
              <Card
                key={project.id}
                className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg sm:text-xl">{project.name}</CardTitle>
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8 shrink-0">
                      <Link href={`/projects/${project.id}`}>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {previewSkills.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs transition-colors group-hover:bg-secondary/80"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {remainingSkills > 0 && (
                      <Badge variant="outline" className="text-xs">
                        +{remainingSkills} more
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="mb-4 space-y-2">
                    {project.description.slice(0, 2).map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-xs text-muted-foreground sm:text-sm line-clamp-2">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link href={`/projects/${project.id}`}>
                      View Details
                      <ArrowRight className="ml-2 h-3 w-3" />
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

