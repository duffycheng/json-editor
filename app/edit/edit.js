angular.module("jsonEditorApp")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/", {
    templateUrl : "./edit/edit.html",
    controller : 'editCtrl'
  });
}]);