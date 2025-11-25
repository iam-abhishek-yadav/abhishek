import { Button } from "@/components/ui/button";
import { personalInfo, controlMetadata } from "@/lib/data";
import { Mail, Linkedin, Github, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center"
    >
      <div className="mx-auto max-w-6xl space-y-8 animate-fade-in">
        {controlMetadata.availableForOpportunities && (
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm text-muted-foreground shadow-subtle mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Available for opportunities</span>
          </div>
        )}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block">{personalInfo.name.split(" ")[0]}</span>
            <span className="block text-muted-foreground/80">{personalInfo.name.split(" ")[1]}</span>
          </h1>
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="h-px w-12 bg-border" />
            <p className="text-lg font-medium sm:text-xl md:text-2xl text-foreground">
              {personalInfo.title}
            </p>
            <div className="h-px w-12 bg-border" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Button variant="outline" asChild size="lg" className="group transition-all hover:scale-105 hover:shadow-soft">
            <Link href={`mailto:${personalInfo.email}`}>
              <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Email
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="group transition-all hover:scale-105 hover:shadow-soft">
            <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="group transition-all hover:scale-105 hover:shadow-soft">
            <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
