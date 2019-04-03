const CleanCSSPlugin = require('less-plugin-clean-css');
const merge = require('webpack-merge');
const common = require('./webpack.common')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: '/',
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, '../server/src/main/resources/static')
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: false, modules: false }
                    },
                    {
                        loader: 'less-loader',
                        options: { plugins: [new CleanCSSPlugin({ advanced: true })] }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        })
    ]
});
