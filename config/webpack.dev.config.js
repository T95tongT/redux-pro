

const {merge} = require("webpack-merge")
const  common = require("./webpack.common.js")
module.exports = (env) => {
    return merge(common(), {
        devServer: {
            open: true
        },
        mode:'development',
        devtool: "source-map",
    })
}