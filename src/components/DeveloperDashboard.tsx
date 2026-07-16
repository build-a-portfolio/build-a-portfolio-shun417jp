export function DeveloperDashboard() {
  const skills = [
    {
      name: "React",
      level: 85,
    },
    {
      name: "TypeScript",
      level: 80,
    },
    {
      name: "Django",
      level: 65,
    },
    {
      name: "Tailwind",
      level: 70,
    },
  ];

  return (
    <div className="glass-panel rounded-4xl p-6 md:p-8">
      <div className="mb-8 flex items-center justify-between gap-3">
        <div>
          <p className="font-mono text-xs tracking-[0.24em] text-(--text-secondary)">
            DEVELOPER DASHBOARD
          </p>
          <h3 className="mt-2 text-xl font-semibold text-(--text-primary)">
            Skill Snapshot
          </h3>
        </div>

        <div className="rounded-full border border-(--border) bg-[rgba(255,255,255,0.03)] px-3 py-1 font-mono text-xs text-(--text-secondary)">
          LIVE
        </div>
      </div>

      <div className="space-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex justify-between text-sm text-(--text-secondary)">
              <span className="text-(--text-primary)">{skill.name}</span>
              <span className="font-mono">{skill.level}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-[rgba(255,255,255,0.05)]">
              <div
                className="h-full rounded-full bg-linear-to-r from-(--accent) via-sky-300 to-(--accent-strong) transition-all duration-1000"
                style={{
                  width: `${skill.level}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-(--border) bg-[rgba(4,7,13,0.55)] p-4 font-mono text-sm text-[#8ef5c1] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
        <p>&gt; portfolio.boot()</p>
        <p>&gt; loading projects...</p>
        <p>&gt; loading skills...</p>
        <p>&gt; loading experience...</p>
        <p>&gt; ready</p>
      </div>
    </div>
  );
}
