import { Nav } from "@/components/nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Nav />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-20">
        <Button
          variant="outline"
          asChild
          className="mb-8 rounded-full border-border/80 hover:bg-foreground hover:text-background"
        >
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>

        <div className="mb-10 space-y-3">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.name}
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="border-border/70 bg-card/60">
              <CardHeader>
                <CardTitle className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {project.description.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-foreground/50" />
                      <span className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-28 border-border/70 bg-card/60">
              <CardHeader>
                <CardTitle className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                  Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="rounded-md border-border/70 bg-background/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 border-t border-border/60 pt-6">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    Total
                  </p>
                  <p className="font-display text-3xl font-semibold tabular-nums">
                    {project.technologies.length}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
