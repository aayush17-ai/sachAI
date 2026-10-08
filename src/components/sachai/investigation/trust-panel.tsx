import type { InvestigationResult } from "@/lib/sachai/types";

interface TrustPanelProps {
  trust: InvestigationResult["trust"];
  sources: InvestigationResult["sources"];
}

export function TrustPanel({ trust, sources }: TrustPanelProps) {
  const items = [
    { label: "Evidence strength", value: trust.strength, highlight: true },
    { label: "Sources", value: String(sources.analyzed) },
    { label: "Independent reports", value: String(sources.independent) },
    { label: "Last checked", value: trust.lastChecked },
  ];

  return (
    <section aria-label="Investigation trust summary" className="rounded-lg border border-line bg-surface">
      <dl className="grid grid-cols-2">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={`p-4 ${index % 2 === 1 ? "border-l border-line" : ""} ${
              index > 1 ? "border-t border-line" : ""
            }`}
          >
            <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-subtle">
              {item.label}
            </dt>
            <dd
              className={`mt-1.5 text-lg font-medium ${
                item.highlight ? "text-verified" : "text-foreground"
              }`}
            >
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
