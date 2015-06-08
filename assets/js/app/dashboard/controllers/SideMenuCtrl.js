(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('SideMenuCtrl', ['$scope', '$mdToast','$window', '$state', function($scope, $mdToast, $window, $state) {
            $scope.menuItems = [
                { title: "My Family", action: "family", icon: "supervisor_account" },
                { title: "Settings", action: "settings", icon: "settings" },
                { title: "About", action: "about", icon: "info" },
                { title: "Logout", action: "logout", icon: "settings_power" }
            ];

            $scope.menuClicked = function(menu) {
                switch(menu) {
                    case "logout": 
                        $window.location = "/logout";
                        break;
                    case "family": 
                        $scope.pageProperties.pageTitle = "Family"
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