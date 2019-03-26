const path = require('path');
const CleanCSSPlugin = require('less-plugin-clean-css');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const highlight = require('highlight.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const isProduction = process.env.NODE_ENV == 'production'
console.log(`isProduction`, isProduction)

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    app: './src/index.jsx'
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: isProduction ? './' : '/'
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
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader', options: isProduction ?
              {
                sourceMap: false,
                modules: false
              } : {}
          },
          {
            loader: 'less-loader', options: isProduction ?
              {
                plugins: [
                  new CleanCSSPlugin({ advanced: true })
                ]
              } : {}
          }
        ]
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
      new TerserJSPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ] : []
  },
  plugins: [
    new CleanWebpackPlugin(),
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
