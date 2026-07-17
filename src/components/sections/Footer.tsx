import { socials } from '@/lib/data';
import Container from '@/components/ui/Container';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border section-px py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-[11px] text-text-muted">
            © {year} Burhan Ahmad Khan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-text-secondary transition-colors hover:text-text-primary"
            >
              GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-text-secondary transition-colors hover:text-text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
