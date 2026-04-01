"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  isLocalizedProject,
  projects,
  resolveProjectCopy,
  type ProjectLocaleItems,
} from "@/content/projects";
import { Card } from "@/components/ui/Card";
import type { Locale } from "@/lib/i18n";

type FeaturedProjectsProps = {
  locale: Locale;
  dictionary: Record<string, any>;
};

export function FeaturedProjects({
  locale,
  dictionary,
}: FeaturedProjectsProps) {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const projectItems = dictionary.projects?.items as
    | Partial<ProjectLocaleItems>
    | undefined;

  return (
    <section className="section-shell py-section-md md:py-section-lg">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.35 }}
        className="mb-10"
      >
        <h2 className="text-h1 tracking-tight">
          {dictionary.home.projectsTitle}
        </h2>
        <p className="mt-3 text-body text-fg-secondary">
          {dictionary.home.projectsSubtitle}
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: { opacity: 1 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="grid gap-5 md:grid-cols-3"
      >
        {featured.map((project) => {
          const copy = resolveProjectCopy(
            project,
            isLocalizedProject(project) ? projectItems : undefined
          );
          const logo = project.logo;
          return (
            <Card
              key={project.id}
              hover
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col p-6 md:p-7"
            >
              {logo ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt=""
                    width={176}
                    height={40}
                    aria-hidden
                    className="h-9 w-auto max-w-[min(100%,12.5rem)] shrink-0 object-contain object-left dark:brightness-0 dark:invert"
                  />
                  <h3 className="sr-only">
                    {copy.wordmark ? `${copy.wordmark} (${copy.title})` : copy.title}
                  </h3>
                </>
              ) : (
                <h3 className="text-h3 font-semibold">{copy.title}</h3>
              )}
              <p className="mt-3 flex-1 text-caption leading-relaxed text-fg-secondary">
                {copy.summary}
              </p>
              <p className="mt-5 text-caption font-medium text-fg-primary">
                {copy.impact}
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
              <Link
                href={`/${locale}/projects#${project.id}`}
                className="mt-6 inline-block text-caption font-semibold underline decoration-line-subtle underline-offset-4 transition-colors duration-fast hover:decoration-fg-muted"
              >
                {dictionary.projects.labels.caseStudy}
              </Link>
            </Card>
          );
        })}
      </motion.div>
    </section>
  );
}
