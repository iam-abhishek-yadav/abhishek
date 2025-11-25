import { Nav } from "@/components/nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
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
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="mb-8">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">{project.name}</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card className="transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-3 pl-6">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-sm leading-7 text-muted-foreground sm:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-24 transition-all duration-300 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs transition-all hover:bg-secondary/80 hover:scale-105"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="mb-2 text-sm font-medium">Total Technologies</p>
                  <p className="text-2xl font-bold">{project.technologies.length}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

