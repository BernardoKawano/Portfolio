"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

type HeroProps = {
  dictionary: Record<string, any>;
};

export function Hero({ dictionary }: HeroProps) {
  return (
    <section className="section-shell pb-section-md pt-section-lg md:pb-section-lg md:pt-section-xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl"
      >
        <p className="mb-6 text-caption font-semibold uppercase tracking-[0.16em] text-fg-muted">
          {dictionary.home.badge}
        </p>
        <h1 className="text-display tracking-tight">
          {dictionary.home.headline}
        </h1>
        <p className="mt-7 max-w-2xl text-body-lg text-fg-secondary">
          {dictionary.home.subheadline}
        </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button href={siteConfig.links.whatsapp} external>
            {dictionary.home.ctaPrimary}
          </Button>
          <Button href={siteConfig.links.github} variant="secondary" external>
            {dictionary.home.ctaSecondaryGithub}
          </Button>
          <Button href={siteConfig.links.email} variant="secondary">
            {dictionary.home.ctaSecondaryEmail}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
