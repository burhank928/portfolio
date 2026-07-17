import Reveal from '@/components/ui/Reveal';
import CountUp from '@/components/ui/CountUp';
import Container from '@/components/ui/Container';
import { metrics } from '@/lib/data';

export default function MetricsBar() {
  return (
    <Reveal as="div" className="border-y border-border">
      <Container>
        <div className="grid grid-cols-2 divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">
          {metrics.map((metric) => (
            <div key={metric.label} className="section-px flex flex-col items-center gap-1 py-8 text-center">
              <span className="font-mono text-2xl text-text-primary">
                {metric.numeric !== null ? (
                  <CountUp to={metric.numeric} suffix={metric.suffix} />
                ) : (
                  metric.value
                )}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wide text-text-muted">{metric.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </Reveal>
  );
}
