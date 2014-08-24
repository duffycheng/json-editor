angular.module("jsonEditorApp")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl : "./home/home.html",
    controller : 'homeController'
  });
}])
.controller('homeController', ['$scope','jeaData', function($scope, jeaData){
	
	//shop data object, write to file system later
	$scope.shopData = jeaData.get();

}])