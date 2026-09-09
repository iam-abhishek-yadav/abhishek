import { letter, personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section id="me" className="scroll-mt-20 py-16 sm:py-24 lg:py-28">
      <p className="font-mono text-[11px] tracking-[0.22em] text-mark">
        {letter.kicker}
      </p>
      <h1 className="mt-6 font-display text-[2.15rem] font-medium italic leading-[1.15] tracking-tight sm:text-5xl sm:leading-[1.12] lg:text-[3.5rem] lg:leading-[1.1]">
        {letter.opening}
      </h1>
      <p className="sr-only">{personalInfo.name}</p>

      <div className="mt-10 max-w-2xl space-y-6 sm:mt-12">
        {letter.body.map((paragraph) => (
          <p
            key={paragraph.slice(0, 32)}
            className="text-[15px] leading-8 text-muted-foreground sm:text-lg sm:leading-9"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <p className="mt-10 font-display text-xl italic text-foreground sm:text-2xl">
        — {letter.signoff}
      </p>
    </section>
  );
}
