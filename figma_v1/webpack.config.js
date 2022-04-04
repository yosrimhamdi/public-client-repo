const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

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
    new RemovePlugin({
      after: {
        test: [
          {
            folder: 'dist/',
            method: absoluteItemPath => {
              return new RegExp(/\.js$/, 'm').test(absoluteItemPath);
            },
          },
        ],
      },
    }),
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
