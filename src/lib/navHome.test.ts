import { describe, expect, it } from "vitest";
import { isLocaleHomePath } from "@/lib/navHome";

describe("isLocaleHomePath", () => {
  it("matches locale root without trailing slash", () => {
    expect(isLocaleHomePath("/pt", "pt")).toBe(true);
    expect(isLocaleHomePath("/en", "en")).toBe(true);
  });

  it("matches locale root with trailing slash", () => {
    expect(isLocaleHomePath("/pt/", "pt")).toBe(true);
    expect(isLocaleHomePath("/en/", "en")).toBe(true);
  });

  it("does not match nested routes", () => {
    expect(isLocaleHomePath("/pt/projects", "pt")).toBe(false);
    expect(isLocaleHomePath("/en/about", "en")).toBe(false);
    expect(isLocaleHomePath("/pt-projects", "pt")).toBe(false);
  });

  it("does not match other locale prefix", () => {
    expect(isLocaleHomePath("/pt", "en")).toBe(false);
    expect(isLocaleHomePath("/en", "pt")).toBe(false);
  });
});
