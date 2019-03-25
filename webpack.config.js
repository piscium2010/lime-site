const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const highlight = require('highlight.js')
const isProduction = process.env.PRODUCTION
// console.log(`isProduction`,isProduction)

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    app: './src/index.jsx'
  },
  output: {
    filename: '[name].bundle.js',
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
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(md)$/,
        use: [
          'html-loader',
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
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      title: 'Lime',
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
