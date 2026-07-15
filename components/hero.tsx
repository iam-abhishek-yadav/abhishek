import { Button } from "@/components/ui/button";
import { personalInfo, tagline, controlMetadata } from "@/lib/data";
import { ArrowDown, ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-end overflow-hidden px-4 pb-16 pt-28 sm:pb-24 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-vignette" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div className="space-y-8 animate-fade-up">
            {controlMetadata.availableForOpportunities && (
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Available for opportunities</span>
              </div>
            )}

            <div className="space-y-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                {personalInfo.title}
              </p>
              <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[0.95]">
                {personalInfo.name}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-8">
                {tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-11 rounded-full px-6 transition-transform hover:scale-[1.02]"
              >
                <Link href="#work">
                  View work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="h-11 rounded-full border-border/80 bg-transparent px-6 hover:bg-foreground hover:text-background"
              >
                <Link href="#contact">Get in touch</Link>
              </Button>
            </div>
          </div>

          <div
            className="flex flex-col gap-6 border-t border-border/60 pt-6 animate-fade-up lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
            style={{ animationDelay: "120ms" }}
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              Founding engineer at a YC-backed AI observability startup. Full-stack —
              React, Next.js, FastAPI, Kafka, ClickHouse, multi-LLM orchestration.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
                GitHub
              </Link>
              <span className="text-border">/</span>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="#work"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground animate-float sm:flex"
        aria-label="Scroll to work"
      >
        <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
      </Link>
    </section>
  );
}
