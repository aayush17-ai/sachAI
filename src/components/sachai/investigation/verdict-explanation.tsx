import { SectionHeading } from "./section-heading";

export function VerdictExplanation({ explanation }: { explanation: string }) {
  return (
    <section aria-labelledby="why-heading">
      <SectionHeading id="why-heading">Why this verdict?</SectionHeading>
      <p className="mt-5 text-pretty font-serif text-xl leading-relaxed text-foreground/90 sm:text-[1.375rem]">
        {explanation}
      </p>
    </section>
  );
}
