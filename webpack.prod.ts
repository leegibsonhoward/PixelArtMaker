import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';

const config: webpack.Configuration = merge(common, {
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ["autoprefixer", "rucksack-css"],
                            }
                        }
                    },
                    'sass-loader',
                ]
            },
        ]
    },
    optimization: {
        minimizer: [
          new OptimizeCSSAssetsPlugin({
            // cssnano configuration
            cssProcessorPluginOptions: {
              preset: ['default', {
                discardComments: {
                  removeAll: true
                }
              }],
            },
          })
        ]
      }
});

export default config;