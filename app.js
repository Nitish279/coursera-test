(function() {
    'use strict';

    angular.module('firstAssignment', [])
        .controller('firstAssignmentCtrl', function($scope) {

            $scope.foodItems = '';
            $scope.checkContent = function() {

                if ($scope.foodItems.length === 0 || typeof $scope.foodItems === 'undefined') {
                    $scope.returnMsg = "Please enter data first";
                } else {
                    var itemsList = $scope.foodItems.split(/\s*,\s*/);
                    if (itemsList.length <= 3) {
                        $scope.returnMsg = "Enjoy";
                    } else {
                        $scope.returnMsg = "Too much!";
                    }
                }

            }

        });

})();