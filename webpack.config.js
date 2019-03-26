const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const highlight = require('highlight.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const isProduction = process.env.PRODUCTION

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    app: './src/index.jsx'
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devServer: {
    contentBase: ['./public', path.join(__dirname, 'assets')],
    historyApiFallback: true,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'ttf-loader',
            options: {
              name: './font/[hash].[ext]',
            },
          },
        ]
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif|woff2|woff|eot|svg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(css|less)$/,
        use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(md)$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: isProduction ? true : false
            }
          },
          {
            loader: 'markdown-loader',
            options: {
              highlight: (code, lang) => {
                const html = highlight.highlight('js', code).value;
                return `<span class="hljs">${html}</span>`;
              }
            },
          },
        ],
      },
    ]
  },
  devtool: isProduction ? 'false' : 'inline-source-map',
  optimization: {
    minimizer: isProduction ? [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ] : []
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Lime',
      filename: 'index.html',
      template: './src/index.html'
    })
  ].concat(isProduction ? [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: isProduction ? '[name].[hash].css' : '[name].css',
      chunkFilename: isProduction ? '[id].[hash].css' : '[id].css',
    })
  ] : [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ])
};
