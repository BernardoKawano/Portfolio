import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/lib/i18n";

type SiteFooterProps = {
  locale: Locale;
  dictionary: Record<string, any>;
};

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  return (
    <footer className="border-t border-line-subtle">
      <div className="section-shell py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wide">
              {dictionary.footer.copyright}
            </p>
            <p className="mt-1 text-xs text-fg-muted">
              {dictionary.footer.tagline}
            </p>
          </div>
          <nav
            className="flex flex-wrap items-center gap-5 text-xs text-fg-secondary"
            aria-label="Footer navigation"
          >
            <Link
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-fast hover:text-fg-primary"
            >
              WhatsApp
            </Link>
            <Link
              href={siteConfig.links.email}
              className="transition-colors duration-fast hover:text-fg-primary"
            >
              Email
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-fast hover:text-fg-primary"
            >
              GitHub
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="transition-colors duration-fast hover:text-fg-primary"
            >
              {dictionary.nav.contact}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
