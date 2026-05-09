export type Project = {
  slug: string;
  title: string;
  tagline: string;
  focus: string[];
  stack: string[];
};

export const featuredProjects: Project[] = [
  {
    slug: "sentracore",
    title: "SentraCore",
    tagline: "Advanced desktop system monitoring platform.",
    focus: [
      "FastAPI backend",
      "Flutter desktop frontend",
      "Performance analytics",
      "Real-time system monitoring",
    ],
    stack: ["FastAPI", "Flutter", "Python"],
  },
  {
    slug: "smartstick",
    title: "SmartStick 1.8",
    tagline: "Smart navigation for visually impaired users.",
    focus: [
      "ESP32",
      "Ultrasonic sensors",
      "GSM emergency alerts",
      "GPS tracking",
    ],
    stack: ["ESP32", "C++", "IoT"],
  },
  {
    slug: "vital-go",
    title: "Vital Go",
    tagline: "Medical consultation platform.",
    focus: [
      "Video communication",
      "Appointment booking",
      "Firebase integration",
      "Healthcare UX",
    ],
    stack: ["React", "Firebase", "WebRTC"],
  },
  {
    slug: "biomass-monitoring",
    title: "Biomass Monitoring System",
    tagline: "IoT environmental monitoring for agriculture.",
    focus: [
      "Soil monitoring",
      "Real-time analytics",
      "Firebase integration",
      "Smart agriculture",
    ],
    stack: ["IoT", "Firebase", "Sensors"],
  },
];
