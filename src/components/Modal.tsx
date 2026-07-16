import { X } from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

export function Modal({ open, title, onClose, children }: Props) {
  const titleId = useId();
  const descriptionId = useId();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    lastActiveRef.current = document.activeElement as HTMLElement | null;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFirst = () => {
      panelRef.current
        ?.querySelector<HTMLElement>(
          'button,[href],[tabindex]:not([tabindex="-1"])',
        )
        ?.focus();
    };

    // Move focus into dialog
    window.setTimeout(focusFirst, 0);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      lastActiveRef.current?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  const trapFocus = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab") return;
    const root = panelRef.current;
    if (!root) return;

    const focusables = Array.from(
      root.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])',
      ),
    ).filter(
      (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"),
    );

    if (focusables.length === 0) return;

    const first = focusables[0]!;
    const last = focusables[focusables.length - 1]!;
    const active = document.activeElement as HTMLElement | null;

    if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    } else if (e.shiftKey && (active === first || active === root)) {
      e.preventDefault();
      last.focus();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        className="glass-panel relative w-full max-w-4xl overflow-hidden rounded-3xl animate-fade-up"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={trapFocus}
      >
        <div className="flex items-start justify-between gap-3 border-b border-[var(--border)] px-5 py-4 md:px-6">
          <div className="min-w-0">
            <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[var(--accent)]">
              Project Detail
            </p>
            <h3
              id={titleId}
              className="mt-2 truncate text-lg font-semibold md:text-xl"
            >
              {title}
            </h3>
            <p
              id={descriptionId}
              className="mt-1 text-sm text-[var(--text-secondary)]"
            >
              画像・技術情報・リンクをまとめた詳細ビューです。
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/40 hover:bg-[var(--bg-section)]"
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[75svh] overflow-auto p-5 md:p-6">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
