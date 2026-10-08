import type { TimelineEntry } from "@/lib/sachai/types";
import { SectionHeading } from "./section-heading";

export function ClaimTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <section aria-labelledby="timeline-heading">
      <SectionHeading id="timeline-heading">Claim timeline</SectionHeading>
      <ol className="mt-5">
        {entries.map((entry, index) => {
          const isLast = index === entries.length - 1;
          return (
            <li key={entry.id} className="relative grid grid-cols-[4rem_1fr] gap-4 pb-7 last:pb-0">
              <span
                className={`pt-0.5 font-mono text-[11px] uppercase tracking-[0.08em] ${
                  entry.isCurrent ? "text-accent" : "text-subtle"
                }`}
              >
                {entry.date}
              </span>
              <div className="relative pl-6">
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[4.5px] top-4 -bottom-7 w-px bg-line-strong"
                  />
                )}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 size-2.5 rounded-full border ${
                    entry.isCurrent
                      ? "border-accent bg-accent ring-4 ring-accent/15"
                      : "border-line-strong bg-background"
                  }`}
                />
                <p className="text-sm font-medium text-foreground">{entry.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{entry.detail}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
