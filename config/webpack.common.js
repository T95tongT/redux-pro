/*
 * @Author: your name
 * @Date: 2020-07-08 17:02:51
 * @LastEditTime: 2020-07-14 10:37:43
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
 // let entries = ['./entry/index.js' ];
    let htmlConfig = []
    glob.sync("./src/*/index.js").forEach(path => {
     const pathkey = path.split("/src/")[1].split("/")[0];
        entries[pathkey] = path;
      //entries.push(path)
        htmlConfig.push(
            new HtmlWebpackPlugin({
                title: "[name]",
                template: './entry/index.html'
            }))
    })
console.table(entries)
    return {
        entry: entries,
        output: {
            path: path.resolve(__dirname, "./../dist"),
            filename: "js/[name].[hash].js",//为啥在此项目中， filename控制的是非入口文件
            chunkFilename: "[name]/[name].[hash].js"//chunkfilename控制的是入口文件。，、？
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