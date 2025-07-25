## PDF to HTML

### alias

```bash
alias pdf2htmlEX='docker run -ti --rm -v "`pwd`":/pdf -w /pdf pdf2htmlex/pdf2htmlex:0.18.8.rc2-master-20200820-alpine-3.12.0-x86_64 --dest-dir ./public --process-outline 0 --zoom 1.5'
```

### for Topic Note

#### 線形代数の整理帳

```bash
cp ./out/topic_linear-algebra.pdf ./public/topic_linear-algebra.pdf
```

#### 微分積分の整理帳

```bash
cp ./out/topic_calculus.pdf ./public/topic_calculus.pdf
```

#### 統計学の整理帳

```bash
cp ./out/topic_statistics.pdf ./public/topic_statistics.pdf
```

#### 確率統計の整理帳

```bash
cp ./out/topic_probability-statistics.pdf ./public/topic_probability-statistics.pdf
```

#### 写像の整理帳

```bash
cp ./out/topic_mapping.pdf ./public/topic_mapping.pdf
```

#### 機械学習の整理帳

```bash
cp ./out/topic_machine-learning.pdf ./public/topic_machine-learning.pdf
```

#### 深層学習の整理帳

```bash
cp ./out/topic_deep-learning.pdf ./public/topic_deep-learning.pdf
```

### for "Imaging Math"

#### (master)

```bash
cp ./out/imaging-math.pdf ./public/imaging-math.pdf
```

#### 数列

```bash
pdf2htmlEX ./math/basic/out/sequence.pdf
```

#### 場合の数

```bash
pdf2htmlEX ./math/basic/out/combination.pdf
```

#### 絶対値

```bash
pdf2htmlEX ./math/basic/out/absolute_value.pdf
```

#### 三角関数

```bash
pdf2htmlEX ./math/basic/out/trigonometry.pdf
```

#### 指数関数と対数関数

```bash
pdf2htmlEX ./math/out/exp_log.pdf
```

#### 微分と積分

```bash
pdf2htmlEX ./math/out/calculus.pdf
```

#### 論理と集合

```bash
pdf2htmlEX ./math/out/set_logic.pdf
```

#### 線形代数

```bash
pdf2htmlEX ./math/out/linear_algebra.pdf
```

#### 複素数と複素関数

```bash
pdf2htmlEX ./math/out/complex.pdf
```

#### フーリエ解析

```bash
pdf2htmlEX ./math/out/fourier.pdf
```

#### ε-δ論法

```bash
pdf2htmlEX ./math/out/epsilon_delta.pdf
```

#### 実数の連続性

```bash
pdf2htmlEX ./math/out/continuity_of_real.pdf
```
