const { createProxyMiddleware } = require('http-proxy-middleware');
const dotenv = require('dotenv');

module.exports = function (app) {
    const env = dotenv.config().parsed;
    app.use(
        createProxyMiddleware('/messages', {
            target: env.MESSAGES_SERVICE_URL,
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
            target: env.AUTH_SERVICE_URL,
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
