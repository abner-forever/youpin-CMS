const PATH = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        main: ['./src/js/app'],
        admin:['./src/js/admin']
    },
    output: {
        filename: '[name].js',
        //路径
        path: PATH.resolve(__dirname, '../dev')
    },
    devServer: {
        contentBase: [PATH.join(__dirname, '../dev')],
        open: true,
        compress: true,
        port: 9000,
        proxy: { // 代理api请求到 api server
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks : ['main']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/admin.html',
            filename: 'pages/admin.html',
            chunks:['admin']
        }),
        //复制static里面的文件到dev的static
        new CopyWebpackPlugin([{
            from: PATH.resolve(__dirname, '../static'),
            to: PATH.resolve(__dirname, '../dev/static')
        }])
    ],
    module: {
        rules: [{
                test: /\.(css|scss)$/,
                use: [ //loader从后面向前使用
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
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
                            limit: 819
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