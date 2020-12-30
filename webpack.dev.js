const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    // .browerslistrc not allowing HMR, use target 'web'
    // https://github.com/webpack/webpack-dev-server/issues/2812
    target: 'web',
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
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
            {
                test: /\.scss$/i,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader", options: { sourceMap: true } },
                    { loader: "postcss-loader", options: { sourceMap: true } },
                    { loader: "sass-loader", options: { sourceMap: true } },
                ]
            },
        ]
    },
}