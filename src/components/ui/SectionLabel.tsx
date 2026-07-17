export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-section-label uppercase tracking-[2px] text-text-faint">
      {children}
    </p>
  );
}
