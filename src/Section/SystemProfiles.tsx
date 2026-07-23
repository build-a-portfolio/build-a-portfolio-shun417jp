export function SystemProfiles() {
  return (
    <section id="profile" className="scroll-mt-14 section section-divider">
      <div className="mx-auto container-1200 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Profile
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-(--border) bg-(--bg-card) p-6">
            <p className="text-sm font-mono text-(--text-secondary)">ROLE</p>
            <p className="mt-3 text-lg font-semibold text-(--text-primary)">
              Web Developer
            </p>
            <p className="mt-2 text-sm text-(--text-secondary)">
              React / TypeScript を中心に、UI
              と実装の両方を意識して開発しています。
            </p>
          </div>

          <div className="rounded-2xl border border-(--border) bg-(--bg-card) p-6">
            <p className="text-sm font-mono text-(--text-secondary)">FOCUS</p>
            <p className="mt-3 text-lg font-semibold text-(--text-primary)">
              Clean UX
            </p>
            <p className="mt-2 text-sm text-(--text-secondary)">
              迷わない導線、読みやすい情報設計、操作感の良さを重視しています。
            </p>
          </div>

          <div className="rounded-2xl border border-(--border) bg-(--bg-card) p-6">
            <p className="text-sm font-mono text-(--text-secondary)">CURRENT</p>
            <p className="mt-3 text-lg font-semibold text-(--text-primary)">
              Portfolio Upgrade
            </p>
            <p className="mt-2 text-sm text-(--text-secondary)">
              見た目だけでなく、現在地表示や情報の優先順位も整えています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SystemProfiles;
