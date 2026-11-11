import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Platform } from "@/components/platform";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Toolkit } from "@/components/toolkit";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <About />
          <Platform />
          <Experience />
          <Projects />
          <Toolkit />
          <Contact />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
