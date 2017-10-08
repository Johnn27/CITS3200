// assets/js/app.js

var app =   angular.module("app", ['ngRoute', 'appRoutes', 'MainCtrl', 
            'MainService', 'GraphCtrl'])


angular.module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider

        // main page
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainController'
            })

        // about page
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutController'
            })

        $locationProvider.html5Mode(true)
    }])
	

angular.module('MainService', []).factory('Main', ['$http', function($http) {
    return {
        // call to get 
    }
}])