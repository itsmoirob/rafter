angular.module('resultProjects', [
  'searchProjects',
  'ui.router',
  'ngAnimate',
  'highcharts-ng'
])

.config(function($stateProvider){
  $stateProvider
  .state('rafter.resultProjects', {
    url:'/searchResult/:reportResult',
    views: {
      'searchReport@': {
        templateUrl: 'app/pages/resultSearchReport.tmpl.html',
        controller: 'resultCtrl'
      }
    }
  })
  ;
})

.controller('resultCtrl', ['$scope', '$stateParams', '$http', function($scope,$stateParams,$http){

  $scope.currentResultName = $stateParams.reportResult;

  $http
    .get('php/record.php', {
      params: {
        id: $stateParams.reportResult
      }
    })
    .success(function (result,status) {
      $scope.currentResultReport = result;
    });

    $http
      .get('php/data.php', {
        params: {
          id: $stateParams.reportResult
        }
      })
      .success(function (result,status) {

        var score = [];
        for (var i = 0; i < result.length; i++) {
          score.push(result[i].subject_score);
        }

        $scope.angularScore = score;
        $scope.myChartData = result;
      });



    $scope.chartConfig = {
      options: {
        chart: {
          type: 'bar'
        }
      },
      series: [{
        data: [10, 15, 12, 8, 7]
      }],
      title: {
        text: 'Hello'
      },

      loading: false
    };

}])
;
