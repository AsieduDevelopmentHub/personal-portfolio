export const processPhases = [
  {
    step: "01",
    title: "Frame the problem",
    body: "Who acts on the data? What breaks first under load or offline? Constraints and success metrics are written down before the first line of code.",
  },
  {
    step: "02",
    title: "Prototype the riskiest slice",
    body: "Sensor path, auth story, or realtime channel — whichever is unknown gets a thin vertical slice early so surprises happen when they are cheap.",
  },
  {
    step: "03",
    title: "Harden and instrument",
    body: "Logging, configuration, error surfaces, and operator flows. The goal is a system you can debug at 2 a.m. without guessing.",
  },
  {
    step: "04",
    title: "Polish the experience",
    body: "Performance passes, accessibility checks, motion that supports comprehension, and copy that matches how the team actually speaks about the product.",
  },
];

export const projectThemes = [
  {
    title: "Assistive & safety tech",
    body: "Hardware that meets people where they are — navigation aids, alerts, and resilient connectivity when cellular conditions are messy.",
  },
  {
    title: "Observability & desktop tooling",
    body: "Operator-facing tools for health of machines: metrics, history, and actions that stay responsive on real datasets.",
  },
  {
    title: "Environmental & field IoT",
    body: "Sensing pipelines for agriculture and infrastructure — edge reads, cloud aggregation, and summaries that non-specialists can trust.",
  },
];

export const roadmapNotes = [
  "Deeper case studies with architecture diagrams and failure postmortems.",
  "Open-source extracts from internal libraries where licensing allows.",
  "Video walkthroughs for hardware bring-up and dashboard interactions.",
  "Partner write-ups when collaborators agree to be named.",
];
