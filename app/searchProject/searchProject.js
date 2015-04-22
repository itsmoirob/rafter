angular.module('searchProjects', [
  'ui.router',
  'ngAnimate'
])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('rafter.searchProjects', {
      url:'/',
      views: {
        'searchReport@': {
          controller: 'MainCtrl',
          templateUrl: 'app/pages/seachReport.tmpl.html'
        }
      }
    })
    ;

    $urlRouterProvider.otherwise('/');
})

.service('RafterModel', function($http){
  var model = this,
      URLS = {
        FETCH:'php/index.php'
      },
      reports;

      function extract(result){
        return result.data;
      }

      function cacheReports(result) {
        reports = extract(result);
        return reports;
      }

      model.getReports = function() {
        return $http.get(URLS.FETCH).then(cacheReports);
      };

})

.controller('MainCtrl',  function ($scope, $log, RafterModel) {

  var MainCtrl = this;

  MainCtrl.reports = RafterModel.getReports();

  function setCurrentID(survey){
    $scope.currentID = survey;
    }

  RafterModel.getReports()
    .then(function(result){
    $scope.reports = result;
  });

  $scope.currentID = null;
  $scope.setCurrentID = setCurrentID;
})

;
