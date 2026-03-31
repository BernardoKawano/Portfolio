import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type ContactPageProps = {
  params: { locale: string };
};

const channels = [
  {
    key: "whatsapp" as const,
    href: siteConfig.links.whatsapp,
    external: true,
    primary: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    key: "email" as const,
    href: siteConfig.links.email,
    external: false,
    primary: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    key: "github" as const,
    href: siteConfig.links.github,
    external: true,
    primary: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    key: "linkedin" as const,
    href: siteConfig.links.linkedin,
    external: true,
    primary: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
] as const;

export default function ContactPage({ params }: ContactPageProps) {
  if (!isLocale(params.locale)) notFound();
  const dictionary = getDictionary(params.locale as Locale);

  return (
    <div className="section-shell py-section-md md:py-section-lg">
      <header className="max-w-2xl">
        <h1 className="text-h1 tracking-tight">{dictionary.contact.title}</h1>
        <p className="mt-5 text-body-lg text-fg-secondary">
          {dictionary.contact.subtitle}
        </p>
      </header>
      <div className="mt-section-sm grid gap-4 md:max-w-2xl md:grid-cols-2">
        {channels.map((ch) => (
          <Link
            key={ch.key}
            href={ch.href}
            {...(ch.external
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
            className={`group premium-card flex items-start gap-4 p-6 transition-all duration-base ease-premium hover:-translate-y-0.5 ${
              ch.primary
                ? "bg-accent-primary text-accent-contrast md:col-span-2"
                : ""
            }`}
          >
            <span
              className={`shrink-0 ${
                ch.primary ? "text-accent-contrast" : "text-fg-muted"
              }`}
            >
              {ch.icon}
            </span>
            <div>
              <p className="text-sm font-semibold">
                {dictionary.contact[ch.key]}
              </p>
              <p
                className={`mt-1 text-xs ${
                  ch.primary
                    ? "text-accent-contrast/70"
                    : "text-fg-muted"
                }`}
              >
                {dictionary.contact[`${ch.key}Desc`]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
