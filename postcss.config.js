module.exports = {
  plugins: {
    'stylelint': {},
    'postcss-import': { path: ['src/assets/css'] },
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
    },
    'postcss-reporter': { clearAllMessages: true },
  }
}
