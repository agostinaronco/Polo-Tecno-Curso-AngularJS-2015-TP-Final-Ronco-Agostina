'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDashboardApp
 */
angular.module('angularDashboardApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
