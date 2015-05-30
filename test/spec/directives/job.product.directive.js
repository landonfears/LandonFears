'use strict';
describe("Unit: Testing Job Product Directive", function() {

  	var element, $compile, $rootScope, $element, $scope, $timeout, template, $location;

  	beforeEach(module('salesfiction.products.directives'));
	beforeEach(module('static/templates/products/job.product.html'));

	beforeEach(inject(function (_$rootScope_, _$compile_, _$timeout_, _$templateCache_, _$location_) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$compile = _$compile_;
		$timeout = _$timeout_;
		$location = _$location_;
	}));
	
	it("should display a job product", function() {
		$element = angular.element('<job company="Sungard Energy" job-title="Web Developer" job-date="May 2014 - Present" job-location="Houston, TX" job-items="[\'Lead Front-End Engineer in creating CMS for Pipeline operators to display information to the public\', \'Built CMS using custom HTML5 framework built on top of Angular.js, alongside a Java backend\']"></job>');
		$compile($element)($scope);
		//$rootScope.$apply();
		$scope.$digest();
		
		var isolateScope = $element.isolateScope();
		//isolateScope.$apply();
		$timeout(function(){
			expect(isolateScope.company).toBe('Sungard Energy');
			expect($element.find('h2').text()).toBe('Sungard Energy');
			expect(isolateScope.jobItems.length).toBe(2);
		}, 500);
	});

});