'use strict';

const Router = require("koa-router");
const clienteService = require("../services/clienteService");

let clienteRouter = new Router();

clienteRouter.get("/", function* (next){
	this.body = yield clienteService.getAll();

});

clienteRouter.get("/cpf/:cpf", function* (next){
	this.body = yield clienteService.getByCpf(this.request.query);
});

clienteRouter.post("/", function* (next){
	this.body = yield clienteService.insert(this.request.query);

});

clienteRouter.put("/update", function* (next){
	this.body = yield clienteService.update(this.request.query);
});

clienteRouter.delete("/delete/:id", function* (next){
	this.body = yield clienteService.delete(this.params.id);
});

module.exports = clienteRouter;