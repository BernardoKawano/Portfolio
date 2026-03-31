"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

type HeroProps = {
  dictionary: Record<string, any>;
};

export function Hero({ dictionary }: HeroProps) {
  return (
    <section className="section-shell py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32 }}
        className="max-w-4xl"
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-fg-muted">
          {dictionary.home.badge}
        </p>
        {/* Variation 1: Practical AI for operations that cannot afford manual bottlenecks. */}
        {/* Variation 2: I build AI systems that remove friction from real business workflows. */}
        {/* Variation 3: AI Engineer focused on automations that save time and simplify operations. */}
        <h1 className="text-[clamp(2.2rem,7vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
          {dictionary.home.headline}
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-fg-secondary md:text-xl">
          {dictionary.home.subheadline}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-accent-contrast transition-all duration-200 ease-premium hover:opacity-90"
          >
            {dictionary.home.ctaPrimary}
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line-subtle px-6 py-3 text-sm font-semibold text-fg-primary transition-colors hover:border-fg-muted"
          >
            {dictionary.home.ctaSecondaryGithub}
          </Link>
          <Link
            href={siteConfig.links.email}
            className="rounded-full border border-line-subtle px-6 py-3 text-sm font-semibold text-fg-primary transition-colors hover:border-fg-muted"
          >
            {dictionary.home.ctaSecondaryEmail}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
