"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "@/components/ui/MobileMenu";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Record<string, any>;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line-subtle/80 bg-bg-primary/95 backdrop-blur">
        <div className="section-shell py-4">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={`/${locale}`}
              className="text-sm font-semibold tracking-wide"
            >
              {siteConfig.name}
            </Link>
            <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`/${locale}${item.href}`}
                  className="text-caption text-fg-secondary transition-colors duration-fast hover:text-fg-primary"
                >
                  {dictionary.nav[item.key.split(".")[1]]}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <LanguageSwitcher locale={locale} />
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="rounded-md p-2 text-fg-secondary transition-colors hover:text-fg-primary md:hidden"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M3 6h14M3 10h14M3 14h14" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        locale={locale}
        dictionary={dictionary}
      />
    </>
  );
}
