angular.module("jsonEditorApp")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/edit/:index", {
    templateUrl : "./edit/edit.html",
    controller : 'editCtrl',
    resolve: {
    	originalData: ['$route', 'jeaData',function($route, jeaData){
    		return jeaData.get()[$route.current.params.index];
    	}]
    }
  });
}])
.controller('editCtrl', ['$scope', '$location','jeaForm', 'originalData', function($scope, $location, jeaData, originalData){
    $scope.index = index;
    $scope.originalData = originalData;

	//form structure, can define in an external json file
	$scope.shopForm=jeaForm;
	
	$scope.edit = function(){		
		$location.path("/");
	};

}])