const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/messages', {
            target: 'http://merosya.ru:81',
            changeOrigin: true,
            pathRewrite: {
                "^/messages": "",
            },
            headers: {
                Connection: "keep-alive"
            }
        })
    );
    app.use(
        createProxyMiddleware('/auth', {
            target: 'http://merosya.ru:82',
            changeOrigin: true,
            pathRewrite: {
                "^/auth": "",
            },
            headers: {
                Connection: "keep-alive"
            }
        })
    );
}