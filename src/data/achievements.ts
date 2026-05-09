export type Achievement = {
  title: string;
  subtitle: string;
  body: string;
};

export const achievements: Achievement[] = [
  {
    title: "Hackathon & systems build",
    subtitle: "Team lead / full-stack",
    body: "Shipped end-to-end prototypes under time pressure — from sensor reads and APIs to presenter-ready UI — with emphasis on demo reliability and clear metrics.",
  },
  {
    title: "STEM & analytical foundation",
    subtitle: "Competition / coursework",
    body: "Strong grounding in algorithms, signals, and structured problem solving that carries directly into firmware timing, data pipelines, and performance work.",
  },
  {
    title: "Professional certifications",
    subtitle: "Cloud & tooling (placeholders)",
    body: "Add your formal certifications here (cloud providers, embedded tracks, security, etc.). This block mirrors the Achievements & Certifications rhythm from cephastech.com.",
  },
];
