module.exports = {
	entry: [
		'./src/client/main.js'
	],
	mode: "development",
	module: {
		rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: [/node_modules/],
			use: {
				loader: 'babel-loader',
				options: {
					plugins: [["@babel/plugin-proposal-decorators", { "legacy": true }], 'transform-class-properties']
				}
			}
		},
		{
			test:/\.(s*)css$/,
			use:['style-loader','css-loader', 'sass-loader']
		}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist'
	}
}  