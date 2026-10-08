import type { InvestigationResult } from "@/lib/sachai/types";
import { ClaimHeader } from "./claim-header";
import { VerdictPanel } from "./verdict-panel";
import { VerdictExplanation } from "./verdict-explanation";
import { ClaimBreakdown } from "./claim-breakdown";
import { EvidenceList } from "./evidence-list";
import { SourceSummary } from "./source-summary";
import { TrustPanel } from "./trust-panel";
import { PropagationGraph } from "./propagation-graph";
import { ClaimTimeline } from "./claim-timeline";

interface InvestigationResultsProps {
  result: InvestigationResult;
  notice?: React.ReactNode;
}

export function InvestigationResults({ result, notice }: InvestigationResultsProps) {
  return (
    <article className="animate-rise-in">
      <ClaimHeader claim={result.claim} />

      {notice}

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
        <div className="flex flex-col gap-12">
          <VerdictPanel verdict={result.verdict} />
          <VerdictExplanation explanation={result.explanation} />
          <ClaimBreakdown assertions={result.assertions} />
        </div>
        <aside className="flex flex-col gap-10" aria-label="Investigation summary">
          <TrustPanel trust={result.trust} sources={result.sources} />
          <SourceSummary sources={result.sources} />
        </aside>
      </div>

      <div className="mt-16">
        <PropagationGraph nodes={result.propagation} />
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <EvidenceList evidence={result.evidence} />
        <div className="lg:sticky lg:top-24 lg:self-start">
          <ClaimTimeline entries={result.timeline} />
        </div>
      </div>
    </article>
  );
}
