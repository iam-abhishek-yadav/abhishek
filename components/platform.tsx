"use client";

import { Fragment, useState } from "react";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { platform } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Platform() {
  const [selected, setSelected] = useState("agent");

  const layer =
    platform.layers.find((l) => l.nodes.some((n) => n.id === selected)) ??
    platform.layers[0];
  const current = {
    layer,
    node: layer.nodes.find((n) => n.id === selected) ?? layer.nodes[0],
  };

  return (
    <section id="platform" className="scroll-mt-20 py-20 sm:py-28">
      <Reveal>
        <SectionHeader
          index="02"
          label="Platform"
          title="One engineer, one platform,"
          accent="every layer."
          description={platform.intro}
        />
      </Reveal>

      <Reveal delay={80}>
        <div className="relative overflow-hidden rounded-3xl border border-border card-surface">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(180deg,black,transparent)]" />

          <div className="relative flex flex-col p-4 sm:p-6 lg:flex-row lg:items-stretch lg:p-8">
            {platform.layers.map((layer, li) => (
              <Fragment key={layer.id}>
                <div className="flex-1 lg:min-w-0">
                  <p className="label mb-3 flex items-center gap-2 text-muted-foreground">
                    <span className="tabular-nums text-mark">
                      {String(li + 1).padStart(2, "0")}
                    </span>
                    {layer.label}
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1">
                    {layer.nodes.map((node) => {
                      const isActive = node.id === selected;
                      return (
                        <button
                          key={node.id}
                          type="button"
                          onClick={() => setSelected(node.id)}
                          onMouseEnter={() => setSelected(node.id)}
                          aria-pressed={isActive}
                          className={cn(
                            "group rounded-xl border px-3 py-2.5 text-left transition-all duration-200",
                            isActive
                              ? "border-mark/60 bg-mark/10 shadow-[0_0_0_3px_hsl(var(--mark)/0.12)]"
                              : "border-border bg-background/70 hover:border-foreground/20"
                          )}
                        >
                          <span
                            className={cn(
                              "block text-[13px] font-medium leading-tight",
                              isActive ? "text-foreground" : "text-foreground/85"
                            )}
                          >
                            {node.name}
                          </span>
                          <span className="mt-1 block truncate font-mono text-[10.5px] text-muted-foreground">
                            {node.tech}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {li < platform.layers.length - 1 && (
                  <>
                    <div className="relative mx-auto my-3 h-6 w-px bg-border lg:hidden">
                      <span className="flow-y absolute inset-0" />
                    </div>
                    <div className="relative mx-3 mt-[2.1rem] hidden w-6 shrink-0 self-start lg:block xl:mx-4 xl:w-8">
                      <div className="relative h-px w-full bg-border">
                        <span className="flow-x absolute inset-0" />
                      </div>
                    </div>
                  </>
                )}
              </Fragment>
            ))}
          </div>

          <div className="relative border-t border-border bg-background/60 p-5 backdrop-blur sm:p-6 lg:px-8">
            <div
              key={current.node.id}
              className="animate-line-in grid gap-2 sm:grid-cols-[12rem_1fr] sm:gap-8"
              aria-live="polite"
            >
              <div>
                <p className="label text-mark">{current.layer.label}</p>
                <p className="mt-1.5 text-lg font-semibold tracking-tight">
                  {current.node.name}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] text-muted-foreground">
                  {current.node.tech}
                </p>
                <p className="mt-1.5 max-w-2xl text-[15px] leading-7 text-foreground/85">
                  {current.node.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
