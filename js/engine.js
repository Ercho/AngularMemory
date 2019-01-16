var memory = angular.module('memoryApp', []);

memory.factory('game', function() {
  var tileNames = [1,2,3,4,5,6,7,8];

  return new Game(tileNames);
});


memory.controller('GameCtrl', function GameCtrl($scope, game) {
  $scope.game = game;
});

memory.controller('TimeCtrl', function TimeCtrl($scope, timer) {
  $scope.timer = timer;
});

memory.directive('mgCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'board-template.htm'
  }
});

memory.directive('mgTime', function() {
  return {
    restrict: 'E',
    templateUrl: 'time-template.htm'
  }
});

