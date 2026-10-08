import { ArrowUpRight } from "lucide-react";
import type { EvidenceItem } from "@/lib/sachai/types";
import { RELATION_STYLES, VERDICT_STYLES } from "../verdict-styles";
import { SectionHeading } from "./section-heading";

export function EvidenceList({ evidence }: { evidence: EvidenceItem[] }) {
  return (
    <section aria-labelledby="evidence-heading">
      <SectionHeading id="evidence-heading" aside={`${evidence.length} items`}>
        Evidence
      </SectionHeading>
      <ul className="mt-5 flex flex-col gap-4">
        {evidence.map((item) => (
          <li key={item.id}>
            <EvidenceCard item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function EvidenceCard({ item }: { item: EvidenceItem }) {
  const relation = RELATION_STYLES[item.relation];
  const style = VERDICT_STYLES[relation.level];

  return (
    <article className="group rounded-lg border border-line bg-surface p-5 transition-colors hover:border-line-strong sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-foreground">{item.publisher}</span>
          <span className="h-3 w-px bg-line-strong" aria-hidden="true" />
          <time className="font-mono text-[11px] text-subtle">{item.publishedAt}</time>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] ${style.text}`}
        >
          <span className={`size-1.5 rounded-full ${style.dot}`} aria-hidden="true" />
          {relation.label}
        </span>
      </div>

      <h3 className="mt-3 text-pretty font-serif text-xl leading-snug text-foreground">
        {item.title}
      </h3>

      <p className={`mt-3 border-l-2 pl-4 text-sm leading-relaxed text-muted ${style.border}`}>
        {item.summary}
      </p>

      <div className="mt-4">
        <button
          type="button"
          disabled={!item.url}
          aria-disabled={!item.url}
          title={item.url ? undefined : "Source link unavailable in preview"}
          className="inline-flex items-center gap-1 text-xs font-medium text-accent disabled:cursor-not-allowed disabled:opacity-80"
        >
          Open source
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
