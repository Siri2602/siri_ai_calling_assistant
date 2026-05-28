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
        background: "#070B14",
        "bg-secondary": "#0F172A",
        "accent-purple": "#7C3AED",
        "accent-cyan": "#00D4FF",
        "text-primary": "#FFFFFF",
        "text-secondary": "#94A3B8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-mid": "floatMid 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "star-twinkle": "twinkle 2s ease-in-out infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        "aurora": "aurora 8s ease-in-out infinite",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        floatMid: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(124, 58, 237, 0.5)" },
          "50%": { borderColor: "rgba(0, 212, 255, 0.8)" },
        },
        aurora: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};

export default config;
