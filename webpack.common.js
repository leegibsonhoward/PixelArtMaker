const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), 
    },
    module: {
        rules: [
            { 
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
        ]
    },
};