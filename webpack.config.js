const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, './'),
  entry: {
    app: './public/js/index.js',
    server: './server.js'
  },
  output: {
    path: path.resolve(__dirname, "assets/js"),
    filename: '[name]_bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          'babel-loader',
        ],
      }
    ]
  },

  plugins: [
    new DashboardPlugin()
  ]
};
