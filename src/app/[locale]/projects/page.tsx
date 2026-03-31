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
    <section className="section-shell py-14 md:py-20">
      <header className="mb-10 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          {dictionary.projects.title}
        </h1>
        <p className="mt-3 text-fg-secondary">{dictionary.projects.subtitle}</p>
      </header>
      <div className="space-y-6">
        {projects.map((project) => (
          <article key={project.id} id={project.id} className="premium-card p-7 md:p-9">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-3 text-fg-secondary">{project.summary}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide">{labels.problem}</h3>
                <p className="mt-2 text-sm text-fg-secondary">{project.problem}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide">{labels.solution}</h3>
                <p className="mt-2 text-sm text-fg-secondary">{project.solution}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide">{labels.architecture}</h3>
                <p className="mt-2 text-sm text-fg-secondary">{project.architecture}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide">{labels.process}</h3>
                <p className="mt-2 text-sm text-fg-secondary">{project.process}</p>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide">{labels.stack}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={`${project.id}-${item}`}
                    className="rounded-full border border-line-subtle px-3 py-1 text-xs text-fg-secondary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-5 text-sm font-semibold">{`${labels.impact}: ${project.impact}`}</p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
              <Link href={`/${locale}/projects#${project.id}`} className="underline">
                {labels.caseStudy}
              </Link>
              {project.links.github ? (
                <Link href={project.links.github} className="underline">
                  {labels.github}
                </Link>
              ) : null}
              {project.links.demo ? (
                <Link href={project.links.demo} className="underline">
                  {labels.demo}
                </Link>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
