import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-2xl font-bold sm:mb-12 sm:text-3xl">Education</h2>
        <Card className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">{education.degree}</CardTitle>
            <p className="text-sm text-muted-foreground sm:text-base">{education.institution}</p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-sm">
              <p>{education.location}</p>
              <p>
                {education.startDate} – {education.endDate}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

