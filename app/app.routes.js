angular.module('appRoutes',['ngRoute'])

.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('',{
		templateUrl: 'app/pages/home.html'
	})


	$locationProvider.html5Mode(true);
})
;
