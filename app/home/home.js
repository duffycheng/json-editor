angular.module("jsonEditorApp")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl : "./home/home.html",
    controller : 'homeController'
  });
}])
.controller('homeController', ['$scope', function($scope){
	$scope.shop={};
	//form structure, can define in an external json file
	$scope.shopForm=[{
		"name":"shopName",
		"type":"text",
		"model":"name",
		"placeholder":"Please enter the name of the shop"
	},
	{
		"name":"shopTel",
		"type":"number",
		"model":"tel",
		"placeholder":"Please enter the contact number"
	}];
	//shop data object, write to file system later
	$scope.shopData = [
		{
			"name": "Va Bene",
			"tel": 123456789
		},
		{
			"name": "McDonold",
			"tel": 123456789
		},
	];
	$scope.addShop = function(){
		$scope.shopData.push($scope.shop);
		$scope.shop={};
	};

}])