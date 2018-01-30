var path = require('path')
const NODE_ENV = process.env.NODE_ENV || 'development'
const webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
                        {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: []
}