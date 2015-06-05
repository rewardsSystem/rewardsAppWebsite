(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('FamilyViewCtrl', ['$scope', '$mdToast', 'pagePropertiesService', '$state', function($scope, $mdToast, pagePropertiesService, $state) {
            
            $scope.familyMembers = [{
                picture: '/images/silhouette.png',
                name: 'Jonathan Calvet',
                dayProgress: 30,
                weekProgress: 50,
                monthProgress: 78
            },{
                picture: '/images/silhouette.png',
                name: 'Ovi Calvet',
                dayProgress: 30,
                weekProgress: 50,
                monthProgress: 78
            },{
                picture: '/images/silhouette.png',
                name: 'Ernesto Iser',
                dayProgress: 30,
                weekProgress: 50,
                monthProgress: 78
            },{
                picture: '/images/silhouette.png',
                name: 'Ernestico Iser',
                dayProgress: 30,
                weekProgress: 50,
                monthProgress: 78
            },{
                picture: '/images/silhouette.png',
                name: 'Nora Iser',
                dayProgress: 30,
                weekProgress: 50,
                monthProgress: 78
            }];

            pagePropertiesService.pageTitle = "Family";
            $scope.pageProperties = pagePropertiesService;

            $scope.memberClick = function(member) {
                 $state.go('member', {member: member});
            }
        }]);

})(angular)