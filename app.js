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
    templateUrl: '/views/products.html',
  })

  .state('boards',{
    url: '/boards',
    controller: 'productCtrl',
    templateUrl: '/views/boards.html',

  })
  .state('gear', {
    url: '/gear',
    controller: 'productCtrl',
    templateUrl: '/views/gear.html',

  })
  .state('sales', {
    url: '/sales',
    controller: 'productCtrl',
    templateUrl: 'views/sales.html',

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
