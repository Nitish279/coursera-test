(function () {
'use strict';

angular.module('firstAssignment', [])
	.controller('firstAssignmentCtrl', function ($scope) {
		$scope.getItemsName = function(){
			var itemsList = $scope.foodItems.split(/\s*,\s*/);
			if (itemsList.length <= 3) {
				$scope.returnMsg = "Enjoy";
			} else {
				$scope.returnMsg = "Too much!";
			}
		}
	});
	
})();
