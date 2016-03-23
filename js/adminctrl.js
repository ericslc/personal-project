angular.module('myApp').controller('adminCtrl', function($scope, userSvc){
  $scope.getUser = function(){
    userSvc.getUser().then(function(response){
      $scope.user = response.data;
      console.log($scope.user);

    })

   }
})
