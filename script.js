var rootApp = angular.module('rootApp', ['docsRestrictDirective','google-chart-sample']);


  var moduleA = angular.module('docsRestrictDirective', []);
  moduleA.controller('Controller', ['$scope', function($scope) {}])
    .directive('userDropdown', ['$document', function($document) {
      return {
        restrict: 'E',
        templateUrl: 'user-dropdown.html',
        link: function(scope, element, attr) {
          scope.isUserDropdownVisible = false;

          scope.toggleUserDropdown = function() {
            console.log("Users");
            scope.isUserDropdownVisible = !scope.isUserDropdownVisible;
          }

          $document.bind('click', function(event) {
            var isClickedElementChildOfPopup = element
              .find(event.target)
              .length > 0;

            if (isClickedElementChildOfPopup)
              return;

            scope.isUserDropdownVisible = false;
            scope.$apply();
          });
        }
      };
    }])
    .directive('projectDropdown', ['$document', function($document) {
      return {
        restrict: 'E',
        templateUrl: 'project-dropdown.html',
        link: function(scope, element, attr) {
          scope.isProjectDropdownVisible = false;

          scope.toggleProjectDropdown = function() {
            console.log("Projects");
            scope.isProjectDropdownVisible = !scope.isProjectDropdownVisible;
          }

          $document.bind('click', function(event) {
            var isClickedElementChildOfPopup = element
              .find(event.target)
              .length > 0;

            if (isClickedElementChildOfPopup)
              return;

            scope.isProjectDropdownVisible = false;
            scope.$apply();
          });
        }
      };
    }]);


  var moduleB = angular.module('google-chart-sample', ['googlechart']).value('googleChartApiConfig', {
      version: '1',
      optionalSettings: {
        packages: ['corechart'],
        language: 'ja'
      }
    });
    
    moduleB.controller("SampleCtrl", function($scope, $http) {
      $scope.init = function() {
        $http.get('data.json').success(function(data) {
          $scope.chart = data;
        });
        $http.get('data1.json').success(function(data) {
          $scope.chart1 = data;
        });
      };

      $scope.init();
      $scope.selected = function(selectedItem) {
        alert("You selected " + $scope.chart.data.cols[selectedItem.column].label + " in " +
          $scope.chart.data.rows[selectedItem.row].c[0].v);
      };


      $scope.selected1 = function(selectedItem) {
        alert("You selected " + $scope.chart1.data.cols[selectedItem.column].label + " in " +
          $scope.chart1.data.rows[selectedItem.row].c[0].v);
      };

      $scope.chartReady = function() {
      };
      
    });


