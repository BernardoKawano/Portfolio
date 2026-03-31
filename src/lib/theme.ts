export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "portfolio_theme";

export function resolveSystemTheme(isDarkPreferred: boolean): Theme {
  return isDarkPreferred ? "dark" : "light";
}

export function resolveThemePreference(
  storedValue: string | null,
  isDarkPreferred: boolean,
): Theme {
  if (storedValue === "light" || storedValue === "dark") {
    return storedValue;
  }
  return resolveSystemTheme(isDarkPreferred);
}
