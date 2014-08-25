//shop data object, write to file system later
angular.module("jsonEditorApp")
.factory('jeaData', ['jsonStorage',function(jsonStorage){
	var displayData = jsonStorage.get();
	return {
		get:function(){
			return displayData;
		},
		add:function(data){
			displayData.push(data);
		},
		saveToStorage:function(){
			jsonStorage.put(displayData);
		}
	};
}])