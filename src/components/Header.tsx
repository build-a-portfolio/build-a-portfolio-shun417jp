import { Menu, Terminal, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { NavSectionId } from "../hooks/useActiveSection";

type NavItem = { id: NavSectionId; label: string };

type Props = {
  activeSection: NavSectionId;
};

export function Header({ activeSection }: Props) {
  const items = useMemo<NavItem[]>(
    () => [
      { id: "home", label: "Home" },
      { id: "profile", label: "Profile" },
      { id: "about", label: "About Me" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goTo = (id: NavSectionId) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-(--border) bg-[rgba(5,11,20,0.72)] backdrop-blur-xl">
      <div className="mx-auto flex h-full w-full container-1200 items-center justify-between px-4">
        <button
          type="button"
          onClick={() => goTo("home")}
          className="flex items-center gap-2 text-(--text-primary) transition-colors hover:text-(--accent)"
          aria-label="Go to top"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-(--border) bg-[rgba(255,255,255,0.03)] shadow-[0_0_0_1px_rgba(93,214,255,0.08)]">
            <Terminal className="h-4 w-4 text-(--accent)" />
          </span>
          <span className="font-mono text-sm tracking-[0.18em] md:text-base">
            shun.tomaki
          </span>
        </button>

        <nav
          className="hidden md:flex items-center gap-2 rounded-full border border-(--border) bg-[rgba(255,255,255,0.03)] px-2 py-2 shadow-[0_20px_80px_rgba(0,0,0,0.18)]"
          aria-label="Primary"
        >
          {items.map((it) => (
            <button
              key={it.id}
              type="button"
              onClick={() => goTo(it.id)}
              className={
                "relative rounded-full px-4 py-2 text-sm transition-colors " +
                (activeSection === it.id
                  ? "bg-[rgba(93,214,255,0.12)] text-(--text-primary)"
                  : "text-(--text-secondary) hover:bg-[rgba(255,255,255,0.04)] hover:text-(--text-primary)")
              }
            >
              {it.label}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) bg-[rgba(255,255,255,0.03)] text-(--text-primary)"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-(--border) bg-[rgba(5,11,20,0.96)]">
          <nav className="mx-auto container-1200 px-4 py-3" aria-label="Mobile">
            <ul className="m-0 list-none p-0 grid gap-1">
              {items.map((it) => (
                <li key={it.id}>
                  <button
                    type="button"
                    onClick={() => goTo(it.id)}
                    className={
                      "w-full rounded-xl px-3 py-3 text-left text-sm border transition-colors " +
                      (activeSection === it.id
                        ? "border-(--accent)/35 bg-[rgba(93,214,255,0.1)] text-(--text-primary)"
                        : "border-(--border) bg-[rgba(255,255,255,0.03)] text-(--text-secondary) hover:text-(--text-primary)")
                    }
                  >
                    {it.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
