angular.module('myApp', ['ui.router'])
angular.module('myApp').config(function ($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('home', {
    url: '/home',
    controller: 'mainCtrl',
    templateUrl: '/views/home.html'
  })







  $urlRouterProvider.otherwise('/home');


})
