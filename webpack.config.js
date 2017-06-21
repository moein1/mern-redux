const {
  resolve
} = require('path');
const router = require('./src/router');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'src/client'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/,
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      },
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: resolve(__dirname, 'src/client/stylesheets')
      },
      {
        test:/\.(png|jpg)$/,
        loader:'url-loader',
        include:resolve(__dirname,'src/client/img')
      }
    ],
  },
  performance: {
    hints: process.env.NODE_ENV === 'production',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
  //,watch:true
};