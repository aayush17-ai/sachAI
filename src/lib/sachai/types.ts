/**
 * Presentation-layer types for the SachAI UI.
 * Map your existing investigation pipeline output onto these shapes
 * before passing it to <InvestigationResults />.
 */

export type VerdictLevel = "verified" | "partial" | "unverified" | "contradicted";

export type EvidenceRelation = "supports" | "partial" | "contradicts" | "insufficient";

export interface ClaimAssertion {
  id: string;
  text: string;
  status: VerdictLevel;
}

export interface EvidenceItem {
  id: string;
  publisher: string;
  title: string;
  publishedAt: string;
  summary: string;
  relation: EvidenceRelation;
  url?: string;
}

export interface PropagationNode {
  id: string;
  stage: string;
  label: string;
  detail: string;
  count?: number;
}

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  detail: string;
  isCurrent?: boolean;
}

export interface SourceSummary {
  analyzed: number;
  independent: number;
  supporting: number;
  contradicting: number;
}

export interface InvestigationResult {
  claim: string;
  verdict: {
    level: VerdictLevel;
    label: string;
    confidence: number;
    summary: string;
  };
  assertions: ClaimAssertion[];
  evidence: EvidenceItem[];
  sources: SourceSummary;
  propagation: PropagationNode[];
  timeline: TimelineEntry[];
  explanation: string;
  trust: {
    strength: string;
    lastChecked: string;
  };
}
