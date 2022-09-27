const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = () => ({
  mode: isDevelopment ? 'development' : 'production',
  devtool: 'eval',
  devtool: isDevelopment ? 'eval-cheap-module-source-map' : false,
  cache: { type: isDevelopment ? 'memory' : 'filesystem' },
  entry: './src/index.tsx',
  output: {
    filename: 'js/[name]-[hash].js',
    assetModuleFilename: 'images/[hash][ext][query]',
    pathinfo: false,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    clean: true,
  },
  resolve: {
    alias: {
      icons: path.resolve(__dirname, 'public/assets/icons'),
      images: path.resolve(__dirname, 'public/assets/images'),
      types: path.resolve(__dirname, 'src/types'),
      components: path.resolve(__dirname, 'src/components'),
      configs: path.resolve(__dirname, 'src/configs'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      libs: path.resolve(__dirname, 'src/libs'),
      pages: path.resolve(__dirname, 'src/pages'),
      '@recoil': path.resolve(__dirname, 'src/recoil'),
      styles: path.resolve(__dirname, 'src/styles'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
    extensions: ['*', '.js', '.tsx', '.ts'],
    modules: [__dirname, 'src', 'node_modules'],
    fallback: {
      process: require.resolve('process/browser'),
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util'),
      buffer: require.resolve('buffer'),
      assert: require.resolve('assert'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'esnext',
        },
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: '/node_modules',
        use: 'ts-loader',
      },
      {
        test: /restructure(\/|\\)src(\/|\\)[\w]+.js/,
        use: [
          {
            loader: 'imports-loader',
            options: {
              type: 'commonjs',
              imports: 'multiple ../../buffer/ Buffer Buffer',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/assets', to: 'assets' },
      ],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
  optimization: {
    minimize: !isDevelopment,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'esnext',
        css: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
    hints: false,
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    proxy: {
      '/api': {
        target: 'server-api.com',
        changeOrigin: true,
      },
    },
    liveReload: true,
    historyApiFallback: true,
  },
});