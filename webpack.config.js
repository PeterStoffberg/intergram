let path = require('path');
let webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    widget: [path.join(__dirname, 'src', 'widget', 'widget-index.js')],
    chat: [path.join(__dirname, 'src', 'chat', 'chat-index.js')],
  },
  output: {
    path: path.join(__dirname, 'dist', 'js'),
    filename: '[name].js',
    publicPath: '/js/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(__dirname, 'css'),
      },
    ],
  },
};
