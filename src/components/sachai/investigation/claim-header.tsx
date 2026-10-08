import Link from "next/link";
import { RotateCcw } from "lucide-react";

interface ClaimHeaderProps {
  claim: string;
  caseId?: string;
}

export function ClaimHeader({ claim, caseId = "SA-2048" }: ClaimHeaderProps) {
  return (
    <header className="border-b border-line pb-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-6 bg-accent" aria-hidden="true" />
          Claim investigation
        </p>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] text-subtle">Case #{caseId}</span>
          <Link
            href="/investigate"
            className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:border-line-strong hover:text-foreground"
          >
            <RotateCcw className="size-3.5" aria-hidden="true" />
            New investigation
          </Link>
        </div>
      </div>
      <blockquote className="mt-6">
        <p className="max-w-4xl text-pretty font-serif text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
          <span className="text-subtle" aria-hidden="true">
            “
          </span>
          {claim}
          <span className="text-subtle" aria-hidden="true">
            ”
          </span>
        </p>
      </blockquote>
    </header>
  );
}
