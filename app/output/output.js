angular.module("jsonEditorApp")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/output", {
    templateUrl : "./output/output.html",
    controller : 'outputController'
  });
}])
.controller('outputController', ['$scope', '$http', 'jsonStorage', function($scope, $http, jsonStorage){
	
	//shop data object, write to file system later
	$scope.jsonData = jsonStorage.get();
	$scope.sendToSever = function(){
		var data = $scope.jsonData;
		$http({
		    method: 'POST',
		    url: '/api/write',
		    data: data,
		    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		}).success(function(data, status, headers, config){
			console.log(status);
			console.log(headers);
			alert("output finished");
		}).error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(status);
			console.log(headers);
			alert("output error");
    	});
	};
}])