# Scout Tracking Quiz 技術仕様書

※この仕様書はChatGPTによって自動生成されています。

## 概要

ボーイスカウトの追跡サインを学習するためのクイズアプリケーション。React + Mantine UIを用いて実装し、画像と選択肢による3択クイズ形式で出題される。出題数や選択肢はランダム化され、正解・不正解のフィードバックを即時に表示する。

---

## 1. 技術スタック
- フロントエンド: React (Create React App)
- UIライブラリ: Mantine UI
- デプロイ: Vercel
- 画像: ChatGPT生成画像（`src/assets/images/`）

---

## 2. ディレクトリ・コード構成（詳細）

```
scout-tracking-sign/
├── public/
│   └── ...（公開用静的ファイル、index.html等）
├── src/
│   ├── assets/
│   │   └── images/         ... クイズ用画像（PNG等）
│   ├── components/
│   │   ├── StartPage.js    ... トップページ（クイズ開始画面）
│   │   ├── QuizPage.js     ... クイズ出題・解答画面
│   │   └── ResultPage.js   ... 結果表示画面
│   ├── data/
│   │   └── questions.js    ... 問題データ（画像・選択肢・正解）
│   ├── utils/
│   │   └── shuffle.js      ... 配列シャッフル用ユーティリティ関数
│   ├── App.js              ... アプリケーション本体（状態管理・画面遷移）
│   ├── App.css             ... 全体スタイル・レスポンシブ対応
│   ├── index.js            ... エントリーポイント
│   └── ...（その他CRA標準ファイル）
├── README.md               ... プロジェクト概要・起動手順
├── specification.md        ... 技術仕様書（本ファイル）
└── ...
```

### ファイル・コンポーネント詳細

#### `src/App.js`
- 役割: アプリ全体の状態管理・画面遷移のルートコンポーネント
- 主な状態:
  - `currentPage`（'start' | 'quiz' | 'result'）
  - `currentQuestion`（現在の問題インデックス）
  - `showAnswer`（正誤判定表示フラグ）
  - `selectedAnswer`（ユーザーの選択）
  - `score`（正解数）
  - `showResult`（○×表示フラグ）
  - `isCorrect`（直近の正誤）
  - `shuffledOptions`（現在の問題の選択肢シャッフル済み配列）
  - `selectedQuestions`（出題対象の問題配列）
- 主な関数:
  - `startQuiz()`：出題数分ランダム抽出・初期化
  - `nextQuestion()`：次の問題へ遷移
  - `handleAnswer(answer)`：選択肢クリック時の正誤判定
  - `backToStart()`：トップページに戻る
- 画面ごとに`StartPage`/`QuizPage`/`ResultPage`を切り替え表示

#### `src/components/StartPage.js`
- 役割: タイトル・説明・「クイズを始める」ボタン・リポジトリリンクの表示
- Props:
  - `onStart`（クイズ開始関数）
  - `questions`（出題予定の問題配列、問題数表示用）
- レイアウト: flexで中央寄せ、スマホ対応

#### `src/components/QuizPage.js`
- 役割: クイズ出題・選択肢・正誤判定・○×・「次の問題」ボタンの表示
- Props:
  - `currentQuestion`（現在の問題インデックス）
  - `questions`（出題中の問題配列）
  - `shuffledOptions`（現在の問題の選択肢配列）
  - `score`（正解数）
  - `showAnswer`（正誤判定表示フラグ）
  - `selectedAnswer`（ユーザーの選択）
  - `showResult`（○×表示フラグ）
  - `isCorrect`（直近の正誤）
  - `onAnswer(option)`（選択肢クリック時のコールバック）
  - `onNextQuestion()`（次の問題へ遷移コールバック）
- レイアウト: flexで中央寄せ、選択肢は横並び、○×やボタンは中央表示
- スマホ対応: フォント・ボタン・○×のサイズ縮小、スクロール可

#### `src/components/ResultPage.js`
- 役割: スコア・メッセージ・「トップページに戻る」ボタンの表示
- Props:
  - `score`（正解数）
  - `questions`（出題した問題配列）
  - `onBackToStart()`（トップページに戻るコールバック）
- レイアウト: flexで中央寄せ、スマホ対応

#### `src/data/questions.js`
- 役割: クイズ問題データの定義
- 各問題は以下の形式：
  ```js
  {
    image: 画像ファイル（import済み）, // 例: import toRight1 from '../assets/images/toRight1.png';
    correctAnswer: '正解の文字列',
    options: ['選択肢1', '選択肢2', '選択肢3'] // correctAnswerを必ず含む
  }
  ```
- 画像は`src/assets/images/`配下のPNGファイル
- 選択肢はバリエーション豊かに設定

#### `src/utils/shuffle.js`
- 役割: 配列シャッフル用の純粋関数
- インターフェース:
  ```js
  export const shuffleArray = (array) => {
    // Fisher-Yatesアルゴリズム
    ...
    return newArray;
  };
  ```
- 問題・選択肢のランダム化に利用

#### `src/App.css`
- 役割: 全体のレイアウト・ボタン・画像・レスポンシブ・縮小・中央寄せ等のスタイルを一元管理
- 画面幅480px以下で`html { font-size: 12px; }`などで全体縮小
- 各ページの中央寄せ・ボタンサイズ・画像サイズ・○×の大きさなどを調整

#### `src/index.js`
- 役割: エントリーポイント
- MantineProviderで全体をラップし、グローバルスタイル適用

#### `src/assets/images/`
- 役割: クイズで使用するPNG画像（ChatGPT生成）を格納
- ファイル名例: `toRight1.png`, `danger1.png` など

---

## 3. 主な機能
- トップページ、クイズページ、リザルトページの3画面構成
- クイズ開始時に全問題からランダムで指定数を抽出
- 各問題の選択肢もランダムに並び替え
- 画像と3択の選択肢を表示
- 選択肢を選ぶと即時に正誤判定（○×表示）と「次の問題へ」ボタンを表示
- 正解の選択肢は緑色で表示
- スコアをリアルタイムで表示
- 全問終了後にリザルトページでスコアとメッセージを表示
- スマートフォン対応（レスポンシブ、フォントサイズ・要素縮小、スクロール対応）
- トップページにGitHubリポジトリへのリンクを表示

---

## 4. 問題データ仕様（`src/data/questions.js`）
- 各問題は以下の形式：
```js
{
  image: 画像ファイル（import済み）,
  correctAnswer: '正解の文字列',
  options: ['選択肢1', '選択肢2', '選択肢3'] // correctAnswerを必ず含む
}
```
- 画像は`src/assets/images/`配下のPNGファイル
- 選択肢はバリエーション豊かに設定

---

## 5. 出題数の設定
- `src/App.js`内の`NUM_QUESTIONS`で出題数を指定
- クイズ開始時に`shuffleArray([...questions]).slice(0, NUM_QUESTIONS)`でランダム抽出

---

## 6. UI/UX仕様
- MantineのButton, Image, Modal, Title, Text等を活用
- 選択肢ボタンは大きく、タップしやすいサイズ
- 正解時は緑色、誤答時は赤色、未選択は青色やグレー
- ○×マークは大きく中央表示
- スマホでは全体が縮小・スクロール可能
- レイアウトはflex中心で中央寄せ

---

## 7. その他
- 画像はChatGPTで生成
- READMEにデプロイURL・ローカル起動手順・スクリーンショット・画像生成元を明記
- コードは可読性・保守性を重視し、コンポーネント分割・ユーティリティ分離

---

## 8. 今後の拡張例
- 問題数や選択肢数の動的設定
- 問題ごとの解説表示