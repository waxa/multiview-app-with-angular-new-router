angular.module('app.detail', ['ngNewRouter', 'ngMaterial'])
	.controller('DetailController', ['$routeParams', DetailController]);

function DetailController ($routeParams) {
	this.id = $routeParams.id;
};