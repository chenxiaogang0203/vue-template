var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var isProduction = process.env.NODE_ENV === 'production'
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

var imageLoader = {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    use: [{
        loader: 'url-loader',
        options: {
            limit: 10000,
            name: utils.assetsPath('img/[path]/[name].[ext]?[hash:5]')
        }
    }]
}
//图片压缩
var imageMinLoader = {
    loader: 'image-webpack-loader',
    query: {
        optipng: {
            optimizationLevel: 7,
        },
        pngquant: {
            quality: '65-90',
            speed: 4,
        },
        gifsicle: {
            optimizationLevel: 3,
        },
        svgo: {
            plugins: [{
                removeViewBox: false,
                removeEmptyAttrs: true,
            }],
        },
        mozjpeg: {
            quality: 65,
            progressive: true
        }
    }
}

if (isProduction) {
    imageLoader.use.push(imageMinLoader)
}


module.exports = {
    entry: utils.getEntryList().js,
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            //{
            //  test: /\.(js|vue)$/,
            //  loader: 'eslint-loader',
            //  enforce: 'pre',
            //  include: [resolve('src'), resolve('test')],
            //  options: {
            //    formatter: require('eslint-friendly-formatter')
            //  }
            //},
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            imageLoader,
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[ext]?[hash:7]')
                }
            }
        ]
    }
}
