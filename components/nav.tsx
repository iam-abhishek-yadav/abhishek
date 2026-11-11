"use client";

import { navLinks, personalInfo } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      if (!isHome) return;
      const position = window.scrollY + 160;
      let current: string | null = null;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= position) current = link.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full safe-top transition-[background-color,border-color] duration-300",
        scrolled || menuOpen
          ? "border-b border-border/70 bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href={isHome ? "#top" : "/"}
          className="group flex items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-border bg-card font-mono text-[11px] font-semibold tracking-wider transition-colors group-hover:border-mark/60">
            {personalInfo.initials}
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:inline">
            {personalInfo.name}
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/50 p-1 backdrop-blur lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={href(link.id)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-[13px] transition-colors",
                active === link.id
                  ? "bg-foreground/[0.07] text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <ThemeSwitcher />
          <Link
            href={`mailto:${personalInfo.email}`}
            className="hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-[13px] font-medium text-background transition-opacity hover:opacity-85 sm:inline-flex"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-x-0 top-full z-50 border-b border-border bg-background lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-3">
              {navLinks.map((link, i) => (
                <Link
                  key={link.id}
                  href={href(link.id)}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-border/60 py-3.5 text-base last:border-0"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="label tabular-nums text-mark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                </Link>
              ))}
              <Link
                href={`mailto:${personalInfo.email}`}
                className="mt-3 mb-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
