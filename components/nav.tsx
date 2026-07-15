"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems: Array<{ label: string; href: string }> = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export function Nav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <header className="sticky top-0 z-40 w-full px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={cn(
          "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:px-5",
          scrolled
            ? "border-border/80 bg-background/80 shadow-soft backdrop-blur-xl"
            : "border-border/40 bg-background/40 backdrop-blur-md"
        )}
      >
        <Link
          href={isHomePage ? "#hero" : "/#hero"}
          className="font-display text-sm font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70 sm:text-base"
        >
          Abhishek Yadav
        </Link>
        <div className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className={cn(
                  "relative hidden h-8 rounded-lg px-2.5 text-xs transition-colors sm:flex sm:px-3 sm:text-sm",
                  isActive
                    ? "bg-foreground text-background hover:bg-foreground/90 hover:text-background"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                <Link href={isHomePage ? item.href : `/${item.href}`}>
                  {item.label}
                </Link>
              </Button>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
