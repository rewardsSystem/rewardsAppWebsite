(function(ng) {

    'use strict';

    ng.module('dashboardApp', ['ngMaterial'])
        .config(function($mdThemingProvider) {
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
        });

})(angular)