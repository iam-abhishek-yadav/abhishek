"use client";

import { Button } from "@/components/ui/button";
import { chapters, personalInfo } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function Nav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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

  const chapterHref = (id: string) => (isHomePage ? `#${id}` : `/#${id}`);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full px-4 transition-colors safe-top sm:px-6",
        scrolled || menuOpen
          ? "bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between sm:h-16">
        <Link
          href={isHomePage ? "#me" : "/"}
          className="font-mono text-[11px] tracking-[0.22em] text-foreground transition-opacity hover:opacity-60"
          onClick={() => setMenuOpen(false)}
        >
          {personalInfo.firstName.toUpperCase()}
        </Link>

        <div className="flex items-center gap-1">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-none lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute inset-x-0 top-full z-50 border-y border-border/70 bg-background lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-4">
              {chapters.map((chapter) => (
                <Link
                  key={chapter.id}
                  href={chapterHref(chapter.id)}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-4 py-3 font-mono text-sm tracking-wide text-muted-foreground hover:text-foreground"
                >
                  <span className="text-mark tabular-nums">{chapter.number}</span>
                  {chapter.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
