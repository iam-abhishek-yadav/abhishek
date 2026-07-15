import { Button } from "@/components/ui/button";
import { personalInfo, controlMetadata } from "@/lib/data";
import { Mail, Linkedin, Github, Phone, Sparkles, ArrowDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center overflow-hidden px-4 py-24 text-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-vignette" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="relative mx-auto max-w-5xl space-y-10">
        {controlMetadata.availableForOpportunities && (
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Available for opportunities</span>
          </div>
        )}

        <div className="space-y-6 animate-fade-up" style={{ animationDelay: "80ms" }}>
          <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">{personalInfo.name.split(" ")[0]}</span>
            <span className="block text-muted-foreground/90">
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-foreground/20 animate-pulse-line sm:w-16" />
            <p className="text-base font-medium tracking-wide text-muted-foreground sm:text-xl">
              {personalInfo.title}
            </p>
            <div
              className="h-px w-10 bg-foreground/20 animate-pulse-line sm:w-16"
              style={{ animationDelay: "1.2s" }}
            />
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          <Button
            variant="outline"
            asChild
            size="lg"
            className="group h-11 rounded-full border-border/80 bg-card/40 px-5 backdrop-blur-sm transition-all hover:border-foreground/40 hover:bg-foreground hover:text-background"
          >
            <Link href={`mailto:${personalInfo.email}`}>
              <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              <span>Email</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="group h-11 rounded-full border-border/80 bg-card/40 px-5 backdrop-blur-sm transition-all hover:border-foreground/40 hover:bg-foreground hover:text-background"
          >
            <Link href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}>
              <Phone className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              <span>Phone</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="group h-11 rounded-full border-border/80 bg-card/40 px-5 backdrop-blur-sm transition-all hover:border-foreground/40 hover:bg-foreground hover:text-background"
          >
            <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              <span>LinkedIn</span>
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            size="lg"
            className="group h-11 rounded-full border-border/80 bg-card/40 px-5 backdrop-blur-sm transition-all hover:border-foreground/40 hover:bg-foreground hover:text-background"
          >
            <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              <span>GitHub</span>
            </Link>
          </Button>
        </div>
      </div>

      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground animate-float"
        aria-label="Scroll to about"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
      </Link>
    </section>
  );
}
