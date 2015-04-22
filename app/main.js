angular.module('rafter', [
  'searchProjects',
  'ui.router',
  'ngAnimate'
])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('rafter', {
        url:'',
        abstract: true
      })
      ;

      $urlRouterProvider.otherwise('/');
  })

;
