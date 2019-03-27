const path = require('path');
const common = require('./webpack.common');
const CleanCSSPlugin = require('less-plugin-clean-css');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge')

module.exports = merge(common, {
    mode: 'development',
    output: {
        publicPath: '/'
    },
    devServer: {
        contentBase: ['./public', path.join(__dirname, 'assets')],
        historyApiFallback: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
