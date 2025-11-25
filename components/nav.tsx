"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useEffect, useState } from "react";

const navItems = [
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

  useEffect(() => {
    if (!isHomePage) return;

    const handleHashChange = () => {
      const hash = window.location.hash;
      setActiveSection(hash || "#hero");
    };

    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

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
    <nav className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-subtle">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link
          href={isHomePage ? "#hero" : "/#hero"}
          className="text-base font-bold transition-all hover:text-primary hover:scale-105"
        >
          Abhishek Yadav
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className={`hidden text-xs transition-all sm:flex sm:text-sm ${
                  isActive
                    ? "bg-accent text-accent-foreground font-medium shadow-subtle"
                    : "hover:bg-accent/50"
                }`}
              >
                <Link href={isHomePage ? item.href : `/${item.href}`}>
                  {item.label}
                </Link>
              </Button>
            );
          })}
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

