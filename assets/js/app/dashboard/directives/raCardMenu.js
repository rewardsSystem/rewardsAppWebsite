(function(ng) {
    'use strict';
    ng.module('dashboardApp')
        .directive('raCardMenu', function() {

            var linker = function(scope, element, attr) {
                scope.showMenu = false;
                scope.openMenu = function($event){
                    scope.showMenu = !scope.showMenu;
                    $event.stopPropagation();
                };
            }

            return {
                link: linker,
                restrict: 'E',
                transclude: true,
                scope: {
                    familyMember: "=",
                    menuItems: "="
                },
                templateUrl: 'partials/raCardMenuTemplate.html'
            };
        });
})(angular)