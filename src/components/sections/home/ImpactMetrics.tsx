"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

type Metric = { value: string; label: string; context?: string };

type ImpactMetricsProps = {
  dictionary: Record<string, any>;
};

export function ImpactMetrics({ dictionary }: ImpactMetricsProps) {
  const metrics: Metric[] = dictionary.home.metrics;

  return (
    <section className="section-shell py-section-sm md:py-section-md">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.34 }}
        className="mb-8"
      >
        <h2 className="text-h2 tracking-tight">
          {dictionary.home.metricsTitle}
        </h2>
        <p className="mt-2 text-caption text-fg-secondary">
          {dictionary.home.metricsSubtitle}
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 1 },
          show: { opacity: 1, transition: { staggerChildren: 0.09 } },
        }}
        className="grid gap-4 md:grid-cols-3"
      >
        {metrics.map((metric) => (
          <Card
            key={metric.label}
            hover
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.28 }}
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
      </motion.div>
    </section>
  );
}
