export function Explanation() {
  return (
    <section id="explanation" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">セルフ解説</h2>

        <p>
          このポートフォリオは、エンジニアを目指す学生や採用担当者に向けて、
          自身のスキルや制作物を分かりやすく紹介することを目的として制作しました。
        </p>

        <p className="text-lg text-gray-700 mb-4">
          このポートフォリオサイトでは、アニメーションやモーダルなどのUIに工夫を凝らし、
          作品やスキルを直感的に伝えることを目指しました。React・TypeScriptを用いた開発経験を活かし、
          コンポーネント設計や状態管理を意識しながら実装しています。
        </p>

        <p className="text-lg text-gray-700 mb-4">
          スタイリングにはTailwind CSSを採用し、クラス名によるスタイル管理で
          コンポーネントごとのデザイン調整をしやすくしました。あわせてCSS変数でカラーを一元管理し、
          サイト全体の配色に統一感を持たせています。
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Modalの実装では、Headless UIのDialogコンポーネントというTailwind
          CSSに最適化されたライブラリを使用し、アクセシビリティを意識したモーダル表示を実現しました。
        </p>

        <p className="text-lg text-gray-700 mb-4">
          スキルセクションはReactコンポーネントとして切り出し、データを管理しやすい構造にしました。
          数値が徐々に増えていくアニメーションは、useEffectとsetIntervalを組み合わせ、
          一定間隔で数値を更新することで実現しています。
        </p>

        <p className="text-lg text-gray-700 mb-4">
          ナビゲーションはスクロール位置に応じて自動的に切り替わるようにし、
          現在表示されているセクションを検出してメニューの状態に反映しています。
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Projectsセクションの画像表示にはSwiperを導入し、スワイプ操作で
          直感的に作品を閲覧できるようにしました。
        </p>

        <p>
          課題は、ライブラリの選定に時間がかかったり、適切ではないライブラリを選んでしまったりすることでした。特にSwiperの導入では、Reactでの使用方法やスタイリングの調整に苦労しました。
        </p>
      </div>
    </section>
  );
}
