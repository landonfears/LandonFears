(function () {
	'use strict';

	angular
  		.module('salesfiction', [
			'salesfiction.config',
			'salesfiction.routes',
			'salesfiction.layout',
			'salesfiction.stories',
			'salesfiction.scripts',
			'salesfiction.products'
		]);

	angular
  		.module('salesfiction.config', []);
  
	angular
		.module('salesfiction.routes', ['ngRoute']);
		
	angular
  		.module('salesfiction')
  		.run(run);

	run.$inject = ['$http'];

	/**
	* @name run
	* @desc Update xsrf $http headers to align with Django's defaults
	*/
	function run($http) {
		$http.defaults.xsrfHeaderName = 'X-CSRFToken';
		$http.defaults.xsrfCookieName = 'csrftoken';
	}
})();