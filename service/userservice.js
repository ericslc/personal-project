angular.module('myApp').service('userSvc', function($http){

  this.getUser= function(){
    return $http({
      method: 'GET',
      url: '/api/users'
    }).then(function(data){
      return data.data;
    },function(err){
      return err;
    });
  };

  this.addUser = function(){
    return $http.post('/api/users', user);
  };

  this.updateUser = function(){
    return $http.put('/api/users' + id, update);
  };

  this.deleteUser = function(){
    return $http.delete('/api/users' + id);
  };

})
