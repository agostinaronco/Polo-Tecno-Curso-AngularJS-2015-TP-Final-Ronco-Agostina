'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularDashboardApp
 */
angular.module('angularDashboardApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
