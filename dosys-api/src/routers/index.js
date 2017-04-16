const mount = require("koa-mount");

module.exports = function(server){
	const userRouter = require("./userRouter");
	const clienteRouter = require("./clienteRouter");
	server.use(mount('/api/users', userRouter.routes()));
	server.use(mount('/api/clientes', clienteRouter.routes()));
};