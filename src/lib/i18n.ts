import { enMessages } from "@/i18n/messages/en";
import { ptMessages } from "@/i18n/messages/pt";
import { LOCALE_CODES } from "@/lib/locale-codes";

export const locales = LOCALE_CODES;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function resolveLocale(input?: string | null): Locale {
  if (!input) return defaultLocale;
  const normalized = input.toLowerCase();
  if (normalized.startsWith("pt")) return "pt";
  if (normalized.startsWith("en")) return "en";
  return defaultLocale;
}

export function getDictionary(locale: Locale) {
  return locale === "pt" ? ptMessages : enMessages;
}
