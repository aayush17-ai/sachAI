interface SectionHeadingProps {
  id?: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
}

export function SectionHeading({ id, children, aside }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
      <h2 id={id} className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
        {children}
      </h2>
      {aside && <div className="font-mono text-[11px] text-subtle">{aside}</div>}
    </div>
  );
}
