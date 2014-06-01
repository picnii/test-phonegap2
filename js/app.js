//angular.module('myApp', ["mobile-angular-ui"]);
var app = angular.module('grader', [
  "ngRoute",
  "mobile-angular-ui",
  "mobile-angular-ui.touch",
  "mobile-angular-ui.scrollable"
])

app.config(function($routeProvider) {
      $routeProvider.when('/', { 
         templateUrl: 'pages/home.html',
         controller: 'HomeCtrl'
      }).when('/win', { 
         templateUrl: 'pages/win.html',
         controller: 'WinCtrl'
      }).when('/highscore', { 
         templateUrl: 'pages/score.html',
         controller: 'HighCtrl'
      })
      // ...
  });

