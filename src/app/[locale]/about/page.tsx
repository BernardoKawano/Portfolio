import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type AboutPageProps = {
  params: { locale: string };
};

export default function AboutPage({ params }: AboutPageProps) {
  if (!isLocale(params.locale)) notFound();
  const dictionary = getDictionary(params.locale as Locale);

  return (
    <div className="section-shell py-section-md md:py-section-lg">
      <header className="max-w-3xl">
        <h1 className="text-h1 tracking-tight">{dictionary.about.title}</h1>
        <p className="mt-6 text-body-lg text-fg-secondary">
          {dictionary.about.intro}
        </p>
        <p className="mt-4 text-body text-fg-secondary">
          {dictionary.about.introExtended}
        </p>
      </header>

      <section className="mt-section-sm md:mt-section-md">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="premium-card p-7 md:p-8">
            <h2 className="text-h3 font-semibold">
              {dictionary.about.philosophyTitle}
            </h2>
            <p className="mt-4 text-body leading-relaxed text-fg-secondary">
              {dictionary.about.philosophyText}
            </p>
          </article>
          <article className="premium-card p-7 md:p-8">
            <h2 className="text-h3 font-semibold">
              {dictionary.about.focusTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {dictionary.about.focusItems.map((item: string) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-body text-fg-secondary"
                >
                  <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-fg-muted" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-section-sm md:mt-section-md">
        <h2 className="text-h2 tracking-tight">
          {dictionary.about.approachTitle}
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {dictionary.about.approachItems.map(
            (item: { title: string; description: string }) => (
              <article key={item.title} className="premium-card p-6 md:p-7">
                <h3 className="text-caption font-semibold uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-3 text-body text-fg-secondary">
                  {item.description}
                </p>
              </article>
            ),
          )}
        </div>
      </section>
    </div>
  );
}
