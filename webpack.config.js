const path = require('path');
const webpack = require('webpack');
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
        rules: [
            {
                test:/\.scss$/,
                use: extractTextWebpackPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use:'css-loader!sass-loader'
                    }
                )
            },
            {
                test:/\.js$/,
                exclude: '/node_modules',
                use: 'babel-loader?presets[]=es2015'
            }
        ]
    },
    plugins: [
        new extractTextWebpackPlugin('ascalert.css'),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
};