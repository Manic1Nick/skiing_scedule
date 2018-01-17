var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/dist/assets",
		filename: "bundle.js",
		publicPath: "assets"
	},
	devServer: {
		inline: true,
		contentBase: "./dist",
		port: 3001
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: 'babel-loader'
			},
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				use: 'json-loader'
			},
			{
                test: /\.css$/,
                use: [
                	'style-loader',
                	'css-loader',
                ]
            },
            {
                test: /\.scss/,
                use: [
                	'style-loader',
                	'css-loader',
                	'sass-loader'
                ]
            }
		]
    },
    plugins: [
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true
        })
    ]
}