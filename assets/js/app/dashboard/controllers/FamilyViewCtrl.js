(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('FamilyViewCtrl', ['$scope', '$mdToast', 'pagePropertiesService', function($scope, $mdToast, pagePropertiesService) {
            
            pagePropertiesService.pageTitle = "Family";
            $scope.pageProperties = pagePropertiesService;

        }]);

})(angular)