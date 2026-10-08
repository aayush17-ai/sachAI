import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { VerdictLevel } from "@/lib/sachai/types";
import { SAMPLE_CLAIM } from "@/lib/sachai/sample-data";
import { VerdictBadge } from "./verdict-badge";

const RECENT: { claim: string; level: VerdictLevel; verdict: string; sources: number; date: string }[] = [
  {
    claim: SAMPLE_CLAIM,
    level: "verified",
    verdict: "Strongly corroborated",
    sources: 7,
    date: "08 Oct",
  },
  {
    claim: "RBI will stop accepting ₹500 notes printed before 2020 from next month.",
    level: "contradicted",
    verdict: "Contradicted",
    sources: 5,
    date: "07 Oct",
  },
  {
    claim: "New metro line between Whitefield and the airport opens to the public this week.",
    level: "partial",
    verdict: "Partially verified",
    sources: 4,
    date: "06 Oct",
  },
  {
    claim: "Video shows flooding inside a newly built terminal at the city airport.",
    level: "unverified",
    verdict: "Unverified",
    sources: 2,
    date: "05 Oct",
  },
];

export function RecentInvestigations() {
  return (
    <section id="investigations" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          Investigations
        </p>
        <h2 className="mt-4 max-w-lg text-balance font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
          Recently investigated claims.
        </h2>

        <ul className="mt-12 divide-y divide-line border-y border-line">
          {RECENT.map((item) => (
            <li key={item.claim}>
              <Link
                href={`/investigate?q=${encodeURIComponent(item.claim)}`}
                className="group grid gap-3 py-6 transition-colors hover:bg-surface/60 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-8 sm:px-4"
              >
                <span className="font-mono text-xs text-subtle">{item.date}</span>
                <span className="text-pretty font-serif text-lg leading-snug text-foreground sm:text-xl">
                  {item.claim}
                </span>
                <span className="flex items-center gap-4">
                  <VerdictBadge level={item.level} label={item.verdict} />
                  <span className="hidden font-mono text-xs text-subtle md:inline">
                    {item.sources} sources
                  </span>
                  <ArrowUpRight
                    className="size-4 text-subtle transition-colors group-hover:text-foreground"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
