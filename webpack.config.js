const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: ['/src/sass/index.sass', '/src/js/index.js'],
    dashboard: ['/src/sass/dashboard.sass', '/src/js/dashboard.js'],
    'privacy-policy': [
      '/src/sass/privacy-policy.sass',
      '/src/js/privacy-policy.js',
    ],
    email: '/src/sass/email.sass',
    'toggle-password': '/src/js/components/toggle-password.js',
    'plan-and-pricing': [
      '/src/sass/plan-and-pricing.sass',
      '/src/js/plan-and-pricing.js',
    ],
    'personal-data': [
      '/src/sass/personal-data.sass',
      '/src/js/personal-data.js',
    ],
    'notifications': [
      '/src/sass/notifications.sass',
      '/src/js/notifications.js',
    ],
    'payment-method': [
      '/src/sass/payment-method.sass',
      '/src/js/payment-method.js',
    ],
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
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
  },
};
