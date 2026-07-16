import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { Modal } from "../components/Modal";
import { TerminalLogs } from "../components/TerminalLogs";
import { projects, type Project } from "../data/projects";
import { ImageSlider } from "../components/ImageSlider";

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-3 py-2">
      <div className="col-span-4 text-xs font-mono text-(--text-secondary)">
        {label}
      </div>
      <div className="col-span-8 text-sm text-(--text-primary)">{value}</div>
    </div>
  );
}

export function Projects() {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const selected = useMemo<Project | null>(
    () =>
      selectedTitle
        ? (projects.find((p) => p.title === selectedTitle) ?? null)
        : null,
    [selectedTitle],
  );

  return (
    <section id="projects" className="scroll-mt-14 section section-divider">
      <div className="mx-auto container-1200 px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-[0.28em] text-[var(--accent)]">
            Selected Work
          </p>
          <p className="mt-3 text-(--text-secondary)">
            個人開発やチーム開発で制作したアプリケーション・Webサービスです。
            技術選定から実装まで担当したプロジェクトを掲載しています。
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => (
            <article
              key={p.title}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              className={`
                group/card overflow-hidden rounded-3xl border border-[var(--border)]
                bg-[linear-gradient(180deg,rgba(11,23,41,0.96),rgba(7,17,31,0.94))]
                transition-all duration-700 ease-out hover:-translate-y-2
                hover:border-[rgba(93,214,255,0.36)] hover:shadow-[0_26px_90px_rgba(0,0,0,0.28)]
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
            >
              <div className="h-1 w-full bg-linear-to-r from-sky-500 via-cyan-400 to-blue-500" />

              <div className="relative overflow-hidden rounded-t-3xl">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[rgba(4,7,13,0.68)] via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover/card:opacity-100" />
                <div className="absolute left-4 top-4 z-20 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.25em] text-white/80 backdrop-blur-sm">
                  Project {String(index + 1).padStart(2, "0")}
                </div>
                <div className="transition-transform duration-700 ease-out group-hover/card:scale-105 group-hover/card:brightness-[1.06]">
                  <ImageSlider images={p.imageUrls} alt={p.title} />
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-(--text-primary) transition-colors group-hover/card:text-(--accent)">
                    {p.title}
                  </h3>
                  <span className="shrink-0 rounded-full border border-(--border) bg-(--bg-section) px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-(--text-secondary)">
                    {p.duration}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-(--text-secondary) line-clamp-2">
                  {p.details}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.languages.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[rgba(93,214,255,0.16)] bg-[rgba(93,214,255,0.06)] px-2.5 py-1 text-[11px] font-mono text-(--accent) transition-colors group-hover/card:border-[rgba(93,214,255,0.32)] group-hover/card:bg-[rgba(93,214,255,0.12)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedTitle(p.title)}
                    className="inline-flex items-center gap-2 rounded-xl border border-(--border) bg-transparent px-4 py-2 text-sm text-(--text-primary) transition-all duration-300 hover:-translate-y-0.5 hover:border-(--accent)/40 hover:bg-(--bg-section)"
                    aria-label={`View details for ${p.title}`}
                  >
                    View Details
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <TerminalLogs
          className="mt-8 space-y-1"
          lines={[
            "> Preparing contact interface...",
            "> Connecting...",
            "> Ready.",
          ]}
        />
      </div>

      <Modal
        open={Boolean(selected)}
        title={selected?.title ?? "Project details"}
        onClose={() => setSelectedTitle(null)}
      >
        {selected && (
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-6">
              <div className="overflow-hidden rounded-2xl border border-(--border) shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
                <ImageSlider images={selected.imageUrls} alt={selected.title} />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {selected.languages.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[rgba(93,214,255,0.16)] bg-[rgba(93,214,255,0.06)] px-2.5 py-1 text-[11px] font-mono text-(--accent) transition-all duration-300 hover:border-[rgba(93,214,255,0.36)] hover:bg-[rgba(93,214,255,0.16)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {(selected.links?.github || selected.links?.live) && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {selected.links?.github && (
                    <a
                      href={selected.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-(--border) bg-(--bg-card) px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-(--accent)/40 hover:bg-(--bg-section)"
                    >
                      <ExternalLink className="h-4 w-4" /> GitHub
                    </a>
                  )}
                  {selected.links?.live && (
                    <a
                      href={selected.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-(--border) bg-(--bg-card) px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-(--accent)/40 hover:bg-(--bg-section)"
                    >
                      <ExternalLink className="h-4 w-4" /> Live
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="md:col-span-6">
              <div className="rounded-2xl border border-(--border) bg-[linear-gradient(180deg,rgba(7,17,31,0.98),rgba(11,23,41,0.9))] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <Field label="PROJECT名" value={selected.title} />
                <div className="h-px w-full bg-(--border)" />
                <Field label="開発期間" value={selected.duration} />
                <div className="h-px w-full bg-(--border)" />
                <Field label="担当分野" value={selected.responsibility} />
                <div className="h-px w-full bg-(--border)" />
                <Field
                  label="使用言語"
                  value={selected.languages.join(" / ")}
                />
              </div>

              <h4 className="mt-5 text-sm font-semibold tracking-wide text-(--text-primary)">
                PROJECT詳細
              </h4>
              <p className="mt-3 text-sm leading-7 text-(--text-secondary)">
                {selected.details}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
