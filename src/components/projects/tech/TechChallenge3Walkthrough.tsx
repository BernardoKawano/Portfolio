"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  GitBranch,
  Pause,
  Play,
  Send,
  ShieldCheck,
  SquareTerminal,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STAGE_MIN_H =
  "min-h-[26rem] h-[26rem] sm:min-h-[30rem] sm:h-[30rem] lg:min-h-[32rem] lg:h-[32rem]";

const AUTOPLAY_MS = 5200;

export type TechChallenge3WalkthroughLabels = {
  sectionTitle: string;
  sectionSubtitle: string;
  videoBadge: string;
  noteIllustrative: string;
  sceneLabels: readonly string[];
  tabs: {
    chat: string;
    graph: string;
    output: string;
  };
  controls: {
    autoplay: string;
    autoplayHint: string;
    selectSceneHint: string;
  };
  chat: {
    chrome: string;
    route: string;
    modelBadge: string;
    prompt: string;
    context: string;
    userQuestion: string;
    assistantDraft: string;
  };
  graph: {
    chrome: string;
    route: string;
    title: string;
    inputNode: string;
    generateNode: string;
    guardrailsNode: string;
    auditNode: string;
    finalNode: string;
    statusRunning: string;
  };
  output: {
    chrome: string;
    route: string;
    title: string;
    guardrailAnalysis: string;
    finalAnswer: string;
    auditLog: string;
    complianceTag: string;
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

function ChatScene({ c }: { c: TechChallenge3WalkthroughLabels["chat"] }) {
  return (
    <DemoWindowChrome title={c.chrome}>
      <div className={cn("flex flex-col p-4 sm:p-5", STAGE_MIN_H)}>
        <p className="text-[10px] font-mono text-fg-muted sm:text-xs">{c.route}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="rounded-pill border border-line-subtle px-2 py-0.5 text-[10px] text-fg-muted">
            {c.modelBadge}
          </span>
          <Bot className="h-4 w-4 text-fg-muted" aria-hidden />
        </div>
        <div className="mt-3 space-y-2 rounded-lg border border-line-subtle bg-bg-primary/30 p-3">
          <p className="text-[10px] text-fg-muted">{c.prompt}</p>
          <p className="rounded-md border border-line-subtle bg-bg-surface px-2 py-1.5 text-xs text-fg-secondary">
            {c.context}
          </p>
        </div>
        <div className="mt-3 self-end rounded-lg border border-blue-600/25 bg-blue-500/[0.08] px-3 py-2 text-xs text-fg-primary dark:bg-blue-500/10">
          {c.userQuestion}
        </div>
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="mt-2 self-start rounded-md bg-line-subtle px-2 py-1 text-[10px] text-fg-muted"
        >
          <SquareTerminal className="mr-1 inline h-3 w-3" aria-hidden />
          thinking...
        </motion.div>
        <div className="mt-2 rounded-lg border border-line-subtle bg-bg-surface p-3 text-xs leading-relaxed text-fg-secondary">
          {c.assistantDraft}
        </div>
        <button
          type="button"
          className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-pill border border-line-subtle px-3 py-1.5 text-xs text-fg-secondary"
        >
          <Send className="h-3.5 w-3.5" aria-hidden />
          Run pipeline
        </button>
      </div>
    </DemoWindowChrome>
  );
}

function GraphScene({ g }: { g: TechChallenge3WalkthroughLabels["graph"] }) {
  const nodes = [g.inputNode, g.generateNode, g.guardrailsNode, g.auditNode, g.finalNode];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((v) => (v + 1) % nodes.length), 900);
    return () => clearInterval(t);
  }, [nodes.length]);

  return (
    <DemoWindowChrome title={g.chrome}>
      <div className={cn("flex flex-col p-4 sm:p-5", STAGE_MIN_H)}>
        <p className="text-[10px] font-mono text-fg-muted sm:text-xs">{g.route}</p>
        <div className="mt-3 flex items-center justify-between rounded-lg border border-line-subtle bg-bg-primary/30 px-3 py-2">
          <p className="text-xs font-semibold text-fg-primary">{g.title}</p>
          <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
            {g.statusRunning}
          </span>
        </div>
        <div className="mt-4 flex-1 space-y-2">
          {nodes.map((label, index) => (
            <motion.div
              key={label}
              animate={{
                opacity: active === index ? 1 : 0.62,
                x: active === index ? 4 : 0,
              }}
              transition={{ duration: 0.3 }}
              className={cn(
                "flex items-center gap-2 rounded-lg border px-3 py-2 text-xs",
                active === index
                  ? "border-fg-primary bg-bg-surface text-fg-primary"
                  : "border-line-subtle bg-bg-primary/20 text-fg-secondary"
              )}
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-bg-primary text-[10px] font-semibold">
                {index + 1}
              </span>
              <span>{label}</span>
              {index === 2 ? <ShieldCheck className="ml-auto h-3.5 w-3.5" aria-hidden /> : null}
              {index !== 2 ? <GitBranch className="ml-auto h-3.5 w-3.5" aria-hidden /> : null}
            </motion.div>
          ))}
        </div>
      </div>
    </DemoWindowChrome>
  );
}

function OutputScene({ o }: { o: TechChallenge3WalkthroughLabels["output"] }) {
  return (
    <DemoWindowChrome title={o.chrome}>
      <div className={cn("flex flex-col p-4 sm:p-5", STAGE_MIN_H)}>
        <p className="text-[10px] font-mono text-fg-muted sm:text-xs">{o.route}</p>
        <p className="mt-3 text-caption font-semibold text-fg-primary">{o.title}</p>
        <div className="mt-3 rounded-lg border border-line-subtle bg-bg-primary/20 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-fg-muted">
            Guardrails
          </p>
          <p className="mt-1 text-xs text-fg-secondary">{o.guardrailAnalysis}</p>
        </div>
        <div className="mt-3 rounded-lg border border-blue-600/25 bg-blue-500/[0.08] p-3 text-xs leading-relaxed text-fg-primary dark:bg-blue-500/10">
          {o.finalAnswer}
        </div>
        <div className="mt-3 rounded-lg border border-line-subtle bg-bg-surface p-3 text-[10px] text-fg-muted sm:text-xs">
          {o.auditLog}
        </div>
        <span className="mt-auto inline-flex w-fit rounded-pill border border-emerald-600/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
          {o.complianceTag}
        </span>
      </div>
    </DemoWindowChrome>
  );
}

export function TechChallenge3WalkthroughSection({
  labels,
}: {
  labels: TechChallenge3WalkthroughLabels;
}) {
  const [scene, setScene] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return undefined;
    const t = setInterval(() => setScene((s) => (s + 1) % 3), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [autoplay]);

  const onSelectScene = useCallback((index: number) => setScene(index), []);
  const sceneIcons = [Bot, GitBranch, ShieldCheck] as const;
  const sceneTitles = [labels.tabs.chat, labels.tabs.graph, labels.tabs.output] as const;

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
            {scene === 0 ? <ChatScene c={labels.chat} /> : null}
            {scene === 1 ? <GraphScene g={labels.graph} /> : null}
            {scene === 2 ? <OutputScene o={labels.output} /> : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

