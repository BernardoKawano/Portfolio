import { describe, expect, it } from "vitest";
import { enMessages } from "@/i18n/messages/en";
import { ptMessages } from "@/i18n/messages/pt";
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

  it("returns Portuguese copy for Luma Gestor from pt dictionary items", () => {
    const gestor = projects.find((p) => p.id === "lumagestor");
    expect(gestor).toBeDefined();
    const items = getDictionary("pt").projects
      .items as ProjectLocaleItems;
    const copy = resolveProjectCopy(gestor!, items);
    expect(copy.summary.toLowerCase()).toMatch(/kanban|pdf|obra/);
    expect(copy.wordmark).toBe("Luma Gestor");
    expect(copy.architecture.toLowerCase()).toContain("vite");
    expect(copy.details?.length).toBeGreaterThan(100);
    expect(copy.attributions?.length).toBeGreaterThanOrEqual(2);
  });

  it("returns English copy for Luma Gestor from en dictionary items", () => {
    const gestor = projects.find((p) => p.id === "lumagestor");
    const items = getDictionary("en").projects
      .items as ProjectLocaleItems;
    const copy = resolveProjectCopy(gestor!, items);
    expect(copy.summary.toLowerCase()).toMatch(/kanban|pdf|project/);
    expect(copy.architecture.toLowerCase()).toContain("vite");
  });

  it("returns Portuguese copy for Tech Challange 2 from pt dictionary items", () => {
    const project = projects.find((p) => p.id === "tech-challange-2");
    expect(project).toBeDefined();
    const items = getDictionary("pt").projects
      .items as ProjectLocaleItems;
    const copy = resolveProjectCopy(project!, items);
    expect(copy.title.toLowerCase()).toContain("suprimentos medicos");
    expect(copy.summary.toLowerCase()).toContain("algoritmo genetico");
    expect(copy.attributions?.length).toBeGreaterThanOrEqual(4);
  });

  it("returns Portuguese copy for Tech Challange 1 from pt dictionary items", () => {
    const project = projects.find((p) => p.id === "tech-challange-1");
    expect(project).toBeDefined();
    const items = getDictionary("pt").projects
      .items as ProjectLocaleItems;
    const copy = resolveProjectCopy(project!, items);
    expect(copy.title.toLowerCase()).toContain("câncer de mama");
    expect(copy.solution.toLowerCase()).toContain("gridsearchcv");
    expect(copy.impact.toLowerCase()).toContain("impacto qualitativo");
  });

  it("returns English copy for Tech Challange 1 from en dictionary items", () => {
    const project = projects.find((p) => p.id === "tech-challange-1");
    expect(project).toBeDefined();
    const items = getDictionary("en").projects
      .items as ProjectLocaleItems;
    const copy = resolveProjectCopy(project!, items);
    expect(copy.title.toLowerCase()).toContain("breast cancer");
    expect(copy.process.toLowerCase()).toContain("eda");
  });

  it("exposes Tech Challange 1 walkthrough labels in pt and en", () => {
    expect(ptMessages.projects.techChallenge1Walkthrough.sceneLabels).toHaveLength(3);
    expect(enMessages.projects.techChallenge1Walkthrough.sceneLabels).toHaveLength(3);
    expect(ptMessages.projects.techChallenge1Walkthrough.tabs.dataset).toBe("Dataset + EDA");
    expect(enMessages.projects.techChallenge1Walkthrough.tabs.results).toBe("Results");
  });

  it("keeps external links configured for Tech Challange 1", () => {
    const project = projects.find((p) => p.id === "tech-challange-1");
    expect(project).toBeDefined();
    expect(project?.featured).toBe(true);
    expect(project?.links.github).toBe(
      "https://github.com/BernardoKawano/FIAPTechChallange01"
    );
    expect(project?.links.demo).toContain("colab.research.google.com");
  });

  it("returns English copy for Tech Challange 2 from en dictionary items", () => {
    const project = projects.find((p) => p.id === "tech-challange-2");
    expect(project).toBeDefined();
    const items = getDictionary("en").projects
      .items as ProjectLocaleItems;
    const copy = resolveProjectCopy(project!, items);
    expect(copy.title.toLowerCase()).toContain("route optimization");
    expect(copy.process.toLowerCase()).toContain("folium");
  });

  it("exposes Luma Gestor walkthrough labels in pt and en", () => {
    expect(ptMessages.projects.lumaGestorWalkthrough.sceneLabels).toHaveLength(3);
    expect(enMessages.projects.lumaGestorWalkthrough.sceneLabels).toHaveLength(3);
    expect(ptMessages.projects.lumaGestorWalkthrough.wizard.step1.length).toBeGreaterThan(2);
    expect(ptMessages.projects.lumaGestorWalkthrough.controls.autoplay.length).toBeGreaterThan(3);
  });

  it("exposes Luma Lector demo controls in pt and en", () => {
    expect(ptMessages.projects.lumaDemos.controls.selectSceneHint.length).toBeGreaterThan(10);
    expect(enMessages.projects.lumaDemos.controls.autoplay).toBe("Autoplay");
  });

  it("exposes Tech Challange 2 walkthrough labels in pt and en", () => {
    expect(ptMessages.projects.techChallenge2Walkthrough.sceneLabels).toHaveLength(5);
    expect(enMessages.projects.techChallenge2Walkthrough.sceneLabels).toHaveLength(5);
    expect(ptMessages.projects.techChallenge2Walkthrough.tabs.live).toBe("Ao vivo");
  });

  it("keeps external links configured for Tech Challange 2", () => {
    const project = projects.find((p) => p.id === "tech-challange-2");
    expect(project).toBeDefined();
    expect(project?.featured).toBe(true);
    expect(project?.links.github).toBe(
      "https://github.com/BernardoKawano/Tech-Challange-2"
    );
    expect(project?.links.demo).toBe("https://youtu.be/kWew_1jsQjQ");
  });

  it("returns Portuguese copy for Tech Challange 3 from pt dictionary items", () => {
    const project = projects.find((p) => p.id === "tech-challange-3");
    expect(project).toBeDefined();
    const items = getDictionary("pt").projects
      .items as ProjectLocaleItems;
    const copy = resolveProjectCopy(project!, items);
    expect(copy.title.toLowerCase()).toContain("solucao corporativa");
    expect(copy.summary.toLowerCase()).toContain("guardrails");
    expect(copy.impact.toLowerCase()).toContain("impacto qualitativo");
  });

  it("returns English copy for Tech Challange 3 from en dictionary items", () => {
    const project = projects.find((p) => p.id === "tech-challange-3");
    expect(project).toBeDefined();
    const items = getDictionary("en").projects
      .items as ProjectLocaleItems;
    const copy = resolveProjectCopy(project!, items);
    expect(copy.title.toLowerCase()).toContain("enterprise solution");
    expect(copy.process.toLowerCase()).toContain("qlora");
  });

  it("keeps external links configured for Tech Challange 3", () => {
    const project = projects.find((p) => p.id === "tech-challange-3");
    expect(project).toBeDefined();
    expect(project?.featured).toBe(true);
    expect(project?.links.github).toBe(
      "https://github.com/BernardoKawano/Tech-Challange-3"
    );
    expect(project?.links.demo).toBe("https://youtu.be/LfE3NgAbXyo");
  });

  it("returns Portuguese copy for Clinical Monitoring from pt dictionary items", () => {
    const project = projects.find((p) => p.id === "multimodal-clinical-monitoring");
    expect(project).toBeDefined();
    const items = getDictionary("pt").projects
      .items as ProjectLocaleItems;
    const copy = resolveProjectCopy(project!, items);
    expect(copy.title.toLowerCase()).toContain("monitoramento");
    expect(copy.solution.toLowerCase()).toContain("langgraph");
    expect(copy.impact.toLowerCase()).toContain("impacto qualitativo");
    expect(copy.attributions?.length).toBeGreaterThanOrEqual(4);
  });

  it("returns English copy for Clinical Monitoring from en dictionary items", () => {
    const project = projects.find((p) => p.id === "multimodal-clinical-monitoring");
    expect(project).toBeDefined();
    const items = getDictionary("en").projects
      .items as ProjectLocaleItems;
    const copy = resolveProjectCopy(project!, items);
    expect(copy.title.toLowerCase()).toContain("multimodal");
    expect(copy.process.toLowerCase()).toContain("autoencoders");
    expect(copy.architecture.toLowerCase()).toContain("langgraph");
  });

  it("keeps external links configured for Clinical Monitoring", () => {
    const project = projects.find((p) => p.id === "multimodal-clinical-monitoring");
    expect(project).toBeDefined();
    expect(project?.featured).toBe(true);
    expect(project?.links.github).toBe(
      "https://github.com/BernardoKawano/Tech-Challange-4"
    );
    expect(project?.links.demo).toBe("https://youtu.be/xXdvzQmYixA");
  });

  it("exposes Clinical Monitoring walkthrough labels in pt and en", () => {
    expect(ptMessages.projects.multimodalClinicalWalkthrough.sceneLabels).toHaveLength(3);
    expect(enMessages.projects.multimodalClinicalWalkthrough.sceneLabels).toHaveLength(3);
    expect(ptMessages.projects.multimodalClinicalWalkthrough.tabs.pipeline).toBe("Pipeline");
  });

  it("exposes Tech Challange 3 walkthrough labels in pt and en", () => {
    expect(ptMessages.projects.techChallenge3Walkthrough.sceneLabels).toHaveLength(3);
    expect(enMessages.projects.techChallenge3Walkthrough.sceneLabels).toHaveLength(3);
    expect(ptMessages.projects.techChallenge3Walkthrough.tabs.graph).toBe("LangGraph");
  });
});
