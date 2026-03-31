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
      <div className="section-shell flex flex-col gap-5 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-fg-secondary">{dictionary.footer.text}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-fg-secondary">
          <Link href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </Link>
          <Link href={siteConfig.links.email}>Email</Link>
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link href={`/${locale}/contact`}>{dictionary.nav.contact}</Link>
        </div>
      </div>
    </footer>
  );
}
