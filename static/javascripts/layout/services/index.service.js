// Scripts
(function () {
	'use strict';
	
	angular
		.module('salesfiction.layout.services')
		.factory('IndexService', IndexService);
	
	function IndexService($timeout) {
		var IndexService = {
			setStoriesLoaded: setStoriesLoaded,
			setScriptsLoaded: setScriptsLoaded,
			setScriptsDOMLoaded: setScriptsDOMLoaded,
			getStoriesLoaded: getStoriesLoaded,
			getScriptsLoaded: getScriptsLoaded,
			getScriptsDOMLoaded: getScriptsDOMLoaded,
			setTotalLines: setTotalLines,
			getTotalLines: getTotalLines,
			setTotalScripts: setTotalScripts,
			getTotalScripts: getTotalScripts
		};
		
		return IndexService;
		
		var storiesLoaded = false, scriptsLoaded = false, scriptsDOMLoaded = false, totalLines = 0, totalScripts;
		
		function setStoriesLoaded(loaded) {
			storiesLoaded = loaded;
		}
		
		function setTotalLines(num) {
			totalLines = num;	
		}
		
		function getTotalLines() {
			return totalLines;
		}
		
		function setTotalScripts(num) {
			totalScripts = num;	
		}
		
		function getTotalScripts() {
			return totalScripts;
		}
		
		function setScriptsLoaded(loaded) {
			scriptsLoaded = loaded;
		}
		
		function setScriptsDOMLoaded(loaded) {
			scriptsDOMLoaded = loaded;
		}
		
		function getStoriesLoaded() {
			return storiesLoaded;
		}
		
		function getScriptsLoaded() {
			return scriptsLoaded;
		}
		
		function getScriptsDOMLoaded() {
			return scriptsDOMLoaded;
		}
	}
})();