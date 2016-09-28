var myApp = angular.module('myApp', ['ngRoute', 'favouriteControllers']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/list',{
		templateUrl: 'assets/partials/list.html',
		controller: 'ListController'
	}).
	when('/details/:itemId',{
		templateUrl: 'assets/partials/details.html',
		controller: 'DetailsController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);