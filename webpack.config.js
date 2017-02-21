const path = require('path');

module.exports = {
  context: path.join(__dirname, 'public/js'),
  entry: [
    './index.js',
  ],
  output: {
    path: path.resolve(__dirname, "assets/js"),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      }
    ]
  }
};
