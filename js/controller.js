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
		{name:"Coke", price:20, is_edit: false },
		{name:"Pepsi", price:10, is_edit: false },
		{name:"Banana", price:25, is_edit: false },
		{name:"Fanta", price:30, is_edit: false }
	]

	$scope.edit = function(item)
	{
		item.is_edit = true;
	}

	$scope.save = function(item)
	{
		item.is_edit = false;


	}





}