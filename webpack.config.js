var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: {
		app: ['babel-polyfill', path.join(__dirname, 'app', 'main.js')],
		vendor: ['react', 'react-dom']
	},
	output: {
		path: path.join(__dirname, 'www'),
		filename: 'main.js',
		publicPath: path.join(__dirname, 'dist', 'static', '/')
		//publicPath: path.join('')
	},
	resolve: {
		extensions: [
			'',
			'.js',
			'.json',
			'.css'
			//'jsonp'
		]
	},
	module: {
		loaders: [
			{
				test: /\.(css|scss|sass)$/,
				loader: ExtractTextPlugin.extract('css!sass')
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				plugins: ['transform-runtime'],
				query: {
					presets: ['es2015', 'stage-0', 'react']
				}
			},
			{
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
				loader: 'url-loader'
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				loader: 'url?limit=10000!img?progressive=true'
			}
		]
	},
	plugins: [
		// Avoid publishing files when compilation fails
		//new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('./style/style.css', {
			allChunks: true
		}),
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
	],
	stats: {
		colors: true
	}
};
