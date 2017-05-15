const path = require('path');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output: {
        filename: 'ascalert.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders: [
            {
                test:/\.js$/,
                exclude: '/node_modules',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ],
        rules: [
            {
                test:/\.css$/,
                use: extractTextWebpackPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use:'css-loader'
                    }
                )
            }
        ]
    },
    plugins: [
        new extractTextWebpackPlugin('ascalert.css')
    ]
};