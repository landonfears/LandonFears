// IndexController
(function () {
	'use strict';
	
	angular
		.module('salesfiction.layout.controllers')
		.controller('IndexController', IndexController);
		
	IndexController.$inject = ['$scope', 'Stories', 'Scripts', 'IndexService'];
	
	function IndexController($scope, Stories, Scripts, IndexService) {
		//console.log('index controller');
		
		Stories.latest().then(storiesSuccess);
		
		function storiesSuccess(data, status, headers, config) {
			$scope.stories = data.data;
			if($scope.stories.length) {
				IndexService.setStoriesLoaded(true);
				var scriptCount = 0, lineCount = 0;
				angular.forEach($scope.stories[0].scripts, function(script, index) {
					Scripts.get(script.id).then(function(scriptData) {
						$scope.stories[0].scripts[index].script = scriptData.data;	
						scriptCount++;
						lineCount += scriptData.data.lines.length;
						if(scriptCount == $scope.stories[0].scripts.length) {
							IndexService.setTotalLines(lineCount);
							IndexService.setTotalScripts(scriptCount);
							IndexService.setScriptsLoaded(true);
						}
					});
				});
			}
		}
	}
})();