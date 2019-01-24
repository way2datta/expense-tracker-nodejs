const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/frontend/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/preset-react'],
                },
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/frontend/index.html',
            filename: './index.html'
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};
