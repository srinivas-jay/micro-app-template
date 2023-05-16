const { merge } = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.config');

const customWebpackConfig = async (config, _context) =>
	merge(config, commonWebpackConfig);

module.exports = customWebpackConfig;
