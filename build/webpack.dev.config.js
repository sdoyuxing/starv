/**
 * 本地预览
 */

const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');


module.exports = merge(webpackBaseConfig, {
    devtool: 'eval-source-map',

    // 入口
    entry: {
        main: './examples/main'
    },
    // 输出
    output: {
        path: path.join(__dirname, '../examples/dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        alias: {
            iview: '../../src/index',
            vue: 'vue/dist/vue.esm.js'
        }
    },
    optimization: {
        splitChunks: {
            name: 'vendors',
            filename: 'vendor.bundle.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../examples/dist/index.html'),
            template: path.join(__dirname, '../examples/index.html')
        }),
        new FriendlyErrorsPlugin(),
        new CopyWebpackPlugin([
            {
              from: path.resolve(__dirname, '../examples/images'),
              to: 'images',
              ignore: ['.*']
            }
          ])
    ]
});