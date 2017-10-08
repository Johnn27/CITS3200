// assets/js/appRoutes.js

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