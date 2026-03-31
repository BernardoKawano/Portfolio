import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--color-bg-primary)",
          surface: "var(--color-bg-surface)",
        },
        fg: {
          primary: "var(--color-fg-primary)",
          secondary: "var(--color-fg-secondary)",
          muted: "var(--color-fg-muted)",
        },
        line: {
          subtle: "var(--color-line-subtle)",
        },
        accent: {
          primary: "var(--color-accent-primary)",
          contrast: "var(--color-accent-contrast)",
        },
      },
      fontSize: {
        display: [
          "clamp(2.2rem, 7vw, 4.5rem)",
          { lineHeight: "1.05", fontWeight: "700" },
        ],
        h1: [
          "clamp(1.8rem, 4.6vw, 3rem)",
          { lineHeight: "1.1", fontWeight: "650" },
        ],
        h2: [
          "clamp(1.4rem, 3vw, 2rem)",
          { lineHeight: "1.2", fontWeight: "600" },
        ],
        h3: ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", fontWeight: "450" }],
        body: ["1rem", { lineHeight: "1.65", fontWeight: "420" }],
        caption: ["0.875rem", { lineHeight: "1.4", fontWeight: "500" }],
      },
      spacing: {
        "section-sm": "3rem",
        "section-md": "5rem",
        "section-lg": "7rem",
        "section-xl": "9rem",
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.875rem",
        lg: "1rem",
        xl: "1.25rem",
        pill: "9999px",
      },
      transitionDuration: {
        fast: "160ms",
        base: "220ms",
        slow: "320ms",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        card: "0 10px 30px rgba(0, 0, 0, 0.06)",
        "card-dark": "0 12px 32px rgba(0, 0, 0, 0.38)",
      },
    },
  },
};

export default config;
