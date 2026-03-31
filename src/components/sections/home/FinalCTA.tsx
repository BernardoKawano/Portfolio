import Link from "next/link";
import { siteConfig } from "@/config/site";

type FinalCTAProps = {
  dictionary: Record<string, any>;
};

export function FinalCTA({ dictionary }: FinalCTAProps) {
  return (
    <section className="section-shell py-14 md:py-20">
      <div className="premium-card p-8 md:p-12">
        <h2 className="max-w-3xl text-2xl font-semibold tracking-tight md:text-4xl">
          {dictionary.home.finalCtaTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-fg-secondary">{dictionary.home.finalCtaText}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-accent-contrast"
          >
            {dictionary.home.ctaPrimary}
          </Link>
          <Link
            href={siteConfig.links.email}
            className="rounded-full border border-line-subtle px-6 py-3 text-sm font-semibold"
          >
            {dictionary.home.ctaSecondaryEmail}
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line-subtle px-6 py-3 text-sm font-semibold"
          >
            {dictionary.home.ctaSecondaryGithub}
          </Link>
        </div>
      </div>
    </section>
  );
}
