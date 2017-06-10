
class CategoryController{
	constructor(categoryService, $stateParams){
		this.categoryService = categoryService;
		this.getAll();
		this.serverErrors = undefined;
		this.$stateParams = $stateParams;
		if(this.$stateParams.id){
			this.getById(this.$stateParams.id);
		}

		this.getParents();

		this.preencheLista();

		this.data;

	}

	insert (){
		var that = this;
		this.categoryService.insert(this.category).then(function (response){
			that.getAll();
		}).catch(function(erro){
			console.log(erro);
			this.serverErrors = erro;
		});
	};

	update (){
		var that = this;
		this.categoryService.update(this.category).then(function (response){
			that.getAll();
		}).catch(function(erro){
			console.log(erro);
			this.serverErrors = erro;
		});
	};


	delete (id){
		var that = this;
		this.categoryService.delete(id).then(function (response){
			that.category = response.data;
			that.getAll();
		}).catch(function(erro){
			console.log(erro);
		});
	};

	getAll (){
		var that = this;
		this.categoryService.getAll().then(function (response){
			that.categoryService.getAll().then(function (response){
				that.categories = response.data;	
			});
		});
	};

	getParents (){
		var that = this;
		this.categoryService.getParents().then(function (response){
			that.categoryService.getParents().then(function (response){
				that.parents = response.data;	
			});
		});
	};

	preencheLista (){
		var that = this;
		that.categoryService.getParents().then(function (response){
			let parents = response.data;

			parents.forEach(function(obj,index,lista){
				that.categoryService.getByParent(obj._id).then(function (response){
					obj.subCategorias = response.data;
				}).catch(function(erro){
					console.log(erro);
				});

			});
			that.lista = parents;
		});
	};

	getById (id){
		var that = this;
		this.categoryService.getById(id).then(function (response){
				that.category = response.data;
		}).catch(function(erro){
			console.log(erro);
		});
	};

	getByParent (id){
		var that = this;
		return this.categoryService.getByParent(id).then(function (response){
				return response.data;
		}).catch(function(erro){
			console.log(erro);
		});
	};




};



angular.module("app").controller("categoryCtrl", CategoryController);