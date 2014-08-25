angular.module("jsonEditorApp")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/new", {
    templateUrl : "./new/new.html",
    controller : 'newCtrl'
  });
}])
.controller('newCtrl', ['$scope', '$location','jeaData','jeaForm', function($scope, $location, jeaData, jeaForm){
	$scope.shop={};
	//form structure, can define in an external json file
	$scope.shopForm=jeaForm;
	
	$scope.addShop = function(){
		jeaData.add($scope.shop);
		jeaData.saveToStorage();
		$location.path("/");
	};

}])