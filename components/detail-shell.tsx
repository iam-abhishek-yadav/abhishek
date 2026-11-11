import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function DetailShell({
  backHref,
  backLabel,
  children,
}: {
  backHref: string;
  backLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-svh flex-col">
      <Nav />
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-grid mask-fade" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] glow-top" />
        <article className="relative mx-auto w-full max-w-5xl px-4 pt-10 pb-20 sm:px-6 sm:pt-16 sm:pb-28">
          <Link
            href={backHref}
            className="group label inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5"
              strokeWidth={1.75}
            />
            {backLabel}
          </Link>
          {children}
        </article>
      </div>
      <SiteFooter />
    </div>
  );
}

export function SideBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="card-surface rounded-2xl border border-border p-5">
      <p className="label text-muted-foreground">{label}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}
