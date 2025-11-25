import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-2xl font-bold sm:mb-12 sm:text-3xl">Experience</h2>
        <div className="space-y-6 sm:space-y-8">
          {experience.map((exp, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-lg sm:text-xl">{exp.position}</CardTitle>
                    <p className="text-sm text-muted-foreground sm:text-base">{exp.company}</p>
                  </div>
                  <div className="text-xs text-muted-foreground sm:text-sm">
                    <p>{exp.location}</p>
                    <p>
                      {exp.startDate} – {exp.endDate}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

