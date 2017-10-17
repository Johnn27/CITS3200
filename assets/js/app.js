// assets/js/app.js

var app = angular.module("app", ['ngRoute', 'appRoutes', 'MainCtrl', 'GraphCtrl',
    'SourceCtrl', 'SourceService', 'RssService', 'angularjs-dropdown-multiselect'
])

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true
    delete $httpProvider.defaults.headers.common['X-Requested-With']
}])

app.directive('bsActiveLink', ['$location', function($location) {
    return {
        restrict: 'A', //use as attribute 
        replace: false,
        link: function(scope, elem) {
            //after the route has changed
            scope.$on("$routeChangeSuccess", function() {
                var hrefs = ['/#' + $location.path(),
                    '#' + $location.path(), //html5: false
                    $location.path()
                ]; //html5: true
                angular.forEach(elem.find('a'), function(a) {
                    a = angular.element(a);
                    if (-1 !== hrefs.indexOf(a.attr('href'))) {
                        a.parent().addClass('active');
                    } else {
                        a.parent().removeClass('active');
                    };
                });
            });
        }
    }
}]);

angular.module('appRoutes', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider

        // main page
            .when('/', {
            templateUrl: "assets/views/main.html",
            controller: "MainController"
        })

        .when('/source', {
            templateUrl: "assets/views/source.html",
            controller: "SourceController"
        })

        $locationProvider.html5Mode(true)
    }])

angular.module('SourceService', [])
    .factory('sourceAPIservice', ['$http', function($http) {

        var sourceAPI = {}

        sourceAPI.getSources = function() {
            return $http({
                    method: "GET",
                    url: "/api/sources"
                }).then(function(response) {
                    return response
                })
                .catch(function(error) {
                    console.error('ERROR: ', error)
                    throw error
                })
        }

        sourceAPI.addSource = function(sourceData) {
            return $http({
                method: "POST",
                url: "/api/sources",
                headers: {
                    'Content-Type': "application/json"
                },
                data: sourceData
            }).then(function(response) {
                return response
            })
        }

        sourceAPI.deleteSource = function(source_id) {
            return $http({
                    method: "DELETE",
                    url: "api/sources/" + source_id
                }).then(function(response) {
                    return response
                })
                .catch(function(error) {
                    console.error('ERROR: ', error)
                    throw error
                })
        }
        return sourceAPI
    }])

// RSS API calls

var Feedparser = require('feedparser')
var request = require('request')

angular.module('RssService', [])
    .factory('rssAPIservice', ['$http', function($http) {

            var rssAPI = {}

            rssAPI.getLinks = function(source) {

                var req = request(source.url)
                var feedparser = new Feedparser()

                req.on('error', function(error) {
                    // handle errors
                })

                req.on('response', function(res) {
                        var stream = this

                        if (res.statusCode !== 200) {
                            this.emit('error', new Error('Bad status code'))
                        } else {
                            stream.pipe(feedparser)
                        })
                })

            feedparser.on('error', function(error) {
                // handle errors
            })

            feedparser.on('readable', function() {
                    var stream = this
                    var meta = this.meta
                    var item

                    while (item = stream.read()) {
                        console.log(item)
                        return item
                    }
                })
                /*
                                    var proxy = "https://cors-anywhere.herokuapp.com/"
                                    var url = proxy + "https://www.inoreader.com/reader/api/0/stream/contents/feed/" +
                                        source.url +
                                        "?AppId=1000000612&AppKey=jrGE4gC_lD4ejlLjpACx6PeJRnLae80d"

                                    return $http({
                                        method: "GET",
                                        url: url,
                                        dataType: "jsonp",
                                        crossDomain: true,
                                        withCredentials: true,
                                        headers: {
                                            "Authorization": 1
                                        }
                                    }).then(function(response) {
                                        return response
                                    }).catch(function(error) {
                                        console.error('ERROR: ', error)
                                        throw error
                                    })
                    */
        }
        return rssAPI
    }])


// ref - https://stackoverflow.com/questions/16199418/how-to-set-bootstrap-navbar-active-class-with-angular-js
// ref - https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular