'use strict';
describe("Unit: Testing Scripts Directive", function() {

  	var element, $compile, $rootScope, $element, $scope, $timeout, template, Scripts;

  	beforeEach(module('salesfiction.scripts.services'));
	beforeEach(module('salesfiction.layout.services'));
	beforeEach(module('salesfiction.scripts.directives'));
	beforeEach(module('static/templates/scripts/scripts.html'));
	beforeEach(module('static/templates/scripts/single.script.html'));

	beforeEach(inject(function (_$rootScope_, _$compile_, _$timeout_, _$templateCache_, _Scripts_) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		$compile = _$compile_;
		$timeout = _$timeout_;
		Scripts = _Scripts_;
	}));
	
	it("should display all scripts", function() {
		$scope.scripts = [
		  {
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
		  },
		  {
			"id": 1,
			"script": {
			  "id": 1,
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
			  "script_name": "Sample Script",
			  "color": "#319397",
			  "lines": [
				{
				  "id": 1,
				  "mood": {
					"id": 1,
					"character": {
					  "id": 1,
					  "character_name": "Landon",
					  "character_description": "The job hunter.",
					  "character_face": "static/characters/landon.png"
					},
					"mood_name": "Default",
					"mood_face": null
				  },
				  "text": "Hello, Mr. Interviewer!"
				},
				{
				  "id": 2,
				  "mood": {
					"id": 3,
					"character": {
					  "id": 2,
					  "character_name": "Interviewer #1",
					  "character_description": "The strange hiring manager.",
					  "character_face": "static/characters/int1.png"
					},
					"mood_name": "Default",
					"mood_face": null
				  },
				  "text": "Hello, Landon!"
				}
			  ]
			}
		  }
		];
		
		function hexToRgb(hex) {
			// Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
			var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
			hex = hex.replace(shorthandRegex, function(m, r, g, b) {
				return r + r + g + g + b + b;
			});
		
			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result ? 'rgb('+parseInt(result[1], 16)+', '+parseInt(result[2], 16)+', '+parseInt(result[3], 16)+')' : null;
		}
		
		$element = angular.element('<scripts scripts="scripts"></scripts>');
		$compile($element)($scope);
		//$rootScope.$apply();
		$scope.$digest();
		
		var isolateScope = $element.isolateScope();
		//isolateScope.$apply();
		expect($element.find('.script-fullwidth').length).toBe(2);
		expect($element.find('.script-fullwidth').eq(0).css('backgroundColor')).toBe(hexToRgb('#e81153'));
		expect($element.find('.script-fullwidth').eq(1).css('backgroundColor')).toBe(hexToRgb('#319397'));
	});

});