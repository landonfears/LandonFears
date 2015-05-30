'use strict';
describe("Unit: Testing Skill Product Directive", function() {

  	var element, $compile, $rootScope, $element, $scope, $timeout, template, $location;

  	beforeEach(module('salesfiction.products.directives'));
	beforeEach(module('static/templates/products/skill.product.html'));

	beforeEach(inject(function (_$rootScope_, _$compile_, _$timeout_, _$templateCache_, _$location_) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$compile = _$compile_;
		$timeout = _$timeout_;
		$location = _$location_;
	}));
	
	it("should display a job product", function() {
		$element = angular.element('<skill name="Python" level="100" level-name="Expert"></skill> ');
		$compile($element)($scope);
		//$rootScope.$apply();
		$scope.$digest();
		
		var isolateScope = $element.isolateScope();
		//isolateScope.$apply();
		$timeout(function(){
			expect(isolateScope.name).toBe('Python');
			expect($element.find('.skill-bar').data('level')).toBe(100);
		}, 500);
	});

});