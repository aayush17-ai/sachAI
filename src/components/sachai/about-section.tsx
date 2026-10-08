import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { VerdictLevel } from "@/lib/sachai/types";
import { VerdictBadge } from "./verdict-badge";

const SCALE: { level: VerdictLevel; body: string }[] = [
  { level: "verified", body: "Independent sources agree on the key details." },
  { level: "partial", body: "The core is supported, but some details are not." },
  { level: "unverified", body: "Not enough reliable evidence either way." },
  { level: "contradicted", body: "Credible evidence directly disputes the claim." },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">About</p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Evidence matters more than the answer.
          </h2>
          <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted">
            <p>
              Misinformation spreads because it is quick to share and slow to check. SachAI makes
              checking fast, without asking you to simply trust a verdict.
            </p>
            <p>
              Every investigation shows what was claimed, what was found, where the story came
              from and how confident we are, so you can make up your own mind.
            </p>
          </div>
          <Link
            href="/investigate"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-line-strong underline-offset-4 hover:decoration-accent"
          >
            Start an investigation
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            The verdict scale
          </h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {SCALE.map((item) => (
              <li
                key={item.level}
                className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <VerdictBadge level={item.level} />
                <p className="text-sm text-muted sm:text-right">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
