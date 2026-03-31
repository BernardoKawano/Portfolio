"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

type ValuePropositionProps = {
  dictionary: Record<string, any>;
};

export function ValueProposition({ dictionary }: ValuePropositionProps) {
  return (
    <section className="section-shell py-section-sm md:py-section-md">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-h2 tracking-tight">
          {dictionary.home.valueTitle}
        </h2>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: { opacity: 1 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="mt-8 grid gap-4 md:grid-cols-3"
        >
          {dictionary.home.valueItems.map((item: string, i: number) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.28 }}
            >
              <Card className="h-full p-6 md:p-7">
                <p className="text-body leading-relaxed text-fg-secondary">
                  {item}
                </p>
              </Card>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
