import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type AboutPageProps = {
  params: { locale: string };
};

export default function AboutPage({ params }: AboutPageProps) {
  if (!isLocale(params.locale)) notFound();
  const dictionary = getDictionary(params.locale as Locale);

  return (
    <section className="section-shell py-14 md:py-20">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{dictionary.about.title}</h1>
        <p className="mt-5 text-lg leading-8 text-fg-secondary">{dictionary.about.intro}</p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <article className="premium-card p-7">
          <h2 className="text-xl font-semibold">{dictionary.about.philosophyTitle}</h2>
          <p className="mt-3 leading-8 text-fg-secondary">{dictionary.about.philosophyText}</p>
        </article>
        <article className="premium-card p-7">
          <h2 className="text-xl font-semibold">{dictionary.about.focusTitle}</h2>
          <ul className="mt-4 space-y-2 text-fg-secondary">
            {dictionary.about.focusItems.map((item: string) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
