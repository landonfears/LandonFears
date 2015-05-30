'use strict';

describe('Controller: IndexController', function () {
	var Stories, Scripts, IndexService, httpBackend;
	
  // load the controller's module
  beforeEach(module('salesfiction'));

  var IndexController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Stories_, _Scripts_, _IndexService_, $httpBackend) {
    scope = $rootScope.$new();
	Stories = _Stories_;
	Scripts = _Scripts_;
	IndexService = _IndexService_;
    httpBackend = $httpBackend;
    IndexController = $controller('IndexController', {
      $scope: scope
    });
  }));

  it('should show the stories object with scripts', function () {
	Stories.latest().then(function(story) {
		expect(story.data.scripts.length).toEqual(2);			   
	});
  });
});
