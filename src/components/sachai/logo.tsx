export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="relative flex size-7 items-center justify-center rounded-[5px] border border-line-strong bg-surface"
      >
        <span className="absolute left-1.5 top-1.5 size-1.5 rounded-full bg-accent" />
        <span className="absolute bottom-1.5 right-1.5 size-1.5 rounded-full bg-foreground" />
        <span className="h-px w-3.5 rotate-45 bg-muted" />
      </span>
      <span className="font-serif text-xl font-medium tracking-tight text-foreground">
        Sach<span className="text-accent">AI</span>
      </span>
    </span>
  );
}
