import { FileSearch } from "lucide-react";
import { ClaimInput } from "../claim-input";

const OUTPUTS = ["Verdict & confidence", "Claim breakdown", "Evidence from sources", "How it spread"];

export function EmptyState() {
  return (
    <div className="mx-auto max-w-3xl py-6 sm:py-12">
      <ClaimInput autoFocus />

      <div className="mt-14 flex flex-col items-center rounded-lg border border-dashed border-line-strong px-6 py-14 text-center">
        <span className="flex size-12 items-center justify-center rounded-full border border-line-strong bg-surface">
          <FileSearch className="size-5 text-muted" aria-hidden="true" />
        </span>
        <h1 className="mt-5 font-serif text-3xl font-medium tracking-tight text-foreground">
          Start an investigation
        </h1>
        <p className="mt-3 max-w-sm text-pretty text-muted">
          Paste any claim above and SachAI will organize the evidence for you.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2" aria-label="What you will receive">
          {OUTPUTS.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-subtle"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
