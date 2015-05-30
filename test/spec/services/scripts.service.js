'use strict';

describe('Service: Scripts', function () {
	var Scripts, httpBackend;
	
  // load the controller's module
  beforeEach(module('salesfiction'));

  beforeEach(inject(function (_Scripts_, $httpBackend) {
    Scripts = _Scripts_;
    httpBackend = $httpBackend;
  }));

  it('should return mock script', function () {
	httpBackend.whenGET("/api/script/2/").respond({
		"id": 2,
		"story": {
			"id": 1,
			"story_name": "Landon's Resume",
			"story_description": "A story of a job hunter's interview with a quirky hiring manager.",
			"pub_date": "2015-05-10T17:15:54.197494Z",
			"created_at": "2015-05-06T00:57:02.306581Z",
			"updated_at": "2015-05-06T00:57:07.386359Z"
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
		"color": "#000000",
		"pub_date": "2015-05-07T17:15:54Z",
		"created_at": "2015-05-05T02:26:13.269761Z",
		"updated_at": "2015-05-10T19:06:43.281023Z",
		"lines": [
			{
				"id": 3,
				"mood": {
					"id": 5,
					"character": {
						"id": 1,
						"character_name": "Landon",
						"character_description": "The job hunter.",
						"character_face": "/home/landon/lf/static/characters/landon.png"
					},
					"mood_name": "Confused",
					"mood_face": "/home/landon/lf/static/characters/landon-confused.png"
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
						"character_face": "/home/landon/lf/static/characters/int1.png"
					},
					"mood_name": "Proud",
					"mood_face": "/home/landon/lf/static/characters/int1-proud.png"
				},
				"text": "Well, that makes me furious!"
			}
		]
	});
	Scripts.get(2).then(function(script) {
		expect(script.data.story.story_name).toBe("Landon's Resume");							   
	});
	httpBackend.flush();
  });
});
