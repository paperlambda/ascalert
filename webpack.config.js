const path = require('path');

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
                test:/\.es6$/,
                exclude: '/node_modules',
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};