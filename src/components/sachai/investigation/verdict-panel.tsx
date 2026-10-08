import type { InvestigationResult, VerdictLevel } from "@/lib/sachai/types";
import { VERDICT_STYLES } from "../verdict-styles";

const SCALE_ORDER: VerdictLevel[] = ["contradicted", "unverified", "partial", "verified"];

export function VerdictPanel({ verdict }: { verdict: InvestigationResult["verdict"] }) {
  const style = VERDICT_STYLES[verdict.level];

  return (
    <section
      aria-labelledby="verdict-heading"
      className={`relative overflow-hidden rounded-lg border ${style.border} bg-surface`}
    >
      <span className={`absolute inset-y-0 left-0 w-1 ${style.dot}`} aria-hidden="true" />
      <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Verdict</p>
          <h2
            id="verdict-heading"
            className={`mt-3 font-serif text-4xl font-medium uppercase tracking-tight sm:text-5xl ${style.text}`}
          >
            {verdict.label}
          </h2>
          <p className="mt-4 max-w-lg text-pretty leading-relaxed text-foreground/90">
            {verdict.summary}
          </p>
        </div>

        <div className="md:text-right">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Confidence</p>
          <p className="mt-1 font-serif text-6xl font-medium leading-none text-foreground">
            {verdict.confidence}
            <span className="text-3xl text-muted">%</span>
          </p>
        </div>
      </div>

      <div className="border-t border-line px-6 py-4 sm:px-8">
        <div
          className="grid grid-cols-4 gap-1"
          role="img"
          aria-label={`Verdict scale position: ${style.label}`}
        >
          {SCALE_ORDER.map((level) => {
            const s = VERDICT_STYLES[level];
            const active = level === verdict.level;
            return (
              <div key={level} className="flex flex-col gap-2">
                <span className={`h-1 rounded-full ${active ? s.dot : "bg-line-strong"}`} />
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.1em] ${
                    active ? s.text : "text-subtle"
                  }`}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
