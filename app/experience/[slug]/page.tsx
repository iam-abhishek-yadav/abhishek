import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen">
      <Nav />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-20">
        <Button
          variant="outline"
          asChild
          className="mb-10 rounded-full border-border/80 hover:bg-foreground hover:text-background"
        >
          <Link href="/#experience">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Experience
          </Link>
        </Button>

        <header className="mb-12 space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            {exp.startDate} - {exp.endDate} · {exp.location}
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {exp.position}
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">{exp.company}</p>
        </header>

        <div className="space-y-6 border-t border-border/60 pt-10">
          <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Highlights
          </h2>
          <ul className="space-y-5">
            {exp.description.map((item, i) => (
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
      </article>
    </div>
  );
}
