(function(ng) {
    
    'use strict';

    ng.module("dashboardApp")
        .factory("pagePropertiesService", function() {

                var pageProperties = {};

            return {
                pageProperties: pageProperties
            };
        });
        
})(angular)