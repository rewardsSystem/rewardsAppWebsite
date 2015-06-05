(function(ng) {
    
    "use strict";
    
    ng.module("dashboardApp")
    .factory("cardService", ['$http', function($http) {

        var getCards = function(userId) {
            return $http.get('/card');
        }

        return {
            getCards: getCards
        };

    }]);

})(angular);