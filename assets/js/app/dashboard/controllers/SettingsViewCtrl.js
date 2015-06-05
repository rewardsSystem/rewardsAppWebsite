(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('SettingsViewCtrl', ['$scope', '$mdToast', function($scope, $mdToast) {
            
            $scope.pageProperties = {
                pageTitle: "Settings"
            };

        }]);

})(angular)