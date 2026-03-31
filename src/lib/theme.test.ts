import { describe, expect, it } from "vitest";
import { resolveSystemTheme, resolveThemePreference } from "@/lib/theme";

describe("resolveSystemTheme", () => {
  it("returns dark when system preference is dark", () => {
    expect(resolveSystemTheme(true)).toBe("dark");
  });

  it("returns light when system preference is light", () => {
    expect(resolveSystemTheme(false)).toBe("light");
  });
});

describe("resolveThemePreference", () => {
  it("prioritizes user saved preference", () => {
    expect(resolveThemePreference("dark", false)).toBe("dark");
    expect(resolveThemePreference("light", true)).toBe("light");
  });

  it("falls back to system preference when saved value is invalid", () => {
    expect(resolveThemePreference("invalid", true)).toBe("dark");
  });
});
