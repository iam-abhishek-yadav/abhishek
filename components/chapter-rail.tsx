"use client";

import { chapters } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export function ChapterRail() {
  const [active, setActive] = useState("#me");

  useEffect(() => {
    const ids = chapters.map((c) => c.id);

    const onScroll = () => {
      const position = window.scrollY + 140;
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= position) {
          setActive(`#${id}`);
          return;
        }
      }
      setActive("#me");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Chapters"
      className="top-24 hidden lg:sticky lg:block lg:self-start lg:pt-8"
    >
      <ol className="space-y-1 border-l border-border/70">
        {chapters.map((chapter) => {
          const href = `#${chapter.id}`;
          const isActive = active === href;
          return (
            <li key={chapter.id}>
              <Link
                href={href}
                className={cn(
                  "-ml-px flex items-baseline gap-3 border-l py-1.5 pl-4 font-mono text-[11px] tracking-wide transition-colors",
                  isActive
                    ? "border-mark text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "tabular-nums",
                    isActive ? "text-mark" : "text-muted-foreground/70"
                  )}
                >
                  {chapter.number}
                </span>
                {chapter.label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
