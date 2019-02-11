const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
	mode: 'development',
	watch: true,
	entry: './src/js/index.js',
	output: {
		// publicPath: path.resolve(__dirname, 'dist/js/'),
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: "source-map",
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},plugins: [
		new ExtractTextPlugin('css/style.css')
	]
};