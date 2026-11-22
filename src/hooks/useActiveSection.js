import { useState, useEffect, useRef, useCallback } from 'react';

export function useActiveSection(sectionIds, headerRef, setMobileMenuOpen) {
  const [activeSection, setActiveSection] = useState("about");
  const manualScrollLockRef = useRef(false);
  const manualScrollTimeoutRef = useRef(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length || typeof IntersectionObserver === "undefined") return;

    const visibleRatios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRatios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0
          );
        });

        if (manualScrollLockRef.current) return;

        let bestId = null;
        let bestRatio = 0;

        sectionIds.forEach((id) => {
          const ratio = visibleRatios.get(id) || 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId) {
          setActiveSection(bestId);
        }
      },
      {
        root: null,
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75]
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    return () => {
      if (manualScrollTimeoutRef.current) {
        window.clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = useCallback(
    (sectionId) => {
      if (typeof setMobileMenuOpen === "function") {
        setMobileMenuOpen(false);
      }
      setActiveSection(sectionId);

      manualScrollLockRef.current = true;
      if (manualScrollTimeoutRef.current) {
        window.clearTimeout(manualScrollTimeoutRef.current);
      }
      manualScrollTimeoutRef.current = window.setTimeout(() => {
        manualScrollLockRef.current = false;
      }, 750);

      const el = document.getElementById(sectionId);
      if (el) {
        const headerHeight = headerRef?.current
          ? headerRef.current.getBoundingClientRect().height
          : 72;
        const targetTop =
          el.getBoundingClientRect().top +
          (window.scrollY || window.pageYOffset || 0) -
          headerHeight -
          8;

        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: "smooth"
        });
      }
    },
    [headerRef, setMobileMenuOpen]
  );

  return {
    activeSection,
    setActiveSection,
    manualScrollLockRef,
    scrollToSection
  };
}