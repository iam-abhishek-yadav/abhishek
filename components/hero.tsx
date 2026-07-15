import { Button } from "@/components/ui/button";
import { personalInfo, tagline, controlMetadata } from "@/lib/data";
import { ArrowRight, Github, Linkedin, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center overflow-hidden px-4 py-12 sm:min-h-[min(72svh,720px)] sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-vignette" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 sm:opacity-100" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
          <div className="space-y-6 sm:space-y-8 animate-fade-up">
            {controlMetadata.availableForOpportunities && (
              <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Available for opportunities</span>
              </div>
            )}

            <div className="space-y-4 sm:space-y-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:text-[11px] sm:tracking-[0.28em]">
                {personalInfo.title}
              </p>
              <h1 className="font-display text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[0.95]">
                {personalInfo.name}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-xl sm:leading-8">
                {tagline}
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="h-11 w-full rounded-full px-6 transition-transform hover:scale-[1.02] sm:w-auto"
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
                className="h-11 w-full rounded-full border-border/80 bg-transparent px-6 hover:bg-foreground hover:text-background sm:w-auto"
              >
                <Link href="#contact">Get in touch</Link>
              </Button>
            </div>
          </div>

          <div
            className="flex flex-col gap-5 border-t border-border/60 pt-6 animate-fade-up lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
            style={{ animationDelay: "140ms" }}
          >
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              Founding engineer at a YC-backed AI observability startup. Full-stack -
              React, Next.js, FastAPI, Kafka, ClickHouse, multi-LLM orchestration.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
                GitHub
              </Link>
              <span className="hidden text-border sm:inline">/</span>
              <Link
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
