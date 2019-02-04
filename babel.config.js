module.exports = api => {
  isTest = api.env('test')
  isDevelopment = api.env('development')
  isProduction = api.env('production')

  return {
    presets: [
      isTest && ['@babel/preset-env', {
        targets: {
          node: 'current',
        },
      }],
      (isDevelopment || isProduction) && ['@babel/preset-env', {
        modules: false,
        useBuiltIns: 'usage',
      }],
      '@babel/preset-react',
      '@babel/preset-typescript'
    ].filter(Boolean),
    plugins: [
      !isTest && 'react-hot-loader/babel',
      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-dynamic-import',
      ['@babel/plugin-proposal-decorators', { 'legacy': true }],
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread'
    ].filter(Boolean)
  }
}
