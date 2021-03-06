// 文件解析
const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {
	VueLoaderPlugin
} = require('vue-loader');

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader'
			}, {
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					sourceMap: false,
				},
				exclude: /node_modules/,
				include: [path.resolve(__dirname, "./src"), path.resolve(__dirname, "./examples")],
			}, {
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}, {
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"]
			}, {
				test: /\.(gif|jpg|png)\??.*$/,
				loader: 'url-loader',
				options: {
					esModule: false,
					limit: 8192,
					name: 'images/[name].[ext]'
				}
			}, {
				test: /\.(woff|svg|eot|ttf)\??.*$/,
				loader: 'url-loader',
				options: {
					esModule: false,
					limit: 1,
					name: path.posix.join('styles', 'fonts/[name].[ext]')
				}
			},
			{
				test: /\.(html|tpl)$/,
				loader: 'html-loader'
			},
			{
				test: /\.md$/,
				use: ['vue-loader', {
					loader: path.resolve(__dirname, "../examples/star-markdown-loader/index.js"),
					options: {
						wrapper: 'div',
						raw: true
					}
				}],
			}
		]
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'vue': 'vue/dist/vue.esm.js',
			'@': resolve('src')
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.DefinePlugin({
			'process.env.VERSION': `'${pkg.version}'`
		}),
		new ExtractTextPlugin({
			filename: 'styles/main.css'
		}),
		// new OptimizeCSSPlugin()
	]
}