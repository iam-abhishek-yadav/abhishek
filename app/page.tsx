import { Nav } from "@/components/nav";
import { ChapterRail } from "@/components/chapter-rail";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <Nav />
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[11rem_minmax(0,1fr)]">
          <ChapterRail />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </main>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
