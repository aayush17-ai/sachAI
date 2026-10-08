import type { EvidenceRelation, VerdictLevel } from "@/lib/sachai/types";

export const VERDICT_STYLES: Record<
  VerdictLevel,
  { label: string; text: string; bg: string; border: string; dot: string }
> = {
  verified: {
    label: "Verified",
    text: "text-verified",
    bg: "bg-verified/10",
    border: "border-verified/40",
    dot: "bg-verified",
  },
  partial: {
    label: "Partially verified",
    text: "text-partial",
    bg: "bg-partial/10",
    border: "border-partial/40",
    dot: "bg-partial",
  },
  unverified: {
    label: "Unverified",
    text: "text-unverified",
    bg: "bg-unverified/10",
    border: "border-unverified/40",
    dot: "bg-unverified",
  },
  contradicted: {
    label: "Contradicted",
    text: "text-contradicted",
    bg: "bg-contradicted/10",
    border: "border-contradicted/40",
    dot: "bg-contradicted",
  },
};

export const RELATION_STYLES: Record<
  EvidenceRelation,
  { label: string; level: VerdictLevel }
> = {
  supports: { label: "Supports claim", level: "verified" },
  partial: { label: "Partially supports", level: "partial" },
  insufficient: { label: "Not enough evidence", level: "unverified" },
  contradicts: { label: "Contradicts", level: "contradicted" },
};
