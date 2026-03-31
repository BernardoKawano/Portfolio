import Link from "next/link";
import { projects } from "@/content/projects";
import type { Locale } from "@/lib/i18n";

type FeaturedProjectsProps = {
  locale: Locale;
  dictionary: Record<string, any>;
};

export function FeaturedProjects({ locale, dictionary }: FeaturedProjectsProps) {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section className="section-shell py-12 md:py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {dictionary.home.projectsTitle}
        </h2>
        <p className="mt-2 text-fg-secondary">{dictionary.home.projectsSubtitle}</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {featured.map((project) => (
          <article key={project.id} className="premium-card p-6">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-fg-secondary">{project.summary}</p>
            <p className="mt-4 text-sm font-medium text-fg-primary">{project.impact}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={`${project.id}-${item}`}
                  className="rounded-full border border-line-subtle px-3 py-1 text-xs text-fg-secondary"
                >
                  {item}
                </span>
              ))}
            </div>
            <Link
              href={`/${locale}/projects#${project.id}`}
              className="mt-6 inline-block text-sm font-semibold underline decoration-line-subtle underline-offset-4"
            >
              {dictionary.projects.labels.caseStudy}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
