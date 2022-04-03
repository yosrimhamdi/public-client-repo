const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    '/assets/sass/pages/index.sass',
    '/assets/sass/pages/dashboard.sass',
    '/assets/sass/pages/email.sass',
  ],
  output: {
    path: __dirname + '/assets/css',
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
    port: 3000,
    open: 'chrome',
    // writeToDisk: true,
  },
};
