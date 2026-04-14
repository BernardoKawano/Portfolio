import { describe, expect, it } from "vitest";
import { LOCALE_CODES } from "@/lib/locale-codes";
import { locales } from "@/lib/i18n";

describe("LOCALE_CODES", () => {
  it("stays aligned with lib/i18n locales", () => {
    expect([...LOCALE_CODES]).toEqual([...locales]);
  });
});
