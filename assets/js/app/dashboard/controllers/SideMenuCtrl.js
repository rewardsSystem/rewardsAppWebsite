(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('SideMenuCtrl', ['$scope', '$mdToast','$window', '$state', function($scope, $mdToast, $window, $state) {
            $scope.menuItems = [
                { title: "My Family", action: "family" },
                { title: "Settings", action: "settings" },
                { title: "About", action: "about" },
                { title: "Logout", action: "logout" }
            ];

            $scope.menuClicked = function(menu) {
                switch(menu) {
                    case "logout": 
                        $window.location = "/logout";
                        break;
                    case "family": 
                        $state.go('family');
                        break;
                    case "settings": 
                        $state.go('settings');
                        break;
                    case "about": 
                        $state.go('about');
                        break;
                    default:
                        $mdToast.show($mdToast.simple().position("bottom right").content(menu.toString()));
                        break;
                }
            }
           
        }]);

})(angular)