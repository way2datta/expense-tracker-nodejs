const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/frontend/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/preset-react'],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/frontend/index.html',
            filename: './index.html'
        })
    ]
};
