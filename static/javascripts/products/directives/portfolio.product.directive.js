(function () {
	'use strict';
	
	angular
		.module('salesfiction.products.directives')
		.directive('portfolio', portfolio);
		
	function portfolio() {
		var directive = {
			restrict: 'E',
        	replace: true,
			transclude: true,
			scope: {
				name: '@',
				url: '@',
				tech: '@',
				image: '@',
				android: '@',
				ios: '@'
			},
			link: function(scope, element, attrs) {
				scope.links = [];
				if(scope.url) {
					scope.links.push({
						url: scope.url,
						type: 'Website',
						icon: 'link'
					});
				}
				if(scope.ios) {
					scope.links.push({
						url: scope.ios,
						type: 'iOS App',
						icon: 'apple'
					});
				}
				if(scope.android) {
					scope.links.push({
						url: scope.android,
						type: 'Android App',
						icon: 'android'
					});
				}
				
				element.find('img').hover(
  					function() {
    					$( this ).animate({
							opacity: '.1',
							borderColor: '#000000'
						}, 'fast');
						element.find('.portfolio-overlay').show();
  					}, function() {
    					$( this ).animate({
							opacity: '1',
							borderColor: '#ffffff'
						}, 'fast');
						element.find('.portfolio-overlay').hide();
  					}
				);
			},
			templateUrl: 'static/templates/products/portfolio.product.html'
		};
		
		return directive;
	}
})();