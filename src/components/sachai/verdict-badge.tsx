import type { VerdictLevel } from "@/lib/sachai/types";
import { VERDICT_STYLES } from "./verdict-styles";

interface VerdictBadgeProps {
  level: VerdictLevel;
  label?: string;
}

export function VerdictBadge({ level, label }: VerdictBadgeProps) {
  const style = VERDICT_STYLES[level];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] ${style.text} ${style.border} ${style.bg}`}
    >
      <span className={`size-1.5 rounded-full ${style.dot}`} aria-hidden="true" />
      {label ?? style.label}
    </span>
  );
}
