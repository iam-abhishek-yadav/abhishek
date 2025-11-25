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
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="mb-8">
          <Button variant="outline" asChild className="mb-6">
            <Link href="/experience">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Experience
            </Link>
          </Button>
          <div className="mb-4 space-y-2">
            <h1 className="text-3xl font-bold sm:text-4xl">{exp.position}</h1>
            <p className="text-xl font-medium text-foreground sm:text-2xl">{exp.company}</p>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
              <p className="font-medium">{exp.location}</p>
              <span className="hidden sm:inline">•</span>
              <p>
                {exp.startDate} – {exp.endDate}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl">
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Role & Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-3 pl-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm leading-7 text-muted-foreground sm:text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

