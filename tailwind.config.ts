import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: "#050816",
        carbon: "#0B1120",
        midnight: "#111827",
        electric: "#3B82F6",
        neon: "#22D3EE",
        violet: "#8B5CF6",
        soft: "#F8FAFC",
        glass: "#94A3B8",
        success: "#10B981",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1400px",
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(135deg, #3B82F6, #8B5CF6)",
        "gradient-glow": "linear-gradient(135deg, #22D3EE, #3B82F6)",
        "gradient-bg": "linear-gradient(180deg, #050816, #111827)",
      },
      boxShadow: {
        glow: "0 0 60px -12px rgba(59, 130, 246, 0.45)",
        "glow-cyan": "0 0 40px -8px rgba(34, 211, 238, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
