export type VeracityRating = 'FALSE' | 'MISLEADING' | 'UNPROVEN' | 'CONTEXT_NEEDED' | 'SUPPORTED';

export interface Assertion {
  id: string;
  statement: string;
  verdict: 'CONFIRMED' | 'CONTRADICTED' | 'UNSUBSTANTIATED' | 'PARTIALLY_TRUE';
  explanation: string;
}

export interface FactCheckRecord {
  id: string;
  publisher: string;
  publisherLogo?: string;
  url: string;
  verdictLabel: string;
  publishedDate: string;
  trustRating: number; // 0-100
  summary: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  timestampFormatted: string;
  title: string;
  description: string;
  platform: 'X (Twitter)' | 'WhatsApp' | 'Facebook' | 'YouTube' | 'News Blog' | 'Telegram' | 'Official Portal';
  platformIcon?: string;
  authorHandle?: string;
  reachEstimate?: string;
  isEarliestSource?: boolean;
  link?: string;
}

export interface NodeGraphItem {
  id: string;
  label: string;
  type: 'origin' | 'amplifier' | 'viral_cluster' | 'fact_check' | 'debunk';
  platform: string;
  detail: string;
  time: string;
  connections: string[]; // target node IDs
}

export interface EvidenceSource {
  id: string;
  title: string;
  domain: string;
  url: string;
  sourceType: 'Official Government' | 'Peer-Reviewed Study' | 'Mainstream News' | 'Independent Fact-Checker' | 'Social Post';
  trustScore: number;
  snippet: string;
  archivedUrl?: string;
}

export interface InvestigationReport {
  id: string;
  claimTitle: string;
  originalInput: string;
  inputType: 'text' | 'url';
  category: 'Government & Schemes' | 'Health & Science' | 'Politics & Elections' | 'Technology & AI' | 'International News' | 'General Viral';
  createdAt: string;
  confidenceScore: number; // e.g. 94%
  rating: VeracityRating;
  verdictTitle: string;
  executiveSummary: string;
  whyItSpread: string;
  whatWouldChangeVerdict: string;
  assertions: Assertion[];
  factChecks: FactCheckRecord[];
  timeline: TimelineEvent[];
  propagationGraph: NodeGraphItem[];
  sources: EvidenceSource[];
  viewsCount?: number;
}
