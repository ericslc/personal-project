angular.module('myApp').service('productSvc', function( $http){

  this.getProduct = function(){
    return $http.get('/api/productinfo');
  };
  this.addProduct = function(product){
    return $http.post('/api/productinfo', product);

  };
  this.updateProduct = function(id, update){
    return $http.update('/api/productinfo' + id, update);
  };
  this.deleteProduct = function(id){
    return $http.delete('/api/productinfo' + id);
  }
})
