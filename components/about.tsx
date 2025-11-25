import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { summary } from "@/lib/data";
import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 sm:mb-12">
          <div className="flex items-baseline gap-4">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-lg bg-primary/10 blur-sm" />
              <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                <User className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">About</h2>
              <div className="mt-2 h-0.5 w-20 bg-gradient-to-r from-primary to-transparent rounded-full" />
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Who I Am</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-8 text-base text-muted-foreground sm:text-lg">{summary}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

