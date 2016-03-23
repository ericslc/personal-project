angular.module('myApp').service('gearSvc',function($http){
  this.getGear= function(){
    return $http({
      method: 'GET',
      url: '/api/gear'
    });
  };

  this.newGear = function(){
    return $http({
      method: 'POST',
      url: '/api/gear'
    })
  };

  this.updateGear = function() {
    return $http({
    method: 'PUT',
    url: '/api/gear' + id
  });
};
this.deleteGear = function(){
  return $http({
    method: 'DELETE',
    url: '/api/gear' + id
  })
}
})
