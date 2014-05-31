function HomeCtrl ($scope) {
	// body...
	$scope.message = "Hi scope";
	$scope.tax = 7
	$scope.salary = 15000
	$scope.car = {color:"red", brand:"toyota"}
}

function ProfileCtrl ($scope) {
	// body...
	$scope.user = {
		name: "Sompop",
		age: 20,
		food: "ข้าวผัดกระเพรา"
	}
	$scope.salary = 15000

}