import webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';

const config: webpack.Configuration = merge(common, {
    // .browerslistrc not allowing HMR, use target 'web'
    // https://github.com/webpack/webpack-dev-server/issues/2812
    target: 'web',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            postcssOptions: {
                                plugins: ['autoprefixer', 'rucksack-css'],
                            },
                        },
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
        ],
    },
});

export default config;
