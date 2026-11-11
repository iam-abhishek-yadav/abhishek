import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { toolkit } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Toolkit() {
  return (
    <section id="toolkit" className="scroll-mt-20 py-20 sm:py-28">
      <Reveal>
        <SectionHeader
          index="05"
          label="Toolkit"
          title="What I"
          accent="reach for."
          description="Tools I've used in production, not just tried. I pick the plainest one that fits the load: Postgres until the data really needs ClickHouse, a cron until it really needs a queue."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {toolkit.map((group, i) => (
          <Reveal
            key={group.label}
            delay={Math.min(i, 4) * 50}
            className={cn("h-full", group.wide && "sm:col-span-2")}
          >
            <div
              className={cn(
                "card-surface h-full rounded-2xl border border-border p-5 sm:p-6",
                group.wide && "relative overflow-hidden"
              )}
            >
              {group.wide && (
                <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-mark/10 blur-3xl" />
              )}
              <p className="label relative flex items-center justify-between text-muted-foreground">
                {group.label}
                <span className="tabular-nums text-muted-foreground/60">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </p>
              <ul className="relative mt-5 flex flex-wrap gap-x-1.5 gap-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-background/70 px-2.5 py-1.5 text-[13px] leading-none text-foreground/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
