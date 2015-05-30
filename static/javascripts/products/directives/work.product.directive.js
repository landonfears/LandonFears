(function () {
	'use strict';
	
	angular
		.module('salesfiction.products.directives')
		.directive('work', work);
		
	function work($timeout) {
		var directive = {
			restrict: 'E',
        	replace: true,
			transclude: true,
			templateUrl: 'static/templates/products/work.product.html'
		};
		
		return directive;
	}
})();