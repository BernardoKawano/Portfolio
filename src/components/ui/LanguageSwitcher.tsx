"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
};

function switchLocaleInPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  if (segments.length > 1) {
    segments[1] = locale;
  }
  return segments.join("/") || `/${locale}`;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLocaleChange(nextLocale: Locale) {
    document.cookie = `portfolio_locale=${nextLocale}; path=/; max-age=31536000`;
    localStorage.setItem("portfolio_locale", nextLocale);
    router.push(switchLocaleInPath(pathname, nextLocale));
  }

  return (
    <div className="inline-flex rounded-full border border-line-subtle p-1">
      {locales.map((lang) => {
        const active = locale === lang;
        return (
          <button
            type="button"
            key={lang}
            onClick={() => handleLocaleChange(lang)}
            className={`rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide transition-all ${
              active
                ? "bg-accent-primary text-accent-contrast"
                : "text-fg-secondary hover:text-fg-primary"
            }`}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
}
