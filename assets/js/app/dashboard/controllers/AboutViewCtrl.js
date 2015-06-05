(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('AboutViewCtrl', ['$scope', '$mdToast', 'pagePropertiesService', function($scope, $mdToast, pagePropertiesService) {
            
            pagePropertiesService.pageTitle = "About";
            $scope.pageProperties = pagePropertiesService;

        }]);

})(angular)