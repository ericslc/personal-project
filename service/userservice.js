angular.module('myApp').service('userSvc', function($http){

  this.getUser= function(){
    return $http({
      method: 'GET',
      url: '/api/users'
    })
  };

  this.addUser = function(){
    return $http.post('/api/users', user);
  };

  this.updateUser = function(id){
    return $http.put('/api/users' + id, update);
  };

  this.deleteUser = function(id){
    return $http.delete('/api/users?id='+ id);
}
  this.getUserInfo = function() {
  return $http.get('/api/user/' + id);
    console.log(response);
};
this.newUser = function(user) {
  userService.newUser(user);
}

})
