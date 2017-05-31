const mount = require("koa-mount");

module.exports = function(server){
	const userRouter = require("./userRouter");
	const clienteRouter = require("./clienteRouter");
	const itemConsumoRouter = require("./itemConsumoRouter");
	const itemEstoqueRouter = require("./itemEstoqueRouter");
	const unidadeMedidaRouter = require("./unidadeMedidaRouter");
	const categoriaRouter = require("./categoriaRouter");
	
	server.use(mount('/api/users', userRouter.routes()));
	server.use(mount('/api/clientes', clienteRouter.routes()));
	server.use(mount('/api/itemConsumo', itemConsumoRouter.routes()));
	server.use(mount('/api/itemEstoque', itemEstoqueRouter.routes()));
	server.use(mount('/api/unidadeMedida', unidadeMedidaRouter.routes()));
	server.use(mount('/api/categoria', categoriaRouter.routes()));
};