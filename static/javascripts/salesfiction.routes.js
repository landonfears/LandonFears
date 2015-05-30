(function () {
	'use strict';
	
	angular
		.module('salesfiction.routes')
		.config(config);
		
	config.$inject = ['$routeProvider'];
	
	function config($routeProvider) {
		$routeProvider.when('/', {
			controller: 'IndexController',
			templateUrl: '/static/templates/layout/index.html'
		}).otherwise('/');
	}
})();