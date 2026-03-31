"use client";

import { usePathname, useRouter } from "next/navigation";
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
    <div
      className="inline-flex rounded-pill border border-line-subtle p-0.5"
      role="radiogroup"
      aria-label="Language"
    >
      {locales.map((lang) => {
        const active = locale === lang;
        return (
          <button
            type="button"
            key={lang}
            role="radio"
            aria-checked={active}
            onClick={() => handleLocaleChange(lang)}
            className={`rounded-pill px-2.5 py-1 text-xs font-medium uppercase tracking-wide transition-all duration-base ease-premium ${
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
