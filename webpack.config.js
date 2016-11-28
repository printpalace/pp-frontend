var path = require('path')
var webpack = require('webpack')
var NpmInstallPlugin = require('npm-install-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'inline-source-map',
  // resolve: {
  //   alias: {
  //     'core': path.resolve('./app/modules/core')
  //   }
  // },
   entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  
  module: {
   loaders: [
      {
        test: /\.(jsx|js)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
       {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=1000000'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: 'file-loader'
      }
    ]
  },
   plugins: [
    new ExtractTextPlugin('static/style.css', {
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
 
}
