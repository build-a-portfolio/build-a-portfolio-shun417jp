import { useMemo, useState } from "react";
import { aboutImages, aboutTabs, type AboutTabId } from "../data/about";
import { TerminalLogs } from "../components/TerminalLogs";

export function About() {
  const [active, setActive] = useState<AboutTabId>("now");
  const tab = useMemo(
    () => aboutTabs.find((t) => t.id === active) ?? aboutTabs[0]!,
    [active],
  );

  return (
    <section id="about" className="scroll-mt-14 section section-divider">
      <div className="mx-auto container-1200 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          About Me
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <div
              className="md:sticky md:top-[72px]"
              role="tablist"
              aria-label="About timeline"
              onKeyDown={(e) => {
                if (!["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                  return;
                e.preventDefault();
                const idx = aboutTabs.findIndex((x) => x.id === active);
                const next = (() => {
                  if (e.key === "Home") return 0;
                  if (e.key === "End") return aboutTabs.length - 1;
                  if (e.key === "ArrowUp")
                    return (idx - 1 + aboutTabs.length) % aboutTabs.length;
                  return (idx + 1) % aboutTabs.length;
                })();
                const nextId = aboutTabs[next]!.id;
                setActive(nextId);
                window.setTimeout(
                  () => document.getElementById(`about-tab-${nextId}`)?.focus(),
                  0,
                );
              }}
            >
              <div className="grid gap-2">
                {aboutTabs.map((t) => {
                  const selected = t.id === active;
                  return (
                    <button
                      key={t.id}
                      id={`about-tab-${t.id}`}
                      type="button"
                      role="tab"
                      tabIndex={selected ? 0 : -1}
                      aria-selected={selected}
                      aria-controls={`about-panel-${t.id}`}
                      className={
                        "w-full rounded-xl border px-3 py-2 text-left text-sm transition " +
                        (selected
                          ? "bg-[var(--accent)] text-[#0F172A] border-transparent"
                          : "bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border)] hover:text-[var(--text-primary)]")
                      }
                      onClick={() => setActive(t.id)}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="md:col-span-9">
            <div className="grid gap-8 md:grid-cols-12">
              <div
                key={tab.id}
                id={`about-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`about-tab-${tab.id}`}
                className="md:col-span-7 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 animate-fade-up"
              >
                <div className="space-y-4 text-[var(--text-secondary)] prose-max">
                  {tab.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="relative h-[260px] md:h-[320px]">
                  {aboutImages.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className={
                        "absolute w-[78%] rounded-lg border border-[var(--border)] object-cover shadow-[0_18px_60px_rgba(0,0,0,0.35)] " +
                        (i === 0
                          ? "left-0 top-0 rotate-[-2deg]"
                          : i === 1
                            ? "right-0 top-10 rotate-[2deg]"
                            : "left-6 bottom-0 rotate-[-1deg]")
                      }
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
            </div>

            <TerminalLogs
              className="mt-8 space-y-1"
              lines={[
                "> Analyzing developer skills...",
                "> Loading skill data...",
                "> Complete.",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
