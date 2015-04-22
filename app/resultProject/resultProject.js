angular.module('resultProjects', [
  'searchProjects',
  'ui.router',
  'ngAnimate'
])

.config(function($stateProvider){
  $stateProvider
  .state('rafter.resultProjects', {
    url:'/searchResult/:reportResult',
    views: {
      'searchReport@': {
        templateUrl: 'app/pages/resultSeachReport.tmpl.html',
        controller: 'resultCtrl'
      }
    }
  })
  ;
})
.controller('resultCtrl', function($scope,$stateParams){
  $scope.currentResultName = $stateParams.reportResult;
})
;
