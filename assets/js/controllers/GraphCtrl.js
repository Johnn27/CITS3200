// assets/js/controllers/GraphCtrl.js

var googleChart = angular.module('GraphCtrl', ['googlechart']).value('googleChartApiConfig', {
    version: '1',
    optionalSettings: {
      packages: ['corechart'],
      language: 'ja'
    }
  }) 
  
googleChart.controller('GraphController', function($scope, $http) {
    $scope.init = function() {
        $http.get('data.json').then(function(data) {
            $scope.chart = data
        })
    }

    $scope.init()
    $scope.selected = function(selectedItem) {
        alert("You selected " + $scope.chart.data.cols[selectedItem.column].label + " in " +
              $scope.chart.data.rows[selectedItem.row].c[0].v)
    }

    $scope.chartReady = function() {
    }
    
})