module.exports = {
  plugins: {
    'stylelint': {},
    'postcss-import': { path: ['src'] },
    'autoprefixer': {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': { stage: 0 },
    'postcss-use': {
      modules: [
        'postcss-normalize',
        'postcss-autoreset',
        'postcss-utilities',
        'postcss-inline-svg'
      ]
    }
  }
}
