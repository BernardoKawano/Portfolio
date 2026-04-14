import { Card } from "@/components/ui/Card";

type Metric = { value: string; label: string; context?: string };

type ImpactMetricsProps = {
  dictionary: Record<string, any>;
};

export function ImpactMetrics({ dictionary }: ImpactMetricsProps) {
  const metrics: Metric[] = dictionary.home.metrics;

  return (
    <section className="section-shell py-section-sm md:py-section-md">
      <div className="mb-8">
        <h2 className="text-h2 tracking-tight">
          {dictionary.home.metricsTitle}
        </h2>
        <p className="mt-2 text-caption text-fg-secondary">
          {dictionary.home.metricsSubtitle}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <Card
            key={metric.label}
            hover
            className="p-6"
          >
            <p className="text-h1 tracking-tight">{metric.value}</p>
            <p className="mt-2 text-caption text-fg-secondary">
              {metric.label}
            </p>
            {metric.context ? (
              <p className="mt-2 text-xs leading-relaxed text-fg-muted">
                {metric.context}
              </p>
            ) : null}
          </Card>
        ))}
      </div>
    </section>
  );
}
