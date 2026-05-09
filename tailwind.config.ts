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
        void: "#090807",
        panel: "#121110",
        lifted: "#1c1a17",
        cream: "#f2efe8",
        mute: "#8a8680",
        lime: "#c9e85b",
        "lime-hover": "#d8f070",
        "lime-dim": "#9fb83a",
        sand: "#b89a6f",
        success: "#7a9e72",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        card: "0 0 0 1px rgba(242, 239, 232, 0.06), 0 20px 50px -28px rgba(0, 0, 0, 0.65)",
        "card-hover":
          "0 0 0 1px rgba(201, 232, 91, 0.22), 0 24px 56px -24px rgba(0, 0, 0, 0.55)",
      },
      backgroundImage: {
        "hero-fade":
          "radial-gradient(ellipse 90% 70% at 50% -30%, rgba(201, 232, 91, 0.08), transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
