"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  FileDown,
  FolderOpen,
  LayoutGrid,
  Pause,
  Play,
  Table2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STAGE_MIN_H =
  "min-h-[26rem] h-[26rem] sm:min-h-[30rem] sm:h-[30rem] lg:min-h-[32rem] lg:h-[32rem]";

const SCENE_MS = 5200;

export type LumaGestorWalkthroughLabels = {
  sectionTitle: string;
  sectionSubtitle: string;
  videoBadge: string;
  noteIllustrative: string;
  controls: {
    autoplay: string;
    autoplayHint: string;
    selectSceneHint: string;
  };
  sceneLabels: readonly string[];
  wizard: {
    chrome: string;
    route: string;
    step1: string;
    step2: string;
    step3: string;
    obraLabel: string;
    obraValue: string;
    itemsTitle: string;
    line1: string;
    line2: string;
    reimburseLabel: string;
    reimburseValue: string;
    reviewTitle: string;
    pdfName: string;
    primaryCta: string;
    toastSaved: string;
  };
  kanban: {
    chrome: string;
    route: string;
    colGenerated: string;
    colSent: string;
    colPaid: string;
    cardTitle: string;
    cardAmount: string;
    dragHint: string;
    moveHint: string;
    paidSyncHint: string;
  };
  obra: {
    chrome: string;
    route: string;
    panelTitle: string;
    contractRow: string;
    extrasRow: string;
    clientRow: string;
    payrollRow: string;
    contractVal: string;
    extrasVal: string;
    clientVal: string;
    payrollVal: string;
    netLabel: string;
    netVal: string;
    sheetFootnote: string;
  };
};

function DemoWindowChrome({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-line-subtle bg-bg-surface shadow-card dark:shadow-card-dark">
      <div className="flex items-center justify-between border-b border-line-subtle bg-bg-primary/80 px-4 py-2.5 dark:bg-bg-primary/50">
        <div className="flex items-center gap-1.5" aria-hidden>
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <span className="text-center text-xs font-medium text-fg-muted sm:text-sm">
          {title}
        </span>
        <div className="w-16" aria-hidden />
      </div>
      {children}
    </div>
  );
}

function WizardScene({ w }: { w: LumaGestorWalkthroughLabels["wizard"] }) {
  const [step, setStep] = useState(0);
  const steps = [w.step1, w.step2, w.step3] as const;

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 3), 1700);
    return () => clearInterval(t);
  }, []);

  return (
    <DemoWindowChrome title={w.chrome}>
      <div className={cn("flex flex-col p-4 sm:p-5", STAGE_MIN_H)}>
        <p className="text-[10px] font-mono text-fg-muted sm:text-xs">{w.route}</p>
        <div className="mt-3 flex gap-2">
          {steps.map((label, i) => (
            <div
              key={label}
              className={cn(
                "flex flex-1 flex-col items-center gap-1 rounded-lg border px-2 py-2 text-center transition-colors duration-base",
                i === step
                  ? "border-accent-primary bg-bg-primary/60 dark:bg-bg-primary/40"
                  : "border-line-subtle bg-bg-primary/30 opacity-70 dark:bg-bg-primary/25"
              )}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-fg-primary text-[10px] font-bold text-bg-surface">
                {i < step ? (
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                ) : (
                  i + 1
                )}
              </span>
              <span className="text-[10px] font-medium leading-tight text-fg-secondary sm:text-xs">
                {label}
              </span>
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 flex flex-1 flex-col rounded-lg border border-line-subtle bg-bg-primary/40 p-3 dark:bg-bg-primary/30"
          >
            {step === 0 ? (
              <>
                <div className="flex items-center gap-2 text-caption font-semibold text-fg-primary">
                  <FolderOpen className="h-4 w-4 text-fg-muted" aria-hidden />
                  {w.obraLabel}
                </div>
                <p className="mt-2 rounded-md border border-dashed border-line-subtle bg-bg-surface px-3 py-2 text-xs text-fg-secondary">
                  {w.obraValue}
                </p>
              </>
            ) : null}
            {step === 1 ? (
              <>
                <p className="text-caption font-semibold text-fg-primary">{w.itemsTitle}</p>
                <ul className="mt-2 space-y-1.5 text-xs text-fg-secondary">
                  <li className="flex justify-between gap-2 border-b border-line-subtle/80 pb-1">
                    <span>{w.line1}</span>
                    <span className="tabular-nums text-fg-primary">R$ 4.280,00</span>
                  </li>
                  <li className="flex justify-between gap-2 border-b border-line-subtle/80 pb-1">
                    <span>{w.line2}</span>
                    <span className="tabular-nums text-fg-primary">R$ 1.120,50</span>
                  </li>
                </ul>
                <p className="mt-3 text-[10px] text-fg-muted sm:text-xs">
                  <span className="font-semibold text-fg-secondary">{w.reimburseLabel}:</span>{" "}
                  {w.reimburseValue}
                </p>
              </>
            ) : null}
            {step === 2 ? (
              <>
                <p className="text-caption font-semibold text-fg-primary">{w.reviewTitle}</p>
                <div className="mt-2 flex items-start gap-2 rounded-md border border-line-subtle bg-bg-surface p-2">
                  <FileDown className="mt-0.5 h-4 w-4 shrink-0 text-fg-muted" aria-hidden />
                  <div>
                    <p className="text-xs font-medium text-fg-primary">{w.pdfName}</p>
                    <p className="text-[10px] text-fg-muted">PDF · @react-pdf/renderer</p>
                  </div>
                </div>
                <motion.button
                  type="button"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                  className="mt-4 w-full rounded-lg bg-fg-primary py-2 text-center text-xs font-semibold text-bg-surface"
                >
                  {w.primaryCta}
                </motion.button>
                <p className="mt-2 text-center text-[10px] text-emerald-700 dark:text-emerald-400">
                  {w.toastSaved}
                </p>
              </>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </DemoWindowChrome>
  );
}

function KanbanScene({ k }: { k: LumaGestorWalkthroughLabels["kanban"] }) {
  const [col, setCol] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCol((c) => (c + 1) % 3), 1600);
    return () => clearInterval(t);
  }, []);

  const cols = [
    { title: k.colGenerated, key: 0 },
    { title: k.colSent, key: 1 },
    { title: k.colPaid, key: 2 },
  ] as const;

  return (
    <DemoWindowChrome title={k.chrome}>
      <div className={cn("flex flex-col p-4 sm:p-5", STAGE_MIN_H)}>
        <p className="text-[10px] font-mono text-fg-muted sm:text-xs">{k.route}</p>
        <p className="mt-2 text-xs text-fg-secondary">{k.dragHint}</p>
        <div className="mt-4 grid flex-1 grid-cols-3 gap-2">
          {cols.map((c) => (
            <div
              key={c.key}
              className={cn(
                "flex flex-col rounded-lg border p-2 transition-colors duration-base",
                col === c.key
                  ? "border-accent-primary bg-bg-primary/50 dark:bg-bg-primary/35"
                  : "border-line-subtle bg-bg-primary/25 dark:bg-bg-primary/20"
              )}
            >
              <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-fg-muted sm:text-xs">
                <LayoutGrid className="h-3 w-3" aria-hidden />
                {c.title}
              </div>
              <div className="mt-2 min-h-[7rem] flex-1 rounded-md border border-dashed border-line-subtle/90 bg-bg-surface/60 p-1 dark:bg-bg-surface/40">
                {col === c.key ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-md border border-line-subtle bg-bg-surface p-2 shadow-sm"
                  >
                    <p className="text-[10px] font-semibold text-fg-primary sm:text-xs">
                      {k.cardTitle}
                    </p>
                    <p className="mt-1 text-xs tabular-nums text-fg-secondary">{k.cardAmount}</p>
                    <div className="mt-2 flex items-center gap-1 text-[10px] text-fg-muted">
                      <ArrowRight className="h-3 w-3" aria-hidden />
                      {c.key === 2 ? k.paidSyncHint : k.moveHint}
                    </div>
                  </motion.div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DemoWindowChrome>
  );
}

function ObraScene({ o }: { o: LumaGestorWalkthroughLabels["obra"] }) {
  const [highlight, setHighlight] = useState(0);
  const rows = [
    { label: o.contractRow, val: o.contractVal },
    { label: o.extrasRow, val: o.extrasVal },
    { label: o.clientRow, val: o.clientVal },
    { label: o.payrollRow, val: o.payrollVal },
  ] as const;

  useEffect(() => {
    const n = rows.length;
    const t = setInterval(() => setHighlight((h) => (h + 1) % n), 1400);
    return () => clearInterval(t);
  }, [rows.length]);

  return (
    <DemoWindowChrome title={o.chrome}>
      <div className={cn("flex flex-col p-4 sm:p-5", STAGE_MIN_H)}>
        <p className="text-[10px] font-mono text-fg-muted sm:text-xs">{o.route}</p>
        <div className="mt-3 flex items-center gap-2 text-caption font-semibold text-fg-primary">
          <Table2 className="h-4 w-4 text-fg-muted" aria-hidden />
          {o.panelTitle}
        </div>
        <div className="mt-3 flex-1 overflow-hidden rounded-lg border border-line-subtle">
          <table className="w-full text-left text-[10px] sm:text-xs">
            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={row.label}
                  animate={{
                    backgroundColor:
                      highlight === i ? "rgba(15, 23, 42, 0.06)" : "transparent",
                  }}
                  className="border-b border-line-subtle dark:border-line-subtle/80"
                >
                  <td className="px-2 py-2 text-fg-secondary">{row.label}</td>
                  <td className="px-2 py-2 text-right tabular-nums font-medium text-fg-primary">
                    {row.val}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-between border-t border-line-subtle bg-bg-primary/50 px-2 py-2 dark:bg-bg-primary/40">
            <span className="flex items-center gap-1 text-[10px] font-semibold text-fg-primary sm:text-xs">
              <CircleDollarSign className="h-3.5 w-3.5" aria-hidden />
              {o.netLabel}
            </span>
            <span className="text-xs font-bold tabular-nums text-emerald-700 dark:text-emerald-400 sm:text-sm">
              {o.netVal}
            </span>
          </div>
        </div>
        <p className="mt-3 text-[10px] leading-relaxed text-fg-muted sm:text-xs">
          {o.sheetFootnote}
        </p>
      </div>
    </DemoWindowChrome>
  );
}

export function LumaGestorWalkthroughSection({
  labels,
}: {
  labels: LumaGestorWalkthroughLabels;
}) {
  const [scene, setScene] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return undefined;
    const t = setInterval(() => setScene((s) => (s + 1) % 3), SCENE_MS);
    return () => clearInterval(t);
  }, [autoplay]);

  const onSelectScene = useCallback((index: number) => {
    setScene(index);
  }, []);

  const sceneIcons = [FolderOpen, LayoutGrid, Table2] as const;

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
      <h3 className="text-h3 font-semibold tracking-tight text-fg-primary">
        {labels.sectionTitle}
      </h3>
      <p className="mt-2 max-w-3xl text-caption text-fg-secondary">{labels.sectionSubtitle}</p>
      <p className="mt-3 max-w-3xl text-caption leading-relaxed text-fg-muted">
        {labels.noteIllustrative}
      </p>

      <div className="mt-6 flex flex-col gap-3 border-t border-line-subtle/80 pt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div className="min-w-0 flex-1">
          <p className="mb-2.5 text-caption text-fg-secondary">{labels.controls.selectSceneHint}</p>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label={labels.sectionTitle}>
            {labels.sceneLabels.map((label, i) => {
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
                  <span className="text-left">
                    {i + 1}. {label}
                  </span>
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
            {scene === 0 ? <WizardScene w={labels.wizard} /> : null}
            {scene === 1 ? <KanbanScene k={labels.kanban} /> : null}
            {scene === 2 ? <ObraScene o={labels.obra} /> : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
