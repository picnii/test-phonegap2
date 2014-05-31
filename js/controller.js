function HomeCtrl ($scope) {
	// body...
	$scope.is_show_grade = false;
	$scope.calculate = function()
	{
		$scope.is_show_grade = true;
		if($scope.score == 0)
			$scope.grade = "F"
		else
			$scope.grade = "P";

	}
}