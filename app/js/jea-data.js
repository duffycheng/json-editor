//shop data object, write to file system later
angular.module("jsonEditorApp")
.constant('JSON_FILE','./js/data.json')
.factory('jsonData', ['$http', '$q', 'JSON_FILE',
   	function($http, $q, JSON_FILE) {
    var defer;
    return function() {
      if(!defer){
	      defer = $q.defer();
	      $http.get(JSON_FILE, {cache:true})
	        .success(function(data) {
	          defer.resolve(data);
	        });
       }
      return defer.promise;
    }
}])
.factory('jeaData', ['jsonStorage', 'jsonData', '$q',function(jsonStorage, jsonData, $q){
	var displayData, defer = $q.defer();
	
	displayData = jsonStorage.get();
	//when there is data in localStorage, resolve the data immediately, otherwise, get the data from jsonData
	if(displayData.length>0){
		defer.resolve(displayData);
	}else{
		jsonData().then(function(data){
			if(data && data !== ""){
				displayData = data;
				defer.resolve(data);
				jsonStorage.put(data);
			}
		});
	}
	
	return {
		get:function(){
			return defer.promise;
		},
		add:function(data){
			displayData.push(data);
		},
		delete:function(index){
			displayData.splice(index, 1);
		},
		saveToStorage:function(){
			jsonStorage.put(displayData);
		}
	};
}])
