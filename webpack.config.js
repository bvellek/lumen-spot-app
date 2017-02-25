const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: {
    bundle: './public/js/index.js',
  },
  output: {
    path: path.join(__dirname, 'assets/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    new DashboardPlugin()
  ]
};
