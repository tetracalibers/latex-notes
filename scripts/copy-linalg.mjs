#!/usr/bin/env zx

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

const SRC_DIR = 'topic/linear-algebra/out'
const DST_DIR = 'public/linear-algebra'

// コマンドライン引数の解析
// 例）3 => targets = [CHAPTERS[2]]
// 例）3,7 => targets = [CHAPTERS[2], CHAPTERS[6]]
// 例）3-5 => targets = [CHAPTERS[2], CHAPTERS[3], CHAPTERS[4]]
// 例）2,4-6 => targets = [CHAPTERS[1], CHAPTERS[3], CHAPTERS[4], CHAPTERS[5]]
const parseArgs = (args, chapters) => {
  const targets = new Set()
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
  console.error('Usage: copy-linalg.mjs <chapter-indexes>')
  console.error('Example: copy-linalg.mjs 1,3-5')
  console.error('Available chapters:')
  CHAPTERS.forEach((chapter, index) => {
    console.log(`  ${String(index + 1).padStart(2, ' ')}: ${chapter}`)
  })
  process.exit(1)
}

const targets = parseArgs(args, CHAPTERS)

const sources = targets.map((name) => path.join(SRC_DIR, `${name}.pdf`))
const dists = targets.map((name) => path.join(DST_DIR, `${name}.pdf`))

const zip = (a, b) => a.map((k, i) => [k, b[i]])

for (const [source, dist] of zip(sources, dists)) {
  await fs.copyFile(source, dist)
}
