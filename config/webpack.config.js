const webpack = require('webpack');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const ManifestPlugin = require('webpack-manifest-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const FaviconPlugin = require('favicons-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');
const paths = require('./paths');


module.exports = function(webpackEnv) {
  const isDevelopment = webpackEnv === 'development';
  const isProduction = webpackEnv === 'production';

  const createStyleLoaders = (options) => {
    return [
      isProduction ? MiniCssExtractPlugin.loader : require.resolve('style-loader'),
      require.resolve('css-modules-typescript-loader'),
      {
        loader: require.resolve('css-loader'),
        options
      },
      require.resolve('postcss-loader')
    ];
  }

  return {
    entry: [
      isDevelopment && require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appIndexJs
    ].filter(Boolean),

    target: 'web',
    mode: isDevelopment
      ? 'development'
      : isProduction && 'production',
    devtool: isDevelopment
      ? 'eval-source-map'
      : isProduction && 'source-map',

    output: {
      path: paths.appBuild,
      publicPath: '/',
      filename: 'bundle.[hash].js'
    },

    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      modules: ['node_modules', paths.appPath],
      plugins: [
        new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
        PnpWebpackPlugin,
      ]
    },

    resolveLoader: {
      plugins: [PnpWebpackPlugin.moduleLoader(module)]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: paths.appHtml,
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: isProduction,
          useShortDoctype: isProduction,
          removeEmptyAttributes: isProduction,
          removeStyleLinkTypeAttributes: isProduction,
          keepClosingSlash: isProduction,
          minifyJS: isProduction,
          minifyCSS: isProduction,
          minifyURLs: isProduction
        }
      }),
      // new FaviconPlugin(path.resolve(paths.appSrc, 'assets/images/favicon.png')),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      new ManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath: paths.appPublic,
      }),
      new ModuleNotFoundPlugin(paths.appPath),
      isDevelopment && new webpack.HotModuleReplacementPlugin(),
      isDevelopment && new webpack.NamedModulesPlugin(),
      isDevelopment && new webpack.NoEmitOnErrorsPlugin(),
      isDevelopment && new ForkTsCheckerWebpackPlugin({
        tslint: true,
        async: false,
        checkSyntacticErrors: true,
        tsconfig: paths.appTsConfig,
        watch: paths.appSrc,
        silent: true,
        formatter: typescriptFormatter
      }),
      isDevelopment && new CaseSensitivePathsPlugin(),
      isDevelopment && new WatchMissingNodeModulesPlugin(paths.appNodeModules),
      isProduction && new CompressionPlugin({ minRatio: Number.MAX_SAFE_INTEGER }),
      isProduction && new webpack.optimize.OccurrenceOrderPlugin(),
      isProduction && new MiniCssExtractPlugin({
        filename: "[name].[chunkhash].css",
        chunkFilename: "[name].[chunkhash].css"
      }),
      process.env.BUNDLE_ANALYZER === 'true' && new BundleAnalyzerPlugin()
    ].filter(Boolean),

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: require.resolve('babel-loader')
        },
        {
          test: /\.css$/,
          exclude: /\.module\.css$/,
          use: createStyleLoaders({
            importLoaders: 1,
            sourceMap: true
          })
        },
        {
          test: /\.module\.css$/,
          use: createStyleLoaders({
            modules: true,
            importLoaders: 1,
            sourceMap: true,
            getLocalIdent: getCSSModuleLocalIdent
          })
        },
        {
          test:   /\.(ttf|otf|eot|svg|woff2?)(\?.+)?$/,
          loader: 'url-loader',
          options:  { limit: 10000 }
        },
        {
          test: /\.(jpe?g|png|gif|ico)$/,
          loader: 'file-loader',
          options: { name: '[name].[ext]' }
        }
      ]
    },

    optimization: {
      runtimeChunk: false,
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        }
      },
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
          cache: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            parser: safePostCssParser,
            map: {
              inline: false,
              annotation: true,
            },
          },
        }),
      ]
    },

    node: {
      module: 'empty',
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    },

    performance: false,
  };
};
