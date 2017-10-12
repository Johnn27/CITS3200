// assets/js/controllers/SourceCtrl.js

angular.module('SourceCtrl', []).controller('SourceController', function($scope, sourceAPIservice) {
    $scope.sourceList = []
    $scope.nameFilter = null

    sourceAPIservice.getSources().success(function(response) {
        $scope.sourceList = response.data
    })

})