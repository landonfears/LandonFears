(function () {
	'use strict';
	
	angular
		.module('salesfiction.products.directives')
		.directive('about', about);
		
	function about($timeout) {
		var directive = {
			restrict: 'E',
        	replace: true,
			transclude: true,
			scope: {
				name: '@',
				aboutItems: '=',
				aboutItemIcon: '@',
				githubUrl: '@',
				linkedinUrl: '@'
			},
			link: function(scope, element, attrs) {
				if(!scope.aboutItemIcon) scope.aboutItemIcon = 'caret-right';
				
				scope.social = [];
				if(scope.linkedinUrl) {
					scope.social.push({
						url: scope.linkedinUrl,
						icon: 'linkedin'
					});
				}
				if(scope.githubUrl) {
					scope.social.push({
						url: scope.githubUrl,
						icon: 'github'
					});
				}
				scope.socialNum = Math.floor(12 / scope.social.length);
			},
			templateUrl: 'static/templates/products/about.product.html'
		};
		
		return directive;
	}
})();