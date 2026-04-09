"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

type TimelineEntry = {
  period: string;
  title: string;
  description: string;
};

type TimelineProps = {
  dictionary: Record<string, any>;
};

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Timeline({ dictionary }: TimelineProps) {
  const entries: TimelineEntry[] = dictionary.about.timeline;

  return (
    <section className="mt-section-sm md:mt-section-md">
      <h2 className="text-h2 tracking-tight">
        {dictionary.about.timelineTitle}
      </h2>

      <div className="relative mt-8">
        <div
          className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-line-subtle"
          aria-hidden
        />

        <ol className="space-y-8">
          {entries.map((entry, i) => (
            <motion.li
              key={entry.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.08, ease: EASE }}
              className="relative pl-8"
            >
              <span
                className="absolute left-0 top-[0.45rem] h-[15px] w-[15px] rounded-full border-2 border-fg-muted bg-bg-primary"
                aria-hidden
              />
              <p className="text-xs font-semibold uppercase tracking-widest text-fg-muted">
                {entry.period}
              </p>
              <h3 className="mt-1 text-body font-semibold">{entry.title}</h3>
              <p className="mt-2 max-w-2xl text-caption leading-relaxed text-fg-secondary">
                {entry.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.3, ease: EASE }}
        className="mt-8"
      >
        <a
          href={siteConfig.links.resume}
          className="inline-flex items-center gap-2 rounded-pill border border-line-subtle px-5 py-2.5 text-xs font-semibold transition-colors duration-fast hover:border-fg-muted"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
          {dictionary.about.resumeDownload}
        </a>
      </motion.div>
    </section>
  );
}
