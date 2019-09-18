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
    $scope.mcq = true;
    $scope.boolq = false;
    $scope.searchQuestion = '';
    $scope.searchQuestionFilter = '';

    $scope.$watch('searchQuestion', function (newValue, oldValue, scope) {
      if (newValue.length > 1) {
        $scope.searchQuestionFilter = newValue;
      }
      else {
        $scope.searchQuestionFilter = '';
      }
    });

    $scope.init = function () {
      $scope.start();
    }

    $scope.questions = [
      {
        title: 'What is the area of the shaded region ?',
        Type: 'MCQ',
        Icon: "images/rotate.png",
        Difficulty: 'Easy',
        Scores: 10,
        active: true
      },
      {
        title: 'Order the shown figures ascendingly according to their area.',
        Type: 'MCQ',
        Icon: "images/rotate.png",
        Difficulty: 'Easy',
        Scores: 10,
        active: false
      },
    ]

    $scope.start = function() {
      $scope.questionmcq = {
        title: '',
        Type: 'MCQ',
        Icon: "images/rotate.png",
        Difficulty: '',
        Scores: 10,
        active: false
      }
  
      $scope.questionbool = {
        title: '',
        Type: 'True/False',
        Icon: "images/rotate.png",
        Difficulty: 'Easy',
        Scores: 10,
        active: false
      }

      $scope.choice1 = '';
      $scope.choice2 = '';
    }

    $scope.AddQuestion = function () {
      if ($scope.mcq) {
        $scope.questions.push($scope.questionmcq);
        $scope.start();
      }
      else {
        $scope.questions.push($scope.questionbool);
        $scope.start();
      }
    }

    $scope.init();

  });
