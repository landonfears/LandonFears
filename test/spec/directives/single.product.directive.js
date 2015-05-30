'use strict';
describe("Unit: Testing Single Product Directive", function() {

  	var element, $compile, $rootScope, $element, $scope, $timeout, template, $location, IndexService;

	beforeEach(module('salesfiction.layout.services'));
  	beforeEach(module('salesfiction.products.directives'));
	beforeEach(module('static/templates/products/single.product.html'));

	beforeEach(inject(function (_$rootScope_, _$compile_, _$timeout_, _$templateCache_, _$location_, _IndexService_) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$compile = _$compile_;
		$timeout = _$timeout_;
		$location = _$location_;
		IndexService = _IndexService_;
	}));
	
	it("should display a single product", function() {
		$scope.product = {
			"id": 3,
			"product_name": "Skills",
			"product_content": "All my skills",
			"product_image1": null,
			"product_image2": null,
			"product_image3": null
		};
		
		$element = angular.element('<single-product product="product"></single-product>');
		$compile($element)($scope);
		//$rootScope.$apply();
		$scope.$digest();
		
		var isolateScope = $element.isolateScope();
		//isolateScope.$apply();
		expect($element.attr('id')).toBe('product3');
		expect($element.scope().product.product_name).toBe('Skills');
	});

});