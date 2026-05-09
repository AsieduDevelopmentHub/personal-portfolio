export type Project = {
  slug: string;
  title: string;
  /** Short label under the title */
  category: string;
  /** Short summary for cards (home + top of project card) */
  description: string;
  /** Longer narrative for /projects detailed layout */
  detailNarrative: string;
  /** Key outcomes or product bullets */
  detailHighlights: string[];
  /** Architecture / implementation depth */
  technicalNotes: string[];
  focus: string[];
  stack: string[];
  demoUrl: string | null;
  repoUrl: string | null;
  detailHref: string;
  /**
   * Optional screenshot under `public/` (e.g. `/images/projects/sentracore.jpg`).
   * When null, cards show a gradient + initials placeholder.
   */
  coverImage: string | null;
  year: string;
  role: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "sentracore",
    title: "SentraCore",
    category: "Desktop & observability",
    description:
      "Advanced desktop monitoring stack with a FastAPI backend and Flutter UI — live system metrics, performance analytics, and a calm operator-focused workflow.",
    detailNarrative:
      "SentraCore was built around the idea that desktop operators should see system health at a glance without drowning in raw logs. The backend normalizes metrics from heterogeneous hosts while the Flutter client keeps interactions predictable under load — scrolling large tables, pivoting time ranges, and drilling into spikes without blocking the UI thread.",
    detailHighlights: [
      "Unified views for CPU, memory, disk, and GPU pressure with sane defaults per OS",
      "Alerting hooks designed for small teams (email/webhook) without enterprise bloat",
      "Packaging story that treats updates as part of UX, not an afterthought",
    ],
    technicalNotes: [
      "FastAPI for async-friendly ingestion and clear OpenAPI surfaces",
      "Flutter desktop for a single codebase across Windows targets you care about",
      "Structured logging and correlation IDs from agent to API for supportable traces",
    ],
    focus: [
      "FastAPI backend",
      "Flutter desktop frontend",
      "Performance analytics",
      "Real-time system monitoring",
    ],
    stack: ["FastAPI", "Flutter", "Python"],
    demoUrl: null,
    repoUrl: null,
    detailHref: "/projects#sentracore",
    coverImage: null,
    year: "2024",
    role: "Full-stack / platform",
  },
  {
    slug: "smartstick",
    title: "SmartStick 1.8",
    category: "Assistive IoT",
    description:
      "Embedded navigation aid for visually impaired users — ultrasonic sensing, GSM alerts, and GPS-backed safety patterns designed for real streets, not demos.",
    detailNarrative:
      "SmartStick connects low-level sensing with real-world safety constraints: ranging in noisy environments, power budgets on battery, and GSM paths that must still behave when towers hand off. Firmware timing and debouncing policies are as much the product as the enclosure — users feel false positives as broken trust.",
    detailHighlights: [
      "Haptic and audio cues tuned with feedback loops from test walks",
      "Emergency channel that fails loud instead of failing silent",
      "Field configuration story so non-engineers can adjust sensitivity bands",
    ],
    technicalNotes: [
      "ESP32-class MCU with careful ISR discipline for ultrasonic paths",
      "GPS + GSM modules with conservative retry policies and battery awareness",
      "Calibration flows that survive power loss mid-session",
    ],
    focus: [
      "ESP32",
      "Ultrasonic sensors",
      "GSM emergency alerts",
      "GPS tracking",
    ],
    stack: ["ESP32", "C++", "IoT"],
    demoUrl: null,
    repoUrl: null,
    detailHref: "/projects#smartstick",
    coverImage: null,
    year: "2023",
    role: "Firmware & systems",
  },
  {
    slug: "vital-go",
    title: "Vital Go",
    category: "HealthTech platform",
    description:
      "Medical consultation experience with scheduling, video sessions, and Firebase-backed workflows — focused on clarity for patients and staff.",
    detailNarrative:
      "Vital Go prioritizes appointment truth: who is expected, when buffers matter, and how staff recover when a session drops. Firebase-backed workflows keep mobile clients honest about offline states while still allowing optimistic UI where it is safe — with explicit reconciliation paths when the network returns.",
    detailHighlights: [
      "Role-aware scheduling with clear patient vs staff affordances",
      "Video session flows that degrade gracefully instead of freezing opaque",
      "Audit-friendly event trails for operational review",
    ],
    technicalNotes: [
      "React frontends with disciplined state boundaries around realtime listeners",
      "Firebase security rules treated as part of the feature set, not deploy-day panic",
      "WebRTC integration tested against common consumer network conditions",
    ],
    focus: [
      "Video communication",
      "Appointment booking",
      "Firebase integration",
      "Healthcare UX",
    ],
    stack: ["React", "Firebase", "WebRTC"],
    demoUrl: null,
    repoUrl: null,
    detailHref: "/projects#vital-go",
    coverImage: null,
    year: "2024",
    role: "Product engineering",
  },
  {
    slug: "biomass-monitoring",
    title: "Biomass Monitoring System",
    category: "Agri IoT",
    description:
      "Environmental sensing pipeline for soil and crop signals — edge reads, Firebase telemetry, and dashboards tuned for field operators.",
    detailNarrative:
      "The biomass system treats the field as a hostile environment: moisture, corrosion, and intermittent connectivity. Edge sampling policies batch reads intelligently, while cloud dashboards emphasize trends operators can act on — not charts that only look good in pitch decks.",
    detailHighlights: [
      "Soil and environmental probes with sane calibration reminders",
      "Dashboards that read well on phones in bright sunlight",
      "Alerting tuned to reduce fatigue while catching real anomalies",
    ],
    technicalNotes: [
      "IoT ingestion with backpressure awareness when uplink is spotty",
      "Firebase paths structured for query cost and future export",
      "Firmware OTA considerations where radios share time with sensing",
    ],
    focus: [
      "Soil monitoring",
      "Real-time analytics",
      "Firebase integration",
      "Smart agriculture",
    ],
    stack: ["IoT", "Firebase", "Sensors"],
    demoUrl: null,
    repoUrl: null,
    detailHref: "/projects#biomass-monitoring",
    coverImage: null,
    year: "2023",
    role: "IoT & full-stack",
  },
];
