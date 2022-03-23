const {resolve} = require('path');

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
        extensions: ['.ts', '.js', '.scss', 'png']
    }
}