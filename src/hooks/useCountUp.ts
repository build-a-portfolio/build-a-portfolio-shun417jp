import { useEffect, useRef, useState } from "react";

export function useCountUp(
  target: number,
  enabled: boolean,
  options: {
    intervalMs?: number;
    durationMs?: number;
    key?: string | number;
  } = {},
) {
  const intervalMs = options.intervalMs ?? 20;
  const durationMs = options.durationMs ?? 800;

  const [value, setValue] = useState(0);
  const targetRef = useRef(target);

  useEffect(() => {
    targetRef.current = target;
  }, [target]);

  useEffect(() => {
    if (!enabled) return;

    const steps = Math.max(1, Math.floor(durationMs / intervalMs));
    const increment = targetRef.current / steps;

    let current = 0;
    let tick = 0;

    // Reset async to avoid setState sync-in-effect lint.
    Promise.resolve().then(() => setValue(0));

    const timer = window.setInterval(() => {
      tick += 1;
      current = Math.min(targetRef.current, Math.round(increment * tick));
      setValue(current);

      if (current >= targetRef.current || tick >= steps) {
        window.clearInterval(timer);
        setValue(targetRef.current);
      }
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [enabled, intervalMs, durationMs, options.key]);

  return enabled ? value : 0;
}
