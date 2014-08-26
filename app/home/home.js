angular.module("jsonEditorApp")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl : "./home/home.html",
    controller : 'homeController'
  });
}])
.controller('homeController', ['$scope', '$http','jeaData', 'jeaForm', 'jsonStorage', function($scope, $http, jeaData, jeaForm, jsonStorage){
	
	//shop data object, write to file system later
	$scope.shopData = jeaData.get();
	$scope.shopForm = jeaForm;

	$scope.delete = function(index){
		jeaData.delete(index);
		jeaData.saveToStorage();
	};

}])