"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Line = {
  source: string;
  message: string;
  status: "ok" | "warn" | "info";
};

// Illustrative only: the kind of traffic the platform handles.
const SCRIPT: Line[] = [
  { source: "ingest", message: "session.replay  chunk 12/40  → kafka", status: "info" },
  { source: "kafka", message: "consumer lag 0  partition 7", status: "ok" },
  { source: "clickhouse", message: "insert interactions  batch committed", status: "ok" },
  { source: "analysis", message: "issue scored  severity=high  cluster #214", status: "warn" },
  { source: "rag", message: "pgvector top-k=8  grounded 3 prior sessions", status: "info" },
  { source: "agent", message: 'step 4/7  click "Checkout"  selector missed', status: "warn" },
  { source: "cua", message: "recovered via computer use  patched selector", status: "ok" },
  { source: "judge", message: "step matches expectation  pass", status: "ok" },
  { source: "codegen", message: "playwright spec written  checkout.spec.ts", status: "info" },
  { source: "github", message: "check qa/preview  ✓ passed  PR #482", status: "ok" },
  { source: "slack", message: "thread updated  #qa-failures  resolved", status: "ok" },
  { source: "sse", message: "progress streamed  4 clients", status: "info" },
];

const VISIBLE = 8;
const START = 14 * 3600 + 2 * 60 + 7;

function stamp(tick: number) {
  const t = START + tick * 2;
  const h = Math.floor(t / 3600) % 24;
  const m = Math.floor(t / 60) % 60;
  const s = t % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

export function EventStream({ className }: { className?: string }) {
  const [tick, setTick] = useState(VISIBLE);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced.current) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 1500);
    return () => window.clearInterval(id);
  }, []);

  const lines = Array.from({ length: VISIBLE }, (_, i) => {
    const n = tick - VISIBLE + i;
    return { n, ...SCRIPT[n % SCRIPT.length] };
  });

  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border card-surface",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        </div>
        <span className="label text-muted-foreground">decipher · live</span>
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-mark opacity-60 animate-ping-slow" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-mark" />
        </span>
      </div>

      <div className="space-y-2 px-4 py-4 font-mono text-[11.5px] leading-5 sm:text-[12px]">
        {lines.map((line, i) => (
          <div
            key={line.n}
            className={cn(
              "flex gap-3 whitespace-nowrap",
              i === VISIBLE - 1 && "animate-line-in"
            )}
            style={{ opacity: 0.35 + (i / (VISIBLE - 1)) * 0.65 }}
          >
            <span className="tabular-nums text-muted-foreground/70">
              {stamp(line.n)}
            </span>
            <span
              className={cn(
                "w-[5.5rem] shrink-0",
                line.status === "ok" && "text-mark",
                line.status === "warn" && "text-amber-500 dark:text-amber-400",
                line.status === "info" && "text-sky-600 dark:text-sky-400"
              )}
            >
              {line.source}
            </span>
            <span className="truncate text-foreground/85">{line.message}</span>
          </div>
        ))}
        <div className="flex gap-3 pt-1">
          <span className="text-mark">❯</span>
          <span className="h-4 w-2 bg-foreground/70 animate-blink" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-12 h-10 bg-gradient-to-b from-card to-transparent" />
    </div>
  );
}
