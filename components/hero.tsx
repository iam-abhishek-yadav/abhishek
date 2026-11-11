import { hero, personalInfo, stats } from "@/lib/data";
import { EventStream } from "@/components/event-stream";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="top" className="relative scroll-mt-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade" />
      <div className="pointer-events-none absolute inset-0 glow-top" />

      <div className="relative mx-auto max-w-6xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div>
            <div
              className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-card/60 py-1 pr-3 pl-2 backdrop-blur"
              style={{ "--delay": "0ms" } as React.CSSProperties}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-mark opacity-60 animate-ping-slow" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mark" />
              </span>
              <span className="text-xs text-muted-foreground">{hero.status}</span>
            </div>

            <p
              className="animate-fade-up label mt-8 text-muted-foreground"
              style={{ "--delay": "60ms" } as React.CSSProperties}
            >
              <span className="text-foreground">{personalInfo.name}</span>
              <span className="mx-2 text-border">/</span>
              {hero.eyebrow}
            </p>

            <h1
              className="animate-fade-up text-gradient mt-5 text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.25rem]"
              style={{ "--delay": "120ms" } as React.CSSProperties}
            >
              {hero.headline}{" "}
              <span className="font-serif font-normal italic tracking-[-0.01em] text-mark [-webkit-text-fill-color:currentColor]">
                {hero.headlineAccent}
              </span>
            </h1>

            <p
              className="animate-fade-up mt-7 max-w-xl text-base leading-7 text-muted-foreground text-pretty sm:text-lg sm:leading-8"
              style={{ "--delay": "180ms" } as React.CSSProperties}
            >
              {hero.intro}
            </p>

            <div
              className="animate-fade-up mt-9 flex flex-wrap items-center gap-3"
              style={{ "--delay": "240ms" } as React.CSSProperties}
            >
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                See the work
                <ArrowDown
                  className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                  strokeWidth={2}
                />
              </Link>
              <Link
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-mark/50"
              >
                Email me
                <ArrowUpRight
                  className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                  strokeWidth={2}
                />
              </Link>
              <div className="flex items-center gap-4 pl-1 sm:pl-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div
            className="animate-fade-up relative min-w-0"
            style={{ "--delay": "300ms" } as React.CSSProperties}
          >
            <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-mark/10 blur-3xl" />
            <EventStream className="relative" />
          </div>
        </div>

        <dl
          className="animate-fade-up mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-border/70 gap-px sm:mt-20 lg:grid-cols-4"
          style={{ "--delay": "360ms" } as React.CSSProperties}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background/90 p-5 backdrop-blur sm:p-6">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-2xl font-semibold tracking-tight sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1.5 block text-[13px] leading-5 text-muted-foreground">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
