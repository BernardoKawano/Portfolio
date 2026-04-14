import type { Locale } from "@/lib/i18n";

/** True when the pathname is the locale index (home), with or without a trailing slash. */
export function isLocaleHomePath(pathname: string, locale: Locale): boolean {
  const home = `/${locale}`;
  return pathname === home || pathname === `${home}/`;
}
