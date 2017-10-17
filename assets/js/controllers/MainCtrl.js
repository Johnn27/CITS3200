// assets/js/controllers/MainCtrl.js

angular.module('MainCtrl', ['angularjs-dropdown-multiselect'])
    .controller('MainController', function($scope, sourceAPIservice, rssAPIservice) {
        $scope.sourceModel = []
        $scope.timeModel = []

        $scope.mainSettings = {
            enableSearch: true,
            template: '<b>{{option.name}}</b>'
        }

        $scope.timeSettings = {
            selectionLimit: 1
        }

        $scope.getSources = function() {
            sourceAPIservice.getSources().then(function(response) {
                $scope.sourceList = response.data
                console.log($scope.sourceList)
            })
        }

        $scope.timeList = [{
            id: 1,
            label: "Daily"
        }, {
            id: 2,
            label: "Weekly"
        }, {
            id: 3,
            label: "Monthly"
        }]

        $scope.keywords = ""

        $scope.searchSources = function() {
                rssAPIservice.getLinks($scope.sourceModel[0]).then(function(response) {
                    $scope.rssout = response.items[i]
                })
            }
            /*
            google.load("feeds", "1")

            $scope.searchSources = function() {
                var feed = new google.feeds.Feed($scope.sourceModel[0].url)
                feed.load(function(result) {
                    if (!result.error) {
                        var entry = result.feed.entries[0]
                        $scope.rssout = entry
                        console.log(entry)
                    }
                })
            }
            */
    })