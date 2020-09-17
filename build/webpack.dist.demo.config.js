const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    devtool: 'source-map',
    // 入口
    entry: {
        main: './examples/main'
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: "all",
    //         minSize: 10000,
    //         minChunks: 1,
    //         maxAsyncRequests: 5,
    //         maxInitialRequests: 3,
    //         name: true,
    //         cacheGroups: {
    //             vendors: {
    //                 name: 'vendor',
    //                 test: /[\\/]node_modules[\\/]|.less|.css/,
    //                 priority: -10
    //             }
    //         }
    //     }
    // },
    // 输出
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        // @todo
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new UglifyJsPlugin({
            parallel: true,
            sourceMap: false
        }),
        // new CompressionPlugin(),
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, '../dist/index.html'),
            template: path.join(__dirname, '../examples/index.html'),
            chunks: ['vendor', 'main'],
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../examples/images'),
            to: 'images',
            ignore: ['.*']
        }])
    ]
});