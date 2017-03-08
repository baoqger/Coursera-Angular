(function() {
	angular
		.module('LunchCheck',[])
		.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject = ['$scope'];	

	function LunchCheckController($scope){
		$scope.check = function(){
			if (!$scope.inputdata){
				$scope.message = "Please enter data first";
			} else {
				console.log($scope.inputdata.split(","))
				if ($scope.inputdata.split(",").length <= 3){
					$scope.message = "Enjoy!";
				} else {
					$scope.message = "Too much!";
				}
			}
		}
	}
})();