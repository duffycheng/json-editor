angular.module("jsonEditorApp")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/new", {
    templateUrl : "./new/new.html",
    controller : 'newCtrl'
  });
}])
.controller('newCtrl', ['$scope', function($scope){
	
}])