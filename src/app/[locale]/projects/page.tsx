import Link from "next/link";
import { notFound } from "next/navigation";
import {
  isLocalizedProject,
  projects,
  resolveProjectCopy,
  type ProjectLocaleItems,
} from "@/content/projects";
import {
  LumaGestorWalkthroughSection,
  type LumaGestorWalkthroughLabels,
} from "@/components/projects/luma/LumaGestorWalkthrough";
import {
  LumaProductDemosSection,
  type LumaProductDemosLabels,
} from "@/components/projects/luma/LumaProductDemos";
import {
  TechChallenge1WalkthroughSection,
  type TechChallenge1WalkthroughLabels,
} from "@/components/projects/tech/TechChallenge1Walkthrough";
import {
  TechChallenge2WalkthroughSection,
  type TechChallenge2WalkthroughLabels,
} from "@/components/projects/tech/TechChallenge2Walkthrough";
import {
  TechChallenge3WalkthroughSection,
  type TechChallenge3WalkthroughLabels,
} from "@/components/projects/tech/TechChallenge3Walkthrough";
import {
  MultimodalClinicalWalkthroughSection,
  type MultimodalClinicalWalkthroughLabels,
} from "@/components/projects/clinical/MultimodalClinicalWalkthrough";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type ProjectsPageProps = {
  params: { locale: string };
};

export default function ProjectsPage({ params }: ProjectsPageProps) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);
  const labels = dictionary.projects.labels as typeof dictionary.projects.labels & {
    detailsHeading?: string;
    attributionsHeading?: string;
  };
  const projectItems = dictionary.projects.items as
    | Partial<ProjectLocaleItems>
    | undefined;

  return (
    <div className="section-shell py-section-md md:py-section-lg">
      <header className="mb-section-sm max-w-3xl">
        <h1 className="text-h1 tracking-tight">{dictionary.projects.title}</h1>
        <p className="mt-3 text-body text-fg-secondary">
          {dictionary.projects.subtitle}
        </p>
      </header>
      <div className="space-y-8">
        {projects.map((project) => {
          const copy = resolveProjectCopy(
            project,
            isLocalizedProject(project) ? projectItems : undefined
          );
          return (
            <article
              key={project.id}
              id={project.id}
              className="premium-card overflow-hidden"
            >
              <div className="border-b border-line-subtle p-7 md:p-9">
                {project.logo ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.logo.src}
                      alt=""
                      width={240}
                      height={52}
                      aria-hidden
                      className="h-12 w-auto max-w-[min(100%,16rem)] shrink-0 object-contain object-left dark:brightness-0 dark:invert"
                    />
                    <h2 className="sr-only">
                      {copy.wordmark
                        ? `${copy.wordmark} (${copy.title})`
                        : copy.title}
                    </h2>
                  </>
                ) : (
                  <h2 className="text-h2 tracking-tight">{copy.title}</h2>
                )}
                <p className="mt-3 max-w-3xl text-body text-fg-secondary">
                  {copy.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={`${project.id}-${item}`}
                      className="rounded-pill border border-line-subtle px-3 py-1 text-xs text-fg-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-px bg-line-subtle md:grid-cols-2">
                <div className="bg-bg-surface p-6 md:p-7">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-muted">
                    {labels.problem}
                  </h3>
                  <p className="mt-3 text-caption text-fg-secondary">
                    {copy.problem}
                  </p>
                </div>
                <div className="bg-bg-surface p-6 md:p-7">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-muted">
                    {labels.solution}
                  </h3>
                  <p className="mt-3 text-caption text-fg-secondary">
                    {copy.solution}
                  </p>
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
                  <p className="mt-3 text-caption text-fg-secondary">
                    {copy.process}
                  </p>
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
                    (dictionary.projects as { lumaDemos: LumaProductDemosLabels })
                      .lumaDemos
                  }
                />
              ) : null}
              {project.id === "tech-challange-2" ? (
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
              {project.id === "tech-challange-1" ? (
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
              {project.id === "tech-challange-3" ? (
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
                <p className="text-caption font-semibold">
                  <span className="text-fg-muted">{labels.impact}:</span>{" "}
                  {copy.impact}
                </p>
                <div className="flex flex-wrap gap-3">
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
            </article>
          );
        })}
      </div>
    </div>
  );
}
