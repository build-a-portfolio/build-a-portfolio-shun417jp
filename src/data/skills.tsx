export type SkillCategory = "Frontend" | "Backend" | "DevOps";

export type Skill = {
  name: string;
  level: number;
  description: string;
};

export const skillsByCategory: Record<SkillCategory, Skill[]> = {
  Frontend: [
    {
      name: "React",
      level: 85,
      description:
        "扱えるレベル: 実装を主導できる。\n使用経験: 個人開発を中心に継続して使用。",
    },
    {
      name: "TypeScript",
      level: 80,
      description:
        "扱えるレベル: 型を意識した設計ができる。\n使用経験: 複数のフロントエンド実装で継続使用。",
    },
    {
      name: "Tailwind CSS",
      level: 75,
      description:
        "扱えるレベル: UI を素早く整えられる。\n使用経験: ポートフォリオや各種画面のスタイリングで使用。",
    },
    {
      name: "Next.js",
      level: 70,
      description:
        "扱えるレベル: 基本設計ができる。\n使用経験: 個人開発でルーティングや画面構成に使用。",
    },
    {
      name: "JavaScript",
      level: 70,
      description:
        "扱えるレベル: モダンな構文を使って実装できる。\n使用経験: フロントエンド開発で継続使用。",
    },
    {
      name: "HTML/CSS",
      level: 90,
      description:
        "扱えるレベル: 構造化とレスポンシブ対応が得意。\n使用経験: ほぼすべての UI 実装で継続使用。",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      level: 75,
      description:
        "扱えるレベル: API 実装や非同期処理を扱える。\n使用経験: 個人開発のバックエンドで使用。",
    },
    {
      name: "Python",
      level: 70,
      description:
        "扱えるレベル: 自動化や小規模サービスを組める。\n使用経験: 学習・開発で継続使用。",
    },
    {
      name: "Django",
      level: 65,
      description:
        "扱えるレベル: REST API や管理画面を扱える。\n使用経験: 学習用・個人開発で使用。",
    },
    {
      name: "PostgreSQL",
      level: 70,
      description:
        "扱えるレベル: リレーショナル設計と SQL を扱える。\n使用経験: 複数プロジェクトで使用。",
    },
    {
      name: "REST API",
      level: 80,
      description:
        "扱えるレベル: 設計と連携を安定して行える。\n使用経験: フロントエンド連携を伴う開発で継続使用。",
    },
  ],
  DevOps: [
    {
      name: "Git",
      level: 85,
      description:
        "扱えるレベル: ブランチ運用やレビューの流れを管理できる。\n使用経験: 日常的に使用。",
    },
    {
      name: "Docker",
      level: 65,
      description:
        "扱えるレベル: 開発環境をコンテナ化できる。\n使用経験: 個人開発での環境構築に使用。",
    },
    {
      name: "Linux",
      level: 60,
      description:
        "扱えるレベル: 基本的な CLI 操作とサーバー管理ができる。\n使用経験: 開発環境や学習で使用。",
    },
    {
      name: "GitHub Actions",
      level: 60,
      description:
        "扱えるレベル: 基本的な CI を組める。\n使用経験: ビルドやデプロイの自動化で使用。",
    },
    {
      name: "AWS",
      level: 50,
      description:
        "扱えるレベル: 基本サービスの概要を理解している。\n使用経験: 学習環境で使用。",
    },
    {
      name: "Nginx",
      level: 20,
      description:
        "扱えるレベル: 基本サービスの概要を理解している。\n使用経験: 学習環境で使用。",
    },
  ],
};
