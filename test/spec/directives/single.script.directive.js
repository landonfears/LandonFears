'use strict';
describe("Unit: Testing Single Script Directive", function() {

  	var element, $compile, $rootScope, $element, $scope, $timeout, template, Scripts, IndexService;

  	beforeEach(module('salesfiction.scripts.services'));
	beforeEach(module('salesfiction.layout.services'));
	beforeEach(module('salesfiction.scripts.directives'));
	beforeEach(module('static/templates/scripts/single.script.html'));

	beforeEach(inject(function (_$rootScope_, _$compile_, _$timeout_, _$templateCache_, _Scripts_, _IndexService_) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$compile = _$compile_;
		$timeout = _$timeout_;
		Scripts = _Scripts_;
		IndexService = _IndexService_;
	}));
	
	it("should display a single script", function() {
		$scope.script = {
			"id": 2,
			"script": {
			  "id": 2,
			  "story": {
				"id": 1,
				"story_name": "Landon's Resume",
				"story_description": "A story of a job hunter's interview with a quirky hiring manager.",
			  },
			  "product": {
				"id": 1,
				"product_name": "Qualifications",
				"product_content": "A summary of job qualifications.",
				"product_image1": null,
				"product_image2": null,
				"product_image3": null
			  },
			  "script_name": "Script Part 2",
			  "color": "#e81153",
			  "lines": [
				{
				  "id": 3,
				  "mood": {
					"id": 5,
					"character": {
					  "id": 1,
					  "character_name": "Landon",
					  "character_description": "The job hunter.",
					  "character_face": "static/characters/landon.png"
					},
					"mood_name": "Confused",
					"mood_face": "static/characters/landon-confused.png"
				  },
				  "text": "I'm confused."
				},
				{
				  "id": 4,
				  "mood": {
					"id": 4,
					"character": {
					  "id": 2,
					  "character_name": "Interviewer #1",
					  "character_description": "The strange hiring manager.",
					  "character_face": "static/characters/int1.png"
					},
					"mood_name": "Proud",
					"mood_face": "static/characters/int1-proud.png"
				  },
				  "text": "Well, that makes me furious!"
				}
			  ]
			}
		  };
		$scope.even = true;
		
		$element = angular.element('<single-script script="script" even="true"></single-script>');
		$compile($element)($scope);
		//$rootScope.$apply();
		$scope.$digest();
		
		var isolateScope = $element.isolateScope();
		//isolateScope.$apply();
		expect($element.find('.line').length).toBe(2);
		expect($element.find('.line').eq(0).hasClass('line-left')).toBe(true);
		expect($element.find('.line').eq(1).hasClass('line-right')).toBe(true);
		expect($element.scope().even).toBe(true);
		//expect(element.scope().scripts[0].id).toBe(2);
	});

});