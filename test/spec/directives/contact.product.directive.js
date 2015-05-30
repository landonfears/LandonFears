'use strict';
describe("Unit: Testing Contact Product Directive", function() {

  	var element, $compile, $rootScope, $element, $scope, $timeout, template, $location;

  	beforeEach(module('salesfiction.products.directives'));
	beforeEach(module('static/templates/products/contact.product.html'));

	beforeEach(inject(function (_$rootScope_, _$compile_, _$timeout_, _$templateCache_, _$location_) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$compile = _$compile_;
		$timeout = _$timeout_;
		$location = _$location_;
	}));
	
	it("should display a contact product", function() {
		$element = angular.element('<contact fields="[\
{ name: \'Email\', id: \'email\', required: true, type: \'email\' },\
{ name: \'Subject\', id: \'subject\', required: true, type: \'text\' },\
{ name: \'Message\', id: \'message\', required: true, type: \'textarea\' }\
]" submit-title="Send"></contact>');
		$compile($element)($scope);
		//$rootScope.$apply();
		$scope.$digest();
		
		var isolateScope = $element.isolateScope();
		//isolateScope.$apply();
		expect(isolateScope.fields.length).toBe(3);
		expect($element.find('.btn-primary').text()).toBe('Send');
	});

});