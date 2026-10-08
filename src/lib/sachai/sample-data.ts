import type { InvestigationResult } from "./types";

export const SAMPLE_CLAIM =
  "Prakash Raj, Dhruv Rathee lead Bengaluru CJP protest, demand scrapping of SIR, CEC's resignation";

export const EXAMPLE_CLAIMS = [
  { label: "News claim", text: SAMPLE_CLAIM },
  {
    label: "Viral post",
    text: "Forwarded many times: RBI will stop accepting ₹500 notes printed before 2020 from next month.",
  },
  {
    label: "Political claim",
    text: "The Election Commission removed 2 crore names from voter rolls in a single state last year.",
  },
];

export const SAMPLE_INVESTIGATION: InvestigationResult = {
  claim: SAMPLE_CLAIM,
  verdict: {
    level: "verified",
    label: "Strongly corroborated",
    confidence: 92,
    summary: "Multiple independent sources report the same event and key details.",
  },
  assertions: [
    { id: "a1", text: "Prakash Raj participated in the protest", status: "verified" },
    { id: "a2", text: "Dhruv Rathee participated in the protest", status: "verified" },
    { id: "a3", text: "The protest took place in Bengaluru", status: "verified" },
    { id: "a4", text: "SIR was discussed and its scrapping demanded", status: "verified" },
    { id: "a5", text: "Protesters demanded the CEC's resignation", status: "partial" },
  ],
  evidence: [
    {
      id: "e1",
      publisher: "The Hindu",
      title: "Citizens gather at Freedom Park against voter roll revision",
      publishedAt: "08 Oct 2026",
      summary:
        "Report names Prakash Raj and Dhruv Rathee among speakers and describes demands to withdraw the Special Intensive Revision.",
      relation: "supports",
    },
    {
      id: "e2",
      publisher: "Deccan Herald",
      title: "CJP rally in Bengaluru draws actors, activists and YouTubers",
      publishedAt: "08 Oct 2026",
      summary:
        "Confirms location, organiser and both participants. Quotes speakers criticising the Election Commission.",
      relation: "supports",
    },
    {
      id: "e3",
      publisher: "The Indian Express",
      title: "Opposition voices join protest over electoral roll process",
      publishedAt: "08 Oct 2026",
      summary:
        "Covers the SIR demand in detail. Mentions criticism of the CEC but does not explicitly report a resignation demand.",
      relation: "partial",
    },
    {
      id: "e4",
      publisher: "Regional news portal",
      title: "Protest at Freedom Park was ‘small and unorganised’",
      publishedAt: "09 Oct 2026",
      summary:
        "Disputes the framing that the two public figures ‘led’ the protest, describing them as invited speakers.",
      relation: "contradicts",
    },
    {
      id: "e5",
      publisher: "Social media thread",
      title: "Unattributed video clip of protest stage",
      publishedAt: "08 Oct 2026",
      summary:
        "Shows a crowd and banners but the clip has no timestamp or verifiable location metadata.",
      relation: "insufficient",
    },
  ],
  sources: { analyzed: 7, independent: 4, supporting: 5, contradicting: 1 },
  propagation: [
    {
      id: "p1",
      stage: "First source found",
      label: "Local news wire",
      detail: "08 Oct, 11:40",
    },
    {
      id: "p2",
      stage: "News reports",
      label: "National outlets",
      detail: "Picked up within 3 hours",
      count: 4,
    },
    {
      id: "p3",
      stage: "Social posts",
      label: "Shares & reposts",
      detail: "Headline reworded as ‘lead’",
      count: 38,
    },
    {
      id: "p4",
      stage: "Current claim",
      label: "Submitted to SachAI",
      detail: "Matches social wording",
    },
  ],
  timeline: [
    {
      id: "t1",
      date: "08 Oct",
      title: "First report",
      detail: "A local wire report describes the protest at Freedom Park.",
    },
    {
      id: "t2",
      date: "08 Oct",
      title: "Additional coverage",
      detail: "National outlets publish independent reports with photographs.",
    },
    {
      id: "t3",
      date: "08 Oct",
      title: "Social circulation",
      detail: "Shortened headline spreads across X and WhatsApp forwards.",
    },
    {
      id: "t4",
      date: "Current",
      title: "Claim submitted to SachAI",
      detail: "Investigation started and evidence collected.",
      isCurrent: true,
    },
  ],
  explanation:
    "Most of the central claim is supported by multiple reports. The available evidence confirms the event and the main participants, while some specific wording requires additional verification. In particular, ‘lead’ overstates their role according to one source, and only some reports mention a demand for the CEC’s resignation.",
  trust: {
    strength: "Strong",
    lastChecked: "Just now",
  },
};
