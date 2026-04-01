"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";

type Props = { progress: MotionValue<number> };

/**
 * ViewBox 0 0 2800 400 — baseline Y = 200
 *
 * 8 cumulative-reveal segments (once visible, stays visible):
 *   state-chaos        x  80–560    8 tangled paths  (pathLength 0→1)
 *   point-detect       x 640        dot marker        (opacity 0→1)
 *   state-ordered      x 720–1200   5 parabolic arcs  (pathLength 0→1)
 *   point-frame        x 1300       dot marker        (opacity 0→1)
 *   state-two-curves   x 1400–1740  2 mirror curves   (pathLength 0→1)
 *   point-solution     x 1840       dot marker        (opacity 0→1)
 *   state-straight     x 1940–2520  1 horizontal line (pathLength 0→1)
 *   point-deploy       x 2640       dot marker        (opacity 0→1)
 */

export const ANCHORS = {
  detectX: 640,
  frameX: 1300,
  solutionX: 1840,
  deployX: 2640,
  viewBoxWidth: 2800,
} as const;

export const TRACK_WIDTH = 2400;

// ═══ STATE 1: CHAOS (x 80–560, 8 paths) ═══
// Dense, overlapping, loops, asymmetric — feels like friction.
// Mixed stroke-weights: 2 heavy, 3 medium, 3 thin.

const CHAOS: { d: string; sw: number }[] = [
  {
    d: "M80,55 C92,310 110,25 135,350 C155,20 180,340 210,45 C235,330 262,50 290,300 C315,65 342,255 370,100 C398,235 425,140 452,210 C478,175 505,198 535,195 L560,200",
    sw: 3.0,
  },
  {
    d: "M80,345 C95,45 115,355 140,35 C165,350 192,38 220,340 C245,50 272,310 300,80 C325,260 352,115 380,225 C405,160 432,200 460,192 C488,198 520,200 545,200 L560,200",
    sw: 2.5,
  },
  {
    d: "M80,200 C95,355 115,40 140,345 C162,35 188,340 218,50 C245,320 272,65 300,290 C325,100 352,245 380,145 C408,210 435,185 462,200 C492,195 525,200 548,200 L560,200",
    sw: 2.0,
  },
  {
    d: "M85,200 C98,345 118,358 142,330 C162,355 182,310 172,340 C160,365 188,328 218,280 C248,315 275,245 305,220 C332,205 362,195 395,200 C428,198 465,200 510,200 L560,200",
    sw: 1.8,
  },
  {
    d: "M80,135 C95,275 112,55 130,285 C145,48 162,278 182,60 C200,268 220,75 242,252 C262,95 282,225 308,130 C332,195 358,175 388,200 C418,195 452,200 510,200 L560,200",
    sw: 1.5,
  },
  {
    d: "M80,278 C102,88 128,292 155,72 C182,282 210,88 240,258 C268,108 295,232 325,142 C352,200 378,182 408,200 C438,198 472,200 520,200 L560,200",
    sw: 1.2,
  },
  {
    d: "M80,48 C108,228 135,38 165,245 C190,52 218,232 248,78 C275,218 305,108 335,195 C362,162 392,200 422,195 C455,200 490,200 530,200 L560,200",
    sw: 1.0,
  },
  {
    d: "M80,322 C110,128 140,332 172,118 C200,312 232,138 262,272 C290,168 320,228 350,195 C378,200 412,200 450,200 C488,200 530,200 555,200 L560,200",
    sw: 0.8,
  },
];

// ═══ STATE 2: ORDERED ARCS (x 720–1200, 5 paths) ═══
// Smooth parabolic arcs, no crossings, symmetrically arranged around baseline.

const ORDERED: { d: string; sw: number }[] = [
  { d: "M720,200 C780,105 870,72 960,72 C1050,72 1140,105 1200,200", sw: 1.5 },
  { d: "M720,200 C780,130 870,108 960,108 C1050,108 1140,130 1200,200", sw: 1.3 },
  { d: "M720,200 C780,165 870,152 960,152 C1050,152 1140,165 1200,200", sw: 1.1 },
  { d: "M720,200 C780,270 870,292 960,292 C1050,292 1140,270 1200,200", sw: 0.9 },
  { d: "M720,200 C780,295 870,328 960,328 C1050,328 1140,295 1200,200", sw: 0.7 },
];

// ═══ STATE 3: TWO CURVES (x 1400–1740, 2 mirror parabolas) ═══

const TWO_CURVES: { d: string; sw: number }[] = [
  { d: "M1400,200 C1440,138 1520,112 1570,112 C1620,112 1700,138 1740,200", sw: 1.0 },
  { d: "M1400,200 C1440,262 1520,288 1570,288 C1620,288 1700,262 1740,200", sw: 0.8 },
];

// ═══ STATE 4: STRAIGHT LINE (x 1940–2520) ═══

const STRAIGHT_D = "M1940,200 L2520,200";

// ═══ COMPONENT ═══

export function ThreadEvolution({ progress }: Props) {
  const chaosLen = useTransform(progress, [0, 0.12], [0, 1]);
  const orderedLen = useTransform(progress, [0.22, 0.38], [0, 1]);
  const twoCurvesLen = useTransform(progress, [0.48, 0.62], [0, 1]);
  const straightLen = useTransform(progress, [0.72, 0.88], [0, 1]);

  const detectOp = useTransform(progress, [0.12, 0.16], [0, 1]);
  const frameOp = useTransform(progress, [0.38, 0.42], [0, 1]);
  const solutionOp = useTransform(progress, [0.62, 0.66], [0, 1]);
  const deployOp = useTransform(progress, [0.88, 0.92], [0, 1]);

  return (
    <svg
      viewBox="0 0 2800 400"
      fill="none"
      preserveAspectRatio="none"
      className="h-full w-full text-fg-primary"
      aria-hidden="true"
    >
      {/* State 1 — Chaos */}
      <g id="state-chaos">
        {CHAOS.map((p, i) => (
          <motion.path
            key={`c${i}`}
            d={p.d}
            stroke="currentColor"
            strokeWidth={p.sw}
            strokeLinecap="round"
            fill="none"
            style={{ pathLength: chaosLen }}
          />
        ))}
      </g>

      {/* Point 1 — Detect */}
      <motion.circle
        id="point-detect"
        cx={ANCHORS.detectX}
        cy={200}
        r={5}
        fill="currentColor"
        style={{ opacity: detectOp }}
      />

      {/* State 2 — Ordered arcs */}
      <g id="state-ordered">
        {ORDERED.map((p, i) => (
          <motion.path
            key={`o${i}`}
            d={p.d}
            stroke="currentColor"
            strokeWidth={p.sw}
            strokeLinecap="round"
            fill="none"
            style={{ pathLength: orderedLen }}
          />
        ))}
      </g>

      {/* Point 2 — Frame */}
      <motion.circle
        id="point-frame"
        cx={ANCHORS.frameX}
        cy={200}
        r={5}
        fill="currentColor"
        style={{ opacity: frameOp }}
      />

      {/* State 3 — Two curves */}
      <g id="state-two-curves">
        {TWO_CURVES.map((p, i) => (
          <motion.path
            key={`t${i}`}
            d={p.d}
            stroke="currentColor"
            strokeWidth={p.sw}
            strokeLinecap="round"
            fill="none"
            style={{ pathLength: twoCurvesLen }}
          />
        ))}
      </g>

      {/* Point 3 — Solution Design */}
      <motion.circle
        id="point-solution"
        cx={ANCHORS.solutionX}
        cy={200}
        r={5}
        fill="currentColor"
        style={{ opacity: solutionOp }}
      />

      {/* State 4 — Straight line */}
      <motion.path
        id="state-straight"
        d={STRAIGHT_D}
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        fill="none"
        style={{ pathLength: straightLen }}
      />

      {/* Point 4 — Deploy */}
      <motion.circle
        id="point-deploy"
        cx={ANCHORS.deployX}
        cy={200}
        r={5}
        fill="currentColor"
        style={{ opacity: deployOp }}
      />
    </svg>
  );
}

// ═══ STATIC VARIANT (reduced-motion fallback) ═══

export function ThreadEvolutionStatic() {
  return (
    <svg
      viewBox="0 0 2800 400"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full text-fg-primary"
      aria-hidden="true"
    >
      {CHAOS.map((p, i) => (
        <path key={`c${i}`} d={p.d} stroke="currentColor" strokeWidth={p.sw} strokeLinecap="round" fill="none" />
      ))}
      <circle cx={ANCHORS.detectX} cy={200} r={5} fill="currentColor" />

      {ORDERED.map((p, i) => (
        <path key={`o${i}`} d={p.d} stroke="currentColor" strokeWidth={p.sw} strokeLinecap="round" fill="none" />
      ))}
      <circle cx={ANCHORS.frameX} cy={200} r={5} fill="currentColor" />

      {TWO_CURVES.map((p, i) => (
        <path key={`t${i}`} d={p.d} stroke="currentColor" strokeWidth={p.sw} strokeLinecap="round" fill="none" />
      ))}
      <circle cx={ANCHORS.solutionX} cy={200} r={5} fill="currentColor" />

      <path d={STRAIGHT_D} stroke="currentColor" strokeWidth={1} strokeLinecap="round" fill="none" />
      <circle cx={ANCHORS.deployX} cy={200} r={5} fill="currentColor" />
    </svg>
  );
}
