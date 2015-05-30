'use strict';
describe("Unit: Testing Portfolio Product Directive", function() {

  	var element, $compile, $rootScope, $element, $scope, $timeout, template, $location;

  	beforeEach(module('salesfiction.products.directives'));
	beforeEach(module('static/templates/products/portfolio.product.html'));

	beforeEach(inject(function (_$rootScope_, _$compile_, _$timeout_, _$templateCache_, _$location_) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$compile = _$compile_;
		$timeout = _$timeout_;
		$location = _$location_;
	}));
	
	it("should display a portfolio product", function() {
		$element = angular.element('<portfolio name="TapYTap" url="http://tapytap.it/" tech="Mobile App, Javascript, Facebook API" image="static/portfolio/tapytap.jpg" android="" ios="https://itunes.apple.com/us/app/tapytap/id590392149"></portfolio>');
		$compile($element)($scope);
		//$rootScope.$apply();
		$scope.$digest();
		
		var isolateScope = $element.isolateScope();
		//isolateScope.$apply();
		expect(isolateScope.name).toBe('TapYTap');
		expect($element.find('.portfolio-info img').attr('src')).toBe('static/portfolio/tapytap.jpg');
	});

});