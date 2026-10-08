import { ClaimInput } from "./claim-input";
import { InvestigationFlow } from "./investigation-flow";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)] opacity-40"
      />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <div>
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            Claim investigation platform
          </p>
          <h1 className="mt-6 text-balance font-serif text-5xl font-medium leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Know the claim.
            <br />
            <span className="italic text-muted">Follow the evidence.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Investigate news, viral posts and public claims by tracing their sources, comparing
            evidence and understanding how the story spread.
          </p>
          <div className="mt-10">
            <ClaimInput />
          </div>
        </div>

        <InvestigationFlow />
      </div>
    </section>
  );
}
