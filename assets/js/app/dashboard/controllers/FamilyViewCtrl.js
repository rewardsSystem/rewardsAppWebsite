(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('FamilyViewCtrl', ['$scope', '$mdToast', function($scope, $mdToast) {
            
            $scope.pageProperties = {
                pageTitle: "Family"
            };

        }]);

})(angular)