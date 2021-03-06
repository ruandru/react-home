/*
 * @Author: Rosen
 * @Date:   2017-11-15 11:33:18
 * @Last Modified by:   Rosen
 * @Last Modified time: 2018-01-23 19:07:25
 */

'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack           = require('webpack'); //to access built-in plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path              = require('path');
// 环境变量, dev, (test), online
var WEBPACK_ENV         = process.env.WEBPACK_ENV || 'dev';

const config = {
    entry: './src/app.jsx',
    output: { 
        path: path.join(__dirname, 'dist'),
        publicPath: WEBPACK_ENV === 'online' ? '//s.happymmall.com/admin-fe-v2/dist/' : '/dist/',
        // publicPath  : '/dist/',
        filename: 'js/app.js'
    },
    externals : {
        'jquery' : 'window.jQuery'
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                use: 'css-loader',
                fallback: 'style-loader'
            })
        }, 
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                use: 'css-loader!sass-loader',
                fallback: 'style-loader'
            })
        }, 
        {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: 'resource/[name].[ext]',
                    limit: 2000
                }
            }]
        }, 
        {
            test: /\.jsx$/,
            use: {
                loader: 'babel-loader',
                options:{
                    presets : ['env', 'react']
                }
            }
        }]
    },
    resolve: {
        alias: {
            // node_modules    : path.join(__dirname, '/node_modules'),
            util            : path.join(__dirname, '/src/util'),
            component       : path.join(__dirname, '/src/component'),
            service         : path.join(__dirname, '/src/service'),
            page            : path.join(__dirname, '/src/pages')
        }
    },
    devServer: {
        port : '8086', //设置端口号
        // 路径的配置
        historyApiFallback: {
            index: '/dist/index.html'
        },
        proxy: {
            '/manage': {
                target: 'http://test.happymmall.com/',
                changeOrigin: true
            },
            '/user/logout.do': {
                target: 'http://test.happymmall.com/',
                changeOrigin: true
            }
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name : 'common',
            filename: 'js/base.js'
        }),
        new HtmlWebpackPlugin({
            template    : './src/index.html',
            filename    : 'index.html',
        }),
        new ExtractTextPlugin("css/[name].css"),
    ]
};

module.exports = config;