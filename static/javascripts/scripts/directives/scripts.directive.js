(function () {
	'use strict';
	
	angular
		.module('salesfiction.scripts.directives')
		.directive('scripts', scripts);
		
	function scripts(IndexService, $timeout) {
		var directive = {
			restrict: 'E',
        	replace: true,
			scope: {
				scripts: '='
			},
			link: function(scope, element, attrs) {
				scope.scriptsLoaded = IndexService.getScriptsLoaded;
				var maxTries = 5, interval = 200;
				scope.getLines = function(){
					var loadedLines = element.find('.line').filter(function() { 
						return $(this).find('img').height() > 0; 
					}).length;
					return loadedLines;
				};
				
				// Sets a number of tries to check if the scripts dom has loaded
				function checkDOMLoaded(tries) {
					if(scope.getLines() == IndexService.getTotalLines() || tries >= maxTries) {
						IndexService.setScriptsDOMLoaded(true);
						element.find('.script-fullwidth').addClass('script-fullwidth-gradient');
					}
					else {
						$timeout(function(){
							checkDOMLoaded(tries + 1);				  
						}, interval);
					}
					
					
				}
				
				scope.$watch('scriptsLoaded()', function(loaded) {
					if(loaded){
						checkDOMLoaded(0);
					}
				});
				
			},
			templateUrl: 'static/templates/scripts/scripts.html'
		};
		
		return directive;
	}
})();