import { useRef, useState, useEffect } from "react";
import { TerminalLogs } from "../components/TerminalLogs";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { skillsByCategory, type SkillCategory } from "../data/skills";

const categories: { id: SkillCategory; label: string }[] = [
  { id: "Frontend", label: "Frontend" },
  { id: "Backend", label: "Backend" },
  { id: "DevOps", label: "DevOps" },
];

function SkillCard({
  name,
  level,
  description,
  enabled,
  animKey,
  delayMs,
}: {
  name: string;
  level: number;
  description: string;
  enabled: boolean;
  delayMs: number;
  animKey: string;
}) {
  const value = useCountUp(level, enabled, {
    intervalMs: 20,
    durationMs: 900,
    key: animKey,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    setVisible(false);

    const timer = setTimeout(() => {
      setVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [animKey, enabled]);

  const width = visible ? level : 0;

  return (
    <div
      className={`
    group relative rounded-2xl
    border border-[var(--border)]
    bg-[var(--bg-card)]
    p-5
    transition-all duration-700 ease-out
    hover:-translate-y-1
    ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
  `}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-semibold text-[var(--text-primary)]">{name}</h4>

        <span className="font-mono text-sm text-[var(--text-secondary)]">
          {value}%
        </span>
      </div>

      <div className="mt-3 h-4 w-full rounded-full bg-gray-300">
        <div
          className="
      h-4 rounded-full
      bg-gradient-to-r
      from-sky-500
      via-cyan-400
      to-blue-500
      transition-[width]
      duration-[1200ms]
      ease-out
    "
          style={{
            width: `${width}%`,
          }}
        />
      </div>

      <p className="mt-3 whitespace-pre-line text-sm text-[var(--text-secondary)]">
        {description}
      </p>

      <div className="pointer-events-none mt-4 h-px w-full bg-transparent group-hover:bg-[var(--accent)]/10" />

      <div className="pointer-events-none absolute inset-0 rounded-2xl transition group-hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_0_32px_rgba(56,189,248,0.12)]" />
    </div>
  );
}

export function Skills() {
  const [active, setActive] = useState<SkillCategory>("Frontend");

  const sectionRef = useRef<HTMLElement | null>(null);

  const inView = useInView(sectionRef, {
    threshold: 0.25,
  });

  const animKey = `${active}-${inView ? "in" : "out"}`;

  const skills = skillsByCategory[active];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="scroll-mt-14 bg-[var(--bg-section)] section section-divider"
    >
      <div className="mx-auto container-1200 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Skills
        </h2>

        <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">
          使用経験のある技術やツールをカテゴリごとにまとめています。
        </p>

        <div className="mt-6">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex gap-6 border-b border-[var(--border)]"
          >
            {categories.map((c) => {
              const selected = c.id === active;

              return (
                <button
                  key={c.id}
                  id={`skills-tab-${c.id}`}
                  type="button"
                  role="tab"
                  tabIndex={selected ? 0 : -1}
                  aria-selected={selected}
                  aria-controls={`skills-panel-${c.id}`}
                  className={
                    "relative pb-3 text-sm md:text-base transition-colors " +
                    (selected
                      ? "text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]")
                  }
                  onClick={() => setActive(c.id)}
                  onKeyDown={(e) => {
                    if (
                      !["ArrowLeft", "ArrowRight", "Home", "End"].includes(
                        e.key,
                      )
                    ) {
                      return;
                    }

                    e.preventDefault();

                    const idx = categories.findIndex((x) => x.id === active);

                    const nextIdx = (() => {
                      if (e.key === "Home") return 0;
                      if (e.key === "End") return categories.length - 1;

                      if (e.key === "ArrowLeft") {
                        return (
                          (idx - 1 + categories.length) % categories.length
                        );
                      }

                      return (idx + 1) % categories.length;
                    })();

                    setActive(categories[nextIdx]!.id);
                  }}
                >
                  {c.label}

                  <span
                    className={
                      "absolute left-0 -bottom-px h-[2px] w-full bg-[var(--accent)] transition-opacity " +
                      (selected ? "opacity-100" : "opacity-0")
                    }
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          <div
            id={`skills-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`skills-tab-${active}`}
            className="pt-6"
          >
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((s, i) => (
                <SkillCard
                  key={`${active}-${s.name}-${animKey}`}
                  name={s.name}
                  level={s.level}
                  description={s.description}
                  enabled={true}
                  delayMs={i * 100}
                  animKey={animKey}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6">
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
            Current Focus
          </h3>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            現在は React + TypeScript によるフロントエンド開発と、 Django
            を用いたバックエンド開発を中心に学習しています。
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["React", "TypeScript", "Django"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--border)] bg-[var(--bg-section)] px-3 py-1 text-sm text-[var(--text-primary)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <TerminalLogs
          className="mt-8 space-y-1"
          lines={[
            "> Generating project output...",
            "> Rendering applications...",
            "> Complete.",
          ]}
        />
      </div>
    </section>
  );
}
