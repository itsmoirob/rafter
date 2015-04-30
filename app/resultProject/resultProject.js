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

      var descriptionScore = [];
      for (var i = 0; i < result.description.length; i++) {
        descriptionScore.push(result.description[i].subject_score);
      }

      var descriptionName = [];
      for (i = 0; i < result.description.length; i++) {
        descriptionName.push(result.description[i].subject_name);
      }

      var workmanshipScore = [];
      for (i = 0; i < result.workmanship.length; i++) {
        workmanshipScore.push(result.workmanship[i].subject_score);
      }

      var workmanshipName = [];
      for (i = 0; i < result.workmanship.length; i++) {
        workmanshipName.push(result.workmanship[i].subject_name);
      }

      var pvScore = [];
      for (i = 0; i < result.pv.length; i++) {
        pvScore.push(result.pv[i].subject_score);
      }

      var pvName = [];
      for (i = 0; i < result.pv.length; i++) {
        pvName.push(result.pv[i].subject_name);
      }

      var salesScore = [];
      for (i = 0; i < result.sales.length; i++) {
        salesScore.push(result.sales[i].subject_score);
      }

      var salesName = [];
      for (i = 0; i < result.sales.length; i++) {
        salesName.push(result.sales[i].subject_name);
      }

      $scope.descriptionChartConfig = {
        options: {
          chart: {
            type: 'column'
          }
        },
        xAxis: {
            categories: descriptionName
        },
        series: [{
          name: 'Description',
          data: descriptionScore
        }],
        title: {
          text: ''
        },

        loading: false
      };

      $scope.workmanshipChartConfig = {
        options: {
          chart: {
            type: 'column'
          }
        },
        xAxis: {
            categories: workmanshipName
        },
        series: [{
          name: 'Workmanship',
          data: workmanshipScore
        }],
        title: {
          text: ''
        },

        loading: false
      };

      $scope.pvChartConfig = {
        options: {
          chart: {
            type: 'column'
          }
        },
        xAxis: {
            categories: pvName
        },
        series: [{
          name: 'PV',
          data: pvScore
        }],
        title: {
          text: ''
        },

        loading: false
      };

      $scope.salesChartConfig = {
        options: {
          chart: {
            type: 'column'
          }
        },
        xAxis: {
            categories: salesName
        },
        series: [{
          name: 'Sales',
          data: salesScore
        }],
        title: {
          text: ''
        },

        loading: false
      };
    });

}])
;
