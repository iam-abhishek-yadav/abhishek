import { Nav } from "@/components/nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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
  const index = projects.findIndex((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const liveUrl = "url" in project ? project.url : undefined;
  const status = "status" in project ? project.status : undefined;
  const role = "role" in project ? project.role : undefined;

  return (
    <div className="min-h-screen">
      <Nav />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-20">
        <Button
          variant="outline"
          asChild
          className="mb-10 rounded-full border-border/80 hover:bg-foreground hover:text-background"
        >
          <Link href="/#work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            All work
          </Link>
        </Button>

        <header className="mb-12 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Case study · {String(index + 1).padStart(2, "0")}
            </p>
            {status && (
              <Badge
                variant="outline"
                className="rounded-full border-foreground/30 bg-foreground/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-foreground"
              >
                {status}
              </Badge>
            )}
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-8">
            {project.tagline}
          </p>
          {(role || liveUrl) && (
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              {role && (
                <p>
                  <span className="text-muted-foreground/70">Role · </span>
                  {role}
                </p>
              )}
              {liveUrl && (
                <Link
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-foreground transition-opacity hover:opacity-70"
                >
                  Live site
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              )}
            </div>
          )}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="rounded-md border-border/60 bg-transparent px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </header>

        <div className="space-y-6 border-t border-border/60 pt-10">
          <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Overview
          </h2>
          <ul className="space-y-5">
            {project.description.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-1 font-mono text-xs text-muted-foreground/60 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-8 text-muted-foreground sm:text-lg sm:leading-8">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-border/60 pt-8">
          {index > 0 ? (
            <Link
              href={`/projects/${projects[index - 1].id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ← {projects[index - 1].name}
            </Link>
          ) : (
            <span />
          )}
          {index < projects.length - 1 ? (
            <Link
              href={`/projects/${projects[index + 1].id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {projects[index + 1].name} →
            </Link>
          ) : (
            <span />
          )}
        </div>
      </article>
    </div>
  );
}
