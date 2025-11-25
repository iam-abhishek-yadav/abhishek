import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center"
    >
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {personalInfo.name}
        </h1>
        <p className="text-xl text-muted-foreground sm:text-2xl">
          {personalInfo.title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4 sm:gap-4">
          <Button variant="outline" asChild size="sm" className="sm:size-default transition-all hover:scale-105">
            <Link href={`mailto:${personalInfo.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Link>
          </Button>
          <Button variant="outline" asChild size="sm" className="sm:size-default transition-all hover:scale-105">
            <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" asChild size="sm" className="sm:size-default transition-all hover:scale-105">
            <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
