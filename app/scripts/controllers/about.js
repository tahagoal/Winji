'use strict';

/**
 * @ngdoc function
 * @name winjiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the winjiApp
 */
angular.module('winjiApp')
  .controller('AboutCtrl', function () {
    console.log("HELLO HEEHEH");
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
