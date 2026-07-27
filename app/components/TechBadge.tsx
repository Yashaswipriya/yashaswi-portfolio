import { cn } from "../lib/utils";

interface TechBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function TechBadge({
  children,
  className,
}: TechBadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full border border-[var(--border)]/20 bg-[var(--muted)] px-3 py-1.5 text-xs font-medium tracking-wide text-[var(--primary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border)] hover:bg-[var(--accent)]/15",
        className
      )}
    >
      {children}
    </span>
  );
}