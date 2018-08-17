const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const __DEV__ = process.env.NODE_ENV === 'development'

module.exports = {
  entry: {
    ReactSwitch: __DEV__ ? './example/index.tsx' : './src/index.tsx'
  },
  output: {
    filename: __DEV__ ? '[name].js' : '[name].min.js',
    path: __DEV__ ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'lib')
  },
  devtool: __DEV__ ? 'source-map' : 'cheap-module-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: __DEV__ ? [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './example/index.html')
  })] : []
}
