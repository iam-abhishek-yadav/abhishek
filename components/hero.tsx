import { Button } from "@/components/ui/button";
import { personalInfo, controlMetadata } from "@/lib/data";
import { Mail, Linkedin, Github, Phone, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center"
    >
      <div className="mx-auto max-w-6xl space-y-8 animate-fade-in">
        {controlMetadata.availableForOpportunities && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm text-foreground shadow-subtle">
            <Sparkles className="h-3.5 w-3.5 text-muted-foreground" />
            <span>Available for opportunities</span>
          </div>
        )}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block">{personalInfo.name}</span>
          </h1>
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="h-px w-12 bg-border/70" />
            <p className="text-lg font-medium sm:text-xl md:text-2xl text-muted-foreground">
              {personalInfo.title}
            </p>
            <div className="h-px w-12 bg-border/70" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Button
            variant="outline"
            asChild
            size="lg"
            className="group transition-all hover:scale-105 hover:shadow-soft hover:bg-muted/50"
          >
            <Link href={`mailto:${personalInfo.email}`}>
              <Mail className="mr-2 h-4 w-4 text-muted-foreground transition-all group-hover:scale-110 group-hover:text-foreground" />
              <span>Email</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="group transition-all hover:scale-105 hover:shadow-soft hover:bg-muted/50"
          >
            <Link href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}>
              <Phone className="mr-2 h-4 w-4 text-muted-foreground transition-all group-hover:scale-110 group-hover:text-foreground" />
              <span>Phone</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="group transition-all hover:scale-105 hover:shadow-soft hover:bg-muted/50"
          >
            <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4 text-muted-foreground transition-all group-hover:scale-110 group-hover:text-foreground" />
              <span>LinkedIn</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="group transition-all hover:scale-105 hover:shadow-soft hover:bg-muted/50"
          >
            <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 text-muted-foreground transition-all group-hover:scale-110 group-hover:text-foreground" />
              <span>GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
