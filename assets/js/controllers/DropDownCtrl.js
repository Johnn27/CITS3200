angular.module('DropDownCtrl', []).controller('DropDownController', ['$scope', function($scope) {}])
    .directive('userDropdown', ['$document', function($document) {
        return {
            restrict: 'E',
            templateUrl: 'assets/html/user-dropdown.html',
            link: function(scope, element, attr) {
                scope.isUserDropdownVisible = false

                scope.toggleUserDropdown = function() {
                    console.log("Users")
                    scope.isUserDropdownVisible = !scope.isUserDropdownVisible
                }

                $document.bind('click', function(event) {
                    var isClickedElementChildOfPopup = element
                        .find(event.target)
                        .length > 0

                    if (isClickedElementChildOfPopup) return

                    scope.isUserDropdownVisible = false
                    scope.$apply()
                })
            }
        }
    }])
    .directive('projectDropdown', ['$document', function($document) {
        return {
            restrict: 'E',
            templateUrl: 'assets/html/project-dropdown.html',
            link: function(scope, element, attr) {
                scope.isProjectDropdownVisible = false

                scope.toggleProjectDropdown = function() {
                    console.log("Projects")
                    scope.isProjectDropdownVisible = !scope.isProjectDropdownVisible
                }

                $document.bind('click', function(event) {
                    var isClickedElementChildOfPopup = element
                        .find(event.target)
                        .length > 0

                    if (isClickedElementChildOfPopup) return

                    scope.isProjectDropdownVisible = false
                    scope.$apply()
                })
            }
        }
    }])