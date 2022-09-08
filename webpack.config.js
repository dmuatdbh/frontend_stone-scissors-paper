const path = require("path");

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  context: __dirname, // to automatically find tsconfig.json

  // Output
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[fullhash:8].js',
    sourceMapFilename: '[name].[fullhash:8].map',
    chunkFilename: '[id].[fullhash:8].js',
    publicPath: '/',
    pathinfo: false
  },

  mode: 'development',

  target: 'web',

  devServer: {
    static: path.join(__dirname, '/build'),
    open: true,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
};
