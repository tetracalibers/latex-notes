## PDF to HTML

### alias

```bash
alias pdf2htmlEX='docker run -ti --rm -v "`pwd`":/pdf -w /pdf pdf2htmlex/pdf2htmlex:0.18.8.rc2-master-20200820-alpine-3.12.0-x86_64 --dest-dir ./public --process-outline 0 --zoom 1.5'
```

### for Topic Note

#### topic_linear-algebra

```bash
cp ./out/topic_linear-algebra.pdf ./public/topic_linear-algebra.pdf
```

#### topic_mapping

```bash
cp ./out/topic_mapping.pdf ./public/topic_mapping.pdf
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
