import { Check, CircleHelp, Minus, X } from "lucide-react";
import type { ClaimAssertion, VerdictLevel } from "@/lib/sachai/types";
import { VERDICT_STYLES } from "../verdict-styles";
import { SectionHeading } from "./section-heading";

const ICONS: Record<VerdictLevel, typeof Check> = {
  verified: Check,
  partial: Minus,
  unverified: CircleHelp,
  contradicted: X,
};

export function ClaimBreakdown({ assertions }: { assertions: ClaimAssertion[] }) {
  const confirmed = assertions.filter((a) => a.status === "verified").length;

  return (
    <section aria-labelledby="breakdown-heading">
      <SectionHeading
        id="breakdown-heading"
        aside={`${confirmed} of ${assertions.length} confirmed`}
      >
        Claim breakdown
      </SectionHeading>
      <ol className="divide-y divide-line">
        {assertions.map((assertion, index) => {
          const style = VERDICT_STYLES[assertion.status];
          const Icon = ICONS[assertion.status];
          return (
            <li key={assertion.id} className="flex items-center gap-4 py-4">
              <span className="w-5 font-mono text-[11px] text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className={`flex size-6 shrink-0 items-center justify-center rounded-full border ${style.border} ${style.bg}`}
              >
                <Icon className={`size-3.5 ${style.text}`} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span className="flex-1 text-pretty text-foreground">{assertion.text}</span>
              <span
                className={`hidden font-mono text-[10px] uppercase tracking-[0.12em] sm:inline ${style.text}`}
              >
                {style.label}
              </span>
              <span className="sr-only sm:hidden">{style.label}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
