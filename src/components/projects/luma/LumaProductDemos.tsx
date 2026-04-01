"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarPlus,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Download,
  FileText,
  Loader2,
  Plus,
  Printer,
  Upload,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type LumaAnalysisDemoLabels = {
  chrome: string;
  steps: readonly { label: string; sublabel: string }[];
  landingHint: string;
  googleButton: string;
  themeHint: string;
  dashboardRoute: string;
  analyzeCard: string;
  navSecondary: string;
  uploadTitle: string;
  uploadHint: string;
  fileName: string;
  analyzeButton: string;
  analyzingTitle: string;
  progressHint: string;
  doneLabel: string;
  tabs: readonly string[];
  addCalendarButton: string;
  /** Explicação curta sob os botões de ação (importação → calendário) */
  importHint: string;
  exportButton: string;
  rows: { label: string; value: string }[];
  totalLabel: string;
  totalValue: string;
  toastMessage: string;
  /** Conteúdo exclusivo da tab Diário */
  dailyDateLabel: string;
  dailyModeHint: string;
  dailyLines: { label: string; value: string }[];
  /** Conteúdo exclusivo da tab Total */
  totalModeHint: string;
  /** Conteúdo exclusivo da tab Planilha */
  sheetModeHint: string;
  sheetColumnLabels: readonly string[];
  sheetRows: readonly { cells: readonly string[] }[];
};

export type LumaCalendarDemoLabels = {
  chrome: string;
  steps: readonly { label: string; sublabel: string }[];
  monthTitle: string;
  weekdaysShort: readonly string[];
  headerNewEntry: string;
  printBookLabel: string;
  /** Texto explicativo abaixo dos botões do cabeçalho (PDF/Excel do calendário) */
  printBookHint: string;
  topExpense: string;
  topRevenue: string;
  topBalance: string;
  newEntryTitle: string;
  fields: { label: string; value: string }[];
  saveLabel: string;
  savedLabel: string;
  summaryTitle: string;
  analysisHint: string;
  calendarLegend: string;
  revenueLabel: string;
  expenseLabel: string;
  balanceLabel: string;
  revenueValue: string;
  expenseValue: string;
  balanceValue: string;
  /** Passo demo: geração do livro-caixa a partir do calendário */
  bookTitle: string;
  bookPeriodTitle: string;
  bookFromLabel: string;
  bookFromValue: string;
  bookToLabel: string;
  bookToValue: string;
  bookPdfLabel: string;
  bookExcelLabel: string;
  bookGenerating: string;
  /** Legenda sobre a miniatura A4 (substitui “ficheiro pronto”) */
  bookPreviewKicker: string;
  /** Layout tipo print: CAIXA · mês · folha · tabela Entradas/Saídas por dia */
  bookPreviewCaixa: string;
  bookPreviewMonthBanner: string;
  bookPreviewFolio: string;
  bookPreviewEntradasCol: string;
  bookPreviewSaidasCol: string;
  bookPreviewDayBanner: string;
  bookPreviewRow1Id: string;
  bookPreviewRow1Desc: string;
  bookPreviewRow1Saida: string;
  bookPreviewRow2Id: string;
  bookPreviewRow2Desc: string;
  bookPreviewRow2Entrada: string;
  bookPreviewTotalDia: string;
  bookPreviewTotalDiaEntrada: string;
  bookPreviewTotalDiaSaida: string;
  bookPreviewSaldoAtual: string;
  bookPreviewSaldoAtualValue: string;
  bookPreviewTotalGeral: string;
  bookPreviewTotalGeralEntrada: string;
  bookPreviewTotalGeralSaida: string;
  bookPreviewSaldoFinal: string;
  bookPreviewSaldoFinalValue: string;
  /** Uma linha no passo demo (evita repetir o parágrafo longo do printBookHint) */
  bookFlowHint: string;
};

export type LumaProductDemosLabels = {
  sectionTitle: string;
  sectionSubtitle: string;
  noteImportCalendar: string;
  notePrintBook: string;
  analysis: LumaAnalysisDemoLabels;
  calendar: LumaCalendarDemoLabels;
};

/** r = receita (verde), x = despesa (vermelho); um dia pode ter ambos */
const calendarDays = [
  { d: "", r: false, x: false }, { d: "", r: false, x: false }, { d: "1", r: false, x: true }, { d: "2", r: true, x: false }, { d: "3", r: true, x: false }, { d: "4", r: false, x: true }, { d: "5", r: false, x: false },
  { d: "6", r: false, x: false }, { d: "7", r: true, x: true }, { d: "8", r: false, x: false }, { d: "9", r: false, x: true }, { d: "10", r: true, x: false }, { d: "11", r: false, x: false }, { d: "12", r: false, x: false },
  { d: "13", r: false, x: false }, { d: "14", r: false, x: true }, { d: "15", r: true, x: false }, { d: "16", r: false, x: false }, { d: "17", r: true, x: true }, { d: "18", r: false, x: false }, { d: "19", r: false, x: false },
  { d: "20", r: false, x: true }, { d: "21", r: true, x: false }, { d: "22", r: false, x: false }, { d: "23", r: false, x: false }, { d: "24", r: true, x: false }, { d: "25", r: false, x: true }, { d: "26", r: false, x: false },
  { d: "27", r: false, x: false }, { d: "28", r: true, x: false }, { d: "29", r: false, x: false }, { d: "30", r: false, x: true }, { d: "31", r: true, x: true }, { d: "", r: false, x: false }, { d: "", r: false, x: false },
] as const;

/** Área útil da animação: altura fixa grande para o conteúdo preencher o quadro */
const DEMO_STAGE_MIN_H =
  "min-h-[32rem] h-[32rem] sm:min-h-[38rem] sm:h-[38rem] lg:min-h-[42rem] lg:h-[42rem]";

const ANALYSIS_DURATIONS_MS = [2600, 2400, 2800, 2600, 5800] as const;

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
        <span className="text-xs font-medium text-fg-muted sm:text-sm">{title}</span>
        <div className="w-16" aria-hidden />
      </div>
      {children}
    </div>
  );
}

function AnalysisDemo({ labels }: { labels: LumaAnalysisDemoLabels }) {
  const [step, setStep] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const steps = labels.steps;
  const n = steps.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep((prev) => (prev + 1) % n);
    }, ANALYSIS_DURATIONS_MS[step] ?? 3000);
    return () => clearTimeout(timer);
  }, [step, n]);

  useEffect(() => {
    if (step !== n - 1) {
      setActiveTab(0);
      setShowToast(false);
      return;
    }
    const tabLen = labels.tabs.length || 1;
    const tabTimer = setInterval(() => {
      setActiveTab((v) => (v + 1) % tabLen);
    }, 1600);
    const toastTimer = setTimeout(() => setShowToast(true), 2200);
    return () => {
      clearInterval(tabTimer);
      clearTimeout(toastTimer);
    };
  }, [step, n, labels.tabs.length]);

  return (
    <DemoWindowChrome title={labels.chrome}>
      <div className="flex flex-wrap items-center justify-center gap-2 px-3 pb-2 pt-4 sm:gap-2.5 sm:px-5">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-1.5 sm:gap-2">
            <div
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300 sm:h-8 sm:w-8 sm:text-xs",
                i < step
                  ? "bg-emerald-500 text-white"
                  : i === step
                    ? "bg-blue-600 text-white"
                    : "bg-line-subtle text-fg-muted"
              )}
            >
              {i < step ? <CheckCircle className="h-4 w-4 sm:h-[18px] sm:w-[18px]" /> : i + 1}
            </div>
            {i < steps.length - 1 && (
              <div
                className={cn(
                  "h-0.5 w-5 rounded transition-all duration-300 sm:w-10 md:w-12",
                  i < step ? "bg-emerald-500" : "bg-line-subtle"
                )}
              />
            )}
          </div>
        ))}
      </div>
      <p className="mb-3 px-3 text-center text-xs text-fg-muted sm:text-sm">
        {steps[step].label} · {steps[step].sublabel}
      </p>

      <div
        className={cn(
          "relative overflow-hidden px-4 pb-4 sm:px-5 sm:pb-5",
          DEMO_STAGE_MIN_H
        )}
      >
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="entry"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-3 bottom-4 top-0 flex flex-col items-center justify-center gap-5 sm:inset-x-5"
            >
              <div className="flex w-full max-w-xs items-center justify-between text-xs text-fg-muted sm:text-sm">
                <span>{labels.landingHint}</span>
                <span className="rounded-md border border-line-subtle px-2 py-1 text-[11px] sm:text-xs">{labels.themeHint}</span>
              </div>
              <motion.button
                type="button"
                layout
                className="flex items-center gap-3 rounded-xl border border-line-subtle bg-bg-surface px-6 py-3.5 text-sm font-medium text-fg-primary shadow-sm sm:text-base"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-xs font-bold text-white sm:h-8 sm:w-8">
                  G
                </span>
                {labels.googleButton}
              </motion.button>
              <p className="text-center text-xs text-fg-muted sm:text-sm">/ · OAuth → /dashboard</p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-3 bottom-4 top-0 flex flex-col justify-center sm:inset-x-5"
            >
              <p className="mb-3 text-xs font-medium text-fg-muted sm:text-sm">{labels.dashboardRoute}</p>
              <motion.div
                className="flex cursor-default items-center gap-4 rounded-xl border border-blue-600/30 bg-blue-500/[0.08] p-4 dark:bg-blue-500/10 sm:p-5"
                animate={{ boxShadow: ["0 0 0 0 rgba(37,99,235,0)", "0 0 0 4px rgba(37,99,235,0.12)", "0 0 0 0 rgba(37,99,235,0)"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <FileText className="h-10 w-10 shrink-0 text-blue-600 dark:text-blue-400 sm:h-12 sm:w-12" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-semibold text-fg-primary sm:text-base">{labels.analyzeCard}</p>
                  <p className="mt-1 text-xs text-fg-muted sm:text-sm">→ /analise</p>
                </div>
              </motion.div>
              <p className="mt-3 text-[11px] leading-snug text-fg-muted sm:text-xs">{labels.navSecondary}</p>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-3 bottom-4 top-0 flex flex-col items-center justify-center sm:inset-x-5"
            >
              <div className="mb-5 w-full max-w-sm rounded-2xl border-2 border-dashed border-blue-600/40 bg-blue-500/[0.08] px-4 py-5 dark:bg-blue-500/10 sm:py-6">
                <div className="flex flex-col items-center">
                  <Upload className="mb-2 h-10 w-10 text-blue-600/70 dark:text-blue-400/80 sm:h-12 sm:w-12" strokeWidth={1.5} />
                  <p className="text-center text-sm font-medium text-fg-primary sm:text-base">{labels.uploadTitle}</p>
                  <p className="mt-1 text-center text-xs text-fg-secondary sm:text-sm">{labels.uploadHint}</p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.35 }}
                    className="mt-3 flex w-full items-center gap-2 rounded-lg border border-line-subtle bg-bg-surface px-3 py-2"
                  >
                    <FileText className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" />
                    <span className="truncate text-xs font-medium text-fg-primary sm:text-sm">{labels.fileName}</span>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.3 }}
                className="rounded-full bg-blue-600 px-8 py-2.5 text-sm font-semibold text-white dark:bg-blue-500 sm:text-base"
              >
                {labels.analyzeButton}
              </motion.div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-3 bottom-4 top-0 flex flex-col items-center justify-center sm:inset-x-5"
            >
              <Loader2 className="mb-4 h-12 w-12 animate-spin text-blue-600 dark:text-blue-400 sm:h-14 sm:w-14" strokeWidth={1.5} />
              <p className="mb-3 text-center text-sm font-medium text-fg-primary sm:text-base">{labels.analyzingTitle}</p>
              <div className="h-2 w-52 overflow-hidden rounded-full bg-line-subtle sm:w-64">
                <motion.div
                  className="h-full rounded-full bg-blue-600 dark:bg-blue-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </div>
              <p className="mt-3 text-center text-xs text-fg-muted sm:text-sm">{labels.progressHint}</p>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-3 bottom-4 top-0 flex min-h-0 flex-col overflow-hidden sm:inset-x-5"
            >
              <div className="mb-3 flex items-center gap-1 rounded-lg bg-line-subtle/60 p-1 dark:bg-bg-primary">
                {labels.tabs.map((t, i) => (
                  <span
                    key={t}
                    className={cn(
                      "flex-1 rounded-md px-2 py-2 text-center text-xs font-semibold transition-colors sm:text-sm",
                      i === activeTab ? "bg-bg-surface text-fg-primary shadow-sm" : "text-fg-muted"
                    )}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <motion.span
                  className="inline-flex items-center gap-1.5 rounded-full border border-blue-600/30 bg-blue-500/[0.08] px-3 py-2 text-xs font-medium text-blue-700 dark:text-blue-400 sm:text-sm"
                  animate={{ opacity: [1, 0.78, 1] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                >
                  <CalendarPlus className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  {labels.addCalendarButton}
                </motion.span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line-subtle px-3 py-2 text-xs font-medium text-fg-secondary sm:text-sm">
                  <Download className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  {labels.exportButton}
                </span>
              </div>
              <p className="mb-3 text-[11px] leading-snug text-fg-secondary sm:text-xs">{labels.importHint}</p>
              <div className="mb-2 flex shrink-0 items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 sm:h-5 sm:w-5" />
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 sm:text-sm">{labels.doneLabel}</span>
              </div>

              <div className="min-h-0 flex-1 overflow-hidden pr-0.5">
                <AnimatePresence mode="wait">
                  {activeTab === 0 && (
                    <motion.div
                      key="tab-daily"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="flex min-h-full flex-col space-y-3 sm:space-y-4"
                    >
                      <div className="rounded-xl border border-emerald-600/25 bg-emerald-500/[0.07] px-3 py-3 dark:bg-emerald-500/10 sm:px-5 sm:py-4">
                        <p className="text-base font-semibold text-fg-primary sm:text-lg">{labels.dailyDateLabel}</p>
                        <p className="mt-1.5 text-xs leading-relaxed text-fg-muted sm:text-sm">{labels.dailyModeHint}</p>
                      </div>
                      {labels.dailyLines.map((item, i) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between rounded-lg border border-line-subtle bg-bg-primary/80 py-3 px-3 dark:bg-bg-primary sm:py-4 sm:px-5"
                        >
                          <span className="text-sm text-fg-secondary sm:text-base">{item.label}</span>
                          <span className="text-sm font-semibold tabular-nums text-fg-primary sm:text-base">{item.value}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                  {activeTab === 1 && (
                    <motion.div
                      key="tab-total"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="flex min-h-full flex-col space-y-3 sm:space-y-3.5"
                    >
                      <p className="rounded-lg border border-blue-600/20 bg-blue-500/[0.06] px-3 py-2.5 text-xs leading-relaxed text-fg-secondary dark:bg-blue-500/10 sm:px-4 sm:py-3 sm:text-sm">
                        {labels.totalModeHint}
                      </p>
                      {labels.rows.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center justify-between rounded-lg bg-bg-primary/80 py-3 px-3 dark:bg-bg-primary sm:px-5"
                        >
                          <span className="text-sm text-fg-secondary sm:text-base">{item.label}</span>
                          <span className="text-sm font-semibold tabular-nums text-fg-primary sm:text-base">{item.value}</span>
                        </div>
                      ))}
                      <div className="mt-auto flex items-center justify-between rounded-lg border border-blue-600/25 bg-blue-500/[0.1] py-3.5 px-3 sm:px-5">
                        <span className="text-sm font-semibold text-blue-800 dark:text-blue-300 sm:text-base">{labels.totalLabel}</span>
                        <span className="text-base font-bold tabular-nums text-blue-700 dark:text-blue-400 sm:text-lg">{labels.totalValue}</span>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === 2 && (
                    <motion.div
                      key="tab-sheet"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="flex min-h-full flex-col"
                    >
                      <p className="mb-3 text-xs leading-relaxed text-fg-muted sm:mb-4 sm:text-sm">{labels.sheetModeHint}</p>
                      <div className="min-h-0 min-w-0 flex-1 overflow-hidden rounded-xl border border-line-subtle">
                        <table className="w-full border-collapse text-left text-sm sm:text-base">
                          <thead>
                            <tr className="border-b border-line-subtle bg-bg-primary/90 dark:bg-bg-primary">
                              {labels.sheetColumnLabels.map((col, i) => (
                                <th key={`${col}-${i}`} className="whitespace-nowrap px-3 py-2.5 font-semibold text-fg-muted sm:px-4 sm:py-3">
                                  {col}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {labels.sheetRows.map((row, ri) => (
                              <tr
                                key={ri}
                                className={cn(
                                  "border-b border-line-subtle/80 last:border-0",
                                  ri % 2 === 1 && "bg-bg-primary/40 dark:bg-bg-primary/30"
                                )}
                              >
                                {row.cells.map((cell, ci) => (
                                  <td key={ci} className="whitespace-nowrap px-3 py-2 tabular-nums text-fg-primary sm:px-4 sm:py-2.5">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <AnimatePresence>
                {showToast ? (
                  <motion.div
                    key="toast"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="pointer-events-none absolute bottom-2 left-3 right-3 rounded-xl border border-emerald-600/30 bg-emerald-500/15 px-3 py-2.5 text-center text-xs font-medium text-emerald-800 dark:text-emerald-300 sm:text-sm"
                  >
                    {labels.toastMessage}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DemoWindowChrome>
  );
}

function CalendarDemo({ labels }: { labels: LumaCalendarDemoLabels }) {
  const [step, setStep] = useState(0);
  const [bookPhase, setBookPhase] = useState(0);
  const calSteps = labels.steps;
  const nCal = calSteps.length;

  useEffect(() => {
    /** Índices 0–3: vista → formulário → resumo “salvo” → livro-caixa (último com fases internas). */
    const durations = [3800, 3200, 3000, 14000] as const;
    const timer = setTimeout(() => {
      setStep((prev) => (prev + 1) % nCal);
    }, durations[step] ?? 3200);
    return () => clearTimeout(timer);
  }, [step, nCal]);

  useEffect(() => {
    if (step !== nCal - 1) {
      setBookPhase(0);
      return;
    }
    setBookPhase(0);
    const t1 = setTimeout(() => setBookPhase(1), 2600);
    const t2 = setTimeout(() => setBookPhase(2), 7200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [step, nCal]);

  return (
    <DemoWindowChrome title={labels.chrome}>
      <div className="flex flex-wrap items-center justify-center gap-2 px-3 pb-2 pt-4 sm:gap-2.5 sm:px-5">
        {calSteps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-1.5 sm:gap-2">
            <div
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300 sm:h-8 sm:w-8 sm:text-xs",
                i < step
                  ? "bg-emerald-500 text-white"
                  : i === step
                    ? "bg-blue-600 text-white"
                    : "bg-line-subtle text-fg-muted"
              )}
            >
              {i < step ? <CheckCircle className="h-4 w-4 sm:h-[18px] sm:w-[18px]" /> : i + 1}
            </div>
            {i < calSteps.length - 1 && (
              <div
                className={cn(
                  "h-0.5 w-5 rounded transition-all duration-300 sm:w-10 md:w-12",
                  i < step ? "bg-emerald-500" : "bg-line-subtle"
                )}
              />
            )}
          </div>
        ))}
      </div>
      <p className="mb-3 px-3 text-center text-xs text-fg-muted sm:text-sm">
        {calSteps[step].label} · {calSteps[step].sublabel}
      </p>

      <div
        className={cn(
          "relative overflow-hidden px-4 pb-4 sm:px-5 sm:pb-5",
          DEMO_STAGE_MIN_H
        )}
      >
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="cal-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-3 bottom-4 top-0 flex flex-col overflow-hidden sm:inset-x-5"
            >
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className="rounded-full border border-line-subtle bg-bg-surface px-3 py-2 text-xs font-medium text-fg-primary sm:text-sm"
                >
                  {labels.headerNewEntry}
                </button>
                <button
                  type="button"
                  className="rounded-full border border-line-subtle px-3 py-2 text-xs font-medium text-fg-secondary sm:text-sm"
                >
                  {labels.printBookLabel}
                </button>
              </div>
              <p className="mb-3 text-[11px] leading-snug text-fg-secondary sm:text-xs">{labels.printBookHint}</p>
              <div className="mb-3 flex items-center justify-between gap-2 rounded-xl border border-line-subtle bg-bg-primary/50 px-3 py-2.5 text-xs dark:bg-bg-primary sm:gap-3 sm:px-4 sm:py-3 sm:text-sm">
                <div className="min-w-0 flex-1 text-center">
                  <div className="text-fg-muted">{labels.topExpense}</div>
                  <div className="mt-0.5 font-semibold tabular-nums text-red-600 dark:text-red-400">{labels.expenseValue}</div>
                </div>
                <div className="min-w-0 flex-1 text-center">
                  <div className="text-fg-muted">{labels.topRevenue}</div>
                  <div className="mt-0.5 font-semibold tabular-nums text-emerald-600 dark:text-emerald-400">{labels.revenueValue}</div>
                </div>
                <div className="min-w-0 flex-1 text-center">
                  <div className="text-fg-muted">{labels.topBalance}</div>
                  <div className="mt-0.5 font-semibold tabular-nums text-blue-700 dark:text-blue-400">{labels.balanceValue}</div>
                </div>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <ChevronLeft className="h-5 w-5 text-fg-muted" aria-hidden />
                <span className="text-sm font-semibold text-fg-primary sm:text-base">{labels.monthTitle}</span>
                <ChevronRight className="h-5 w-5 text-fg-muted" aria-hidden />
              </div>
              <div className="mb-1 grid grid-cols-7 gap-1">
                {labels.weekdaysShort.map((d, i) => (
                  <div key={`${d}-${i}`} className="py-1 text-center text-[10px] font-semibold text-fg-muted sm:text-xs">
                    {d}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, i) => {
                  const hasMark = day.r || day.x;
                  return (
                    <motion.div
                      key={i}
                      initial={hasMark ? { scale: 0.92 } : undefined}
                      animate={hasMark ? { scale: 1 } : undefined}
                      transition={hasMark ? { delay: i * 0.012, duration: 0.22 } : undefined}
                      className={cn(
                        "relative flex min-h-[2.5rem] flex-col items-center justify-center rounded-md py-1 text-xs sm:min-h-[2.85rem] sm:text-sm",
                        !day.d && "opacity-0",
                        hasMark && "ring-1 ring-line-subtle/80",
                        "text-fg-secondary"
                      )}
                    >
                      <span className={cn("leading-none", hasMark && "font-semibold text-fg-primary")}>{day.d}</span>
                      {(day.r || day.x) && (
                        <span className="mt-1 flex items-center justify-center gap-1" aria-hidden>
                          {day.r ? (
                            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 shadow-sm ring-1 ring-emerald-600/40 dark:bg-emerald-400" />
                          ) : null}
                          {day.x ? (
                            <span className="h-2 w-2 shrink-0 rounded-full bg-red-500 shadow-sm ring-1 ring-red-600/40 dark:bg-red-400" />
                          ) : null}
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
              <p className="mt-auto pt-2 text-xs leading-snug text-fg-muted sm:text-sm">
                <span className="font-medium text-fg-secondary">{labels.calendarLegend}</span>
                {" · "}
                {labels.analysisHint}
              </p>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="cal-add"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-3 bottom-4 top-0 flex flex-col overflow-hidden sm:inset-x-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold text-fg-primary sm:text-base">{labels.newEntryTitle}</span>
                <Plus className="h-5 w-5 text-blue-600 dark:text-blue-400" aria-hidden />
              </div>
              <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden sm:gap-2.5">
                {labels.fields.map((field, i) => (
                  <motion.div
                    key={field.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-xs font-medium text-fg-muted sm:text-sm">{field.label}</span>
                    <div className="rounded-lg border border-line-subtle bg-bg-primary px-3 py-2 text-sm text-fg-primary">
                      {field.value}
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-auto flex justify-end"
                >
                  <div className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white dark:bg-blue-500">
                    {labels.saveLabel}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="cal-summary"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-3 bottom-4 top-0 flex flex-col overflow-hidden sm:inset-x-5"
            >
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{labels.savedLabel}</span>
              </div>
              <p className="mb-3 text-sm font-semibold text-fg-primary sm:text-base">{labels.summaryTitle}</p>
              <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0, duration: 0.3 }}
                  className="flex items-center justify-between rounded-xl bg-bg-primary/80 py-2.5 px-3 dark:bg-bg-primary sm:px-4"
                >
                  <span className="text-xs text-fg-secondary sm:text-sm">{labels.revenueLabel}</span>
                  <span className="text-sm font-semibold tabular-nums text-emerald-600 dark:text-emerald-400">
                    {labels.revenueValue}
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12, duration: 0.3 }}
                  className="flex items-center justify-between rounded-xl bg-bg-primary/80 py-2.5 px-3 dark:bg-bg-primary sm:px-4"
                >
                  <span className="text-xs text-fg-secondary sm:text-sm">{labels.expenseLabel}</span>
                  <span className="text-sm font-semibold tabular-nums text-red-600 dark:text-red-400">
                    {labels.expenseValue}
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.28, duration: 0.3 }}
                  className="mt-1 flex items-center justify-between rounded-xl border border-blue-600/25 bg-blue-500/[0.08] py-3 px-3 dark:bg-blue-500/10 sm:px-4"
                >
                  <span className="text-sm font-medium text-blue-700 dark:text-blue-400">{labels.balanceLabel}</span>
                  <span className="text-base font-bold tabular-nums text-blue-700 dark:text-blue-400">
                    {labels.balanceValue}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="cal-book"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-3 bottom-4 top-0 flex min-h-0 flex-col overflow-hidden sm:inset-x-5"
            >
              <div className="mb-2 flex items-center gap-2">
                <Printer className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden />
                <span className="text-sm font-semibold text-fg-primary sm:text-base">{labels.bookTitle}</span>
              </div>
              <p className="mb-3 text-[11px] leading-snug text-fg-secondary sm:text-xs">{labels.bookPeriodTitle}</p>

              {bookPhase === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-0 flex-1 flex-col gap-3"
                >
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="rounded-lg border border-line-subtle bg-bg-primary/80 px-3 py-2 dark:bg-bg-primary sm:px-4 sm:py-2.5">
                      <span className="text-[10px] font-medium text-fg-muted sm:text-xs">{labels.bookFromLabel}</span>
                      <p className="mt-0.5 text-sm font-semibold tabular-nums text-fg-primary sm:text-base">
                        {labels.bookFromValue}
                      </p>
                    </div>
                    <div className="rounded-lg border border-line-subtle bg-bg-primary/80 px-3 py-2 dark:bg-bg-primary sm:px-4 sm:py-2.5">
                      <span className="text-[10px] font-medium text-fg-muted sm:text-xs">{labels.bookToLabel}</span>
                      <p className="mt-0.5 text-sm font-semibold tabular-nums text-fg-primary sm:text-base">
                        {labels.bookToValue}
                      </p>
                    </div>
                  </div>
                  <p className="text-[10px] leading-snug text-fg-muted sm:text-xs">{labels.bookFlowHint}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    <span className="rounded-full border border-blue-600/40 bg-blue-500/15 px-4 py-2 text-xs font-semibold text-blue-800 dark:text-blue-300 sm:text-sm">
                      {labels.bookPdfLabel}
                    </span>
                    <span className="rounded-full border border-line-subtle px-4 py-2 text-xs font-medium text-fg-secondary sm:text-sm">
                      {labels.bookExcelLabel}
                    </span>
                  </div>
                </motion.div>
              )}

              {bookPhase === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-1 flex-col items-center justify-center gap-4 py-4"
                >
                  <Loader2 className="h-11 w-11 animate-spin text-blue-600 dark:text-blue-400 sm:h-12 sm:w-12" strokeWidth={1.5} />
                  <p className="text-center text-xs font-medium text-fg-primary sm:text-sm">{labels.bookGenerating}</p>
                  <div className="h-2 w-full max-w-[200px] overflow-hidden rounded-full bg-line-subtle sm:max-w-[240px]">
                    <motion.div
                      className="h-full rounded-full bg-blue-600 dark:bg-blue-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 2.8, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              )}

              {bookPhase === 2 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="flex min-h-0 min-w-0 flex-1 flex-col gap-1 overflow-hidden"
                >
                  <p className="shrink-0 text-[11px] font-medium leading-tight text-fg-secondary sm:text-xs">
                    {labels.bookPreviewKicker}
                  </p>
                  <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-lg border border-line-subtle bg-bg-surface shadow-card dark:shadow-card-dark">
                    <div className="flex min-h-0 flex-1 flex-col justify-start overflow-hidden px-2.5 pb-1.5 pt-1.5 sm:px-3 sm:pb-2 sm:pt-2">
                      <div className="mb-2 flex shrink-0 items-end justify-between gap-1.5 border-b border-line-subtle pb-1.5 sm:gap-2 sm:pb-2">
                        <span className="text-xs font-bold tracking-tight text-fg-primary sm:text-sm">
                          {labels.bookPreviewCaixa}
                        </span>
                        <span className="min-w-0 shrink text-center text-[10px] font-bold leading-tight text-blue-700 dark:text-blue-400 sm:text-xs">
                          {labels.bookPreviewMonthBanner}
                        </span>
                        <span className="shrink-0 text-[10px] tabular-nums text-fg-secondary sm:text-xs">{labels.bookPreviewFolio}</span>
                      </div>
                      <div className="min-h-0 min-w-0 flex-1 overflow-hidden">
                        <table className="w-full table-fixed border-collapse text-left text-[9px] leading-tight text-fg-primary sm:text-[10px] sm:leading-snug">
                          <colgroup>
                            <col className="w-[22%]" />
                            <col className="w-[36%]" />
                            <col className="w-[21%]" />
                            <col className="w-[21%]" />
                          </colgroup>
                          <thead>
                            <tr className="bg-bg-primary/50 dark:bg-bg-primary/80">
                              <th className="border border-line-subtle py-1 font-normal sm:py-1.5" />
                              <th className="border border-line-subtle py-1 font-normal sm:py-1.5" />
                              <th className="border border-line-subtle py-1 text-center text-[9px] font-semibold text-fg-secondary sm:py-1.5 sm:text-[10px]">
                                {labels.bookPreviewEntradasCol}
                              </th>
                              <th className="border border-line-subtle py-1 text-center text-[9px] font-semibold text-fg-secondary sm:py-1.5 sm:text-[10px]">
                                {labels.bookPreviewSaidasCol}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                colSpan={4}
                                className="border border-line-subtle bg-blue-500/[0.12] py-1 text-center text-[9px] font-bold text-blue-800 dark:bg-blue-500/20 dark:text-blue-300 sm:py-1.5 sm:text-[10px]"
                              >
                                {labels.bookPreviewDayBanner}
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-line-subtle px-1 py-1 font-mono tabular-nums text-fg-secondary sm:px-1.5 sm:py-1.5">
                                {labels.bookPreviewRow1Id}
                              </td>
                              <td className="min-w-0 border border-line-subtle px-1 py-1 break-words text-fg-primary sm:px-1.5 sm:py-1.5">
                                {labels.bookPreviewRow1Desc}
                              </td>
                              <td className="border border-line-subtle bg-bg-primary/20 dark:bg-bg-primary/40" />
                              <td className="border border-line-subtle px-1 py-1 text-right text-[10px] font-semibold tabular-nums text-red-600 dark:text-red-400 sm:px-1.5 sm:py-1.5 sm:text-xs">
                                {labels.bookPreviewRow1Saida}
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-line-subtle px-1 py-1 font-mono tabular-nums text-fg-secondary sm:px-1.5 sm:py-1.5">
                                {labels.bookPreviewRow2Id}
                              </td>
                              <td className="min-w-0 border border-line-subtle px-1 py-1 break-words text-fg-primary sm:px-1.5 sm:py-1.5">
                                {labels.bookPreviewRow2Desc}
                              </td>
                              <td className="border border-line-subtle px-1 py-1 text-right text-[10px] font-semibold tabular-nums text-emerald-600 dark:text-emerald-400 sm:px-1.5 sm:py-1.5 sm:text-xs">
                                {labels.bookPreviewRow2Entrada}
                              </td>
                              <td className="border border-line-subtle bg-bg-primary/20 dark:bg-bg-primary/40" />
                            </tr>
                            <tr className="bg-bg-primary/25 dark:bg-bg-primary/50">
                              <td className="border border-line-subtle" />
                              <td className="border border-line-subtle px-1 py-1 text-[10px] font-bold text-fg-primary sm:px-1.5 sm:py-1.5 sm:text-xs">
                                {labels.bookPreviewTotalDia}
                              </td>
                              <td className="border border-line-subtle px-1 py-1 text-right text-[10px] font-bold tabular-nums text-fg-primary sm:px-1.5 sm:py-1.5 sm:text-xs">
                                {labels.bookPreviewTotalDiaEntrada}
                              </td>
                              <td className="border border-line-subtle px-1 py-1 text-right text-[10px] font-bold tabular-nums text-fg-primary sm:px-1.5 sm:py-1.5 sm:text-xs">
                                {labels.bookPreviewTotalDiaSaida}
                              </td>
                            </tr>
                            <tr className="bg-emerald-500/[0.08] dark:bg-emerald-500/15">
                              <td className="border border-line-subtle" />
                              <td className="border border-line-subtle px-1 py-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 sm:px-1.5 sm:py-1.5 sm:text-xs">
                                {labels.bookPreviewSaldoAtual}
                              </td>
                              <td className="border border-line-subtle px-1 py-1 text-right text-[10px] font-bold tabular-nums text-emerald-700 dark:text-emerald-400 sm:px-1.5 sm:py-1.5 sm:text-xs">
                                {labels.bookPreviewSaldoAtualValue}
                              </td>
                              <td className="border border-line-subtle bg-bg-primary/15 dark:bg-bg-primary/30" />
                            </tr>
                            <tr className="[&_td]:border-t-2 [&_td]:border-line-subtle">
                              <td className="border border-line-subtle" />
                              <td className="border border-line-subtle px-1 py-1 text-[10px] font-bold text-fg-primary sm:px-1.5 sm:py-1.5 sm:text-xs">
                                {labels.bookPreviewTotalGeral}
                              </td>
                              <td className="border border-line-subtle px-1 py-1 text-right text-[10px] font-bold tabular-nums text-fg-primary sm:px-1.5 sm:py-1.5 sm:text-xs">
                                {labels.bookPreviewTotalGeralEntrada}
                              </td>
                              <td className="border border-line-subtle px-1 py-1 text-right text-[10px] font-bold tabular-nums text-fg-primary sm:px-1.5 sm:py-1.5 sm:text-xs">
                                {labels.bookPreviewTotalGeralSaida}
                              </td>
                            </tr>
                            <tr className="bg-bg-primary/35 dark:bg-bg-primary/60">
                              <td className="border border-line-subtle" />
                              <td className="border border-line-subtle px-1 py-1 text-[10px] font-bold text-fg-primary sm:px-1.5 sm:py-1.5 sm:text-xs">
                                {labels.bookPreviewSaldoFinal}
                              </td>
                              <td className="border border-line-subtle px-1 py-1 text-right text-[10px] font-bold tabular-nums text-fg-primary sm:px-1.5 sm:py-1.5 sm:text-xs">
                                {labels.bookPreviewSaldoFinalValue}
                              </td>
                              <td className="border border-line-subtle" />
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DemoWindowChrome>
  );
}

export function LumaProductDemosSection({ labels }: { labels: LumaProductDemosLabels }) {
  return (
    <div className="border-t border-line-subtle bg-bg-primary/25 p-7 md:p-9 dark:bg-bg-primary/40">
      <h3 className="text-h3 font-semibold tracking-tight text-fg-primary">
        {labels.sectionTitle}
      </h3>
      <p className="mt-2 max-w-3xl text-caption text-fg-secondary">{labels.sectionSubtitle}</p>
      <div className="mt-4 max-w-3xl space-y-2 text-caption leading-relaxed text-fg-secondary">
        <p>{labels.noteImportCalendar}</p>
        <p>{labels.notePrintBook}</p>
      </div>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <AnalysisDemo labels={labels.analysis} />
        <CalendarDemo labels={labels.calendar} />
      </div>
    </div>
  );
}
