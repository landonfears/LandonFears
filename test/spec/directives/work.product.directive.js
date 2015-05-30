'use strict';
describe("Unit: Testing Work Product Directive", function() {

  	var element, $compile, $rootScope, $element, $scope, $timeout, template, $location;

  	beforeEach(module('salesfiction.products.directives'));
	beforeEach(module('static/templates/products/work.product.html'));
	beforeEach(module('static/templates/products/portfolio.product.html'));

	beforeEach(inject(function (_$rootScope_, _$compile_, _$timeout_, _$templateCache_, _$location_) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$compile = _$compile_;
		$timeout = _$timeout_;
		$location = _$location_;
	}));
	
	it("should display a portfolio product", function() {
		$element = angular.element('<work>\
			<portfolio name="Landon Fears" url="" tech="AngularJS, Django, TDD" image="static/characters/landon.png" android="" ios=""></portfolio>\
			<portfolio name="Buyable Funnies" url="http://buyablefunnies.com/" tech="Wordpress, Responsive, Amazon API" image="static/portfolio/bf.png" android="" ios=""></portfolio>\
			<portfolio name="Song Creator" url="/music/" tech="Backbone, Django, Audiolet.js" image="static/portfolio/song-creator.png" android="" ios=""></portfolio>\
		</work>');
		
		$compile($element)($scope);
		$scope.$digest();
		//$rootScope.$apply();
		
		var isolateScope = $element.isolateScope();
		//isolateScope.$apply();
		expect($element.find('.row .portfolio-item').length).toBe(3);
		
	});

});