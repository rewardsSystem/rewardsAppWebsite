(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('AboutViewCtrl', ['$scope', '$mdToast', function($scope, $mdToast) {
            
            $scope.pageProperties = {
                pageTitle: "About"
            };

        }]);

})(angular)