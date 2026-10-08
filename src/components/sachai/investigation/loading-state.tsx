import { Check, Loader } from "lucide-react";

export const LOADING_STAGES = [
  "Searching sources",
  "Finding relevant reports",
  "Comparing evidence",
  "Checking contradictions",
  "Building investigation",
];

interface LoadingStateProps {
  claim: string;
  /** Index of the stage currently in progress. */
  stage: number;
}

export function LoadingState({ claim, stage }: LoadingStateProps) {
  const progress = Math.min(((stage + 0.5) / LOADING_STAGES.length) * 100, 100);

  return (
    <div className="mx-auto max-w-3xl py-6 sm:py-12" aria-busy="true">
      <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        <span className="h-px w-6 bg-accent" aria-hidden="true" />
        Investigation in progress
      </p>
      <p className="mt-5 text-pretty font-serif text-2xl leading-snug text-foreground sm:text-3xl">
        “{claim}”
      </p>

      <div className="mt-10 rounded-lg border border-line bg-surface">
        <div className="relative h-px overflow-hidden bg-line">
          <span
            className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <ol className="divide-y divide-line">
          {LOADING_STAGES.map((label, index) => {
            const done = index < stage;
            const active = index === stage;
            return (
              <li
                key={label}
                className={`relative flex items-center gap-4 overflow-hidden px-5 py-4 transition-colors ${
                  active ? "bg-surface-raised" : ""
                }`}
              >
                {active && (
                  <span
                    aria-hidden="true"
                    className="animate-scan absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-accent/[0.06] to-transparent"
                  />
                )}
                <span
                  className={`flex size-6 shrink-0 items-center justify-center rounded-full border ${
                    done
                      ? "border-verified/50 bg-verified/10"
                      : active
                        ? "border-accent/60"
                        : "border-line-strong"
                  }`}
                >
                  {done ? (
                    <Check className="size-3.5 text-verified" strokeWidth={2.5} aria-hidden="true" />
                  ) : active ? (
                    <Loader className="size-3.5 animate-spin text-accent" aria-hidden="true" />
                  ) : (
                    <span className="size-1 rounded-full bg-subtle" aria-hidden="true" />
                  )}
                </span>
                <span
                  className={`flex-1 text-sm ${
                    done ? "text-muted" : active ? "text-foreground" : "text-subtle"
                  }`}
                >
                  {label}
                  {active && "…"}
                </span>
                <span className="font-mono text-[11px] text-subtle">
                  {done ? "Done" : active ? "Running" : String(index + 1).padStart(2, "0")}
                </span>
              </li>
            );
          })}
        </ol>
      </div>

      <p className="sr-only" aria-live="polite">
        {LOADING_STAGES[Math.min(stage, LOADING_STAGES.length - 1)]}
      </p>
    </div>
  );
}
