import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/section-header";
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
  { title: "Languages", skills: skills.languages, icon: Code2 },
  { title: "Frontend", skills: skills.frontend, icon: Layout },
  { title: "Backend", skills: skills.backend, icon: Server },
  { title: "Data & Queues", skills: skills.database, icon: Database },
  { title: "AI & LLMs", skills: skills.ai, icon: Sparkles },
  { title: "Browser & Testing", skills: skills.testing, icon: TestTube },
  { title: "DevOps & Cloud", skills: skills.devops, icon: Cloud },
  { title: "Observability", skills: skills.observability, icon: Activity },
  { title: "Integrations", skills: skills.integrations, icon: Plug },
];

export function Skills() {
  return (
    <section id="skills" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Technical Skills" index="04" />
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="group border-border/70 bg-card/60 hover:border-foreground/25"
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border/70 bg-background/50 transition-colors group-hover:border-foreground/30">
                      <Icon className="h-3.5 w-3.5 text-foreground" strokeWidth={1.5} />
                    </div>
                    <CardTitle className="font-display text-base font-semibold tracking-tight sm:text-lg">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="rounded-md border-border/70 bg-background/30 px-2.5 py-1 text-xs font-normal text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
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
