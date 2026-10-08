const STEPS = [
  {
    code: "01",
    label: "Claim",
    body: "“Prakash Raj, Dhruv Rathee lead Bengaluru protest…”",
    meta: "5 assertions extracted",
  },
  {
    code: "02",
    label: "Source",
    body: "Earliest report traced to a local news wire",
    meta: "08 Oct · 11:40",
  },
  {
    code: "03",
    label: "Evidence",
    body: "7 reports collected from 4 independent outlets",
    meta: "5 support · 1 contradicts",
  },
  {
    code: "04",
    label: "Cross-check",
    body: "Participants, location and demands compared",
    meta: "1 wording mismatch",
  },
];

export function InvestigationFlow() {
  return (
    <figure
      aria-label="Example investigation workflow: claim, source, evidence, cross-check, verdict"
      className="relative self-start rounded-lg border border-line bg-surface/70 lg:mt-6"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          Case file · #SA-2048
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-subtle">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Live trace
        </span>
      </div>

      <ol className="relative px-5 py-5">
        <span
          aria-hidden="true"
          className="absolute bottom-16 left-[2.05rem] top-8 w-px overflow-hidden bg-line-strong"
        >
          <span className="animate-trace absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-accent to-transparent" />
        </span>

        {STEPS.map((step) => (
          <li key={step.code} className="relative flex gap-4 pb-5">
            <span className="relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full border border-line-strong bg-background font-mono text-[10px] text-muted">
              {step.code}
            </span>
            <div className="min-w-0 flex-1 border-b border-dashed border-line pb-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-foreground">
                {step.label}
              </p>
              <p className="mt-1 text-sm leading-snug text-muted">{step.body}</p>
              <p className="mt-1.5 font-mono text-[11px] text-subtle">{step.meta}</p>
            </div>
          </li>
        ))}

        <li className="relative flex gap-4">
          <span className="relative z-10 flex size-6 shrink-0 items-center justify-center rounded-full border border-verified/60 bg-verified/15 font-mono text-[10px] text-verified">
            05
          </span>
          <div className="flex-1 rounded-md border border-verified/30 bg-verified/[0.06] p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-verified">
              Verdict
            </p>
            <div className="mt-1 flex items-baseline justify-between gap-3">
              <p className="font-serif text-xl text-foreground">Strongly corroborated</p>
              <p className="font-mono text-sm text-verified">92%</p>
            </div>
          </div>
        </li>
      </ol>
    </figure>
  );
}
