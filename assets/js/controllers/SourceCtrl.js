// assets/js/controllers/SourceCtrl.js

angular.module('SourceCtrl', ['angularjs-dropdown-multiselect'])
    .controller('SourceController', function($scope, sourceAPIservice) {
        $scope.sourceList = []
        $scope.deleteModel = []
        $scope.sourceName = ""
        $scope.sourceRSS = ""

        $scope.deleteSettings = {
            selectionLimit: 1,
            template: '<b>{{option.name}}</b>'
        }

        $scope.getSources = function() {
            sourceAPIservice.getSources().then(function(response) {
                $scope.sourceList = response.data
                console.log($scope.sourceList)
            })
        }

        $scope.submitCreate = function() {
            sourceData = {
                name: $scope.sourceName,
                url: $scope.sourceRSS
            }
            sourceAPIservice.addSource(sourceData).then(function(response) {
                $scope.sourceList = response.data
                console.log($scope.sourceList)
            })
        }

        $scope.submitDelete = function() {
            sourceID = $scope.deleteModel[0]._id
            sourceAPIservice.deleteSource(sourceID).then(function(response) {
                $scope.sourceList = response.data
                console.log($scope.sourceList)
            })
        }

    })