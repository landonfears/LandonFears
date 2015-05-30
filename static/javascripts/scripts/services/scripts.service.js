// Scripts
(function () {
	'use strict';
	
	angular
		.module('salesfiction.scripts.services')
		.factory('Scripts', Scripts);
		
	Scripts.$inject = ['$http'];
	
	function Scripts($http) {
		var Scripts = {
			get: get,
			prettyUrl: prettyUrl
		};
		
		return Scripts;
		
		function get(id) {
			return $http.get('/api/script/' + id + '/');
		}
		
		function prettyUrl(name) {
			return name
				.toLowerCase()
				.replace(/ /g,'-')
				.replace(/[^\w-]+/g,'')
				;
		}
	}
})();