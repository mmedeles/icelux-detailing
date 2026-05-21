import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050912",
          secondary: "#07101C",
          midnight: "#0B1628",
          card: "#09111F",
          panel: "#0B1B33",
          deep: "#102A4A",
        },
        accent: {
          primary: "#22BFFF",
          secondary: "#8EDFFF",
          border: "#2BCBFF",
        },
        text: {
          base: "#EAF8FF",
          muted: "#8CA9BD",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "ice-gradient": "linear-gradient(135deg, #22BFFF 0%, #8EDFFF 100%)",
        "dark-gradient": "linear-gradient(180deg, #050912 0%, #07101C 100%)",
        "card-gradient": "linear-gradient(135deg, #09111F 0%, #0B1628 100%)",
        "hero-gradient":
          "radial-gradient(ellipse at 60% 40%, rgba(34,191,255,0.08) 0%, transparent 60%), linear-gradient(180deg, #050912 0%, #07101C 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
