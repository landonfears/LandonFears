'use strict';

/**
 * @ngdoc function
 * @name lfApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lfApp
 */
angular.module('lfApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
