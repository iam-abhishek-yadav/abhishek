import type { Metadata } from "next";
import { DetailShell, SideBlock } from "@/components/detail-shell";
import { Chip } from "@/components/section-header";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  return { title: project.name, description: project.oneLiner };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.id === slug);
  const project = projects[index];

  if (!project) {
    notFound();
  }

  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <DetailShell backHref="/#work" backLabel="All work">
      <header className="mt-10 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="label text-mark">{project.kicker}</span>
          {project.status && (
            <span className="rounded-full border border-mark/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-mark">
              {project.status}
            </span>
          )}
        </div>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-6xl">
          {project.name}
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty sm:text-xl sm:leading-9">
          {project.oneLiner}
        </p>
      </header>

      <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
        {project.metrics.map((m) => (
          <div key={m.label} className="bg-background/90 p-5 backdrop-blur sm:p-6">
            <dt className="sr-only">{m.label}</dt>
            <dd>
              <span className="block text-2xl font-semibold tracking-tight">{m.value}</span>
              <span className="mt-1 block text-[13px] text-muted-foreground">{m.label}</span>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-14">
        <div className="space-y-14">
          <section>
            <h2 className="label flex items-center gap-3 text-muted-foreground">
              <span className="text-mark">01</span> The problem
            </h2>
            <p className="mt-5 font-serif text-2xl leading-snug text-foreground/90 text-pretty sm:text-[1.75rem]">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="label flex items-center gap-3 text-muted-foreground">
              <span className="text-mark">02</span> What I built
            </h2>
            <ol className="mt-6 space-y-3">
              {project.built.map((item, i) => (
                <li
                  key={item}
                  className="card-surface flex gap-4 rounded-xl border border-border p-4 sm:p-5"
                >
                  <span className="mt-0.5 font-mono text-[11px] tabular-nums text-mark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-7 text-foreground/85">{item}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <SideBlock label="Stack">
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </SideBlock>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl bg-foreground px-5 py-4 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Visit live site
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border px-5 py-4 text-sm font-medium transition-colors hover:bg-muted"
            >
              View source on GitHub
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
              />
            </a>
          )}
        </aside>
      </div>

      <nav className="mt-20 grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/projects/${prev.id}`}
            className="group card-surface card-hover rounded-2xl border border-border p-5"
          >
            <span className="label inline-flex items-center gap-2 text-muted-foreground">
              <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} /> Previous
            </span>
            <span className="mt-3 block text-lg font-semibold tracking-tight">{prev.name}</span>
          </Link>
        ) : (
          <span className="hidden sm:block" />
        )}
        {next && (
          <Link
            href={`/projects/${next.id}`}
            className="group card-surface card-hover rounded-2xl border border-border p-5 sm:text-right"
          >
            <span className="label inline-flex items-center gap-2 text-muted-foreground">
              Next <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
            </span>
            <span className="mt-3 block text-lg font-semibold tracking-tight">{next.name}</span>
          </Link>
        )}
      </nav>
    </DetailShell>
  );
}
