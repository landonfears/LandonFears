'use strict';
describe("Unit: Testing About Product Directive", function() {

  	var element, $compile, $rootScope, $element, $scope, $timeout, template, $location;

  	beforeEach(module('salesfiction.products.directives'));
	beforeEach(module('static/templates/products/about.product.html'));

	beforeEach(inject(function (_$rootScope_, _$compile_, _$timeout_, _$templateCache_, _$location_) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$compile = _$compile_;
		$timeout = _$timeout_;
		$location = _$location_;
	}));
	
	it("should display an about product", function() {
		$element = angular.element('<about name="Landon Fears" about-items="[\'12 years experience as a front end web developer\', \'Skilled in working as a full stack engineer as well\', \'Passionate in creating web applications, especially using the AngularJS framework\', \'Music fan, particularly Classic Soul!\']" about-item-icon="star" github-url="https://github.com/landonfears" linkedin-url="https://www.linkedin.com/in/landonfears"></about>');
		$compile($element)($scope);
		//$rootScope.$apply();
		$scope.$digest();
		
		var isolateScope = $element.isolateScope();
		//isolateScope.$apply();
		expect(isolateScope.name).toBe('Landon Fears');
		expect(isolateScope.aboutItems.length).toBe(4);
	});

});