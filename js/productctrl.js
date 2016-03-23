angular.module('myApp').controller('productCtrl', function($scope, productSvc, gearSvc){
  $scope.getProduct = function() {
     productSvc.getProducts().then(function(response) {
       $scope.product = response.data;
       console.log($scope.product)

     })
    };
  $scope.getProduct();

  $scope.getGear = function() {
    gearSvc.getGear().then(function(response){
      $scope.gear = response.data;
      console.log($scope.gear)
    })
  };

  $scope.getGear();



});
