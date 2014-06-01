function initCtrl($rootScope, $location)
{
	$rootScope.question_index = 0;
	$rootScope.questions = [
		{img: "http://www.siamdara.com/Picture_Girl/081203C1S4426.jpg", answer:"แกงส้ม" },
		{img: "http://1.bp.blogspot.com/-KEhWO3pJPzU/T2HE7S3sinI/AAAAAAAAABQ/aSzEQChfaps/s1600/%25E0%25B8%25AA%25E0%25B9%2589%25E0%25B8%25A1%25E0%25B8%2595%25E0%25B8%25B3%5B2%5D.jpg", answer:"ส้มตำ" },
		{img: "http://admin.ladytips.com/Images/News/images/2012/May/24/%E0%B8%95%E0%B8%B8%E0%B9%8A%E0%B8%81%E0%B8%95%E0%B8%B2/%E0%B9%80%E0%B8%AD%E0%B8%A3%E0%B8%B2%E0%B8%A7%E0%B8%B1%E0%B8%932.jpg", answer:"น้ำตก" },
		{img: "http://topicstock.pantip.com/food/topicstock/2010/11/D9869164/D9869164-0.jpg", answer:"ลาบ" },
		{img: "http://www.ezythaicooking.com/images/rf2-stir-fried-chinese-kale-with-oyster-sauce-2.jpg", answer:"ผัดคะน้า" }
	]
	$rootScope.is_win = false;

	var def_top_scores = [
		{name:"JOHN", score: 490},
		{name:"NY", score: 300},
		{name:"DAVE", score: 200},
		{name:"BROOK", score: 100}
	]


	$rootScope.load = function()
	{
		if(typeof localStorage['test_phonegap2'] == 'undefined')
			localStorage['test_phonegap2'] = JSON.stringify(def_top_scores);
		$rootScope.top_scores = JSON.parse(localStorage['test_phonegap2']);
	}

	$rootScope.save = function()
	{
		localStorage['test_phonegap2'] = JSON.stringify($rootScope.top_scores);
	}


	$rootScope.high_score = 0;
	$rootScope.high_score_name = "";
	$rootScope.checkWin = function()
	{
		if(!$rootScope.is_win)
			$location.path('/');
	}
	$rootScope.load();
}
app.run(initCtrl);

function HomeCtrl ($scope, $rootScope, $location) {
	// body...
	$scope.question_index = 0;

	$scope.img = $scope.questions[$scope.question_index].img;
	$scope.score = 0;
	$rootScope.is_new_record  = false;

	$scope.answer = function()
	{
		console.log('answer ' + $scope.input);
		console.log($scope.questions[$scope.question_index].answer)
		if($scope.input == $scope.questions[$scope.question_index].answer)
		{
			$scope.question_index++;
			if($scope.question_index < $scope.questions.length)
				$scope.img = $scope.questions[$scope.question_index].img;
			$scope.score += 100;
		}else
			$scope.score -= 10;
		$scope.input = "";
		if($scope.question_index == $scope.questions.length)
		{
			$rootScope.is_win = true;

			/*if($rootScope.high_score < $scope.score)
			{
				$rootScope.is_new_record = true;
				$rootScope.high_score = $scope.score;
			}*/

			for(var i =0; i < $rootScope.top_scores.length ;i++)
			{
				var top_score = $rootScope.top_scores[i];
				if(top_score.score < $scope.score)
				{
					$rootScope.top_score_index = i;
					$rootScope.is_new_record = true;
					break;
				}
			}


			$rootScope.current_score = $scope.score;
			$location.path('/win');	
		}
		
	}

}

function WinCtrl($scope, $location, $rootScope)
{
	$scope.checkWin();
	$scope.sendScore = function()
	{
		$rootScope.top_scores[$rootScope.top_score_index] = {
			name:$scope.name,
			score:$scope.current_score
		}
		$scope.save();
		//$rootScope.high_score_name = $scope.name;
		$location.path('highscore');
	}
}

function HighCtrl($scope, $rootScope)
{
	$scope.name = $rootScope.high_score_name;
	$scope.score = $rootScope.high_score;
}




