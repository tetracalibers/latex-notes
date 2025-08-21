## 線形代数の整理帳

### 何かしらの変更を加えたとき（共通）

どのような変更を加えた場合も、**まずは親ファイルをコンパイル**・更新する必要があります。

1. `topic_linear-algebra.tex`をコンパイルする
2. 次のコマンドで`public`にコピーする

```bash
cp ./out/topic_linear-algebra.pdf ./public/topic_linear-algebra.pdf
```

各章ファイルの更新は、必ず親ファイルをコンパイルしてから行ってください。
（各章のコンパイル時に親の`.aux`ファイルを参照して定理番号を付与するためです。）

### 章の内容を変更したとき

1. 変更した章のファイル（`\chapter`を含むファイル）をコンパイルする
2. `zx copy-linalg.mjs`コマンドで`public`にコピーする

例）2章と4〜6章をコピーしたい場合：
```bash
zx copy-linalg.mjs 2,4-6
```

### 章を追加 or 並び替えしたとき

章構成を変える場合は、次の箇所を更新する必要があります。

- `topic_linear-algebra.tex`の`\subfile`リスト
- `public/index.html`の「PDF（各章）」リスト
- `copy-linalg.mjs`の`CHAPTERS`配列
- 章マスターファイルの`\setcounterref{chapter}{前の章のラベル}`

章の追加や並び替えにより、自動でカウントされる定理番号やその参照が変わります。

- 影響がある章ファイルをすべてコンパイルし、`zx copy-linalg.mjs`コマンドでコピーしてください。
- 影響がある章ファイルの`\setcounterref{chapter}{前の章のラベル}`を変更してください。

基本的には、変更対象となる最初の章以降、すべての章の公開用ファイルを更新することを推奨します。

## Topic Note

### 微分積分の整理帳

```bash
cp ./out/topic_calculus.pdf ./public/topic_calculus.pdf
```

### 統計学の整理帳

```bash
cp ./out/topic_statistics.pdf ./public/topic_statistics.pdf
```

### 確率統計の整理帳

```bash
cp ./out/topic_probability-statistics.pdf ./public/topic_probability-statistics.pdf
```

### 写像の整理帳

```bash
cp ./out/topic_mapping.pdf ./public/topic_mapping.pdf
```

### 機械学習の整理帳

```bash
cp ./out/topic_machine-learning.pdf ./public/topic_machine-learning.pdf
```

### 深層学習の整理帳

```bash
cp ./out/topic_deep-learning.pdf ./public/topic_deep-learning.pdf
```

## Imaging Math

### PDF to HTML（出力先：`./public`）

```bash
alias pdf2htmlEX='docker run -ti --rm -v "`pwd`":/pdf -w /pdf pdf2htmlex/pdf2htmlex:0.18.8.rc2-master-20200820-alpine-3.12.0-x86_64 --dest-dir ./public --process-outline 0 --zoom 1.5'
```

### (master)

```bash
cp ./out/imaging-math.pdf ./public/imaging-math.pdf
```

### 数列

```bash
pdf2htmlEX ./math/basic/out/sequence.pdf
```

### 場合の数

```bash
pdf2htmlEX ./math/basic/out/combination.pdf
```

### 絶対値

```bash
pdf2htmlEX ./math/basic/out/absolute_value.pdf
```

### 三角関数

```bash
pdf2htmlEX ./math/basic/out/trigonometry.pdf
```

### 指数関数と対数関数

```bash
pdf2htmlEX ./math/out/exp_log.pdf
```

### 微分と積分

```bash
pdf2htmlEX ./math/out/calculus.pdf
```

### 論理と集合

```bash
pdf2htmlEX ./math/out/set_logic.pdf
```

### 線形代数

```bash
pdf2htmlEX ./math/out/linear_algebra.pdf
```

### 複素数と複素関数

```bash
pdf2htmlEX ./math/out/complex.pdf
```

### フーリエ解析

```bash
pdf2htmlEX ./math/out/fourier.pdf
```

### ε-δ論法

```bash
pdf2htmlEX ./math/out/epsilon_delta.pdf
```

### 実数の連続性

```bash
pdf2htmlEX ./math/out/continuity_of_real.pdf
```
