(function(ng) {

    'use strict';

    ng.module('dashboardApp')
    .controller('AppCtrl', ['$scope', function($scope) {
        $scope.test="Angular working...";
    }]);

})(angular)