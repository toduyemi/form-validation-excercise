const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        static: './src',
        hot: true,
        liveReload: false,

    },
})