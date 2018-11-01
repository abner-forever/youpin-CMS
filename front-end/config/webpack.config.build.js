const PATH = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

//压缩提取css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        app: ['./src/js/app'],
        admin:['./src/js/admin']
    },
    output: {
        filename: './js/[name].js',
        //路径
        path: PATH.resolve(__dirname, '../dist')

    },
    optimization:{
        minimizer:[
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [  //插件 制定某些特定的功能
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks : ['app']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/admin.html',
            filename: 'pages/admin.html',
            chunks:['admin']
        }),
        //复制static里面的文件到dev的static
        new CopyWebpackPlugin([{
            from: PATH.resolve(__dirname, '../static'),
            to: PATH.resolve(__dirname, '../dist/static')
        }]),
        new MiniCssExtractPlugin({
            filename : 'css/[name]-[hash:6].css'
        })

    ],
    module: {
        rules: [{
                test: /\.(css|scss)$/,
                use: [ //loader从后面向前使用
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [ //loader从后面向前使用
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [ // loader从后向前使用
                    {
                        loader: 'string-loader'
                    }
                ]
            },
            //es6编译成es5
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}