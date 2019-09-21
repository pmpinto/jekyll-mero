const path = require("path")

module.exports = {
    entry: "./assets/javascript/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "assets/javascript/")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    }
}
