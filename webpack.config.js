const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: '/src/sass/pages/home.sass',
    homejs: '/src/js/index.js',
    dashboard: '/src/sass/pages/dashboard.sass',
    dashboardjs: '/src/js/dashboard.js',
    'privacy-policy': '/src/sass/pages/privacy-policy.sass',
    'privacy-policy-js': '/src/js/privacy-policy.js',
    email: '/src/sass/pages/email.sass',
  },
  output: {
    path: __dirname + '/dist/',
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new CleanWebpackPlugin(),
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
