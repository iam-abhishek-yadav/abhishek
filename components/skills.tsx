import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";
import { Code2, Globe, Database, Cloud, Plug, TestTube, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: skills.languages,
    icon: Code2,
    variant: "default" as const,
  },
  {
    title: "Web Development",
    skills: skills.webDevelopment,
    icon: Globe,
    variant: "secondary" as const,
  },
  {
    title: "Database / Caching / Queues",
    skills: skills.database,
    icon: Database,
    variant: "outline" as const,
  },
  {
    title: "DevOps / Cloud",
    skills: skills.devops,
    icon: Cloud,
    variant: "secondary" as const,
  },
  {
    title: "Third-Party APIs & Integrations",
    skills: skills.integrations,
    icon: Plug,
    variant: "outline" as const,
  },
  {
    title: "Testing / Tools",
    skills: skills.testing,
    icon: TestTube,
    variant: "secondary" as const,
  },
  {
    title: "AI Integrations",
    skills: skills.ai,
    icon: Sparkles,
    variant: "default" as const,
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-baseline gap-4">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-lg bg-primary/10 blur-sm" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Technical Skills</h2>
              <div className="mt-2 h-0.5 w-20 bg-gradient-to-r from-primary to-transparent rounded-full" />
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
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card shadow-subtle group-hover:shadow-soft transition-shadow">
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
                        className="text-xs font-medium transition-all group-hover:shadow-subtle"
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

