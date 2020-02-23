const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',
  node: {
    fs: 'empty'
  },
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['*', '.js'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'index.html',
      template: './index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  devServer: {
    hot: true,
    inline: true
  },
  devtool: 'source-map'
}
