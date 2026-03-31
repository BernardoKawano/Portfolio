import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type ContactPageProps = {
  params: { locale: string };
};

export default function ContactPage({ params }: ContactPageProps) {
  if (!isLocale(params.locale)) notFound();
  const dictionary = getDictionary(params.locale as Locale);

  return (
    <section className="section-shell py-14 md:py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{dictionary.contact.title}</h1>
        <p className="mt-4 text-lg leading-8 text-fg-secondary">{dictionary.contact.subtitle}</p>
      </div>
      <div className="mt-10 grid gap-4 md:max-w-xl">
        <Link
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-accent-primary px-6 py-4 text-center text-sm font-semibold text-accent-contrast"
        >
          {dictionary.contact.whatsapp}
        </Link>
        <Link href={siteConfig.links.email} className="premium-card px-6 py-4 text-center text-sm font-semibold">
          {dictionary.contact.email}
        </Link>
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="premium-card px-6 py-4 text-center text-sm font-semibold"
        >
          {dictionary.contact.github}
        </Link>
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="premium-card px-6 py-4 text-center text-sm font-semibold"
        >
          {dictionary.contact.linkedin}
        </Link>
      </div>
    </section>
  );
}
