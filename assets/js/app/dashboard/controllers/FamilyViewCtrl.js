(function(ng) {

    'use strict';

    ng.module('dashboardApp')
        .controller('FamilyViewCtrl', ['$scope', '$mdToast', 'pagePropertiesService', '$state', 'familyService', 
            function($scope, $mdToast, pagePropertiesService, $state, familyService) {
            
                familyService.getMembers()
                    .then(function(members){ $scope.familyMembers = members; });

                pagePropertiesService.pageTitle = "Family";
                $scope.pageProperties = pagePropertiesService;

                $scope.memberClick = function(member) {
                     $state.go('member', {member: member});
                };

                $scope.deleteMember = function($event, member) {
                    // var fm = $scope.familyMembers.filter(function(m) { return m.name === member.name })[0];
                    // var memberIndex = $scope.familyMembers.indexOf(fm);
                    var memberIndex = $scope.familyMembers.indexOf(member);
                    if (memberIndex > -1) {
                        $scope.familyMembers.splice(memberIndex, 1);
                        console.log("Member deleted: " + member.name);
                    } else {
                        console.log("Error deleting: " + member.name);
                    }
                    $event.stopPropagation();
                }

                $scope.menuItems = [
                    { title: 'remove', icon: 'delete', action: $scope.deleteMember },
                    { title: 'edit', icon: 'mode_edit', action: function($event, member) { 
                            $state.go('deleteMember', { member: member }); 
                            $event.stopPropagation(); 
                        }
                    }
                ];
            }]);

})(angular)