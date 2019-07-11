/* eslint-env node */
// webpack.config.js

var config = {
	entry: __dirname + '/src/index.js',
	devtool: 'source-map',
	output: {
		path: __dirname + '/dist',
		filename: 'index.js',
		library: 'is-integeric',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		rules: [
			{
				test: [ /\.js?$/ ],
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [ 'env' ],
				},
			},
		],
	},
	resolve: {
		extensions: [ '.js' ]
	}
};

module.exports = config;
