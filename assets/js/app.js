// assets/js/app.js

var app = angular.module("app", ['ngRoute', 'appRoutes', 'MainCtrl', 'GraphCtrl', 'DropDownCtrl',
    'SourceService'
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
            method: 'JSONP',
            url: '/getSources'
        })
    }

    return sourceAPI
}])