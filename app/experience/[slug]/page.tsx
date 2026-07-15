import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
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
      <article className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:py-20">
        <Button
          variant="outline"
          asChild
          className="mb-8 h-10 rounded-full border-border/80 hover:bg-foreground hover:text-background sm:mb-10"
        >
          <Link href="/#experience">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Experience
          </Link>
        </Button>

        <header className="mb-8 space-y-3 sm:mb-12 sm:space-y-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:text-[11px] sm:tracking-[0.28em]">
            {exp.startDate} - {exp.endDate} · {exp.location}
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            {exp.position}
          </h1>
          <p className="break-words text-base text-muted-foreground sm:text-xl">
            {exp.company}
          </p>
        </header>

        <div className="space-y-5 border-t border-border/60 pt-8 sm:space-y-6 sm:pt-10">
          <h2 className="font-display text-lg font-semibold tracking-tight sm:text-2xl">
            Highlights
          </h2>
          <ul className="space-y-4 sm:space-y-5">
            {exp.description.map((item, i) => (
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
      </article>
      <SiteFooter />
    </div>
  );
}
