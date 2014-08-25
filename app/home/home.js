angular.module("jsonEditorApp")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl : "./home/home.html",
    controller : 'homeController'
  });
}])
.controller('homeController', ['$scope', '$http','jeaData', function($scope, $http, jeaData){
	
	//shop data object, write to file system later
	$scope.shopData = jeaData.get();

	$scope.output = function(){
		// $http.put(API_URL + '/urls/' + entry.id, form).success(ready);
		

		$http.get('http://localhost:8888/api/output')
		.success(function(data) {
			
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	};

}])