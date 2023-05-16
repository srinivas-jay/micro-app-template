const commonWebpackConfig = {
	resolve: {
		extensions: ['.mjs', '.js', '.jsx', '.wasm', '.json', '.ts', '.tsx']
	},
	module: {
		rules: [
			{
				//babel loader
				test: /\.(js|jsx|ts|tsx)$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				// css files
				test: /\.css$/i,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader']
			},
			{
				//fonts
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				type: 'asset/resource'
			},
			{
				//images
				test: /\.(bmp|png|svg|jpg|jpeg|gif|webp)$/i,
				exclude: /node_modules/,
				type: 'asset/resource'
			},
			{
				//static file
				test: /\.html$/i,
				exclude: [/node_modules/, /\.vue\.html$/],
				type: 'asset/source'
			}
		]
	}
};

module.exports = commonWebpackConfig;
