(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('MemberViewCtrl', ['$scope', '$mdToast', 'pagePropertiesService', '$stateParams', function($scope, $mdToast, pagePropertiesService, $stateParams) {
            
            pagePropertiesService.pageTitle = "Family - Member";
            $scope.pageProperties = pagePropertiesService;

            $scope.member = $stateParams.member;

            console.log("member", $stateParams.member);

        }]);

})(angular)