function HomeCtrl ($scope) {
	// body...
	$scope.is_show_grade = false;
	$scope.calculate = function()
	{
		$scope.is_show_grade = true;
		if($scope.score > 100 || $scope.score < 0)
			$scope.grade = "Impossible"
		else if($scope.score >= 80)
			$scope.grade = "A";
		else if($scope.score >= 70)
			$scope.grade = "B";
		else if($scope.score >= 60)
			$scope.grade = "C";
		else if($scope.score >= 50)
			$scope.grade = "D";
		else
			$scope.grade = "F";
	}
}