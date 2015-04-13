angular.module('app', ['ngNewRouter', 'app.home', 'app.detail'])
	.controller('AppController', ['$router', AppController]);

AppController.$routeConfig = [
	{ path: '/', 			component: 'home' },
	{ path: '/detail/:id', 	component: 'detail' }
];
function AppController ($router) {}