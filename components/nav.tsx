"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems: Array<{ label: string; href: string }> = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  useEffect(() => {
    if (!isHomePage) return;

    const handleHashChange = () => {
      const hash = window.location.hash;
      setActiveSection(hash || "#hero");
    };

    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(`#${section}`);
          return;
        }
      }
      setActiveSection("#hero");
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  const linkHref = (href: string) => (isHomePage ? href : `/${href}`);

  return (
    <header className="sticky top-0 z-40 w-full px-3 pt-3 safe-top sm:px-4 sm:pt-4">
      <nav
        className={cn(
          "relative mx-auto flex h-12 max-w-6xl items-center justify-between rounded-2xl border px-3 transition-all duration-300 sm:h-14 sm:px-5",
          scrolled || menuOpen
            ? "border-border/80 bg-background/90 shadow-soft backdrop-blur-xl"
            : "border-border/40 bg-background/40 backdrop-blur-md"
        )}
      >
        <Link
          href={isHomePage ? "#hero" : "/#hero"}
          className="font-display text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70 sm:text-base"
          onClick={() => setMenuOpen(false)}
        >
          AY
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className={cn(
                  "relative h-8 rounded-lg px-3 text-sm transition-colors",
                  isActive
                    ? "bg-foreground text-background hover:bg-foreground/90 hover:text-background"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                <Link href={linkHref(item.href)}>{item.label}</Link>
              </Button>
            );
          })}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-lg sm:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {menuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm sm:hidden"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute left-3 right-3 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-2xl border border-border/80 bg-background/95 shadow-soft backdrop-blur-xl sm:hidden">
            <div className="flex flex-col p-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <Link
                    key={item.href}
                    href={linkHref(item.href)}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                      isActive
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
