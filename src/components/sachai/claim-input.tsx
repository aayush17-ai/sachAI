"use client";

import { useId, useState, type FormEvent, type KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { EXAMPLE_CLAIMS } from "@/lib/sachai/sample-data";

interface ClaimInputProps {
  defaultValue?: string;
  /** Override navigation, e.g. to call your existing investigation pipeline directly. */
  onSubmit?: (claim: string) => void;
  autoFocus?: boolean;
}

export function ClaimInput({ defaultValue = "", onSubmit, autoFocus }: ClaimInputProps) {
  const router = useRouter();
  const [value, setValue] = useState(defaultValue);
  const inputId = useId();
  const hintId = useId();
  const trimmed = value.trim();

  function submit() {
    if (!trimmed) return;
    if (onSubmit) {
      onSubmit(trimmed);
      return;
    }
    router.push(`/investigate?q=${encodeURIComponent(trimmed)}`);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    submit();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.nativeEvent.isComposing || event.keyCode === 229) return;
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      submit();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="rounded-lg border border-line-strong bg-surface transition-colors focus-within:border-accent/70">
        <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
          <label
            htmlFor={inputId}
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
          >
            Claim to investigate
          </label>
          <span className="font-mono text-[11px] text-subtle" aria-live="polite">
            {value.length > 0 ? `${value.length} chars` : "Text or headline"}
          </span>
        </div>
        <textarea
          id={inputId}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={4}
          autoFocus={autoFocus}
          aria-describedby={hintId}
          placeholder="Paste a headline, social media post, article claim, or message..."
          className="block w-full resize-none bg-transparent px-4 py-4 text-base leading-relaxed text-foreground placeholder:text-subtle focus:outline-none sm:text-lg"
        />
        <div className="flex flex-col gap-3 border-t border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p id={hintId} className="text-xs text-subtle">
            <span className="hidden sm:inline">Press </span>
            <kbd className="hidden rounded border border-line-strong px-1.5 py-0.5 font-mono text-[10px] text-muted sm:inline">
              Ctrl + Enter
            </kbd>
            <span className="hidden sm:inline"> to submit. </span>
            We never post on your behalf.
          </p>
          <button
            type="submit"
            disabled={!trimmed}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent/85 disabled:cursor-not-allowed disabled:bg-line-strong disabled:text-subtle"
          >
            Investigate Claim
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs text-subtle">Try an example</span>
        {EXAMPLE_CLAIMS.map((example) => (
          <button
            key={example.label}
            type="button"
            onClick={() => setValue(example.text)}
            className="rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors hover:border-line-strong hover:text-foreground"
          >
            {example.label}
          </button>
        ))}
      </div>
    </form>
  );
}
