import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Plug,
  TestTube,
  Sparkles,
  Activity,
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: skills.languages,
    icon: Code2,
    variant: "secondary" as const,
  },
  {
    title: "Frontend",
    skills: skills.frontend,
    icon: Layout,
    variant: "secondary" as const,
  },
  {
    title: "Backend",
    skills: skills.backend,
    icon: Server,
    variant: "secondary" as const,
  },
  {
    title: "Data & Queues",
    skills: skills.database,
    icon: Database,
    variant: "secondary" as const,
  },
  {
    title: "AI & LLMs",
    skills: skills.ai,
    icon: Sparkles,
    variant: "secondary" as const,
  },
  {
    title: "Browser & Testing",
    skills: skills.testing,
    icon: TestTube,
    variant: "secondary" as const,
  },
  {
    title: "DevOps & Cloud",
    skills: skills.devops,
    icon: Cloud,
    variant: "secondary" as const,
  },
  {
    title: "Observability",
    skills: skills.observability,
    icon: Activity,
    variant: "secondary" as const,
  },
  {
    title: "Integrations",
    skills: skills.integrations,
    icon: Plug,
    variant: "secondary" as const,
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-baseline gap-4">
              <div className="relative shrink-0">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-muted/40 shadow-subtle">
                  <Code2 className="h-5 w-5 text-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Technical Skills</h2>
                <div className="mt-2 h-0.5 w-20 rounded-full bg-border/70" />
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="group transition-all duration-300 hover:shadow-medium hover:-translate-y-0.5">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-muted/40 shadow-subtle group-hover:shadow-soft transition-shadow">
                      <Icon className="h-4 w-4 text-foreground" />
                    </div>
                    <CardTitle className="text-base sm:text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant={category.variant} 
                        className="text-xs font-medium transition-all group-hover:shadow-subtle border border-border/60 bg-card px-3 py-1.5 rounded-md hover:border-border hover:bg-accent/50"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
