const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const RemoveEmptyScripts = require('webpack-remove-empty-scripts');

module.exports = {
  entry: {
    index: ['/src/sass/pages/index.sass', '/src/js/index.js'],
    dashboard: '/src/sass/pages/dashboard.sass',
    'privacy-policy': '/src/sass/pages/privacy-policy.sass',
    email: '/src/sass/pages/email.sass',
    charts: '/src/js/charts.js',
  },
  output: {
    path: __dirname + '/dist/',
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new RemoveEmptyScripts(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    hot: false,
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
