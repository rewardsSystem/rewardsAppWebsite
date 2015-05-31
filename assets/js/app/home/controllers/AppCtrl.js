(function(ng) {

    'use strict';

    ng.module('homeApp')
        .controller('AppCtrl', ['$scope', function($scope) {
            $scope.test = "Angular working";
        }]);

})(angular)