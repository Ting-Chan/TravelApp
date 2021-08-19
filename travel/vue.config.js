module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.styl(us)?$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
                }
            ]
        }
    }
}

