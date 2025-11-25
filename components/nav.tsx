"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/components/theme-switcher";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link
          href={isHomePage ? "#hero" : "/#hero"}
          className="text-lg font-semibold transition-colors hover:text-primary"
        >
          Abhishek Yadav
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className="hidden text-xs sm:flex sm:text-sm"
            >
              <Link href={isHomePage ? item.href : `/${item.href}`}>
                {item.label}
              </Link>
            </Button>
          ))}
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

