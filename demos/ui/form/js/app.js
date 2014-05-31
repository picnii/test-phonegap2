//angular.module('myApp', ["mobile-angular-ui"]);
var app = angular.module('myApp', [
  "ngRoute",
  "mobile-angular-ui",
  "mobile-angular-ui.touch",
  "mobile-angular-ui.scrollable"
])

app.config(function($routeProvider) {
      $routeProvider.when('/', { 
         templateUrl: 'pages/login.html',
         controller: 'HomeCtrl'
      }).when('/register', { 
         templateUrl: 'pages/register.html',
         controller: 'RegisterCtrl'
      }).when('/profile', { 
         templateUrl: 'pages/profile.html',
         controller: 'ProfileCtrl'
      });

      // ...
  });

