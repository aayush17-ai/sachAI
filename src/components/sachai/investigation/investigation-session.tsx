"use client";

import { useEffect, useState } from "react";
import { SAMPLE_INVESTIGATION } from "@/lib/sachai/sample-data";
import { EmptyState } from "./empty-state";
import { LoadingState, LOADING_STAGES } from "./loading-state";
import { InvestigationResults } from "./investigation-results";

const STAGE_DURATION_MS = 850;

/**
 * UI-only session: simulates the multi-stage loading sequence and renders
 * sample results. To integrate, replace the timer with your existing
 * investigation call, drive `stage` from its progress, and pass the mapped
 * result into <InvestigationResults />.
 */
export function InvestigationSession({ claim }: { claim?: string }) {
  const [stage, setStage] = useState(0);
  const isComplete = stage >= LOADING_STAGES.length;

  useEffect(() => {
    if (!claim || isComplete) return;
    const timer = setTimeout(() => setStage((s) => s + 1), STAGE_DURATION_MS);
    return () => clearTimeout(timer);
  }, [claim, stage, isComplete]);

  if (!claim) return <EmptyState />;
  if (!isComplete) return <LoadingState claim={claim} stage={stage} />;

  const isSampleClaim = claim === SAMPLE_INVESTIGATION.claim;

  return (
    <InvestigationResults
      result={{ ...SAMPLE_INVESTIGATION, claim }}
      notice={
        isSampleClaim ? null : (
          <p className="mt-6 rounded-md border border-line bg-surface px-4 py-3 text-sm text-muted">
            Preview mode: showing sample evidence. Results will reflect your claim once the
            investigation pipeline is connected.
          </p>
        )
      }
    />
  );
}
