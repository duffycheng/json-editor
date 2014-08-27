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
.factory('jeaData', ['jsonStorage', 'jsonData',function(jsonStorage, jsonData){
	var displayData;
	jsonData().then(function(data){
		if(data && data !== ""){
			displayData = data;
			jsonStorage.put(data);
		}
	});
	return {
		get:function(){
			displayData = jsonStorage.get();
			return displayData;
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
