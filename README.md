## PDF to HTML

### 出力先：`./public`

```bash
alias pdf2htmlEX='docker run -ti --rm -v "`pwd`":/pdf -w /pdf pdf2htmlex/pdf2htmlex:0.18.8.rc2-master-20200820-alpine-3.12.0-x86_64 --dest-dir ./public --process-outline 0 --zoom 1.5'
```

## 線形代数の整理帳

### 全文

```bash
cp ./out/topic_linear-algebra.pdf ./public/topic_linear-algebra.pdf
```

### ベクトルと座標

```bash
cp ./topic/linear-algebra/out/vector.pdf ./public/linear-algebra/vector.pdf
```

### 線形写像と行列の演算

```bash
cp ./topic/linear-algebra/out/linear-map.pdf ./public/linear-algebra/linear-map.pdf
```

### 対角行列と三角行列

```bash
cp ./topic/linear-algebra/out/diagonal-matrix.pdf ./public/linear-algebra/diagonal-matrix.pdf
```

### 連立一次方程式と掃き出し法

```bash
cp ./topic/linear-algebra/out/linear-equation.pdf ./public/linear-algebra/linear-equation.pdf
```

### 線形写像の像と核

```bash
cp ./topic/linear-algebra/out/kernel-and-image.pdf ./public/linear-algebra/kernel-and-image.pdf
```

### 正則な線形変換と逆行列

```bash
cp ./topic/linear-algebra/out/invertible-transform-inverse-matrix.pdf ./public/linear-algebra/invertible-transform-inverse-matrix.pdf
```

### 基本変形と基本行列

```bash
cp ./topic/linear-algebra/out/elementary-matrix.pdf ./public/linear-algebra/elementary-matrix.pdf
```

### 行列の階数と解の性質

```bash
cp ./topic/linear-algebra/out/linear-equation-and-rank.pdf ./public/linear-algebra/linear-equation-and-rank.pdf
```

### 線型独立な列ベクトルと階数

```bash
cp ./topic/linear-algebra/out/column-independence.pdf ./public/linear-algebra/column-independence.pdf
```

### 部分空間の基底と次元

```bash
cp ./topic/linear-algebra/out/subspace-basis-and-dim.pdf ./public/linear-algebra/subspace-basis-and-dim.pdf
```

### 線形写像の階数

```bash
cp ./topic/linear-algebra/out/linear-map-rank.pdf ./public/linear-algebra/linear-map-rank.pdf
```

### 行列式

```bash
cp ./topic/linear-algebra/out/determinant.pdf ./public/linear-algebra/determinant.pdf
```

### 三次元ベクトルの外積

```bash
cp ./topic/linear-algebra/out/cross-product.pdf ./public/linear-algebra/cross-product.pdf
```

### 線形同型

```bash
cp ./topic/linear-algebra/out/linear-isomorphism.pdf ./public/linear-algebra/linear-isomorphism.pdf
```

### 表現行列と基底変換

```bash
cp ./topic/linear-algebra/out/rep-matrix-basis-change.pdf ./public/linear-algebra/rep-matrix-basis-change.pdf
```

### 直和分解と不変部分空間

```bash
cp ./topic/linear-algebra/out/invariant-subspace-direct-sum.pdf ./public/linear-algebra/invariant-subspace-direct-sum.pdf
```

### 行列の対角化

```bash
cp ./topic/linear-algebra/out/diagonalization.pdf ./public/linear-algebra/diagonalization.pdf
```

### 内積と計量空間

```bash
cp ./topic/linear-algebra/out/metric-space.pdf ./public/linear-algebra/metric-space.pdf
```

### 正射影と直交化

```bash
cp ./topic/linear-algebra/out/gram-schmidt.pdf ./public/linear-algebra/gram-schmidt.pdf
```

### 複素行列と対角化

```bash
cp ./topic/linear-algebra/out/diagonalization-over-complex.pdf ./public/linear-algebra/diagonalization-over-complex.pdf
```

### 計量空間上の変換

```bash
cp ./topic/linear-algebra/out/mapping-on-metric-space.pdf ./public/linear-algebra/mapping-on-metric-space.pdf
```

### 三角化と行列多項式

```bash
cp ./topic/linear-algebra/out/triangularization.pdf ./public/linear-algebra/triangularization.pdf
```

### 直交補空間と射影行列

```bash
cp ./topic/linear-algebra/out/projection-matrix.pdf ./public/linear-algebra/projection-matrix.pdf
```

### 抽象線形空間

```bash
cp ./topic/linear-algebra/out/abstract-linear-space.pdf ./public/linear-algebra/abstract-linear-space.pdf
```

### 広義固有空間

TODO

### 双対空間

```bash
cp ./topic/linear-algebra/out/row-vector-space.pdf ./public/linear-algebra/row-vector-space.pdf
```

### 部分空間の双対性

```bash
cp ./topic/linear-algebra/out/subspace-duality.pdf ./public/linear-algebra/subspace-duality.pdf
```

### 双線形形式

```bash
cp ./topic/linear-algebra/out/bilinear-form.pdf ./public/linear-algebra/bilinear-form.pdf
```

### 二次形式

```bash
cp ./topic/linear-algebra/out/quadratic-form.pdf ./public/linear-algebra/quadratic-form.pdf
```

### テンソル積

```bash
cp ./topic/linear-algebra/out/tensor-product.pdf ./public/linear-algebra/tensor-product.pdf
```

### 固有値とスペクトル分解

```bash
cp ./topic/linear-algebra/out/spectral-decomposition.pdf ./public/linear-algebra/spectral-decomposition.pdf
```

### 特異値と特異値分解

```bash
cp ./topic/linear-algebra/out/singular-value-decomposition.pdf ./public/linear-algebra/singular-value-decomposition.pdf
```

### 行列ノルム

```bash
cp ./topic/linear-algebra/out/distance-and-norm.pdf ./public/linear-algebra/distance-and-norm.pdf
```

### 低ランク近似

```bash
cp ./topic/linear-algebra/out/low-rank-approximation.pdf ./public/linear-algebra/low-rank-approximation.pdf
```

### 一般化逆行列

```bash
cp ./topic/linear-algebra/out/pseudoinverse.pdf ./public/linear-algebra/pseudoinverse.pdf
```

### 最小二乗解と最小ノルム解

```bash
cp ./topic/linear-algebra/out/least-squares-solution.pdf ./public/linear-algebra/least-squares-solution.pdf
```

### 空間の当てはめ

TODO

### 行列の因子分解

TODO

#### 写像と集合

```bash
cp ./topic/linear-algebra/out/mapping.pdf ./public/linear-algebra/mapping.pdf
```

## for Topic Note

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

## for "Imaging Math"

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
