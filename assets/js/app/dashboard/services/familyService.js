(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .factory('familyService', ['$q', function($q){
            var getFamilyMembers = function(userId) {
                var defer = $q.defer();

                defer.resolve([{
                    picture: '/images/silhouette.png',
                    name: 'Jonathan',
                    dayProgress: 30,
                    weekProgress: 50,
                    monthProgress: 78
                },{
                    picture: '/images/silhouette.png',
                    name: 'Ovi',
                    dayProgress: 30,
                    weekProgress: 50,
                    monthProgress: 78
                },{
                    picture: '/images/silhouette.png',
                    name: 'Ernesto',
                    dayProgress: 30,
                    weekProgress: 50,
                    monthProgress: 78
                },{
                    picture: '/images/silhouette.png',
                    name: 'Ernestico',
                    dayProgress: 30,
                    weekProgress: 50,
                    monthProgress: 78
                },{
                    picture: '/images/silhouette.png',
                    name: 'Nora',
                    dayProgress: 30,
                    weekProgress: 50,
                    monthProgress: 78
                }]);

                return defer.promise;
            }

            return {
                getMembers: getFamilyMembers
            }
        }])

})(angular)