// assets/js/controllers/MainCtrl.js

angular.module('MainCtrl', [])
    .controller('MainController', function($scope, sourceAPIservice) {
        $scope.sourceModel = {}
        $scope.timeModel = {}

        $scope.sourceSettings = { enableSearch: true }
        $scope.timeSettings = { selectionLimit: 1 }

        $scope.getSources = function() {
            sourceAPIservice.getSources().then(function(response) {
                $scope.sourceList = response.data
                $log.info($scope.sourceList)
            })
        }

        $scope.timeList = ['Daily', 'Weekly', 'Monthly']
    })