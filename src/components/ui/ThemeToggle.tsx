"use client";

import { useEffect, useState } from "react";
import {
  resolveSystemTheme,
  resolveThemePreference,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const resolved = resolveThemePreference(storedTheme, mediaQuery.matches);
    applyTheme(resolved);
    setTheme(resolved);
    setReady(true);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className="rounded-full border border-line-subtle px-3 py-2 text-sm text-fg-secondary transition-all duration-200 ease-premium hover:border-fg-muted hover:text-fg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
    >
      {ready ? (theme === "dark" ? "Light" : "Dark") : resolveSystemTheme(false)}
    </button>
  );
}
