

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const glob = require("glob")
console.error(__dirname,"__dirname=====")
const entries = ['./entry/index.js'];
const plugins = [];

glob.sync("./../src/*/index.js").forEach((item, index)=>{
    plugins.push(new HtmlWebpackPlugin({
        template: './../entry/index.html'
    }))
})
module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
    },
    devServer: {
        open: true
    },
    mode:'development',
    devtool: "inline-source-map",
    module:{
        rules:[
            {
                test: /\.css/,
                use:["css-loader", "style-loader"],
                exclude:/(node-modules)/,
            },
            {
                test: /\.js[x]?$/,
                use:["babel-loader"]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin({}),
        ...plugins
    ],
    optimization:{//将node_modlues分割成一个单独的chunk。
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups:{
                vendor: {
                    test: /(node_modules)/,
                    name: 'vendors',
                    chunks: "all"
                }
            }
        }
    }
}