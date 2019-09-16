'use strict';

/**
 * @ngdoc function
 * @name winjiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the winjiApp
 */
angular.module('winjiApp')
  .controller('MainCtrl', function ($scope) {

    $scope.done = function(){
      console.log("AEHAHEHAH");
    }

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
