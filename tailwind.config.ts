import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./components/**/*.vue",
    "./layouts/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.js",
    "./plugins/**/*.ts",
    "./nuxt.config.ts",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s cubic-bezier(.25,.46,.45,.94)",
        "spin-slow": "spinSlow var(--speed-slow) linear infinite",
        "leg-slow": "leg var(--speed-slow) linear infinite",
        "bottom-leg-slow": "bottomLeg var(--speed-slow) linear infinite",
        "body-slow": "body var(--speed-slow) linear infinite",
        "spin-medium": "spinSlow var(--speed-medium) linear infinite",
        "leg-medium": "leg var(--speed-medium) linear infinite",
        "bottom-leg-medium": "bottomLeg var(--speed-medium) linear infinite",
        "body-medium": "body var(--speed-medium) linear infinite",
        "spin-fast": "spinSlow var(--speed-fast) linear infinite",
        "leg-fast": "leg var(--speed-fast) linear infinite",
        "bottom-leg-fast": "bottomLeg var(--speed-fast) linear infinite",
        "body-fast": "body var(--speed-fast) linear infinite",
        explode: "explode 0.7s linear forwards",
        "explode-rotate": "explodeRotate 0.3s linear forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        leg: {
          "0%": { transform: "rotate(330deg)" },
          "25%": { transform: "rotate(345deg)" },
          "50%": { transform: "rotate(340deg)" },
          "75%": { transform: "rotate(323deg)" },
          "100%": { transform: "rotate(330deg)" },
        },
        bottomLeg: {
          "0%": { transform: "rotate(240deg)" },
          "25%": { transform: "rotate(220deg)" },
          "50%": { transform: "rotate(250deg)" },
          "75%": { transform: "rotate(262deg)" },
          "100%": { transform: "rotate(240deg)" },
        },
        body: {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(1px)" },
          "50%": { transform: "translateY(0)" },
          "75%": { transform: "translateY(1px)" },
          "100%": { transform: "translateY(0)" },
        },
        explode: {
          "0% ": { transform: "scale(1)" },
          "10%": { transform: "scale(1.3)" },
          "30%": { transform: "scale(0.90)" },
          "40%": { transform: "scale(1.15)" },
          "60%": { transform: "scale(0.95)" },
          "100% ": { transform: "scale(1)" },
        },
        explodeRotate: {
          "0% ": { transform: "scale(1)" },
          "10%": { transform: "scale(1.3)" },
          "30%": { transform: "scale(0.90)" },
          "40%": { transform: "scale(1.15)" },
          "60%": { transform: "scale(0.95)" },
          "100% ": { transform: "scale(1) rotate(-6deg)" },
        },
      },
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
};
