var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var extractHTML = new ExtractTextPlugin('[name].html');
var extractSCSS = new ExtractTextPlugin('[name].css');

module.exports = {
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
  },
  entry: {
    script: './scripts/index.jsx',
    index: './index.html',
    style: './styles/index.scss'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [path.resolve(__dirname, 'scripts'), path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: extractHTML.extract(['html-loader'])
      },
      {
        test: /\.jsx$/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: extractSCSS.extract([
          'css-loader',
          'sass-loader',
        ])
      },
      {
        test: /\.(eot|woff2|woff|ttf|svg)$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader'
      },
    ],
  },
  plugins: [
    extractHTML,
    extractSCSS,
    new webpack.DefinePlugin({
      config: JSON.stringify(require('config')),
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
  ]
};
