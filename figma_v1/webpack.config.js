const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: '/src/sass/pages/index.sass',
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
