const path = require('path');

module.exports = {
	mode: 'production',
	entry: './index.js',
	output: {
		libraryTarget: 'umd',
		library: 'reactjs-context',
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		globalObject: 'this'
	},
	externals: {
		react: 'umd react',
		'react-dom': 'umd react-dom'
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['@babel/react']
				}
			}
		]
	}
};
