// assets/js/app.js

var app = angular.module("app", ['ngRoute', 'appRoutes', 'MainCtrl',
    'MainService', 'GraphCtrl', 'DropDownCtrl'
])


angular.module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider

        // main page
            .when('/', {
            templateUrl: 'assets/views/main.html',
            controller: 'MainController'
        })

        $locationProvider.html5Mode(true)
    }])


angular.module('MainService', []).factory('Main', ['$http', function($http) {
    return {
        // call to get 
    }
}])