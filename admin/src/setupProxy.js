const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/upload",
		createProxyMiddleware({
			target: "https://api.cloudinary.com",
			changeOrigin: true,
		})
	);
};
