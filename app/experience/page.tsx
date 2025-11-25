import { Nav } from "@/components/nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { experience } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="mb-8 flex items-center justify-between sm:mb-12">
          <h1 className="text-3xl font-bold sm:text-4xl">All Experience</h1>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((exp) => (
            <Card
              key={exp.id}
              className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-lg sm:text-xl">{exp.position}</CardTitle>
                    <p className="text-base font-medium text-foreground sm:text-lg">{exp.company}</p>
                  </div>
                  <Button variant="ghost" size="icon" asChild className="h-8 w-8 shrink-0">
                    <Link href={`/experience/${exp.id}`}>
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-3 flex flex-col gap-1 text-sm text-muted-foreground">
                  <p className="font-medium">{exp.location}</p>
                  <p className="text-xs sm:text-sm">
                    {exp.startDate} – {exp.endDate}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="mb-4 space-y-2">
                  {exp.description.slice(0, 2).map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-xs text-muted-foreground sm:text-sm line-clamp-2">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href={`/experience/${exp.id}`}>
                    View Details
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

