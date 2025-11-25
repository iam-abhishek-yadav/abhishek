import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { personalInfo } from "@/lib/data";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-2xl font-bold sm:mb-12 sm:text-3xl">Contact</h2>
        <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground sm:h-5 sm:w-5" />
                <Link
                  href={`mailto:${personalInfo.email}`}
                  className="break-all text-sm text-muted-foreground transition-colors hover:text-foreground sm:text-base"
                >
                  {personalInfo.email}
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="h-4 w-4 shrink-0 text-muted-foreground sm:h-5 sm:w-5" />
                <Link
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground sm:text-base"
                >
                  LinkedIn Profile
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Github className="h-4 w-4 shrink-0 text-muted-foreground sm:h-5 sm:w-5" />
                <Link
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground sm:text-base"
                >
                  GitHub Profile
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
