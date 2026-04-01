import { describe, expect, it } from "vitest";
import { getDictionary } from "@/lib/i18n";
import {
  projects,
  resolveProjectCopy,
  type ProjectLocaleItems,
} from "@/content/projects";

describe("resolveProjectCopy", () => {
  it("returns Portuguese copy for Luma from pt dictionary items", () => {
    const luma = projects.find((p) => p.id === "lumalector");
    expect(luma).toBeDefined();
    const items = getDictionary("pt").projects
      .items as ProjectLocaleItems;
    const copy = resolveProjectCopy(luma!, items);
    expect(copy.summary.toLowerCase()).toContain("pdf");
    expect(copy.impact).toMatch(/2|40|horas/i);
    expect(copy.wordmark).toBe("Luma Lector");
  });

  it("returns English copy for Luma from en dictionary items", () => {
    const luma = projects.find((p) => p.id === "lumalector");
    const items = getDictionary("en").projects
      .items as ProjectLocaleItems;
    const copy = resolveProjectCopy(luma!, items);
    expect(copy.summary.toLowerCase()).toMatch(/pdf|financial/);
    expect(copy.impact.toLowerCase()).toMatch(/2|40|hour/);
  });

  it("returns inline copy for static projects", () => {
    const staticProject = projects.find((p) => p.id === "ops-ai-triage");
    expect(staticProject).toBeDefined();
    const copy = resolveProjectCopy(staticProject!, undefined);
    expect(copy.title).toBe("AI Ops Triage Pipeline");
  });
});
