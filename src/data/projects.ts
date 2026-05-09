export type Project = {
  slug: string;
  title: string;
  /** Short label under the title (e.g. “HealthTech Platform”) */
  category: string;
  /** Card body — one or two sentences */
  description: string;
  focus: string[];
  stack: string[];
  demoUrl: string | null;
  repoUrl: string | null;
  /** Case study or anchor on /projects */
  detailHref: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "sentracore",
    title: "SentraCore",
    category: "Desktop & observability",
    description:
      "Advanced desktop monitoring stack with a FastAPI backend and Flutter UI — live system metrics, performance analytics, and a calm operator-focused workflow.",
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
  },
  {
    slug: "smartstick",
    title: "SmartStick 1.8",
    category: "Assistive IoT",
    description:
      "Embedded navigation aid for visually impaired users — ultrasonic sensing, GSM alerts, and GPS-backed safety patterns designed for real streets, not demos.",
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
  },
  {
    slug: "vital-go",
    title: "Vital Go",
    category: "HealthTech platform",
    description:
      "Medical consultation experience with scheduling, video sessions, and Firebase-backed workflows — focused on clarity for patients and staff.",
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
  },
  {
    slug: "biomass-monitoring",
    title: "Biomass Monitoring System",
    category: "Agri IoT",
    description:
      "Environmental sensing pipeline for soil and crop signals — edge reads, Firebase telemetry, and dashboards tuned for field operators.",
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
  },
];
