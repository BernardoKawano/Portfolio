"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";

type StageData = { title: string; description: string };

/* ── Intervention-point label windows (synced with ThreadEvolution dots) ── */

const LABEL_WINDOWS: [number, number][] = [
  [0.14, 0.20], // detect
  [0.40, 0.46], // frame
  [0.64, 0.70], // solution
  [0.90, 0.97], // deploy
];

const LABEL_LEFT = [
  "22.86%", // 640 / 2800
  "46.43%", // 1300 / 2800
  "65.71%", // 1840 / 2800
  "94.29%", // 2640 / 2800
] as const;

/* ── Desktop: positioned within the horizontal track ── */

type InterventionPointProps = {
  index: number;
  stage: StageData;
  progress: MotionValue<number>;
};

export function InterventionPoint({
  index,
  stage,
  progress,
}: InterventionPointProps) {
  const [start, end] = LABEL_WINDOWS[index];
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [6, 0]);

  return (
    <motion.div
      className="absolute top-0 flex flex-col items-center text-center"
      style={{ left: LABEL_LEFT[index], x: "-50%", opacity, y }}
    >
      <h3 className="text-[0.95rem] font-semibold leading-tight tracking-tight text-fg-primary">
        {stage.title}
      </h3>
      <p className="mt-0.5 max-w-[180px] text-[0.76rem] leading-snug text-fg-secondary">
        {stage.description}
      </p>
    </motion.div>
  );
}

/* ── Mobile: vertical timeline cards (unchanged) ── */

type ProcessStageMobileProps = {
  index: number;
  stage: StageData;
};

export function ProcessStageMobile({ index, stage }: ProcessStageMobileProps) {
  return (
    <motion.li
      className="relative pl-14"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center text-[0.7rem] font-medium uppercase tracking-[0.18em] text-fg-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="text-[1.15rem] font-semibold leading-tight tracking-tight">
        {stage.title}
      </h3>
      <p className="mt-1 text-[0.84rem] leading-snug text-fg-secondary">
        {stage.description}
      </p>
    </motion.li>
  );
}
