angular.module('myApp').controller('productCtrl', function($scope, productSvc, gearSvc){
  $scope.getProduct = function() {
     productSvc.getProducts().then(function(response) {
       $scope.product = response.data;

     })
    };
  $scope.getProduct();

  $scope.getGear = function() {
    gearSvc.getGear().then(function(response){
      $scope.gear = response.data;
    })
  };

  $scope.getGear();



});
