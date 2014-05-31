function HomeCtrl ($scope) {
	// body...
	$scope.test = function(a)
	{
		/*if(typeof(a) != 'object')
			alert(a);
		else
			alert(a.age);*/
		if(angular.isObject(a))
			alert(a.age);
		else
			alert(a)
	}
	$scope.people = {name: 'PPP', age: 20}
}