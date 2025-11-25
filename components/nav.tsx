"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { useEffect, useState } from "react";

type NavColor = "blue" | "purple" | "emerald" | "orange" | "rose";

const navItems: Array<{ label: string; href: string; color: NavColor }> = [
  { label: "About", href: "#about", color: "blue" },
  { label: "Experience", href: "#experience", color: "purple" },
  { label: "Projects", href: "#projects", color: "emerald" },
  { label: "Skills", href: "#skills", color: "orange" },
  { label: "Education", href: "#education", color: "rose" },
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
          className="text-base font-bold text-purple-500 dark:text-purple-300 transition-all hover:scale-105 hover:text-blue-500 dark:hover:text-blue-300"
        >
          Abhishek Yadav
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            const colorClasses = {
              blue: isActive
                ? "bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30"
                : "hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400",
              purple: isActive
                ? "bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30"
                : "hover:bg-purple-500/10 hover:text-purple-600 dark:hover:text-purple-400",
              emerald: isActive
                ? "bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30"
                : "hover:bg-emerald-500/10 hover:text-emerald-600 dark:hover:text-emerald-400",
              orange: isActive
                ? "bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-500/30"
                : "hover:bg-orange-500/10 hover:text-orange-600 dark:hover:text-orange-400",
              rose: isActive
                ? "bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-500/30"
                : "hover:bg-rose-500/10 hover:text-rose-600 dark:hover:text-rose-400",
            };
            return (
              <Button
                key={item.href}
                variant="ghost"
                asChild
                className={`hidden text-xs transition-all sm:flex sm:text-sm border ${
                  isActive
                    ? `${colorClasses[item.color]} font-medium shadow-subtle`
                    : colorClasses[item.color]
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

