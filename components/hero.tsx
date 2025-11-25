import { Button } from "@/components/ui/button";
import { personalInfo, controlMetadata } from "@/lib/data";
import { Mail, Linkedin, Github, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center"
    >
      <div className="mx-auto max-w-6xl space-y-8 animate-fade-in">
        {controlMetadata.availableForOpportunities && (
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-gradient-to-r from-violet-500/20 to-purple-500/20 px-4 py-2 text-sm text-violet-700 dark:text-violet-300 shadow-subtle mb-4">
            <Sparkles className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
            <span>Available for opportunities</span>
          </div>
        )}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block text-purple-500 dark:text-purple-300">
              {personalInfo.name.split(" ")[0]}
            </span>
            <span className="block text-blue-500 dark:text-blue-300">
              {personalInfo.name.split(" ")[1]}
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <p className="text-lg font-medium sm:text-xl md:text-2xl text-emerald-600 dark:text-emerald-400">
              {personalInfo.title}
            </p>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <Button variant="outline" asChild size="lg" className="group transition-all hover:scale-105 hover:shadow-soft border-red-500/30 hover:border-red-500/60 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-orange-500/10 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300">
            <Link href={`mailto:${personalInfo.email}`}>
              <Mail className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 text-red-600 dark:text-red-400" />
              <span>Email</span>
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="group transition-all hover:scale-105 hover:shadow-soft border-blue-500/30 hover:border-blue-500/60 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
            <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 text-blue-600 dark:text-blue-400" />
              <span>LinkedIn</span>
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="group transition-all hover:scale-105 hover:shadow-soft border-gray-700/30 dark:border-gray-500/30 hover:border-gray-700/60 dark:hover:border-gray-500/60 hover:bg-gradient-to-r hover:from-gray-700/10 hover:to-gray-900/10 dark:hover:from-gray-500/10 dark:hover:to-gray-700/10 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
            <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 text-gray-700 dark:text-gray-300" />
              <span>GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
