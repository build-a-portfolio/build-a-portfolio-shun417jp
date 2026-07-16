import { ExternalLink, Globe, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-14 section section-divider">
      <div className="mx-auto container-1200 px-4 md:px-6">
        <div className="grid gap-3 md:grid-cols-3">
          <a
            href="https://github.com/shun417jp"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-(--border) bg-(--bg-card) px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-(--accent)/40 hover:bg-(--bg-section)"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(93,214,255,0.10)] text-(--accent) transition-transform duration-300 group-hover:scale-105">
              <ExternalLink className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-(--text-primary)">
                GitHub
              </p>
              <p className="text-xs text-(--text-secondary)">Code / repos</p>
            </div>
          </a>

          <a
            href="mailto:hello@example.com"
            className="group flex items-center gap-3 rounded-2xl border border-(--border) bg-(--bg-card) px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-(--accent)/40 hover:bg-(--bg-section)"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(93,214,255,0.10)] text-(--accent) transition-transform duration-300 group-hover:scale-105">
              <Mail className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-(--text-primary)">
                Email
              </p>
              <p className="text-xs text-(--text-secondary)">
                hello@example.com
              </p>
            </div>
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-(--border) bg-(--bg-card) px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-(--accent)/40 hover:bg-(--bg-section)"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(93,214,255,0.10)] text-(--accent) transition-transform duration-300 group-hover:scale-105">
              <Globe className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-(--text-primary)">X</p>
              <p className="text-xs text-(--text-secondary)">X / updates</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
