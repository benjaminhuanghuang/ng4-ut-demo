const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        main: './src/main.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
                test: /\.component.ts$/,
                loader: 'awesome-typescript-loader!angular2-template-loader'
            }, {
                test: /\.ts$/,
                exclude: /\.component.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }, {
                test: /\.css$/,
                loader: 'raw-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.html', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify('production')
            }
        })
    ]
};