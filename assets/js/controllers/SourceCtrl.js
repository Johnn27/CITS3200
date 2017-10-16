// assets/js/controllers/SourceCtrl.js

angular.module('SourceCtrl', []).controller('SourceController', function($scope, sourceAPIservice) {
    $scope.sourceList = []
    $scope.nameFilter = null

    $scope.getSources = function() {
        sourceAPIservice.getSources().then(function(response) {
            $scope.sourceList = response.data
            $log.info($scope.sourceList)
        })
    }

})