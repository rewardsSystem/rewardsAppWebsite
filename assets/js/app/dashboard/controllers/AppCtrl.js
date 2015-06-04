(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('AppCtrl', ['$scope', 'cardService', '$mdToast', function($scope, cardService, $mdToast) {
            
            $scope.cards = []; 

            cardService.getCards()
                .success(function(cards){
                    $scope.cards = cards;
                })
                .error(function(error){
                    console.log("Error ", error);
                    $mdToast.show($mdToast.simple().position("bottom right").content("Error: " + error));
                });
        }]);

})(angular)