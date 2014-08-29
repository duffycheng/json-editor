angular.module("jsonEditorApp")
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when("/edit/:index", {
    templateUrl : "./edit/edit.html",
    controller : 'editCtrl',
    resolve: {
    	index: ['$route',function($route){
    		return $route.current.params.index;
    	}],
    	originalData: ['$route', 'jeaData',function($route, jeaData){
    		return jeaData.get().then(function(data){
                return data[$route.current.params.index];
            });
    	}]
    }
  });
}])
.controller('editCtrl', ['$scope', '$location','jeaData', 'jeaForm', 'index', 'originalData', function($scope, $location, jeaData, jeaForm, index, originalData){
    $scope.index = index;
    $scope.originalData = originalData;

	$scope.shopForm=jeaForm;
	
	$scope.edit = function(){	   
        jeaData.saveToStorage();
        	
		$location.path("/");
	};

}])