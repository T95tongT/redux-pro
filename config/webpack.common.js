/*
 * @Author: your name
 * @Date: 2020-07-08 17:02:51
 * @LastEditTime: 2020-07-09 10:29:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\config\webpack.common.js
 */
const glob = require("glob");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
    let entries = { entry: './entry/index.js' };
    let htmlConfig = []
    glob.sync("./src/*/index.js").forEach(path => {
        const pathkey = path.split("/src/")[1].split("/")[0];
        entries[pathkey] = path;

        htmlConfig.push(
            new HtmlWebpackPlugin({
                title: pathkey,
                template: './entry/index.html'
            }))
    })

    return {
        entry: entries,
        output: {
            path: path.resolve(__dirname, "./../dist"),
            filename: "[name].[hash].js",
            chunkFilename: "[name]/[name].[hash].js"
        },
        plugins: [
            ...htmlConfig,
            new CleanWebpackPlugin({})
        ],
        module: {
            rules: [

                {
                    test: /\.js[x]?/,
                    exclude: /(node_modules)/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.css/,
                    exclude: /(node_modules)/,
                    use: ["css-loader", "style-loader"]
                }
            ]
        },
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /node_modules/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            }
        }

    }
}