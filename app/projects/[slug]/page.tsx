import { Nav } from "@/components/nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
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
    <div className="flex min-h-svh flex-col">
      <Nav />
      <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:py-20">
        <Button
          variant="outline"
          asChild
          className="mb-8 h-10 rounded-full border-border/80 hover:bg-foreground hover:text-background sm:mb-10"
        >
          <Link href="/#work">
            <ArrowLeft className="mr-2 h-4 w-4" />
            All work
          </Link>
        </Button>

        <header className="mb-8 space-y-4 sm:mb-12 sm:space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:text-[11px] sm:tracking-[0.28em]">
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
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-xl sm:leading-8">
            {project.tagline}
          </p>
          {(role || liveUrl) && (
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground sm:gap-4">
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
                  className="inline-flex min-h-11 items-center gap-1.5 text-foreground transition-opacity hover:opacity-70"
                >
                  Live site
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              )}
            </div>
          )}
          <div className="flex flex-wrap gap-1.5 pt-1 sm:gap-2 sm:pt-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="rounded-md border-border/60 bg-transparent px-2 py-0.5 font-mono text-[9px] uppercase tracking-wide text-muted-foreground sm:px-2.5 sm:py-1 sm:text-[10px]"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </header>

        <div className="space-y-5 border-t border-border/60 pt-8 sm:space-y-6 sm:pt-10">
          <h2 className="font-display text-lg font-semibold tracking-tight sm:text-2xl">
            Overview
          </h2>
          <ul className="space-y-4 sm:space-y-5">
            {project.description.map((item, i) => (
              <li key={i} className="flex gap-3 sm:gap-4">
                <span className="mt-1 shrink-0 font-mono text-[10px] text-muted-foreground/60 tabular-nums sm:text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="min-w-0 text-sm leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex items-start justify-between gap-4 border-t border-border/60 pt-6 sm:mt-16 sm:pt-8">
          {index > 0 ? (
            <Link
              href={`/projects/${projects[index - 1].id}`}
              className="min-w-0 flex-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="block truncate">← {projects[index - 1].name}</span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
          {index < projects.length - 1 ? (
            <Link
              href={`/projects/${projects[index + 1].id}`}
              className="min-w-0 flex-1 text-right text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="block truncate">{projects[index + 1].name} →</span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
        </div>
      </article>
      <SiteFooter />
    </div>
  );
}
