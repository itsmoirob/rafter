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

.service('RafterResult', function($http, $stateParams){
  var model = this,
      URLS = {
        FETCH:'php/record.php?id'
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
        return $http.get(URLS.FETCH,
        {params: {id: $stateParams.reportResult}}).then(cacheReports);
      };

})
.controller('resultCtrl', function($scope,$stateParams,RafterResult){

  $scope.currentResultName = $stateParams.reportResult;

  RafterResult.getReports()
    .then(function(result){
      $scope.currentResultReport = result;
    });

})
;
