var path = require('path');

module.exports = {
  context: path.join(__dirname, 'public/js')
  entry: [
    './index.js',
  ],
  output: {
    path: 'assets/js',
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
