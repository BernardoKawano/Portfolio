import { notFound } from "next/navigation";
import {
  isLocalizedProject,
  projects,
  resolveProjectCopy,
  type ProjectLocaleItems,
} from "@/content/projects";
import { ProjectArticle } from "@/components/projects/ProjectArticle";
import type { ProjectArticleLabels } from "@/components/projects/ProjectArticle";
import { ProjectHashScroll } from "@/components/projects/ProjectHashScroll";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type ProjectsPageProps = {
  params: { locale: string };
};

export default function ProjectsPage({ params }: ProjectsPageProps) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);
  const labels = dictionary.projects.labels as ProjectArticleLabels;
  const projectItems = dictionary.projects.items as
    | Partial<ProjectLocaleItems>
    | undefined;

  return (
    <div className="section-shell py-section-md md:py-section-lg">
      <ProjectHashScroll />
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
            <ProjectArticle
              key={project.id}
              project={project}
              copy={copy}
              labels={labels}
              dictionary={dictionary as unknown as Record<string, unknown>}
            />
          );
        })}
      </div>
    </div>
  );
}
