angular.module('myApp').service('productSvc', function( $http){

  this.getProducts = function() {
      return $http({
        method: 'GET',
        url: '/api/productinfo'
      })
    };



    this.newProduct = function(product) {
      return $http({
        method: 'POST',
        url: '/api/productinfo',
        data: product
      }).then(function(r) {
        console.log(r.status);
        if (r.status === 200) {
          return r.data;
        } else {
          return 'Error';
        }
      })
    },

    this.updateProduct = function(product) {
      return $http({
        method: 'PUT',
        url: '/api/productinfo/' + product._id,
        data: product
      })
    }


    this.deleteProduct = function(productId) {
      return $http({
        method: 'Delete',
        url: '/api/productinfo' + productId
      })
    }
  })
