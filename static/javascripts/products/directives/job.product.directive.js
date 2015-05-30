(function () {
	'use strict';
	
	angular
		.module('salesfiction.products.directives')
		.directive('job', job);
		
	function job($timeout, $sce) {
		var directive = {
			restrict: 'E',
        	replace: true,
			transclude: true,
			scope: {
				company: '@',
				jobTitle: '@',
				jobDate: '@',
				jobLocation: '@',
				jobItems: '=',
				jobItemIcon: '@'
			},
			link: function(scope, element, attrs) {
				if(!scope.jobItemIcon) scope.jobItemIcon = 'caret-right';
			},
			templateUrl: 'static/templates/products/job.product.html'
		};
		
		return directive;
	}
})();