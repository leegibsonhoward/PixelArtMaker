const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
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