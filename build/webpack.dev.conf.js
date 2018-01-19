var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

var plugins = [
    new webpack.DefinePlugin({
        'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin()
]


// https://github.com/ampedandwired/html-webpack-plugin
var entryList = utils.getEntryList().html;
Object.keys(entryList).forEach(function (name, index) {
    plugins.push(new HtmlWebpackPlugin({
        //filename: path.resolve(__dirname, '../dist/' + entryList[name]),
        filename: entryList[name],
        template: path.resolve(__dirname, '../src/page/' + entryList[name]),
        chunks: [name],
        inject: 'body'
    }))
})
module.exports = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: plugins
})
