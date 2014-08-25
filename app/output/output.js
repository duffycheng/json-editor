angular.module("jsonEditorApp")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/output", {
    templateUrl : "./output/output.html",
    controller : 'outputController'
  });
}])
.controller('outputController', ['$scope', 'jsonStorage', function($scope, jsonStorage){
	
	//shop data object, write to file system later
	$scope.jsonData = jsonStorage.get();

}])