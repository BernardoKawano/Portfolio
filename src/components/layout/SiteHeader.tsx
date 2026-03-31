import Link from "next/link";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Record<string, any>;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line-subtle/80 bg-bg-primary/95 backdrop-blur">
      <div className="section-shell py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href={`/${locale}`} className="text-sm font-semibold tracking-wide">
            {siteConfig.name}
          </Link>
          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}${item.href}`}
                className="text-sm text-fg-secondary transition-colors hover:text-fg-primary"
              >
                {dictionary.nav[item.key.split(".")[1]]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher locale={locale} />
            <ThemeToggle />
          </div>
        </div>
        <nav className="mt-3 flex items-center gap-4 overflow-x-auto md:hidden">
          {navItems.map((item) => (
            <Link
              key={`mobile-${item.key}`}
              href={`/${locale}${item.href}`}
              className="whitespace-nowrap text-sm text-fg-secondary"
            >
              {dictionary.nav[item.key.split(".")[1]]}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
