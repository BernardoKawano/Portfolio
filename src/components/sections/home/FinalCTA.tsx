"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type FinalCTAProps = {
  dictionary: Record<string, any>;
};

export function FinalCTA({ dictionary }: FinalCTAProps) {
  return (
    <section className="section-shell py-section-md md:py-section-lg">
      <Card
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="p-8 md:p-12"
      >
        <h2 className="max-w-3xl text-h1 tracking-tight">
          {dictionary.home.finalCtaTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-body-lg text-fg-secondary">
          {dictionary.home.finalCtaText}
        </p>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 1 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Button href={siteConfig.links.whatsapp} external>
              {dictionary.home.ctaPrimary}
            </Button>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Button href={siteConfig.links.email} variant="secondary">
              {dictionary.home.ctaSecondaryEmail}
            </Button>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Button
              href={siteConfig.links.github}
              variant="secondary"
              external
            >
              {dictionary.home.ctaSecondaryGithub}
            </Button>
          </motion.div>
        </motion.div>
      </Card>
    </section>
  );
}
