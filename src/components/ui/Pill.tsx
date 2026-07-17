export default function Pill({
  children,
  highlighted = false,
  className = '',
}: {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-pill border px-2.5 py-1 font-mono text-[11px] tracking-wide ${
        highlighted
          ? 'border-border-strong bg-surface-elevated text-text-primary'
          : 'border-border bg-surface text-text-secondary'
      } ${className}`}
    >
      {children}
    </span>
  );
}
