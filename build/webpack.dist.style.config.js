const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    entry: {
        main: './src/styles/index.js', //入口
    },
    output: {
        filename: 'test/styleTest.js', //输出的文件名
        path: path.resolve(__dirname, '../dist'),//输出文件所在的目录
        publicPath:'/'
    },
    module: { // 如何处理项目中不同类型的模块
        rules: [ // 用于规定在不同模块被创建时如何处理模块的规则数组
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    sourceMap: true,
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true
                        }
                    }]
                })
            }, {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                options: {
                    esModule: false,
                    limit:1,
                    name:'styles/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/star.css',
            allChunks: true
        }),
        new OptimizeCSSPlugin()
    ]
}