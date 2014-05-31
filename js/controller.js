function HomeCtrl ($scope) {
	// body...
	$scope.is_show_answer = false;
	$scope.plus = function()
	{
		$scope.is_show_answer = true;
		$scope.answer = $scope.inputA + $scope.inputB;
	}

	$scope.minus = function()
	{
		$scope.is_show_answer = true;
		$scope.answer = $scope.inputA - $scope.inputB;
	}

	$scope.time = function()
	{
		$scope.is_show_answer = true;
		$scope.answer = $scope.inputA * $scope.inputB;
	}

	$scope.divided = function()
	{
		$scope.is_show_answer = true;
		$scope.answer = $scope.inputA / $scope.inputB;
	}
}