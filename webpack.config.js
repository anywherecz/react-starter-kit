var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname+'/build',
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2017', 'react']
                    }
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname+'/src/template.html'
        })
    ]
};