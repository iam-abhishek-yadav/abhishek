import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-6 sm:gap-8">
          <Link
            href={`mailto:${personalInfo.email}`}
            className="group flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-300/20 to-orange-300/20 border border-red-500/30 transition-all hover:from-red-500/30 hover:to-orange-500/30 hover:shadow-soft hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail className="h-5 w-5 text-red-600 dark:text-red-400 transition-colors group-hover:scale-110" />
          </Link>
          <Link
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-black-500/20 to-gray-500/20 border border-black-500/30 transition-all hover:from-blue-500/30 hover:to-cyan-500/30 hover:shadow-soft hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors group-hover:scale-110" />
          </Link>
          <Link
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-gray-300/20 to-gray-500/20 border border-gray-700/30 dark:from-gray-500/20 dark:to-gray-700/20 dark:border-gray-500/30 transition-all hover:from-gray-700/30 hover:to-gray-900/30 dark:hover:from-gray-500/30 dark:hover:to-gray-700/30 hover:shadow-soft hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5 text-gray-700 dark:text-gray-300 transition-colors group-hover:scale-110" />
          </Link>
        </div>
      </div>
    </section>
  );
}
