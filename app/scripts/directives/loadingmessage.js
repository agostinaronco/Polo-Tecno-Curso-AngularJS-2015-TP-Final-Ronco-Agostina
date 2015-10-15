'use strict';

/**
 * @ngdoc directive
 * @name angularDashboardApp.directive:calc
 * @description
 * # calc
 */
angular.module('angularDashboardApp')
  .directive('loadingmessage', function ($timeout) {
    return {
      restrict: 'AE',
      link: function postLink(scope, element, attrs) {
      	$(window).load(function(){
      		$timeout(function() {
      			element.addClass('animated flipOutX')
      		}, 500);
      	});
      }
    };
  });


