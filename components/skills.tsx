import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-2xl font-bold sm:mb-12 sm:text-3xl">Technical Skills</h2>
        <div className="space-y-4 sm:space-y-6">
          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} variant="default" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.webDevelopment.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Database / Caching / Queues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">DevOps / Cloud</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.devops.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Third-Party APIs & Integrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.integrations.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Testing / Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.testing.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">AI Integrations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.ai.map((skill) => (
                  <Badge key={skill} variant="default" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

