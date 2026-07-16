export type AboutTabId = "elementary" | "junior" | "high" | "now";

export type AboutTab = {
  id: AboutTabId;
  label: string;
  paragraphs: string[];
};

export const aboutTabs: AboutTab[] = [
  {
    id: "elementary",
    label: "小学生時代",
    paragraphs: [
      "岩手県北上市の笠松小学校に通い、4年生の時にスポーツ少年団で野球を始めました。以降、中学卒業までの6年間、野球に打ち込みました。",
      "6年生の時に委員会委員長や野球でのキャプテンを務め、小学生ながら組織をまとめる経験を積むことが出来ました",
    ],
  },
  {
    id: "junior",
    label: "中学生時代",
    paragraphs: [
      "北上市の和賀西中学校へ進学し、野球部に所属しました。最終的に副キャプテンを務め、キャプテンを支える役割を担いました。",
      "3年生の時に取り組んだ「将来の職業」を考える授業で、一度だけ見た職場で働く父親の姿に強い印象を受け、同じエンジニアの道を志すようになりました。",
    ],
  },
  {
    id: "high",
    label: "高校生時代",
    paragraphs: [
      "北上翔南高等学校へ進学。部活では野球から離れ演劇部へ所属しました。舞台での活動を通じて、表現力や人前で話す力が身につきました。",
      "3年次には、部長を務め、部員のモチベーション管理や部活動の運営等、視野を広く持ち物事を考えれるようになりました。",
    ],
  },
  {
    id: "now",
    label: "現在",
    paragraphs: [
      "エンジニア職になるため MCL盛岡情報ビジネス&デザイン専門学校へ進学。Java.HTML/CSS/JavaScript/Python/PHP等様々なプログラミング言語に触れWebアプリケーション開発に必要な技術を身に着けました。",
      "他学年と合同で開かれる校内ハッカソンに参加し、実際の開発現場に近い形のチーム開発を経験しました。限られた時間で出されたテーマに沿える成果物を仕上げる過程はとても貴重な機会になりました。",
    ],
  },
];

export const aboutImages = [
  "https://images.unsplash.com/photo-1526378722370-5e9b1f6cfb07?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=80",
];
