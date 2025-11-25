import { Nav } from "@/components/nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const previewSkillsCount = 5;

  return (
    <div className="min-h-screen">
      <Nav />
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="mb-8 flex items-center justify-between sm:mb-12">
          <h1 className="text-3xl font-bold sm:text-4xl">All Projects</h1>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
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
    </div>
  );
}

