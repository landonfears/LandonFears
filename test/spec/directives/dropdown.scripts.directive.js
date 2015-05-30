'use strict';
describe("Unit: Testing Dropdown Scripts Directive", function() {

  	var element, $compile, $rootScope, $element, $scope, $timeout, template, $location, Scripts;

  	beforeEach(module('salesfiction'));
	beforeEach(module('static/templates/layout/dropdown.scripts.html'));

	beforeEach(inject(function (_$rootScope_, _$compile_, _$timeout_, _$templateCache_, _Scripts_, _$location_) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$compile = _$compile_;
		$timeout = _$timeout_;
		Scripts = _Scripts_;
		$location = _$location_;
	}));
	
	it("should display the dropdown properly", function() {
		$scope.scripts = [
			{ id: 2, script_name: 'Script 1'},
			{ id: 1, script_name: 'Script 2'}
		];
		$scope.prettyUrl = Scripts.prettyUrl;
		
		$element = angular.element('<dropdown-scripts scripts="scripts"></dropdown-scripts>');
		$compile($element)($scope);
		//$rootScope.$apply();
		$scope.$digest();
		
		var isolateScope = $element.isolateScope();
		//console.log('element', isolateScope, element.scope().scripts.length, element.find('li').length, element.scope().scripts[0].script_name);
		//isolateScope.$apply();
		expect($element.find('li').length).toBe(2);
		expect(isolateScope.prettyUrl(isolateScope.scripts[0].script_name)).toBe('script-1');
		expect(isolateScope.scripts[0].id).toBe(2);
	});

});