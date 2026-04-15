"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, Database, Pause, Play, Sparkles, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { demoTiming } from "@/config/demoTiming";

const STAGE_MIN_H =
  "min-h-[26rem] h-[26rem] sm:min-h-[30rem] sm:h-[30rem] lg:min-h-[32rem] lg:h-[32rem]";

const AUTOPLAY_MS = demoTiming.autoplay.defaultSceneMs;

function metricValue(label: string): string {
  const m = label.match(/([0-9]+\.[0-9]+)/);
  return m ? m[1] : label;
}

export type TechChallenge1WalkthroughLabels = {
  sectionTitle: string;
  sectionSubtitle: string;
  videoBadge: string;
  noteIllustrative: string;
  sceneLabels: readonly string[];
  tabs: {
    dataset: string;
    training: string;
    results: string;
  };
  controls: {
    autoplay: string;
    autoplayHint: string;
    selectSceneHint: string;
  };
  dataset: {
    chrome: string;
    route: string;
    datasetTitle: string;
    datasetMeta: string;
    stepLoad: string;
    stepEda: string;
    stepOutliers: string;
    stepCorrelation: string;
    note: string;
  };
  training: {
    chrome: string;
    route: string;
    title: string;
    split: string;
    preprocessing: string;
    modelsTitle: string;
    model1: string;
    model2: string;
    model3: string;
    objective: string;
  };
  results: {
    chrome: string;
    route: string;
    title: string;
    bestModelLabel: string;
    recallLabel: string;
    accuracyLabel: string;
    rocAucLabel: string;
    reportNote: string;
    outputFiles: string;
  };
};

function DemoWindowChrome({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line-subtle bg-bg-surface shadow-card dark:shadow-card-dark">
      <div className="flex items-center justify-between border-b border-line-subtle bg-bg-primary/80 px-4 py-2.5 dark:bg-bg-primary/50">
        <div className="flex items-center gap-1.5" aria-hidden>
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <span className="text-center text-xs font-medium text-fg-muted sm:text-sm">{title}</span>
        <div className="w-16" aria-hidden />
      </div>
      {children}
    </div>
  );
}

function DatasetScene({ d }: { d: TechChallenge1WalkthroughLabels["dataset"] }) {
  return (
    <DemoWindowChrome title={d.chrome}>
      <div className={cn("flex flex-col p-4 sm:p-5", STAGE_MIN_H)}>
        <div className="flex items-center justify-between rounded-lg border border-line-subtle bg-bg-primary/20 px-3 py-2">
          <p className="text-xs font-semibold text-fg-primary">{d.datasetTitle}</p>
          <Database className="h-4 w-4 text-fg-muted" aria-hidden />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-line-subtle bg-bg-surface p-2 text-center">
            <p className="text-[10px] text-fg-muted">Amostras</p>
            <p className="text-sm font-semibold text-fg-primary">569</p>
          </div>
          <div className="rounded-lg border border-line-subtle bg-bg-surface p-2 text-center">
            <p className="text-[10px] text-fg-muted">Features</p>
            <p className="text-sm font-semibold text-fg-primary">30</p>
          </div>
          <div className="rounded-lg border border-line-subtle bg-bg-surface p-2 text-center">
            <p className="text-[10px] text-fg-muted">Classes</p>
            <p className="text-sm font-semibold text-fg-primary">2</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-line-subtle bg-bg-surface p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-fg-muted">
            Distribuição de classes
          </p>
          <div className="mt-3 space-y-2">
            <div>
              <div className="mb-1 flex items-center justify-between text-[10px] text-fg-muted">
                <span>Benigno</span>
                <span>357</span>
              </div>
              <div className="h-2 rounded-full bg-bg-primary/30">
                <div className="h-2 w-[63%] rounded-full bg-emerald-500/70" />
              </div>
            </div>
            <div>
              <div className="mb-1 flex items-center justify-between text-[10px] text-fg-muted">
                <span>Maligno</span>
                <span>212</span>
              </div>
              <div className="h-2 rounded-full bg-bg-primary/30">
                <div className="h-2 w-[37%] rounded-full bg-rose-500/70" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-[10px] text-fg-secondary sm:text-xs">
          {[d.stepEda, d.stepCorrelation, d.stepOutliers, d.stepLoad].map((step) => (
            <div key={step} className="rounded-md border border-line-subtle bg-bg-primary/20 px-2 py-1.5">
              {step}
            </div>
          ))}
        </div>
        <p className="mt-auto text-[10px] text-fg-muted sm:text-xs">{d.route}</p>
      </div>
    </DemoWindowChrome>
  );
}

function TrainingScene({ t }: { t: TechChallenge1WalkthroughLabels["training"] }) {
  return (
    <DemoWindowChrome title={t.chrome}>
      <div className={cn("flex flex-col p-4 sm:p-5", STAGE_MIN_H)}>
        <p className="text-caption font-semibold text-fg-primary">{t.title}</p>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg border border-line-subtle bg-bg-surface p-2">
            <p className="text-[10px] text-fg-muted">Treino</p>
            <p className="text-sm font-semibold text-fg-primary">60%</p>
          </div>
          <div className="rounded-lg border border-line-subtle bg-bg-surface p-2">
            <p className="text-[10px] text-fg-muted">Validação</p>
            <p className="text-sm font-semibold text-fg-primary">20%</p>
          </div>
          <div className="rounded-lg border border-line-subtle bg-bg-surface p-2">
            <p className="text-[10px] text-fg-muted">Teste</p>
            <p className="text-sm font-semibold text-fg-primary">20%</p>
          </div>
        </div>
        <div className="mt-3 rounded-lg border border-line-subtle bg-bg-primary/20 p-3 text-xs text-fg-secondary">
          <p>{t.preprocessing}</p>
        </div>
        <div className="mt-3 rounded-lg border border-line-subtle bg-bg-surface p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-fg-muted">
            Recall por modelo (teste)
          </p>
          <div className="mt-2 space-y-2 text-xs text-fg-secondary">
            {[
              { name: t.model1, value: 98 },
              { name: t.model2, value: 90 },
              { name: t.model3, value: 88 },
            ].map((row) => (
              <div key={row.name}>
                <div className="mb-1 flex items-center justify-between text-[10px] sm:text-xs">
                  <span>{row.name}</span>
                  <span>{row.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-bg-primary/30">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${row.value}%` }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="h-2 rounded-full bg-blue-500/70"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-pill border border-line-subtle px-3 py-1.5 text-xs text-fg-secondary">
          <Target className="h-3.5 w-3.5" aria-hidden />
          {t.objective}
        </div>
        <p className="mt-2 text-[10px] text-fg-muted sm:text-xs">{t.route}</p>
      </div>
    </DemoWindowChrome>
  );
}

function ResultsScene({ r }: { r: TechChallenge1WalkthroughLabels["results"] }) {
  return (
    <DemoWindowChrome title={r.chrome}>
      <div className={cn("flex flex-col p-4 sm:p-5", STAGE_MIN_H)}>
        <p className="mt-3 text-caption font-semibold text-fg-primary">{r.title}</p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-line-subtle bg-bg-surface p-2 text-center">
            <p className="text-[10px] text-fg-muted">Recall</p>
            <p className="text-sm font-semibold text-fg-primary">{metricValue(r.recallLabel)}</p>
          </div>
          <div className="rounded-lg border border-line-subtle bg-bg-surface p-2 text-center">
            <p className="text-[10px] text-fg-muted">Accuracy</p>
            <p className="text-sm font-semibold text-fg-primary">{metricValue(r.accuracyLabel)}</p>
          </div>
          <div className="rounded-lg border border-line-subtle bg-bg-surface p-2 text-center">
            <p className="text-[10px] text-fg-muted">ROC AUC</p>
            <p className="text-sm font-semibold text-fg-primary">{metricValue(r.rocAucLabel)}</p>
          </div>
        </div>
        <div className="mt-3 rounded-lg border border-emerald-600/30 bg-emerald-500/10 p-3">
          <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            {r.bestModelLabel}
          </p>
        </div>
        <div className="mt-3 rounded-lg border border-line-subtle bg-bg-surface p-3 text-xs leading-relaxed text-fg-secondary">
          {r.reportNote}
        </div>
        <div className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-pill border border-line-subtle px-3 py-1.5 text-xs text-fg-secondary">
          <BarChart3 className="h-3.5 w-3.5" aria-hidden />
          {r.outputFiles}
        </div>
        <p className="mt-2 text-[10px] text-fg-muted sm:text-xs">{r.route}</p>
      </div>
    </DemoWindowChrome>
  );
}

export function TechChallenge1WalkthroughSection({
  labels,
}: {
  labels: TechChallenge1WalkthroughLabels;
}) {
  const [scene, setScene] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return undefined;
    const t = setInterval(() => setScene((s) => (s + 1) % 3), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [autoplay]);

  const onSelectScene = useCallback((index: number) => setScene(index), []);
  const sceneIcons = [Database, Sparkles, BarChart3] as const;
  const sceneTitles = [labels.tabs.dataset, labels.tabs.training, labels.tabs.results] as const;

  return (
    <div
      className="border-t border-line-subtle bg-bg-primary/25 p-7 md:p-9 dark:bg-bg-primary/40"
      role="region"
      aria-label={labels.sectionTitle}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="rounded-pill border border-line-subtle bg-bg-surface px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-fg-muted">
          {labels.videoBadge}
        </span>
      </div>
      <h3 className="text-h3 font-semibold tracking-tight text-fg-primary">{labels.sectionTitle}</h3>
      <p className="mt-2 max-w-3xl text-caption text-fg-secondary">{labels.sectionSubtitle}</p>
      <p className="mt-3 max-w-3xl text-caption leading-relaxed text-fg-muted">
        {labels.noteIllustrative}
      </p>

      <div className="mt-6 flex flex-col gap-3 border-t border-line-subtle/80 pt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div className="min-w-0 flex-1">
          <p className="mb-2.5 text-caption text-fg-secondary">{labels.controls.selectSceneHint}</p>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label={labels.sectionTitle}>
            {sceneTitles.map((label, i) => {
              const Icon = sceneIcons[i];
              const selected = scene === i;
              return (
                <button
                  key={label}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => onSelectScene(i)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-pill border px-3 py-1.5 text-xs transition-colors duration-fast",
                    selected
                      ? "border-fg-primary bg-bg-surface font-semibold text-fg-primary shadow-sm ring-1 ring-fg-primary/15"
                      : "border-line-subtle text-fg-muted hover:border-fg-muted hover:text-fg-secondary"
                  )}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                  {label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-1.5 sm:w-auto sm:max-w-xs sm:items-end">
          <button
            type="button"
            onClick={() => setAutoplay((a) => !a)}
            title={labels.controls.autoplayHint}
            className={cn(
              "inline-flex w-full items-center justify-center gap-2 rounded-pill border px-4 py-2 text-xs font-semibold transition-colors duration-fast sm:w-auto sm:justify-center",
              autoplay
                ? "border-fg-primary bg-bg-surface text-fg-primary shadow-sm"
                : "border-line-subtle bg-bg-surface/60 text-fg-secondary hover:border-fg-muted"
            )}
            aria-pressed={autoplay}
          >
            {autoplay ? (
              <Pause className="h-3.5 w-3.5 shrink-0" aria-hidden />
            ) : (
              <Play className="h-3.5 w-3.5 shrink-0" aria-hidden />
            )}
            {labels.controls.autoplay}
          </button>
          <p className="text-center text-[10px] leading-snug text-fg-muted sm:text-right">
            {labels.controls.autoplayHint}
          </p>
        </div>
      </div>

      <div className="mt-2 flex flex-wrap gap-2 text-[10px] text-fg-muted sm:text-xs">
        {labels.sceneLabels.map((item) => (
          <span key={item} className="rounded-pill border border-line-subtle px-2 py-0.5">
            {item}
          </span>
        ))}
      </div>

      <div className="relative mt-8 overflow-hidden rounded-2xl">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.06),transparent_50%)]"
          aria-hidden
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={scene}
            role="tabpanel"
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {scene === 0 ? <DatasetScene d={labels.dataset} /> : null}
            {scene === 1 ? <TrainingScene t={labels.training} /> : null}
            {scene === 2 ? <ResultsScene r={labels.results} /> : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

