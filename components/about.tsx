import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { summary } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="text-2xl">About</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7 text-muted-foreground">{summary}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

