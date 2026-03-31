type ImpactMetricsProps = {
  dictionary: Record<string, any>;
};

export function ImpactMetrics({ dictionary }: ImpactMetricsProps) {
  return (
    <section className="section-shell py-12 md:py-16">
      <div className="mb-7">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {dictionary.home.metricsTitle}
        </h2>
        <p className="mt-2 text-fg-secondary">{dictionary.home.metricsSubtitle}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {dictionary.home.metrics.map((metric: string) => (
          <div key={metric} className="premium-card p-6">
            <p className="text-xl font-semibold">{metric}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
