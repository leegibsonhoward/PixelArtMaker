const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        })
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
            }
        ]
    },
}