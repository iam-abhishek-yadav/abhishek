import type { Metadata } from "next";
import { DetailShell, SideBlock } from "@/components/detail-shell";
import { Chip } from "@/components/section-header";
import { experience } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return experience.map((exp) => ({ slug: exp.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exp = experience.find((e) => e.id === slug);
  if (!exp) return {};
  return { title: `${exp.position} at ${exp.company}`, description: exp.summary };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = experience.find((e) => e.id === slug);

  if (!exp) {
    notFound();
  }

  return (
    <DetailShell backHref="/#experience" backLabel="Experience">
      <header className="mt-10 max-w-3xl">
        <p className="label tabular-nums text-mark">
          {exp.startDate} — {exp.endDate} · {exp.location}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
          {exp.company}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          {exp.position}
          {exp.companyNote && <span className="text-muted-foreground/70"> · {exp.companyNote}</span>}
        </p>
        <p className="mt-8 font-serif text-2xl leading-snug text-foreground/90 text-pretty sm:text-[1.75rem]">
          {exp.summary}
        </p>
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:gap-14">
        <div className="space-y-14">
          <section>
            <h2 className="label flex items-center gap-3 text-muted-foreground">
              <span className="text-mark">01</span> Highlights
            </h2>
            <ul className="mt-6 space-y-4">
              {exp.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[15px] leading-7">
                  <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-mark" />
                  <span className="text-foreground/85">{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {exp.deepDive && (
            <section>
              <h2 className="label flex items-center gap-3 text-muted-foreground">
                <span className="text-mark">02</span> Inside the platform
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {exp.deepDive.map((d) => (
                  <div
                    key={d.title}
                    className="card-surface rounded-2xl border border-border p-5 sm:p-6"
                  >
                    <h3 className="text-base font-semibold tracking-tight">{d.title}</h3>
                    <p className="mt-2.5 text-[14.5px] leading-7 text-muted-foreground">
                      {d.body}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <SideBlock label="Stack">
            <div className="flex flex-wrap gap-1.5">
              {exp.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </SideBlock>
        </aside>
      </div>
    </DetailShell>
  );
}
