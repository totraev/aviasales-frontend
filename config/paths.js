const path = require('path')

module.exports = {
  appPath: path.resolve('.'),
  appBuild: path.resolve('build'),
  appPublic: path.resolve('public'),
  appSrc: path.resolve('src'),
  appHtml: path.resolve('public/index.html'),
  appIndexJs: path.resolve('src/index.tsx'),
  appPackageJson: path.resolve('package.json'),
  appTsConfig: path.resolve('tsconfig.json'),
  yarnLockFile: path.resolve('yarn.lock'),
  appNodeModules: path.resolve('node_modules'),
  publicUrl: '/',
  servedPath: '/',
};