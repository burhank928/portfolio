import Link from 'next/link';

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'filled' | 'ghost';
  external?: boolean;
  className?: string;
};

export default function Button({ href, children, variant = 'filled', external = false, className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-button px-5 py-2.5 font-mono text-[12px] tracking-wide transition-colors duration-200';
  const styles =
    variant === 'filled'
      ? 'bg-text-primary text-bg hover:bg-white'
      : 'border border-border-strong text-text-primary hover:border-text-secondary hover:bg-surface';

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
