"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useId, useLayoutEffect, useState } from "react";
import type { Project, ProjectCopy } from "@/content/projects";
import type { LumaGestorWalkthroughLabels } from "@/components/projects/luma/LumaGestorWalkthrough";
import type { LumaProductDemosLabels } from "@/components/projects/luma/LumaProductDemos";
import type { TechChallenge1WalkthroughLabels } from "@/components/projects/tech/TechChallenge1Walkthrough";
import type { TechChallenge2WalkthroughLabels } from "@/components/projects/tech/TechChallenge2Walkthrough";
import type { TechChallenge3WalkthroughLabels } from "@/components/projects/tech/TechChallenge3Walkthrough";
import type { MultimodalClinicalWalkthroughLabels } from "@/components/projects/clinical/MultimodalClinicalWalkthrough";

const LumaGestorWalkthroughSection = dynamic(
  () =>
    import("@/components/projects/luma/LumaGestorWalkthrough").then(
      (mod) => mod.LumaGestorWalkthroughSection,
    ),
  { ssr: false, loading: () => null },
);
const LumaProductDemosSection = dynamic(
  () =>
    import("@/components/projects/luma/LumaProductDemos").then(
      (mod) => mod.LumaProductDemosSection,
    ),
  { ssr: false, loading: () => null },
);
const TechChallenge1WalkthroughSection = dynamic(
  () =>
    import("@/components/projects/tech/TechChallenge1Walkthrough").then(
      (mod) => mod.TechChallenge1WalkthroughSection,
    ),
  { ssr: false, loading: () => null },
);
const TechChallenge2WalkthroughSection = dynamic(
  () =>
    import("@/components/projects/tech/TechChallenge2Walkthrough").then(
      (mod) => mod.TechChallenge2WalkthroughSection,
    ),
  { ssr: false, loading: () => null },
);
const TechChallenge3WalkthroughSection = dynamic(
  () =>
    import("@/components/projects/tech/TechChallenge3Walkthrough").then(
      (mod) => mod.TechChallenge3WalkthroughSection,
    ),
  { ssr: false, loading: () => null },
);
const MultimodalClinicalWalkthroughSection = dynamic(
  () =>
    import("@/components/projects/clinical/MultimodalClinicalWalkthrough").then(
      (mod) => mod.MultimodalClinicalWalkthroughSection,
    ),
  { ssr: false, loading: () => null },
);

export type ProjectArticleLabels = {
  problem: string;
  solution: string;
  architecture: string;
  process: string;
  impact: string;
  links: string;
  detailsHeading?: string;
  attributionsHeading?: string;
  github: string;
  demo: string;
  privateRepo?: string;
  expandCaseStudy: string;
  collapseCaseStudy: string;
};

type ProjectArticleProps = {
  project: Project;
  copy: ProjectCopy;
  labels: ProjectArticleLabels;
  dictionary: Record<string, unknown>;
};

function hashMatchesProjectId(projectId: string) {
  if (typeof window === "undefined") return false;
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return false;
  try {
    return decodeURIComponent(raw) === projectId;
  } catch {
    return raw === projectId;
  }
}

export function ProjectArticle({
  project,
  copy,
  labels,
  dictionary,
}: ProjectArticleProps) {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);

  useLayoutEffect(() => {
    const sync = () => {
      if (hashMatchesProjectId(project.id)) {
        setExpanded(true);
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [project.id]);

  const core = project.coreStack ?? project.stack.slice(0, 4);
  const restStack = project.stack.filter((item) => !core.includes(item));
  const showStackKeys = expanded
    ? project.stack.map((item) => ({ item, core: core.includes(item) }))
    : core.map((item) => ({ item, core: true }));

  const impactLinks = (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p className="text-caption font-semibold">
        <span className="text-fg-muted">{labels.impact}:</span> {copy.impact}
      </p>
      <div className="flex flex-wrap gap-3">
        {project.privateRepo ? (
          <span className="inline-flex items-center gap-1.5 rounded-pill border border-line-subtle px-4 py-2 text-xs font-semibold text-fg-muted">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            {labels.privateRepo}
          </span>
        ) : null}
        {project.links.github ? (
          <Link
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-pill border border-line-subtle px-4 py-2 text-xs font-semibold transition-colors duration-fast hover:border-fg-muted"
          >
            {labels.github}
          </Link>
        ) : null}
        {project.links.demo ? (
          <Link
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-pill border border-line-subtle px-4 py-2 text-xs font-semibold transition-colors duration-fast hover:border-fg-muted"
          >
            {labels.demo}
          </Link>
        ) : null}
      </div>
    </div>
  );

  return (
    <article
      id={project.id}
      className="premium-card scroll-mt-24 overflow-hidden md:scroll-mt-28"
    >
      <div className="border-b border-line-subtle p-7 md:p-9">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            {project.logo ? (
              <>
                <Image
                  src={project.logo.src}
                  alt=""
                  width={240}
                  height={52}
                  sizes="(max-width: 768px) 65vw, 240px"
                  aria-hidden
                  className="h-12 w-auto max-w-[min(100%,16rem)] shrink-0 object-contain object-left dark:brightness-0 dark:invert"
                />
                {expanded ? (
                  <h2 className="sr-only">
                    {copy.wordmark
                      ? `${copy.wordmark} (${copy.title})`
                      : copy.title}
                  </h2>
                ) : (
                  <h2 className="mt-3 text-h3 font-semibold tracking-tight text-fg-primary">
                    {copy.wordmark ?? copy.title}
                  </h2>
                )}
              </>
            ) : (
              <h2 className="text-h2 tracking-tight">{copy.title}</h2>
            )}
          </div>
          <button
            type="button"
            id={`${panelId}-toggle`}
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-black bg-black px-4 py-2.5 text-xs font-semibold text-white transition-opacity duration-fast hover:opacity-90 dark:border-white dark:bg-white dark:text-black dark:hover:opacity-90"
          >
            <span>{expanded ? labels.collapseCaseStudy : labels.expandCaseStudy}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-base ease-premium ${expanded ? "rotate-180" : ""}`}
              aria-hidden
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
        <p
          className={`mt-3 max-w-3xl text-body text-fg-secondary ${expanded ? "" : "line-clamp-2"}`}
        >
          {copy.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {showStackKeys.map(({ item, core: isCore }) => (
            <span
              key={`${project.id}-${item}`}
              className={
                isCore
                  ? "rounded-pill border border-fg-muted/40 bg-bg-primary/50 px-3 py-1 text-xs font-semibold text-fg-primary"
                  : "rounded-pill border border-line-subtle px-3 py-1 text-xs text-fg-secondary"
              }
            >
              {item}
            </span>
          ))}
          {!expanded && restStack.length > 0 ? (
            <span className="rounded-pill border border-line-subtle px-3 py-1 text-xs text-fg-secondary">
              +{restStack.length}
            </span>
          ) : null}
        </div>
      </div>

      {!expanded ? (
        <div className="border-t border-line-subtle p-7 md:p-9">{impactLinks}</div>
      ) : (
        <div id={panelId}>
          <div className="grid gap-px bg-line-subtle md:grid-cols-2">
            <div className="bg-bg-surface p-6 md:p-7">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-muted">
                {labels.problem}
              </h3>
              <p className="mt-3 text-caption text-fg-secondary">{copy.problem}</p>
            </div>
            <div className="bg-bg-surface p-6 md:p-7">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-muted">
                {labels.solution}
              </h3>
              <p className="mt-3 text-caption text-fg-secondary">{copy.solution}</p>
            </div>
            <div className="bg-bg-surface p-6 md:p-7">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-muted">
                {labels.architecture}
              </h3>
              <p className="mt-3 break-words font-mono text-xs text-fg-secondary">
                {copy.architecture}
              </p>
            </div>
            <div className="bg-bg-surface p-6 md:p-7">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-muted">
                {labels.process}
              </h3>
              <p className="mt-3 text-caption text-fg-secondary">{copy.process}</p>
            </div>
          </div>
          {copy.details ? (
            <div className="border-t border-line-subtle bg-bg-primary/15 p-7 md:p-9 dark:bg-bg-primary/25">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-muted">
                {labels.detailsHeading ?? "Detalhes"}
              </h3>
              <p className="mt-4 max-w-3xl whitespace-pre-wrap text-caption leading-relaxed text-fg-secondary">
                {copy.details}
              </p>
            </div>
          ) : null}
          {copy.attributions && copy.attributions.length > 0 ? (
            <div className="border-t border-line-subtle p-7 md:p-9">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-muted">
                {labels.attributionsHeading ?? "Atribuições"}
              </h3>
              <ul className="mt-4 max-w-3xl space-y-4">
                {copy.attributions.map((row) => (
                  <li key={row.role}>
                    <p className="text-caption font-semibold text-fg-primary">{row.role}</p>
                    <p className="mt-1 text-caption leading-relaxed text-fg-secondary">
                      {row.credit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {project.id === "lumagestor" ? (
            <LumaGestorWalkthroughSection
              labels={
                (
                  dictionary.projects as {
                    lumaGestorWalkthrough: LumaGestorWalkthroughLabels;
                  }
                ).lumaGestorWalkthrough
              }
            />
          ) : null}
          {project.id === "lumalector" ? (
            <LumaProductDemosSection
              labels={
                (dictionary.projects as { lumaDemos: LumaProductDemosLabels }).lumaDemos
              }
            />
          ) : null}
          {project.id === "tech-challenge-2" ? (
            <TechChallenge2WalkthroughSection
              labels={
                (
                  dictionary.projects as {
                    techChallenge2Walkthrough: TechChallenge2WalkthroughLabels;
                  }
                ).techChallenge2Walkthrough
              }
            />
          ) : null}
          {project.id === "tech-challenge-1" ? (
            <TechChallenge1WalkthroughSection
              labels={
                (
                  dictionary.projects as {
                    techChallenge1Walkthrough: TechChallenge1WalkthroughLabels;
                  }
                ).techChallenge1Walkthrough
              }
            />
          ) : null}
          {project.id === "tech-challenge-3" ? (
            <TechChallenge3WalkthroughSection
              labels={
                (
                  dictionary.projects as {
                    techChallenge3Walkthrough: TechChallenge3WalkthroughLabels;
                  }
                ).techChallenge3Walkthrough
              }
            />
          ) : null}
          {project.id === "multimodal-clinical-monitoring" ? (
            <MultimodalClinicalWalkthroughSection
              labels={
                (
                  dictionary.projects as {
                    multimodalClinicalWalkthrough: MultimodalClinicalWalkthroughLabels;
                  }
                ).multimodalClinicalWalkthrough
              }
            />
          ) : null}
          <div className="flex flex-col gap-4 border-t border-line-subtle p-7 md:flex-row md:items-center md:justify-between md:p-9">
            {impactLinks}
          </div>
        </div>
      )}
    </article>
  );
}
