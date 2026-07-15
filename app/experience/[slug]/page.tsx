import { Nav } from "@/components/nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-20">
        <Button
          variant="outline"
          asChild
          className="mb-8 rounded-full border-border/80 hover:bg-foreground hover:text-background"
        >
          <Link href="/#experience">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>

        <div className="mb-10 space-y-3">
          <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {exp.position}
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">{exp.company}</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            <span>{exp.location}</span>
            <span className="text-border">/</span>
            <span>
              {exp.startDate} – {exp.endDate}
            </span>
          </div>
        </div>

        <Card className="border-border/70 bg-card/60">
          <CardHeader>
            <CardTitle className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
              Role & Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {exp.description.map((item, i) => (
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
    </div>
  );
}
