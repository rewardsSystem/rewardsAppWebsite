(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('SettingsViewCtrl', ['$scope', '$mdToast', 'pagePropertiesService', function($scope, $mdToast, pagePropertiesService) {
            
            pagePropertiesService.pageTitle = "Settings";
            $scope.pageProperties = pagePropertiesService;

        }]);

})(angular)