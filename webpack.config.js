const {resolve} = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: resolve(__dirname, 'src', 'index.ts'),
    output: {
        filename: "[contenthash].bundle.js",
        path: resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'src/assets/img/[name].[ext]'
    },
    mode: 'production',
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(jpg|jpeg|png)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.ts$/,
                enforce: 'pre',
                use: ['source-map-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.scss', '.png', '.ico', '.jpg', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html'),
            favicon: resolve(__dirname, 'assets', 'favicon.ico')
        }),
        new CleanWebpackPlugin()
    ]
}