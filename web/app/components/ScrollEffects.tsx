"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Re-creates the original vanilla-JS behaviour:
 * - fades the full-screen hero out as you scroll (home only)
 * - hides the nav until you scroll toward the about (home only)
 * - toggles a "scrolled" class on the subpage shell for the frosted top bar
 * - reveals .reveal sections via IntersectionObserver
 * Re-runs on route change so it works with client-side navigation.
 */
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const hero = document.getElementById("hero");
    const nav = document.querySelector<HTMLElement>(".topnav");
    const subpage = document.querySelector<HTMLElement>(".subpage");

    const onScroll = () => {
      const vh = window.innerHeight || 1;
      const y = window.scrollY;
      if (hero) {
        const p = Math.min(y / (vh * 0.85), 1);
        hero.style.opacity = String(1 - p);
        hero.style.transform = `scale(${1 + p * 0.06})`;
        if (nav) nav.classList.toggle("is-hidden", y < vh * 0.55);
      }
      if (subpage) subpage.classList.toggle("scrolled", y > 8);
    };

    if (hero && nav) nav.classList.add("is-hidden");
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let io: IntersectionObserver | null = null;
    const reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && reveals.length) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      reveals.forEach((el) => io?.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("is-visible"));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
