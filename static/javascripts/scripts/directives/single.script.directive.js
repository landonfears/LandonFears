(function () {
	'use strict';
	
	angular
		.module('salesfiction.scripts.directives')
		.directive('singleScript', singleScript);
		
	singleScript.$inject = ['Scripts', '$timeout', 'IndexService'];
	function singleScript(Scripts, $timeout, IndexService) {
		var directive = {
			restrict: 'E',
        	replace: true,
			scope: {
				script: '=',
				even: '='
			},
			link: function(scope, element, attrs) {
				scope.scriptsLoaded = IndexService.getScriptsLoaded;
				
				scope.$watch('scriptsLoaded()', function(loaded) {
					if(loaded){
						scope.slug = Scripts.prettyUrl(scope.script.script.script_name);
					}
				});
				
			},
			templateUrl: 'static/templates/scripts/single.script.html'
		};
		
		return directive;
	}
})();