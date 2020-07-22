/*
 * @Author: your name
 * @Date: 2020-07-08 16:57:34
 * @LastEditTime: 2020-07-17 13:36:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \redux-pro\config\webpack.dev.config.js
 */ 


const {merge} = require("webpack-merge")
const  common = require("./webpack.common.js")
module.exports = (env) => {
    return merge(common(), {
        devServer: {
            open: true,
            overlay: true,
            hot : true
        },
        mode:'development',
        devtool: "source-map",
    })
}
