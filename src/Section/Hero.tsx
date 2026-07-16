import { ArrowDown } from "lucide-react";
import { ParticleBackground } from "../components/ParticleBackground";
import { TypingName } from "../components/TypingName";
import { DeveloperDashboard } from "../components/DeveloperDashboard";

export function Hero() {
  const skills = ["React", "TypeScript", "Django", "Tailwind CSS"];

  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden scroll-mt-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(93,214,255,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(124,255,240,0.12),transparent_24%)]" />
      <ParticleBackground className="absolute inset-0 h-full w-full opacity-80" />

      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(93,214,255,0.12),transparent_70%)] blur-3xl animate-float-slow" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full border border-(--border) bg-[rgba(11,23,41,0.72)] px-4 py-2 font-mono text-xs tracking-[0.24em] text-(--text-secondary)">
              PORTFOLIO / SHUN TOMAKI
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-(--text-primary) md:text-6xl">
              <TypingName text="Shun Tomaki_" className="font-mono" />
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-(--text-secondary) md:text-xl">
              UI の印象、情報設計、実装の信頼性を同時に整えることを重視した、
              フロントエンド中心のポートフォリオです。
            </p>

            <p className="mt-5 font-mono text-sm text-(--accent)">
              Full Stack Developer / Web Designer Mindset
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-(--border) bg-[rgba(11,23,41,0.72)] px-3 py-1 text-sm text-(--text-secondary) backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-(--border) bg-[rgba(11,23,41,0.78)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                <p className="text-3xl font-bold text-(--accent)">3+</p>
                <p className="mt-1 text-sm text-(--text-secondary)">公開作品</p>
              </div>

              <div className="rounded-2xl border border-(--border) bg-[rgba(11,23,41,0.78)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                <p className="text-3xl font-bold text-(--accent)">2</p>
                <p className="mt-1 text-sm text-(--text-secondary)">
                  チーム開発
                </p>
              </div>

              <div className="rounded-2xl border border-(--border) bg-[rgba(11,23,41,0.78)] p-4 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                <p className="text-3xl font-bold text-(--accent)">4+</p>
                <p className="mt-1 text-sm text-(--text-secondary)">技術領域</p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="rounded-xl bg-(--accent) px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
              >
                View Projects
              </button>

              <a
                href="https://github.com/shun417jp"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-(--border) bg-[rgba(11,23,41,0.55)] px-5 py-3 text-sm font-semibold text-(--text-primary) transition hover:border-(--accent)/40"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="relative lg:pl-6">
            <div className="absolute inset-0 -z-10 rounded-4xl bg-[radial-gradient(circle_at_center,rgba(93,214,255,0.15),transparent_62%)] blur-3xl" />
            <DeveloperDashboard />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-(--text-secondary)">
          <span className="font-mono text-xs tracking-[0.18em]">SCROLL</span>

          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
