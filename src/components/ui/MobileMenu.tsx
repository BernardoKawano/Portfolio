"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/config/navigation";
import { isLocaleHomePath } from "@/lib/navHome";
import type { Locale } from "@/lib/i18n";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  locale: Locale;
  dictionary: Record<string, any>;
};

export function MobileMenu({
  open,
  onClose,
  locale,
  dictionary,
}: MobileMenuProps) {
  const pathname = usePathname();

  function onHomeNavClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!pathname || !isLocaleHomePath(pathname, locale)) return;
    e.preventDefault();
    const home = `/${locale}`;
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", home);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-primary/70"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-50 border-b border-line-subtle bg-bg-primary p-5 pt-6"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="mb-6 flex items-center justify-end">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-md p-2 text-fg-secondary transition-colors hover:text-fg-primary"
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
                  <path d="M5 5l10 10M15 5L5 15" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={`/${locale}${item.href}`}
                    onClick={(e) => {
                      if (item.href === "") {
                        onHomeNavClick(e);
                      }
                      onClose();
                    }}
                    className="block rounded-lg px-4 py-3 text-lg font-medium text-fg-primary transition-colors hover:bg-bg-surface"
                  >
                    {dictionary.nav[item.key.split(".")[1]]}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
