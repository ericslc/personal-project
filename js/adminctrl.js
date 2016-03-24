angular.module('myApp').controller('adminCtrl', function($scope, userSvc){
  $scope.test = "testie test test";
  $scope.getUser = function() {
    userSvc.getUser().then(function(response){
      $scope.user = response.data;
    })
  };
  $scope.getUser();



})
