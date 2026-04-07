"use client";

import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  FileText,
  Map,
  MapPin,
  Pause,
  Play,
  PlayCircle,
  RefreshCw,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STAGE_MIN_H =
  "min-h-[26rem] h-[26rem] sm:min-h-[30rem] sm:h-[30rem] lg:min-h-[32rem] lg:h-[32rem]";

const AUTOPLAY_MS = 5200;

const VEHICLE_COLORS = ["#2563EB", "#059669", "#D97706"] as const;

/** Depot + three route arms — same geometry as antes, usado para desenho e camera. */
const ROUTE_POINTS = [
  [
    { x: 14, y: 78 },
    { x: 22, y: 62 },
    { x: 33, y: 55 },
    { x: 44, y: 46 },
    { x: 56, y: 39 },
    { x: 66, y: 31 },
  ],
  [
    { x: 14, y: 78 },
    { x: 20, y: 70 },
    { x: 32, y: 69 },
    { x: 45, y: 66 },
    { x: 58, y: 62 },
    { x: 72, y: 58 },
  ],
  [
    { x: 14, y: 78 },
    { x: 25, y: 82 },
    { x: 37, y: 86 },
    { x: 50, y: 84 },
    { x: 63, y: 77 },
    { x: 76, y: 72 },
  ],
] as const;

export type TechChallenge2WalkthroughLabels = {
  sectionTitle: string;
  sectionSubtitle: string;
  videoBadge: string;
  noteIllustrative: string;
  sceneLabels: readonly string[];
  tabs: {
    live: string;
    map: string;
    overview: string;
    report: string;
    chat: string;
  };
  controls: {
    autoplay: string;
    autoplayHint: string;
    selectSceneHint: string;
  };
  live: {
    chrome: string;
    route: string;
    status: string;
    action: string;
    metricGeneration: string;
    metricDistance: string;
    metricPriority: string;
    progress: string;
    simulationCaption: string;
  };
  map: {
    chrome: string;
    route: string;
    title: string;
    subtitle: string;
    info: string;
    embedNote: string;
    layersNote: string;
    legendTitle: string;
    legendDepot: string;
    legendCritical: string;
    legendStandard: string;
    legendPolyline: string;
    districtNorth: string;
    districtEast: string;
    districtSouth: string;
    attribution: string;
    uiFolium: string;
    uiLeaflet: string;
    uiEmbed: string;
    poiCd: string;
    poiHNorte: string;
    poiUpa: string;
    poiSouth: string;
    poiIc: string;
    poiHub: string;
  };
  overview: {
    chrome: string;
    route: string;
    title: string;
    rows: readonly { vehicle: string; stops: string; distance: string; priority: string }[];
  };
  report: {
    chrome: string;
    route: string;
    title: string;
    bullets: readonly string[];
    footer: string;
  };
  chat: {
    chrome: string;
    route: string;
    prompt: string;
    answer: string;
    modelBadge: string;
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

function LiveScene({ l }: { l: TechChallenge2WalkthroughLabels["live"] }) {
  const [progress, setProgress] = useState(18);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setProgress((p) => (p >= 96 ? 22 : p + 12));
    }, 850);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTick((v) => (v + 1) % 30), 420);
    return () => clearInterval(t);
  }, []);

  const perVehicleStep = Math.min(6, Math.floor(tick / 2) + 1);
  const activeRouteIndex = Math.min(2, Math.floor(tick / 8));
  const routeEvents = [
    "V-01 → Hospital Municipal Norte",
    "V-02 → UPA Leste + Centro Clínico",
    "V-03 → Rede Sul (prioridade média)",
  ] as const;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <DemoWindowChrome title={l.chrome}>
        <div className={cn("flex flex-col p-4 sm:p-5", STAGE_MIN_H)}>
          <p className="text-[10px] font-mono text-fg-muted sm:text-xs">{l.route}</p>
          <div className="mt-3 flex items-center justify-between rounded-lg border border-line-subtle bg-bg-primary/40 px-3 py-2">
            <span className="text-xs text-fg-secondary">{l.status}</span>
            <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
              {l.action}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-line-subtle bg-bg-primary/30 p-2">
              <p className="text-[10px] text-fg-muted">{l.metricGeneration}</p>
              <p className="mt-1 text-sm font-semibold text-fg-primary">78 / 200</p>
            </div>
            <div className="rounded-lg border border-line-subtle bg-bg-primary/30 p-2">
              <p className="text-[10px] text-fg-muted">{l.metricDistance}</p>
              <p className="mt-1 text-sm font-semibold text-fg-primary">214.6 km</p>
            </div>
            <div className="rounded-lg border border-line-subtle bg-bg-primary/30 p-2">
              <p className="text-[10px] text-fg-muted">{l.metricPriority}</p>
              <p className="mt-1 text-sm font-semibold text-fg-primary">96%</p>
            </div>
          </div>
          <div className="mt-4 rounded-lg border border-line-subtle bg-bg-surface p-3">
            <div className="mb-2 flex items-center justify-between text-[10px] text-fg-muted">
              <span>{l.progress}</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-line-subtle">
              <motion.div
                className="h-full rounded-full bg-blue-600 dark:bg-blue-500"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="relative mt-3 flex-1 overflow-hidden rounded-lg border border-line-subtle bg-slate-950 p-2.5 shadow-[inset_0_0_48px_rgba(0,0,0,0.45)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(59,130,246,0.08),transparent_55%)]" />
            <div className="mb-2 flex items-center justify-between text-[10px] text-slate-300">
              <span className="inline-flex items-center gap-1">
                <Truck className="h-3.5 w-3.5" aria-hidden />
                {l.simulationCaption}
              </span>
              <span className="tabular-nums opacity-70">gen {tick}</span>
            </div>
            <svg
              viewBox="0 0 100 100"
              className="relative z-[1] h-[68%] w-full rounded-md border border-slate-700 bg-slate-900"
            >
              <rect x="0" y="0" width="100" height="100" fill="#0c1222" />
              <g opacity="0.14" stroke="#64748B" strokeWidth="0.35">
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`h-${i}`} x1="0" y1={10 + i * 10} x2="100" y2={10 + i * 10} />
                ))}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`v-${i}`} x1={10 + i * 10} y1="0" x2={10 + i * 10} y2="100" />
                ))}
              </g>
              {ROUTE_POINTS.map((route, routeIdx) =>
                route.slice(0, perVehicleStep).map((point, idx) => {
                  if (idx === 0) return null;
                  const prev = route[idx - 1];
                  return (
                    <motion.line
                      key={`${routeIdx}-${idx}`}
                      x1={prev.x}
                      y1={prev.y}
                      x2={point.x}
                      y2={point.y}
                      stroke={VEHICLE_COLORS[routeIdx]}
                      strokeWidth="1.85"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0.15 }}
                      animate={{ pathLength: 1, opacity: 0.95 }}
                      transition={{ duration: 0.32 }}
                    />
                  );
                })
              )}
              {ROUTE_POINTS.map((route, routeIdx) => {
                const idx = Math.min(route.length - 1, perVehicleStep - 1);
                const current = route[idx];
                return (
                  <motion.circle
                    key={`vehicle-${routeIdx}`}
                    cx={current.x}
                    cy={current.y}
                    r="2.1"
                    fill={VEHICLE_COLORS[routeIdx]}
                    animate={{ scale: [1, 1.32, 1] }}
                    transition={{ duration: 0.75, repeat: Infinity }}
                  />
                );
              })}
              {ROUTE_POINTS.flat().map((point, idx) => (
                <circle
                  key={`node-${idx}`}
                  cx={point.x}
                  cy={point.y}
                  r="0.85"
                  fill="#E2E8F0"
                  opacity="0.6"
                />
              ))}
            </svg>
            <div className="relative z-[1] mt-2.5 space-y-1.5 text-[10px] text-slate-300">
              {routeEvents.map((evt, idx) => (
                <motion.div
                  key={evt}
                  animate={{
                    opacity: activeRouteIndex === idx ? 1 : 0.55,
                    x: activeRouteIndex === idx ? 2 : 0,
                  }}
                  transition={{ duration: 0.35 }}
                  className={cn(
                    "rounded border px-2 py-1 transition-colors",
                    activeRouteIndex === idx
                      ? "border-blue-400/70 bg-blue-500/20 text-slate-50 ring-1 ring-blue-400/30"
                      : "border-slate-700"
                  )}
                >
                  {evt}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </DemoWindowChrome>
    </motion.div>
  );
}

function mapLandmarks(m: TechChallenge2WalkthroughLabels["map"]) {
  return [
    { x: 14, y: 78, kind: "depot" as const, label: m.poiCd },
    { x: 33, y: 55, kind: "critical" as const, label: m.poiHNorte },
    { x: 45, y: 66, kind: "std" as const, label: m.poiUpa },
    { x: 50, y: 84, kind: "std" as const, label: m.poiSouth },
    { x: 66, y: 31, kind: "critical" as const, label: m.poiIc },
    { x: 72, y: 58, kind: "std" as const, label: m.poiHub },
  ] as const;
}

function MapScene({ m }: { m: TechChallenge2WalkthroughLabels["map"] }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % 14), 480);
    return () => clearInterval(t);
  }, []);

  const segmentLimit = Math.min(6, Math.floor(step / 2) + 1);
  const camRoute = Math.min(2, Math.floor(step / 5));
  const camPoint =
    ROUTE_POINTS[camRoute][Math.min(segmentLimit, ROUTE_POINTS[camRoute].length - 1)];

  const camera = useMemo(() => {
    const cx = 50;
    const cy = 52;
    return {
      x: (cx - camPoint.x) * 0.42,
      y: (cy - camPoint.y) * 0.42,
      scale: 1.14,
    };
  }, [camPoint.x, camPoint.y]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <DemoWindowChrome title={m.chrome}>
        <div className={cn("flex flex-col p-4 sm:p-5", STAGE_MIN_H)}>
          <p className="text-[10px] font-mono text-fg-muted sm:text-xs">{m.route}</p>
          <p className="mt-2 text-caption font-semibold text-fg-primary">{m.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-fg-secondary">{m.subtitle}</p>
          <div className="mt-2 space-y-1 text-[10px] leading-relaxed text-fg-muted sm:text-xs">
            <p>{m.embedNote}</p>
            <p>{m.layersNote}</p>
          </div>

          <div className="relative mt-3 flex flex-1 flex-col overflow-hidden rounded-xl border border-emerald-900/20 bg-[#dfe8da] p-1 shadow-inner dark:border-emerald-900/40 dark:bg-[#1a2e22]">
            <div className="flex items-center justify-between gap-2 rounded-t-lg bg-white/80 px-2.5 py-2 dark:bg-slate-900/90">
              <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-semibold text-fg-primary">
                <span className="rounded border border-line-subtle bg-bg-surface px-1.5 py-0.5">
                  {m.uiFolium}
                </span>
                <span className="text-fg-muted">+</span>
                <span className="rounded border border-line-subtle bg-bg-surface px-1.5 py-0.5">
                  {m.uiLeaflet}
                </span>
                <span className="text-fg-muted">·</span>
                <span className="rounded border border-blue-600/25 bg-blue-500/10 px-1.5 py-0.5 text-blue-800 dark:text-blue-300">
                  {m.uiEmbed}
                </span>
              </div>
              <div className="flex gap-1">
                <span className="rounded border border-line-subtle bg-bg-surface px-2 py-0.5 text-[10px] text-fg-muted">
                  −
                </span>
                <span className="rounded border border-line-subtle bg-bg-surface px-2 py-0.5 text-[10px] text-fg-muted">
                  +
                </span>
              </div>
            </div>

            <div className="relative min-h-0 flex-1 overflow-hidden rounded-b-lg">
              <div
                className="pointer-events-none absolute inset-0 z-10 rounded-b-lg shadow-[inset_0_0_40px_rgba(0,0,0,0.12)] dark:shadow-[inset_0_0_48px_rgba(0,0,0,0.5)]"
                aria-hidden
              />
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full bg-[#c8d7c2] dark:bg-[#243d30]"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <linearGradient id="mapWater" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7ab8e0" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#5a9fd4" stopOpacity="0.85" />
                  </linearGradient>
                  <linearGradient id="mapPark" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#b8d4a8" />
                    <stop offset="100%" stopColor="#d2e6c8" />
                  </linearGradient>
                </defs>
                <rect width="100" height="100" fill="url(#mapPark)" className="dark:opacity-40" />
                <ellipse cx="18" cy="22" rx="14" ry="10" fill="url(#mapWater)" opacity="0.92" />
                <ellipse cx="82" cy="18" rx="11" ry="8" fill="url(#mapWater)" opacity="0.88" />
                <ellipse cx="64" cy="88" rx="16" ry="9" fill="url(#mapWater)" opacity="0.85" />

                <g opacity="0.55" stroke="#9ca89a" strokeWidth="0.35">
                  {[
                    "M 8 40 Q 35 38 55 42",
                    "M 12 55 Q 40 52 70 58",
                    "M 20 72 Q 48 68 88 75",
                    "M 30 28 L 85 35",
                    "M 5 65 L 40 88",
                  ].map((d, i) => (
                    <path key={i} d={d} fill="none" strokeLinecap="round" />
                  ))}
                </g>

                <text x="22" y="18" className="fill-slate-600 text-[3.2px] dark:fill-slate-300">
                  {m.districtNorth}
                </text>
                <text x="62" y="40" className="fill-slate-600 text-[3.2px] dark:fill-slate-300">
                  {m.districtEast}
                </text>
                <text x="38" y="92" className="fill-slate-600 text-[3.2px] dark:fill-slate-300">
                  {m.districtSouth}
                </text>

                <motion.g
                  animate={{ x: camera.x, y: camera.y, scale: camera.scale }}
                  transition={{ type: "spring", stiffness: 26, damping: 16 }}
                  style={{ transformOrigin: "50px 52px" }}
                >
                  {ROUTE_POINTS.map((route, routeIdx) =>
                    route.slice(0, segmentLimit).map((point, idx) => {
                      if (idx === 0) return null;
                      const prev = route[idx - 1];
                      return (
                        <motion.line
                          key={`map-${routeIdx}-${idx}`}
                          x1={prev.x}
                          y1={prev.y}
                          x2={point.x}
                          y2={point.y}
                          stroke={VEHICLE_COLORS[routeIdx]}
                          strokeWidth="2.1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          opacity="0.92"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.28 }}
                        />
                      );
                    })
                  )}

                  {ROUTE_POINTS.map((route, routeIdx) => {
                    const idx = Math.min(route.length - 1, segmentLimit - 1);
                    const current = route[idx];
                    return (
                      <motion.g key={`map-veh-${routeIdx}`}>
                        <motion.circle
                          cx={current.x}
                          cy={current.y}
                          r="3.5"
                          fill={VEHICLE_COLORS[routeIdx]}
                          fillOpacity="0.2"
                          animate={{ scale: [1, 1.35, 1] }}
                          transition={{ duration: 1.1, repeat: Infinity }}
                        />
                        <circle cx={current.x} cy={current.y} r="1.85" fill={VEHICLE_COLORS[routeIdx]} />
                      </motion.g>
                    );
                  })}

                  {mapLandmarks(m).map((poi) => (
                    <g key={`${poi.x}-${poi.y}-${poi.label}`}>
                      {poi.kind === "depot" ? (
                        <rect
                          x={poi.x - 2.2}
                          y={poi.y - 2.2}
                          width="4.4"
                          height="4.4"
                          rx="0.6"
                          fill="#475569"
                          stroke="#1e293b"
                          strokeWidth="0.4"
                        />
                      ) : (
                        <circle
                          cx={poi.x}
                          cy={poi.y}
                          r={poi.kind === "critical" ? 2.4 : 1.9}
                          fill={poi.kind === "critical" ? "#dc2626" : "#0369a1"}
                          stroke="#fff"
                          strokeWidth="0.45"
                        />
                      )}
                      {poi.kind === "critical" ? (
                        <text
                          x={poi.x}
                          y={poi.y - 4.2}
                          textAnchor="middle"
                          className="fill-red-800 text-[2.6px] font-bold dark:fill-red-200"
                        >
                          P1
                        </text>
                      ) : poi.kind === "std" ? (
                        <text
                          x={poi.x}
                          y={poi.y - 4}
                          textAnchor="middle"
                          className="fill-slate-800 text-[2.4px] font-semibold dark:fill-slate-100"
                        >
                          P2
                        </text>
                      ) : null}
                      <text
                        x={poi.x + 4}
                        y={poi.y + 1.2}
                        className="fill-slate-800 text-[2.5px] dark:fill-slate-100"
                      >
                        {poi.label}
                      </text>
                    </g>
                  ))}
                </motion.g>

                <rect
                  x="1"
                  y="76"
                  width="44"
                  height="22"
                  rx="1.5"
                  fill="rgba(255,255,255,0.88)"
                  stroke="rgba(15,23,42,0.12)"
                  strokeWidth="0.35"
                  className="dark:fill-slate-900/90 dark:stroke-slate-600"
                />
                <text
                  x="4"
                  y="81.5"
                  className="fill-slate-800 text-[2.8px] font-bold dark:fill-slate-100"
                >
                  {m.legendTitle}
                </text>
                <rect x="4" y="83.5" width="2.8" height="2.8" fill="#475569" />
                <text x="8.5" y="85.6" className="fill-slate-700 text-[2.4px] dark:fill-slate-300">
                  {m.legendDepot}
                </text>
                <circle cx="5.4" cy="89.5" r="1.35" fill="#dc2626" />
                <text x="8.5" y="90.2" className="fill-slate-700 text-[2.4px] dark:fill-slate-300">
                  {m.legendCritical}
                </text>
                <circle cx="5.4" cy="93.8" r="1.15" fill="#0369a1" />
                <text x="8.5" y="94.4" className="fill-slate-700 text-[2.4px] dark:fill-slate-300">
                  {m.legendStandard}
                </text>
                <line x1="26" y1="86" x2="36" y2="86" stroke="#2563EB" strokeWidth="1.2" strokeLinecap="round" />
                <text x="26" y="90.8" className="fill-slate-600 text-[2px] dark:fill-slate-400">
                  V-01
                </text>
                <line x1="26" y1="92.5" x2="36" y2="92.5" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" />
                <text x="26" y="97" className="fill-slate-600 text-[2px] dark:fill-slate-400">
                  V-02 · V-03
                </text>

                <text
                  x="98"
                  y="98"
                  textAnchor="end"
                  className="fill-slate-500 text-[2.1px] dark:fill-slate-400"
                >
                  {m.attribution}
                </text>
              </svg>
            </div>

            <div className="absolute bottom-2 left-2 right-2 z-20 rounded-lg border border-line-subtle/80 bg-bg-surface/95 px-2.5 py-2 text-[10px] leading-snug text-fg-secondary shadow-sm backdrop-blur-sm dark:bg-slate-950/90">
              <span className="flex items-start gap-1.5">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-fg-muted" aria-hidden />
                <span>
                  <span className="font-semibold text-fg-primary">{m.legendPolyline}</span>
                  {" · "}
                  {m.info}
                </span>
              </span>
            </div>
          </div>
        </div>
      </DemoWindowChrome>
    </motion.div>
  );
}

function OverviewScene({ o }: { o: TechChallenge2WalkthroughLabels["overview"] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <DemoWindowChrome title={o.chrome}>
        <div className={cn("flex flex-col p-4 sm:p-5", STAGE_MIN_H)}>
          <p className="text-[10px] font-mono text-fg-muted sm:text-xs">{o.route}</p>
          <p className="mt-3 text-caption font-semibold text-fg-primary">{o.title}</p>
          <div className="mt-3 flex-1 overflow-hidden rounded-lg border border-line-subtle">
            <table className="w-full text-left text-[10px] sm:text-xs">
              <thead className="bg-bg-primary/50 dark:bg-bg-primary/70">
                <tr>
                  <th className="px-2 py-2">Veículo</th>
                  <th className="px-2 py-2">Stops</th>
                  <th className="px-2 py-2">Dist.</th>
                  <th className="px-2 py-2">Prior.</th>
                </tr>
              </thead>
              <tbody>
                {o.rows.map((row, idx) => (
                  <motion.tr
                    key={`overview-row-${row.vehicle}-${idx}`}
                    animate={{
                      backgroundColor:
                        idx % 2 === 0 ? "rgba(15,23,42,0.02)" : "transparent",
                    }}
                    className="border-t border-line-subtle"
                  >
                    <td className="px-2 py-2 text-fg-secondary">{row.vehicle}</td>
                    <td className="px-2 py-2 text-fg-primary">{row.stops}</td>
                    <td className="px-2 py-2 tabular-nums text-fg-primary">{row.distance}</td>
                    <td className="px-2 py-2 tabular-nums text-emerald-700 dark:text-emerald-400">
                      {row.priority}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DemoWindowChrome>
    </motion.div>
  );
}

function ReportScene({ r }: { r: TechChallenge2WalkthroughLabels["report"] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <DemoWindowChrome title={r.chrome}>
        <div className={cn("flex flex-col p-4 sm:p-5", STAGE_MIN_H)}>
          <p className="text-[10px] font-mono text-fg-muted sm:text-xs">{r.route}</p>
          <p className="mt-3 text-caption font-semibold text-fg-primary">{r.title}</p>
          <div className="mt-3 flex-1 rounded-lg border border-line-subtle bg-bg-primary/20 p-3">
            <ul className="space-y-2 text-xs text-fg-secondary">
              {r.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fg-muted" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 border-t border-line-subtle pt-3 text-[10px] text-fg-muted sm:text-xs">
              {r.footer}
            </p>
          </div>
        </div>
      </DemoWindowChrome>
    </motion.div>
  );
}

function ChatScene({ c }: { c: TechChallenge2WalkthroughLabels["chat"] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <DemoWindowChrome title={c.chrome}>
        <div className={cn("flex flex-col p-4 sm:p-5", STAGE_MIN_H)}>
          <p className="text-[10px] font-mono text-fg-muted sm:text-xs">{c.route}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="rounded-pill border border-line-subtle px-2 py-0.5 text-[10px] text-fg-muted">
              {c.modelBadge}
            </span>
            <Bot className="h-4 w-4 text-fg-muted" aria-hidden />
          </div>
          <div className="mt-3 rounded-lg border border-line-subtle bg-bg-primary/30 p-3 text-xs text-fg-secondary">
            {c.prompt}
          </div>
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="mt-2 self-start rounded-md bg-line-subtle px-2 py-1 text-[10px] text-fg-muted"
          >
            <RefreshCw className="mr-1 inline h-3 w-3" aria-hidden />
            thinking...
          </motion.div>
          <div className="mt-2 rounded-lg border border-blue-600/25 bg-blue-500/[0.08] p-3 text-xs leading-relaxed text-fg-primary dark:bg-blue-500/10">
            {c.answer}
          </div>
        </div>
      </DemoWindowChrome>
    </motion.div>
  );
}

export function TechChallenge2WalkthroughSection({
  labels,
}: {
  labels: TechChallenge2WalkthroughLabels;
}) {
  const [scene, setScene] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return undefined;
    const t = setInterval(() => setScene((s) => (s + 1) % 5), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [autoplay]);

  const onSelectScene = useCallback((index: number) => {
    setScene(index);
  }, []);

  const sceneIcons = [PlayCircle, Map, BarChart3, FileText, Bot] as const;
  const sceneTitles = [
    labels.tabs.live,
    labels.tabs.map,
    labels.tabs.overview,
    labels.tabs.report,
    labels.tabs.chat,
  ] as const;

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
            {scene === 0 ? <LiveScene l={labels.live} /> : null}
            {scene === 1 ? <MapScene m={labels.map} /> : null}
            {scene === 2 ? <OverviewScene o={labels.overview} /> : null}
            {scene === 3 ? <ReportScene r={labels.report} /> : null}
            {scene === 4 ? <ChatScene c={labels.chat} /> : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
