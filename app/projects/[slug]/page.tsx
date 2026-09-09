import { Nav } from "@/components/nav";
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

  return (
    <div className="flex min-h-svh flex-col">
      <Nav />
      <article className="mx-auto w-full max-w-2xl flex-1 px-4 py-10 sm:py-20">
        <Link
          href="/#work"
          className="mb-10 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          Systems
        </Link>

        <header className="mb-12 space-y-5">
          <p className="font-mono text-[11px] tracking-[0.18em] text-mark">
            {project.label}
            {status ? ` · ${status}` : ""}
          </p>
          <h1 className="font-display text-4xl font-medium italic tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          <p className="text-base leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            {project.tagline}
          </p>
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] text-foreground transition-opacity hover:opacity-70"
            >
              Live
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          )}
          <p className="text-sm leading-7 text-muted-foreground/80">
            {project.technologies.join(" · ")}
          </p>
        </header>

        <ol className="space-y-6 border-t border-border/70 pt-10">
          {project.description.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="mt-1 shrink-0 font-mono text-[11px] tabular-nums text-mark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-7 text-muted-foreground sm:text-[15px] sm:leading-8">
                {item}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex items-start justify-between gap-4 border-t border-border/70 pt-8">
          {index > 0 ? (
            <Link
              href={`/projects/${projects[index - 1].id}`}
              className="min-w-0 flex-1 font-display text-lg italic text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="block truncate">← {projects[index - 1].name}</span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
          {index < projects.length - 1 ? (
            <Link
              href={`/projects/${projects[index + 1].id}`}
              className="min-w-0 flex-1 text-right font-display text-lg italic text-muted-foreground transition-colors hover:text-foreground"
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
