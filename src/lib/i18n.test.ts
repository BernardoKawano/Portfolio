import { describe, expect, it } from "vitest";
import { defaultLocale, getDictionary, resolveLocale } from "@/lib/i18n";

describe("resolveLocale", () => {
  it("returns default locale when value is missing", () => {
    expect(resolveLocale(undefined)).toBe(defaultLocale);
    expect(resolveLocale(null)).toBe(defaultLocale);
  });

  it("maps locale prefixes to supported locales", () => {
    expect(resolveLocale("pt-BR")).toBe("pt");
    expect(resolveLocale("en-US")).toBe("en");
  });

  it("falls back to default locale for unsupported values", () => {
    expect(resolveLocale("es-ES")).toBe(defaultLocale);
  });
});

describe("getDictionary", () => {
  it("returns localized dictionaries", () => {
    expect(getDictionary("pt").nav.home).toBe("Início");
    expect(getDictionary("en").nav.home).toBe("Home");
  });
});
