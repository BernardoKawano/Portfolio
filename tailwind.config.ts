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
