angular.module('myApp', ['ui.router'])
angular.module('myApp').config(function ($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('home', {
    url: '/home',
    controller: 'mainCtrl',
    templateUrl: '/views/home.html'
  })
  .state('products',{
    url:'/products',
    controller: 'productCtrl',
    templateUrl: '/views/products.html'
  })
  .state('contact',{
    url: '/contact',
    controller: 'mainCtrl',
    templateUrl: '/views/contact.html'
  })
  .state('admin',{
    url: '/admin',
    controller: 'adminCtrl',
    templateUrl: '/views/admin.html'
  })

  $urlRouterProvider.otherwise('/home');


})
