angular.module("jsonEditorApp")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl : "./home/home.html",
    controller : 'homeController'
  });
}])
.controller('homeController', ['$scope', '$http','jeaData', 'jeaForm', 'jsonStorage' , 'jsonData', function($scope, $http, jeaData, jeaForm, jsonStorage, jsonData){
	
	//in the begining, here called the jeaData.get() before the promise (jsonData()) resolve.....	
	if(jeaData.get().length <= 0){
		jsonData().then(function(data){
		if(data && data !== ""){
			$scope.shopData = data;
			 jsonStorage.put(data);
			}
		});
	}else{
		$scope.shopData = jeaData.get();
	}
	
	$scope.shopForm = jeaForm;

	$scope.delete = function(index){
		jeaData.delete(index);
		jeaData.saveToStorage();
	};

}])