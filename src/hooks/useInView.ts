import { useEffect, useState } from "react";
import type { RefObject } from "react";

type Options = IntersectionObserverInit;

export function useInView<T extends Element>(
  ref: RefObject<T | null>,
  options: Options = { threshold: 0.2 },
) {
  const [inView, setInView] = useState(false);

  const root = options.root ?? null;
  const rootMargin = options.rootMargin;
  const threshold = options.threshold ?? 0.2;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { root, rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, root, rootMargin, threshold]);

  return inView;
}
