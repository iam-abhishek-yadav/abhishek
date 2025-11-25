import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="scroll-smooth">
        <Hero />
        <div className="flex justify-center py-8">
          <Separator className="w-32 opacity-50" />
        </div>
        <About />
        <div className="flex justify-center py-8">
          <Separator className="w-32 opacity-50" />
        </div>
        <Experience />
        <div className="flex justify-center py-8">
          <Separator className="w-32 opacity-50" />
        </div>
        <Projects />
        <div className="flex justify-center py-8">
          <Separator className="w-32 opacity-50" />
        </div>
        <Skills />
        <div className="flex justify-center py-8">
          <Separator className="w-32 opacity-50" />
        </div>
        <Education />
        <div className="flex justify-center py-8">
          <Separator className="w-32 opacity-50" />
        </div>
        <Contact />
      </main>
    </div>
  );
}
