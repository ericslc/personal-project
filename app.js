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
  .state('cart',{
    url: '/cart',
    controller: 'productCtrl',
    templateUrl: '/views/cart.html'
  })
  .state('admin',{
    url: '/admin',
    controller: 'adminCtrl',
    templateUrl: '/views/admin.html'
  })
  .state('users',{
    url: '/users',
    controller: 'adminCtrl',
    templateUrl: '/views/users.html'
  })
  .state('inventory',{
    url: '/inventory',
    controller: 'productCtrl',
    templateUrl: '/views/inventory.html'
  })
  .state('signup', {
    url: '/signup',
    controller: 'adminCtrl',
    templateUrl: '/views/signup.html'
  })

  $urlRouterProvider.otherwise('/home');


})
