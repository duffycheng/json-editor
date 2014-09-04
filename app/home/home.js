angular.module("jsonEditorApp")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl : "./home/home.html",
    controller : 'homeController'
  });
}])
.controller('homeController', ['$scope', '$http','jeaData', 'jeaForm', 'jsonStorage' , 'jsonData', function($scope, $http, jeaData, jeaForm, jsonStorage, jsonData){
	
	getData();

	$scope.shopForm = jeaForm;

	$scope.delete = function(index){
		jeaData.delete(index);
		jeaData.saveToStorage();
		getData();
	};

	function getData(){
		jeaData.get().then(function(data){
			$scope.shopData = jsonStorage.get(); 
		});
	};

}])