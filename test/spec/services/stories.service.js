'use strict';

describe('Service: Stories', function () {
	var Stories, httpBackend;
	
  // load the controller's module
  beforeEach(module('salesfiction'));

  beforeEach(inject(function (_Stories_, $httpBackend) {
    Stories = _Stories_;
    httpBackend = $httpBackend;
  }));

  it('should return mock stories', function () {
	httpBackend.whenGET("/api/lateststory/").respond([
		{
			"id": 1,
			"story_name": "Landon's Resume",
			"story_description": "A story of a job hunter's interview with a quirky hiring manager.",
			"pub_date": "2015-05-10T17:15:54.197494Z",
			"created_at": "2015-05-06T00:57:02.306581Z",
			"updated_at": "2015-05-06T00:57:07.386359Z",
			"scripts": [
				{
					"id": 2,
					"pub_date": "2015-05-07T17:15:54Z",
					"created_at": "2015-05-05T02:26:13.269761Z",
					"updated_at": "2015-05-10T19:06:43.281023Z"
				},
				{
					"id": 1,
					"pub_date": "2015-05-10T17:15:54.198450Z",
					"created_at": "2015-05-05T00:45:21.613467Z",
					"updated_at": "2015-05-05T00:45:21.613513Z"
				}
			]
		}
	]);
	Stories.latest().then(function(story) {
		expect(story.data[0].scripts.length).toBe(2);							   
	});
	httpBackend.flush();
  });
});
