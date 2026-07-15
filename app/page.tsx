import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <div className="flex-1">
          <Hero />
          <Projects />
          <About />
          <Experience />
        </div>
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
