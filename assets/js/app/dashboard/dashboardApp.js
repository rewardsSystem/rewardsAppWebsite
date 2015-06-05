(function(ng) {

    'use strict';

    ng.module('dashboardApp', ['ngMaterial', 'ui.router'])
        .config(function($mdThemingProvider, $urlRouterProvider, $stateProvider) {
          $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                'default': '800',
                'hue-1': '50',
                'hue-2': '400',
                'hue-3': '700'
            })
            .warnPalette('deep-orange', {
                'default': '300',
                'hue-1': '50',
                'hue-2': '500',
                'hue-3': '800'
            })
            .accentPalette('teal', {
                'default': '100',
                'hue-1': '50',
                'hue-2': '500',
                'hue-3': '900'
            });

            $urlRouterProvider.otherwise("/family");
              //
              // Now set up the states
            $stateProvider
                .state('family', {
                  url: "/family",
                  controller: "FamilyViewCtrl",
                  templateUrl: "partials/family.html"
                })
                .state('member', {
                  url: "/family/member",
                  controller: "MemberViewCtrl",
                  params: { member: null },
                  templateUrl: "partials/member.html"
                })
                .state('settings', {
                  url: "/settings",
                  controller: "SettingsViewCtrl",
                  templateUrl: "partials/settings.html"
                })
                .state('about', {
                  url: "/about",
                  controller: "AboutViewCtrl",
                  templateUrl: "partials/about.html"
                });
        });

})(angular)