var favouriteControllers = angular.module('favouriteControllers', []);

favouriteControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
	$http.get('assets/js/data.json').success(function(data){
		$scope.artists = data;
		$scope.artistOrder = 'name';
	});
}]);

favouriteControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
	$http.get('assets/js/data.json').success(function(data){
		$scope.artists = data;
		$scope.whichItem = $routeParams.itemId;
	});
}]);