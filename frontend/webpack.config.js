const { merge } = require('webpack-merge');
// const { withModuleFederation } = require('@nx/react/module-federation');
const commonWebpackConfig = require('./webpack.common.config');

const config = async (nxWebpackConfigs, _context) =>
	// const federatedModules = await withModuleFederation({
	// 	name: '@inscriptors/micro-app-name',
	// 	library: { type: 'var', name: 'chat' },
	// 	exposes: {
	// 		'.': `./app/src/index.jsx`
	// 	},
	// 	shared: false
	// });
	// return merge(
	// 	federatedModules(nxWebpackConfigs, _context),
	// 	commonWebpackConfig
	// );
	merge(nxWebpackConfigs, commonWebpackConfig);
module.exports = config;
