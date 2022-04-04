const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: '/src/sass/pages/index.sass',
    dashboard: '/src/sass/pages/dashboard.sass',
    email: '/src/sass/pages/email.sass',
  },
  output: {
    path: __dirname + '/dist/',
  },
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CleanWebpackPlugin(),
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
    static: { directory: path.join(__dirname, './') },
    devMiddleware: { writeToDisk: true },
  },
};
