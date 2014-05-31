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
	$scope.products = [
		{name:"Coke", price:20},
		{name:"Pepsi", price:10},
		{name:"Banana", price:25},
		{name:"Fanta", price:30}
	]


}