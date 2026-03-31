import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type ProjectsPageProps = {
  params: { locale: string };
};

export default function ProjectsPage({ params }: ProjectsPageProps) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dictionary = getDictionary(locale);
  const labels = dictionary.projects.labels;

  return (
    <div className="section-shell py-section-md md:py-section-lg">
      <header className="mb-section-sm max-w-3xl">
        <h1 className="text-h1 tracking-tight">{dictionary.projects.title}</h1>
        <p className="mt-3 text-body text-fg-secondary">
          {dictionary.projects.subtitle}
        </p>
      </header>
      <div className="space-y-8">
        {projects.map((project) => (
          <article
            key={project.id}
            id={project.id}
            className="premium-card overflow-hidden"
          >
            <div className="border-b border-line-subtle p-7 md:p-9">
              <h2 className="text-h2 tracking-tight">{project.title}</h2>
              <p className="mt-3 max-w-3xl text-body text-fg-secondary">
                {project.summary}
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
                  {project.problem}
                </p>
              </div>
              <div className="bg-bg-surface p-6 md:p-7">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-muted">
                  {labels.solution}
                </h3>
                <p className="mt-3 text-caption text-fg-secondary">
                  {project.solution}
                </p>
              </div>
              <div className="bg-bg-surface p-6 md:p-7">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-muted">
                  {labels.architecture}
                </h3>
                <p className="mt-3 font-mono text-xs text-fg-secondary">
                  {project.architecture}
                </p>
              </div>
              <div className="bg-bg-surface p-6 md:p-7">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-muted">
                  {labels.process}
                </h3>
                <p className="mt-3 text-caption text-fg-secondary">
                  {project.process}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t border-line-subtle p-7 md:flex-row md:items-center md:justify-between md:p-9">
              <p className="text-caption font-semibold">
                <span className="text-fg-muted">{labels.impact}:</span>{" "}
                {project.impact}
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
        ))}
      </div>
    </div>
  );
}
