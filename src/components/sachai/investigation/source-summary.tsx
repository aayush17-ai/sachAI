import type { SourceSummary as SourceSummaryData } from "@/lib/sachai/types";
import { SectionHeading } from "./section-heading";

export function SourceSummary({ sources }: { sources: SourceSummaryData }) {
  const other = Math.max(sources.analyzed - sources.supporting - sources.contradicting, 0);
  const pct = (n: number) => `${(n / Math.max(sources.analyzed, 1)) * 100}%`;

  const rows = [
    { label: "Sources analyzed", value: sources.analyzed },
    { label: "Independent sources", value: sources.independent },
    { label: "Supporting", value: sources.supporting, dot: "bg-verified" },
    { label: "Contradicting", value: sources.contradicting, dot: "bg-contradicted" },
  ];

  return (
    <section aria-labelledby="sources-heading">
      <SectionHeading id="sources-heading">Source summary</SectionHeading>

      <div
        className="mt-5 flex h-2 overflow-hidden rounded-full bg-line"
        role="img"
        aria-label={`${sources.supporting} supporting, ${sources.contradicting} contradicting, ${other} other of ${sources.analyzed} sources`}
      >
        <span className="bg-verified" style={{ width: pct(sources.supporting) }} />
        <span className="bg-line-strong" style={{ width: pct(other) }} />
        <span className="bg-contradicted" style={{ width: pct(sources.contradicting) }} />
      </div>

      <dl className="mt-4 divide-y divide-line">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between py-2.5">
            <dt className="flex items-center gap-2 text-sm text-muted">
              {row.dot && <span className={`size-1.5 rounded-full ${row.dot}`} aria-hidden="true" />}
              {row.label}
            </dt>
            <dd className="font-mono text-sm text-foreground">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
