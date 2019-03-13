const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const highlight = require('highlight.js')

module.exports = {
    mode: 'development',
    entry: {
      app: './src/index.jsx'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'public'),
      publicPath:'/'
    },
    devServer: {
      contentBase: ['./public', path.join(__dirname, 'assets')],
      historyApiFallback: true,
      hot: true
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module : {
        rules : [
          {
            test : /\.jsx?/,
            exclude: /node_modules/,
            loader : 'babel-loader',
          },
          {
            test: /\.(png|jpg|gif|woff2)$/,
            loader: 'file-loader'
          },
          {
            test: /\.(css|less)$/,
            use: [ 'style-loader', 'css-loader','less-loader' ]
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
    devtool: 'inline-source-map',
    plugins: [
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        title: 'Lime',
        filename: 'index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  };
