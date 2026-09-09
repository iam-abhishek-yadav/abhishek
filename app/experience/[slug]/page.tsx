import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { experience } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return experience.map((exp) => ({
    slug: exp.id,
  }));
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = experience.find((e) => e.id === slug);

  if (!exp) {
    notFound();
  }

  return (
    <div className="flex min-h-svh flex-col">
      <Nav />
      <article className="mx-auto w-full max-w-2xl flex-1 px-4 py-10 sm:py-20">
        <Link
          href="/#path"
          className="mb-10 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          Path
        </Link>

        <header className="mb-10 space-y-4">
          <p className="font-mono text-[11px] tracking-[0.18em] text-mark">
            {exp.city} · {exp.startDate}–{exp.endDate}
          </p>
          <h1 className="font-display text-4xl font-medium italic tracking-tight sm:text-5xl">
            {exp.position}
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            {exp.company}
          </p>
        </header>

        {exp.intro && (
          <p className="mb-12 font-display text-xl italic leading-8 text-foreground sm:text-2xl sm:leading-9">
            {exp.intro}
          </p>
        )}

        <ol className="space-y-6 border-t border-border/70 pt-10">
          {exp.description.map((item, i) => (
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
      </article>
      <SiteFooter />
    </div>
  );
}
