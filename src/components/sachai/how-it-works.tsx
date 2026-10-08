const STEPS = [
  {
    number: "01",
    title: "Paste a claim",
    body: "A headline, a forwarded message, a quote from a post. SachAI splits it into the individual facts it asserts.",
  },
  {
    number: "02",
    title: "Find the evidence",
    body: "We search published reporting and public records for coverage of each fact, and trace where the story first appeared.",
  },
  {
    number: "03",
    title: "Cross-check sources",
    body: "Independent reports are compared side by side. Agreement, contradictions and missing details are all surfaced.",
  },
  {
    number: "04",
    title: "Understand the verdict",
    body: "You get a clear verdict, a plain-language explanation, and every source behind it, so you can judge for yourself.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              How it works
            </p>
            <h2 className="mt-4 max-w-lg text-balance font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              From a single claim to a full case file.
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-muted">
            No black-box answers. Every verdict is built from evidence you can open and read.
          </p>
        </div>

        <ol className="mt-14 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li
              key={step.number}
              className={`border-b border-line py-8 sm:px-6 sm:first:pl-0 lg:border-b-0 ${
                index > 0 ? "lg:border-l" : ""
              } ${index % 2 === 1 ? "sm:border-l lg:border-l" : ""}`}
            >
              <span className="font-mono text-sm text-accent">{step.number}</span>
              <h3 className="mt-6 text-lg font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
