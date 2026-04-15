export const demoTiming = {
  autoplay: {
    defaultSceneMs: 7600,
    lumaLectorSceneMs: 10800,
  },
  intervals: {
    wizardStepMs: 2500,
    kanbanShiftMs: 2300,
    obraHighlightMs: 2000,
    tech2ProgressMs: 1200,
    tech2TickMs: 700,
    tech2MapStepMs: 750,
    tech3GraphNodeMs: 1300,
    clinicalPipelineNodeMs: 1300,
    analysisTabMs: 2400,
  },
  timeouts: {
    analysisToastMs: 3200,
    calendarBookPhase1Ms: 3200,
    calendarBookPhase2Ms: 9000,
  },
  durations: {
    analysisStepMs: [3600, 3300, 3900, 3600, 8000] as const,
    calendarStepMs: [5200, 4300, 4200, 18000] as const,
  },
} as const;
