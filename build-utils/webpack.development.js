// webpack.development.config.js
module.exports = () => ({
  output: {
    filename: "[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
});
