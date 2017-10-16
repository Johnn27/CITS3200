// assets/js/app.js

var app = angular.module("app", ['ngRoute', 'appRoutes', 'MainCtrl', 'GraphCtrl',
    'SourceCtrl', 'SourceService'
])


angular.module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider

        // main page
            .when('/', {
            templateUrl: 'assets/views/main.html',
            controller: 'MainController'
        })

        .when('/source', {
            templateUrl: 'assets/views/source.html',
            controller: 'SourceController'
        })

        $locationProvider.html5Mode(true)
    }])


angular.module('SourceService', []).factory('sourceAPIservice', ['$http', function($http) {

    var sourceAPI = {}

    sourceAPI.getSources = function() {
        return $http({
                method: 'GET',
                url: '/api/sources'
            }).then(function(response) {
                return responese.data
            })
            .catch(function(error) {
                console.error('ERROR: ', error)
                throw error
            })
    }

    sourceAPI.addSource = function() {
        return $http({
                method: 'POST',
                url: '/api/sources'
            }).then(function(response) {
                return response.data
            })
            .catch(function(error) {
                console.error('ERROR: ', error)
                throw error
            })
    }

    sourceAPI.deleteSource = function() {
        return $http({
                method: 'DELETE',
                url: 'api/sources/:source_id'
            }).then(function(response) {
                return response.data
            })
            .catch(function(error) {
                console.error('ERROR: ', error)
                throw error
            })
    }
    return sourceAPI
}])