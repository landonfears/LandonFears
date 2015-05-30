(function () {
	'use strict';
	
	angular
		.module('salesfiction.products.directives')
		.directive('skill', skill);
		
	function skill($timeout, $sce) {
		var directive = {
			restrict: 'E',
        	replace: true,
			transclude: true,
			scope: {
				name: '@',
				level: '@',
				levelName: '@',
				skillIcon: '@'
			},
			link: function(scope, element, attrs) {
				if(!scope.skillIcon) scope.skillIcon = 'check';
				
				if(!canAffix()){
					$(window).off('.affix');
					element.closest('.product').removeClass("affix affix-top affix-bottom").removeData("bs.affix");
					element.closest('.product').css('opacity', 1);
					element.closest('.product').width('100%');
					element.closest('.product').css('top', 0);
					
					var skill = element.find('.skill-bar');
					skill.width(scope.level+'%');
				}
				
				function canAffix() {
					return $('.affix-breakpoint').is(':visible') && !$.browser.mobile;
				}
			},
			templateUrl: 'static/templates/products/skill.product.html'
		};
		
		return directive;
	}
})();