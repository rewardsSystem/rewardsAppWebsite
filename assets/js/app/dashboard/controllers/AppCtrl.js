(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('AppCtrl', ['$scope', '$mdToast', 'pagePropertiesService', function($scope, $mdToast, pagePropertiesService) {
            
            pagePropertiesService.pageTitle = "Dashboard";
            $scope.pageProperties = pagePropertiesService;

            $scope.cards = [{
                title: "Some Title",
                content: "Card content"
            }]; 

            // cardService.getCards()
            //     .success(function(cards){
            //         $scope.cards = cards;
            //     })
            //     .error(function(error){
            //         console.log("Error ", error);
            //         $mdToast.show($mdToast.simple().position("bottom right").content("Error: " + error));
            //     });
        }]);

})(angular)