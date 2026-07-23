import { useEffect, useMemo, useState } from "react";

export type NavSectionId =
  | "home"
  | "profile"
  | "about"
  | "skills"
  | "projects"
  | "contact"
  | "explanation";

export function useActiveSection(sectionIds: NavSectionId[]) {
  const [active, setActive] = useState<NavSectionId>(sectionIds[0] ?? "home");

  const ids = useMemo(() => Array.from(new Set(sectionIds)), [sectionIds]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );

        const top = visible[0];
        const id = top?.target?.id as NavSectionId | undefined;
        if (id) setActive(id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.45, 0.6],
        rootMargin: "-20% 0px -60% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
