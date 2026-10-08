import type { PropagationNode } from "@/lib/sachai/types";
import { SectionHeading } from "./section-heading";

export function PropagationGraph({ nodes }: { nodes: PropagationNode[] }) {
  return (
    <section aria-labelledby="propagation-heading">
      <SectionHeading id="propagation-heading" aside="How the story spread">
        Propagation map
      </SectionHeading>

      <div className="relative mt-6 overflow-hidden rounded-lg border border-line bg-surface">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-30" />
        <ol className="relative grid gap-0 p-6 sm:p-8 lg:grid-cols-4 lg:gap-0">
          {nodes.map((node, index) => {
            const isFirst = index === 0;
            const isLast = index === nodes.length - 1;
            return (
              <li key={node.id} className="relative flex gap-4 pb-8 last:pb-0 lg:flex-col lg:gap-0 lg:pb-0 lg:pr-6">
                {!isLast && (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute left-[0.6875rem] top-6 bottom-0 w-px bg-line-strong lg:hidden"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-6 right-0 top-[0.6875rem] hidden h-px bg-line-strong lg:block"
                    >
                      <span className="absolute -right-px -top-[3px] size-[7px] rotate-45 border-r border-t border-line-strong" />
                    </span>
                  </>
                )}

                <span
                  className={`relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full border ${
                    isLast
                      ? "border-accent bg-accent/20"
                      : isFirst
                        ? "border-foreground/60 bg-background"
                        : "border-line-strong bg-background"
                  }`}
                >
                  <span
                    className={`size-2 rounded-full ${
                      isLast ? "bg-accent" : isFirst ? "bg-foreground" : "bg-muted"
                    }`}
                  />
                </span>

                <div className="min-w-0 flex-1 lg:mt-5">
                  <p
                    className={`font-mono text-[10px] uppercase tracking-[0.14em] ${
                      isLast ? "text-accent" : "text-subtle"
                    }`}
                  >
                    {node.stage}
                  </p>
                  <div className="mt-2 rounded-md border border-line bg-background/80 p-3.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-sm font-medium text-foreground">{node.label}</p>
                      {node.count !== undefined && (
                        <span className="font-mono text-xs text-muted">×{node.count}</span>
                      )}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{node.detail}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
