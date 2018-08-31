const path = require("path")
module.exports = {
  entry: path.resolve("./src/main"),
  output: {
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [{
      test: /.js$/,
      loader: 'babel-loader'
    },
  ],
  rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]

  }
}
