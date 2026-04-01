"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { InterventionPoint, ProcessStageMobile } from "./process/ProcessStage";
import {
  ThreadEvolution,
  ThreadEvolutionStatic,
  TRACK_WIDTH,
} from "./process/ThreadEvolution";

type ProcessJourneyProps = {
  dictionary: Record<string, any>;
};

const PREMIUM_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ProcessJourney({ dictionary }: ProcessJourneyProps) {
  const stages = dictionary.home.processStages as Array<{
    title: string;
    description: string;
  }>;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section aria-label={dictionary.home.processTitle}>
      <div className="hidden lg:block">
        {prefersReducedMotion ? (
          <StaticLayout dictionary={dictionary} stages={stages} />
        ) : (
          <DesktopLayout dictionary={dictionary} stages={stages} />
        )}
      </div>
      <div className="lg:hidden">
        <MobileLayout dictionary={dictionary} stages={stages} />
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/*  Desktop: sticky viewport + horizontal track translation           */
/* ────────────────────────────────────────────────────────────────── */

function DesktopLayout({
  dictionary,
  stages,
}: {
  dictionary: Record<string, any>;
  stages: Array<{ title: string; description: string }>;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [maxShift, setMaxShift] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !viewportRef.current) return;
      const trackW = trackRef.current.scrollWidth;
      const viewW = viewportRef.current.clientWidth;
      setMaxShift(Math.min(0, -(trackW - viewW)));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const rawX = useTransform(scrollYProgress, [0.03, 0.95], [0, maxShift]);
  const trackX = useSpring(rawX, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const closingOpacity = useTransform(scrollYProgress, [0.92, 0.99], [0, 1]);
  const closingY = useTransform(scrollYProgress, [0.92, 0.99], [8, 0]);

  return (
    <div ref={sectionRef} className="relative" style={{ height: "350vh" }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        {/* Header */}
        <div className="section-shell">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, ease: PREMIUM_EASE }}
          >
            <h2 className="text-h1 tracking-tight">
              {dictionary.home.processTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-body text-fg-secondary">
              {dictionary.home.processIntro}
            </p>
          </motion.div>
        </div>

        {/* Horizontal composition: viewport clips the wider track */}
        <div className="section-shell mt-8">
          <div ref={viewportRef} className="overflow-hidden">
            <motion.div
              ref={trackRef}
              className="flex-shrink-0"
              style={{ width: TRACK_WIDTH, x: trackX }}
            >
              <div className="h-[280px]">
                <ThreadEvolution progress={scrollYProgress} />
              </div>
              <div className="relative mt-3 h-[72px]">
                {stages.map((stage, i) => (
                  <InterventionPoint
                    key={i}
                    index={i}
                    stage={stage}
                    progress={scrollYProgress}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Closing payoff */}
        <div className="section-shell mt-6">
          <motion.p
            className="max-w-xl text-body-lg font-medium tracking-tight text-fg-primary"
            style={{ opacity: closingOpacity, y: closingY }}
          >
            {dictionary.home.processClosing}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/*  Static fallback (prefers-reduced-motion)                          */
/* ────────────────────────────────────────────────────────────────── */

function StaticLayout({
  dictionary,
  stages,
}: {
  dictionary: Record<string, any>;
  stages: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="section-shell py-section-md">
      <h2 className="text-h1 tracking-tight">
        {dictionary.home.processTitle}
      </h2>
      <p className="mt-3 max-w-2xl text-body text-fg-secondary">
        {dictionary.home.processIntro}
      </p>

      <div className="mt-12">
        <div className="h-[160px]">
          <ThreadEvolutionStatic />
        </div>
        <ol className="mt-6 grid grid-cols-4 gap-6">
          {stages.map((stage, i) => (
            <li key={i} className="flex flex-col items-center text-center">
              <h3 className="text-[1rem] font-semibold leading-tight tracking-tight text-fg-primary">
                {stage.title}
              </h3>
              <p className="mt-1 max-w-[200px] text-[0.8rem] leading-snug text-fg-secondary">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-12 max-w-xl text-body-lg font-medium tracking-tight text-fg-primary">
        {dictionary.home.processClosing}
      </p>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/*  Mobile: vertical timeline with whileInView reveals                */
/* ────────────────────────────────────────────────────────────────── */

function MobileLayout({
  dictionary,
  stages,
}: {
  dictionary: Record<string, any>;
  stages: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="section-shell py-section-sm md:py-section-md">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4, ease: PREMIUM_EASE }}
      >
        <h2 className="text-h2 tracking-tight">
          {dictionary.home.processTitle}
        </h2>
        <p className="mt-3 max-w-2xl text-body text-fg-secondary">
          {dictionary.home.processIntro}
        </p>
      </motion.div>

      <div className="relative mt-10">
        <div
          className="absolute left-[23px] top-0 h-full w-px bg-line-subtle"
          aria-hidden="true"
        />
        <ol className="flex flex-col gap-y-10">
          {stages.map((stage, i) => (
            <ProcessStageMobile key={i} index={i} stage={stage} />
          ))}
        </ol>
      </div>

      <motion.p
        className="mt-10 max-w-xl text-body-lg font-medium tracking-tight text-fg-primary"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.35, ease: PREMIUM_EASE }}
      >
        {dictionary.home.processClosing}
      </motion.p>
    </div>
  );
}
