(function () {
	'use strict';
	
	angular
		.module('salesfiction.layout.directives')
		.directive('dropdownScripts', dropdownScripts);
		
	dropdownScripts.$inject = ['Scripts', '$timeout', '$location', 'IndexService'];
	function dropdownScripts(Scripts, $timeout, $location, IndexService) {
		var directive = {
			restrict: 'E',
        	replace: true,
			scope: {
				scripts: '='
			},
			link: function(scope, element, attrs) {
				scope.prettyUrl = Scripts.prettyUrl;
				scope.activateScriptLink = function(event){
					$('.dropdown-menu li.active').removeClass('active');
					$(event.target).parent().addClass('active');
					
					var currentIndex =  $('.script-fullwidth').index($('#'+ $location.url().replace('/', '')).closest('.script-fullwidth'));
					if(currentIndex < 0) currentIndex = 0;
					var dropdownIndex = $('.script-fullwidth').index( $( '#' + $(event.target).attr('href') ).closest('.script-fullwidth'));
					$('html, body').animate({
						scrollTop: $( '#' + $(event.target).attr('href') ).offset().top
					}, Math.abs(dropdownIndex - currentIndex) * 600);
				};	
				
				// Scroll to current url if there is one
				var path = $location.url().replace('/', '');
				scope.scriptsLoaded = IndexService.getScriptsLoaded;
				scope.scriptsDOMLoaded = IndexService.getScriptsDOMLoaded;
				
				var maxTries = 10, interval = 200;
				function checkProductsLoaded(tries) {
					if(scope.getProducts() == IndexService.getTotalScripts() || tries >= maxTries) {
						element.closest('.nav-content').fadeIn();
						if(path && $('#'+path).length){
							// Set animation time relative to distance traveled
							//var scrollTime = $( '#' + path ).offset().top / 
							var pathIndex = $('.script-fullwidth').index($('#'+path).closest('.script-fullwidth'));
							var pathTotal = $('.script-fullwidth').length;
							$('html, body').animate({
								scrollTop: $( '#' + path ).offset().top
							}, pathIndex * 600);
						}
					}
					else {
						$timeout(function(){
							checkProductsLoaded(tries + 1);				  
						}, interval);
					}
					
					
				}
				scope.getProducts = function(){
					var loadedProducts = $('.product').filter(function() { 
						return $(this).children().length > 1; 
					}).length;
					return loadedProducts;
				};
				
				scope.$watch('scriptsDOMLoaded()', function(loaded) {
					if(loaded) {
						checkProductsLoaded(0);
					}
				});
			},
			templateUrl: 'static/templates/layout/dropdown.scripts.html'
		};
		
		return directive;
	}
})();