"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

type ApproachProps = {
  dictionary: Record<string, any>;
};

export function Approach({ dictionary }: ApproachProps) {
  return (
    <section className="section-shell py-section-sm md:py-section-md">
      <Card
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="p-8 md:p-10"
      >
        <h2 className="text-h2 tracking-tight">
          {dictionary.home.approachTitle}
        </h2>
        <p className="mt-4 max-w-3xl text-body-lg text-fg-secondary">
          {dictionary.home.approachText}
        </p>
      </Card>
    </section>
  );
}
