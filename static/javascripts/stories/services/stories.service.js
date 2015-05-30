// Stories
(function () {
	'use strict';
	
	angular
		.module('salesfiction.stories.services')
		.factory('Stories', Stories);
		
	Stories.$inject = ['$http'];
	
	function Stories($http) {
		var Stories = {
			latest: latest
		};
		
		return Stories;
		
		function latest() {
			return $http.get('/api/lateststory/');
		}
	}
})();