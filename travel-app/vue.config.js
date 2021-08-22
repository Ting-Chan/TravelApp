module.exports = {
    devServer: {
        proxy: {
            "/api": {
                // 服务地址，即你要访问的服务器地址
                target: "http://localhost:8080",
                // 路径重写
                pathRewrite: {
                    "^/api": "/mock"
                }
            }
        }
    }
}