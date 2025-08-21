#!/usr/bin/env zx

$.verbose = true // 実行ログを見たいときは true、静かにしたいときは false

const CHAPTERS = [
  'vector',
  'linear-map',
  'diagonal-matrix',
  'linear-equation',
  'kernel-and-image',
  'invertible-transform-inverse-matrix',
  'elementary-matrix',
  'linear-equation-and-rank',
  'column-independence',
  'subspace-basis-and-dim',
  'linear-map-rank',
  'linear-isomorphism',
  'rep-matrix-basis-change',
  'metric-space',
  'gram-schmidt',
  'determinant',
  'cross-product',
  'invariant-subspace-direct-sum',
  'diagonalization',
  'diagonalization-over-complex',
  'mapping-on-metric-space',
  'triangularization',
  'projection-matrix',
  'affine-space',
  'abstract-linear-space',
  'generalized-eigenspace',
  'row-vector-space',
  'subspace-duality',
  'bilinear-form',
  'quadratic-form',
  'spectral-decomposition',
  'singular-value-decomposition',
  'distance-and-norm',
  'low-rank-approximation',
  'pseudoinverse',
  'least-squares-solution',
  'fitting-space',
  'factorization',
  'tensor-product',
  'mapping',
]

// ===== オプション =====
const BASE = argv.base ?? '.' // .tex の配置ディレクトリ（例: 'chapters'）
const OUTDIR = argv.outdir ?? 'out'
const CLEAN = Boolean(argv.clean) // --clean で中間ファイル掃除
const FAILFAST = argv.failfast !== 'false' // 既定: 失敗したら中断。継続なら --failfast=false

// コマンドライン引数の解析
// 例）3 => targets = [CHAPTERS[2]]
// 例）3,7 => targets = [CHAPTERS[2], CHAPTERS[6]]
// 例）3-5 => targets = [CHAPTERS[2], CHAPTERS[3], CHAPTERS[4]]
// 例）2,4-6 => targets = [CHAPTERS[1], CHAPTERS[3], CHAPTERS[4], CHAPTERS[5]]
const parseArgs = (args, chapters) => {
  const targets = new Set()
  console.log(String(args).split(','))
  for (const arg of String(args).split(',')) {
    if (arg.includes('-')) {
      const [start, end] = arg.split('-').map(Number)
      for (let i = start; i <= end; i++) {
        targets.add(chapters[i - 1])
      }
    } else {
      targets.add(chapters[Number(arg) - 1])
    }
  }
  return Array.from(targets)
}

const args = argv.targets
if (!args) {
  console.log(`Usage:
  zx scripts/build-linalg.mjs --targets "2,4-6" [--base DIR] [--outdir DIR] [--clean] [--failfast=false]
  zx scripts/build-linalg.mjs "3-5"            # 位置引数でもOK
  zx scripts/build-linalg.mjs --all
  zx scripts/build-linalg.mjs --ls
`)
  process.exit(2)
}

const targets = parseArgs(args, CHAPTERS)

const buildOne = async (name) => {
  const docNoExt = path.join(BASE, name)
  const texPath = `${docNoExt}.tex`

  if (!(await fs.pathExists(texPath))) {
    throw new Error(`not found: ${texPath}`)
  }

  //await fs.ensureDir(OUTDIR)
  await $`latexmk -outdir=${OUTDIR} ${texPath}`

  if (CLEAN) {
    await $`latexmk -c -outdir=${OUTDIR} ${texPath}`
  }
}

// ヘルプ：一覧
if (argv.ls) {
  CHAPTERS.forEach((n, i) => console.log(`${i + 1}: ${n}`))
  process.exit(0)
}

// ビルド実行（順番通り）
let failed = []
let succeeded = []
for (const name of targets) {
  try {
    await buildOne(name)
    succeeded.push(name)
  } catch (err) {
    console.error(`❌ Failed: ${name}: ${err.message}`)
    failed.push(name)
    if (FAILFAST) process.exit(1)
  }
}

for (const name of succeeded) {
  echo(`✅ Built: ${path.join(OUTDIR, `${name}.pdf`)}`)
}

if (failed.length) {
  console.error(`Done with failures (${failed.length}): ${failed.join(', ')}`)
  process.exit(1)
}
