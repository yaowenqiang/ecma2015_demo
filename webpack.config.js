var webpack = require("webpack");

module.exports = {
    entry: "./src/main.js",
    mode: "development",
    devtool: "source-map",
    output: {
        filename: "./dist/main.dist.js"
    },
    module: {
        rules: [
            {
                loader:"buble",
                test: "/\.js?$/"
            }
        ]
    }
}
