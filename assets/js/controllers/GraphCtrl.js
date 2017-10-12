// assets/js/controllers/GraphCtrl.js

var googleChart = angular.module('GraphCtrl', ['googlechart'])

/*googleChart.value('googleChartApiConfig', {
    version: '1',
    optionalSettings: {
        packages: ['corechart'],
        language: 'js'
    }
})
*/

googleChart.controller('GraphController', function($scope) {
    $scope.init = function() {
        $scope.chart = {}

        $scope.chart.type = "ColumnChart";
        $scope.chart.displayed = true;
        $scope.chart.cssStyle = "height: 600px; width: 100%";
        $scope.chart.data = {
            "cols": [{
                "label": "Product",
                "type": "string"
            }, {
                "label": "Agent",
                "type": "number"
            }, {
                "id": "Walkin",
                "label": "Walkin",
                "type": "number"
            }],
            "rows": [{
                "c": [{ "v": "Air" },
                    { "v": 19000 },
                    { "v": 15000 }
                ]
            }, {
                "c": [{ "v": "Hotel" },
                    { "v": 10000 },
                    { "v": 12000 }
                ]
            }, {
                "c": [{ "v": "Transfer" },
                    { "v": 15000 },
                    { "v": 12000 }
                ]
            }, {
                "c": [{ "v": "Sightseeing" },
                    { "v": 19000 },
                    { "v": 12000 }
                ]
            }, {
                "c": [{ "v": "Package" },
                    { "v": 19000 },
                    { "v": 12000 }
                ]
            }]
        }
        $scope.chart.options = {
            "title": "Product wise sales for each customer",
            "isStacked": "true",
            "fill": 20,
            "is3D": false,
            "colors": ["#28a6a8", "rgb(124, 124, 172)", "rgb(0, 227, 253)", "rgb(0, 206, 230)", "rgb(26, 110, 112)"],
            "animation": {
                "startup": true,
                "duration": 2000,
                "easing": "inAndOut"
            },
            "displayExactValues": false,
            "vAxis": {
                "title": "No of Bookings",
                "gridlines": { "count": 10 }
            },
            "hAxis": { "title": "Products" }
        }
    }


    $scope.init()
    $scope.selected = function(selectedItem) {
        alert("You selected " + $scope.chart.data.cols[selectedItem.column].label + " in " +
            $scope.chart.data.rows[selectedItem.row].c[0].v)
    }

    $scope.chartReady = function() {}

})