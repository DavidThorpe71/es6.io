const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
    devtool: 'source-map',
    entry: {
        filename: './app.js'
    },
    output: {
        filename: '_build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    plugins: [
        // uglify js
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        // env plugin
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(nodeEnv)}
        })
    ]
}