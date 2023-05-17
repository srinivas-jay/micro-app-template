const { merge } = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.config');
const TerserPlugin = require('terser-webpack-plugin');

const SystemJSPublicPathPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin');

const singleSpaWebpackConfig = {
	mode: 'production',
	output: {
		uniqueName: 'app', // TODO: change my name to micro app name
		devtoolNamespace: 'app', // TODO: change my name to micro app name
		library: {
			type: 'system',
			name: 'app' // TODO: change my name to micro app name
		}
	},
	externals: ['react', 'react-dom', 'react-router-dom', 'single-spa']
};

const finalWebpackConfig = async (nxWebpackConfigs, _context) => {
	const mergeConfig = merge(nxWebpackConfigs, commonWebpackConfig);
	mergeConfig.mode = 'production';
	mergeConfig.devtool = 'source-map';
	mergeConfig.output = {
		...singleSpaWebpackConfig.output,
		path: nxWebpackConfigs.output.path
	};
	mergeConfig.externals = singleSpaWebpackConfig.externals;
	mergeConfig.plugins.push(
		new SystemJSPublicPathPlugin({
			systemjsModuleName: 'chatbot'
		})
	);
	mergeConfig.optimization.minimize = true;
	mergeConfig.optimization.minimizer = [
		new TerserPlugin({
			test: /\.js(\?.*)?$/i
		})
	];
	return mergeConfig;
};

module.exports = finalWebpackConfig;
