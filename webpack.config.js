const {resolve} = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: "[contenthash].bundle.js",
        path: resolve(__dirname, 'dist')
    },
    mode: 'production',
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss', '.png', '.ico', '.jpg']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html'),
            favicon: resolve(__dirname, 'assets', 'favicon.ico')
        }),
        new CleanWebpackPlugin()
    ]
}