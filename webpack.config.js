const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
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
  ]
};
