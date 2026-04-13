"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Next.js <Link> defaults to scroll=true, which scrolls to top after navigation
 * and overrides the browser hash scroll. This component re-applies scroll to
 * #id after the projects page (and heavy sections) have painted.
 */
export function ProjectHashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.includes("/projects")) return;

    const scrollToHashTarget = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      const el = document.getElementById(decodeURIComponent(id));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    scrollToHashTarget();
    const timeouts = [0, 80, 200, 500].map((ms) =>
      window.setTimeout(scrollToHashTarget, ms),
    );
    return () => {
      for (const t of timeouts) window.clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
