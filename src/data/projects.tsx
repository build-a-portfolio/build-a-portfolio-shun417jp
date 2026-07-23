export type Project = {
  title: string;
  duration: string;
  responsibility: string;
  languages: string[];
  details: string;
  imageUrls: string[];
  links?: {
    github?: string;
    live?: string;
  };
};

import portfolio1 from "../image/portfolio01.png";
import portfolio2 from "../image/portfolio02.png";
import portfolio3 from "../image/portfolio03.png";
import articleBoard1 from "../image/記事掲示版アプリ1.png";
import articleBoard2 from "../image/記事掲示板アプリ2.png";
import articleBoard3 from "../image/記事掲示板アプリ3.png";
import lectureReviewThumb from "../image/講義レビューサムネ.png";
import lectureReview2 from "../image/講義レビュー1.png";
import lectureReview3 from "../image/講義レビュー02.png";
import equipmentManagement1 from "../image/備品管理アプリ01.png";
import equipmentManagement2 from "../image/備品管理アプリ02.png";
import equipmentManagement3 from "../image/備品管理アプリ03.png";
import gachaSimulator1 from "../image/ガチャシミュレーター01.png";
import gachaSimulator2 from "../image/ガチャシミュレーター02.png";
import gachaSimulator3 from "../image/ガチャシミュレーター03.png";

export const projects: Project[] = [
  {
    title: "Portfolio",
    duration: "1 month",
    responsibility: "Full-stack (Architecture / API / UI)",
    languages: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    details:
      "作品やスキルを分かりやすく伝えるために構成したポートフォリオサイトです。セクション遷移、プロジェクト一覧、モーダル詳細表示を通して、見やすさと印象に残る体験を両立させました。",
    imageUrls: [portfolio1, portfolio2, portfolio3],
    links: {
      github: "https://github.com/shun417jp/bulletin-board",
      live: "https://example.com",
    },
  },
  {
    title: "記事掲示板アプリ",
    duration: "1 months",
    responsibility: "Frontend + Realtime (WebSocket UX)",
    languages: ["TypeScript", "Next.js", "Python"],
    details:
      "記事の投稿、閲覧、コメントを中心にした掲示板アプリです。リアルタイムな更新と型安全な API を組み合わせ、投稿内容が自然に整理される使いやすい UI を目指しました。",
    imageUrls: [articleBoard1, articleBoard2, articleBoard3],
    links: {
      github: "https://github.com/shun417jp/task-manager",
      live: "https://example.com",
    },
  },
  {
    title: "講義レビューサイト",
    duration: "1 month",
    responsibility: "Frontend",
    languages: ["TypeScript", "React", "Python"],
    details:
      "講義ごとのレビューや評価を比較しやすくしたサイトです。レスポンシブ UI等を使用し、学習の振り返りや講義選びに使いやすい構成にしました。",
    imageUrls: [lectureReviewThumb, lectureReview2, lectureReview3],
  },
  {
    title: "備品管理アプリ",
    duration: "1 month",
    responsibility: "Java(Spring Boot) + React",
    languages: ["Java(Spring Boot)", "React"],
    details:
      "備品の登録・編集・一覧管理を効率よく行える管理アプリです。現場での運用を意識し、素早い入力と確認がしやすい画面設計にまとめました。",
    imageUrls: [
      equipmentManagement1,
      equipmentManagement2,
      equipmentManagement3,
    ],
  },
  {
    title: "ガチャシミュレーター",
    duration: "3 weeks",
    responsibility: "JavaScript,TailwindCSS,Python,SQLite",
    languages: ["JavaScript", "TailwindCSS", "Python", "SQLite"],
    details:
      "抽選結果や排出率を確認しながら遊べるガチャシミュレーターです。アニメーションと操作感を重視し、シンプルでも遊び続けたくなる体験を意識しました。",
    imageUrls: [gachaSimulator1, gachaSimulator2, gachaSimulator3],
  },
];
